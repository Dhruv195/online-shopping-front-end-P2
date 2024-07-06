import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNavigateSectionComponent } from './footer-navigate-section.component';

describe('FooterNavigateSectionComponent', () => {
  let component: FooterNavigateSectionComponent;
  let fixture: ComponentFixture<FooterNavigateSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FooterNavigateSectionComponent]
    });
    fixture = TestBed.createComponent(FooterNavigateSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
