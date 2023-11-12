import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@shared/shared.module';

import { FilteringBlockComponent } from './components/filtering/filtering-block/filtering-block.component';
import { FilteringInputComponent } from './components/filtering/filtering-input/filtering-input.component';
import { SortingButtonsComponent } from './components/filtering/sorting-buttons/sorting-buttons.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SettingsButtonComponent } from './components/settings-button/settings-button.component';
import { UserDataComponent } from './components/user-data/user-data.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchFormComponent,
    LogoComponent,
    SettingsButtonComponent,
    FilteringBlockComponent,
    FilteringInputComponent,
    SortingButtonsComponent
  ],
  exports: [HeaderComponent],
  imports: [
    UserDataComponent,
    SharedModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CoreModule {}
