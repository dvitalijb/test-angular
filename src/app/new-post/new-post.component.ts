import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack(): void {
    this.router.navigate(['/welcome']);
  }

  showAlert(): void {
    alert('saved successfully');
  }

}
