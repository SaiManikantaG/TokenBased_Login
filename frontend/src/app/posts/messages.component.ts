import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'messages',
	templateUrl: 'messages.component.html',
})
export class MessagesComponent {
	constructor(private apiService: ApiService, private route: ActivatedRoute) {}

	ngOnInit(): void {
		var userId = this.route.snapshot.params.id;
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		this.apiService.getMessages(userId);
	}
}
