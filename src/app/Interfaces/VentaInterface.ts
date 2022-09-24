import { LibroInterface } from "./LibroInterface";
import { Usuarios } from "./UsuarioLogin";

export interface VentaInterface {
    idLibr:LibroInterface;
    idUsuari : Usuarios;
    cantidad: number; 
    impuesto : number;
    subtotal: number;
    totalPagar: number;
}




