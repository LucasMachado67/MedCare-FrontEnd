import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/loginService';
import { PatientService } from '../../services/patient.service';
import { CommonModule } from '@angular/common';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { PrimarySelect } from '../../components/primary-select/primary-select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, PrimaryInput, PrimarySelect],
  providers: [
    LoginService
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {

  personForm: FormGroup;

  //Incializando os formulários que serão necessários para o método de criação de patient
  constructor(private fb: FormBuilder, private patientService: PatientService, private router:Router) {
    
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

    patient: this.fb.group({
      healthPlan: [''],
      description: [''],
      symptoms: ['',[Validators.required]],
      allergies: ['']
    })
  });
  }

  submit(){
    const personData = this.personForm.value;

    const patient = {
      ...personData,
      address: personData.address,
      healthPlan: personData.patient.healthPlan,
      description: personData.patient.description,
      symptoms: personData.patient.symptoms
      ? personData.patient.symptoms.split(',').map((s: string) => s.trim())
      : [],

      allergies: personData.patient.allergies
        ? personData.patient.allergies.split(',').map((a: string) => a.trim())
        : [],
      };

      if(!this.personForm.invalid){
        this.patientService.createPatient(patient).subscribe({
          next: () => alert('paciente cadastrado com sucesso!, \n' +
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
  nextStep() { if (this.step < 3) this.step++; }
  prevStep() { if (this.step > 1) this.step--; }
}
