import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentListingPage } from './content-listing.page';

describe('ContentListingPage', () => {
  let component: ContentListingPage;
  let fixture: ComponentFixture<ContentListingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentListingPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
