import { Component } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css'],
})
export class DirectComponent {
  isTogled = true;
  logs = [''];
  count = 0;
  dispalyNone() {
    this.isTogled = !this.isTogled;
  }

  logClick() {
    let log = new Date().toString().split(' ')[4];
    this.logs.push(log);
    this.count++;
    //console.log(this.logs);
  }

  getColor() {
    return this.count >= 5 ? 'blue' : 'white';
  }
}
