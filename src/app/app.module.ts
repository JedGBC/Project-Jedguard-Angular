import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { ArticlesService } from './services/articles.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { PublicationDetailsComponent } from './components/publication-details/publication-details.component';
import { ProfileService } from './services/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CardComponent,
    PublicationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-gb25f8zlm5kjoikc.us.auth0.com',
      clientId: 'IC7eU7wjNBm0vNdTf4IaLKoEH1OzgCp0',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [ArticlesService,ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
