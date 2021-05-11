import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { HomePageRoutingModule } from './home-routing.module';

import { TruncateModule } from 'ng2-truncate';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgxSliderModule,
    TruncateModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
