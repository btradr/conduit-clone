import { Component, Input, OnInit } from '@angular/core';

import { BackendErrorsInterface } from '../../../../types/backend-errors.interface';

@Component({
  selector: 'app-backend-errors-messages',
  template: `
    <ul class="error-messages">
      <li *ngFor="let errorMessage of errorMessages">
        {{ errorMessage }}
      </li>
    </ul>
  `
})
export class BackendErrorsMessagesComponent implements OnInit {

  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface;

  public errorMessages: string[];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map((name: string) => {
      const messages = this.backendErrorsProps[name].join(', ');

      return `${name} ${messages}`;
    });
  }

}
