
    function cerrar1() {
        $("#uno").css({display:"none"});
    }

    function minimizar1() {
        $("#capa1").css({display:"none"});
        $("#minimizar1").css({display:"none"});
        $("#maximizar1").css({display:"inline"});


    }
    function maximizar1() {
        $("#capa1").css({display:"inline"});
        $("#minimizar1").css({display:"inline"});
        $("#maximizar1").css({display:"none"});
    }

    function cerrar2() {
        $("#dos").css({display:"none"});
        $("#posicion option[value='capa2']").remove();
        capas.unshift("capa2");
        capas.sort(deMenorAMayor);
        
    }

    function minimizar2() {
        $("#capa2").css({display:"none"});
        $("#minimizar2").css({display:"none"});
        $("#maximizar2").css({display:"inline"});

    }
    function maximizar2() {
        $("#capa2").css({display:"inline"});
        $("#minimizar2").css({display:"inline"});
        $("#maximizar2").css({display:"none"});
    }

    function cerrar3() {
        $("#tres").css({display:"none"});
        $("#posicion option[value='capa3']").remove();
        capas.unshift("capa3");
        capas.sort(deMenorAMayor);
        
    }

    function minimizar3() {
        $("#capa3").css({display:"none"});
        $("#minimizar3").css({display:"none"});
        $("#maximizar3").css({display:"inline"});

    }
    function maximizar3() {
        $("#capa3").css({display:"inline"});
        $("#minimizar3").css({display:"inline"});
        $("#maximizar3").css({display:"none"});
    }

    function cerrar4() {
        $("#cuatro").css({display:"none"});
        $("#posicion option[value='capa4']").remove();
        capas.unshift("capa4");
        capas.sort(deMenorAMayor);
        
    }

    function minimizar4() {
        $("#capa4").css({display:"none"});
        $("#minimizar4").css({display:"none"});
        $("#maximizar4").css({display:"inline"});

    }
    function maximizar4() {
        $("#capa4").css({display:"inline"});
        $("#minimizar4").css({display:"inline"});
        $("#maximizar4").css({display:"none"});
    }
    function cerrar5() {
        $("#cinco").css({display:"none"});
        $("#posicion option[value='capa5']").remove();
        capas.unshift("capa5");
        capas.sort(deMenorAMayor);
        
    }

    function minimizar5() {
        $("#capa5").css({display:"none"});
        $("#minimizar5").css({display:"none"});
        $("#maximizar5").css({display:"inline"});

    }
    function maximizar5() {
        $("#capa5").css({display:"inline"});
        $("#minimizar5").css({display:"inline"});
        $("#maximizar5").css({display:"none"});
    }

    function cerrar6() {
        $("#seis").css({display:"none"});
        $("#posicion option[value='capa6']").remove();
        capas.unshift("capa6");
        capas.sort(deMenorAMayor);
        
    }

    function minimizar6() {
        $("#capa6").css({display:"none"});
        $("#minimizar6").css({display:"none"});
        $("#maximizar6").css({display:"inline"});

    }
    function maximizar6() {
        $("#capa6").css({display:"inline"});
        $("#minimizar6").css({display:"inline"});
        $("#maximizar6").css({display:"none"});
    }

    function cerrar7() {
        $("#siete").css({display:"none"});
        $("#posicion option[value='capa7']").remove();
        capas.unshift("capa7");
        capas.sort(deMenorAMayor);
        
    }

    function minimizar7() {
        $("#capa7").css({display:"none"});
        $("#minimizar7").css({display:"none"});
        $("#maximizar7").css({display:"inline"});

    }
    function maximizar7() {
        $("#capa7").css({display:"inline"});
        $("#minimizar7").css({display:"inline"});
        $("#maximizar7").css({display:"none"});
    }

    function cerrar8() {
        $("#ocho").css({display:"none"});
        $("#posicion option[value='capa8']").remove();
        capas.unshift("capa8");
        capas.sort(deMenorAMayor);
        
    }

    function minimizar8() {
        $("#capa8").css({display:"none"});
        $("#minimizar8").css({display:"none"});
        $("#maximizar8").css({display:"inline"});

    }
    function maximizar8() {
        $("#capa8").css({display:"inline"});
        $("#minimizar8").css({display:"inline"});
        $("#maximizar8").css({display:"none"});
    }
    function cerrar9() {
        $("#nueve").css({display:"none"});
        $("#posicion option[value='capa9']").remove();
        capas.unshift("capa9");
        capas.sort(deMenorAMayor);
        
    }

    function minimizar9() {
        $("#capa9").css({display:"none"});
        $("#minimizar9").css({display:"none"});
        $("#maximizar9").css({display:"inline"});

    }
    function maximizar9() {
        $("#capa9").css({display:"inline"});
        $("#minimizar9").css({display:"inline"});
        $("#maximizar9").css({display:"none"});
    }
    function cerrar10() {
        $("#diez").css({display:"none"});
        $("#posicion option[value='capa10']").remove();
        capas.unshift("capa10");
        capas.sort(deMenorAMayor);
        
    }

    function minimizar10() {
        $("#capa10").css({display:"none"});
        $("#minimizar10").css({display:"none"});
        $("#maximizar10").css({display:"inline"});

    }
    function maximizar10() {
        $("#capa10").css({display:"inline"});
        $("#minimizar10").css({display:"inline"});
        $("#maximizar10").css({display:"none"});
    }
    
    function deMenorAMayor(elem1, elem2) {return elem1-elem2;}

  