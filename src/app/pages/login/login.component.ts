import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DefaultLoginLayout } from '../../components/default-login-layout/default-login-layout';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { LoginService } from '../../services/loginService';

interface LoginForm {
  email: FormControl,
  password: FormControl
}
@Component({
  selector: 'app-login',
  imports: [DefaultLoginLayout, ReactiveFormsModule, PrimaryInput, RouterLink],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  loginForm!: FormGroup<LoginForm>;

    constructor(
      private router: Router,
      private loginService: LoginService,
    ){
      this.loginForm = new FormGroup({
        email: new FormControl('',[Validators.required, Validators.email]),
        password: new FormControl('',[Validators.required, Validators.minLength(6)]),
      })
    }

    submit(){
      this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next: (res) => {
        console.log("Resposta no componente:", res);
        const company = sessionStorage.getItem('companyName');
        console.log(company);
          if (res.mustChangePassword == true) {
            // Redireciona para a tela de troca de senha se o login for pela primeira vez
            this.router.navigate(["update-password"]);
          } else {
            // Segue o fluxo normal
            if(res.role == "MEDIC"){
              this.router.navigate([`/${company}/medic/home`]);
            }else if(res.role == "ADMIN"){
              this.router.navigate([`/${company}/admin/home`]);
            }else if(res.role == "USER"){
              this.router.navigate([`/${company}/home`]);
              
            }else{
              this.router.navigate([`/${company}/home`]);
            }
          }
        },
        error: (err) => {
          
          console.error("Erro ao fazer login", err);
        }
      })
    }
    navigate(){
      this.router.navigate(["register"])
    }
}
