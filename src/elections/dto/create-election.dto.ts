// DTO : Data Transfer Object
// Objeto de transferencia de datos:
// Sirve para transformar la información que
// transita de un lugar a otro en un proyecto software
// Propósito:
// - asegurar el ingreso de la informacion
//   correcta desde el exterior (cliente http, app movil)
// - Validar esa informacion (atributos correctos, tipos de datos, longitudes, tipos de archivo)



// se usa solo en los de crear y actualizar 

export class CreateElectionDto {

    // se espera que edesde el cliente llegue solo el nombre 
    nombre_election: String;
    fecha_inicio: DateTime;
    fecha_fin: DateTime;
}
