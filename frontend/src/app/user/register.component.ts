import { Component } from '@angular/core';
import { AuthService } from '.././auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'register',
	templateUrl: 'register.component.html',
})
export class RegisterComponent {
	path = 'http://localhost:3000';
	registerData = {};
	selectedFileProp = null;

	constructor(private authService: AuthService, private http: HttpClient) {}
	onFileSelected(event) {
		this.selectedFileProp = <File>event.target.files[0];
		console.log(event);
	}
	post() {
		console.log(this.registerData);
		this.authService.registerUser(this.registerData);
		const formData = new FormData();
		formData.append('image', this.selectedFileProp, this.selectedFileProp.name);
		this.http.post(this.path + '/upload', formData).subscribe(res => {
			console.log(res);
		});
	}
}
