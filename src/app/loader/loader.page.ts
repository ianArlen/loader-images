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
  titles = ['Forest Landscape', 'Misty Mountains', 'Sunny Beach'];
  usedTitles = new Set<string>(); // Set to track used titles
  currentIndex = 0;
  currentImage = this.images[0];
  currentTitle = this.titles[0];
  private timeoutId: any;

  constructor() { }

  ngOnInit() {
    this.updateImage();
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private updateImage(): void {
    this.currentImage = this.images[this.currentIndex];
    this.currentTitle = this.getRandomTitle();
    this.currentIndex = (this.currentIndex + 1) % this.images.length;

    this.timeoutId = setTimeout(() => {
      this.updateImage();
    }, 4000);
  }

  private getRandomTitle(): string {
    let possibleTitles = this.titles.filter(title => !this.usedTitles.has(title));
    if (possibleTitles.length === 0) {
      this.usedTitles.clear();
      possibleTitles = this.titles;
    }
    const randomTitle = possibleTitles[Math.floor(Math.random() * possibleTitles.length)];
    this.usedTitles.add(randomTitle);
    return randomTitle;
  }
}
