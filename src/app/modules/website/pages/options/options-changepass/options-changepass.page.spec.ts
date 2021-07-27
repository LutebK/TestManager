import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsChangepassPage } from './options-changepass.page';

describe('OptionsChangepassPage', () => {
  let component: OptionsChangepassPage;
  let fixture: ComponentFixture<OptionsChangepassPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsChangepassPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsChangepassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
