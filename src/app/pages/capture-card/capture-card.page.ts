import { Component, OnInit, OnDestroy } from '@angular/core';
import { CameraCaptureService } from '../../providers/camera-capture.service';
import { LoadingController } from '@ionic/angular';
import { ImageVisionService } from "../../providers/image-vision.service";
import { Card } from "../../models/card";
import { BarCodeComponent} from "../../components/bar-code/bar-code.component";
import { Company } from '../../models/company';
import {CompanyDetailsComponent} from "../../components/company-details/company-details.component";
import { BarCode } from '../../models/barcode';
import { BarCodeData } from '../../interfaces/bar-code-data';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Sim } from '@ionic-native/sim/ngx';
import { NetworkCaptureService } from '../../providers/network-connection.service';

@Component({
  selector: 'capture-card',
  templateUrl: './capture-card.page.html',
  styleUrls: ['./capture-card.page.scss'],
})
export class CaptureCardPage implements OnInit,OnDestroy {
  

  public showCompanyDetails =false;
  receivedCardDetails: boolean =false;
  scannedData : BarCodeData= {text:"",format:"",cancelled:true} 
  company:Company = new Company()
  cardDetails: Card;
  showScanner: boolean = false;
  uniqueId:UniqueDeviceID;

  constructor(private uniqueDeviceID: UniqueDeviceID,private sim: Sim,private networkCaptureService:NetworkCaptureService){
    this.cardDetails= {
      barCode: this.scannedData,
      company: this.company
    }
    this.uniqueId = uniqueDeviceID;
   
   
    
}
  ngOnInit(): void{
    this.networkCaptureService.startConnectionSubscribe();
    this.networkCaptureService.startDisconnectionSubscribe();
  }

    

  get updateBarCodeResultFunc(){
    return this.updateBarCodeResult.bind(this);
  }

  get updateCompanyDetailsFunc(){
    return this.updateCompanyDetails.bind(this);
    
  }

  updateBarCodeResult(scannedData:any){
    this.cardDetails.barCode = scannedData;
    console.log("scanned Data: "+ JSON.stringify(scannedData));
    alert("Final Bar code Data: "+JSON.stringify(scannedData));
    this.showCompanyDetails = true;
    if(this.cardDetails.company.org!='' && this.cardDetails.barCode.text!=''){
      this.receivedCardDetails = true;
    }
  }
  updateCompanyDetails(companyDetails:any){
    this.cardDetails.company= companyDetails;
    if(this.cardDetails.company.org!='' && this.cardDetails.barCode.text!=''){
      this.receivedCardDetails = true;
      alert(JSON.stringify(this.cardDetails));  
    }
  }

  handleDoneClick(evt:any){
    alert("card details captured: "+JSON.stringify(this.cardDetails));
    try{
      this.uniqueId.get()
      .then((uuid: any) => alert("whoohoo device id"+uuid))
      .catch((error: any) => console.log(error));
    }catch(err){
      console.log(err);
    }

    this.sim.getSimInfo().then(
      
      (info) => alert("Sim Info: "+JSON.stringify(info)),
      (err) => console.log('Unable to get sim info: ', err)
    );
    
    this.sim.hasReadPermission().then(
      (info) => alert("Has read permission Sim Info: "+JSON.stringify(info)),
    );
    
    this.sim.requestReadPermission().then(
      () => console.log('Permission granted'),
      () => console.log('Permission denied')
    );
  }

  showScannerOptions(){
    this.showCompanyDetails = true;
  }

  ngOnDestroy(): void {
    this.networkCaptureService.stopConnectionSubscribe();
    this.networkCaptureService.stopDisconnectionSubscribe();
  }
}


