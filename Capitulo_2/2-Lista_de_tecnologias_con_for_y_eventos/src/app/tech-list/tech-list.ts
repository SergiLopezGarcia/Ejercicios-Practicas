import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-list',
  imports: [],
  templateUrl: './tech-list.html',
  styleUrl: './tech-list.css',
})
export class TechList {
techs = ['Angular', 'React', 'Vue', 'Svelte']; 
favorita = '';
}
