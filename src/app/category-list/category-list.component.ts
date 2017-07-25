import {Component, OnInit } from '@angular/core';
import { CategoryService, IconService } from '../services/';
import { Event } from '@angular/router';
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
      private categoryService: CategoryService,
      private iconService: IconService
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

    toggleEdition(){
        this.editCategories = !this.editCategories;
    }

    disabled(e){
        if (this.editCategories) {
            e.preventDefault()
        }
    }
    
    updateCategory(categoryId: number, event: KeyboardEvent){
        let input: HTMLInputElement = <HTMLInputElement>event.target;
        let categoryName = input.value.trim();
        if (categoryName !=''){
            input.classList.remove('error');
            let category = new Category(categoryId, categoryName);
            this.categoryService.updateCategory(category);
            this.categories = this.categories.map( (category: Category) => {
                category.name = (category.id == categoryId ? categoryName : category.name);
                return category;
            });
        } else {
            input.classList.add('error');
        }
    }
    
    deleteCategory(categoryId: number){
        let categoryName = this.getCategoryName(categoryId);
        let message = "Are you sure, that you want to remove category \"" + categoryName + "\"? "+
            "Icons assigned to that category will be removed.";
            
        if (confirm(message)){
            this.categoryService.deleteCategory(categoryId)
            .then(response => {
                this.categories = this.categories.filter((category: Category) =>
                    category.id != categoryId
                );
                this.iconService.removeIconsByCategory(categoryId)
                .then();
                return response;
                }
            );
        }
    }
    
    getCategoryName(categoryId: number):string{
        for (let category of this.categories){
            if (category.id == categoryId){
                return category.name;
            }
        }
    }
}
