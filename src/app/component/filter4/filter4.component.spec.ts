import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filter4Component } from './filter4.component';

describe('Filter4Component', () => {
  let component: Filter4Component;
  let fixture: ComponentFixture<Filter4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Filter4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Filter4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
