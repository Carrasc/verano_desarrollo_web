import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaAdopcionComponent } from './nueva-adopcion.component';

describe('NuevaAdopcionComponent', () => {
  let component: NuevaAdopcionComponent;
  let fixture: ComponentFixture<NuevaAdopcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaAdopcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
