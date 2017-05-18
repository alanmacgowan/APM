import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from '@angular/common';

import { CollectibleService } from "../shared/collectible.service";
import { Collectible } from "../shared/collectible.model";

@Component({
    templateUrl: 'app/collection/collection-detail.component.html',
})
export class CollectionDetailComponent implements OnInit{
    collectible: Collectible;

    constructor(private _collectibleService: CollectibleService,
                private route: ActivatedRoute,
                private location: Location){}
    
    ngOnInit(): void {
         this.route.params
            .switchMap((params: Params) =>  this._collectibleService.getCollectibleDetail(+params['id']))
            .subscribe(collectible => this.collectible = collectible);  
    }

    goBack(): void {
        this.location.back();
    }

}