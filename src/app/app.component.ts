import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  blogs = 
[
  {
  title : 'Mon premier post',
  content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
  loveits : '1',
  T :  new Date()
} ,
  {
    title : 'Mon deuxieme post',
    content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    loveits : '0', 
     T :  new Date()

  },  
    {
      title : 'Mon troisieme post',
      content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      loveits : '1' ,
      T :  new Date()

    }
      
] ;
 constructor(){

 }
}
