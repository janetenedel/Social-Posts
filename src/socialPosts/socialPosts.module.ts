import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { SocialPostsComponent } from './socialPosts.component';
import { postComponent } from './post/post.component';
import { postFormComponent } from './postForm/postform.component';

@NgModule({
  declarations: [
    SocialPostsComponent, postComponent, postFormComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [SocialPostsComponent]
})
export class AppModule { }
