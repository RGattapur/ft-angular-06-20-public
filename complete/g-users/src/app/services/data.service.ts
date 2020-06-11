import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of, EMPTY} from "rxjs";
import { catchError,map } from 'rxjs/operators'

import {Person} from "../types/person.type";

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private people : Observable<Person[]> ;

	constructor( private http:HttpClient ) {}

  // <Person[]> specifies the type of data expected to be returned in the HTTP response.
  // This type annotation does not enforce/validate the shape of the data you get back.

	getData(path) : Observable<Person[]> {

    this.people = this.http
      .get<Person[]>( path )
      .pipe( catchError( e => {
        this.logError(e);
        return EMPTY
      }))

    return this.people;
  }

  // Alternatively, handle errors in app.component.ts

  logError = e => console.log(`[DataService error] ${e.status} ${e.url}`);

  // An Angular service is a singleton that exists for the entire application lifetime.
  // Since it never gets destroyed, there is no need to unsubscribe from it.

}

