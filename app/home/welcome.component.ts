import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    templateUrl: 'app/home/welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';

    constructor(private router: Router){}

    goToCollection(): void {
        this.router.navigate(['collection']);
    }
}
