//Archivo de seleccion de Idioma

var rutaImg = '';
var img = '';
var txt = '';
var msj = '';
var htm = '';
var paises = '';
var paisesTB='';
var estadopais = '';
var ObjColumnas ='';
var columnas='';

function setIdioma(i)
{	
	if(i=='ES'){
	
		txt = RecuperaTxtES();
		msj = RecuperaMsjES();
		ObjColumnas = RecupColumnasES();
		paises = RecupPaisesES();
		estadopais = RecupEstadoES();
		paisesTB = RecupPaisesESTB();
	}
	else if(i=='IN'){
		rutaImg = '../imagenes/images/';
		txt = RecuperaTxtIN();
		msj = RecuperaMsjIN();
		ObjColumnas = RecupColumnasIN();
		paises = RecupPaisesIN();
		estadopais = RecupEstadoIN();
		paisesTB = RecupPaisesINTB();
	}
	columnas=ObjColumnas;
	
	htm = {
		'terminos':''+rutaImg+'terminos.html'
	};
	
	img = {  // Imagenes
		'logo_main1':'../imagenes/logo_main1.png',
		'logo_main2':'../imagenes/logo_main2.png',
		'logo_fondoconta':''+rutaImg+'menu01.png',
		'Centel':''+rutaImg+'Centel.png',
		'btn_ayuda':''+rutaImg+'btn_ayuda.png',
		'btn_home':''+rutaImg+'btn_home.png',
		'btn_continuar':''+rutaImg+'btn_continuar.jpg',
		'btn_continuar_over':''+rutaImg+'btn_continuar_over.jpg',
		'btn_seleccione':''+rutaImg+'btn-seleccione.png',
		'btn_seleccione_over':''+rutaImg+'btn-seleccione_over.png',
		'btn_autorrelleno':''+rutaImg+'btn_autorrelleno.png',
		'btn_autorrelleno_over':''+rutaImg+'btn_autorrelleno_over.png',
		'btn_enviar':''+rutaImg+'btn_enviar.png',
		'btn_enviar_over':''+rutaImg+'btn_enviar_over.png',
		'btn_continuarB':''+rutaImg+'btn_continuarB.png',
		'btn_continuarB_over':''+rutaImg+'btn_continuarB_over.png',
		'btn_regresar':''+rutaImg+'btn_regresar.jpg',
		'btn_regresar_over':''+rutaImg+'btn_regresar_over.jpg',
		'btn_imprimir':''+rutaImg+'btn_imprimir.png',
		'btn_imprimir_over':''+rutaImg+'btn_imprimir_over.png',
		'btn_entrar':''+rutaImg+'btn_entrar.jpg',
		'btn_entrar_over':''+rutaImg+'btn_entrar_over.jpg',
		'btn_pagar':''+rutaImg+'btn_pagar.jpg',
		'btn_pagar_over':''+rutaImg+'btn_pagar_over.jpg',
		'btn_guardar':''+rutaImg+'btn_guardar.png',
		'btn_guarda_over':''+rutaImg+'btn_guardar_over.png',
		'btn_cv_agencias':''+rutaImg+'btn_cv_agencias.png',
		'btn_cv_agencias_over':''+rutaImg+'btn_cv_agencias_over.png',
		'btn_cv_continuar':''+rutaImg+'btn_cv_continuar.png',
		'btn_cv_continuar_over':''+rutaImg+'btn_cv_continuar_over.png',
		'btn_cv_paquetes':''+rutaImg+'btn_cv_paquetes.png',
		'btn_cv_paquetes_over':''+rutaImg+'btn_cv_paquetes_over.png',
		'titulo_inicio':''+rutaImg+'titulo_inicio.jpg',
		'titulo_cv_vbpagencias':''+rutaImg+'titulo_cv_vbpagencias.png',
		'titulo_vba_agencias':''+rutaImg+'titulo_vba_agencias.png',
		'titulo_cancelacion':''+rutaImg+'titulo_cancelacion.jpg',
		'titulo_intercambio':''+rutaImg+'titulo_intercambio.jpg',
		'titulo_cambioContrasena':''+rutaImg+'titulo_cambioContrasena.jpg',
		'titulo_movimientos':''+rutaImg+'titulo_movimientos.jpg',
		'titulo_saldos':''+rutaImg+'titulo_saldos.jpg',
		'titulo_terminos':'banner_head_itinerario.png',
		'titulo_cv_venta_boletos':''+rutaImg+'titulo_cv_venta_boletos.png',
		'titulo_administrador':''+rutaImg+'titulo_administrador.jpg',
		'titulos_horario_salida':''+rutaImg+'titulos-horario-salida.jpg',
		'titulos_horario_regreso':''+rutaImg+'titulos-horario-regreso.jpg',
		'titulos_llenar_formulario':''+rutaImg+'titulos-llenar-formulario.jpg',
		'titulos_verifique_su_viaje':''+rutaImg+'titulos-verifique-su-viaje.jpg',
		'RStitulos_forma_de_pago':''+rutaImg+'titulos-forma-de-pago.jpg',
		'titulos_seleccione_asientos':''+rutaImg+'titulos-seleccione-asientos.jpg',
		'titulos_detalle_compra':''+rutaImg+'titulos-detalle-compra.jpg',
		'verde_1':''+rutaImg+'verde_1.png',
		'verde_2':''+rutaImg+'verde_2.png',
		'flecha_salida':''+rutaImg+'flecha_salida.png',
		'flechaVerde2':''+rutaImg+'flechaVerde2.png',
		'flechaAzul2':''+rutaImg+'flechaAzul2.png',
		'asientos_salida_azul':''+rutaImg+'asientos_salida_azul.png',
		'asientos_regreso_azul':''+rutaImg+'asientos_regreso_azul.png',
		'asientos_salida_blanco':''+rutaImg+'asientos_salida_blanco.png',
		'asientos_regreso_blanco':''+rutaImg+'asientos_regreso_blanco.png',
		'piso1':''+rutaImg+'piso1.gif',
		'piso2':''+rutaImg+'piso2.gif',
		'frente':''+rutaImg+'frente.jpg',
		'izquierdo':''+rutaImg+'izquierdo.jpg',
		'asiento_disponible':''+rutaImg+'asiento-disponible.png',
		'asiento_ocupado':''+rutaImg+'asiento-ocupado.png',
		'calendario':''+rutaImg+'calendario.png',
		'loading':''+rutaImg+'loading.gif',
		'loading3':''+rutaImg+'loading3.gif',
		'Asiento_V':''+rutaImg+'Asiento_V.jpg',
		'Asiento_L':''+rutaImg+'Asiento_L.jpg',
		'Asiento_VT':''+rutaImg+'Asiento_VT.jpg',
		'Asiento_LT':''+rutaImg+'Asiento_LT.jpg',
		'backInfo':''+rutaImg+'backInfo.jpg',
		'azulcosta_1':''+rutaImg+'azul_costa1.png',
		'azulcosta_2':''+rutaImg+'azul_costa2.png',
		'salidanav':''+rutaImg+'paso_1.png',
		'regresonav':''+rutaImg+'paso_2.png',
		'formularionav':''+rutaImg+'paso_3.png',
		'asientonav':''+rutaImg+'paso_4.png',
		'resumennav':''+rutaImg+'paso_5.png',
		'pagonav':''+rutaImg+'paso_6.png',
		'confirmacionnav':''+rutaImg+'paso_7.png',
		'btn_refresh':''+rutaImg+'btn_refresh.jpg',
		'btn_refresh_over':''+rutaImg+'btn_refresh_over.jpg',
		'linead':''+rutaImg+'linea.jpg',
		'cargandogif':''+rutaImg+'loading.gif',
		'franja':''+rutaImg+'bg_franja.png'
	};
}

