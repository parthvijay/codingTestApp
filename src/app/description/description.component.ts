import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories/categories.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(private categoryService: CategoriesService, private route: ActivatedRoute) { }
  shortName: string;
  menuList: any = [];
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.shortName = params.get('short_name');
      this.getDetails();
    });
  }

  getDetails() {
    this.categoryService.getMenuItems(this.shortName)
    .subscribe(data => {
      this.menuList = data.menu_items;
    });
  }
}
