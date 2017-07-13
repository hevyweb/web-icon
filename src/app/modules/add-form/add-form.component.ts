import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IconService, CategoryService, FontService } from '../../services/';
import { Icon, Category, Font } from '../../models/';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

    iconCode: number;
    icon: Icon;
    categories: Category[];
    iconForm: FormGroup;
    formError: any[];
    fonts: Font[];
    
    constructor(
        private activeRoute: ActivatedRoute,
        private router: Router,
        private iconService: IconService,
        private categoryService: CategoryService,
        private fontService: FontService
    ) { }

    ngOnInit() {
        this.icon = new Icon(null, null, '', null, '', '', '', '');
        
        this.iconForm = new FormGroup({
            description: new FormControl('', Validators.required),
            category: new FormControl('', Validators.required)
        });
        
        this.fonts = this.fontService.getFonts();
        
        this.formError = [];

        this.activeRoute.params
            .switchMap((params: Params) => {
                this.iconCode = +params['code'];
                return this.iconService.getIconByCode(this.iconCode);
            })
            .subscribe(
                icon => {
                    this.icon = icon;
                    this.iconForm.setValue({
                        description: icon.description,
                        category: icon.category
                    });
                },
                error => alert(error)
            );

        this.categories = [];
        this.categoryService.getCategories().then(
        (categories) => {
            this.categories = categories;
        })
        .catch((err) => console.log(err));
    }
    
    save(){
        this.icon.category = parseInt(this.iconForm.get('category').value);
        this.icon.description = this.iconForm.get('description').value;
        
        this.iconService[this.icon.id ? 'updateIcon' : 'addIcon'](this.icon)
            .then(
                response => this.router.navigate(['/']),
                error => alert(error)
            );
    }

    ngOnDesctroy(){
    }

}
