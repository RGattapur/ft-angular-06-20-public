import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})

export class DataService {
	constructor( private http:HttpClient ) {}

	getData(path) {
    return this.http.get( path );
  }
}
