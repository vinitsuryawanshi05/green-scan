import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnDestroy {
  constructor(private router: Router) {}

  goToPage(page: string) {
    this.router.navigate([page]);
  }

  ngOnDestroy() {
    document.removeEventListener("mousemove", this.updateBackground);
  }

  updateBackground(event: MouseEvent) {
    const background = document.querySelector(".wave-background");
    const x = event.clientX;
    const y = event.clientY;

   
  }
}
