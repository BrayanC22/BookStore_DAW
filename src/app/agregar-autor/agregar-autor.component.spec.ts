import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAutorComponent } from './agregar-autor.component';

describe('AgregarAutorComponent', () => {
  let component: AgregarAutorComponent;
  let fixture: ComponentFixture<AgregarAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
