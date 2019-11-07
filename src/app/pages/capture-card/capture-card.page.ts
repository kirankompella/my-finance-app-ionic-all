import { Component, OnInit } from '@angular/core';
import { CameraCaptureService } from '../../providers/camera-capture.service';
import { LoadingController } from '@ionic/angular';
import { ImageVisionService } from "../../providers/image-vision.service";
import { Card } from "../../models/card";
import { BarCodeComponent} from "../../components/bar-code/bar-code.component";
import { Company } from '../../models/company';
import {CompanyDetailsComponent} from "../../components/company-details/company-details.component";

@Component({
  selector: 'capture-card',
  templateUrl: './capture-card.page.html',
  styleUrls: ['./capture-card.page.scss'],
})
export class CaptureCardPage implements OnInit {

  public showCompanyDetails =false;
  cardIdentifierData = {};

  constructor(){

  }
  ngOnInit(): void{
    
  }

  get updateBarCodeResultFunc(){
    return this.updateBarCodeResult.bind(this);
  }

  updateBarCodeResult(scannedData:any){
    this.cardIdentifierData["barCodeData"] = scannedData;
    console.log("canned Data: "+ JSON.stringify(scannedData));
    alert("Final Bar code Data: "+JSON.stringify(scannedData));
    this.showCompanyDetails = true;
  }
}
