import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  emailRegex : string = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
  passwordRegex : string = '^[a-zA-Z0-9]{10}$';
  validEmail : boolean = true;
  validPass : boolean = true;

  constructor() { }


    emailF = new FormControl('',[Validators.required,Validators.pattern('')]);
    pass = new FormControl('', [Validators.required,Validators.pattern('')])


  email($event: any){
    this.validEmail = true;
  

  }

  password($event: any){
    this.validPass = true;
  }

  ngOnInit(): void {
  }

  signIn($event:any){
  if(this.emailF.value === 'aaa@gmail.com'){
       this.validEmail = true;
   }
    else{
      this.validEmail = false;
   }
   if(this.pass.value === 'abcde12345'){
     this.validPass = true;
    }
    else{
      this.validPass = false;
     }
     console.log(this.validEmail,' ',this.validPass);
 }
}
