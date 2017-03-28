import {Component} from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent {
  name: string;
  email: string;
  address: Address;
  hobbies: string[];
  showHoobies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService) {
    this.name = 'David';
    this.email = 'john@email.com';
    this.address = {
      street: '12 Main st',
      city: 'Boston',
      state: 'MA'
    };
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHoobies = true;

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  toggleHobbies() {
    this.showHoobies = !this.showHoobies;
  }
}

interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}
