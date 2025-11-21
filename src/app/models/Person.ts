import { Address } from "./Address";

export class Person{
    id: number = 0;
    name: string = "";
    birthDate!: Date;
    cpf: string = "";
    gender: string = "";
    email: string = "";
    phone: string = "";
    address: Address = new Address();
}
