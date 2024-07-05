import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopeDetailsSecondSectionComponent } from './shope-details-second-section.component';

describe('ShopeDetailsSecondSectionComponent', () => {
  let component: ShopeDetailsSecondSectionComponent;
  let fixture: ComponentFixture<ShopeDetailsSecondSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShopeDetailsSecondSectionComponent]
    });
    fixture = TestBed.createComponent(ShopeDetailsSecondSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
