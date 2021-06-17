import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { YoutubeModule } from './youtube/youtube.module';
import { WebModule } from './web/web.module';
import { InstagramModule } from './instagram/instagram.module';
import { FacebookModule } from './facebook/facebook.module';
import { BlogModule } from './blog/blog.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from './users/users.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { OrdersComponent } from './orders/orders.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ClientComponent } from './orders/client/client.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TemplateComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    UsersComponent,
    OrdersComponent,
    ChangePasswordComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    BlogModule,
    FacebookModule,
    InstagramModule,
    WebModule,
    YoutubeModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    NgxSpinnerModule,
    Ng2SearchPipeModule
  ],
  providers: [
    /* { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } */
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
