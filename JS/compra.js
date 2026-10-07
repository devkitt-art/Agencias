(function ($) {
	$(document).ready(function(){
		
		$('.campo').addClass('ui-widget ui-state-default ui-corner-all');
		$('.boton').button();
		
		//Botón cerrar del bloque mensajes
		$('#messages .btn-cerrar a')
		.click( function(){
			$('#messages-box').animate({
				height: '0'
			}, 500, function() {
				$('#messages-box').hide();
			});
		});
		
		//Actualizar corridas
		$('#btn-actualizar').click( function(){
			$('#regreso-fecha').addClass('error');
			return false;
		});
		
		//Combobox de ciudades
		$('#salida-origen, #salida-destino').combobox();
		
		//Campos de calendario
		$('#salida-fecha, #regreso-fecha').datepicker({
			showButtonPanel: false, 
			firstDay: 0, 
			showOn: 'button', 
			buttonImageOnly: true, 
			buttonImage: '../imagenes/calendario.png', 
			beforeShow: function() {$('#ui-datepicker-div').css('z-index', 100); }
		});
		
		//Ocultar escalas
		$('#salida .viaje-escalas, #regreso .viaje-escalas').hide();
		
		//Botón ver escalas
		$('#salida a.escalas, #regreso a.escalas').click(function() {
			$(this).parent().parent().next().slideToggle('normal');
			$(this).toggleClass('escalas-open');
			return false;
		});
		
		$('#salida-bus .asientos').delegate('li:not(.pasajero)', 'click', function() {
			$(this).toggleClass('seleccionado');
		});
		
		$('#regreso-bus .asientos').delegate('li:not(.pasajero)', 'click', function() {
			$(this).toggleClass('seleccionado');
		});
		
	});
}(jQuery));