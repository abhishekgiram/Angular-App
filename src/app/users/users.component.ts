import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users:any[]=[];
  usersLis$:Observable<any> | undefined;
  constructor(private userService : UsersService) { }

  ngOnInit(): void {
  //   this.userService.getUsers().subscribe((res:any)=>{
  //       console.log(res);
  //       this.users = res;
  //   })
  this.usersLis$ = this.userService.getUsers()
   }

}
