
var capas = ["capa2", "capa3", "capa4", "capa5", "capa6", "capa7", "capa8", "capa9", "capa10"];

$(document).ready()
{

    function enviar_datos() {
        var response;
        var user = document.getElementById('user').value;
        var password = document.getElementById('password').value;
        var consulta = document.getElementById('consulta').value;
        var host = document.getElementById('host').value;
        var posicion = document.getElementById('posicion').options[document.getElementById('posicion').selectedIndex].value;
        $.ajax({
            type: "POST",
            data: {user: user, password: password, consulta: consulta, host: host},
            url: "procesar.php #rowspan",
            async: false,
            success: function (text) {
                response = text;
            }
        });
        switch (posicion) {
            case "capa1":
                $("#capa1").empty();
                $("#oculto").empty();

                $("#capa1").prepend(response);
                $("#oculto").empty();
                $("#uno").css({display: "inline"});
                break;
            case 'capa2':
                $("#capa2").empty();
                $("#oculto").empty();

                $("#capa2").prepend(response);
                $("#oculto").empty();
                $("#dos").css({display: "inline"});

                break;
            case 'capa3':
                $("#capa3").empty();
                $("#oculto").empty();

                $("#capa3").prepend(response);
                $("#oculto").empty();
                $("#tres").css({display: "inline"});
                break;
            case 'capa4':
                $("#capa4").empty();
                $("#oculto").empty();

                $("#capa4").prepend(response);
                $("#oculto").empty();
                $("#cuatro").css({display: "inline"});
                break;
            case 'capa5':
                $("#capa5").empty();
                $("#oculto").empty();

                $("#capa5").prepend(response);
                $("#oculto").empty();
                $("#cinco").css({display: "inline"});
                break;
            case 'capa6':
                $("#capa6").empty();
                $("#oculto").empty();

                $("#capa6").prepend(response);
                $("#oculto").empty();
                $("#seis").css({display: "inline"});
                break;
            case 'capa7':
                $("#capa7").empty();
                $("#oculto").empty();

                $("#capa7").prepend(response);
                $("#oculto").empty();
                $("#siete").css({display: "inline"});
                break;
            case 'capa8':
                $("#capa8").empty();
                $("#oculto").empty();

                $("#capa8").prepend(response);
                $("#oculto").empty();
                $("#ocho").css({display: "inline"});
                break;
            case 'capa9':
                $("#capa9").empty();
                $("#oculto").empty();

                $("#capa9").prepend(response);
                $("#oculto").empty();
                $("#nueve").css({display: "inline"});
                break;
            case 'capa10':
                $("#capa10").empty();
                $("#oculto").empty();

                $("#capa10").prepend(response);
                $("#oculto").empty();
                $("#diez").css({display: "inline"});
                break;
        }


    }




}