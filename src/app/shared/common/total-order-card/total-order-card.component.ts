import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-total-order-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './total-order-card.component.html',
  styleUrls: ['./total-order-card.component.scss']
})
export class TotalOrderCardComponent implements OnInit {


  @Input() subTotal: number = 0;

  constructor() {}

  ngOnInit(): void {}



} 
