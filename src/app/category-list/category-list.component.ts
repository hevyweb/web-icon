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
  newCategory: string;
  editCategories: boolean;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
      this.filterCategory = '';
      this.categories = [];
      this.editCategories = false;
      
      this.categoryService.getCategories().then(
        (categories) => {
            this.categories = categories;
        })
        .catch((err) => console.log(err));
  }
  
  addNewCategory($event){
      let category = new Category(null , this.newCategory);
      this.categoryService.addCategory(category)
          .then(category => this.categories = this.categories.concat([category]))
          .catch((err) => console.log(err));
          
      this.newCategory = '';
  }
  
  enableEdition(){
      this.editCategories = true;
      console.log(this.editCategories);
  }
}
