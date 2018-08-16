import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CategoriesComponent } from '../app/categories/categories.component';
import { HomeComponent } from '../app/home/home.component';
import { DescriptionComponent } from '../app/description/description.component';


export const router: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    children: [
      {
        path: 'items/:short_name',
        component: DescriptionComponent
      }
    ]
  },
  // {
  //   path: 'categories/items/:short_name',
  //   component: DescriptionComponent
  // }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
