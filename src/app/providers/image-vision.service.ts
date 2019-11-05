import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageVisionService {

  constructor(public http: Http) { }

  getLabels(base64Image) {
    const body = {
      "requests": [
                      {
                        "features": [
                                        {
                                          "type": "LOGO_DETECTION",
                                          "maxResults": 10
                                        },
                                        {
                                          "type": "TEXT_DETECTION",
                                          "maxResults": 10
                                        },
                                        {
                                          "type": "LABEL_DETECTION",
                                          "maxResults": 10
                                        }
                                    ],
                        "image": {
                                    "content": base64Image
                                  }
                      }
                  ]
                }
//console.log("environment.googleCloudVisionAPIKey: "+environment.googleCloudVisionAPIKey )
return this.http.post('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCs6-yRMGVrKliZ082dyClpSwwdE22hiLg', body);
}}
