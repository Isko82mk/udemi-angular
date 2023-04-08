import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: `
    <div>
      <h1>Warning!!!</h1>
    </div>
  `,
  styles: [
    `
      div {
        width: 200px;
        height: 200px;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 50px 50px;
      }
      div h1 {
        margin: 0px;
        color: white;
      }
    `,
  ],
})
export class WarningComponent {}
