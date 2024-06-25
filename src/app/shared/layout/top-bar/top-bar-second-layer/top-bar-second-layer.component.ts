import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-top-bar-second-layer',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './top-bar-second-layer.component.html',
  styleUrls: ['./top-bar-second-layer.component.scss']
})
export class TopBarSecondLayerComponent {
  searchQuery: string = "";
  customerServiceNumber: string = "+012 345 6789";

  onSearch(): void {
    // Implement search functionality here
    console.log(this.searchQuery);
  }
}
