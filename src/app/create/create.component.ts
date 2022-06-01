import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  ngOnInit(): void {
  }

  model: any;
  successmsg: any;

  userForm= new FormGroup({
    'name': new FormControl('',Validators.required),
    'email': new FormControl('',Validators.required),
    'dob': new FormControl('',Validators.required),
    'city': new FormControl('',Validators.required),
    'pin': new FormControl('',Validators.required),


  });

  userSubmit(){
    if(this.userForm.valid){
      this.service.createData(this.userForm.value).subscribe((res)=>{
        console.log(res);
        this.userForm.reset();
        this.successmsg ='Data inserted successfully';
      });
    }
  }



}
