import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ModalService } from '../../_modal/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnChanges, OnInit {
  bodyText: string;
  currentComments: any;
  @Input() currentPosts: any;
  @Input() Page: any;
  @Input() comments: any;
  @Input() users: any;
  postId: any;
  userId: any;
  user: any;

  constructor(private modalService: ModalService, private router: Router) {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }

  openModal(id: string, postId: string) {
    this.postId = postId;
    this.modalService.open(id);
    this.currentComments = this.comments.filter(comment => comment.postId === +postId);
    this.bodyText = this.currentComments;
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  openAuthor(id: string, userId: string) {
    this.userId = userId;
    this.modalService.open(id);
    this.user = this.users.filter(us => us.id === +userId);
    this.user = this.user[0];
  }

  closeAuthor(id: string) {
    this.modalService.close(id);
  }

  showPost(postId): void {
    this.router.navigate(['/post', postId]);
    this.currentComments = this.comments.filter(comment => comment.postId === +postId);
    this.bodyText = this.currentComments;
  }
}
