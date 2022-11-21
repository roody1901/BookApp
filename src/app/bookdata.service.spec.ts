import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BookdataService } from './bookdata.service';

describe('BookdataService', () => {
  let service: BookdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(BookdataService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
