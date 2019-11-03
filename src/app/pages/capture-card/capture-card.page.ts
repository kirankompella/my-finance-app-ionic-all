import { Component, OnInit } from '@angular/core';
import { CameraCaptureService } from '../../providers/camera-capture.service';

@Component({
  selector: 'capture-card',
  templateUrl: './capture-card.page.html',
  styleUrls: ['./capture-card.page.scss'],
})
export class CaptureCardPage implements OnInit {

  constructor(private capture:CameraCaptureService) { }

  ngOnInit() {
    debugger;
    this.capture.capture().then((imageData) => {
      console.log(imageData);
      console.log("Yahoo captured image");
     }, (err) => {
       console.log("error occurred in capturing image");
     });
  }

}
