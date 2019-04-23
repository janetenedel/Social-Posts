import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface SocialMediaPosts {
    header: string;
    content: string;
}

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
  })

  export class postComponent {

    // @Output() deleteThisThought = new EventEmitter<SocialMediaPosts>();

      header = 'Post Component';
      
    
      @Input() socialMediaPosts: SocialMediaPosts;

    //   deleteThought = (index) => {  deleteThought = indexOfItem => {
    //     const index = this.displayPosts.indexOf(indexOfItem);
    //     this.displayPosts.splice(index, 1);
    //     this.deleteThisThought.emit(indexOfItem);
    //   };
    //       this.displayPosts.splice(index, 1);
    //   }
    @Input() index: number;
    // @Input() displayPosts: [];

    @Output() deleteThisThought = new EventEmitter<number>();
    

  deleteThought = () => {
    this.deleteThisThought.emit(this.index);
    console.log('heya');
  };

  }
