import { Component, signal } from '@angular/core';
import { ProfileCardComponent } from './profile-card/profile-card';
@Component({
  selector: 'app-root',
  imports: [ProfileCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('1-Tarjeta_de_Perfil_con_input');
  user = { name: 'Ada Lovelace', role: 'Dev', avatar: 'https://i.pravatar.cc/100' };
}
