import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Service/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private getBlogService : ServicesService) {}

  items!: any;

  ngOnInit(): void {
    this.getBlogService.getData().subscribe(
      (data:any) => {
        this.items = data.blogs;
      },
      (error) => {
        console.log('Some error occured');
      }
    );
  }
}
