//
// Coleção de botões
//
var botoes = $('#btn-sala, #btn-cozinha, #btn-quarto1, #btn-quarto2');

//
// Percorrendo a coleção de botões
//
botoes.each(function() {
  // cada botão
  var elem = $(this);

  // atriduindo função ao elemento
  elem.click(function() {

    // recupero o estado do botão (on ou off)
    var estado = elem.attr('estado');
    var campo  = elem.attr('campo');
    var id     = elem.attr('id');

    // se estiver ligado...
    if (estado == "on") {
      // ...desligo:
      console.log('desligar-' + id);
      elem.attr('estado', 'off');
      send(campo + "=0");

    } else {
      // ...ligo:
      console.log('ligar-' + id);
      elem.attr('estado', 'on');
      send(campo + "=1");
    }

    // de uma forma ou de outra, eu inverto a classe CSS do botão
    elem.toggleClass("button-primary");

  });
});


//
// função genérica para envio de dados ao servidor
//
function send(led) {
    var nocache = "&nocache=" + Math.random() * 1000000;
    $.get("ajax_inputs", led + nocache, function( data ) {
        console.log('enviamos: ' + led);
        console.log('recebemos:');
        console.log(data);
    });
}
