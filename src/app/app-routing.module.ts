import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { HomeComponent } from './home/home.component';
import { DetailedBlogComponent } from './detailed-blog/detailed-blog.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/Auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'blogs/add', component: AddPostComponent, canActivate: [AuthGuard]},
  { path: 'blogs/:id', component: DetailedBlogComponent },
  { path: 'blogs/edit/:id', component: EditPostComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
