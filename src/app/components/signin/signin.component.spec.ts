import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      imports: [RouterTestingModule, HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea el componente SignIn', () => {
    expect(component).toBeTruthy();
  });
  it('Aparece el fomulario signIn', () => {
    const element = fixture.nativeElement;
    expect(element.querySelector('form')).toBeTruthy();
    expect(element.querySelector('#emailInput')).toBeTruthy();
    expect(element.querySelector('#passwordInput')).toBeTruthy();
  });
  it('Se rellenan correctamente los input del formulario', () => {
    const element = fixture.nativeElement;

    element.querySelector('#emailInput').value = "test@gmail.com";
    element.querySelector('#passwordInput').value = "test";

    expect(element.querySelector('#emailInput').value).toEqual("test@gmail.com");
    expect(element.querySelector('#passwordInput').value).toEqual("test");  
  });
  it('Comprobación función signIn()', () => {
    component.user = {
      email: "test@gmail.com",
      password: "test",
    }
    
    let signInF = spyOn(component, 'signIn')
    component.signIn();
    expect(signInF).toHaveBeenCalled();
  })

});
