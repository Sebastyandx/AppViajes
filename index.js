$(document).ready(function () {
    $("button").click(function (e) { 
        $.get("datos.text", data,
            function (dato, status, xhr) {
                console.log('Mensaje:'+ dato + '\nstatus: '+ ''+ xhr.status);
                
            }  
        );
    });
});