import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pasos Largos';
  isMenuOpen = false;
  activeSubmenu: string | null = null;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) {
      this.activeSubmenu = null; // Reset submenus when closing main menu
    }
  }

  toggleSubmenu(menu: string, event: Event) {
    event.stopPropagation(); // Prevent bubbling if necessary
    event.preventDefault(); // Prevent default anchor behavior if used on an anchor
    if (this.activeSubmenu === menu) {
      this.activeSubmenu = null;
    } else {
      this.activeSubmenu = menu;
    }
  }
}
