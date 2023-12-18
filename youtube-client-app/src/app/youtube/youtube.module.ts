import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { AdminCardsComponent } from './components/admin-cards/admin-cards.component';
import { FavoriteCardsComponent } from './components/favorite-cards/favorite-cards.component';
import { SearchResultsItemComponent } from './components/search-results-item/search-results-item.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { HighlightDirective } from './directives/border-color/highlight.directive';
import { ButtonColorDirective } from './directives/button-color/button-color.directive';
import { AdminComponent } from './pages/admin/admin.component';
import { DetailsComponent } from './pages/details/details.component';
import { DetailsCastomComponent } from './pages/details-castom/details-castom.component';
import { ErrorComponent } from './pages/error/error.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { MainComponent } from './pages/main/main.component';
import { FilterDataPipe } from './pipes/filter-data/filter-data.pipe';
import { FilterViewsPipe } from './pipes/filter-views/filter-views.pipe';
import { FilterWordsPipe } from './pipes/filter-words/filter-words.pipe';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  {
    path: 'details/user-card/:id',
    component: DetailsCastomComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'favorite',
    component: FavoriteComponent
  }
];
@NgModule({
  declarations: [
    SearchResultsItemComponent,
    MainComponent,
    HighlightDirective,
    FilterDataPipe,
    FilterViewsPipe,
    FilterWordsPipe,
    ErrorComponent,
    DetailsComponent,
    StatisticComponent,
    ButtonColorDirective,
    AdminComponent,
    FavoriteComponent,
    AdminCardsComponent,
    FavoriteCardsComponent,
    DetailsCastomComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [SearchResultsItemComponent, ErrorComponent]
})
export class YoutubeModule {}
