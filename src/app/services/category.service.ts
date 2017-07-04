import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable()
export class CategoryService {
    public getCategories(){
        return [
            new Category(
                0,
                'Money'
            ),
            new Category(
                1,
                'Arrows'
            ),
            new Category(
                2,
                'Circle'
            )
        ];
    }
}