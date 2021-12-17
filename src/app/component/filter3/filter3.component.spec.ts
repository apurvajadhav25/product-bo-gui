import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filter3Component } from './filter3.component';

describe('Filter3Component', () => {
  let component: Filter3Component;
  let fixture: ComponentFixture<Filter3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Filter3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Filter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
