import { Component, OnInit } from '@angular/core';
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

  logoScanned : boolean = false;
 
  cardDetails: Card = {
    amount:0,
    barCodeNo: 0,
    company: new Company()
  }

  loading = null;

  constructor(private capture:CameraCaptureService,
    public loadingController: LoadingController,
    private vision: ImageVisionService) { }

  ngOnInit() {
    console.log("scan card init called");
    //this.captureImageAndProcess();
  }


  private captureImageAndProcess() {
    this.capture.capture().then((imageData) => {
      this.presentLoading();
      console.log(imageData);
      console.log("Yahoo captured image");
      this.vision.getLabels(imageData).subscribe(async (result) => {
        console.log(result.json());
        this.processVisionResult(result.json());
        this.vision.getLogo(this.cardDetails.company.org).subscribe(async(result)=>{
          this.getLogoUrl(result.json());
        })
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
    this.cardDetails.company.logoUrl = searchItems[0]["cse_image"][0]["src"];
    for(let i=0;i<searchItems.length;i++){
        let url = searchItems[i]["cse_image"][0]["src"];
        if(url.includes("logo")){
          this.cardDetails.company.logoUrl = url;
        }
    }
  }

  processVisionResult(result: { responses: any[]; }){
    debugger;
      if(result!=null && result.responses != null && result.responses.length > 0){
        let response = result.responses[0];
        if(response.logoAnnotations != null && response.logoAnnotations.length > 0){
          this.cardDetails.company.org = response.logoAnnotations[0].description;
        }
      } 
  }

  handleScanClick(evt: any){
    this.captureImageAndProcess();
  }
  handleDoneClick(evt:any){
      alert("card details captured: "+JSON.stringify(this.cardDetails))
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
