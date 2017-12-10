import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RatingModule} from 'ng2-rating';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {SearchComponent} from './components/search/search.component';
import {BannerComponent} from './components/banner/banner.component';
import {FooterComponent} from './components/footer/footer.component';
import {SearchCardComponent} from './components/search-card/search-card.component';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {ExploreComponent} from './components/explore/explore.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {HomeComponent} from './components/home/home.component';
import {TopStylistsComponent} from './components/top-stylists/top-stylists.component';
import {TopStylistCardComponent} from './components/top-stylist-card/top-stylist-card.component';
import {SlickModule} from 'ngx-slick';
import {MatChipsModule} from '@angular/material/chips';
import { FilterComponent } from './components/filter/filter.component';


const appRoutes: Routes = [
  {path: 'search', component: SearchResultComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    BannerComponent,
    FooterComponent,
    SearchCardComponent,
    SearchResultComponent,
    ExploreComponent,
    PageNotFoundComponent,
    HomeComponent,
    TopStylistsComponent,
    TopStylistCardComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RatingModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    SlickModule.forRoot(),
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
