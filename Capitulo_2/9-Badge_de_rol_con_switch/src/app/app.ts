import { Component, signal } from '@angular/core';
import { UserRoleBadge } from "./user-role-badge/user-role-badge";
@Component({
  selector: 'app-root',
  imports: [UserRoleBadge],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('9-Badge_de_rol_con_switch');
}
