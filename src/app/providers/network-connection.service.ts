import { Network } from '@ionic-native/network/ngx';
import { Platform,Events } from '@ionic/angular';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';


export class NetworkCaptureService{
public connectionStatus: boolean = false;
disconnectSubscription:any;
connectSubscription:any;

constructor(private network: Network,
  private platform: Platform,
  private openNativeSettings: OpenNativeSettings) { 
        platform.ready().then(action=>{
        this.subscribeToNetworkEvents();
        document.addEventListener("offline", this.onOffline, false);
        document.addEventListener("online", this.onOnline, false);
    });
    
}
onOffline(){

  this.connectionStatus = false;
  alert("i am offline now" +this.connectionStatus );
}
onOnline(){
 
  this.connectionStatus = true;
  alert("i am online now"+this.connectionStatus );
}
subscribeToNetworkEvents():void{
  alert('platform ready network status: '+this.network.type);
  this.connectionStatus = this.network.type == 'none'?false:true;
  }
connectToNetwork(){
  this.openNativeSettings.open("settings");

}
  
}





