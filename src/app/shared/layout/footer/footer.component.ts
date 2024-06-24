import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialIconBarComponent } from '../../common/social-icon-bar/social-icon-bar.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,SocialIconBarComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

}
