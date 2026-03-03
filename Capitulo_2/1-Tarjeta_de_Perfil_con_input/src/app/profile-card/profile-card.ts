import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.html'
})
export class ProfileCardComponent {
  @Input() name = '';
  @Input() role = '';
  @Input() avatar = '';
}
