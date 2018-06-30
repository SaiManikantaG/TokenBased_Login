import { Component } from '@angular/core';
import { ApiService } from '.././api/api.service';

@Component({
	selector: 'users',
	templateUrl: 'users.component.html',
})
export class UsersComponent {
	constructor(private apiService: ApiService) {}

	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		this.apiService.getUsers();
	}
}
