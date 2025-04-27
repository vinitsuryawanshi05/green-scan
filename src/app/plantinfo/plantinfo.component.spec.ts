import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantinfoComponent } from './plantinfo.component';

describe('PlantinfoComponent', () => {
  let component: PlantinfoComponent;
  let fixture: ComponentFixture<PlantinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
