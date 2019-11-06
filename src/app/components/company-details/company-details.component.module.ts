import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CompanyDetailsComponent } from './company-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  declarations: [CompanyDetailsComponent],
  exports: [CompanyDetailsComponent]
})
export class CompanyDetailsComponentModule {}