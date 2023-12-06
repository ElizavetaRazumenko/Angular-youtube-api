import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [HeaderComponent, LogoComponent, AlertComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [HeaderComponent, AlertComponent]
})
export class CoreModule {}
