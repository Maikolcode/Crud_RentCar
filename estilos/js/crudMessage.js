var url = "https://g3abf33bf068afe-dbcarsrenta.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message";

function registrarMensaje(){

    $('#nombre').prop("disabled", true);
    $('#message').prop("disabled", true);
    
    var body = {messagetext: $("#message").val()};
    var nombreAutor = $("#nombre").val();

    $.ajax({
        url : url,
        data : JSON.stringify(body),
        type : 'POST',
        contentType: 'application/json',
    
        success : function(response, status) {
            $('.exitoso').append(
            '<div class="alert alert-success alert-dismissible fade show" id="alerta" role="alert">' + 
                '<strong>' + nombreAutor + ' </strong>' +
                'el <strong>mensaje</strong> a sido registrado exitosamente' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
            '</div>');
        },
        error : function(xhr, status) {
            alert('Error')
        },
        complete : function(xhr, status) {
            clearForm();
            enableForm();
        }
    });

}

function clearForm(){
    document.getElementById("nombre").value = "";
    document.getElementById("message").value = "";
}

function enableForm(){
    $('#nombre').prop("disabled", false);
    $('#message').prop("disabled", false);       
}

function leerParametroId() {
    var sPageURL = window.location.search.substring(1),
        sParameterName;

    sParameterName = sPageURL.split('=');
    if (sParameterName[0] === 'id') {
        return sParameterName[1];
    }
    return undefined;
}

function cargarDetalles() {
    var id = leerParametroId();
    $.ajax({    
        url : url + "/" + id,
        data : { },
        type : 'GET',
        dataType : 'json',
        crossDomain: true,
    
        success : function(response) {
            var items = response.items;
            var item = items[0];
            $('.texto-detalles').append(
                '<h1>Detalles del cliente</h1>' +
                    '<div class="ajuste-txt-cl">'+
                    '<p>Id: ' + item.id + '</p>' +
                    '<p>Mensaje: '+ item.messagetext +'</p>'+
                '</div>'
            );
        },
        error : function(xhr, status) {
            console.log('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            console.log('Petición realizada');
        }
    });
}

function traerInfo(){

    var id = leerParametroId();

    $.ajax({    
        url : url + "/" + id,
        data : { },
        type : 'GET',
        dataType : 'json',
        crossDomain: true,
    
        success : function(response) {
            var items = response.items;
            var item = items[0];
            $("#id-client").val(item.id);
            $("#message").val(item.messagetext);
        },
        error : function(xhr, status) {
            console.log('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            console.log('Petición realizada');
        }
    });
}

function obtenerInformacionId(){
    var id = leerParametroId();

    $.ajax({    
        url : url + "/" + id,
        data : { },
        type : 'GET',
        dataType : 'json',
        crossDomain: true,
    
        success : function(response) {
            var items = response.items;
            var item = items[0];
            $("#id-cliente").val(item.id);
        },
        error : function(xhr, status) {
            console.log('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            console.log('Petición realizada');
        }
    });
}

function actualizar() {

    var body = { 
        id: $("#id-client").val(),
        messagetext: $("#message").val(),
    }
    
    $.ajax({
        url : url,
        data : JSON.stringify(body),
        type : 'PUT',
        contentType: 'application/json',
    
        success : function(response, status) {
            $('.exitoso').append(
                '<div class="alert alert-success alert-dismissible fade show" id="alerta" role="alert">' +
                    '<strong>El mensaje</strong> a sido actualizado exitosamente' +
                    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
                '</div>');
        },
        error : function(xhr, status) {
            console.log('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            console.log('Petición realizada');
            $('#message').prop("disabled", true);
        }
    });
}

function eliminar() {

    var body = { 
        id: $("#id-cliente").val(),
    }
    
    $.ajax({
        url : url,
        data : JSON.stringify(body),
        type : 'DELETE',
        contentType: 'application/json',
    
        success : function(response, status) {
            alert('Registro eliminado');
        },
        error : function(xhr, status) {
            console.log('ha sucedido un problema');
            $('#carro-marca').prop("disabled", false);
            $('#carro-modelo').prop("disabled", false);
            $('#carro-categoria').prop("disabled", false);
        },
        complete : function(xhr, status) {
            location.href ="../../index.html";
        }
    });

}

