import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalDoubleCounter } from './signal-double-counter';

describe('SignalDoubleCounter', () => {
  let component: SignalDoubleCounter;
  let fixture: ComponentFixture<SignalDoubleCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalDoubleCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalDoubleCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
