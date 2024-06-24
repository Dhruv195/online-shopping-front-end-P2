import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedSectionComponent } from './featured-section.component';

describe('FeaturedSectionComponent', () => {
  let component: FeaturedSectionComponent;
  let fixture: ComponentFixture<FeaturedSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FeaturedSectionComponent]
    });
    fixture = TestBed.createComponent(FeaturedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
