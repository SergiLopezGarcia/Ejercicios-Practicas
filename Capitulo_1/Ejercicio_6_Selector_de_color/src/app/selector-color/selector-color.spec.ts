import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorColor } from './selector-color';

describe('SelectorColor', () => {
  let component: SelectorColor;
  let fixture: ComponentFixture<SelectorColor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorColor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorColor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
