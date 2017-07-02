import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable()
export class CategoryService {
    public getCategories(){
        return [
            new Category(
                0,
                'Carrot'
            ),
            new Category(
                1,
                'tomato'
            ),
            new Category(
                2,
                'potato'
            )
        ];
    }
}