import {Injectable} from '@angular/core';

@Injectable()
export class Category{
    constructor(
        public id:      number,
        public name:    string
    ) { }
}