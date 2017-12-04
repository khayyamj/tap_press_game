import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tapped = 0;
  pressed = 0;

  constructor(public navCtrl: NavController) {

  }

  onDidReset(resetType: string) {
    switch (resetType) {
      case 'tap':
        this.tapped = 0;
        break;
      case 'press':
        this.pressed = 0;
        break;
      default: 
        this.tapped = 0;
        this.pressed = 0;
    }
  }

  onDidIncrement(incrementType: string) {
    console.log('Increment -> ', incrementType);
    switch (incrementType) {
      case 'tap':
        this.tapped++;
        break;
      default:
        this.pressed++;
    }
  }
  
}
