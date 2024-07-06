import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarFirstLayerComponent } from './top-bar-first-layer.component';

describe('TopBarFirstLayerComponent', () => {
  let component: TopBarFirstLayerComponent;
  let fixture: ComponentFixture<TopBarFirstLayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TopBarFirstLayerComponent]
    });
    fixture = TestBed.createComponent(TopBarFirstLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
