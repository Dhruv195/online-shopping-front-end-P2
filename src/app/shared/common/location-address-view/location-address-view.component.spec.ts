import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAddressViewComponent } from './location-address-view.component';

describe('LocationAddressViewComponent', () => {
  let component: LocationAddressViewComponent;
  let fixture: ComponentFixture<LocationAddressViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LocationAddressViewComponent]
    });
    fixture = TestBed.createComponent(LocationAddressViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
