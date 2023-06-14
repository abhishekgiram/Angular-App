import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import * as collegeData from './../../assets/2019.json'
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  collegeForm: FormGroup;
  
  searchedColleges:any[]=[];
  collegeData:any[]
  constructor(private http: HttpClient,
    private userService : UsersService,
    private formBuilder:FormBuilder) { }
    college2019 : string = '/assets/2019.json'

  ngOnInit(): void {
    this.collegeForm = this.formBuilder.group({
      collegeName:['']
    })
    
    this.http.get(this.college2019).subscribe((res:any)=>{
      this.collegeData = res;
      console.log(this.collegeData)
    })
  }

 get f() { return this.collegeForm.controls; }

searchCollege(){
  console.log(this.collegeForm.value.collegeName)
  this.searchedColleges=[]
  this.collegeData.forEach((college:any) => {
    if(college.Institute.includes(this.collegeForm.value.collegeName)){
      this.searchedColleges.push(college);
    }
  });
  console.log(this.searchedColleges)
}

}
