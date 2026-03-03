import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleBadge } from './user-role-badge';

describe('UserRoleBadge', () => {
  let component: UserRoleBadge;
  let fixture: ComponentFixture<UserRoleBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRoleBadge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRoleBadge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
