"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./services/in-memory-data.service");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var sessions_component_1 = require("./sessions/sessions.component");
var session_detail_component_1 = require("./session-detail/session-detail.component");
var session_service_1 = require("./services/session.service");
var session_search_component_1 = require("./session-search/session-search.component");
var navbar_component_1 = require("./navbar/navbar.component");
var create_session_component_1 = require("./create-session/create-session.component");
var animations_1 = require("@angular/platform-browser/animations");
var animations_2 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            app_routing_module_1.AppRoutingModule,
            animations_1.BrowserAnimationsModule,
            animations_2.NoopAnimationsModule,
            material_1.MdFormFieldModule,
            material_1.MdInputModule,
            material_1.MdDialogModule,
            material_1.MdButtonModule,
            material_1.MdDatepickerModule,
            material_1.MdNativeDateModule
        ],
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            session_detail_component_1.SessionDetailComponent,
            sessions_component_1.SessionsComponent,
            session_search_component_1.SessionSearchComponent,
            navbar_component_1.NavbarComponent,
            create_session_component_1.CreateSessionComponent
        ],
        providers: [session_service_1.SessionService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map