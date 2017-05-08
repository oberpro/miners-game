import { TestBed, inject } from '@angular/core/testing';

import { MgDataserviceService } from './mg-dataservice.service';

describe('MgDataserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MgDataserviceService]
    });
  });

  it('should ...', inject([MgDataserviceService], (service: MgDataserviceService) => {
    expect(service).toBeTruthy();
  }));
});
