import { Component, OnInit } from '@angular/core';

import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";
 

@Component({
  selector: 'bar-code',
  templateUrl: './bar-code.component.html',
  styleUrls: ['./bar-code.component.scss'],
})
export class BarCodeComponent implements OnInit {

  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
  public scanTries: number;
  successfulScan: boolean;
  barCodeValue: string;

 
  constructor(private barcodeScanner: BarcodeScanner) {
    this.scanTries =0;
    this.successfulScan = false;
    //this.barCodeValue = 036000291452;
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  ngOnInit() {}
 
  scanCode() {
    this.scanTries++;
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        alert("Barcode data " + JSON.stringify(barcodeData));
        console.log("Barcode data " + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;
        if(this.scannedData!=null && this.scannedData["text"].length > 0 && !this.scannedData["cancelled"]){
          this.successfulScan = true;
          this.barCodeValue = this.scannedData["text"];
        }else{
          this.successfulScan = false;
          console.log("error");
        }
        
        
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  handleManualCardNumber(){
    debugger;
    //todo: validate input
    //this.scannedData["format"] = "Mannual Entry";
    this.successfulScan = true;
  }

  handleBarCodeClose(){
    this.successfulScan = false;
    this.barCodeValue = "";
    this.scanTries = 0;
    this.scannedData = {};
  }
 
}
