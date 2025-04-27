import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ScanqrComponent } from './scanqr/scanqr.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PlantinfoComponent } from './plantinfo/plantinfo.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ScanqrComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    PlantinfoComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Ensure this is added
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
