import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProductSectionComponent } from './featured-product-section.component';

describe('FeaturedProductSectionComponent', () => {
  let component: FeaturedProductSectionComponent;
  let fixture: ComponentFixture<FeaturedProductSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FeaturedProductSectionComponent]
    });
    fixture = TestBed.createComponent(FeaturedProductSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
