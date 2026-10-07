var veces=0;

function tiempoAgotado() {
			if(paso==7 && veces==0) 
			{ 
				mostrar_confirmacion();
				setTimeout("oculta_confirmacion()",30000);
			}
			else 
			{
				//if ($('#timer #reloj').children().html()=='00:01'){
				if($('#timer #reloj').countdown('getTimes')[6]<=1 && $('#timer #reloj').countdown('getTimes')[5]==0){
					alert(msj.SesionTerminada);
					desbloqueoasientoatras(0);
					location.href=urlprin;
				}
			}
		}


function iniTimeDown(inSeg,inPaso){
	generareloj();
	
	//alert(inSeg + ' --- ' + inPaso + ' --- ' + paso);
			
	//document.getElementById('reloj').innerHTML = '99:99';
	
	var cuantoTiempo = Math.floor(new Date())/1000 + inSeg;

	timeDown(cuantoTiempo,inPaso);
	
	/* ahernandez - 18 01 2013 - ##34579## - Se modifica el ciclo que estaba en jQuery por un ciclo con javascript *"
	
	/*
	$('#timer').css({ display: 'inline'});
	$('#timer #reloj').countdown({
				until: '+' + inSeg, 
				compact: true, 
				format: 'MS', 
				onExpiry: tiempoAgotado
			});*/
}

function timeDown(howTime,howPaso){
	//alert('ciclo  ' +  paso + '   -   ' + howPaso);

	var actualTiempo = Math.floor(new Date()/1000); 
	calTime = howTime-actualTiempo; //Obtener diferencia 
	
	if ( calTime>0 ) { 
		horas_dec=((calTime/60)/60); 
		horas=Math.floor(horas_dec); 
		minutos=horas_dec - horas; 
		minutos_dec=minutos*60; 
		minutos=Math.floor(minutos_dec);
		segundos=minutos_dec - minutos; 
		segundos=Math.floor(segundos*60);
		
		if(minutos!=0){
			if(minutos<10){
				minutos = '0' + minutos
			}else{
				minutos
			}			
			 
		} else{
				minutos = '00'
		}
			
		if(segundos!=0){
			if(segundos<10){
				segundos = '0' + segundos
			}else{
				segundos	
			}
		}else{
			segundos = '00'	
		}
		
		/*color del temporizador*/
		if(minutos == '00' ){
			$("#reloj").css("color", "#ff0000");
		}
		/*
		else{
			$("#reloj").css("color", "#5142D6");
		}
		*/

		//alert( minutos + ":" + segundos);
		// Mostramos resultados en navegador sobre elemento id 
		document.getElementById('reloj').innerHTML = '&nbsp;' + minutos + ":" + segundos + '&nbsp;';
		
		//Pausa en milisegundos (1000 = 1 sg)	
		if ( howPaso == paso)
		{	
			timeID = setTimeout("timeDown("+howTime+","+howPaso+");", 1000);
		}
		return true
	}
	else
	{ 
		desbloqueoasientoatras(0);
		alert(msj.SesionTerminada);
		location.href=urlprin;
		clearTimeout(timeID);
		return false
	}
}


function termina(){		
	//$('#timer .numbers').countdown('destroy');
	$('#timer #reloj').countdown('destroy');
	$('#timer').css({ display: 'none'});
}
function mostrar_confirmacion()
{
$("#confirmacion").dialog('open');
}
function oculta_confirmacion()
{
if(mensajet==0) {$("#confirmacion").dialog('close');
no_mas_tiempo(); return false; } 
}
function mas_tiempo()
{
	http = CreateRequest();
	http.open("GET","/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=AgregarTiempo&ARGUMENTS=-A"+ consecutivo );
	http.send(null);
	$('#timer .numbers').countdown('destroy');
	iniTimeDown(inmiba)				
	veces++;
	mensajet++;
}
function no_mas_tiempo()
{
	alert('Tiempo agotado');
	desbloqueoasientoatras(0);
	location.href=urlprin;
}
$(function() {
				$("#confirmacion").dialog({ bgiframe: true, modal: true, autoOpen: false,
				overlay: { backgroundColor: '#000', opacity: 0.5 },
				buttons: { 
				'Aceptar': function() {
						$(this).dialog('close');
						mas_tiempo();
						return true	;
						},
				'Cancelar': function() {
						mensajet++;				
						$(this).dialog('close'); 
						no_mas_tiempo();
						return false;
						}
				}, draggable: false, closeOnEscape: false })
				.parent('.ui-dialog').find('.ui-dialog-titlebar-close').remove(); });	