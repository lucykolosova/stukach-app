import { TestBed } from '@angular/core/testing';

import { PostHttpService } from './post-http.service';

describe('PostHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostHttpService = TestBed.get(PostHttpService);
    expect(service).toBeTruthy();
  });
});
