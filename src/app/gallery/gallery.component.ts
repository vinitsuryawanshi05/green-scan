import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  selectedQR: string | null = null;

  openQR(qrPath: string): void {
    this.selectedQR = qrPath;
  }

  closeQR(): void {
    this.selectedQR = null;
  }
}
