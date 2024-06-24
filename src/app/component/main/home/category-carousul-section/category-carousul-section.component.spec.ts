import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCarousulSectionComponent } from './category-carousul-section.component';

describe('CategoryCarousulSectionComponent', () => {
  let component: CategoryCarousulSectionComponent;
  let fixture: ComponentFixture<CategoryCarousulSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CategoryCarousulSectionComponent]
    });
    fixture = TestBed.createComponent(CategoryCarousulSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
