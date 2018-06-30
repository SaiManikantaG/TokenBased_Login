import { Component } from '@angular/core';
import { AuthService } from '.././auth/auth.service';

@Component({
	selector: 'login',
	templateUrl: 'login.component.html',
})
export class LoginComponent {
	loginData = {};

	constructor(private authService: AuthService) {}

	post() {
		//console.log(this.loginData);
		this.authService.loginUser(this.loginData);
	}
}
