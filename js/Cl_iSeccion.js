export default class iSeccion{
    leerCodigo(){
        return prompt("Ingresa el nombre codigo de la seccion");
    }

    reportarSeccion(a,c,p){
        return `
        <br> acumulador de notas: ${a}
        <br> Contador de aprobados: ${c}
        <br> promedio de notas: ${p}`
    }
}