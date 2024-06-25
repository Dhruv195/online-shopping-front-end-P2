import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  collapseCategory = false;
  categories = [
    {
      title:'Dresses',
      link:'/shop'
    },
    {
      title:'Shirts',
      link:'/shop'
    },
    {
      title:'Jeans',
      link:'/shop'
    }
  ];
  headerNav = [
    {
      title: 'Home',
      link:'/home'
    },
    {
      title: 'Shop',
      link:'/shop'
    },
    { 
      title: 'Contact',
      link:'/contact'
    }
  ]

  constructor(){}

  onSelectCategory() {
    console.log("cate")
    this.collapseCategory = true;
  }
}
