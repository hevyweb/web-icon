import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { IconService, CategoryService } from '../../services/';
import { Icon, Category } from '../../models/';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

    iconCode: string;
    icon: Icon;
    categories: Category[];
    iconForm: FormGroup;
    formError: any[];
    
    constructor(
        private router: ActivatedRoute,
        private iconService: IconService,
        private categoryService: CategoryService
    ) { }

    ngOnInit() {
        this.icon = new Icon(null, null, '', null, '', '', '', '', '');
        
        this.iconForm = new FormGroup({
            description: new FormControl('', Validators.required)
        });
        
        this.formError = [];

        this.router.params
            .switchMap((params: Params) => this.iconService.getIconByCode(+params['id']))
            .subscribe(
                icon => {
                    this.icon = Object.assign({}, icon);
                    this.iconForm.setValue({
                        description: icon.description
                    });
                },
                err => console.log(err)
            );

        this.categories = this.categoryService.getCategories();
    }
    
    save(){
        console.log('saved');
    }

    ngOnDesctroy(){
    }

}
