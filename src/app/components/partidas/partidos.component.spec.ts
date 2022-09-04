import { ComponentFixture, TestBed } from '@angular/core/testing';imports: [RouterTestingModule, HttpClientModule]
import { PartidoComponent } from './partidos.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('PartidosComponent', () => {
  let component: PartidoComponent;
  let fixture: ComponentFixture<PartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidoComponent ],
      imports: [RouterTestingModule, HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea el componente partidos', () => {
    expect(component).toBeTruthy();
  });
});
