import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

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
debugger;
return this.http.post(environment.googleCloudVisionAPIKey , body);
}

getLogo(companyName:string){
  debugger
  return this.http.get(environment.googleSearchAPI+encodeURI(companyName)+"%20logo");
  
}


}


