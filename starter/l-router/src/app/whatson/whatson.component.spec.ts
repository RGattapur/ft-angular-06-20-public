import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsonComponent } from './whatson.component';

describe('WhatsonComponent', () => {
  let component: WhatsonComponent;
  let fixture: ComponentFixture<WhatsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
