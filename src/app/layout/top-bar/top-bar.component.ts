import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarFirstLayerComponent } from './top-bar-first-layer/top-bar-first-layer.component';
import { TopBarSecondLayerComponent } from './top-bar-second-layer/top-bar-second-layer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule,TopBarFirstLayerComponent,TopBarSecondLayerComponent,FormsModule],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  links = [
    { name: "About", url: "#" },
    { name: "Contact", url: "#" },
    { name: "Help", url: "#" },
    { name: "FAQs", url: "#" },
  ];

  languages = ["EN", "FR", "AR", "RU"];

  searchQuery: string = "";
  customerServiceNumber: string = "+012 345 6789";

  onSearch(): void {
    // Implement search functionality here
    console.log(this.searchQuery);
  }

}