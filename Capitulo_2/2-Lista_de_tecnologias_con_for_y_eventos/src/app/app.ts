import { Component, signal } from '@angular/core';
import { TechList } from "./tech-list/tech-list";

@Component({
  selector: 'app-root',
  imports: [TechList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('2-Lista_de_tecnologias_con_for_y_eventos');
}
