
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

  });

} )
