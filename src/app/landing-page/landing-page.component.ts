import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
  
})
export class LandingPageComponent implements OnInit {
 

  AlanForm = new FormGroup({
    // userName: new FormControl(''),
    userEmail: new FormControl(''),
    userPhone: new FormControl('')
  })

  userName ="";
  userEmail ="";
  userPhone ="";
  userConfirm = document.getElementById("userConfirm");
  
  // userName: string | undefined;

  constructor() {}
  
  ngOnInit()  {
    console.log("Hello")
  }


  submit() {
    // console.log(x);

    // var userName = document.getElementById("name");
    // var userEmail = document.getElementById("email")
    // var userPhone = document.getElementById("phone")

    // console.log(userName?.innerHTML);
    // console.log(userEmail?.innerHTML);
    // console.log(userPhone?.innerHTML);
    // var userName1 = document.forms.buyer.name;

     console.log(this.userName);
     console.log(this.userEmail);
     console.log(this.userPhone);

    // let x = this.userConfirm
    // if (x.style.display === "none") {
    // x.style.display = "block";
    // } else {
    // x.style.display = "none";
    // }

    // console.log("Form properties are:",this.AlanForm.value);
    // console.log("UserName1 is: ",this.userName1.value)
    // console.log("userEmail is:",this.AlanForm.value);
    // console.log("userPhone is:",this.AlanForm.value);

  }


  // clickme() {
  //   this.userName = document.forms.buyer
  //   // console.log('my username',username);
  // }
}

 

