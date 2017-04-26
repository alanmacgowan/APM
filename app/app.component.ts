import { Component } from '@angular/core';

import { CollectibleService } from "./shared/collectible.service";

@Component({
    selector: 'pm-app',
    template: `
        <h1>Angular2: {{pageTitle}}</h1>
        <app-collection></app-collection>
    `,
    providers: [ CollectibleService ]
})
export class AppComponent { 
    pageTitle: string = 'ACME Product Management';
}
