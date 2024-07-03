import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from 'src/app/shared/service/product.service';
import { Router } from '@angular/router';
import { Observable, debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-top-bar-second-layer',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './top-bar-second-layer.component.html',
  styleUrls: ['./top-bar-second-layer.component.scss']
})
export class TopBarSecondLayerComponent implements AfterViewInit {
  searchQuery: string = "";
  customerServiceNumber: string = "+012 345 6789";
  params: any;
  @ViewChild('inputSearch') inputElementSearch!: ElementRef;

  // onSearch(): void {
  //   // Implement search functionality here
  //   console.log(this.searchQuery);
  // }
  constructor(public productService: ProductService,public router:Router) {
   
  }

  onSearch() {
    
    // this.fetchSearchResults(apiUrl);
  }
  onSearchChange() {
    this.params = {
      'search':this.searchQuery.trim()
    }
    // fromEvent(this.inputElementSearch.nativeElement, 'input')
    //   .pipe(debounceTime(1000))
    //   .subscribe(() => this.getProductList(this.params));
  }
  ngAfterViewInit() {
    this.params = {
      'search':this.searchQuery.trim()
    }
    fromEvent(this.inputElementSearch.nativeElement, 'input')
      .pipe(debounceTime(300))
      .subscribe(() => this.getProductList(this.params));
  }

  getProductList(params:any) {

    this.productService.getProductList(params).subscribe({
      next: (res: any) => {
        // this.productList = res.data.products;
        // this.totalProduct = res.data.total_count;
        this.productService.productList.next(res.data.products);
        this.productService.totalProducts.next(res.data.total_count);
        this.router.navigate(
          ['/shop'],
          {
            queryParams: this.params,
          }
          );
      }
    })
  }
  

  
}
