import { Component, computed, signal } from '@angular/core';
import { MessageService } from '../message';

@Component({
  selector: 'app-message-list',
  standalone: true,
  templateUrl: './message-list.html',
})
export class MessageListComponent {
  // Signal local que refleja el array del servicio
  private _messages = signal<string[]>([]);

  // Valor derivado: lista de mensajes
  readonly messages = computed(() => this._messages());

  // Valor derivado extra (opcional): número de mensajes
  readonly total = computed(() => this._messages().length);

  constructor(private ms: MessageService) {
    // Inicializamos la signal con los datos del servicio
    this._messages.set(this.ms.getAll());
  }
}
