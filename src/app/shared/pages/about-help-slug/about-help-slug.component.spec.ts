import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHelpSlugComponent } from './about-help-slug.component';

describe('AboutHelpSlugComponent', () => {
  let component: AboutHelpSlugComponent;
  let fixture: ComponentFixture<AboutHelpSlugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutHelpSlugComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutHelpSlugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
