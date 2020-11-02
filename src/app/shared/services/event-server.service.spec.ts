import { TestBed } from '@angular/core/testing';

import { EventServerService } from './event-server.service';

describe('EventServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventServerService = TestBed.get(EventServerService);
    expect(service).toBeTruthy();
  });
});
