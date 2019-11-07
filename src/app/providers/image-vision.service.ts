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
//return this.http.post(environment.googleCloudVisionAPIKey , body);
return this.http.post("https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCs6-yRMGVrKliZ082dyClpSwwdE22hiLg" , body);

}

getLogo(companyName:string){
  //return this.http.get(environment.googleSearchAPI+encodeURI(companyName)+"%20logo");
  return this.http.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyD6rT3yzndawuwb0y2WdrcbfkTrLhG_4c8&cx=009024791238972097032:zxk5rtsl18g&q="+encodeURI(companyName)+"%20logo");
  
}


}


