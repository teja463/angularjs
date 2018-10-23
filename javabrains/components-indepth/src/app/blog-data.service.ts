import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';

@Injectable()
export class BlogDataService {

  constructor() { }

  getData(): BlogPost[][]{
    return [
      [
        
        {
          title: "Post 1",
          summary: "Proident velit elit duis occaecat nisi quis Lorem elit aliqua ullamco nostrud. Esse eiusmod aute esse reprehenderit ad minim. Fugiat officia nulla occaecat amet dolore nisi quis culpa sit enim. Consequat nostrud veniam ea sunt eiusmod est reprehenderit excepteur Lorem tempor aliqua ullamco tempor consequat. Deserunt magna culpa irure voluptate. Sit exercitation consequat duis nostrud nostrud quis ut mollit labore. Aute laborum cupidatat nulla aliquip nisi ad ut irure amet eiusmod. Ad aliquip deserunt consequat eu officia adipisicing exercitation pariatur est ut incididunt. Exercitation proident ut adipisicing reprehenderit dolor minim magna aliquip. Culpa quis magna incididunt eu excepteur mollit officia. Anim pariatur ex ipsum dolor in. Ipsum ea elit est deserunt magna. Anim cupidatat sit voluptate officia deserunt excepteur tempor velit ex. Irure aliquip ullamco est ad cillum sint ex laboris ad."
        },
        {
          title: "Post 2",
          summary: "Proident velit elit duis occaecat nisi quis Lorem elit aliqua ullamco nostrud. Esse eiusmod aute esse reprehenderit ad minim. Fugiat officia nulla occaecat amet dolore nisi quis culpa sit enim. Consequat nostrud veniam ea sunt eiusmod est reprehenderit excepteur Lorem tempor aliqua ullamco tempor consequat. Deserunt magna culpa irure voluptate. Sit exercitation consequat duis nostrud nostrud quis ut mollit labore. Aute laborum cupidatat nulla aliquip nisi ad ut irure amet eiusmod. Ad aliquip deserunt consequat eu officia adipisicing exercitation pariatur est ut incididunt. Exercitation proident ut adipisicing reprehenderit dolor minim magna aliquip. Culpa quis magna incididunt eu excepteur mollit officia. Anim pariatur ex ipsum dolor in. Ipsum ea elit est deserunt magna. Anim cupidatat sit voluptate officia deserunt excepteur tempor velit ex. Irure aliquip ullamco est ad cillum sint ex laboris ad."
        },
        {
          title: "Post 3",
          summary: "Proident velit elit duis occaecat nisi quis Lorem elit aliqua ullamco nostrud. Esse eiusmod aute esse reprehenderit ad minim. Fugiat officia nulla occaecat amet dolore nisi quis culpa sit enim. Consequat nostrud veniam ea sunt eiusmod est reprehenderit excepteur Lorem tempor aliqua ullamco tempor consequat. Deserunt magna culpa irure voluptate. Sit exercitation consequat duis nostrud nostrud quis ut mollit labore. Aute laborum cupidatat nulla aliquip nisi ad ut irure amet eiusmod. Ad aliquip deserunt consequat eu officia adipisicing exercitation pariatur est ut incididunt. Exercitation proident ut adipisicing reprehenderit dolor minim magna aliquip. Culpa quis magna incididunt eu excepteur mollit officia. Anim pariatur ex ipsum dolor in. Ipsum ea elit est deserunt magna. Anim cupidatat sit voluptate officia deserunt excepteur tempor velit ex. Irure aliquip ullamco est ad cillum sint ex laboris ad."
        },
        {
          title: "Post 4",
          summary: "Proident velit elit duis occaecat nisi quis Lorem elit aliqua ullamco nostrud. Esse eiusmod aute esse reprehenderit ad minim. Fugiat officia nulla occaecat amet dolore nisi quis culpa sit enim. Consequat nostrud veniam ea sunt eiusmod est reprehenderit excepteur Lorem tempor aliqua ullamco tempor consequat. Deserunt magna culpa irure voluptate. Sit exercitation consequat duis nostrud nostrud quis ut mollit labore. Aute laborum cupidatat nulla aliquip nisi ad ut irure amet eiusmod. Ad aliquip deserunt consequat eu officia adipisicing exercitation pariatur est ut incididunt. Exercitation proident ut adipisicing reprehenderit dolor minim magna aliquip. Culpa quis magna incididunt eu excepteur mollit officia. Anim pariatur ex ipsum dolor in. Ipsum ea elit est deserunt magna. Anim cupidatat sit voluptate officia deserunt excepteur tempor velit ex. Irure aliquip ullamco est ad cillum sint ex laboris ad."
        },
      ],
      [
        {
          title: "Post 5",
          summary: "Proident velit elit duis occaecat nisi quis Lorem elit aliqua ullamco nostrud. Esse eiusmod aute esse reprehenderit ad minim. Fugiat officia nulla occaecat amet dolore nisi quis culpa sit enim. Consequat nostrud veniam ea sunt eiusmod est reprehenderit excepteur Lorem tempor aliqua ullamco tempor consequat. Deserunt magna culpa irure voluptate. Sit exercitation consequat duis nostrud nostrud quis ut mollit labore. Aute laborum cupidatat nulla aliquip nisi ad ut irure amet eiusmod. Ad aliquip deserunt consequat eu officia adipisicing exercitation pariatur est ut incididunt. Exercitation proident ut adipisicing reprehenderit dolor minim magna aliquip. Culpa quis magna incididunt eu excepteur mollit officia. Anim pariatur ex ipsum dolor in. Ipsum ea elit est deserunt magna. Anim cupidatat sit voluptate officia deserunt excepteur tempor velit ex. Irure aliquip ullamco est ad cillum sint ex laboris ad."
        },
        {
          title: "Post 6",
          summary: "Proident velit elit duis occaecat nisi quis Lorem elit aliqua ullamco nostrud. Esse eiusmod aute esse reprehenderit ad minim. Fugiat officia nulla occaecat amet dolore nisi quis culpa sit enim. Consequat nostrud veniam ea sunt eiusmod est reprehenderit excepteur Lorem tempor aliqua ullamco tempor consequat. Deserunt magna culpa irure voluptate. Sit exercitation consequat duis nostrud nostrud quis ut mollit labore. Aute laborum cupidatat nulla aliquip nisi ad ut irure amet eiusmod. Ad aliquip deserunt consequat eu officia adipisicing exercitation pariatur est ut incididunt. Exercitation proident ut adipisicing reprehenderit dolor minim magna aliquip. Culpa quis magna incididunt eu excepteur mollit officia. Anim pariatur ex ipsum dolor in. Ipsum ea elit est deserunt magna. Anim cupidatat sit voluptate officia deserunt excepteur tempor velit ex. Irure aliquip ullamco est ad cillum sint ex laboris ad."
        },
        {
          title: "Post 7",
          summary: "Proident velit elit duis occaecat nisi quis Lorem elit aliqua ullamco nostrud. Esse eiusmod aute esse reprehenderit ad minim. Fugiat officia nulla occaecat amet dolore nisi quis culpa sit enim. Consequat nostrud veniam ea sunt eiusmod est reprehenderit excepteur Lorem tempor aliqua ullamco tempor consequat. Deserunt magna culpa irure voluptate. Sit exercitation consequat duis nostrud nostrud quis ut mollit labore. Aute laborum cupidatat nulla aliquip nisi ad ut irure amet eiusmod. Ad aliquip deserunt consequat eu officia adipisicing exercitation pariatur est ut incididunt. Exercitation proident ut adipisicing reprehenderit dolor minim magna aliquip. Culpa quis magna incididunt eu excepteur mollit officia. Anim pariatur ex ipsum dolor in. Ipsum ea elit est deserunt magna. Anim cupidatat sit voluptate officia deserunt excepteur tempor velit ex. Irure aliquip ullamco est ad cillum sint ex laboris ad."
        },
        {
          title: "Post 8",
          summary: "Proident velit elit duis occaecat nisi quis Lorem elit aliqua ullamco nostrud. Esse eiusmod aute esse reprehenderit ad minim. Fugiat officia nulla occaecat amet dolore nisi quis culpa sit enim. Consequat nostrud veniam ea sunt eiusmod est reprehenderit excepteur Lorem tempor aliqua ullamco tempor consequat. Deserunt magna culpa irure voluptate. Sit exercitation consequat duis nostrud nostrud quis ut mollit labore. Aute laborum cupidatat nulla aliquip nisi ad ut irure amet eiusmod. Ad aliquip deserunt consequat eu officia adipisicing exercitation pariatur est ut incididunt. Exercitation proident ut adipisicing reprehenderit dolor minim magna aliquip. Culpa quis magna incididunt eu excepteur mollit officia. Anim pariatur ex ipsum dolor in. Ipsum ea elit est deserunt magna. Anim cupidatat sit voluptate officia deserunt excepteur tempor velit ex. Irure aliquip ullamco est ad cillum sint ex laboris ad."
        },
      ],
      [
        {
          title: "Post 9",
          summary: "Proident velit elit duis occaecat nisi quis Lorem elit aliqua ullamco nostrud. Esse eiusmod aute esse reprehenderit ad minim. Fugiat officia nulla occaecat amet dolore nisi quis culpa sit enim. Consequat nostrud veniam ea sunt eiusmod est reprehenderit excepteur Lorem tempor aliqua ullamco tempor consequat. Deserunt magna culpa irure voluptate. Sit exercitation consequat duis nostrud nostrud quis ut mollit labore. Aute laborum cupidatat nulla aliquip nisi ad ut irure amet eiusmod. Ad aliquip deserunt consequat eu officia adipisicing exercitation pariatur est ut incididunt. Exercitation proident ut adipisicing reprehenderit dolor minim magna aliquip. Culpa quis magna incididunt eu excepteur mollit officia. Anim pariatur ex ipsum dolor in. Ipsum ea elit est deserunt magna. Anim cupidatat sit voluptate officia deserunt excepteur tempor velit ex. Irure aliquip ullamco est ad cillum sint ex laboris ad."
        },
        {
          title: "Post 10",
          summary: "Proident velit elit duis occaecat nisi quis Lorem elit aliqua ullamco nostrud. Esse eiusmod aute esse reprehenderit ad minim. Fugiat officia nulla occaecat amet dolore nisi quis culpa sit enim. Consequat nostrud veniam ea sunt eiusmod est reprehenderit excepteur Lorem tempor aliqua ullamco tempor consequat. Deserunt magna culpa irure voluptate. Sit exercitation consequat duis nostrud nostrud quis ut mollit labore. Aute laborum cupidatat nulla aliquip nisi ad ut irure amet eiusmod. Ad aliquip deserunt consequat eu officia adipisicing exercitation pariatur est ut incididunt. Exercitation proident ut adipisicing reprehenderit dolor minim magna aliquip. Culpa quis magna incididunt eu excepteur mollit officia. Anim pariatur ex ipsum dolor in. Ipsum ea elit est deserunt magna. Anim cupidatat sit voluptate officia deserunt excepteur tempor velit ex. Irure aliquip ullamco est ad cillum sint ex laboris ad."
        },
        {
          title: "Post 11",
          summary: "Proident velit elit duis occaecat nisi quis Lorem elit aliqua ullamco nostrud. Esse eiusmod aute esse reprehenderit ad minim. Fugiat officia nulla occaecat amet dolore nisi quis culpa sit enim. Consequat nostrud veniam ea sunt eiusmod est reprehenderit excepteur Lorem tempor aliqua ullamco tempor consequat. Deserunt magna culpa irure voluptate. Sit exercitation consequat duis nostrud nostrud quis ut mollit labore. Aute laborum cupidatat nulla aliquip nisi ad ut irure amet eiusmod. Ad aliquip deserunt consequat eu officia adipisicing exercitation pariatur est ut incididunt. Exercitation proident ut adipisicing reprehenderit dolor minim magna aliquip. Culpa quis magna incididunt eu excepteur mollit officia. Anim pariatur ex ipsum dolor in. Ipsum ea elit est deserunt magna. Anim cupidatat sit voluptate officia deserunt excepteur tempor velit ex. Irure aliquip ullamco est ad cillum sint ex laboris ad."
        },
        {
          title: "Post 12",
          summary: "Proident velit elit duis occaecat nisi quis Lorem elit aliqua ullamco nostrud. Esse eiusmod aute esse reprehenderit ad minim. Fugiat officia nulla occaecat amet dolore nisi quis culpa sit enim. Consequat nostrud veniam ea sunt eiusmod est reprehenderit excepteur Lorem tempor aliqua ullamco tempor consequat. Deserunt magna culpa irure voluptate. Sit exercitation consequat duis nostrud nostrud quis ut mollit labore. Aute laborum cupidatat nulla aliquip nisi ad ut irure amet eiusmod. Ad aliquip deserunt consequat eu officia adipisicing exercitation pariatur est ut incididunt. Exercitation proident ut adipisicing reprehenderit dolor minim magna aliquip. Culpa quis magna incididunt eu excepteur mollit officia. Anim pariatur ex ipsum dolor in. Ipsum ea elit est deserunt magna. Anim cupidatat sit voluptate officia deserunt excepteur tempor velit ex. Irure aliquip ullamco est ad cillum sint ex laboris ad."
        },
      ]
    ];
  }
}
