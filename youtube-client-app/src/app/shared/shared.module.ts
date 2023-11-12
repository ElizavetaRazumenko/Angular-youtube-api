import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomButtonComponent } from './components/custom-button/custom-button.component';

@NgModule({
  declarations: [CustomButtonComponent],
  imports: [BrowserAnimationsModule, MatButtonModule, FormsModule],
  exports: [MatButtonModule, CustomButtonComponent]
})
export class SharedModule {}
