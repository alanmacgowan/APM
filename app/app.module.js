"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var collection_component_1 = require("./collection/collection.component");
var producTransform_pipe_1 = require("./shared/producTransform.pipe");
var star_component_1 = require("./shared/star.component");
var app_routing_module_1 = require("./shared/app-routing.module");
var welcome_component_1 = require("./home/welcome.component");
var collection_detail_component_1 = require("./collection/collection-detail.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            collection_component_1.CollectionComponent,
            welcome_component_1.WelcomeComponent,
            producTransform_pipe_1.ProductTransform,
            star_component_1.StarComponent,
            collection_detail_component_1.CollectionDetailComponent
        ],
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map