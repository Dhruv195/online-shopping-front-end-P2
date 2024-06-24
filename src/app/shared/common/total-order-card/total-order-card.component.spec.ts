import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalOrderCardComponent } from './total-order-card.component';

describe('TotalOrderCardComponent', () => {
  let component: TotalOrderCardComponent;
  let fixture: ComponentFixture<TotalOrderCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TotalOrderCardComponent]
    });
    fixture = TestBed.createComponent(TotalOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
