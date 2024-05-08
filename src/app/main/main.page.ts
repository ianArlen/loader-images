import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MainPage implements OnInit, OnDestroy {
  private timeoutRef: any;

  constructor(
    private navCtrl: NavController  
  ) { }

  ngOnInit() {
    this.initializeComponent();
  }

  initializeComponent() {
    console.log('Componente MainPage inicializado.');
  }

  presentLoader() {

    this.navCtrl.navigateForward('/loader');

    this.timeoutRef = setTimeout(() => {
      this.navCtrl.navigateRoot('/end');
    }, 10000);  
  }

  ngOnDestroy() {
    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef);
    }
  }
}
