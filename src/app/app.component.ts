import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-github-hosting-project';
  images = ['demo1.jpg', 'demo2.jpg', 'demo3.jpg'];
  currentImage = 0;

  /**This function implements the components */
  ngOnInit(){ 
    this.updateImage();
  }

  updateImage(){

    /**every 8 Sec. increment the index */
    setInterval(()=> {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length; //every 8Sec. count and change 0..1..2 
    }, 8000)
    
  }

}
