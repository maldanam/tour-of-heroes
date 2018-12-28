import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  activeComponent = "Dashboard";
  toggleMenu = false;

  constructor() { }

  ngOnInit() {
  }

  onComponentActivation(componentName: string) {
    console.log(`Header: ${componentName} active.`);
    this.activeComponent = componentName;
    if (this.toggleMenu) {
      this.toggleMenu = false;
    }
  }

  onToggleMenu() {
    this.toggleMenu = !this.toggleMenu;
  }
}
