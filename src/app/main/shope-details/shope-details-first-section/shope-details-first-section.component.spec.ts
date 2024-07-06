import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopeDetailsFirstSectionComponent } from './shope-details-first-section.component';

describe('ShopeDetailsFirstSectionComponent', () => {
  let component: ShopeDetailsFirstSectionComponent;
  let fixture: ComponentFixture<ShopeDetailsFirstSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShopeDetailsFirstSectionComponent]
    });
    fixture = TestBed.createComponent(ShopeDetailsFirstSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
