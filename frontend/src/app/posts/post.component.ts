import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
	selector: 'post',
	templateUrl: 'post.component.html',
})
export class PostComponent {
	constructor(private apiService: ApiService) {}
	postMsg = '';

	post() {
		console.log(this.postMsg);
		this.apiService.postMessages({ msg: this.postMsg });
	}
}
