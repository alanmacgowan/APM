import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionComponent } from "../collection/collection.component";
import { WelcomeComponent } from "../home/welcome.component";
import { CollectionDetailComponent } from "../collection/collection-detail.component";

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'collection',  component: CollectionComponent },
  { path: 'welcome',  component: WelcomeComponent },
  { path: 'collection/:id', component: CollectionDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
