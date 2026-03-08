import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/loginService';
import { Router } from '@angular/router';
import { DefaultLoginLayout } from '../default-login-layout/default-login-layout';
import { PrimaryInput } from '../primary-input/primary-input';

@Component({
  selector: 'app-update-password',
  imports: [DefaultLoginLayout, ReactiveFormsModule, PrimaryInput],
  templateUrl: './update-password.html',
  styleUrl: './update-password.scss',
})
export class UpdatePassword {

  passwordForm: FormGroup;
  role:string | null = "";

  constructor(private router: Router, private loginService: LoginService) {
    this.passwordForm = new FormGroup({
      newPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required])
    });
  }

  submit() {
    if (this.passwordForm.value.newPassword !== this.passwordForm.value.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    this.loginService.updatePassword(this.passwordForm.value.newPassword).subscribe({
      next: () => {
        //atualizamos a flag local para false
        sessionStorage.setItem("must-change-password", "false");
        console.log("Senha atualizada")
        this.navigation();
      },
      error: () => alert("Erro ao atualizar senha.")
    });
  }

  navigation():void{
    this.role = sessionStorage.getItem('role');
    if(this.role == "ADMIN"){
      this.router.navigate(["admin/home"]);
    }else if(this.role == "MEDIC"){
      this.router.navigate(["medic/home"]);
    }else{
      this.router.navigate(["home"]);
    }
  }
}
