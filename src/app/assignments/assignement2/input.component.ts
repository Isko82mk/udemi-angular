import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  userName: string | undefined;

  constructor() {}

  clearUsername() {
    this.userName = '';
  }
}
