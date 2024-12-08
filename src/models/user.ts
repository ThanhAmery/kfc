export interface User {
    id: number;
    fullname: string;
    email: string;
    phone: string;
    role: "ADMIN" | "MANAGER" | "STAFF" | "CUSTOMER";
    
}