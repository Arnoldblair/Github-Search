import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayProfileComponent } from './display-profile/display-profile.component';
import { DisplayRepositoriesComponent } from './display-repositories/display-repositories.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserServiceComponent } from './user-service/user-service.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayProfileComponent,
    DisplayRepositoriesComponent,
    FormComponent,
    HomeComponent,
    NavbarComponent,
    RepositoriesComponent,
    UserServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
