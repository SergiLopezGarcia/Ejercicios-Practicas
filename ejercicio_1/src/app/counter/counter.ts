import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Contador {
  count = signal(0);
  increment() {
    this.count.update((n) => n + 1);
  }


}
