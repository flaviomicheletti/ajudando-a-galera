//
// combo 01
//
$("#cbo-um").change(function() {
    var imgSrc = "images/" + $(this).val() + ".png";
    $('#img-um').attr('src', imgSrc);
    //console.log(imgSrc);
});

//
// combo 02
//
$("#cbo-dois").change(function() {
    var imgSrc = "images/" + $(this).val() + ".png";
    $('#img-dois').attr('src', imgSrc);
    //console.log(imgSrc);
});

//
// botão ver
//
$("button").click(function() {
    if (validar()) {
        $("table").html('[table id=1 alternating_row_colors=false column_widths="40px|50px|30px|40px" /]');
    }
});

//
// função para validar
//
function validar() {
    return true;
}