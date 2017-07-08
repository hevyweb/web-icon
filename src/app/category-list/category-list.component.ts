import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

import { Category } from '../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
    
  categories: Category[];
  filterCategory: string;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
      this.filterCategory = '';
      this.categories = this.categoryService.getCategories();
  }
}
