import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopeComponent } from './shope.component';

describe('ShopeComponent', () => {
  let component: ShopeComponent;
  let fixture: ComponentFixture<ShopeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShopeComponent]
    });
    fixture = TestBed.createComponent(ShopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
