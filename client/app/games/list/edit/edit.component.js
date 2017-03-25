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
var router_1 = require("@angular/router");
var games_service_1 = require("../games.service");
var EditComponent = (function () {
    function EditComponent(_router, _route, _gamesService) {
        this._router = _router;
        this._route = _route;
        this._gamesService = _gamesService;
    }
    return EditComponent;
}());
EditComponent = __decorate([
    core_1.Component({
        selector: 'edit',
        templateUrl: 'app/games/edit/edit.template.html',
        providers: [games_service_1.GamesService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute, typeof (_a = typeof games_service_1.GamesService !== "undefined" && games_service_1.GamesService) === "function" && _a || Object])
], EditComponent);
exports.EditComponent = EditComponent;
var _a;
//# sourceMappingURL=edit.component.js.map