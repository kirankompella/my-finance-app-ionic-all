import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CaptureCardPage } from './capture-card.page';
import { BarCodeComponentModule } from '../../components/bar-code/bar-code.component.module';
import { CompanyDetailsComponentModule } from '../../components/company-details/company-details.component.module';
import { NetworkCaptureService } from '../../providers/network-connection.service';

const routes: Routes = [
  {
    path: '',
    component: CaptureCardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    BarCodeComponentModule,
    CompanyDetailsComponentModule
  ],
  declarations: [CaptureCardPage],
  providers:[NetworkCaptureService]
})
export class CaptureCardPageModule {}
