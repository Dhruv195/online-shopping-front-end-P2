import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarFirstLayerComponent } from './top-bar-first-layer/top-bar-first-layer.component';
import { TopBarSecondLayerComponent } from './top-bar-second-layer/top-bar-second-layer.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule,TopBarFirstLayerComponent,TopBarSecondLayerComponent],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

}
