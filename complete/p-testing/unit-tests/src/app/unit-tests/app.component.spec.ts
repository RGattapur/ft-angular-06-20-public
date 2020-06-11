
import { of, pipe, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { fakeAsync, tick } from "@angular/core/testing";

import { AppComponent } from "../app.component";
import { CityService } from '../services/city.service';

import { TESTDATA } from "../services/city.testdata" ;

describe("AppComponent" , () => {

    let component;
    let service;

    beforeEach(() => {
      service = new CityService(null);
      component = new AppComponent(service);
    })

    it( "should exist", () => {
      expect(component).toBeTruthy();
    })

    it( "should getData", fakeAsync(() => {
      spyOn( service,"getData").and.returnValue(timer(500).pipe(mapTo(TESTDATA)));

      component.ngOnInit();

      component.observe.subscribe( cities => {
        expect(cities).toEqual(TESTDATA)
        console.table(cities)
      });
      tick(500);
    }))
})
