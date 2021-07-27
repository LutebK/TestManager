import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsPremiumPage } from './options-premium.page';

describe('OptionsPremiumPage', () => {
  let component: OptionsPremiumPage;
  let fixture: ComponentFixture<OptionsPremiumPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsPremiumPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsPremiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
