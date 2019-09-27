import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './posts-list/posts/posts.component';
import { ModalComponent } from './_modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewPostComponent } from './new-post/new-post.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostsComponent,
    ModalComponent,
    NewPostComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
