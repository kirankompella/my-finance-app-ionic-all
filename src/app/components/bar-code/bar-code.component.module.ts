import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { BarCodeComponent } from './bar-code.component';
import { FormsModule } from '@angular/forms';
import { NgxBarcodeModule } from 'ngx-barcode';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    NgxBarcodeModule
  ],
  declarations: [BarCodeComponent],
  exports: [BarCodeComponent]
})
export class BarCodeComponentModule {}