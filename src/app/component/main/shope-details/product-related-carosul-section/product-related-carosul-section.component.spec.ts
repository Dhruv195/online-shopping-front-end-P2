import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRelatedCarosulSectionComponent } from './product-related-carosul-section.component';

describe('ProductRelatedCarosulSectionComponent', () => {
  let component: ProductRelatedCarosulSectionComponent;
  let fixture: ComponentFixture<ProductRelatedCarosulSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductRelatedCarosulSectionComponent]
    });
    fixture = TestBed.createComponent(ProductRelatedCarosulSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
