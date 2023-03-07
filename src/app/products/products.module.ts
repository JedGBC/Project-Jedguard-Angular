import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { ShowListArticlesComponent } from './components/show-list-articles/show-list-articles.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CreateArticleComponent,
    EditArticleComponent,
    ShowListArticlesComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
