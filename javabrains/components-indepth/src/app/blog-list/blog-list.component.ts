import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts: BlogPost[][];
  currentPage: number;

  @ViewChildren("blog") blogPostTileComponents: QueryList<BlogPostTileComponent>;
  constructor(private blogDataSvc: BlogDataService) { }

  ngOnInit() {
    this.currentPage = 0;
    this.blogPosts = this.blogDataSvc.getData();
  }

  expandAll(){
    this.blogPostTileComponents.forEach(element => {
      element.summaryToggle();
    });;
  }
  updateCurrentPage(pageNo: number){
    this.currentPage = pageNo;
  }
}
