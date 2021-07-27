import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsEducationPage } from './options-education.page';

describe('OptionsEducationPage', () => {
  let component: OptionsEducationPage;
  let fixture: ComponentFixture<OptionsEducationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsEducationPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsEducationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
