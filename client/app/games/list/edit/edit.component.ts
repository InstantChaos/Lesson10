import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GamesService } from '../games.service';

import { Game } from '../game';

@Component({
    selector: 'edit',
    templateUrl: 'app/games/edit/edit.template.html',
    providers: [GamesService]
})
export class EditComponent {
    games: Game[];
    errorMessage: string;
    paramObserver: any;

    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _gamesService: GamesService) { }
}