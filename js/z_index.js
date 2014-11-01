$(function() {


    document.getElementById('capa').addEventListener('mousedown',tomarfoco1,false);

    document.getElementById('capa').addEventListener('mouseup',perderfoco1,false);

});
function tomarfoco1()
{
    document.getElementById('capa').style.zIndex="1";

}

function tomarfoco2()
{

    document.getElementById('capa').style.zIndex="3";
}
function perderfoco1()
{

    document.getElementById('capa').style.zIndex="3";
}
function perderfoco2()
{
    document.getElementById('capa').style.zIndex="1";

}
