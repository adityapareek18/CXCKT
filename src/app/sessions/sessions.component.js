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
var session_service_1 = require("../services/session.service");
var SessionsComponent = (function () {
    function SessionsComponent(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
    }
    SessionsComponent.prototype.getSessions = function () {
        var _this = this;
        this.sessionService
            .getSessions()
            .then(function (sessions) { return _this.sessions = sessions; });
    };
    SessionsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.sessionService.create(name)
            .then(function (session) {
            _this.sessions.push(session);
            _this.selectedSession = null;
        });
    };
    SessionsComponent.prototype.delete = function (session) {
        var _this = this;
        this.sessionService
            .delete(session.id)
            .then(function () {
            _this.sessions = _this.sessions.filter(function (h) { return h !== session; });
            if (_this.selectedSession === session) {
                _this.selectedSession = null;
            }
        });
    };
    SessionsComponent.prototype.ngOnInit = function () {
        this.getSessions();
    };
    SessionsComponent.prototype.onSelect = function (session) {
        this.selectedSession = session;
    };
    SessionsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedSession.id]);
    };
    return SessionsComponent;
}());
SessionsComponent = __decorate([
    core_1.Component({
        selector: 'my-sessions',
        templateUrl: './sessions.component.html',
        styleUrls: ['./sessions.component.css']
    }),
    __metadata("design:paramtypes", [session_service_1.SessionService,
        router_1.Router])
], SessionsComponent);
exports.SessionsComponent = SessionsComponent;
//# sourceMappingURL=sessions.component.js.map