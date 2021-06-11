import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OMentalistaPageRoutingModule } from './omentalista-routing.module';

import { OMentalistaPage } from './omentalista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OMentalistaPageRoutingModule
  ],
  declarations: [OMentalistaPage]
})
export class OMentalistaPageModule {}
