import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-bar-first-layer',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './top-bar-first-layer.component.html',
  styleUrls: ['./top-bar-first-layer.component.scss']
})
export class TopBarFirstLayerComponent {
  
  links = [
    { name: "About", url: "#" },
    { name: "Contact", url: "#" },
    { name: "Help", url: "#" },
    { name: "FAQs", url: "#" },
  ];

  languages = ["EN", "FR", "AR", "RU"];
}
