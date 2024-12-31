$(document).ready(function () {
  $('#mobile_btn').on('click', function () {
    console.log("Botao clicado")
    $('#mobile_menu').toggleClass('active');
    $('#mobile_btn').find("i").toggleClass('fa-x');
  });
});
