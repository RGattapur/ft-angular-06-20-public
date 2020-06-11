
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { By } from "@angular/platform-browser";

import { AppComponent } from "../app.component";
import { CityService } from '../services/city.service';

import { TESTDATA } from "../services/city.testdata" ;

describe('AppComponent (TestBed)', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let template;
  let service;

  beforeEach( async(() => {

    TestBed.configureTestingModule( {
      declarations : [ AppComponent ],
      providers : [ CityService, { provide:HttpClient, useValue: {} } ]
    } )

  }))

  beforeEach(() => {

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.get( CityService );
    template = fixture.debugElement;

		spyOn( service,"getData").and.returnValue(of(TESTDATA));
    fixture.detectChanges();
  });

  it("should getData" , () => {

    component.observe.subscribe( cities => {
      expect(cities).toEqual(TESTDATA)
      console.table(cities)
    })

  })

  it("should remove 1 city when clicked" , () => {

    let city = fixture.debugElement.query(By.css(".city"));
    let total = fixture.debugElement.query(By.css(".total"));

    city.triggerEventHandler("click", null);
    fixture.detectChanges();

    expect(Number(total.nativeElement.textContent)).toEqual(4)
  })

} )
