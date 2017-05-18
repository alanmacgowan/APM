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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var CollectibleService = (function () {
    function CollectibleService(_http) {
        this._http = _http;
        this._collectibleUrl = 'api/collectibles/collectibles.json';
    }
    CollectibleService.prototype.getCollectible = function () {
        return this._http.get(this._collectibleUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CollectibleService.prototype.getCollectibleDetail = function (id) {
        return this._http.get(this._collectibleUrl)
            .map(function (response) { return response.json()[0]; })
            .catch(this.handleError);
    };
    CollectibleService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server Error');
    };
    return CollectibleService;
}());
CollectibleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CollectibleService);
exports.CollectibleService = CollectibleService;
//# sourceMappingURL=collectible.service.js.map