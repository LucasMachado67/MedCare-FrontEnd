import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { AppointmentService } from '../../services/AppointmentService';
import { Appointment } from '../../models/Appointment';

@Component({
  selector: 'app-all-appointments',
  imports: [],
  templateUrl: './all-appointments.html',
  styleUrl: './all-appointments.scss',
})
export class AllAppointments implements OnInit{

  appointmentData: Appointment[] = [];
  formatedDate: string = "";

  constructor(private appointmentService:AppointmentService){}

  findAppointmentsByMedicId(){
    const id = sessionStorage.getItem('personId');
    console.log(id)
    if (!id) return;

    this.appointmentService.findAppointmentByMedicId(Number(id))
      .subscribe(data => {
        this.appointmentData = data;
        console.log(data)
      })
  }


  ngOnInit(): void {
    this.findAppointmentsByMedicId();
  }

  

}
