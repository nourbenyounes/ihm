import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

import { TestComponent } from './test/test.component';
import { FavComponent } from './fav/fav.component';
import { ListeCoursComponent } from './liste-cours/liste-cours.component';
import { CercleComponent } from './cercle/cercle.component';
import { CoursDetailComponent } from './cours-detail/cours-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    NewsComponent,
    HomeComponent,

    TestComponent,
    FavComponent,
    ListeCoursComponent,
    CercleComponent,
    CoursDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
