import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';

import { TestComponent } from './test/test.component';
import { FavComponent } from './fav/fav.component';
import { ListeCoursComponent } from './liste-cours/liste-cours.component';
import { CoursDetailComponent } from './cours-detail/cours-detail.component';

const routes: Routes = [  { path: 'about', component: AboutComponent },{ path: 'cours', component: ListeCoursComponent },{ path: 'news', component: NewsComponent },{ path: 'home', component: HomeComponent }
,{ path: 'cours/:coursId', component: CoursDetailComponent },
{ path: 'test', component: TestComponent },{ path: 'fav', component: FavComponent },
];
//ajouti el routes mta3 el home
//baddel lienet el home
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
