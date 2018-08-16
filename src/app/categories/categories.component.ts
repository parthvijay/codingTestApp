import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  list = [];

  constructor(private categoryService: CategoriesService, private route: ActivatedRoute, private routerObj: Router) { }

  ngOnInit() {
    this.getMenuCategories();
  }

  getMenuCategories() {
    this.categoryService.getMainCategories()
    .subscribe(categories => {
      this.list = categories;
    });
  }

  menuDetail(type: string) {
    const link = 'items/';
    this.routerObj.navigate([link, type], { relativeTo: this.route });
  }
}
