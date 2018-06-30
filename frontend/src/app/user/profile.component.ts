import { Component } from '@angular/core';
import { ApiService } from '.././api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'login',
	templateUrl: 'profile.component.html',
})
export class ProfileComponent {
	constructor(private apiService: ApiService, private route: ActivatedRoute) {}

	profile;
	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		var id = this.route.snapshot.params.id;
		this.apiService.getProfile(id).subscribe(data => {
			this.profile = data;
		});
	}
}
