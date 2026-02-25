import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEstudiantes } from './registro-estudiantes';

describe('RegistroEstudiantes', () => {
  let component: RegistroEstudiantes;
  let fixture: ComponentFixture<RegistroEstudiantes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroEstudiantes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroEstudiantes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
