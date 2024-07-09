import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { BreadCrumbComponent } from 'src/app/shared/components/bread-crumb/bread-crumb.component';
import { ToastComponent } from 'src/app/shared/components/toast/toast.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, BreadCrumbComponent, ToastComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

}
