import { Component, OnInit, OnDestroy } from '@angular/core';
import { Storage } from '@ionic/storage';
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
import {  FinalObj } from '../../models/finalObj';
import { User } from '../../models/user';

@Component({
  selector: 'capture-card',
  templateUrl: './capture-card.page.html',
  styleUrls: ['./capture-card.page.scss'],
})
export class CaptureCardPage  {
  

  public showCompanyDetails =false;
  receivedCardDetails: boolean =false;
  scannedData : BarCodeData= {text:"",format:"",cancelled:true} 
  company:Company = new Company()
  cardDetails: Card;
  showScanner: boolean = false;
  uniqueId:UniqueDeviceID;
  user:User;
  
  constructor(private uniqueDeviceID: UniqueDeviceID,private sim: Sim,private storage: Storage){
    this.cardDetails= {
      barCode: this.scannedData,
      company: this.company,
      isDeleted: false,
      isSynched: false,
      cardId : ""
    };
    if(this.storage.keys.length ===0){
    this.user = new User();
    try{
    uniqueDeviceID.get()
      .then((uuid: any) => {
        this.user.deviceId = uuid;
      })
      .catch((error: any) => console.log(error));

      this.sim.getSimInfo().then(
        (info) => (this.user.simInfo=info),
        (err) => console.log('Unable to get sim info: ', err)
      );
    }catch(err){
      console.log(err);
    }
  }

}

    

  get updateBarCodeResultFunc(){
    return this.updateBarCodeResult.bind(this);
  }

  get updateCompanyDetailsFunc(){
    return this.updateCompanyDetails.bind(this);
    
  }

  updateBarCodeResult(scannedData:any){
    alert("scanned data after update :" +JSON.stringify(scannedData));
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

    if(this.storage.keys.length ===0){
      let finalObj = new FinalObj();
      finalObj.user = this.user;
      finalObj.user.isSynched = false;
      finalObj.user.active = true;
      this.cardDetails.isSynched = false;
      this.cardDetails.isDeleted = false;
      this.cardDetails.cardId = this.user.deviceId+'_1';
      finalObj.cards = [this.cardDetails];
      //finalObj.cards.push(this.cardDetails);
      this.storage["appData"] =  finalObj;
      alert("final details captured: "+JSON.stringify(finalObj));
    }else{
      let finalObj = this.storage.get("appData");
      this.cardDetails.isSynched = false;
      this.cardDetails.isDeleted = false;
      this.cardDetails.cardId = this.user.deviceId+'_'+finalObj["cards"].length+1;
      finalObj["cards"].push(this.cardDetails);
      alert("final details captured: "+JSON.stringify(finalObj));
    }

    
    /*
    
    this.sim.hasReadPermission().then(
      (info) => alert("Has read permission Sim Info: "+JSON.stringify(info)),
    );
    
    this.sim.requestReadPermission().then(
      () => console.log('Permission granted'),
      () => console.log('Permission denied')
    );*/
  }

  showScannerOptions(){
    this.showCompanyDetails = true;
  }

}


