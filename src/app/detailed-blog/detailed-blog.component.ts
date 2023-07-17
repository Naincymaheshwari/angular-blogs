import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServicesService } from '../Service/services.service';

@Component({
  selector: 'app-detailed-blog',
  templateUrl: './detailed-blog.component.html',
  styleUrls: ['./detailed-blog.component.css']
})
export class DetailedBlogComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: ServicesService, private router: Router) {
    this.route.paramMap.subscribe(
      (data: any) => {
        this.id = data.params.id;
        console.log(this.id);
      });
  }

  public id!: string | null;

  public blog: any;

  deleteFunc(id: any) {
    this.service.deleteBlog(id).subscribe(
      (data) => {
        console.log('Blog Deleted Successfully');
      }, (error) => {
        console.log('Some error occured');
      }
    );

    this.router.navigateByUrl('/')

  }

  ngOnInit(): void {
    this.getBlogDetails();
  }

  getBlogDetails() {
    this.service.getDataById(this.id).subscribe(
      (data: any) => {
        this.blog = data.blog;
      },
      (error) => {
        console.log('Either the blog doesnt exist or some error occurred');
      }
    );
  }
}
