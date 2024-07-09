import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ProductService } from 'src/app/shared/service/product.service';
import { Router } from '@angular/router';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
} from 'rxjs';

@Component({
  selector: 'app-top-bar-second-layer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './top-bar-second-layer.component.html',
  styleUrls: ['./top-bar-second-layer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarSecondLayerComponent {
  searchQuery: string = '';
  customerServiceNumber: string = '+012 345 6789';
  params: any;
  @ViewChild('inputSearch') inputElementSearch!: ElementRef;

  constructor(
    public productService: ProductService,
    public router: Router,
    private cd: ChangeDetectorRef
  ) {}

  onSearch() {
    if (this.searchQuery.trim()) {
      this.params = {
        search: this.searchQuery.trim(),
      };
      this.router.navigate(['/shop'], {
        queryParams: this.params,
        queryParamsHandling: 'merge',
      });
    }
  }
}
