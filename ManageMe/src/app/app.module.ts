import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { RecoveryPasswordComponent } from './recoveryPassword/recoveryPassword.component';
import { RegisterComponent } from './register/register.component';
import { CockpitFooterComponent } from './cockpit/cockpitFooter/cockpitFooter.component';
import { CockpitNavbarComponent } from './cockpit/cockpitNavbar/cockpitNavbar.component';
import { CockpitSidebarComponent } from './cockpit/cockpitSidebar/cockpitSidebar.component';
import { CockpitContentComponent } from './cockpit/cockpitContent/cockpitContent.component';
import { EditDialogFunctionalitiesComponent } from './cockpit/cockpitContent/editDialogFunctionalities/editDialogFunctionalities.component';
import { AddDialogTasksComponent } from './cockpit/cockpitContent/addDialogTasks/addDialogTasks.component';
import { AddDialogFunctionalitiesComponent } from './cockpit/cockpitContent/addDialogFunctionalities/addDialogFunctionalities.component';
import { EditDialogTasksComponent } from './cockpit/cockpitContent/editDialogTasks/editDialogTasks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    WelcomeComponent,
    LoginComponent,
    CockpitComponent,
    RecoveryPasswordComponent,
    RegisterComponent,
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
