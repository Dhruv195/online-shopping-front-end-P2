import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCheckoutComponent } from './product-checkout.component';

describe('ProductCheckoutComponent', () => {
  let component: ProductCheckoutComponent;
  let fixture: ComponentFixture<ProductCheckoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductCheckoutComponent]
    });
    fixture = TestBed.createComponent(ProductCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
