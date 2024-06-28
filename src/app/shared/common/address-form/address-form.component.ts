import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {
  @Input() addressForm!: FormGroup;
  submitted = false;
  @Output() address = new EventEmitter<any>();

  onSubmit() {
    this.submitted = true;
    if (this.addressForm.valid) {
      this.address.emit({ ...this.addressForm.value });
    }
  }

}
