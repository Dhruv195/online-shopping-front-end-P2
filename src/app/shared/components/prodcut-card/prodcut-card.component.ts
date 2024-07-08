import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prodcut-card',
  standalone: true,
  imports: [CommonModule, RouterModule,NgbModule],
  templateUrl: './prodcut-card.component.html',
  styleUrls: ['./prodcut-card.component.scss'],
})
export class ProdcutCardComponent implements OnInit {
  @Input() product: any;

  ngOnInit(): void {
  }
}
