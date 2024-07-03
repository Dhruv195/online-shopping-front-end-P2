import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadCrumbComponent } from 'src/app/shared/common/bread-crumb/bread-crumb.component';
import { ToastComponent } from 'src/app/shared/common/toast/toast.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,RouterModule,BreadCrumbComponent,ToastComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

}
