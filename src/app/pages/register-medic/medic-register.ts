import { Component } from '@angular/core';
import { PrimarySelect } from "../../components/primary-select/primary-select";
import { PrimaryInput } from "../../components/primary-input/primary-input";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MedicService } from '../../services/medic-service';

@Component({
  selector: 'app-medic-register',
  imports: [PrimarySelect, PrimaryInput, CommonModule, ReactiveFormsModule],
  templateUrl: './medic-register.html',
  styleUrl: './medic-register.scss',
})
export class MedicRegister {

  personForm: FormGroup;

  //Incializando os formulários que serão necessários para o método de criação de medic
  constructor(private fb: FormBuilder, private medicService: MedicService, private router:Router) {
    
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

    medic: this.fb.group({
      crm: [''],
      medicalSpeciality: ['']
    })
  });
  }

  submit(){
    const personData = this.personForm.value;

    const medic = {
      ...personData,
      address: personData.address,
      crm: personData.medic.crm,
      medicalSpeciality: personData.medic.medicalSpeciality
      };

      if(!this.personForm.invalid){
        this.medicService.createMedic(medic).subscribe({
          next: () => alert('Médico cadastrado com sucesso!, \n' +
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
    const company = sessionStorage.getItem('companyName');
    this.router.navigate([`${company}/admin/home`]);
  }

  step = 1;
  nextStep() { if (this.step < 3) this.step++; }
  prevStep() { if (this.step > 1) this.step--; }
}
