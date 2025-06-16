import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isCollapsed = false;

  constructor(private viewportScroller: ViewportScroller) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isCollapsed = window.scrollY > 80;
  }

  scrollToAbout(event: Event) {
    event.preventDefault();
    this.viewportScroller.scrollToAnchor('about-section');
  }

  scrollToRegion(event: Event) {
    event.preventDefault();
    this.viewportScroller.scrollToAnchor('region-section');
  }
}