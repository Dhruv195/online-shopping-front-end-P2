import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent {
  @Input() formGroup!: FormGroup;
  @Input() submitted!: boolean;
}
