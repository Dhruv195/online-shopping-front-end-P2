import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-product-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-product-section.component.html',
  styleUrls: ['./featured-product-section.component.scss']
})
export class FeaturedProductSectionComponent {

  products = [
    {
      image: "assets/img/product-1.jpg",
      links: {
        cart: "#",
        wishlist: "#",
        compare: "#",
        view: "#",
      },
      name: "Product Name Goes Here",
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: "assets/img/product-2.jpg",
      links: {
        cart: "#",
        wishlist: "#",
        compare: "#",
        view: "#",
      },
      name: "Product Name Goes Here",
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: "assets/img/product-3.jpg",
      links: {
        cart: "#",
        wishlist: "#",
        compare: "#",
        view: "#",
      },
      name: "Product Name Goes Here",
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: "assets/img/product-4.jpg",
      links: {
        cart: "#",
        wishlist: "#",
        compare: "#",
        view: "#",
      },
      name: "Product Name Goes Here",
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: "assets/img/product-1.jpg",
      links: {
        cart: "#",
        wishlist: "#",
        compare: "#",
        view: "#",
      },
      name: "Product Name Goes Here",
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: "assets/img/product-2.jpg",
      links: {
        cart: "#",
        wishlist: "#",
        compare: "#",
        view: "#",
      },
      name: "Product Name Goes Here",
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: "assets/img/product-3.jpg",
      links: {
        cart: "#",
        wishlist: "#",
        compare: "#",
        view: "#",
      },
      name: "Product Name Goes Here",
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: "assets/img/product-3.jpg",
      links: {
        cart: "#",
        wishlist: "#",
        compare: "#",
        view: "#",
      },
      name: "Product Name Goes Here",
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
   
    // Add more products as needed
  ];

}
