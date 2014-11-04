/**
 * Created by AlvaroDelgado on 3/11/14.
 */
var opcion_nombre;

function myFunction() {
    switch (capas[0]) {
        case 'capa2':
            opcion_nombre = "Segunda capa";

            break;
        case 'capa3':
            opcion_nombre = "Tercera capa";

            break;
        case 'capa4':
            opcion_nombre = "Cuarta capa";

            break;
        case 'capa5':
            opcion_nombre = "Quinta capa";

            break;
        case 'capa6':
            opcion_nombre = "Sexta capa";

            break;
        case 'capa7':
            opcion_nombre = "Séptima capa";

            break;
        case 'capa8':
            opcion_nombre = "Octava capa";

            break;
        case 'capa9':
            opcion_nombre = "Novena capa";

            break;
        case 'capa10':
            opcion_nombre = "Décima capa";

            break;
    }

    var x = document.createElement("OPTION");
    x.setAttribute("value", capas[0]);
    var t = document.createTextNode(opcion_nombre);
    x.appendChild(t);
    document.getElementById("posicion").appendChild(x);


    capas.splice(0, 1);

}