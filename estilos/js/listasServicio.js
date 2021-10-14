var ruta_car = "https://g3abf33bf068afe-dbcarsrenta.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/car/car";
var ruta_client = "https://g3abf33bf068afe-dbcarsrenta.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client";
var ruta_message = "https://g3abf33bf068afe-dbcarsrenta.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message";


// window.onload = cargarListas;

function cargarListas() {
    cargarListaCar();
    cargarListaClient();
    cargarListaMessage();
}

function cargarListaCar() {
    $.ajax({
        url: ruta_car,
        data: {},
        type: 'GET',
        dataType: 'json',
        crossDomain: true,

        success: function (json) {
            var items = json.items;
            if (items.length === 0) {
                document.getElementById("table-car").classList.add('hidden');
                $('.table-car-add').append(
                    '<h3>Aun no hay nada</h3>'+
                        '<div class="img-message-tb">'+
                            '<img src="estilos/img/no-car.png"/>'+
                        '</div>'
                );
            } else {
                document.getElementById("tb-car-hd").classList.add('hidden');
                for (var i = 0; i < items.length; i++) {
                    var item = items[i]
                    $('.carga-lista')
                        .append('<tr>' +
                            '<th scope="row">' + item.id + '</th>' +
                            '<td>' + item.brand + '</td>' +
                            '<td>' + item.model + '</td>' +
                            '<td>' + item.category_id + '</td>' +
                            '<td><a href="/carros/detalleCar.html?id=' + item.id + '">Mas información</a></td>' +
                            '</tr>');
                }
            }
        },
        error: function (xhr, status) {
            alert("Error")
        },
        complete: function (xhr, status) {
            console.log("Lista de autos cargada correctamente");
        }
    });
}

function cargarListaClient() {
    $.ajax({
        url: ruta_client,
        data: {},
        type: 'GET',
        dataType: 'json',
        crossDomain: true,

        success: function (json) {
            var items = json.items;
            if (items.length === 0) {
                document.getElementById("table-client").classList.add('hidden');
                $('.table-client-add').append(
                    '<h3>Aun no hay nada</h3>'+
                        '<div class="img-message-tb">'+
                            '<img src="estilos/img/clientetb.png"/>'+
                        '</div>'
                );
            } else {
                document.getElementById("tb-client-hd").classList.add('hidden');
                for (var i = 0; i < items.length; i++) {
                    var item = items[i]
                    $('.carga-lista-client')
                        .append('<tr>' +
                            '<th scope="row">' + item.id + '</th>' +
                            '<td>' + item.name + '</td>' +
                            '<td>' + item.email + '</td>' +
                            '<td>' + item.age + '</td>' +
                            '<td><a href="/cliente/detalleClient.html?id=' + item.id + '">Mas información</a></td>' +
                            '</tr>');
                }
            }
        },
        error: function (xhr, status) {
            alert("Error")
        },
        complete: function (xhr, status) {
            console.log("Lista clientes cargada correctamente");
        }
    });
}

function cargarListaMessage() {
    $.ajax({
        url: ruta_message,
        data: {},
        type: 'GET',
        dataType: 'json',
        crossDomain: true,

        success: function (json) {
            var items = json.items;
            if (items.length === 0) {
                document.getElementById("table-message").classList.add('hidden');
                $('.table-message-add').append(
                        '<h3>Aun no hay nada</h3>'+
                        '<div class="img-message-tb">'+
                            '<img src="estilos/img/no.png"/>'+
                        '</div>'
                    );
            } else {
                document.getElementById("tb-message-hd").classList.add('hidden');
                for (var i = 0; i < items.length; i++) {
                    var item = items[i]
                    $('.carga-lista-message')
                        .append('<tr>' +
                            '<th scope="row">' + item.id + '</th>' +
                            '<td>' + item.messagetext + '</td>' +
                            '<td><a href="/mensaje/detalleMessage.html?id=' + item.id + '">Mas información</a></td>' +
                            '</tr>');
                }
            }
        },
        error: function (xhr, status) {
            alert("Error")
        },
        complete: function (xhr, status) {
            console.log("Lista mensajes cargada correctamente");
        }
    });
}