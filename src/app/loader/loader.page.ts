import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoaderPage implements OnInit, OnDestroy {
  images = [
    'https://img.freepik.com/foto-gratis/paisaje-forestal_71767-127.jpg',
    'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg',
    'https://content.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg'
  ];
  currentIndex = 0;
  currentImage = this.images[0];
  private intervalId: any;

  constructor() { }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIndex++;
      if (this.currentIndex >= this.images.length) {
        this.currentIndex = 0;
      }
      this.currentImage = this.images[this.currentIndex];
    }, 4000); 
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
