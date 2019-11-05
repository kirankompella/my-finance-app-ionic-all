import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class CameraCaptureService {

   options: CameraOptions = {
    quality: 100,
    targetHeight: 500,
    targetWidth: 500,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  
constructor(private camera: Camera) { }
  
  async capture(){
    try {
      const imageData = await this.camera.getPicture(this.options);
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      //let base64Image = 'data:image/jpeg;base64,' + imageData;
      let base64Image =   imageData;
      return base64Image;
    }
    catch (err) { 

    }

  }
  
}
