import { Component, OnInit } from '@angular/core';
import { PostService } from './post-list.service';
import { Post } from './post';
import { Router } from '@angular/router';
import { CommentsService } from '../_modal/comment.service';
import { UsersService } from '../_modal/users.service';

@Component({
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

  constructor(
    private postService: PostService,
    private commentsService: CommentsService,
    private usersService: UsersService,
    private router: Router
  ) {
  }

  setPage(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  ngOnInit(): void {
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
    this.router.navigate(['/new-post']);
  }

}
