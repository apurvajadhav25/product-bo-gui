import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementImageComponent } from './advertisement-image.component';

describe('AdvertisementImageComponent', () => {
  let component: AdvertisementImageComponent;
  let fixture: ComponentFixture<AdvertisementImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
