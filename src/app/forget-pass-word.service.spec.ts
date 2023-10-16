import { TestBed } from '@angular/core/testing';

import { ForgetPassWordService } from './forget-pass-word.service';

describe('ForgetPassWordService', () => {
  let service: ForgetPassWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgetPassWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
