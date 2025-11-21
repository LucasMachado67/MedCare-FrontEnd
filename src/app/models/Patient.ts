import { Person } from "./Person";

export class Patient extends Person{
    healthPlan: string = "";
    description: string = "";
    symptoms: string[] = [];
    allergies: string[] = [];
    patientSituation: string = "";
}