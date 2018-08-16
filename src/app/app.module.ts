import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routes } from './/app-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';

import { CategoriesService } from './categories/categories.service';
import { DescriptionComponent } from './description/description.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HomeComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    routes,
    HttpModule
  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
