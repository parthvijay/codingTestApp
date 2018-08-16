import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriesService {

  constructor(private http: Http) { }

  getMainCategories() {
    return this.http.get('https://davids-restaurant.herokuapp.com/categories.json')
      .map(res => res.json());
  }

  getMenuItems(type) {
    return this.http.get('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + type)
      .map(res => res.json());
  }

}
