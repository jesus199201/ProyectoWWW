import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavbagrComponent } from './navbagr.component';

describe('NavbagrComponent', () => {
  let component: NavbagrComponent;
  let fixture: ComponentFixture<NavbagrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbagrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbagrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
