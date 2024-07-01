import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-prodcut-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './prodcut-card.component.html',
  styleUrls: ['./prodcut-card.component.scss'],
})
export class ProdcutCardComponent  implements OnInit{
  @Input() product: any;

  ngOnInit(): void {
    console.log(this.product);
    
  }



}
