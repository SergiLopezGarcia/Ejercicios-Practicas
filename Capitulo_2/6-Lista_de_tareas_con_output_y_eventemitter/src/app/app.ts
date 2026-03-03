import { Component, signal } from '@angular/core';
import { TaskInput } from "./task-input/task-input";
@Component({
  selector: 'app-root',
  imports: [TaskInput],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('6-Lista_de_tareas_con_output_y_eventemitter');
  tasks: string[] = [];
  onAdd(task: string) {
    this.tasks.push(task);
  }
}
