import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { RecoveryPasswordComponent } from './recoveryPassword/recoveryPassword.component';
import { RegisterComponent } from './register/register.component';
import { CockpitFooterComponent } from './cockpit/cockpitFooter/cockpitFooter.component';
import { CockpitNavbarComponent } from './cockpit/cockpitNavbar/cockpitNavbar.component';
import { CockpitSidebarComponent } from './cockpit/cockpitSidebar/cockpitSidebar.component';
import { CockpitContentComponent } from './cockpit/cockpitContent/cockpitContent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    WelcomeComponent,
    LoginComponent,
    CockpitComponent,
    RecoveryPasswordComponent,
    RegisterComponent,
    CockpitFooterComponent,
    CockpitNavbarComponent,
    CockpitSidebarComponent,
    CockpitContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
