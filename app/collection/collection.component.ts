import { Component, OnInit } from '@angular/core';

import { CollectibleService } from "../shared/collectible.service";
import { Collectible } from "../shared/collectible.model";

@Component({
    selector: 'app-collection',
    templateUrl: 'app/collection/collection.component.html'  
})
export class CollectionComponent implements OnInit {

    products: Collectible[] = [];
    pageTitle: string = 'List of Products';
    errorMessage: string;

    constructor(private _collectibleService: CollectibleService){}

    ngOnInit(): void {
        this._collectibleService.getCollectible()
                                .subscribe(
                                    collectibles => this.products = collectibles,
                                    error => this.errorMessage = <any>error);
    }

    onStarClicked(event:string){
        this.pageTitle = 'List of Products: ' + event;
    }
}
