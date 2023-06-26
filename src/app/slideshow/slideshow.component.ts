import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['demo1.jpg', 'demo2.jpg', 'demo3.jpg'];
  headlines = ['Bring engineering to the next level',
    'Fun with programming',
    'graduated in HDA and in Developer Akademie'];

  currentImage = 0;
  showImage = true;


  /**This function implements the components */
  ngOnInit() {
    this.updateImage();
  }



  updateImage() {
    /**every 8 Sec. increment the index */
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length; //every 8Sec. count and change 0..1..2 
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 100);

    }, 8000)

  }
}
