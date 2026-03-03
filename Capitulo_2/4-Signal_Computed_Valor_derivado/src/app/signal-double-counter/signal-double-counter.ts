import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-signal-double-counter',
  imports: [],
  templateUrl: './signal-double-counter.html',
  styleUrl: './signal-double-counter.css',
})
export class SignalDoubleCounter {
  count = signal(0);
  double = computed(() => this.count() * 2);
  increment() {
    this.count.update((v) => v + 1);
  }
  reset() {
    this.count.set(0);
  }
}
