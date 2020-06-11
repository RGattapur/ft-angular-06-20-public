import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Item } from "../types/custom.types";
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor( private http: HttpClient ) {}

  // The Angular HTTP client uses an RxJS Observable-based API.
  // This Observable is a single-value stream.
  // If the HTTP request is successful, this observable emits only 1 value, JSON data and ends.
  // The generic parameter <Item[]> means that the result returned by http.get is an Observable stream of Item-arrays.

  getData = (path:string) => this.http.get<Item[]>( path )

}

