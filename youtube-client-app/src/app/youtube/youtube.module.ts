import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { SearchResultsItemComponent } from './components/search-results-item/search-results-item.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { HighlightDirective } from './directives/border-color/highlight.directive';
import { ButtonColorDirective } from './directives/button-color/button-color.directive';
import { AdminComponent } from './pages/admin/admin.component';
import { DetailsComponent } from './pages/details/details.component';
import { ErrorComponent } from './pages/error/error.component';
import { MainComponent } from './pages/main/main.component';
import { FilterDataPipe } from './pipes/filter-data/filter-data.pipe';
import { FilterViewsPipe } from './pipes/filter-views/filter-views.pipe';
import { FilterWordsPipe } from './pipes/filter-words/filter-words.pipe';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
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
    AdminComponent
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
