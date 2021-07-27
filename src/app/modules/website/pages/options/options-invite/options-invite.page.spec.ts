import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsInvitePage } from './options-invite.page';

describe('OptionsInvitePage', () => {
  let component: OptionsInvitePage;
  let fixture: ComponentFixture<OptionsInvitePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsInvitePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsInvitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
