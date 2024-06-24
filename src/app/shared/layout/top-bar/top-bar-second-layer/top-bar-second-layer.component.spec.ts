import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarSecondLayerComponent } from './top-bar-second-layer.component';

describe('TopBarSecondLayerComponent', () => {
  let component: TopBarSecondLayerComponent;
  let fixture: ComponentFixture<TopBarSecondLayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TopBarSecondLayerComponent]
    });
    fixture = TestBed.createComponent(TopBarSecondLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
