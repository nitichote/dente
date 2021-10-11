import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarchartComponent } from './barchart/barchart.component';
import { DatachartComponent } from './datachart/datachart.component';
import { MychartComponent } from './mychart/mychart.component';
import { MyhosComponent } from './myhos/myhos.component';

const routes: Routes = [
  { 
    path:  '',
    component:  MychartComponent,
  },
  { 
    path:  'myPath',
    component:  MyhosComponent
  },
  { 
    path:  'bar',
    component:  BarchartComponent
  }
  ,
  { 
    path:  'datachart',
    component:  DatachartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
