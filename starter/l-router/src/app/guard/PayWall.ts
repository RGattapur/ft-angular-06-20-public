import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable()
export class PayWall implements CanActivate {

	constructor() {}

	canActivate() {
		return true;
  }

}
