import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { ProductsComponent } from './products.component';
import { Auth0Guard } from '../guards/auth0.guard';
import { EditArticleComponent } from './components/edit-article/edit-article.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'createArticle', component: CreateArticleComponent , canActivate:[Auth0Guard]},
  { path: 'editArticle/:id', component: EditArticleComponent , canActivate:[Auth0Guard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
