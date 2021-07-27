import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsHelpPage } from './options-help.page';

describe('OptionsHelpPage', () => {
  let component: OptionsHelpPage;
  let fixture: ComponentFixture<OptionsHelpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsHelpPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsHelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
