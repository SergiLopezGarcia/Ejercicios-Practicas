import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-input',
  imports: [FormsModule],
  templateUrl: './task-input.html',
  styleUrl: './task-input.css',
})
export class TaskInput {
  @Output()
  add = new EventEmitter<string>();
  title = '';
  emit() {
    if (!this.title.trim()) return;
    this.add.emit(this.title);
    this.title = '';
  }
}
