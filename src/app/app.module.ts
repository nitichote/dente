import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MychartComponent } from './mychart/mychart.component';
import { MyhosComponent } from './myhos/myhos.component';
import { BarchartComponent } from './barchart/barchart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatachartComponent } from './datachart/datachart.component';

@NgModule({
  declarations: [
    AppComponent,
    MychartComponent,
    MyhosComponent,
    BarchartComponent,
    DatachartComponent
  ],
  imports: [BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
