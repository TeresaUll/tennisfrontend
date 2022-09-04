import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { SecretoService } from './secreto.service';

describe('SecretoService', () => {
  let service: SecretoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(SecretoService);
  });

  it('El servicio Secreto se ha creado', () => {
    expect(service).toBeTruthy();
  });
});
