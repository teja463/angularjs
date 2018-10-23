import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {

  @Input() post: BlogPost;

  isFullSummary = false;
  fullSummary : string = '';
  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    this.fullSummary = this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary, [30,'....']);
  }

  summaryToggle(){
    if(this.isFullSummary){
      this.post.summary = this.truncatePipe.transform(this.post.summary, [30,'....']);
    }else{
      this.post.summary = this.fullSummary;
    }
    this.isFullSummary = !this.isFullSummary;
  }

  toggleFav(){
    this.post.isFav = !this.post.isFav;
  }
}
