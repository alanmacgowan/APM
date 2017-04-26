import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent }  from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { ProductTransform } from "./shared/producTransform.pipe";
import { StarComponent } from "./shared/star.component";
import 'rxjs/Rx';

@NgModule({
  declarations: [ 
    AppComponent, 
    CollectionComponent, 
    ProductTransform,
    StarComponent  ],
  imports: [ BrowserModule, 
             HttpModule ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
