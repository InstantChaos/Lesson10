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
require("rxjs/Rx");
var Observable_1 = require("rxjs/Observable");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var GamesService = (function () {
    // Constructor -------------------
    function GamesService(_http) {
        this._http = _http;
        // Instance Variables
        this._baseURL = '/api/games';
    }
    // Methods -----------------------
    GamesService.prototype.list = function () {
        return this._http
            .get(this._baseURL)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GamesService.prototype.read = function (gameId) {
        return this._http
            .get(this._baseURL + "/" + gameId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    GamesService.prototype.extractData = function (res) {
        var body = res.json();
        this.games = res.json();
        return body || {};
    };
    GamesService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return GamesService;
}());
GamesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GamesService);
exports.GamesService = GamesService;
//# sourceMappingURL=games.service.js.map