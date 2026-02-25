import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPersonal } from './tarjeta-personal';

describe('TarjetaPersonal', () => {
  let component: TarjetaPersonal;
  let fixture: ComponentFixture<TarjetaPersonal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaPersonal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaPersonal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
