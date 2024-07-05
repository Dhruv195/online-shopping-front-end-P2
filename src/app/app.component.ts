import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ToastComponent } from './shared/components/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TopBarComponent,
    HeaderComponent,
    FooterComponent,
    ToastComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'online-shopping-front-end-P2';
}
