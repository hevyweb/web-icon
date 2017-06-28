import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable()
export class CategoryService {
    public getCategories(){
        return [
            new Category(
                'Carrot'
            ),
            new Category(
                'tomato'
            ),
            new Category(
                'potato'
            )
        ];
    }
}