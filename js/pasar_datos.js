var capas = ["capa2", "capa3", "capa4", "capa5", "capa6", "capa7", "capa8", "capa9", "capa10"];
$(document).ready(function() {

    $("#boton").click(function(event) {

        var user = document.getElementById('user').value;
        var password = document.getElementById('password').value;
        var consulta = document.getElementById('consulta').value;
        var host = document.getElementById('host').value;
        var posicion=document.getElementById('posicion').options[document.getElementById('posicion').selectedIndex].value;
        switch (posicion){
            case "capa1":
                $("#capa1").load('procesar.php', {user:user, password:password, consulta:consulta, host:host});
                break;
            case 'capa2':

                $("#capa2").load('procesar.php', {user:user, password:password, consulta:consulta, host:host});

                break;
            case 'capa3':
                $("#capa3").load('procesar.php', {user:user, password:password, consulta:consulta, host:host});
                break;
            case 'capa4':
                $("#capa4").load('procesar.php', {user:user, password:password, consulta:consulta, host:host});
                break;
            case 'capa5':
                $("#capa5").load('procesar.php', {user:user, password:password, consulta:consulta, host:host});
                break;
            case 'capa6':
                $("#capa6").load('procesar.php', {user:user, password:password, consulta:consulta, host:host});
                break;
            case 'capa7':
                $("#capa7").load('procesar.php', {user:user, password:password, consulta:consulta, host:host});
                break;
            case 'capa8':
                $("#capa8").load('procesar.php', {user:user, password:password, consulta:consulta, host:host});
                break;
            case 'capa9':
                $("#capa9").load('procesar.php', {user:user, password:password, consulta:consulta, host:host});
                break;
            case 'capa10':
                $("#capa10").load('procesar.php', {user:user, password:password, consulta:consulta, host:host});
                break;
        }



    });


});


var opcion_nombre;
function myFunction() {
    switch (capas[0]){
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


    capas.splice(0,1);

}

