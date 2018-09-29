import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ViewUserDetailsComponent } from './view-user-details/view-user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserDetailsComponent,
    ViewUserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path : '' , component : UserDetailsComponent },
      { path : 'addUser', component : UserDetailsComponent},
      { path : 'viewUsers' , component : ViewUserDetailsComponent}
    ]),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
