import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedBlogComponent } from './detailed-blog.component';

describe('DetailedBlogComponent', () => {
  let component: DetailedBlogComponent;
  let fixture: ComponentFixture<DetailedBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedBlogComponent]
    });
    fixture = TestBed.createComponent(DetailedBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
