import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../../shared/service/common.service';
import { AuthService } from '../../shared/service/auth.service';
import { UserService } from '../../shared/service/user.service';
import { API } from '../../shared/constant/api.constant';
import { ProductService } from '../../shared/service/product.service';
import { HEADER_ROUTES_ITEM, PROFILE_ROUTES_ITEM } from 'src/app/shared/constant/common-function';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  collapseCategory = false;
  categories: any;
  headerNav = HEADER_ROUTES_ITEM;
  profileRoutes = PROFILE_ROUTES_ITEM;

  constructor(
    public commonService: CommonService,
    public userService: UserService,
    public productService: ProductService,
    private router: Router
  ) { }
  /**
   * get Category API Call
   */
  ngOnInit(): void {
    this.getCategory();   
  }
  /**
   * InProfile DropDown in Click 
   * @param profileTypeOfItem if Sign Out than remove token and redirect to home 
   */
  clickOnProfileItem(profileTypeOfItem: any) {
    if (profileTypeOfItem.title == 'Sign Out') {
      localStorage.removeItem('token');
      this.router.navigate(['/home']);
    }
  }
  getCategory() {
    this.productService.getCategoryList().subscribe({
      next: (res: any) => {
        if (res.data) {
          this.categories = res.data.categories;
        }
      },
    });
  }
  onClickCategory() {
    this.collapseCategory = !this.collapseCategory;
  }

  onCategoryClick(categoryId: any) {
    this.collapseCategory = !this.collapseCategory;

    let params = {
      categoryId: categoryId,
    };
    this.router.navigate(['/shop'], {
      queryParams: params,
      queryParamsHandling: 'merge',
    });
  }
}
