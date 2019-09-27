import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../posts-list/post';
import { PostService } from '../posts-list/post-list.service';
import { CommentsService } from '../_modal/comment.service';
import { UsersService } from '../_modal/users.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postId: any;
  posts: Post[] = [];
  comments: any = [];
  errorMessage: string;
  post: string;
  currentComments: any;

  constructor(
    private postService: PostService,
    private commentsService: CommentsService,
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('postId');
    console.log('inside' + this.comments);
    this.commentsService.getComments().subscribe({
      next: comments => {
        this.currentComments = comments.filter(comment => comment.postId === +this.postId);
        console.log('post' + this.comments);
      },
      error: err => this.errorMessage = err
    });

    this.postService.getProducts().subscribe({
      next: posts => {
        this.post = posts.filter(post => post.id === +this.postId)[0].title;
        console.log('post' + this.post);
      },
      error: err => this.errorMessage = err
    });
  }

  onBack() {
    this.router.navigate(['/']);
  }

}
