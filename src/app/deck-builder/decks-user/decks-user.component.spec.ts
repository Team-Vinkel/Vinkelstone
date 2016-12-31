/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DecksUserComponent } from './decks-user.component';

describe('DecksUserComponent', () => {
  let component: DecksUserComponent;
  let fixture: ComponentFixture<DecksUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecksUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecksUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
