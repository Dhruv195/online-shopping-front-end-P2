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

  selectedFilters: { [key: string]: any[] } =  {
    price: ['All Price'],
    color: ['All Color'],
    size: ['All Size']
  };

  onFilterChange(filterType: string, item: any, event: any) {
    if (item.title.startsWith('All')) {
      // If 'All' option is selected, clear other selections of the same type
      this.selectedFilters[filterType] = [item.title];
    } else {
      if (event.target.checked) {
        // Deselect 'All' option if any specific option is selected
        this.selectedFilters[filterType] = this.selectedFilters[filterType].filter(i => !i.startsWith('All'));
        this.selectedFilters[filterType].push(item.title);
      } else {
        this.selectedFilters[filterType] = this.selectedFilters[filterType].filter(i => i !== item.title);
      }

      // If no specific option is selected, select 'All' option
      if (this.selectedFilters[filterType].length === 0) {
        this.selectedFilters[filterType] = [`All ${filterType.charAt(0).toUpperCase() + filterType.slice(1)}`];
      }
    }

    this.filterChanged.emit(this.selectedFilters);
  }
}
