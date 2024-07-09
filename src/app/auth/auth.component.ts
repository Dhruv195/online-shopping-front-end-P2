import { Component, OnInit } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public authService:AuthService,public route:Router){}
  ngOnInit(): void {
    //if token in localStorage than redirect to main module
    if (this.authService.getToken()) {
      this.route.navigate(['/home']);
    }
  }
}
