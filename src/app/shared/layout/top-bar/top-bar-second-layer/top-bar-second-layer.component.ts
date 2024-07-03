import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-top-bar-second-layer',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './top-bar-second-layer.component.html',
  styleUrls: ['./top-bar-second-layer.component.scss']
})
export class TopBarSecondLayerComponent {
  searchQuery: string = "";
  customerServiceNumber: string = "+012 345 6789";

  // onSearch(): void {
  //   // Implement search functionality here
  //   console.log(this.searchQuery);
  // }

  onSearch(event: Event) {
    event.preventDefault();
    const params = this.buildSearchParams();
    console.log("Search Params:", params);

    const apiUrl = this.constructApiUrl(params);
    console.log("API URL:", apiUrl);

    // this.fetchSearchResults(apiUrl);
  }

  buildSearchParams() {
    let params: any = {};

    if (this.searchQuery) {
      params['search'] = this.searchQuery;
    }

    return params;
  }
  

  constructApiUrl(params: any) {
    const baseUrl = '{{URL}}/product/list';
    let queryParams = '';

    for (const key in params) {
      if (params[key]) {
        queryParams += `${key}=${encodeURIComponent(params[key])}&`;
      }
    }

    // Remove the trailing '&' if it exists
    // queryParams = queryParams.endsWith('&') ? queryParams.slice(0, -1) : queryParams;

    return `${baseUrl}?${queryParams}`; 
  }
}
