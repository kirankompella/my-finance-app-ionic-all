import { Component, OnInit, Input } from '@angular/core';

import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";
import { BarCodeData } from '../../interfaces/bar-code-data';
 

@Component({
  selector: 'bar-code',
  templateUrl: './bar-code.component.html',
  styleUrls: ['./bar-code.component.scss'],
})
export class BarCodeComponent implements OnInit {

  encodeData: any;
  @Input() scannedData : BarCodeData;
  @Input() updateBarCodeResult: Function;
  barcodeScannerOptions: BarcodeScannerOptions;
  public scanTries: number = 0;
  successfulScan: boolean = false;
  
 

  constructor(private barcodeScanner: BarcodeScanner) {
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
        this.scannedData = barcodeData;
        if(this.scannedData!=null && this.scannedData["text"].length > 0 && !this.scannedData["cancelled"]){
          this.successfulScan = true;
          this.updateBarCodeResult(this.scannedData);
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
    //todo: validate input
    //this.scannedData["format"] = "Mannual Entry";
    alert(this.scannedData.text);
    this.successfulScan = true;
    this.scannedData.cancelled = false;
    this.updateBarCodeResult(this.scannedData);
  }

  handleBarCodeClose(){
    this.successfulScan = false;
    this.scanTries = 0;
    this.scannedData = {text:"",format:"",cancelled:true};
    this.updateBarCodeResult(this.scannedData);
  }

}
