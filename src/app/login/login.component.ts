import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {  
  reqpwd:any;
  loginform:FormGroup=new FormGroup({});
constructor(private route:Router,private fb:FormBuilder){
this.loginform=this.fb.group({
  username:['',Validators.required],
  password:['',Validators.required] 
}) 
}
checklogin(){
  console.log(this.loginform.value)
 this.reqpwd=this.loginform.value.username.slice(0,3)+'123';
  if(this.loginform.value.username=="admin" && this.loginform.value.password=="admin123"){
    this.route.navigateByUrl('/admin');
    localStorage.setItem("loggedin",JSON.stringify(this.loginform.value));
  }
  else if(this.loginform.value.password==this.reqpwd){
    this.route.navigateByUrl('/user');
    localStorage.setItem("loggedin",JSON.stringify(this.loginform.value));
  }
  else{
    alert("inavlid credentails");
  }
}

}
