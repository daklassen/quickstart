import {Component} from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>
    Hello {{name}}</h1>
  <p><strong>Email</strong>: {{email}}</p>
  <p><strong>Adress:</strong> {{address.street}} {{address.city}} {{address.state}}</p>

  <button (click)="toggleHobbies()">{{showHoobies ? 'Hide':'Show'}} Hobbies</button>

  <div *ngIf="showHoobies">
    <h3>Hobbies</h3>
    <ul>
      <li *ngFor="let hobby of hobbies">
        {{hobby}}
      </li>
    </ul>
  </div>
  `,
})
export class UserComponent {
  name: string;
  email: string;
  address: Address;
  hobbies: string[];
  showHoobies: boolean;

  constructor() {
    this.name = 'David';
    this.email = 'john@email.com';
    this.address = {
      street: '12 Main st',
      city: 'Boston',
      state: 'MA'
    };
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHoobies = true;
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
