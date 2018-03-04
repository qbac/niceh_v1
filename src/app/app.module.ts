import {HttpModule, JsonpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { DiagramsComponent } from './diagrams/diagrams.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';

@NgModule({
  declarations: [
    AppComponent,
    DiagramsComponent,
    BasicInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
