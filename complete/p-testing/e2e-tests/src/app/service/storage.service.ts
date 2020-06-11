import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  write = list => localStorage.list = JSON.stringify( list );

  read = () => localStorage.list ? JSON.parse( localStorage.list ) : []

}
