import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentiRoutingModule } from './studenti-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    StudentiRoutingModule
  ]
})
export class StudentiModule { }
