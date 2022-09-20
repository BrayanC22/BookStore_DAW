import { AutorInterface } from "./AutorInterface";
import { OfertaInterface } from "./OfertaInterface";

export interface LibroInterface {
   
    idLibro : number;
    idAuto:AutorInterface;
    titulo:string;
    idOferta:OfertaInterface;
    descripcion:string;
    isbn:string;
    idCategori:string;
    precio : number;
}

