import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
	MatButtonModule,
	MatCardModule,
	MatFormFieldModule,
	MatToolbarModule,
	MatInputModule,
	MatListModule,
} from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApiService } from './api/api.service';
import { AuthService } from './auth/auth.service';
import { MessagesComponent } from './messages.component';
import { RegisterComponent } from './user/register.component';
import { LoginComponent } from './user/login.component';
import { UsersComponent } from './user/users.component';
import { ProfileComponent } from './user/profile.component';
import { AuthInterceptorService } from './auth/authInterceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post.component';
const routes = [
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'users', component: UsersComponent },
	{ path: 'profile/:id', component: ProfileComponent },
	{ path: '', component: PostComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		PostComponent,
		UsersComponent,
		MessagesComponent,
		RegisterComponent,
		LoginComponent,
		ProfileComponent,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		HttpClientModule,
		MatButtonModule,
		MatCardModule,
		MatToolbarModule,
		MatInputModule,
		BrowserAnimationsModule,
		MatFormFieldModule,
		FormsModule,
		MatListModule,
	],
	providers: [
		ApiService,
		AuthService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptorService,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
