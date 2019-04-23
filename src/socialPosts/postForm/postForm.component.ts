import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SocialMediaPosts } from '../post/post.component';


@Component({
    selector: 'post-form',
    templateUrl: './postForm.component.html',
    styleUrls: ['./postForm.component.css']
  })

  export class postFormComponent {
    
    @Output() newPost = new EventEmitter<SocialMediaPosts>();


    headerInput: string;
    contentInput: string;
    brandNewThoughts: boolean;
    

    submitted = () => {
      const newUserPost = {
        header: this.headerInput,
        content: this.contentInput,
      };
      this.newPost.emit(newUserPost);
    };

  }