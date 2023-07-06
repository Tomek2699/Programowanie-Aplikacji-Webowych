import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { CockpitFooterComponent } from './cockpit/cockpitFooter/cockpitFooter.component';
import { CockpitNavbarComponent } from './cockpit/cockpitNavbar/cockpitNavbar.component';
import { CockpitSidebarComponent } from './cockpit/cockpitSidebar/cockpitSidebar.component';
import { CockpitContentComponent } from './cockpit/cockpitContent/cockpitContent.component';
import { EditDialogFunctionalitiesComponent } from './cockpit/cockpitContent/editDialogFunctionalities/editDialogFunctionalities.component';
import { AddDialogTasksComponent } from './cockpit/cockpitContent/addDialogTasks/addDialogTasks.component';
import { AddDialogFunctionalitiesComponent } from './cockpit/cockpitContent/addDialogFunctionalities/addDialogFunctionalities.component';
import { EditDialogTasksComponent } from './cockpit/cockpitContent/editDialogTasks/editDialogTasks.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    CockpitFooterComponent,
    CockpitNavbarComponent,
    CockpitSidebarComponent,
    CockpitContentComponent,
    EditDialogFunctionalitiesComponent,
    AddDialogTasksComponent,
    AddDialogFunctionalitiesComponent,
    EditDialogTasksComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
