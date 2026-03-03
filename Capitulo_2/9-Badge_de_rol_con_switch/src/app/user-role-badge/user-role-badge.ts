import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-user-role-badge',
  imports: [],
  templateUrl: './user-role-badge.html',
  styleUrl: './user-role-badge.css',
})
export class UserRoleBadge {
@Input() role: 'admin' | 'editor' | 'viewer' = 'viewer';

}
