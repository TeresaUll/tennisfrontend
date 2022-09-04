import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthService } from './auth.service';

describe('TokenInterceptorService', () => {
  let service: TokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AuthService]
    });
    service = TestBed.inject(TokenInterceptorService);
  });

  it('Se crea el servicio token-interceptor', () => {
    expect(service).toBeTruthy();
  });
});
