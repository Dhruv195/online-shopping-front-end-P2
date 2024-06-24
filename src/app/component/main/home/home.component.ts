import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedCardComponent } from 'src/app/shared/common/featured-card/featured-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FeaturedCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
