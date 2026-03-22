import { Component } from '@angular/core';
import { PrimarySelect } from "../../components/primary-select/primary-select";
import { PrimaryInput } from "../../components/primary-input/primary-input";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AssistantService } from '../../services/assistant-service';

@Component({
  selector: 'app-assistant-register',
  imports: [PrimarySelect, PrimaryInput, CommonModule, ReactiveFormsModule],
  templateUrl: './assistant-register.html',
  styleUrl: './assistant-register.scss',
})
export class AssistantRegister {

  personForm: FormGroup;

  //Incializando os formulários que serão necessários para o método de criação de assistant
  constructor(private fb: FormBuilder, private assistantService: AssistantService, private router:Router) {
    
    this.personForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    birthDate: ['',[Validators.required]],
    cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    gender: ['',[Validators.required]],
    email: ['', Validators.required, Validators.email],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],

    address: this.fb.group({
      neighborhood: ['',[Validators.required]],
      street: ['',[Validators.required]],
      number: ['',[Validators.required, Validators.min(1), Validators.max(9999)]],
      complement: [''],
      city: ['',[Validators.required]],
      zipCode: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      state: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      habitation: ['',[Validators.required]]
    }),
  });
  }

  submit(){
    const personData = this.personForm.value;

    const assistant = {
      ...personData,
      address: personData.address,
      };

      if(!this.personForm.invalid){
        this.assistantService.createAssistant(assistant).subscribe({
          next: () => alert('Assistante cadastrado com sucesso!, \n' +
            'Um email será enviado com Login e Senha'
          ),
          error: (err) => console.error(err),          
        });
        this.navigate();
      }else{
        this.personForm.markAllAsTouched()
        alert("Por favor, complete o cadastro")
        return;
      }
       console.log('Formulário enviado');
  }

  navigate(){
    this.router.navigate(["login"]);
  }

  step = 1;
  nextStep() { if (this.step < 2) this.step++; }
  prevStep() { if (this.step > 1) this.step--; }
}
