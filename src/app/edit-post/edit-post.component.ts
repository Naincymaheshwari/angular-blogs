import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from '../Service/services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  constructor(private service: ServicesService, private navigate: Router, private route: ActivatedRoute) {}

  blog!: any;
  editBlog!: any;

  id: any = this.route.snapshot.paramMap.get('id');
  OnSubmit() {
    console.log(this.editBlog.value);
    this.service.updateData(this.id, this.editBlog.value).subscribe(
      (data) => {
        console.log('Blog edited successfully');
      },
      (error) => {
        console.log('Some error');
      }
    );
    this.navigate.navigateByUrl('/')
  }

  ngOnInit(): void {
    this.editBlog = new FormGroup({
      id: new FormControl(this.id),
      title: new FormControl("", Validators.required),
      blog_author: new FormControl("",Validators.required),
      description: new FormControl("", Validators.required),
      });
    this.service.getDataById(this.id).subscribe(
      (data:any) => {
        this.blog = data.blog;
        this.editBlog.controls.id.setValue(this.id);
        this.editBlog.controls.title.setValue(this.blog['title']);
        this.editBlog.controls.blog_author.setValue(this.blog['blog_author']);
        this.editBlog.controls.description.setValue(this.blog['description']);
      },
      (error) => {
        console.log("Some error occurred");
      }
    );
  }
}