import { Deporte } from "./deporte.model";

export class Modalidad {
    idModalidad ?: number;
    nombre ?: string;
    numHombre ?: number;
    numMujeres ?: number;
    edadMaxima ?: number;
    edadMinima ?: number;
    sede ?: string;
    deporte ?: Deporte;
}
