import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [AuthService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea el componente SignUp', () => {
    expect(component).toBeTruthy();
  });
  it('Se recogen los parámetros del SignUp', () => {
    const element = fixture.nativeElement;
    expect(element.querySelector('form')).toBeTruthy();
    expect(element.querySelector('#emailInput')).toBeTruthy();
    expect(element.querySelector('#passwordInput')).toBeTruthy();
  });

  it('Se recogen correctamente los parámetros en el SignUp', () => {
    const element = fixture.nativeElement;

    element.querySelector('#emailInput').value = "test@gmail.com";
    element.querySelector('#passwordInput').value = "test";
  
    expect(element.querySelector('#emailInput').value).toEqual("test@gmail.com");
    expect(element.querySelector('#passwordInput').value).toEqual("test");

  });

  it('Comprobación función signUp()', () => {
    component.user = {
      email: "test@gmail.com",
      password: "test"
    }
    
    let signUpF = spyOn(component, 'signUp')
    component.signUp();
    expect(signUpF).toHaveBeenCalled();
  })
});
