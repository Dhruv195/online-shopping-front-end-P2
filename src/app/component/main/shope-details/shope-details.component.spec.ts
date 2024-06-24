import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopeDetailsComponent } from './shope-details.component';

describe('ShopeDetailsComponent', () => {
  let component: ShopeDetailsComponent;
  let fixture: ComponentFixture<ShopeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShopeDetailsComponent]
    });
    fixture = TestBed.createComponent(ShopeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
