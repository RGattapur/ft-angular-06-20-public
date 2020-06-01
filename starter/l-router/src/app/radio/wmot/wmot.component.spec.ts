import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmotComponent } from './wmot.component';

describe('WmotComponent', () => {
  let component: WmotComponent;
  let fixture: ComponentFixture<WmotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
