import { TestBed } from '@angular/core/testing';

import { VkOauthService } from './vk-oauth.service';

describe('VkOauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VkOauthService = TestBed.get(VkOauthService);
    expect(service).toBeTruthy();
  });
});
