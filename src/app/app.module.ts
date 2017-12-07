import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {SearchComponent} from './components/search/search.component';
import {BannerComponent} from './components/banner/banner.component';
import {FooterComponent} from './components/footer/footer.component';
import {SearchCardComponent} from './components/search-card/search-card.component';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {ExploreComponent} from './components/explore/explore.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    BannerComponent,
    FooterComponent,
    SearchCardComponent,
    SearchResultComponent,
    ExploreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
