import { TestBed } from '@angular/core/testing';

import { MainMenuServiceService } from './main-menu-service.service';

describe('MainMenuServiceService', () => {
  let service: MainMenuServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainMenuServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
