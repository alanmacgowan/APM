import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { CollectibleService } from "../shared/collectible.service";
import { Collectible } from "../shared/collectible.model";
import { Router } from "@angular/router";

@Component({
    selector: 'app-collection',
    templateUrl: 'app/collection/collection.component.html'  
})
export class CollectionComponent implements OnInit {

    products: Collectible[] = [];
    pageTitle: string = 'List of Products';
    errorMessage: string;

    constructor(private _collectibleService: CollectibleService,
                private location: Location,
                private router: Router){}

    ngOnInit(): void {
        this._collectibleService.getCollectible()
                                .subscribe(
                                    collectibles => this.products = collectibles,
                                    error => this.errorMessage = <any>error);
    }

    onStarClicked(event:string){
        this.pageTitle = 'List of Products: ' + event;
    }

    goBack(): void {
        this.location.back();
    }

    selectCollectible(id: number): void{
        this.router.navigate(['collection', id]);
    }
}
