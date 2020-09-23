import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrossroadsPageRoutingModule } from './crossroads-routing.module';

import { CrossroadsPage } from './crossroads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrossroadsPageRoutingModule
  ],
  declarations: [CrossroadsPage]
})
export class CrossroadsPageModule {}
