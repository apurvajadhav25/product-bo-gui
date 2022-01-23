import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaleTranslationComponent } from './locale-translation.component';

describe('LocaleTranslationComponent', () => {
  let component: LocaleTranslationComponent;
  let fixture: ComponentFixture<LocaleTranslationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocaleTranslationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaleTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
