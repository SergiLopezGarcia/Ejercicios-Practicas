import { Component } from '@angular/core';
import { MessageAddComponent } from './message-add/message-add';
import { MessageListComponent } from './message-list/message-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MessageAddComponent, MessageListComponent],
  templateUrl: './app.html',
})
export class AppComponent {}
