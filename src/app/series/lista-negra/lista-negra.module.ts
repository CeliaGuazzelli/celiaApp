import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaNegraPageRoutingModule } from './lista-negra-routing.module';

import { ListaNegraPage } from './lista-negra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaNegraPageRoutingModule
  ],
  declarations: [ListaNegraPage]
})
export class ListaNegraPageModule {}
