import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageAdd } from './message-add';

describe('MessageAdd', () => {
  let component: MessageAdd;
  let fixture: ComponentFixture<MessageAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
