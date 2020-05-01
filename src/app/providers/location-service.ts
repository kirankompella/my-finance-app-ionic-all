import { Geolocation } from '@ionic-native/geolocation/ngx';

export class LocationService{
    constructor(private geolocation: Geolocation) {
        this.watchCurrentPosition();
    }

    getCurrentPosition(){
        this.geolocation.getCurrentPosition().then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            return resp;
           }).catch((error) => {
             console.log('Error getting location', error);
             return null;
           });
           
    }
    watchCurrentPosition(){
        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
            alert("I am watching your location");
    // data can be a set of coordinates, or an error (if an error occurred).
         // data.coords.latitude
        // data.coords.longitude
        });
    }
}