import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../Service/comment.service';
import { AuthService } from '../Service/Auth.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {

  comment: string = "";
  blog_id: number = 0;
  editComment: any = [];
  editCommentValue: string = "";
  comments: any = [];
  constructor(private authService: AuthService, private commentService: CommentService, private navigate: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(
      (data: any) => {
        this.blog_id = data.params.id;
      });
  }

  ngOnInit(): void {
    this.loadComments();
  }

  Submit() {
    if (!this.authService.isUserLoggedIn()) {
      alert("Please login first");
      return;
    }
    if (this.comment != "") {
      const obj = {
        "comment": this.comment
      }
      this.commentService.sendComment(this.blog_id, obj).subscribe(
        (data) => {
          console.log('Comment sent successfully');
          this.comment = "";
          this.loadComments();
        },
        (error) => {
          console.log('Some error Occured');
        }
      );
    } else {
      alert("please fill data");
    }
  }

  loadComments() {
    this.commentService.getComments(this.blog_id).subscribe(
      (data: any) => {
        this.comments = data.comments;
      },
      (error: any) => {
        console.log('Some error Occured');
      }
    );
  }

  cancelEditComment(index: number) {
    this.editComment[index] = false;
  }

  updateComment(commentId: number) {
    if (!this.authService.isUserLoggedIn()) {
      alert("Please login first");
      return;
    }
    if (this.editCommentValue != "") {
      const obj = {
        "comment": this.editCommentValue
      }
      this.commentService.updateComment(commentId, obj).subscribe(
        (data) => {
          console.log('Comment updated successfully');
          this.editCommentValue = "";
          this.editComment = false;
          this.loadComments();
        },
        (error) => {
          console.log('Some error Occured');
        }
      );
    } else {
      alert("please fill data");
    }
  }

  editCommentFn(index: number, value: string) {
    this.editCommentValue = value;
    this.editComment[index] = true;
  }

  deleteCommentFn(commentId: number) {

  }

}

