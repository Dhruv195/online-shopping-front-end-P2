import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationMapViewComponent } from './location-map-view.component';

describe('LocationMapViewComponent', () => {
  let component: LocationMapViewComponent;
  let fixture: ComponentFixture<LocationMapViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LocationMapViewComponent]
    });
    fixture = TestBed.createComponent(LocationMapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
