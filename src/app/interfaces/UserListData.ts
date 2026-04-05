export interface UserListData{
    
    id: number;
    name: string;
    email: string;
    phone: string;
    //Campos de Medic
    crm?: string;
    medicalSpeciality?: string;
    //Campos de Assistant
    status?: string;
    registrationNumber?: string;
    //User comum (Patient)
    city?: string;
    state?: string;
}