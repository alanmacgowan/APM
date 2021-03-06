"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var collectible_service_1 = require("../shared/collectible.service");
var router_1 = require("@angular/router");
var CollectionComponent = (function () {
    function CollectionComponent(_collectibleService, location, router) {
        this._collectibleService = _collectibleService;
        this.location = location;
        this.router = router;
        this.products = [];
        this.pageTitle = 'List of Products';
    }
    CollectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._collectibleService.getCollectible()
            .subscribe(function (collectibles) { return _this.products = collectibles; }, function (error) { return _this.errorMessage = error; });
    };
    CollectionComponent.prototype.onStarClicked = function (event) {
        this.pageTitle = 'List of Products: ' + event;
    };
    CollectionComponent.prototype.goBack = function () {
        this.location.back();
    };
    CollectionComponent.prototype.selectCollectible = function (id) {
        this.router.navigate(['collection', id]);
    };
    return CollectionComponent;
}());
CollectionComponent = __decorate([
    core_1.Component({
        selector: 'app-collection',
        templateUrl: 'app/collection/collection.component.html'
    }),
    __metadata("design:paramtypes", [collectible_service_1.CollectibleService,
        common_1.Location,
        router_1.Router])
], CollectionComponent);
exports.CollectionComponent = CollectionComponent;
//# sourceMappingURL=collection.component.js.map