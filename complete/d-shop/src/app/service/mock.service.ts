import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from "../types/custom.types";
import { Observable,of } from 'rxjs';

@Injectable()

export class MockService {

    testData : Item[] = [
        { "desc": "__Blueberries", "price": 0.01,"size":"200g", "quantity":2, code:"fake_02" },
        { "desc": "__Kale", "price": 0.02,"size":"1.5kg", "quantity":10, code:"fake_04" },
        { "desc": "__Apples", "price": 0.04,"size":"400g", "quantity":5, code:"fake_06" },
        { "desc": "__Carrots", "price": 0.08,"size":"1kg", "quantity":4, code:"fake_08" }
    ]

    constructor( private http: HttpClient ) {}

    getData(path) : Observable<Item[]> {

        console.log( "MockService does not read data from", path );

        // The Observable OF function converts the array of objects into an Observable.
        return of(this.testData);
    }
}
