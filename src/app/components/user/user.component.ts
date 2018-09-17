import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: String;
  age: number;
  email: String;
  address: Address;
  hobbies: string[];
  posts: Post[];
  isEdit = false;

  constructor(private dataService: DataService) {
   }

  ngOnInit() {
    this.name = 'Phakama Ntshewula';
    this.email = 'ntshewulap@gmail.com';
    this.age = 26;
    this.address = {
      street: '69 SteelPoort st, Delft',
      city: 'Cape town',
      state: 'ZA'
    };
    this.hobbies = ['coding', 'watch movie', 'reading'];

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  onClick() {
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }

  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
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
  userId: number;
}
