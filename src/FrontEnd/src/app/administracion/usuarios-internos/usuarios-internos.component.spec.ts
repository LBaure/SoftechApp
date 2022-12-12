import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosInternosComponent } from './usuarios-internos.component';

describe('UsuariosInternosComponent', () => {
  let component: UsuariosInternosComponent;
  let fixture: ComponentFixture<UsuariosInternosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosInternosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosInternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
