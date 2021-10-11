import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Xls2jsonRoutingModule } from './xls2json-routing.module';
import { ShowconvertComponent } from './showconvert/showconvert.component';


@NgModule({
  declarations: [
    ShowconvertComponent
  ],
  imports: [
    CommonModule,
    Xls2jsonRoutingModule
  ]
})
export class Xls2jsonModule { }
