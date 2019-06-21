import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevoUsuarioComponent } from './form-nuevo-usuario.component';

describe('FormNuevoUsuarioComponent', () => {
  let component: FormNuevoUsuarioComponent;
  let fixture: ComponentFixture<FormNuevoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNuevoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNuevoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
