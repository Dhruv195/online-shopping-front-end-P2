import { Component, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ToastComponent } from './shared/components/toast/toast.component';
import { UserService } from './shared/service/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    TopBarComponent,
    HeaderComponent,
    FooterComponent,
    ToastComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'online-shopping-front-end-P2';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.activeUserDetails.next(true);
  }
}
