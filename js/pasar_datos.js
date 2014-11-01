var capas = ["capa2", "capa3", "capa4", "capa5", "capa6", "capa7", "capa8", "capa9", "capa10", "capa11", "capa12"];
$(document).ready(function() {

    $("#capa1").draggable();
    $("#capa2").draggable();
    $("#capa3").draggable();
    $("#capa4").draggable();
    $("#capa5").draggable();
    $("#capa6").draggable();
    $("#capa7").draggable();
    $("#capa8").draggable();
    $("#capa9").draggable();
    $("#capa10").draggable();
    $("#capa11").draggable();
    $("#capa12").draggable();

    $("#boton").click(function(event) {

        var user = document.getElementById('user').value;
        var password = document.getElementById('password').value;
        var consulta = document.getElementById('consulta').value;
        var host = document.getElementById('host').value;
        var posicion=document.getElementById('posicion').options[document.getElementById('posicion').selectedIndex].value;


        switch (posicion){
            case "capa1": $("#"+capas[0]).load('procesar.php', {user:user, password:password, consulta:consulta, host:host});
                break;
        }

    });


});
var contador = 0;
function myFunction() {

    var x = document.createElement("OPTION");
    x.setAttribute("value", capas[contador]);
    var t = document.createTextNode(capas[contador]);
    x.appendChild(t);
    document.getElementById("posicion").appendChild(x);
    contador+1;

}

