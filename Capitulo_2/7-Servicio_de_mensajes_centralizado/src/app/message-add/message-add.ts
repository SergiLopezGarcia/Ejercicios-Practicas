import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../message';
@Component({
  selector: 'app-message-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message-add.html',
})
export class MessageAddComponent {
  text = '';

  constructor(private ms: MessageService) {}

  add() {
    const trimmed = this.text.trim();
    if (!trimmed) return;
    this.ms.add(trimmed);
    this.text = '';
  }
}
