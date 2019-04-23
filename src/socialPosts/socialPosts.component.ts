import { Component,Input, Output, EventEmitter } from '@angular/core';
import { SocialMediaPosts } from './post/post.component';

@Component({
  selector: 'socialPosts-root',
  templateUrl: './socialPosts.component.html',
  styleUrls: ['./socialPosts.component.css']
})
export class SocialPostsComponent {
  header = 'social-posts';
  brandNewThoughts: boolean = false;
  deleteContent: boolean = false;


    displayPosts: SocialMediaPosts[] = [
      {header: 'Dog', content: 'woof woof'},
      {header: 'Cat', content: 'meow'},
      {header: 'Pig', content: 'oink'},
      {header: 'Cow', content: 'moo'},
      {header: 'Whale', content: 'sings beautifully'}
  ]

  newPost = () => {
    this.brandNewThoughts = true;
  }

  onNewPost = event => {
    this.displayPosts.unshift(event);
    console.log(event);
    this.brandNewThoughts = false;
  }

  

onDeleteThisThought = (event) => {
  this.displayPosts.splice(event, 1);
  console.log('hey');
};


}
