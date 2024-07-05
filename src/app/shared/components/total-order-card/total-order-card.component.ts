import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from '../../service/common.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-total-order-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './total-order-card.component.html',
  styleUrls: ['./total-order-card.component.scss']
})
export class TotalOrderCardComponent implements OnInit {

  constructor(public commonService: CommonService) { }
  shippingAmount = 10;

  ngOnInit(): void {}



} 
