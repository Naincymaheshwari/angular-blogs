import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from '../Service/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  constructor(private service: ServicesService, private navigate: Router) {}

  addBlog = new FormGroup({
    id: new FormControl(uuid()),
    title: new FormControl('', Validators.required),
    blog_author: new FormControl('',Validators.required),
    description: new FormControl('', Validators.required),
  });

  OnSubmit() {
    console.log(this.addBlog.value);
    this.service.sendData("/add", this.addBlog.value).subscribe(
      (data) => {
        console.log('Data sent successfully');
        this.navigate.navigateByUrl("/")
      },
      (error) => {
        console.log('Some error Occured');
      }
    );
  }

  ngOnInit(): void {}
}
