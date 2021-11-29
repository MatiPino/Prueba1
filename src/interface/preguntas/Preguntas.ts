export interface Preguntas {
    id: number;
    pregunta: string;
    respuesta: string;
    opciones: Array<Type>;
}

interface Type {
    texto: string;
}
