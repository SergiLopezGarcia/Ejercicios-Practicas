import { Component, signal } from '@angular/core';
import { LoginForm } from "./login-form/login-form";

@Component({
  selector: 'app-root',
  imports: [LoginForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('8-Formulario_de_login_con_template_driven_forms');
}
