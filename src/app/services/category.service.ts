import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Category } from '../models/category.model';

const serviceUrl = 'http://localhost:3000/categories';

@Injectable()
export class CategoryService {
        
    constructor(
        private http: Http
    ){}
    
    public getCategories(): Promise<Category[]>{
        return this.http.get(serviceUrl)
            .toPromise()
            .then( response => <Category[]>response.json())
            .catch(this.handleError);
    }
    
    public addCategory(category: Category): Promise<Category>{
        return this.http.post(serviceUrl, category)
            .toPromise()
            .then(response => <Category>response.json())
            .catch(this.handleError);
    }
    
    handleError(error: any): Promise<any> {
        alert('Please run "json-server db/db.json" to start the server.');
        return Promise.reject(error.message || error);
    }
}