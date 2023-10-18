import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecupPassPageRoutingModule } from './recup-pass-routing.module';

import { RecupPassPage } from './recup-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecupPassPageRoutingModule
  ],
  declarations: [RecupPassPage]
})
export class RecupPassPageModule {}
