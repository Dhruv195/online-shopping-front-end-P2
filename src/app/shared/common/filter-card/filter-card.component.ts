import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-card.component.html',
  styleUrls: ['./filter-card.component.scss']
})
export class FilterCardComponent {
  @Input() filters!: any[];
  @Output() filterChanged = new EventEmitter<any>();

  selectedFilters: { [key: string]: any[] } = {};

  onFilterChange(filterType: string, item: any, event: any) {
    if (!this.selectedFilters[filterType]) {
      this.selectedFilters[filterType] = [];
    }

    if (event.target.checked) {
      this.selectedFilters[filterType].push(item.title);
    } else {
      this.selectedFilters[filterType] = this.selectedFilters[filterType].filter(i => i !== item.title);
    }

    this.filterChanged.emit(this.selectedFilters);
  }
}
