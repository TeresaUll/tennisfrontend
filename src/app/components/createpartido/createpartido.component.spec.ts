import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';     imports: [RouterTestingModule, HttpClientModule]
import { CreatepartidoComponent } from './createpartido.component';

describe('CreatepartidoComponent', () => {
  let component: CreatepartidoComponent;
  let fixture: ComponentFixture<CreatepartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepartidoComponent ],
      imports: [RouterTestingModule, HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatepartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea el componente Createpartido', () => {
    expect(component).toBeTruthy();
  });
});
