import { TestBed } from '@angular/core/testing';

import { LessonsServicesService } from './lessons-services.service';

describe('LessonsServicesService', () => {
  let service: LessonsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
