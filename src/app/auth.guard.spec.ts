import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:  [HttpClientModule]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('Se crea el componente Authguard', () => {
    expect(guard).toBeTruthy();
  });
});