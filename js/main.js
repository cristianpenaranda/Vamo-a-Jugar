/*SIMBOLO DE CARGA*/
window.onload = function (){
   var contenedor = document.getElementById('contenedor_carga');
   contenedor.style.visibility = 'hidden';
   contenedor.style.opacity = '0';
}; 


$(document).ready(function(){
   $('ul li a:first').addClass('active');
   $('#contenedor').load('resources/inicio.html');

   $('.nav-link').click(function(){
   	$('ul li a').removeClass('active');
   	$(this).addClass('active');
   	$('#contenedor div').hide();

      var link = 'resources/'+ $(this).attr('id')+'.'+'html';
		$('#contenedor').load(link);
	    return false;
   });
});