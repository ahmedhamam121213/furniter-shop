import { TestBed } from '@angular/core/testing';

import { ProtectLinkService } from './protect-link.service';

describe('ProtectLinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProtectLinkService = TestBed.get(ProtectLinkService);
    expect(service).toBeTruthy();
  });
});
