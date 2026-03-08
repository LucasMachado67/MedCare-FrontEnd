export interface LoginResponse {
    token: string;
    email: string;
    role: string;
    mustChangePassword: boolean;
    personId: number;
    tenantId: number;
    tenantName: string;
}