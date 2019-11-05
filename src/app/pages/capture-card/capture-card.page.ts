import { Component, OnInit } from '@angular/core';
import { CameraCaptureService } from '../../providers/camera-capture.service';
import { LoadingController } from '@ionic/angular';
import { ImageVisionService } from "../../providers/image-vision.service";
import { Card } from "./card";

@Component({
  selector: 'capture-card',
  templateUrl: './capture-card.page.html',
  styleUrls: ['./capture-card.page.scss'],
})
export class CaptureCardPage implements OnInit {

  cardDetails: Card = {
    amount:123,
    barCodeNo: 12,
    org: "121",
    logoUrl:"test"
  }

  loading = null;

  constructor(private capture:CameraCaptureService,
    public loadingController: LoadingController,
    private vision: ImageVisionService) { }

  ngOnInit() {
    console.log("scan card init called");
    this.captureImageAndProcess();
  }


  private captureImageAndProcess() {
    this.capture.capture().then((imageData) => {
      this.presentLoading();
      console.log(imageData);
      console.log("Yahoo captured image");
      this.vision.getLabels(imageData).subscribe(async (result) => {
        console.log(result.json());
        this.processVisionResult(result.json());
        this.loading.dismiss();
      }, err => {
        console.log("error occurred in processing image");
        console.log(err);
      });
    }, (err) => {
      console.log("error occurred in capturing image");
    });
  }

  processVisionResult(result: { responses: any[]; }){
      if(result!=null && result.responses != null && result.responses.length > 0){
        let response = result.responses[0];
        if(response.logoAnnotations != null && response.logoAnnotations.length > 0){
          this.cardDetails.org = response.logoAnnotations[0].description;
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
