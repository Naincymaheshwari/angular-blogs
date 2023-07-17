import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from '../Service/services.service';
import { Router } from '@angular/router';
import { AuthService } from '../Service/Auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private authService: AuthService, private navigate: Router) { }

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(): void { }

  submitForm() {
    console.log(this.userForm.value);
    if (this.userForm.valid) {
      this.authService.signup("/signup", this.userForm.value).subscribe(
        (data) => {
          this.saveDataInLocalStorage(data);
          this.navigate.navigateByUrl("/login")
        },
        (error) => {
          console.log('Some error Occured');
        }
      );
    } else {
      alert("please fill data");
    }
  }

  saveDataInLocalStorage(data: any) {
    window.localStorage.setItem("token", data['token']);
    window.localStorage.setItem("name", data['user']['name']);
    window.localStorage.setItem("email", data['user']['email']);
  }
}
