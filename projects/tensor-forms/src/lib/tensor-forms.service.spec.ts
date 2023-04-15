import { TestBed } from '@angular/core/testing';

import { TensorFormsService } from './tensor-forms.service';

describe('TensorFormsService', () => {
  let service: TensorFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TensorFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
