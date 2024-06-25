import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  categorySelected = '';

  categories = [
    {
      name: 'Dresses',
      subcategories: ["Men's Dresses", "Women's Dresses", "Baby's Dresses"],
    },
  ];

  simpleCategories = [
    'Shirts',
    'Jeans',
    'Swimwear',
    'Sleepwear',
    'Sportswear',
    'Jumpsuits',
    'Blazers',
    'Jackets',
    'Shoes',
  ];
}
