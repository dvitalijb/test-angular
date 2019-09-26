import {Component, ElementRef, OnInit} from '@angular/core';
import {PostService} from './post-list.service';
import {Post} from './post';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalService} from '../_modal/modal.service';
import {CommentsService} from '../_modal/comment.service';
import {UsersService} from '../_modal/users.service';

@Component({
  // selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  paginationButtons: any = Array(10).fill(1).map((item, index) => index);
  currentPage: number = 0;
  posts: Post[] = [];
  errorMessage: string;
  comments: any = [];
  users: any = [];

  // bodyText: string;
  constructor(private postService: PostService,
              private commentsService: CommentsService,
              private usersService: UsersService,
              private router: Router
  ) {
  }

  setPage(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  ngOnInit(): void {
    // this.bodyText = 'This text can be updated in modal 1';
    this.commentsService.getComments().subscribe({
      next: comments => {
        this.comments = comments;
      },
      error: err => this.errorMessage = err
    });
    this.usersService.getUsers().subscribe({
      next: users => {
        this.users = users;
      },
      error: err => this.errorMessage = err
    });

    this.postService.getProducts().subscribe({
      next: posts => {
        this.posts = posts;
      },
      error: err => this.errorMessage = err
    });

  }
  onCreatePost(): void {
    this.router.navigate(['/newPost']);
  }
}
