import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path: 'new-post', component: NewPostComponent},
  {path: 'post/:postId', component: PostComponent},
  {path: 'post-list', component: PostsListComponent},
  {path: '', redirectTo: 'post-list', pathMatch: 'full'},
  {path: '**', redirectTo: 'post-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
