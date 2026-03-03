import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search-filter',
  imports: [FormsModule],
  templateUrl: './search-filter.html',
  styleUrl: './search-filter.css',
})
export class SearchFilter {
term = ''; 
items = ['Barcelona', 'Madrid', 'Valencia', 'Bilbao', 'Sevilla'];
get filteredItems() {
  return this.items.filter(i => i.toLowerCase().includes(this.term.toLowerCase()));
}

}
