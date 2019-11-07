import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../../models/company';
import { Card } from '../../models/card';
import { CameraCaptureService } from '../../providers/camera-capture.service';
import { LoadingController } from '@ionic/angular';
import { ImageVisionService } from '../../providers/image-vision.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
})
export class CompanyDetailsComponent implements OnInit {

  @Input() updateCompanyDetails: Function;
  logoScanned : boolean = false;

  company:Company = new Company()
 
  

  loading = null;

  constructor(private capture:CameraCaptureService,
    public loadingController: LoadingController,
    private vision: ImageVisionService) { }

  ngOnInit() {
    console.log("scan card init called");
    //this.captureImageAndProcess();
  }


  private captureImageAndProcess() {
    /*this.vision.getLogo("quick trip").subscribe(async(result)=>{
      this.getLogoUrl(result.json());
      this.logoScanned = true;
    });*/
    this.capture.capture().then((imageData) => {
      this.presentLoading();
      console.log(imageData);
      console.log("Yahoo captured image");
      this.vision.getLabels(imageData).subscribe(async (result) => {
        console.log(result.json());
        this.processVisionResult(result.json());
        this.vision.getLogo(this.company.org).subscribe(async(result)=>{
          
          console.log(result.json())
          this.getLogoUrl(result.json());
          this.updateCompanyDetails(this.company);
          this.logoScanned = true;
        });
        this.loading.dismiss();
      }, err => {
        console.log("error occurred in processing image");
        console.log(err);
      });
    }, (err) => {
      console.log("error occurred in capturing image");
    });
  }

  getLogoUrl(searchResults:JSON){
    debugger;
    let searchItems = searchResults["items"];
    if(searchItems[0].pagemap.organization!= null && searchItems[0].pagemap.organization.length>0 && searchItems[0].pagemap.organization[0].logo!=null){
      this.company.logoUrl = searchItems[0].pagemap.organization[0].logo;
    }else{
      this.company.logoUrl = searchItems[0].pagemap["cse_image"][0]["src"];
      for(let i=0;i<searchItems.length;i++){
        try{
          let url = searchItems[i].pagemap["cse_image"][0]["src"];
          if(url.includes("logo")){
            this.company.logoUrl = url;
          }
        }catch(err){
          console.log(err);
        }
      }
    }
    
    
  }

  processVisionResult(result: { responses: any[]; }){
    debugger;
      if(result!=null && result.responses != null && result.responses.length > 0){
        let response = result.responses[0];
        if(response.logoAnnotations != null && response.logoAnnotations.length > 0){
          alert("company name: "+response.logoAnnotations[0].description);
          this.company.org = response.logoAnnotations[0].description;
        }
      } 
  }

  handleScanClick(evt: any){
    this.captureImageAndProcess();
  }
  

  async presentLoading() {
     this.loading = await this.loadingController.create({
      message: 'Please Wait...',
      translucent: true
    });
    await this.loading.present();

    const { role, data } = await this.loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

}
