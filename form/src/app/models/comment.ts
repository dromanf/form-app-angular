export interface Comment {
    fullName: string;
    company: string;
    email: string;
    phoneNumber:string;
    category: 'facturacion' | 'soporte-tecnico' | 'ventas' | 'nformación-general';
    message: string;
}
