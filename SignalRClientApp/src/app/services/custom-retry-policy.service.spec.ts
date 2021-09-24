import { TestBed } from '@angular/core/testing';

import { CustomRetryPolicyService } from './custom-retry-policy.service';

describe('CustomRetryPolicyService', () => {
  let service: CustomRetryPolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomRetryPolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
