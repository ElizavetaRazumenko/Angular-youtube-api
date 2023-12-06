import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './pages/error/error.component';
import { MainComponent } from './pages/main/main.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { GroupComponent } from './components/group/group.component';
import { GroupsListComponent } from './components/groups-list/groups-list.component';

@NgModule({
  declarations: [
    ErrorComponent,
    MainComponent,
    ProfileComponent,
    GroupComponent,
    GroupsListComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CoreModule],
  exports: [ErrorComponent, MainComponent, ProfileComponent]
})
export class ApplicationModule {}
