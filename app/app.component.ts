import { Component } from '@angular/core';

import { CollectibleService } from "./shared/collectible.service";

@Component({
    selector: 'pm-app',
    template: `
        <h1>Angular2: {{pageTitle}}</h1>
            <nav>
                <a routerLink="/welcome" routerLinkActive="active">Dashboard</a>
                <a routerLink="/collection" routerLinkActive="active">Collection</a>
            </nav>
            <router-outlet></router-outlet>
    `,
    providers: [ CollectibleService ]
})
export class AppComponent { 
    pageTitle: string = 'ACME Product Management';
}
