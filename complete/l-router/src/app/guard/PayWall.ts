import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable()
export class PayWall implements CanActivate {

	constructor() {}

	canActivate() {

		return localStorage.paywall === this.getToday()
  }

  // Returns today in yyyy-mm-dd format.
  getToday = () => new Date().toJSON().slice(0,10).replace(/-/g,'-')

}
