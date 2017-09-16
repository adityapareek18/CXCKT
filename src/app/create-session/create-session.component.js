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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Session_1 = require("../Session");
var session_service_1 = require("../services/session.service");
var CreateSessionComponent = (function () {
    function CreateSessionComponent(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
        this.session = new Session_1.Session();
    }
    CreateSessionComponent.prototype.saveSession = function () {
        this.add(this.session.name, this.session.desc, this.session.ddate);
    };
    CreateSessionComponent.prototype.add = function (name, desc, ddate) {
        var _this = this;
        name = name.trim();
        desc = desc.trim();
        if (!name || !desc) {
            return;
        }
        this.sessionService.create(name, desc, ddate)
            .then(function (session) {
            _this.session = new Session_1.Session();
        });
    };
    return CreateSessionComponent;
}());
CreateSessionComponent = __decorate([
    core_1.Component({
        selector: 'create-session',
        templateUrl: "./create-session.component.html",
    }),
    __metadata("design:paramtypes", [session_service_1.SessionService,
        router_1.Router])
], CreateSessionComponent);
exports.CreateSessionComponent = CreateSessionComponent;
//# sourceMappingURL=create-session.component.js.map