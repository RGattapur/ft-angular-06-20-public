import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { interval } from "rxjs";
import { take } from 'rxjs/operators';
import { fourBases } from '../data/data.js';

@Component({
	selector: 'app-base',
	templateUrl: './base.component.html',
	styleUrls: ['../app.component.css']
})

export class BaseComponent implements OnInit {

	@Output() changeBase: EventEmitter<any> = new EventEmitter();

	speed = 1000;
	limit = 24;
	fourBases = fourBases;
	base = null;

	constructor() {
		interval( this.speed ).pipe(take( this.limit )).subscribe(n => this.setBase())
	}

	ngOnInit() {}

	setBase() {
		this.base = this.fourBases[Math.floor(Math.random() * this.fourBases.length)];
		this.changeBase.emit( this.base );
	}

}
