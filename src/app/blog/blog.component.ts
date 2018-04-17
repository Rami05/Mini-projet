import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input () title : string ;
  @Input() content : string ;

  @Input() loveits : number;
  @Input() T :Date ;
  l = 0;
  d = 0;

    nbrlik(){
         return this.l = this.l + 1;
    }
    nbrdes(){
      return this.d = this.d + 1 ;
    }

  constructor() { }

  ngOnInit() {
  }

}
