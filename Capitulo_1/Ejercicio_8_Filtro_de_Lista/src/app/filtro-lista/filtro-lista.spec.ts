import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroLista } from './filtro-lista';

describe('FiltroLista', () => {
  let component: FiltroLista;
  let fixture: ComponentFixture<FiltroLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
