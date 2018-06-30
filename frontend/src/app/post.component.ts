import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'post',
  template: `<div style="width: 100%">
  <mat-card>
    <mat-card-header>
      <mat-card-title>
        <h4>New Posts</h4>
      </mat-card-title>
    </mat-card-header>
    <mat-card-content>
    <form>
        <mat-form-field class="example-full-width">
          <textarea [(ngModel)]="postMsg" name="description" matInput placeholder="Posts"></textarea>
        </mat-form-field>
        <br>
        <button (click)="post()" mat-raised-button color="primary">Post</button>
      </form>
    </mat-card-content>
  </mat-card>
</div>
`,
})
export class PostComponent {
  constructor(private apiService: ApiService) {}
  postMsg = '';

  post() {
    console.log(this.postMsg);
    this.apiService.postMessages({ msg: this.postMsg });
  }
}
