import { Network } from '@ionic-native/network/ngx';
import { platform } from 'os';
import { Platform } from '@ionic/angular';


export class NetworkCaptureService{

disconnectSubscription:any;
connectSubscription:any;

constructor(private network: Network,private platform: Platform) { 
    platform.ready().then(action=>{
        alert('platform ready');
        this.startConnectionSubscribe();
        this.startDisconnectionSubscribe();
    });
    
}


startDisconnectionSubscribe(){
    // watch network for a disconnection
 this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
    console.log('network was disconnected :-(');
  });
}

stopDisconnectionSubscribe(){
// stop disconnect watch
this.disconnectSubscription.unsubscribe();
}

startConnectionSubscribe(){
    // watch network for a disconnection
 // watch network for a connection
 this.connectSubscription = this.network.onConnect().subscribe(() => {
    alert("yay connected");
    // We just got a connection but we need to wait briefly
     // before we determine the connection type. Might need to wait.
    // prior to doing any api requests as well.
    setTimeout(() => {
      if (this.network.type === 'wifi') {
        console.log('we got a wifi connection, woohoo!');
      }
    }, 3000);
  });
  
}

stopConnectionSubscribe(){

    // stop connect watch
    this.connectSubscription.unsubscribe();

    }
}






