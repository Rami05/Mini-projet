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

  constructor() { }

  ngOnInit() {
  }

}
