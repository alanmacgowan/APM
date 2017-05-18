import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import 'rxjs/Rx';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { ProductTransform } from "./shared/producTransform.pipe";
import { StarComponent } from "./shared/star.component";
import { AppRoutingModule } from "./shared/app-routing.module";
import { WelcomeComponent } from "./home/welcome.component";
import { CollectionDetailComponent } from "./collection/collection-detail.component";

@NgModule({
  declarations: [ 
    AppComponent, 
    CollectionComponent, 
    WelcomeComponent,
    ProductTransform,
    StarComponent,
    CollectionDetailComponent  ],
  imports: [ BrowserModule, 
             FormsModule,
             HttpModule,
             AppRoutingModule],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
