export class Appointment{
    id: number = 0;
    medicId: number = 0;
    patientId: number = 0;
    date!: Date;
    status: string = "";
    duration: number = 0;
    room: string = "";
    observation: string = "";
    createdAt: string = "";
    updatedAt: string = "";
}