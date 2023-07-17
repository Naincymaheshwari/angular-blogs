import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/Auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
constructor(private authService: AuthService, private navigate: Router) { } 

  userForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(): void { }

  submitForm() {
    console.log(this.userForm.value);
    if (this.userForm.valid) {
      this.authService.login("/login", this.userForm.value).subscribe(
        (data) => {
          this.saveDataInLocalStorage(data);
          this.navigate.navigateByUrl("/");
          setTimeout(function() {
            window.location.reload();
          }, 200);
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

