import { Component, OnInit } from '@angular/core';
import { FetchUsersService } from './services/fetch-users/fetch-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-service-app';
  users: Array<any> = [];
  error: boolean = false;
  errorMessage: string = ''


  constructor(private fetchUsers: FetchUsersService) {



  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.fetchUsers.fetchUsers().subscribe({
      next: (data) => this.users = data.data,
      error: (error) => {
        console.log(error)
        this.error = true
        this.users = []
        this.errorMessage = error

      }
    });

  }
}
