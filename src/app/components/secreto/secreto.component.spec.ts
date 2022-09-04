import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SecretoComponent } from './secreto.component';

describe('SecretoComponent', () => {
  let component: SecretoComponent;
  let fixture: ComponentFixture<SecretoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretoComponent ],
      imports: [RouterTestingModule, HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea el componente Secreto', () => {
    expect(component).toBeTruthy();
  });
});
