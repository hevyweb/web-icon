import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-an2-pagination',
  templateUrl: './an2-pagination.component.html',
  styleUrls: ['./an2-pagination.component.css']
})
export class An2PaginationComponent implements OnInit {

    route: string;
    currentPage: number;
    displayPage: number;
    pages: number[];
    maxPage: number;
    
  constructor() { }

  ngOnInit() {
      this.route = Router.name;
      this.currentPage = 3;
      this.displayPage = 10;
      this.pages = this.buildPages();
      this.maxPage = this.pages[this.pages.length - 1];
  }
  
  buildPages(): number[]{
    return [1, 2, 3];
  }
}
