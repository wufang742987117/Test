import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElModule } from 'element-angular';
import { LeftMeunComponent } from './left-meun/left-meun.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartComponent } from './chart/chart.component'
import { DataService } from './data.service'

@NgModule({
  declarations: [
    AppComponent,
    LeftMeunComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElModule.forRoot(),
    NgxEchartsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
