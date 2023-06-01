// Esta linea garantiza que todo lo que se ejecute dentro de ready
// se ejecute solo cuando el html esté 100% cargado
$(document).ready(() => {
  console.log("JQuery Cargado");
})

$(document).ready(function() {

  $('#open').click(function() {
    $('.modal-container').css('transform','scale(1)')
    trasladarDatosDelFormCompletoAFeedback();
  });

  $('#close').click(function() {
    $('.modal-container').css('transform','scale(0)')
  });

  function trasladarDatosDelFormCompletoAFeedback() {
    const inputNombre = $("#nombre");
    const inputMail = $("#mail");
  
    const nombre = inputNombre.val();
    const mail = inputMail.val();
  
    const spanNombre = $("#dato-nombre");
    const spanEmail = $("#dato-email");
  
    spanNombre.html(nombre);
    spanEmail.html(mail);
  }


});






















/*
  // Cuando hacemos click en "suscribirme" de los form abreviados, abrimos el popup del form completo
  $(".boton2").click(() => {
    abrirPopupForm();
    trasladarMailDeMiniformAFormCompleto();
  });

  // Cuando hacemos click en la cruz de los popup, los cerramos
  $(".cerrar").click(() => {
    cerrarPopup();
  });

  // Cuando enviamos el formulario completo, mostramos el feedback
  $("#formulario-principal").on("submit", (e) => {
    e.preventDefault(); // Esta linea es importante para evitar que la página se recargue al enviar le formulario
    abrirFeedback();
    trasladarDatosDelFormCompletoAFeedback();
  });
});

function abrirPopupForm() {
  console.log("Popup abierto");
  $(".popup-contenedor.feedback").removeClass("oculto");
}

function cerrarPopup() {
  $(".popup-contenedor.feedback").addClass("oculto");
}

function abrirFeedback() {
  $(".popup-contenedor.formulario").addClass("oculto");
  $(".popup-contenedor.feedback").removeClass("oculto");
}

function trasladarDatosDelFormCompletoAFeedback() {

  const inputNombre = $("#nombre")
  const inputMail = $("#mail")

  const nombre = inputNombre.val();
  const mail = inputMail.val();

  const spanNombre = $("dato-nombre");
  const spanMail = $("dato-mail");

  spanNombre.html( nombre + " ");
  spanMail.html( mail );

}

function trasladarMailDeMiniformAFormCompleto() {

  const inputMail = $("#mail");

  const mail1 = inputMail1.val();
 
  const inputMailFormCompleto = $("#mail");

  console.log(mail1);
  if (mail1 != "") {
    inputMailFormCompleto.val(mail1);
  } 

}
*/