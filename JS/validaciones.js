//ODM VERSION 7.5

/* ahernandez - 18 01 2013 - ##34579## - en todos los llamados a la funcion "iniTimeDown" se agrega como parametro de entrada, la variable "paso" */

/* ahernandez - 12 08 2013 - funciones de Google Analytics */
  var _gaq = _gaq || [];

  // P R O D U C C I Ó N:
  _gaq.push(['_setAccount', 'UA-43160524-1']);

  // Q A:
  //_gaq.push(['_setAccount', 'UA-43303437-1']);

  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

/***/
/***/
/***/

function fechaactual(dias){
	var fechaAux = new Date();
	try{
		if(isNaN(parseInt(dias)))
			dias=0;
	}catch (er)
	{dias=0;}
	var fechaActuala = new Date(fechaAux.getFullYear(), fechaAux.getMonth(), fechaAux.getDate()+dias, 0, 0, 0, 0);
    mes = fechaActuala.getMonth()+1;
    anno = fechaActuala.getFullYear();
    dia = fechaActuala.getDate();
    if (dia <10) dia = "0" + dia;
    if (mes <10) mes = "0" + mes;

    var fechahoy = dia + "/" + mes + "/" + anno;
	//alert(""+fechahoy+"");
	return(fechahoy);
	//form.getElementById("Fechabox0").value =fechahoy;
}


function fechaValida( laFecha ,ag){

   var V_FechaSis = new Date();

	var diaActual = parseInt( V_FechaSis.getDate() );
	    mesActual = parseInt( V_FechaSis.getMonth()+1 );
	    anioActual = parseInt( V_FechaSis.getFullYear() );

	if(ag=='AG'){
		var strdiaElegido = laFecha.substring(0,2);
	    strmesElegido = laFecha.substring(3,5);
	    stranioElegido = laFecha.substring(6,10);
	}
	else{
		var strdiaElegido = laFecha.value.substring(0,2);
	    strmesElegido = laFecha.value.substring(3,5);
	    stranioElegido = laFecha.value.substring(6,10);
	}

  	var diaElegido;
	var mesElegido;
	var anioElegido;

   if ( strdiaElegido.charAt(0) == '0' )
    	diaElegido = parseInt( strdiaElegido.substring(1,2) );
   else
      diaElegido = parseInt( strdiaElegido );

   if ( strmesElegido.charAt(0) == '0' )
    	mesElegido = parseInt( strmesElegido.substring(1,2) );
   else
      mesElegido = parseInt( strmesElegido );

   anioElegido = parseInt( stranioElegido );

   if( anioElegido < anioActual )
   {
		return false;
   }
   else
   {
      if( anioElegido == anioActual  &&  mesElegido < mesActual )
      {
         return false;
      }
      else
      {
         if( (anioElegido == anioActual)  &&  (mesElegido == mesActual)  &&  (diaElegido < diaActual) )
         {
            return false;
         }
         else
         {
            return true;
         }
      }
   }
}

function EntrarAgencias(){
   if( document.getElementsByName("T1")[0].value == '' )
   {
   if(typeof ponError == 'function')
			ponError("textfield7");
      alert(""+msj.FavorTeclearUsuario);
      return false;
   }

   else if( document.getElementsByName("T2")[0].value == '' )
   {
	if(typeof ponError == 'function')
			ponError("textfield");
      alert(""+msj.FavorTeclearContrasena);
      return false;
   }

   else
   {
         document.form.la_password.value = document.getElementsByName("T2")[0].value;
         document.form.submit();
         document.form.T2.value = '';
         return true;
   }
}

function Viajeredondo(){
 	visStyle = "visible";
	$("#FRegreso").css("visibility",visStyle);
}
function Viajesencillo(){
  	visStyle = "hidden";
	$("#FRegreso").css("visibility",visStyle);
}
function Cida(i){
	uno=[i];

	document.getElementById("corr"+i).className="horariossel";
	image = document.getElementById('Image'+(i+100));
    image.src = "../imagenes/CheckBoxSelect.gif";

	seluno='true';
	if(i!=ncs){
		if(ncs!=500){
		document.getElementById("corr"+ncs).className="";
		image = document.getElementById('Image'+(ncs+100));
    	image.src = "../imagenes/CheckBox.gif";
		}
		document.getElementById("corr"+i).className="horariossel";
		image = document.getElementById('Image'+(i+100));
    	image.src = "../imagenes/CheckBoxSelect.gif";
		corridaIda = object_corridas[i];
		fechallegada = corridaIda.FechaLlegada;
	}
ncs=i;
}
function Cregreso(z){
	dos=[z];
	var opcion=0;
	if(viinco == 'NO') opcion=500;
	document.getElementById("corr"+(z+opcion)).className="horariossel";
	image = document.getElementById('Image'+(z+100));
    image.src = "../imagenes/CheckBoxSelect.gif";
	seldos='true';
		if(z!=ncsR){
		if(ncsR!=1000){
		document.getElementById("corr"+ncsR).className="";
		image = document.getElementById('Image'+(ncsR+100));
    	image.src = "../imagenes/CheckBox.gif";
		}
		document.getElementById("corr"+(z+opcion)).className="horariossel";
		image = document.getElementById('Image'+(z+100));
    	image.src = "../imagenes/CheckBoxSelect.gif";
		corridaRegeso =object_corridasR[z];
	}
ncsR=z+opcion;
}
function seleccionacorridaatras(corrida){
document.getElementById("corr"+corrida).className="horariossel";
}
function validaConsulta(){
	var V_FechaSis = new Date();
	limpiaerroresfiltros();

	var CantidadPas = parseInt(document.form.Adulto.value);
		CantidadPas += parseInt(document.form.Nino.value);
		CantidadPas += parseInt(document.form.Insen.value);
		CantidadPas += parseInt(document.form.Estudiante.value);
		CantidadPas += parseInt(document.form.Maestro.value);

	if (CantidadPas >10 & CantidadPas != 0)
	{
		alert(""+msj.NoComprasdeMasde10Pasaj);
		return false;

	}
	if (document.form.Nino.value != 0)
	{
      if ((document.form.Adulto.value+document.form.Insen.value+document.form.Estudiante.value+document.form.Maestro.value)==0)
		{
		    if(typeof ponError == 'function')
			ponError("Nino");
			alert(""+msj.NoPuedeViajarMenorSolo);
			return false;

		}

	}
	if ((document.form.Origen.value == "ORIGEN")||(document.form.Origen.value == ""))
	{
		if(typeof ponError == 'function')
			//ponError("tdOrigen");
			ponError("Origen");
			ponError("Origen_chosen");

		alert(""+msj.NecesitaSelecOrigen);
		return false;

	}
	if ((document.form.Destino.value == "DESTINO")||(document.form.Destino.value == ""))
	{
		if(typeof ponError == 'function')
		//ponError("tdDestino");
		ponError("Destino");
		ponError("Destino_chosen");

		alert(""+msj.NecesitaSelecDestino);
		return false;

	}
	if (document.form.Origen.value == document.form.Destino.value)
	{
		alert(""+msj.ErrorOrigDestIguales);
		return false;

	}

   // valida que la fecha de viaje no sea menor al día de hoy.
   if( !fechaValida(document.form.Fechabox0) )
	{
		if(typeof ponError == 'function')
			ponError("dpd1");
		alert(""+msj.ElegirFechaValida);
		return false;

	}

   // valida que la fecha de regreso no sea menor a la fecha de viaje.
   if( document.form.tipoViaje[1].checked )
   {
      if(document.form.Fechabox.value.substring(6,10) < document.form.Fechabox0.value.substring(6,10))
		{
			if(typeof ponError == 'function')
			ponError("dpd2");
			alert(""+msj.FechaRegNoMenoraFechaSal);
			return false;

		}

      if(document.form.Fechabox.value.substring(6,10) == document.form.Fechabox0.value.substring(6,10))
      {
   		if(document.form.Fechabox.value.substring(3,5) < document.form.Fechabox0.value.substring(3,5))
		   {
		   if(typeof ponError == 'function')
			ponError("dpd2");
   			alert(""+msj.FechaRegNoMenoraFechaSal);
			   return false;

		   }

		   if(document.form.Fechabox.value.substring(3,5) == document.form.Fechabox0.value.substring(3,5))
		   {
   			if (document.form.Fechabox.value < document.form.Fechabox0.value)
			   {
			   if(typeof ponError == 'function')
			     ponError("dpd2");
   				alert(""+msj.FechaRegNoMenoraFechaSal);
				   return false;

            }
		   }
      }
   }

   if ((document.form.Adulto.value+document.form.Insen.value+document.form.Nino.value+document.form.Estudiante.value+document.form.Maestro.value)==0)
	{
	if(typeof ponError == 'function')
			ponError("Adulto");
			alert(""+msj.DebeSelecTipoPasajeroalMenos);
		return false;
	}


//	document.form.submit();
return true;
}

function FP_swapImg() {//v1.0
 var doc=document,args=arguments,elm,n; doc.$imgSwaps=new Array(); for(n=2; n<args.length;
 n+=2) { elm=FP_getObjectByID(args[n]); if(elm) { doc.$imgSwaps[doc.$imgSwaps.length]=elm;
 elm.$src=elm.src; elm.src=args[n+1]; } }
}
function FP_preloadImgs() {//v1.0
 var d=document,a=arguments; if(!d.FP_imgs) d.FP_imgs=new Array();
 for(var i=0; i<a.length; i++) { d.FP_imgs[i]=new Image; d.FP_imgs[i].src=a[i]; }
}
function FP_getObjectByID(id,o) {//v1.0
 var c,el,els,f,m,n; if(!o)o=document; if(o.getElementById) el=o.getElementById(id);
 else if(o.layers) c=o.layers; else if(o.all) el=o.all[id]; if(el) return el;
 if(o.id==id || o.name==id) return o; if(o.childNodes) c=o.childNodes; if(c)
 for(n=0; n<c.length; n++) { el=FP_getObjectByID(id,c[n]); if(el) return el; }
 f=o.forms; if(f) for(n=0; n<f.length; n++) { els=f[n].elements;
 for(m=0; m<els.length; m++){ el=FP_getObjectByID(id,els[n]); if(el) return el; } }
 return null;
}
function CreateRequest(){
 var xmlHttp;
    try{
        xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    }catch(e){
        try{
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(oc){
            xmlHttp = null;
        }
    }
 if(!xmlHttp && typeof XMLHttpRequest != "undefined"){
        xmlHttp = new XMLHttpRequest();
    }
 return xmlHttp;
}
function RefreshImage() {
	//var Divisor = document.getElementById('myDiv');
	//Divisor.innerHTML = newsjcap();
	document.getElementById('kap').src = newsjcap() + '.jpg';
}

function adelante(){

if(viinco == 'NO' && paso == -1) { document.getElementById("area2").innerHTML="";  document.getElementById("area2").style.display="none";}
var verRegresar = true;
var b = '';
if (paso == -1)
	{
		termina();
		generaNuevaSesion();
		agenciaFiltro();
		paso ++;
		verRegresar = false
		window.onload = function () {
    if (! localStorage.justOnce) {
        localStorage.setItem("justOnce", "true");
        window.location.reload();
    }
}

	}
else
paso ++;
//Se agrega validacion para incrementar a paso cuando sea el viaje redondo y este activado q parescan dos corridas en el mismo paso
if((viinco == 'NO' && redondo == 'SI' && paso == 2) || (viinas == 'NO' && redondo == 'SI' && paso == 5)) paso ++;

if(paso == 1){
	localStorage.setItem("justOnce", "true");
	if (sesion != 0){
		if ( validaConsulta2() != true  ){
			paso --;
		}
		else{
			if(oficinar.search("-")>0)
			{
				//alert("371  conexion");
				corridasConexion();
			}
			else
			{
				corridas();
			}
			$('#regresar').html('');
		}
	}
	else{
		if(oficinar.search("-")>0)
			{
				corridasConexion();
			}
			else
			{
				corridas();
			}
		$('#regresar').html('');
	}

	verRegresar = false;
	}
if(paso == 2 && redondo == 'SI'){
		if(validaCorrida('redondo')=='SI') {
				corridasRegreso();
		}
		else {
			paso=1;
			ajustaReloj(inmicr);
			verRegresar = false;
		}
}
//Cuando no tiene venta redonda
else if(paso == 2 && redondo == 'NO'){
		paso ++;
}

if(paso == 3){
			if(redondo == 'SI'){
						if(viinco == 'NO')
						if(validaCorrida('redondo')=='SI' && validaCorrida('redondo2')=='SI')
						personalizaAsientos();
						else{
						paso=2;
						ajustaReloj(inmicr);
						verRegresar = false;}
						else
						if(validaCorrida('redondo2')=='SI')
						personalizaAsientos(); else{ 	paso=2;ajustaReloj(inmicr); verRegresar = false;}
			}

			if(redondo == 'NO'){
						if(validaCorrida('sencillo')=='SI') personalizaAsientos();
						else {
						paso=2;
						if (
	(esint!='SI'  &&  corridas[0].claveCorrida!='0' )
	||
	(esint=='SI'  &&  corridas[0].claveCorrida!='0'  &&  toquens.length==(adulto+insen+estudiantes+maestros+menor))
	)
						ajustaReloj(inmicr);
						verRegresar=false;
						}
			}
	}
//Asientos Regreso
	if(paso == 4 && redondo == 'SI'){
		if(validaasientos('ida')=='SI') personalizaAsientosR();
			else{
			paso=3;
			ajustaReloj(inmipe);
				}
	}
//Cuando no tiene venta redonda
	else if(paso == 4 && redondo == 'NO'){
		paso ++;
	}

//Asientos Personaliza
/*
//Personaliza
	if(paso == 3){
			if(redondo == 'SI'){
						if(viinco == 'NO')
						if(validaCorrida('redondo')=='SI' && validaCorrida('redondo2')=='SI')
						personaliza();
						else{
						paso=2;
						verRegresar = false;}
						else
						if(validaCorrida('redondo2')=='SI')
						personaliza(); else{ 	paso=2; verRegresar = false;}
			}

			if(redondo == 'NO'){
						if(validaCorrida('sencillo')=='SI') personaliza(); else {paso=2; verRegresar=false;}
			}
	}

	//Merge Asientos
	if(paso == 4){
		if ( validacionesPersozaliza() != true  ){
			paso --;
		}
		else{
			asientosPost('ida2');
		}
	}
	//Asientos Regreso
	if(paso == 5 && redondo == 'SI'){
		if(validaasientos('ida')=='SI') asientosRegreso('ida2');
			else paso=4;
	}
//Cuando no tiene venta redonda
	else if(paso == 5 && redondo == 'NO'){
		paso ++;
	}

	*/
	//Resumen
	if(paso == 5){
		if(redondo == 'SI'){
			 if( validaasientos('regreso')=='SI')
			 {
			 resumen();
			 }
			 else{
			 paso=4;
			 ajustaReloj(inmipe);
			 }
			 }
		if(redondo == 'NO'){
			 if(validaasientos('ida')=='SI')
			 resumen();
			 else{
			 paso=3;
			 ajustaReloj(inmipe);
			 }
			 }


		$('#banner').html(banner(b));
	}
	if(paso == 6){
		var tPago;
		var radioPago = $("input[type='radio']:checked").length;
		if(radioPago <= 0){
			alert("Seleccione una forma de pago antes de continuar.");
			paso = 5;
			ajustaReloj(inmico);
		} else {
		tPago = $("input[type='radio']:checked").val();

		Inbo=0;
		if(tPago=='EF')
		{
			pago = 'EF';
			if(validacionesTB()){
			guarda();
			verRegresar = false;
			}
			else{
					paso--;
				ajustaReloj(inmico);
			}
		}
		else{
				if(validacionesTB()){
				//document.forms["pagobanco"].submit();
				guardaAEJ();
				verRegresar = false;
				}
				else{
				paso--;
				ajustaReloj(inmico);
				}
			}
			}
	}

	if (paso == 11) {
		if (sesion != 0){
			if ( validaConsulta2() != true  ){
				paso --;
			}
			else{
					confirmarutaabierto();
			}
		}
	}
	if (paso == 12)
	{
		if (sesion != 0){
			if(ruta == "SI")
			{
				if(validarutaelegida() != true)
					paso --;
				else
					personalizaAbierto();
			}
			else
			paso++;

		}
	}

	if (paso == 13) {
		if ( validacionesPersozaliza() != true  ){
			if(ruta == "SI") paso --;
			if(ruta == "NO") paso = paso-2;
		}
		else{
			resumenAbierto();
		}
	}

	if (paso == 14){
		var tPago;
		var radioPago = $("input[type='radio']:checked").length;
		if(radioPago <= 0){
			alert("Seleccione una forma de pago antes de continuar.");
			paso = 13;
		} else {
		tPago = $("input[type='radio']:checked").val();
		//alert(tPago + ' paso '+paso);
		Inbo=0;
		if(typeof validaTerminosResumen == 'function'){
			if(validaTerminosResumen() ){
			if(tPago == 'todito')// hgaytan Todito
				todito(2);
			else{
				guardaAbierto() //Banamex
				}
			}
			else
				paso--;
		}else {
			if(tPago == 'todito')// Hgaytan
				todito(2);
			else{
				if(validacionesTB()){
			pago = 'EF';
			guardaAbierto();
			verRegresar = false;
			}
			else{
					paso--;
			}

				}
			}
		}
		//guardaAbierto();
	}

	var comsim="'";

		if (paso >= 6){
			verRegresar = false
			$('#regresar').html('')
		}

		if ( verRegresar == true)
			$('#regresar').html('<a href="#" onClick="return atras();" class="btn_back">‹‹ '+txt.Regresar+'</a>');
			//$('#regresar').html('<a href="#" onClick="return atras();"><img class = "botonNav" src="../imagenes/btn_regresar.jpg" width="107" height="26" border="0" id="imgAtras" onmouseover="MM_swapImage('+comsim+'imgAtras'+comsim+','+comsim+''+comsim+','+comsim+'../imagenes/btn_regresar_over.jpg'+comsim+',1)" onmouseout="MM_swapImgRestore()" /></a>');

		if( paso >= 10){
			habilitarArea("Abierto");
		}

}

function atras(){
var npasoreg=0;
npasoreg = paso;
paso--;
//Se agrega linea cuando este en personalizar y se regrese pase  corridas ida
if((viinco == 'NO' && redondo == 'SI' && paso == 2) || (viinco == 'NO' && redondo == 'SI' && paso == 5)) paso --;
//alert(paso);

if (paso == 13) {
		resumenAbierto();
	}

	if (paso == 12) {
		personalizaAbierto();
	}
	if(paso == 11)
	{
		if(ruta == "SI")
		confirmarutaabierto();
		else
		paso--;
	}

	if (paso == 10) {
		abierto();
	}

	if(paso == 7){
		guardaAEJ();
	}

if(paso == 6){
		resumen();
	}
	//Asientos Regreso
	if(paso == 4 && redondo == 'SI'){
	    if(npasoreg==5) {
		nosesion=true;
		desbloqueoasientoatras(2);
		limpiaCadenaAsientosRegreso();
		 nosesion=false; }
		personalizaAsientosR();

	}
//Cuando no tiene venta redonda
	else if(paso == 4 && redondo == 'NO'){
		if(npasoreg==5 || npasoreg==6)
		{
			nosesion=true;
			desbloqueoasientoatras(1);
			nosesion=false;
		}
		paso --;
		personalizaAsientos();
	}
	//Merge Asientos
	/*if(paso == 4){
		if(npasoreg==5 || npasoreg==6) {  nosesion=true; desbloqueoasientoatras(1);  nosesion=false; }
		personalizaAsientosR();
	}*/
	//Personaliza
	if(paso == 3){

		if(redondo=='SI')
		{
		nosesion=true;
			desbloqueoasientoatras(1);
			nosesion=false;
			}
	personalizaAsientos();
	}
	if(paso == 2 && redondo == 'SI'){
		corridasRegreso();
	}
//Cuando no tiene venta redonda
	else if(paso == 2 && redondo == 'NO'){
		paso --;
	}

if(paso <= 1){
	if (sesion != 0){
		if(oficinar.search("-")>0)
			{
				corridasConexion();
			}
			else
			{
				corridas();
			}
		$('#regresar').html('');
		paso = 1;
	}else{
		if(oficinar.search("-")>0)
			{
				corridasConexion();
			}
			else
			{
				corridas();
			}
		$('#regresar').html('');
		paso = 1;
	}
}

if(paso == 0) {
	generaNuevaSesion();
	generaFiltroAgencia();
	}
}


function corridas(){
	document.title =msj.TituloSalida;
	var c,d,b;
	var x = paso;
	var camb='';
	ncs=500;
	seluno=false;
	if(Inbo==1) camb="SI"; else camb="NO";
	var http = CreateRequest();

	termina();


	var url = "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=RecuperaCorridasVRARGUMENTS&ARGUMENTS=-A"+oficinao+",-A"+oficinar+",-A"+fechasal+",-A"+adulto+",-A"+insen+",-A"+menor+",-A"+estudiantes+",-A"+maestros+",-A"+viajeredondo+",-A"+sesion+",-A"+claus+",-A,-A"+camb+",-A,-A,-A,-A,-A,-A1,-A"+consecutivo+"";
	http.open("GET",url,true);
	document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	ocultamiestrab(false);
	http.onreadystatechange  = function(){
		if(http.readyState == 4 && http.status == 200) {
			var json_data = http.responseText;
			try{
				object_corridas = eval(json_data);
				generaCorridas(object_corridas,'ida');
				if(object_corridas.Error)
							document.getElementById("area").innerHTML = generaError(msj.NoHayTarifas);
				else{
				if (object_corridas[0].claveCorrida!='0'){

					puntoactual(1,'CE');
					datos(d,x);
					if(document.getElementById("banner")!=null)
					document.getElementById("banner").innerHTML = banner(b);
					if(inmige==0){
							iniTimeDown(inmicr,paso);
							}

					tiempoinicial = new Date().getTime()/1000;

					$('#clock').FlipClock(inmicr, {
						clockFace: "MinuteCounter",
						countdown: true
						});
					$("a.iframe").fancybox({
						'width' : '80%',
						'height' : '80%',
						'autoScale' : false,
						'transitionIn'	:	'elastic',
						'transitionOut'	:	'elastic',
						'speedIn'		:	600,
						'speedOut'		:	200,
						'overlayShow'	:	false
					});
					}
						}
						if(ncs!=500 && personalizat == true)seleccionacorridaatras(ncs);
						if(redondo == 'NO')personalizat=false;
						if(viinco == 'NO' && redondo == 'SI') corridasRegreso();
			}catch(e){
				document.getElementById("area").innerHTML =http.responseText;
			}
		}
	}
	http.send(null);

		}
function corridasRegreso(){
	if(viinco == 'NO')	document.title =msj.TituloRegreso;
	else	document.title =msj.TituloRegreso;
	var c;
	var r;
	var d;
	var x = paso;
	ncsR=1000;
	seldos=false;
	http = CreateRequest();

	termina();
	//document.getElementById("counter").innerHTML = '';

	var url = "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=RecuperaCorridasVRARGUMENTS&ARGUMENTS=-A"+oficinao+",-A"+oficinar+",-A"+fechareg+",-A"+adulto+",-A"+insen+",-A"+menor+",-A"+estudiantes+",-A"+maestros+",-A"+viajeredondo+",-A"+sesion+",-A"+claus+",-A,-A,-A,-A,-A,-A,-A,-A2,-A";
	http.open("GET",url,true);
	if(viinco == 'NO') document.getElementById("area2").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	else document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	ocultamiestrab(false);
	http.onreadystatechange  = function(){
		if(http.readyState == 4 && http.status == 200) {
		var json_data = http.responseText;
			try{

				//document.getElementById("counter").innerHTML = '';
				object_corridasR = eval(json_data);
				if(oficinar.search("-")>0)
				{
					generaCorridasConexion(object_corridasR,'regreso',opcionConexion);
				}
				else
				{
				if(viinco == 'NO')	{
						generaCorridas(object_corridasR,'regreso');
				}
				else	{
						generaCorridas(object_corridasR,'regreso');
				}
				}
				//document.getElementById("nav").innerHTML = punto(c);
				if (object_corridasR[0].claveCorrida!='0'){
					puntoactual(2,'CE');
					datos(d,x);
					if(inmige==0){
							iniTimeDown(inmicr,paso);
							}
						tiempoinicial = new Date().getTime()/1000;
						$('#clock').FlipClock(inmicr, {
						clockFace: "MinuteCounter",
						countdown: true
						});
					$("a.iframe").fancybox({
						'width' : '80%',
						'height' : '80%',
						'autoScale' : false,
						'transitionIn'	:	'elastic',
						'transitionOut'	:	'elastic',
						'speedIn'		:	600,
						'speedOut'		:	200,
						'overlayShow'	:	false
					});
						if(ncsR!=1000 && personalizat == true)seleccionacorridaatras(ncsR);
						if(viinco == 'NO')personalizat=false;
				}
			}catch(e){
						document.getElementById("area").innerHTML =http.responseText;
						//alert(e);
					}
		}
	}
	http.send(null);
}
function personaliza(){

	document.title =msj.TituloRegistro;
	var c;
	var r;
	var d;
	var w = Math.random();
	t=w;
	var x = paso;
	var cadTabla;
	http = CreateRequest();
	personalizat=true;
	pasajerosdisp='NO';

	termina();
	//document.getElementById("counter").innerHTML = '';
	if(viinco == 'NO' && redondo == 'SI')
	{
	document.getElementById("area2").innerHTML="";
	document.getElementById("area2").style.display="none";}
	if(redondo=='SI')
	var url = "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=PersonalizarVR&ARGUMENTS=-A"+corridaIda.claveCorrida.replace(/^\s*|\s*$/g,"")+",-A"+corridaIda.FechaSalidaInicio+",-A"+corridaIda.FechaSalidaBoleto+",-A"+corridaIda.HoraSalida+",-A"+corridaRegeso.claveCorrida.replace(/^\s*|\s*$/g,"")+",-A"+corridaRegeso.FechaSalidaInicio+",-A"+corridaRegeso.FechaSalidaBoleto+",-A"+corridaRegeso.HoraSalida+",-A"+corridaIda.EmpresaCorrida+",-A"+corridaRegeso.EmpresaCorrida+",-A,-A,-A,-A,-A,-A"+consecutivo+",-A"+w+",-A,-A,-A,-A,-A"+corridaIda.EmpresaCorrida+",-A"+corridaIda.CadenaCorridaTKN+",-A"+corridaIda.CadenaFechaTKN+",-A"+corridaIda.CadenaHoraTKN+",-A"+corridaIda.CadenaVersionTKN+",-A"+corridaIda.CadenaPuntoInicialTKN+",-A"+corridaIda.CadenaPuntoFinalTKN+",-A"+corridaIda.ClaveServicio+",-A"+corridaIda.Viaje+",-A"+corridaRegeso.EmpresaCorrida+",-A"+corridaRegeso.CadenaCorridaTKN+",-A"+corridaRegeso.CadenaFechaTKN+",-A"+corridaRegeso.CadenaHoraTKN+",-A"+corridaRegeso.CadenaVersionTKN+",-A"+corridaRegeso.CadenaPuntoInicialTKN+",-A"+corridaRegeso.CadenaPuntoFinalTKN+",-A"+corridaRegeso.ClaveServicio+",-A"+corridaRegeso.Viaje+"";
	//if(redondo=='NO')   var url = "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=PersonalizarVR&ARGUMENTS=-A"+corridaIda.claveCorrida.replace(/^\s*|\s*$/g,"")+",-A"+corridaIda.FechaSalidaInicio+",-A"+corridaIda.FechaSalidaBoleto+",-A"+corridaIda.HoraSalida+",-A,-A,-A,-A,-A"+corridaIda.EmpresaCorrida+",-A,-A,-A,-A,-A,-A,-A"+consecutivo+",-A"+w+"";
	if(redondo=='NO')   var url = "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=PersonalizarVR&ARGUMENTS=-A"+corridaIda.claveCorrida.replace(/^\s*|\s*$/g,"")+",-A"+corridaIda.FechaSalidaInicio+",-A"+corridaIda.FechaSalidaBoleto+",-A"+corridaIda.HoraSalida+",-A,-A,-A,-A,-A"+corridaIda.EmpresaCorrida+",-A,-A,-A,-A,-A,-A,-A"+consecutivo+",-A"+w+",-A,-A,-A,-A,-A"+corridaIda.EmpresaCorrida+",-A"+corridaIda.CadenaCorridaTKN+",-A"+corridaIda.CadenaFechaTKN+",-A"+corridaIda.CadenaHoraTKN+",-A"+corridaIda.CadenaVersionTKN+",-A"+corridaIda.CadenaPuntoInicialTKN+",-A"+corridaIda.CadenaPuntoFinalTKN+",-A"+corridaIda.ClaveServicio+",-A"+corridaIda.Viaje+""	;
	http.open("GET",url,true);
	document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	ocultamiestrab(false);
	http.onreadystatechange  = function(){
				if(http.readyState == 4 && http.status == 200) {
					var json_data = http.responseText;
					try{

						object_personaliza = eval(json_data);
						if(object_personaliza.Error)
							document.getElementById("area").innerHTML = generaError(object_personaliza.Error);
						else{
							generaPersonaliza(object_personaliza);
							if(inmige==0){
							iniTimeDown(inmipe,paso);
							}
							if (sesion != 0 && !vendir){
								document.getElementById('pago_0').checked="checked";
								TipoPago(1);
							}

							puntoactual(3,'CE');
							datos(d,x,object_personaliza);
								$("a.iframe").fancybox({
								'transitionIn'	:	'elastic',
								'transitionOut'	:	'elastic',
								'speedIn'		:	600,
								'speedOut'		:	200,
								'overlayShow'	:	false
								});
						}
					}
					catch(e){
						document.getElementById("area").innerHTML =http.responseText;
						alert(e);
					}
				}
	}
	http.send(null);
}
function asientos(dir){
  document.title =msj.TituloAsiento;
	var c;
	var r;
	var f;
	var d;
	var b;
	var x = paso;
	asiento.V_NumeroPasajeros=0;
	asiento.V_PasajeroActual=0;
	asiento.V_PasajerosSel=0;
	http = CreateRequest();
	pasajerosdisp='NO';
	if(dir!='reg2' && redondo == 'SI' || dir=='reg2' && redondo == 'NO' || dir=='ida2'){
		termina();
	}
	var url = "/netScripts/Request.aspx?APPNAME=navegante3&PRGNAME=MergeAsientosVR&ARGUMENTS=-A"+pago;
	for(var i = 0;i< 10;i++)
		if(pasajeros[i]) url+= ",-A" + pasajeros[i].value;
		else url += ",-A";
	url += ",-A"+ $("#domicilio").val()+",-A"+ $("#ciudad").val()+",-A"+ $("#codigoPostal").val()+",-A"+ $("#select").val()+",-A"+$("#telefono").val()+",-A"+$("#email").val();
	for(var i = 9;i< 23;i++)
		if(pasajeros[i]) url+= ",-A" + pasajeros[i].value;
		else url += ",-A";
	url +=",-A,-A1,-A"+consecutivo+",-A"+$("#estado").val();
	/*-A"+pasajeros[0].value+",-A"+(pasajeros[1].value)? pasajeros[1].value: ''+",-A"+pasajeros[2].value+",-A,"+pasajeros[3].value+"-A"+pasajeros[4].value+",-A"+pasajeros[5].value+",-A"+pasajeros[6].value+",-A"+pasajeros[7].value+",-A"+pasajeros[8].value;
	url += ",-A"+pasajeros[9].value+",-A"+direccion.value+",-A"+ciudad.value+",-A"+codigoPostal.value+",-A"+select.value+",-A"+telefono.value+",-A"+correo.value+",-A"+pasajeros[10].value+",-A"+pasajeros[11].value+",-A"+pasajeros[12].value+",-A"+pasajeros[13].value+",-A"+pasajeros[14].value;
	url += ",-A"+pasajeros[15].value+",-A"+pasajeros[16].value+",-A"+pasajeros[17].value+",-A"+pasajeros[18].value+",-A"+pasajeros[19].value+",-A"+pasajeros[20].value+",-A"+pasajeros[21].value+",-A"+pasajeros[22].value+",-A"+pasajeros[23].value+",-A,-A1,-A"+consecutivo+"";
	"+pasajeros[0].value+"*/
	http.open("GET",url,true);
	document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	ocultamiestrab(false);
	http.onreadystatechange  = function(){

		if(http.readyState == 4 && http.status == 200) {
			var json_data = http.responseText;
			try{
				document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
				object_diagrama = eval(json_data);
				if(object_diagrama.Error)
							document.getElementById("area").innerHTML = generaError(object_diagrama.Error);
				else{
					generaAsientos(object_diagrama,'ida');
					if(dir!='reg2' && redondo == 'SI' || dir=='reg2' && redondo == 'NO' || dir=='ida2'){
						if(inmige==0){
						iniTimeDown(inmias,paso);
						}
					}
					puntoactual(4,'CE');
					datos(d,x);
					$("#banner").html(banner(b));
					$("#banner2").html("");
					if(viinas == 'NO' && redondo == 'SI') { document.getElementById("area2").style.display="block"; asientosRegreso('ida2'); }
				}
			}catch(e){
				document.getElementById("area").innerHTML =http.responseText;
			}
		}
	}
	http.send(null);
}

function asientosPost(dir){
	document.title =msj.TituloAsiento;
	asiento.V_NumeroPasajeros=0;
	asiento.V_PasajeroActual=0;
	asiento.V_PasajerosSel=0;
	var d;
	var b;
	pasajerosdisp='NO';
	if(dir!='reg2' && redondo == 'SI' || dir=='reg2' && redondo == 'NO' || dir=='ida2'){
		termina();
	}
	var argumentos = '{"APPNAME":"Navegante3","PRGNAME":"MergeAsientosVR","ARGUMENTS":"pago,pas0,pas1,pas2,pas3,pas4,pas5,pas6,pas7,pas8,pas9,'+
		'dom,ciudad,cp,pais,tel,email,pas10,pas11,pas12,pas13,pas14,pas15,pas16,pas17,pas18,pas19,pas20,pas21,pas22,pas23,men,modo,consecutivo,estado","pago":"'+pago+'"';

	for(var i = 0;i< 10;i++)
		if(pasajeros[i]) argumentos+= ',"pas'+ i +'":"' + pasajeros[i].value +'"';
		else argumentos += ',"pas'+ i +'":""';

	argumentos += ',"dom":"'+ $("#domicilio").val()+'","ciudad":"' + $("#ciudad").val()+ '","cp":"'+ $("#codigoPostal").val()+'","pais":"'+
		$("#select").val()+'","tel":"'+$("#telefono").val()+'","email":"'+$("#email").val() +'"';

	for(var i = 9;i< 23;i++)
		if(pasajeros[i]) argumentos+= ',"pas'+ i +'":"' + pasajeros[i].value +'"';
		else argumentos += ',"pas'+ i +'":""';

	argumentos +=',"men":"", "modo":"1","consecutivo":"'+consecutivo+'","estado":"'+$("#estado").val() +'"}';
	//argumentos +=',"men":"", "modo":"1","consecutivo":"'+consecutivo+'","estado":"' '"}';


	$.post("/netScripts/Request.aspx",JSON.parse(argumentos),
		function(data){
			try{
				object_diagrama = eval(data);
				if(object_diagrama.Error)
					$("area").html(generaError(object_diagrama.Error));
				else{
					generaAsientos(object_diagrama,'ida');
					if(dir!='reg2' && redondo == 'SI' || dir=='reg2' && redondo == 'NO' || dir=='ida2'){
						if(inmige==0){
						iniTimeDown(inmias,paso);
						}
					}
					puntoactual(4,'CE');
					datos(d,paso);
					$("#banner").html(banner(b));
					$("#banner2").html("");
					if(viinas == 'NO' && redondo == 'SI') { document.getElementById("area2").style.display="block"; asientosRegreso('ida2'); }
				}
			}catch(e){
				$("area").html(data);
			}
		},"text");
}
function asientosRegreso(dir){
	if(viinas == 'NO')	document.title ="Elige el Asiento de ida y regreso";
	else	document.title =msj.TituloAsientoRegreso;
	var c;
	var r;
	var f;
	var d;
	var b;
	var x = paso;
	asientoR.V_NumeroPasajeros=0;
	asientoR.V_PasajeroActual=0;
	asientoR.V_PasajerosSel=0;
		var w = Math.random();
	if (dir!='ida2'){
		termina();
		//document.getElementById("counter").innerHTML = '';
	}
	http = CreateRequest();
	var url = "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=PersonalizarAsientosVR&ARGUMENTS=-A"+corridaIda.claveCorrida.replace(/^\s*|\s*$/g,"")+",-A"+corridaIda.FechaSalidaInicio+",-A"+corridaIda.FechaSalidaBoleto+",-A"+corridaIda.HoraSalida+",-A"+corridaRegeso.claveCorrida.replace(/^\s*|\s*$/g,"")+",-A"+corridaRegeso.FechaSalidaInicio+",-A"+corridaRegeso.FechaSalidaBoleto+",-A"+corridaRegeso.HoraSalida+",-A"+corridaIda.EmpresaCorrida+",-A"+corridaRegeso.EmpresaCorrida+",-A,-A,-A,-A,-A,-A"+consecutivo+",-A"+w+",-A,-A,-A,-A,-A"+corridaIda.EmpresaCorrida+",-A"+corridaIda.CadenaCorridaTKN+",-A"+corridaIda.CadenaFechaTKN+",-A"+corridaIda.CadenaHoraTKN+",-A"+corridaIda.CadenaVersionTKN+",-A"+corridaIda.CadenaPuntoInicialTKN+",-A"+corridaIda.CadenaPuntoFinalTKN+",-A"+corridaIda.ClaveServicio+",-A"+corridaIda.Viaje+",-A"+corridaRegeso.EmpresaCorrida+",-A"+corridaRegeso.CadenaCorridaTKN+",-A"+corridaRegeso.CadenaFechaTKN+",-A"+corridaRegeso.CadenaHoraTKN+",-A"+corridaRegeso.CadenaVersionTKN+",-A"+corridaRegeso.CadenaPuntoInicialTKN+",-A"+corridaRegeso.CadenaPuntoFinalTKN+",-A"+corridaRegeso.ClaveServicio+",-A"+corridaRegeso.Viaje+",-A2";
	http.open("GET",url,true);
	if(viinco == 'NO')	document.getElementById("area2").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	else	document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	http.onreadystatechange  = function(){

		if(http.readyState == 4 && http.status == 200) {
			var json_data = http.responseText;
			try{
				object_diagramaR = eval(json_data);
				if(object_diagramaR.Error)
							document.getElementById("area").innerHTML = generaError(object_diagramaR.Error);
				else{
					generaAsientos(object_diagramaR,'Regreso');
					if (dir!='ida2'){
						if(inmige==0){
							iniTimeDown(inmias,paso);
						}
					}
					puntoactual(5,'CE');
					datos(d,x);
					$("#banner").html = banner(b);
					$("#banner2").html('');
				}
			}catch(e){
				document.getElementById("area").innerHTML =http.responseText;
			}
		}
	}
	http.send(null);
}

function resumen(){
	document.title =msj.TituloResumen;
	var c;
	var r;
	var p;
	var d;
	var b;
	var x = paso;
//	var tPago;

	termina();
	//document.getElementById("counter").innerHTML = '';
	if(viinas == 'NO' && redondo == 'SI') {
		 document.getElementById("area2").innerHTML="";
		 document.getElementById("area2").style.display="none";}
	var url = "/netScripts/Request.aspx?APPNAME=navegante4&PRGNAME=MergeConfirmacionVR&ARGUMENTS=-A"+ asiento.V_NumeroPasajeros+",-A"+(NombrePas.join(";"))+",-A"+ (A_AsientosPasajeros.join(";"))+",-A"+(tipoPas.join(";"))+",-A"+ (tipoPasInt.join(";"));
	if(redondo == 'SI')url +=",-A"+ (A_AsientosPasajerosRegreso.join(";")) +",-A"+consecutivo;
			else  url += ",-A,-A"+consecutivo;

	url += ",-A" + (ANacionalidad.join(";")) + ",-A" + (AFechaNacimiento.join(";")) + ",-A"+(AGenero.join(";"))+",-A"+(ADocumento.join(";"))+",-A"+(ANumDocumento.join(";"))+",-A"+(AFechaVencimiento.join(";"))+",-A"+(AResidencia.join(";"));http = CreateRequest();
	http.open("GET",url,true);
	document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	ocultamiestrab(false);
	http.onreadystatechange  = function(){
		if(http.readyState == 4 && http.status == 200) {
		var json_data = http.responseText;
			try{
				object_resumen = eval(json_data);
				if(object_resumen.Error)
					document.getElementById("area").innerHTML = generaError(object_resumen.Error);
				else{
					generaResumen();
					if(inmige==0){
						iniTimeDown(inmico,paso);
					}
					tiempoinicial = new Date().getTime()/1000;
					puntoactual(5,'CE');
					datos(d,x);
					$('#clock').FlipClock(inmico, {
						clockFace: "MinuteCounter",
						countdown: true
						});
					$("a.iframe").fancybox({
						'width' : '80%',
						'height' : '80%',
						'autoScale' : false,
						'transitionIn'	:	'elastic',
						'transitionOut'	:	'elastic',
						'speedIn'		:	600,
						'speedOut'		:	200,
						'overlayShow'	:	false
					});
				}
			}
			catch(e){
				alert(e);
				document.getElementById("area").innerHTML =http.responseText;
			}
//////////////////////////7
		}
	}
	http.send(null);
	}

	/*		TODITO CASH HGAYTAN	 26/02/2014 	*/
// hgaytan
	function todito(a){
	document.title ="Pago con Tarjeta Todito";
	termina();
	personalizat = false;
	// ahernandez - 12 08 2013 - funciones de Google Analytics
	if (sesion == 0)
	{
		_gaq.push(['_trackEvent', 'botonPAGAR', 'botonPAGAR']);
	}
	document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	ocultamiestrab(false);
	document.getElementById("area").innerHTML = "";
		generaTodito(a); // generael form para recibir datos de la tarjeta
		if(inmige==0 && pago == 'TB')
		{
			iniTimeDown(inmiba,paso);
		}
	puntoactual(7,'CE');
	}
	//hgaytan 05 03 2014
function validacionesTodito(a)
{
	var tarjeta = document.getElementById('ntarjeta').value;
	var num = document.getElementById('nclave').value;
	var faltaDato = "";
	if(tarjeta == "")
			faltaDato = "Falta el número de la tarjeta. \n";
	if(num == "")
			faltaDato += "\tFalta el NIP.";
	if(faltaDato == "") {
		toditoPago(tarjeta, num,a);		}
	else
		alert('Error: ' +faltaDato);
		paso = 7;
}
// hgaytan
	function toditoPago(tarjeta, num,a){
	document.title = "Pago con Tarjeta Todito";
	termina();
	personalizat = false;
	http = CreateRequest();
	if(a==1){
	var url = "/netScripts/Request.aspx?APPNAME=navegante4&PRGNAME=MergeGuardaNVR&ARGUMENTS=-A"+consecutivo+",-Atodito,-A"+tarjeta+",-A"+num;

	/* ahernandez - 12 08 2013 - funciones de Google Analytics */
	if (sesion == 0)
	{
		_gaq.push(['_trackEvent', 'botonPAGAR', 'botonPAGAR']);
	}
	/***/
	//		document.getElementById("area").innerHTML = http.responseText; medio funciona hgaytan 11-03

	http.open("GET",url,true);
	document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	ocultamiestrab(false);
	document.getElementById("continuar").innerHTML = "";

	http.onreadystatechange = function(){
		if(http.readyState == 4 && http.status == 200) {
			//document.getElementById('content').innerHTML = http.responseText;
			try{
				var arr = http.responseText;
				arr = arr.replace("var","");
				arr = arr.replace("dato","");
				arr = arr.replace(/=/g,"");
			 	var dato = eval ("(" + arr  + ")");

				if(dato.Error){
					document.getElementById("area").innerHTML = generaError(dato.Error);}
				else{
					RespuestaGuardado(dato);}
			}catch(e){
				alert(e);
				document.getElementById("area").innerHTML =http.responseText;
			}
		}
	}
	http.send(null);
	}
	if(a==2)
	{
		var url = "/netScripts/Request.aspx?APPNAME=navegante7&PRGNAME=MergeGuardaNVRAbierto&ARGUMENTS=-A"+oficinaori.replace(/,/g, "")+",-A"+oficinareg.replace(/,/g, "")+",-A"+tipoPasExtAbie.join(";")+",-A"+NombrePas.join(";")+",-A"+V_NumeroPasajeros+",-A,-A,-A"+claveSer+",-A"+direccion.value+",-A"+ciudad.value+",-A"+codigoPostal.value+",-A"+select.value+",-A"+telefono.value+",-A"+correo.value+",-A"+pago+",-A,-A,-A,-A,-A"+consecutivo+",-A"+estado+",-A"+esint+",-A"+opeint+",-A"+mint+",-Atodito,-A"+tarjeta+",-A"+num;
	http.open("GET",url,true);
	document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	ocultamiestrab(false);
	http.onreadystatechange = function(){
		if(http.readyState == 4 && http.status == 200) {

			document.getElementById("area").innerHTML = "";
			if(pago!='TB' && sesion>0){
				eval(http.responseText);
				if(dato.Error)generaError(dato.Error);
				else RespuestaGuardado(dato);
			}else{
				if(http.responseText.substr(0,6) =="../vpc"){
				     if(inmige==0 && pago == 'TB'){
						iniTimeDown(inmiba,paso);
						$('body').append('<div id="contador" style:"#div #contador {background: url("../imagenes/contador.jpg") repeat scroll 0 0 #F8CC00; color: #005191; font-size: 24px; left: 100%; margin: -6px 0 0 -370px; position: fixed; text-align: center; top: 10px;}"><font>Tiempo restante</font><br>00:00<br><font>Para completar este paso.</font></div>');



						}
					$('<iframe />', {name: 'frame', id:'frame',src: http.responseText,width:"100%",height:"500px"}).appendTo('#area');
					document.getElementById("nav").innerHTML = puntoactual(7,'AB');

				}else{
					eval(http.responseText);
					document.getElementById("area").innerHTML = generaError(dato.Error);
				}
			}
		}
	}
	http.send(null);
	}
	}

	/*		FIN TODITO CASH HGAYTAN	*/
	/*	jmoreno tarjeta amigo */
	function amigo(a){
	document.title ="Pago con Tarjeta amiga";
	termina();
	personalizat = false;
	// ahernandez - 12 08 2013 - funciones de Google Analytics
	if (sesion == 0)
	{
		_gaq.push(['_trackEvent', 'botonPAGAR', 'botonPAGAR']);
	}
	document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	ocultamiestrab(false);
	document.getElementById("area").innerHTML = "";
		generaAmigo(a);
		if(inmige==0 && pago == 'TB')
		{
			iniTimeDown(inmiba,paso);
		}
	puntoactual(7,'CE');
	}

	function validacionesAmigo(a)
{
	var tarjeta = document.getElementById('ntarjeta').value;
	var codigo = document.getElementById('ncodigo').value;
	var mes = document.getElementById('nmes').value;
	var ano = document.getElementById('nano').value;
	var faltaDato = "";
	if(tarjeta == "")
			faltaDato = "Falta el número de la tarjeta. \n";
	if(codigo == "")
			faltaDato = "Falta el código de seguridad. \n";
	if(mes == "")
			faltaDato = "Falta el mes. \n";
	if(ano == "")
			faltaDato = "Falta el año. \n";
	if(faltaDato == "") {
		tarjetaAmigo(tarjeta,a,codigo,mes,ano);
		}
	else
		alert('Error: ' +faltaDato);
		paso = 7;
}
	function tarjetaAmigo(tarjeta,a,codigo,mes,ano){
	document.title = "Pago con Tarjeta amiga";
	termina();
	personalizat = false;
	http = CreateRequest();
	if(a==1){
	var url = "/netScripts/Request.aspx?APPNAME=navegante4&PRGNAME=MergeGuardaNVR&ARGUMENTS=-A"+consecutivo+",-Aamigo,-A"+tarjeta+",-A"+codigo+",-A"+mes+",-A"+ano;


	/* ahernandez - 12 08 2013 - funciones de Google Analytics */
	if (sesion == 0)
	{
		_gaq.push(['_trackEvent', 'botonPAGAR', 'botonPAGAR']);
	}
	/***/
	//		document.getElementById("area").innerHTML = http.responseText; medio funciona hgaytan 11-03

	http.open("GET",url,true);
	document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	ocultamiestrab(false);
	document.getElementById("continuar").innerHTML = "";

	http.onreadystatechange = function(){
		if(http.readyState == 4 && http.status == 200) {
			//document.getElementById('content').innerHTML = http.responseText;
			try{
				var arr = http.responseText;
				arr = arr.replace("var","");
				arr = arr.replace("dato","");
				arr = arr.replace(/=/g,"");
			 	var dato = eval ("(" + arr  + ")");

				if(dato.Error){
					document.getElementById("area").innerHTML = generaError(dato.Error);}
				else{
					RespuestaGuardado(dato);}
			}catch(e){
				alert(e);
				document.getElementById("area").innerHTML =http.responseText;
			}
		}
	}
	http.send(null);
	}
	if(a==2)
	{
	var url = "/netScripts/Request.aspx?APPNAME=navegante7&PRGNAME=MergeGuardaNVRAbierto&ARGUMENTS=-A"+oficinaori.replace(/,/g, "")+",-A"+oficinareg.replace(/,/g, "")+",-A"+tipoPasExtAbie.join(";")+",-A"+NombrePas.join(";")+",-A"+V_NumeroPasajeros+",-A,-A,-A"+claveSer+",-A"+direccion.value+",-A"+ciudad.value+",-A"+codigoPostal.value+",-A"+select.value+",-A"+telefono.value+",-A"+correo.value+",-A"+pago+",-A,-A,-A,-A,-A"+consecutivo+",-A"+estado+",-A"+esint+",-A"+opeint+",-A"+mint+",-Atodito,-A"+tarjeta+",-A"+num;
	http.open("GET",url,true);
	document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	ocultamiestrab(false);
	http.onreadystatechange = function(){
		if(http.readyState == 4 && http.status == 200) {

			document.getElementById("area").innerHTML = "";
			if(pago!='TB' && sesion>0){
				eval(http.responseText);
				if(dato.Error)generaError(dato.Error);
				else RespuestaGuardado(dato);
			}else{
				if(http.responseText.substr(0,6) =="../vpc"){
				     if(inmige==0 && pago == 'TB'){
						iniTimeDown(inmiba,paso);
						$('body').append('<div id="contador" style:"#div #contador {background: url("../imagenes/contador.jpg") repeat scroll 0 0 #F8CC00; color: #005191; font-size: 24px; left: 100%; margin: -6px 0 0 -370px; position: fixed; text-align: center; top: 10px;}"><font>Tiempo restante</font><br>00:00<br><font>Para completar este paso.</font></div>');



						}
					$('<iframe />', {name: 'frame', id:'frame',src: http.responseText,width:"100%",height:"500px"}).appendTo('#area');

					document.getElementById("nav").innerHTML = puntoactual(7,'AB');

				}else{
					eval(http.responseText);
					document.getElementById("area").innerHTML = generaError(dato.Error);
				}
			}
		}
	}
	http.send(null);
	}
	}


	/* acaba jmoreno tarjeta amigo */

function guarda(){
	termina();
	personalizat = false;
	http = CreateRequest();
	var url = "/netScripts/Request.aspx?APPNAME=navegante4&PRGNAME=MergeGuardaNVR&ARGUMENTS=-A"+consecutivo+",-A" + pago + ",-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A"+idioma;
	/***/
	/* ahernandez - 12 08 2013 - funciones de Google Analytics */
	if (sesion == 0)
	{
		_gaq.push(['_trackEvent', 'botonPAGAR', 'botonPAGAR']);
	}
	/***/


	http.open("GET",url,true);
	var imagenLoading;
	imagenLoading = "<center>";
	if(pago != 'TB'  &&  sesion == 0)
		imagenLoading += "<br /><p class='color5'>Una vez finalizada la reservaci&oacute;n usted cuenta con 3 horas para realizar el pago en alguno de los siguientes establecimientos:</p>";
	imagenLoading += "<img src='../imagenes/";
	if(pago != 'TB'  &&  sesion == 0)
		imagenLoading += "datalogicloading.png";
	else
		imagenLoading += "loading.gif";
	imagenLoading += "' align='center' /></center> <br />";
	document.getElementById("area").innerHTML = imagenLoading;


	ocultamiestrab(false);
	document.getElementById("continuar").innerHTML = "";
	http.onreadystatechange = function(){
		if(http.readyState == 4 && http.status == 200) {
			document.getElementById("area").innerHTML = "";
			$('#continuar').html('');
			$('#continuar').hide();

			//if(pago != 'TB'   &&   sesion > 0){
			if(pago != 'TB'){
				try{
				eval(http.responseText);
				if(dato.Error)
					document.getElementById("area").innerHTML = generaError(dato.Error);
				else {
					RespuestaGuardado(dato);
				}
				}
				catch(e){
					alert(e);
					document.getElementById("area").innerHTML =http.responseText;
				}
			}
			else
			{
				if(http.responseText.substr(0,6) == "../vpc")
				{
					$('<iframe />', {name: 'frame', id:'frame',src: http.responseText,width:"100%",height:"500px"}).appendTo('#area');
					if(inmige==0 && pago == 'TB'){
						iniTimeDown(inmiba,paso);
					}
					puntoactual(7,'CE');
				}
				else{
					eval(http.responseText);
					document.getElementById("area").innerHTML = generaError(dato.Error);
				}
			}
		}
	}
	http.send(null);
 }
function autoRelleno(){
	pasajeros = $("[name='pasajero']");
	for (x=1;x<pasajeros.length;x++){
		pasajeros[x].value=pasajeros[0].value;
		//alert(pasajeros[x].value);
	 }
}
function soloLetrasOk(cadena,muestra) {
	var patron = /^([a-z ñáéíóú]{1,100})$/i;
    var soloLetrasOk = patron.test(cadena);
    if (!soloLetrasOk) {
        alert (""+msj.ElCampo+" "+muestra+" "+msj.NoDebeContenerNum);
        return false;
    }
	return true;
}
function soloNumerosOk(cadena,muestra) {
    var patron = /^\d+$/;
    var    soloNumerosOk = patron.test(cadena);
    if ( !soloNumerosOk ) {
        alert (""+msj.ElCampo+" "+muestra+" "+msj.DebeContenerSoloNum);
        return false;
    }
	return true;
}
function emailOk(cadena,muestra) {
    var patron = /^[A-Za-z\d\-\_\.+]+\@[A-Za-z\d\-\_+]+\.[A-Za-z\d\-\_\.+]+$/;
    var emailOk = patron.test(cadena,muestra);
    if (!emailOk) {
        alert (""+msj.ElCampo+" "+muestra+" "+msj.NoTieneFormatoCorreo);
        return false;
     }
	 return true;
}
function validarDatosGenerales(){
 $("#formDatosGenerales").validate({
            submitHandler: function(form) { //Se intercepta la accion submit del formulario

                //Obtener valor de captcha
                var codigo =$("#codigo").val();

                //Obtener pasajeros
                var pasajeros = escape(obtenerPasajeros());

                //console.log("Cadena pasajeros: "+pasajeros);

                //Obtener diagrama y numero de filas
                arregloDiagrama = obtenerDiagrama();
                var diagrama = arregloDiagrama[0];
                var filas = arregloDiagrama[1];

                //Cargar paso 3
                $('#paso3').load('contenido-parhikuni/asientos.php?codigo='+codigo+'&diagrama='+diagrama+'&filas='+filas+'&pasajeros='+pasajeros);
                activarTab(3);
            },
            rules: {
				domicilio:{
					required: true,
					required: true
                },
                ciudad:{
                    required: true,
					required: true
                },
                codigoPostal:{
                    required: true,
                    digits: true
                },
                select:{
                    required: true,
					required: true
                },
                email:{
                    required: true,
                    email: true
                },
                telefono:{
                    required: true,
					digits: true
                },
                checkbox:{
                    required: true,
					required: true
                },
                codigo:{
                    required: true,
					required: true
                }
            },
            messages: {
                domicilio: {
                    required: "<br>Requerido",
					required: "<br>Requerido"
                },
                ciudad:{
                    required: "<br>Requerido",
					required: "<br>Requerido"
                },
                codigoPostal:{
                    required: "<br>Requerido",
                    digits: "<br>Introducir solo n&uacute;meros"
                },
                select:{
                    required: "<br>Requerido",
					required: "<br>Requerido"
                },
                email:{
                    required: "<br>Requerido",
                    email: "<br>Introducir correo electr&oacute;nico v&aacute;lido"
                },
                telefono:{
                    required: "<br>Requerido",
					digits: "<br>Introducir solo n&uacute;meros"
                },
                checkbox:{
					required: "<br>Requerido",
                    required: "<br>Es necesario aceptar términos y condiciones"
                },
                codigo:{
                    required: "<br>Requerido"
                }
            }
        });
}
function validacionesPersozaliza(){
	var muestra;
	var pasajero;
	var domicilio;
	//valida Datos Pasajero
	//validacoma(domicilio.value, domicilio);
	if(pago == 'TB'){

	//Terminos y condiciones
	/*
	var checkbox = $('input[name=checkbox]').attr('checked');
	//var checkbox = true // Noreste no lleva terminos y condiciones en personaliza
	if (checkbox){}
	else{
		alert(""+msj.ParaContinuarAceptTermCond);
		return false;
	}
	*/

	//valida captcha
	if ( jcap() != true  ){
			if(typeof ponError == 'function')
			ponError("uword");
		return false;
	}
			pasajero = $("[name='pasajero']")[0];
			if(pasajero.value == ""){
				if(typeof ponError == 'function')
				ponError("pasajero");
			alert(""+msj.FaltaNombrePasajero);
				return false;
		}
		else{
			if(soloLetrasOk(pasajero.value,txt.RSNombre)!= true)
				return false;
		}
		//DIRECCION
		 domicilio = $("[name='domicilio']")[0];
		if(domicilio.value == ""){
				if(typeof ponError == 'function')
				ponError("domicilio");
			alert(""+msj.FaltaDomicilio);
			return false;
		}

		//Ciudad
		  ciudad = $("[name='ciudad']")[0];
		if(ciudad.value == ""){
				if(typeof ponError == 'function')
				ponError("ciudad");
			alert(""+msj.FaltaCapturarCiudad);
			return false;
		}
		else{
			if(soloLetrasOk(ciudad.value,txt.Ciudad)!= true)
				return false;
		}
		//CodigoPostal
		 codigoPostal = $("[name='codigoPostal']")[0];
		if(codigoPostal.value == ""  || codigoPostal.value.length > 10  ){
				if(typeof ponError == 'function')
				ponError("codigoPostal");
			alert(""+msj.ErrorenCodPos);
			return false;
		}
		else{
			if(soloNumerosOk(codigoPostal.value,txt.CodigoPostal)!= true)
				return false;
		}
		//Pais
		select = $("[name='select']")[0];
		if(select.value == ""){
				if(typeof ponError == 'function')
				ponError("select");
			alert(""+msj.FaltaElegirPais);
			return false;
		}
		else{
			if(soloLetrasOk(select.value,msj.Pais)!= true)
				return false;
		}
		/*//Estado
		  estado = $("[name='estado']")[0];
		if(estado.value == ""  || estado.value.length > 20  ){
				if(typeof ponError == 'function')
				ponError("estado");
			alert("Falta capturar el estado");
			return false;
		}
		else{
			if(soloLetrasOk(estado.value,'')!= true)
				return false;
		}
		//estado =	$("#estado").val(); */

		//Telefono
		 telefono = $("[name='telefono']")[0];
		if(telefono.value == ""  || telefono.value.length > 50  ){
				if(typeof ponError == 'function')
				ponError("telefono");
			alert(""+msj.ErrorenTelef);
			return false;
		}
		else{
			if(soloNumerosOk(telefono.value,txt.telef)!= true)
				return false;
		}
		//Email
		 correo = $("[name='email']")[0];

		if(correo.value == ""  || correo.value.length > 100  ){
				if(typeof ponError == 'function')
				ponError("email");
			alert(""+msj.ErrorenEmail);
			return false;
		}
		else{
			if(emailOk(correo.value,txt.CorreoElectronico)!= true)
				return false;
		}

	}
	else{
		direccion = '';
		ciudad= '';
		codigoPostal= '';
		select= '';
		telefono= '';
		correo= '';
		estado= '';
	}

	//valida pasajeros
	pasajeros = $("[name='pasajero']");
	for (x=0;x<pasajeros.length;x++){
		if(pasajeros[x].value == "" ){
				alert(""+msj.FaltaCaptNomPasajero+" "+(x+1));

			return false;
		}
		else{
			var numPasajero=0;
			numPasajero=x+1;
			if(soloLetrasOk(pasajeros[x].value,"Pasajero "+numPasajero+"")!= true)
				return false;
				else NombrePas[x]=pasajeros[x].value;
		}
	}


	//Valida si se modificaron los tipos de pasajeros
	if($("#adultos").val()){
	if(adulto != parseInt($("#adultos").val()) || insen != parseInt($("#inapam").val()) || menor != parseInt($("#ninos").val()) || estudiantes != parseInt($("#estudiantes").val()) || maestros != parseInt($("#maestros").val()) || cambiopasajeros=='SI'){
	cambiopasajeros='SI';
	var cadpasajero = new Array();
	var NombrePasInd = new Array();
	var ad,is,ni,es,ma;
	adulto = parseInt($("#adultos").val());
	insen = parseInt($("#inapam").val());
	menor = parseInt($("#ninos").val());
	estudiantes = parseInt($("#estudiantes").val());
	maestros = parseInt($("#maestros").val());
	var pasajerost= adulto+insen+menor+estudiantes+maestros;
	ad = pasajerost-insen-menor-estudiantes-maestros;
	is = pasajerost-menor-estudiantes-maestros;
	ni = pasajerost-estudiantes-maestros;
	es = pasajerost-maestros;
	ma = pasajerost;
	//Se valida el cambio de pasajeros
	quitaError("adultos");
	quitaError("ninos");
	if (pasajerost >10 & pasajerost != 0)
	{
		alert("No se puede hacer una compra de mas de 10 pasajeros");
		ponError("adultos");
		return false;
	}
	if (parseInt($("#ninos").val()) != 0)
	{
      if ((parseInt($("#adultos").val())+parseInt($("#inapam").val())+parseInt($("#estudiantes").val())+parseInt($("#maestros").val()))==0)
		{
			alert("No puede viajar un menor solo, tiene que ir con un acompañante que no sea menor");
			ponError("ninos");
			return false;
		}
	}
	if (pasajerost == 0)
	{
		alert("Debe seleccionar el tipo de pasajero");
		ponError("adultos");
		return false;
	}
	/////////////////////////////////////////////
		for(var cont=1;cont<=pasajerost;cont++){
		if (adulto>0 && cont <= ad){
			tipo = 'ADULTO';
			tipoAbre = object_personaliza.Adul;
			tipop = 'AD';}
		else if (insen>0 && cont <= is)	{
			tipo = 'INSEN';
			tipoAbre = object_personaliza.Ins;
			tipop = 'IN';}
		else if (menor>0 && cont <= ni)	{
			tipo = 'MENOR';
			tipoAbre = object_personaliza.Nin;
			tipop = 'NI';}
		else if (estudiantes>0 && cont <= es){
			tipo = 'ESTUDIANTE';
			tipoAbre = object_personaliza.Est;
			tipop = 'ES';}
		else if (maestros>0 && cont <= ma){
			tipo = 'MAESTRO';
			tipoAbre = object_personaliza.Mae;
			tipop = 'MA';}
		tipoPas[cont-1] = tipo;
		tipoPasInt[cont-1] = tipoAbre;
		tipoPasExtAbie[cont-1] =tipop;
		}
		var x=0;
		if(adulto>0) { cadpasajero[x]= object_personaliza.Adul+cerosizquierda(adulto); x++; }
		if(insen>0) { cadpasajero[x]= object_personaliza.Ins+cerosizquierda(insen); x++; }
		if(menor>0) { cadpasajero[x]= object_personaliza.Nin+cerosizquierda(menor); x++; }
		if(estudiantes>0) { cadpasajero[x]= object_personaliza.Est+cerosizquierda(estudiantes); x++; }
		if(maestros>0)  cadpasajero[x]= object_personaliza.Mae+cerosizquierda(maestros);

		NombrePasInd[0]=$("#pasajero").val();
		actualizapasajerosSUC(NombrePasInd,cadpasajero);
		if(pasajerosdisp == 'SI')
					return true;
			else
				return false;
	}
	}
//sino trono en ningun if entonces si pasa al siguiente punto
return true;

}
function validaCorrida(tviaje){

	if(oficinar.search("-")>0)
	{
		if(selopc!='true')
		{
			alert(''+msj.FavorSelecRuta);
			return false;
		}
	}

	if(tviaje=='redondo')
	{
		if(seluno=='true') return 'SI'; else { alert(''+msj.FavorSelecCorrida); return false;}
	}
	if(tviaje=='sencillo')
	{
		if(seluno=='true') return 'SI'; else { alert(''+msj.FavorSelecCorrida); return false;}
	}
	if(tviaje=='redondo2')
	{
		if(seldos=='true'){
			if(!fechaMayorOIgualQue(corridaRegeso.FechaSalidaBoleto, fechallegada))
				{
				alert(""+msj.CorridaRegNoPuedeSerSelec);
					return false;

			}
			else{ if(corridaRegeso.FechaSalidaBoleto==fechallegada)
						{
							var horaida=corridaIda.HoraLlegada.substr(0,2);
							var minida=corridaIda.HoraLlegada.substr(3,5);
							var horareg=corridaRegeso.HoraSalida.substr(0,2);
							var minreg=corridaRegeso.HoraSalida.substr(3,5);
							if(horaida>=horareg && minida>=minreg){
								alert(""+msj.NoPuedeSelecCorridaTraslapeconIda);
								return false;
								}

						}
						return 'SI';}
		}
		else { alert(''+msj.FavorSelecCorrida); return false;}
	}
}
function SeleccionaAsiento(Tipo,Num,mo){
	var cont=0;
	var A='"B"';
	var entra=1;
	if(mo=='B'){
			entra=0;
			aasiento = document.getElementById("textfieldAsi").value.replace(/^\s*|\s*$/g,"");
			if(soloNumerosOk(aasiento)== true){
			nasiento = parseInt(aasiento);
			if(nasiento<=110 && nasiento!=0){
							//if(aasiento.length<=1)
							if(nasiento<10){
								Tipo= document.getElementById("A"+asiento.asientosaseleccion['00'+nasiento]);
								Num=asiento.asientosaseleccion['00'+nasiento];}
								else if(nasiento<100 && nasiento>9){
									Tipo= document.getElementById("A"+asiento.asientosaseleccion['0'+nasiento]);
									Num=asiento.asientosaseleccion['0'+nasiento];}
									else{
										Tipo= document.getElementById("A"+asiento.asientosaseleccion[nasiento]);
										Num=asiento.asientosaseleccion[nasiento];}
						entra=1;
						} else alert("La cantidad introducida no es correcta");
			}  else alert("Solo se aceptan números");

	}
	if(entra==1){
	var srcimagen= document.getElementById(Tipo.id).src;
	asiento.V_NumeroPasajeros=adulto + insen + menor + estudiantes + maestros;
	if(object_diagrama.Asientos[Num].Estados==1) // asiento libre
  {
    if (asiento.V_PasajerosSel<asiento.V_NumeroPasajeros)
    {
            document.getElementById(Tipo.id).src= "../imagenes/Asiento_S.jpg" ;
            A_AsientosPasajeros[asiento.V_PasajeroActual]=object_diagrama.Asientos[Num].Asientos;
            object_diagrama.Asientos[Num].Estados=9;
            asiento.V_PasajerosSel++;

		pasactual=asiento.V_PasajeroActual+1;
		asientoAOcupar=Num+1;
		document.getElementById('asientoseleccionado'+pasactual).innerHTML =''+asientoAOcupar;
    }
  }
  else
  {
    var i=0;
    var V_borrar = -1;

  	do
  	{
		if(object_diagrama.Asientos[Num].Estados==9)
  		{
    	  if (A_AsientosPasajeros[i]==object_diagrama.Asientos[Num].Asientos)
    	  {
          V_borrar = i;
    	  }
    	}
    	  i++;
  	} while(i<asiento.V_NumeroPasajeros && V_borrar==-1);

    if (V_borrar != -1)
    {
      A_AsientosPasajeros[V_borrar]=0;
      document.getElementById(Tipo.id).src= "../imagenes/"+object_diagrama.Asientos[Num].Imagenes;
	  //object_diagrama.Asientos[Num].Imagenes;
      object_diagrama.Asientos[Num].Estados=1;

	  pasactual=V_borrar+1;
	  document.getElementById('asientoseleccionado'+pasactual).innerHTML ='';

	asiento.V_PasajerosSel--;
    }
  }

  i = 0;
  asiento.V_PasajeroActual = -1;
  do
  {
    if (A_AsientosPasajeros[i]==0)
      asiento.V_PasajeroActual = i;

    i++;
  } while (i<asiento.V_NumeroPasajeros && asiento.V_PasajeroActual == -1)


  if (asiento.V_PasajeroActual==-1)
  {
	//document.getElementById('campo_asiento').innerHTML='<label for="textfield"></label>';
  }
  else
  {
	//alert("Pasajero "+(asiento.V_PasajeroActual+1)+": "+A_NombresPasajeros[asiento.V_PasajeroActual]+"("+A_TiposPasajeros[asiento.V_PasajeroActual]+") restantes: "+(asiento.V_NumeroPasajeros-asiento.V_PasajerosSel));
	//document.getElementById('campo_asiento').innerHTML='<span class="color1" id="pasajeroN">'+txt.Pasajero+' 1</span> <span  class="color2 conFlecha" id="nombrePasajero">' + pasajeros[0].value + '</span> <span  class="color3" id="tipoPasajero">' + tipoPas[0] + '</span> <span  class="color4">ASIENTO</span><label for="textfield"></label><input name="textfield" type="text" id="textfieldAsi" size="3" class="color1" onBlur="return SeleccionaAsiento('+"'B'"+','+"'B'"+','+"'B'"+');" onkeyup ="if(event.keyCode == 32) return SeleccionaAsiento('+"'B'"+','+"'B'"+','+"'B'"+');" />';
	document.getElementById('pasajeroN').innerHTML =txt.Pasajero+' '+(asiento.V_PasajeroActual+1) ;
	document.getElementById('nombrePasajero').innerHTML = pasajeros[asiento.V_PasajeroActual].value;
	document.getElementById('tipoPasajero').innerHTML =tipoPas[asiento.V_PasajeroActual];
  }
 }

}
function SeleccionaAsientoR(Tipo,Num,mo){
	var cont=0;
	var A='"B"';
	var entra=1;
	if(mo=='B'){
			entra=0;
			aasiento = document.getElementById("textfieldAsiR").value.replace(/^\s*|\s*$/g,"");
			if(soloNumerosOk(aasiento)== true){
			nasiento = parseInt(aasiento);
					if(nasiento<=110 && nasiento!=0){
						if(nasiento<10){
								if(viinco == 'NO') Tipo= document.getElementById("A"+(100+asientoR.asientosaseleccion['00'+nasiento]));
								else Tipo= document.getElementById("A"+asientoR.asientosaseleccion['00'+nasiento]);
								Num=asientoR.asientosaseleccion['00'+nasiento];}
									else if(nasiento<100 && nasiento>9){
										if(viinco == 'NO') Tipo= document.getElementById("A"+(100+asientoR.asientosaseleccion['0'+nasiento]));
										else Tipo= document.getElementById("A"+asientoR.asientosaseleccion['0'+nasiento]);
										Num=asientoR.asientosaseleccion['0'+nasiento];}
										else{
											if(viinco == 'NO') Tipo= document.getElementById("A"+(100+asientoR.asientosaseleccion[nasiento]));
											else Tipo= document.getElementById("A"+asientoR.asientosaseleccion[nasiento]);
											Num=asientoR.asientosaseleccion[nasiento];}
						entra=1;
						} else alert("La cantidad introducida no es correcta");
			}  else alert("Solo se aceptan números");

	}
	if(entra==1){
	var srcimagen= document.getElementById(Tipo.id).src;
	asientoR.V_NumeroPasajeros=adulto + insen + menor + estudiantes + maestros;
	if(object_diagramaR.Asientos[Num].Estados==1) // asiento libre
  {
    if (asientoR.V_PasajerosSel<asientoR.V_NumeroPasajeros)
    {
            document.getElementById(Tipo.id).src= "../imagenes/Asiento_S.jpg"  ;
            A_AsientosPasajerosRegreso[asientoR.V_PasajeroActual]=object_diagramaR.Asientos[Num].Asientos;
            object_diagramaR.Asientos[Num].Estados=9;
            asientoR.V_PasajerosSel++;
			pasactual=asientoR.V_PasajeroActual+1;
			asientoAOcupar=Num+1;
			document.getElementById('asientoseleccionadoR'+pasactual).innerHTML =''+asientoAOcupar;
    }
  }
  else
  {
    var i=0;
    var V_borrar = -1;

  	do
  	{

		if(object_diagramaR.Asientos[Num].Estados==9)
  		{
    	  if (A_AsientosPasajerosRegreso[i]==object_diagramaR.Asientos[Num].Asientos)
    	  {
          V_borrar = i;
    	  }
    	}
    	  i++;
  	} while(i<asientoR.V_NumeroPasajeros && V_borrar==-1);

    if (V_borrar != -1)
    {
      A_AsientosPasajerosRegreso[V_borrar]=0;
      document.getElementById(Tipo.id).src= "../imagenes/"+object_diagramaR.Asientos[Num].Imagenes;
      object_diagramaR.Asientos[Num].Estados=1;

	    pasactual=V_borrar+1;
	  pasactual=V_borrar+1;
	  document.getElementById('asientoseleccionadoR'+pasactual).innerHTML ='';

      asientoR.V_PasajerosSel--;
    }
  }

  i = 0;
  asientoR.V_PasajeroActual = -1;
  do
  {
    if (A_AsientosPasajerosRegreso[i]==0)
      asientoR.V_PasajeroActual = i;

    i++;
  } while (i<asientoR.V_NumeroPasajeros && asientoR.V_PasajeroActual == -1)


  if (asientoR.V_PasajeroActual==-1)
  {
   document.getElementById('campo_asientoR').innerHTML='<label for="textfield"></label>';
  }
  else
  {
	//alert("Pasajero "+(asientoR.V_PasajeroActual+1)+": "+A_NombresPasajeros[asientoR.V_PasajeroActual]+"("+A_TiposPasajeros[asientoR.V_PasajeroActual]+") restantes: "+(asientoR.V_NumeroPasajeros-asientoR.V_PasajerosSel));
	document.getElementById('campo_asientoR').innerHTML='<span class="color1" id="pasajeroNR">Pasajero 1</span> <span  class="color2 conFlecha" id="nombrePasajeroR">' + pasajeros[0].value + '</span> <span  class="color3" id="tipoPasajeroR">' + tipoPas[0] + '</span> <span  class="color4">ASIENTO</span><label for="textfield"></label><input name="textfieldR" type="text" id="textfieldAsiR" size="3" class="color1" onBlur="return SeleccionaAsientoR('+"'B'"+','+"'B'"+','+"'B'"+');" onkeyup ="if(event.keyCode == 32) return SeleccionaAsientoR('+"'B'"+','+"'B'"+','+"'B'"+');" />';
	document.getElementById('pasajeroNR').innerHTML ='Pasajero '+(asientoR.V_PasajeroActual+1) ;
	document.getElementById('nombrePasajeroR').innerHTML = pasajeros[asientoR.V_PasajeroActual].value;
	document.getElementById('tipoPasajeroR').innerHTML =tipoPas[asientoR.V_PasajeroActual];
  }
 }
}
function generacadenaasientos(){
var a=0;
var npasajeros=adulto + insen + menor + estudiantes + maestros;
do
	{
	if(a<npasajeros){
		A_AsientosPasajeros[a]='00';
		if(redondo == 'SI') A_AsientosPasajerosRegreso[a]='00';}
	if(a==npasajeros){
		A_AsientosPasajeros[a]=' ';
		if(redondo == 'SI') A_AsientosPasajerosRegreso[a]=' ';
		a=200; }
		a++;

	}
while(a<200);
}
function limpiaCadenaAsientosRegreso(){
var a=0;
var npasajeros=adulto + insen + menor + estudiantes + maestros;
do
	{
	if(a<npasajeros){
		A_AsientosPasajerosRegreso[a]='00';}
	if(a==npasajeros){
		A_AsientosPasajerosRegreso[a]=' ';
		a=200; }
		a++;

	}
while(a<200);
}

function TipoPago(pagoCheck){

	if (pagoCheck == 1){
		document.getElementById('domicilio').disabled = true;
		document.getElementById('ciudad').disabled = true;
		document.getElementById('codigoPostal').disabled = true;
		document.getElementById('select').disabled = true;
		document.getElementById('telefono').disabled = true;
		document.getElementById('email').disabled = true;
		//document.getElementById('cel').disabled = true;
		//document.getElementById('estado').disabled = true;
		$("#domicilio").css({'background-color':'#E0E0E0'})
		$("#ciudad").css({'background-color':'#E0E0E0'})
		$("#codigoPostal").css({'background-color':'#E0E0E0'})
		$("#select").css({'background-color':'#E0E0E0'})
		$("#telefono").css({'background-color':'#E0E0E0'})
		$("#email").css({'background-color':'#E0E0E0'})
		//$("#cel").css({'background-color':'#E0E0E0'})
		//$("#estado").css({'background-color':'#E0E0E0'})
		pago = 'EF';
	}
	else if(pagoCheck == 2){
		document.getElementById('domicilio').disabled = false;
		document.getElementById('ciudad').disabled = false;
		document.getElementById('codigoPostal').disabled = false;
		document.getElementById('select').disabled = false;
		document.getElementById('telefono').disabled = false;
		document.getElementById('email').disabled = false;
		//document.getElementById('cel').disabled = false;
		//document.getElementById('estado').disabled = false;
		$("#domicilio").css({'background-color':'#FFFFFF'})
		$("#ciudad").css({'background-color':'#FFFFFF'})
		$("#codigoPostal").css({'background-color':'#FFFFFF'})
		$("#select").css({'background-color':'#FFFFFF'})
		$("#telefono").css({'background-color':'#FFFFFF'})
		$("#email").css({'background-color':'#FFFFFF'})
		//$("#cel").css({'background-color':'#FFFFFF'})
		//$("#estado").css({'background-color':'#FFFFFF'})
		pago = 'TB';
	}
	else alert('tipo de pago invalido');
}
function agenciaFiltro(){
	var sig="'";
	generaNuevaSesion();
	document.title =txt.FiltrosAgencias;
	var c;
	var r;
	var d;
	var x = paso;
	var cadTabla;
	if(viinco == 'NO') document.getElementById("area2").innerHTML="";
	document.getElementById("datos").innerHTML = '';
	document.getElementById("nav").innerHTML = '';
	if(Inbo==0) { esint='NO'; opeint=''; mint=0;}
	//http = CreateRequest();
	var url = "../nueva/vacio.html";
	//http.open("GET",url,true);

	if (ErrorLogin!= ''){
		document.getElementById("area").innerHTML = generaError(ErrorLogin);
		return;
	}
	generaNuevaSesion();
	generaFiltroAgencia();

		//document.getElementById("area").innerHTML = generaFiltroAgencia();
						//document.getElementById('tipoViaje_0').checked="checked";
						//$("#textfield10").datepicker({ showOn: 'button', buttonImageOnly: true, buttonImage: '../imagenes/calendario.png' });
						//$("#textfield7").datepicker({ showOn: 'button', buttonImageOnly: true, buttonImage: '../imagenes/calendario.png' });
						fecha = new Date();



						var  tiempo=fecha.getTime();
						var mili = parseInt(24*60*60*1000);
                        total=fecha.setTime(parseInt(tiempo+mili));
                        dia=fecha.getDate();
                        mes=fecha.getMonth()+1;
                        anio=fecha.getFullYear();

                        // Se realiza el preformato desde aqui, se elimina el bloque de if's
                        // siguiente
                        dia = (dia < 10) ? "0" + dia : dia;
                        mes = (mes < 10) ? "0" + mes : mes;

                        $("#textfield7").val(""+dia+"/"+mes+"/"+anio+"");

						/*
						if 	(mes < 10)
							if (dia > 9){
								$("#textfield7").val(""+dia+"/0"+mes+"/"+anio+"");
								$("#textfield10").val(""+dia+"/0"+mes+"/"+anio+"");
							}



						if	 (dia < 10)		{
							if	 (mes < 10 )	{
								$("#textfield7").val("0"+dia+"/0"+mes+"/"+anio+"");
								$("#textfield10").val("0"+dia+"/0"+mes+"/"+anio+"");
							}
							else	{
								$("#textfield7").val(""+dia+"/"+mes+"/"+anio+"");
								$("#textfield10").val(""+dia+"/"+mes+"/"+anio+"");
							}
						}
						*/

						Viajesencillo();
						$("#banner").html = banner();


	function punto(c){
		c="<ul><li>SALIDA</li><li>REGRESO</li><li class='select'>REGISTRO</li><li>ASIENTOS</li><li>RESUMEN</li><li>PAGO</li><li>CONFIRMACIÓN</li> </ul><div class='clearfix'></div>";
		return(c);
	}
}
function validaConsulta2(){
	var V_FechaSis = new Date();

	var CantidadPas = parseInt($("#Adulto").val());
		CantidadPas += parseInt($("#Nino").val());
		CantidadPas += parseInt($("#Insen").val());
		CantidadPas += parseInt($("#Estudiante").val());
		CantidadPas += parseInt($("#Maestro").val());
quitaError("Nino");
quitaError("tdDestino");
quitaError("Destino_chosen");
quitaError("tdOrigen");
quitaError("Origen_chosen");
quitaError("Adulto");

	if (V_FechaSis.getFullYear() < V_FechaSis.getFullYear())
	{
		alert(""+msj.NoComprasdeMasde10Pasaj);
		return false;
	}
	if (CantidadPas >20 & CantidadPas != 0)
	{
		alert(""+msj.NoComprasdeMasde20Pasaj);
		return false;
	}
	if (parseInt($("#Nino").val()) != 0)
	{
      if ((parseInt($("#Adulto").val())+parseInt($("#Insen").val())+parseInt($("#Estudiante").val())+parseInt($("#Maestro").val()))==0)
		{
			alert(""+msj.NoPuedeViajarMenorSolo);
			ponError("Nino");
			return false;
		}
		var auxnumnino=parseInt($("#Nino").val());
		var auxnumadulto=parseInt($("#Adulto").val())+parseInt($("#Insen").val());
		var auxdivision=auxnumnino/auxnumadulto;
		if(auxdivision>2)
		{
			alert(""+msj.MenorPorAdulto);
			ponError("Nino");
			return false;
		}
	}

	if ($("#tdOrigen").val() == "Seleccione")
	{
		alert(""+msj.NecesitaSelecOrigen);
		ponError("tdOrigen");
		return false;
	}
	if ($("#tdDestino").val() == "Seleccione" )
	{
		alert(""+msj.NecesitaSelecDestino);
		ponError("tdDestino");
		return false;
	}
	if ($("#tdOrigen").val() == $("#tdDestino").val())
	{
		alert(""+msj.ErrorOrigDestIguales);
		return false;
	}

	//cuando esta validando desde abierto se omiten cosas
	if(paso!=11){
		var fechaaa = $("#fsalida").val();
		var fechaab = $("#regreso").val();
		quitaError("regreso");
		quitaError("fsalida");

		// valida que la fecha de viaje no sea menor al día de hoy.
		var x= 'AG';
		if( fechaValida(fechaaa,x) == false )
		{
			alert(""+msj.ElegirFechaValida);
			ponError("fsalida");
			return false;
		}
		if($("#tipoViaje_1").attr('checked'))
		{
			redondo = 'SI';
			viajeredondo = 'V2';
			if(fechaab.substring(6,10) < fechaaa.substring(6,10))
			{
				alert(""+msj.FechaRegNoMenoraFechaSal);
				ponError("regreso");
					return false;
			}
			if(fechaab.substring(6,10) == fechaaa.substring(6,10))
			{
				if(fechaab.substring(3,5) < fechaaa.substring(3,5))
				{
					alert(""+msj.FechaRegNoMenoraFechaSal);
					ponError("regreso");
					return false;
				}
				if(fechaab.substring(3,5) == fechaaa.substring(3,5))
				{
					if (fechaab.substring(0,2) < fechaaa.substring(0,2))
					{
						alert(""+msj.FechaRegNoMenoraFechaSal);
						ponError("regreso");
					return false;
					}
				}
			}
		}
		else
		{
			redondo = 'NO';
			viajeredondo = 'V1';
		}

		if ((parseInt($("#Adulto").val())+parseInt($("#Nino").val())+parseInt($("#Insen").val())+parseInt($("#Estudiante").val())+parseInt($("#Maestro").val()))==0)
		{
			alert(""+msj.DebeSelecTipoPasajeroalMenos);
			ponError("Adulto");
			return false;
		}
		fechasal = fechaaa;
		fechareg = fechaab;

	}
	//cuando esta validando abierto
	else
	{
		if ((parseInt($("#Adulto").val())+parseInt($("#Nino").val())+parseInt($("#Insen").val())+parseInt($("#Estudiante").val())+parseInt($("#Maestro").val()))==0)
		{
			alert(""+msj.DebeSelecTipoPasajeroalMenos);
			ponError("Adulto");
			return false;
		}
		if($("#tipoViaje_1").attr('checked'))
		{
			redondo = 'SI';
			viajeredondo = 'V2'	;
		}
		else
		{
			redondo = 'NO';
			viajeredondo = 'V1';
		}
		claveSer = $("#select3").val();
		for(x=0;x<object_servicio.length;x++)
		{
		if(claveSer==object_servicio[x].claveServicio)
			desSer= object_servicio[x].descripcionSer;

		}


	}

	oficinao = $("#tdOrigen").val();
	oficinar = $("#tdDestino").val();
	oficinaori = $("#tdOrigen option:selected").text();
	oficinareg = $("#tdDestino option:selected").text();
	adulto = parseInt($("#Adulto").val());
	insen = parseInt($("#Insen").val());
	menor = parseInt($("#Nino").val());
	estudiantes = parseInt($("#Estudiante").val());
	maestros = parseInt($("#Maestro").val());

	return true;
}
function fechaMayorOIgualQue(E_fechaIni, E_fecha_Fin){
      var v_lResultado = false;
      var v_aDiaIni = E_fechaIni.substring(0, 2);
      var v_aMesIni = E_fechaIni.substring(3, 5);
      var v_aAnoIni = E_fechaIni.substring(6, 10);
      var v_aDiaFin = E_fecha_Fin.substring(0, 2);
      var sMesFin = E_fecha_Fin.substring(3, 5);
      var v_aAnoFin = E_fecha_Fin.substring(6, 10);

      if (v_aAnoIni > v_aAnoFin)
         v_lResultado = true;
      else
         if (v_aAnoIni == v_aAnoFin)
            if (v_aMesIni > sMesFin)
               v_lResultado = true;
            else
               if (v_aMesIni == sMesFin)
                  if (v_aDiaIni >= v_aDiaFin)
                     v_lResultado = true;
      return v_lResultado;
   }
function abierto(){

	termina();
	generaNuevaSesion();
	if(viinco == 'NO') { document.getElementById("area2").innerHTML="";  document.getElementById("area2").style.display="none";}
	//document.getElementById("datos").innerHTML = '';
	document.getElementById("nav").innerHTML = '';
	personalizat = false;
	//document.getElementById("counter").innerHTML = '';

	var sig="'";
	paso = 10;
	document.title =txt.FiltroAbierto;
	var c,d,b;
	var x = paso;
	if(Inbo==0)
	{ esint='NO'; opeint=''; mint=0;
	}
	var http = CreateRequest();
	var url = "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=filtrosagenciasAbierto&ARGUMENTS=-A"+sesion+",-A"+claus+"";
	http.open("GET",url,true);
	document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	ocultamiestrab(false);
	http.onreadystatechange  = function(){

		if(http.readyState == 4 && http.status == 200) {
			var json_data = http.responseText;
			try{
						object_servicio = eval(json_data);
						//document.getElementById("area").innerHTML = generaFiltroAbierto();
						generaFiltroAbierto();

						document.getElementById('tipoViaje_0').checked="checked";
						//cargaOrigenes();

						if(document.getElementById("banner")!=null) document.getElementById("banner").innerHTML = banner();
			}catch(e){
				alert(e);
				document.getElementById("area").innerHTML =http.responseText;
			}
		}
	}

	http.send(null);

}
function personalizaAbierto(){
	regresar();
	document.title ="Registro de datos boleto abierto";
	var c;
	var r;
	var d='AG';
	var x = paso;
	var cadTabla;
	http = CreateRequest();

	termina();
	//document.getElementById("counter").innerHTML = '';
	var prueba=""+mintprepago;
	var url = "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=PersonalizarAbiertos&ARGUMENTS=-A"+oficinao+",-A"+oficinar+",-A"+adulto+",-A"+insen+",-A"+menor+",-A"+estudiantes+",-A"+maestros+",-A"+viajeredondo+",-A"+sesion+",-A"+claus+",-A,-A,-A,-A"+claveSer+",-A,-A,-A,-A,-A,-A,-A,-A,-A"+consecutivo+",-A"+rutaabierto+",-A"+prueba.trim();
	http.open("GET",url,true);
	document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	ocultamiestrab(false);
	http.onreadystatechange  = function(){

				if(http.readyState == 4 && http.status == 200) {

					var json_data = http.responseText;
					try{
						object_servicio = eval(json_data);
						if(object_servicio.Error)
								if(object_servicio.Error=="ErrorTarifaServicioConectada")
								{
									document.getElementById("area").innerHTML = generaError(txt.Tarifanodisponible);
								}
								else if (object_servicio.Error == "ErrorRegresoConectada") {
								    document.getElementById("area").innerHTML = generaError(msj.NoHayCorridas);

								}
								else{
							document.getElementById("area").innerHTML = generaError(object_servicio.Error);
							}
						else{
							if(object_servicio.CostoTotal=="0" && object_servicio.montoCryp	=="0"){
								document.getElementById("area").innerHTML = generaError(txt.Tarifanodisponible);
								regresar();
								}
							else{
								if(inmige==0){
									iniTimeDown(inmipe,paso);
								}
								generaPersonaliza(object_servicio);
								//document.getElementById("datos").innerHTML = datos(d,x);
								datos();
								if (sesion != 0){
									document.getElementById('pago_0').checked="checked";
									TipoPago(1);
								}

								puntoactual(3,'AB');
								}
							$("a.iframe").fancybox({
								'transitionIn'	:	'elastic',
								'transitionOut'	:	'elastic',
								'speedIn'		:	600,
								'speedOut'		:	200,
								'overlayShow'	:	false
								});
						}
					}
						catch(e){
						alert(e);
						document.getElementById("area").innerHTML =http.responseText;
						alert(e);
					}
		}
	}
	http.send(null);

}
function RutaAbiertof(){
	object_ruta='';
	regresar();
	document.title ="Registro de datos boleto abierto";
	var c;
	var r;
	var d;
	var x = paso;
	var cadTabla;
	http = CreateRequest();
	termina();
	//document.getElementById("counter").innerHTML = '';
	var url = "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=RutasAbierto&ARGUMENTS=-A"+oficinao+",-A"+oficinar+",-A"+adulto+",-A"+insen+",-A"+menor+",-A"+estudiantes+",-A"+maestros+",-A"+viajeredondo+",-A"+sesion+",-A"+claus+",-A,-A,-A,-A"+claveSer+",-A,-A,-A,-A,-A,-A,-A,-A,-A"+consecutivo+",-A0";
	http.open("GET",url,true);
	document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	ocultamiestrab(false);
	http.onreadystatechange  = function(){

				if(http.readyState == 4 && http.status == 200) {
					var json_data = http.responseText;
					try{

						object_ruta = eval(json_data);
						if(object_ruta.Error)
							{
							document.getElementById("area").innerHTML = generaError(object_ruta.Error);
							}
						else{
								document.getElementById("area").innerHTML = generaRutaAbierto(object_ruta);
									ocultamiestrab(true);
								puntoactual(1,'AB');

							$("a.iframe").fancybox({
								'transitionIn'	:	'elastic',
								'transitionOut'	:	'elastic',
								'speedIn'		:	600,
								'speedOut'		:	200,
								'overlayShow'	:	false
								});
						}
					}
					catch(e){
						document.getElementById("area").innerHTML =http.responseText;
						alert(e);
						}
		}
	}
	http.send(null);

}
function confirmarutaabierto(){
	//document.getElementById("regresar").innerHTML = regresar();
	document.title ="Registro de datos boleto abierto";
	var c;
	var r;
	var d;
	var x = paso;
	var cadTabla;
	rutaabierto=0;
	http = CreateRequest();
	termina();

	//document.getElementById("counter").innerHTML = '';

	// ahernandez - 04 12 2013
	var toquenss = new Array;
	toquenss = opeint.split(",");

	// ahernandez - 04 12 2013
	if (
	(esint!='SI')
	||
	(esint=='SI'  &&  numPasInt==(adulto+insen+estudiantes+maestros+menor))
	)
	{
		var url = "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=RutasAbierto&ARGUMENTS=-A"+oficinao+",-A"+oficinar+",-A"+adulto+",-A"+insen+",-A"+menor+",-A"+estudiantes+",-A"+maestros+",-A"+viajeredondo+",-A"+sesion+",-A"+claus+",-A,-A,-A,-A"+claveSer+",-A,-A,-A,-A,-A,-A,-A,-A,-A"+consecutivo+",-A1";
		http.open("GET",url,true);
		document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
		ocultamiestrab(false);
		http.onreadystatechange  = function()
		{

				if(http.readyState == 4 && http.status == 200)
				{
					var json_data = http.responseText;
					try{

						object_ruta = eval(json_data);
						if(object_ruta.Error=='SIR')
							ruta = 'SI';
						if(object_ruta.Error=='NOR')
							ruta = 'NO';
						if(object_ruta.Error!='SIR' && object_ruta.Error!='NOR'){
								document.getElementById("area").innerHTML = generaError(object_ruta.Error);
						}
						else
							{
							puntoactual(1,'AB');

							$("a.iframe").fancybox({
								'transitionIn'	:	'elastic',
								'transitionOut'	:	'elastic',
								'speedIn'		:	600,
								'speedOut'		:	200,
								'overlayShow'	:	false
								});
							}
							$('#continuar').show();
							if(ruta == "SI")
								{
									RutaAbiertof();
								}
							else
								{
									personalizaAbierto();
								}

					}
					catch(e){
						alert(e);
						document.getElementById("area").innerHTML =http.responseText;
						alert(e);
					}
				}
		}
	}
	// ahernandez - 04 12 2013
	else
		if (esint=='SI'  &&  numPasInt!=(adulto+insen+estudiantes+maestros+menor))
		{
			document.getElementById("area").innerHTML = generaError(""+txt.IntercambioError);
		}
		else
		{
			document.getElementById("area").innerHTML = generaError("undefined");
		}

	http.send(null);
}
function validarutaelegida(){
var a='';
var valido= false;
	for(var i=0;i<object_ruta.length;i++)
	{
	a=document.getElementById('rutaele'+i);
		if(a.checked)
		{
			rutaabierto=a.value;
			//alert(rutaabierto);
			return true;
		}
	}
	alert("Debe de seleccionar alguna ruta");
	return false;
}
function resumenAbierto(){
	document.title ="Verifique sus Datos boleto Abierto";
	V_NumeroPasajeros=adulto + insen + menor + estudiantes + maestros;
	var c;
	var r;
	var p;
	var d;
	var b;
	var x = paso;
	var url = "../paginanueva/vacio.html";

	termina();
			//document.getElementById("counter").innerHTML = '';

	http = CreateRequest();
	http.open("GET",url,true);
	document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	ocultamiestrab(false);
	http.onreadystatechange  = function(){

		if(http.readyState == 4 && http.status == 200) {
			if(inmige==0){
					iniTimeDown(inmico,paso);
				}
			if(sesion == 0) document.getElementById("datos").innerHTML = '';
			//document.getElementById("area").innerHTML = generaResumen(2);
			generaResumen(2);
			puntoactual(6,'AB');

								$("a.iframe").fancybox({
						'width' : '80%',
						'height' : '80%',
						'autoScale' : false,
						'transitionIn'	:	'elastic',
						'transitionOut'	:	'elastic',
						'speedIn'		:	600,
						'speedOut'		:	200,
						'overlayShow'	:	false
					});
		}
	}
	http.send(null);

	function pago(p){
		p="<a href='#' onClick='return adelante();'><img src='../imagenes/btn_pagar.jpg' alt='Pagar' width='112' height='25' border='0' id='Image1' onmouseover=\"MM_swapImage('Image1','','../imagenes/btn_pagar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";
		return p;
	}
	}
function guardaAbierto(){
/*
	document.pago.PRGNAME.value = 'MergeGuardaNVRAbierto';
	//document.pago.ARGUMENTS.value = "-A"+oficinao+",-A"+oficinar+",-A"+oficinaori+",-A"+oficinareg+",-A"+tipoPasInt.join(";")+",-A"+NombrePas.join(";")+",-A"+object_servicio.CostoTotal+",-A"+V_NumeroPasajeros+",-A"+viajeredondo+",-A"+sesion+",-A"+claus+",-A,-A,-A"+claveSer+",-A"+direccion.value+",-A"+ciudad.value+",-A"+codigoPostal.value+",-A"+select.value+",-A"+telefono.value+",-A"+correo.value+",-A"+pago+",-A,-A,-A"+object_servicio.montoCryp+",-A"+object_servicio.montoOp+"";
	document.pago.ARGUMENTS.value = "-A"+oficinaori.replace(/,/g, "")+",-A"+oficinareg.replace(/,/g, "")+",-A"+tipoPasExtAbie.join(";")+",-A"+NombrePas.join(";")+",-A"+V_NumeroPasajeros+",-A,-A,-A"+claveSer+",-A"+direccion.value+",-A"+ciudad.value+",-A"+codigoPostal.value+",-A"+select.value+",-A"+telefono.value+",-A"+correo.value+",-A"+pago+",-A,-A,-A,-A,-A"+consecutivo+"";
	document.pago.submit();
	*/
	termina();
	//document.getElementById("counter").innerHTML = '';
	opeint=replaceAll(opeint,",","-");
	http = CreateRequest();
	var url = "/netScripts/Request.aspx?APPNAME=navegante7&PRGNAME=MergeGuardaNVRAbierto&ARGUMENTS=-A"+oficinaori.replace(/,/g, "")+",-A"+oficinareg.replace(/,/g, "")+",-A"+tipoPasExtAbie.join(";")+",-A"+NombrePas.join(";")+",-A"+V_NumeroPasajeros+",-A,-A,-A"+claveSer+",-A"+direccion.value+",-A"+ciudad.value+",-A"+codigoPostal.value+",-A"+select.value+",-A"+telefono.value+",-A"+correo.value+",-A"+pago+",-A,-A"+idioma+",-A,-A,-A"+consecutivo+",-A"+estado+",-A"+esint+",-A"+opeint+",-A"+mint;
	http.open("GET",url,true);
	document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	ocultamiestrab(false);
	http.onreadystatechange = function(){
		if(http.readyState == 4 && http.status == 200) {

			document.getElementById("area").innerHTML = "";
			if(pago!='TB' && sesion>0){
				eval(http.responseText);
				if(dato.Error)generaError(dato.Error);
				else RespuestaGuardado(dato);
			}else{
				if(http.responseText.substr(0,6) =="../vpc"){
				     if(inmige==0 && pago == 'TB'){
						iniTimeDown(inmiba,paso);
						$('body').append('<div id="contador" style:"#div #contador {background: url("../imagenes/contador.jpg") repeat scroll 0 0 #F8CC00; color: #005191; font-size: 24px; left: 100%; margin: -6px 0 0 -370px; position: fixed; text-align: center; top: 10px;}"><font>Tiempo restante</font><br>00:00<br><font>Para completar este paso.</font></div>');



						}
					$('<iframe />', {name: 'frame', id:'frame',src: http.responseText,width:"100%",height:"500px"}).appendTo('#area');
					document.getElementById("nav").innerHTML = puntoactual(7,'AB');

				}else{
					eval(http.responseText);
					document.getElementById("area").innerHTML = generaError(dato.Error);
				}
			}
		}
	}
	http.send(null);

}
function saldos(){
termina();
if(viinco == 'NO') { document.getElementById("area2").innerHTML="";  document.getElementById("area2").style.display="none"; }
personalizat = false;
//document.getElementById("counter").innerHTML = '';
$('dt').removeClass('textos_resumen_current');
$('#Saldos').addClass('textos_resumen_current');
esint='NO'; opeint=''; mint=0;
	var http = CreateRequest();
	var url = "/netScripts/Request.aspx?APPNAME=NAVEGANTE&PRGNAME=saldos&ARGUMENTS=-A"+ sesion +",-A"+claus;
	http.open("GET",url,true);
	http.onreadystatechange  = function(){
				if(http.readyState <= 3)
						{
						document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
						}
			if(http.readyState == 4 && http.status == 200) {
				var json_data = http.responseText;
				try{
				var object_saldos = eval(json_data);
				$("#edopasos").html('');
				document.getElementById("area").innerHTML = generaSaldos(object_saldos);
				//document.getElementById("regresar").innerHTML = '';
				}
				catch(e){ }
		}
	}
	http.send(null);

}
function validasaldos(saldo){
		acuanto = document.getElementById("saldoadepositar").value;
		acuanto.replace(/^\s*|\s*$/g,"");
		var correcto='SI';
        if(acuanto != '' )
            {
            if(soloNumerosOk(acuanto)== false){
			correcto='NO'; return false;}
            }

		var cuanto= parseFloat(acuanto);
		var valor1 = parseFloat(saldo);

		if(cuanto == 0)
		{
			alert(""+msj.MontoFichaNoPuedeSerCero );
			return false; correcto='NO';
		}
		if(acuanto == '')
		{
			alert(""+msj.MontoFichaNoPuedeSerVacio );
			return false; correcto='NO';
		}

		if(cuanto>valor1)
		{
			alert(""+msj.DepositoNoPuedeSerMayoraVenta );
			return false; correcto='NO';
		}
		if(correcto=='SI')
		{
			var http = CreateRequest();
			var url = "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=ficha&ARGUMENTS=-A"+ cuanto +",-A"+ sesion;
			http.open("GET",url,true);
			http.onreadystatechange  = function(){
				if(http.readyState <= 3)
						{
						document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
						}
				if(http.readyState == 4 && http.status == 200) {
				var json_data = http.responseText;
				try{
				var object_ficha = eval(json_data);
				document.getElementById("area").innerHTML = generaficha(object_ficha);
				//$("#regresar").html('<a onclick="return saldos();" href="#"><img width="107" height="26" border="0" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage(\'imgSiguiente\',\'\',\'../imagenes/btn_regresar_over.jpg\',1)" id="imgSiguiente" src="../imagenes/btn_regresar.jpg" class="botonNav"></a>')
				$("#regresar").html('<a onclick="return saldos();" href="#" class="btn_ctr">‹‹ '+txt.Regresar+'</a>');
				}
				catch(e){ alert(e);}
		}
	}
	http.send(null);
	}
}
function imprSelec(promo){
var ficha=document.getElementById(promo);
var ventimp=window.open(' ','popimpr');
ventimp.document.write(ficha.innerHTML);
ventimp.document.close();
ventimp.print();
ventimp.close();
}
function validamovimientos(){
var E_fechaIni=document.getElementById("textfieldA").value;
var E_fecha_Fin=document.getElementById("textfield2B").value;
	var v_aDiaIni = E_fechaIni.substring(0, 2);
    var v_aMesIni = E_fechaIni.substring(3, 5);
    var v_aAnoIni = E_fechaIni.substring(6, 10);
    var v_aDiaFin = E_fecha_Fin.substring(0, 2);
    var v_aMesFin = E_fecha_Fin.substring(3, 5);
    var v_aAnoFin = E_fecha_Fin.substring(6, 10);
	var f1=new Date(v_aMesIni +'/'+ v_aDiaIni +'/'+ v_aAnoIni);
	var f2=new Date(v_aMesFin +'/'+ v_aDiaFin +'/'+ v_aAnoFin);
	if (f1 <= f2)
	{
		window.open("/netScripts/Request.aspx?APPNAME=NAVEGANTE&PRGNAME=rmovimientos&ARGUMENTS=-A"+ E_fechaIni +",-A"+ E_fecha_Fin +",-A"+ sesion);
		return true;
	}
		else {
		alert(""+msj.FechaFinalNoMenoraInicial); return false;
		}
}
function conviertecadenafloat(cadena){
var flotante=0;
cadena=cadena.replace(/^\s*|\s*$/g,"");
cadena=cadena.replace(/,/gi, '');
flotante=parseFloat(cadena);
return flotante;
}

var Elegido
var checked
checked = 'N'
var adminJSON;
var oriabierto='';
var desabierto='';
var personalizat=false;
var rutaabierto=0;
var ruta='NO';
var nosesion=false;

function validaUsuario(){
		if(checked == 'N')
		{
			alert(""+msj.ElegirUsuarioparaContinuar );
			return false;
		}

		return adminhorario();
	}
function Seleccionado( userselected ){
		Elegido = userselected ;
		checked = 'S';
	}
function habilita(h){
	if( $("#checkbox"+h).attr('checked')){
		$("#inicio"+h).removeAttr('disabled');
		$("#fin"+h).removeAttr('disabled');
	}else{
	//$("#checkbox"+h).attr('disabled','');
		$("#inicio"+h).attr('disabled', true);
		$("#fin"+h).attr('disabled', true);
	}
}
function desbloqueoasientoatras(modo){
var parametro=0;
if(nosesion==true)
{
	parametro=2;
}
http = CreateRequest();
http.open("GET","/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=DesapartaAsiento&ARGUMENTS=-A"+ consecutivo +",-A"+ modo+",-A"+parametro,true);
http.send(null);
}
function generaNuevaSesion(){
http = CreateRequest();
http.open("GET","/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=CreaSesion&ARGUMENTS=-A1",true);
http.onreadystatechange=function(){
	if(http.readyState == 4 && http.status == 200) {
		consecutivo = eval(http.responseText).con;
	}
}
http.send(null);
}
function cambiaformatofecha(fecha){
var dia = fecha.substring(0,2);
var mes	= fecha.substring(3,5);
var anno = fecha.substring(6,10);
var mesletra='';

if(mes == '01')
	mesletra = 'Enero'
if(mes == '02')
	mesletra = 'Febrero'
if(mes == '03')
	mesletra = 'Marzo'
if(mes == '04')
	mesletra = 'Abril'
if(mes == '05')
	mesletra = 'Mayo'
if(mes == '06')
	mesletra = 'Junio'
if(mes == '07')
	mesletra = 'Julio'
if(mes == '08')
	mesletra = 'Agosto'
if(mes == '09')
	mesletra = 'Septiembre'
if(mes == '10')
	mesletra = 'Octubre'
if(mes == '11')
	mesletra = 'Noviembre'
if(mes == '12')
	mesletra = 'Diciembre'
return mesletra+' '+dia+', '+anno;
}

/*function validacoma(cadena,muestra) {
    var patron =/[,]/;
    var    validacoma = patron.test(cadena);
    if ( !validacoma ) {
        alert ("El campo "+muestra+" no debe contener comas.");
        return true;
    }
	return false;
}*/

  function ocultamiestra(idelemento,muestra)
  {
  	if(muestra)
  		$('#'+idelemento).show();
  	else
  		$('#'+idelemento).hide();
  }
  function ocultamiestrab(muestra)
  {
  	if(muestra)
  		{
  			$('#continuar').show();
  			$('#regresar').show();
  			$('#nav').show();
  		}
  	else
  		{
  			$('#continuar').hide();
  			$('#regresar').hide();
 			$('#nav').hide();
  		}
  }

function quitaError1(id){
		$("#"+ id).css({border: '0px solid #D3D3D3'})
}

  function limpiaerroresfiltros()
  {
  	quitaError1("tdOrigen");
  	quitaError1("Origen_chosen");
  	quitaError1("tdDestino");
  	quitaError1("Destino_chosen");
  	quitaError1("dpd1");
  	quitaError1("dpd2");
  	quitaError1("Adulto");
  	quitaError1("Nino");
  }
 function personalizaAsientos(){

	document.title =msj.TituloAsiento;
	var c;
	var r;
	var d;
	var w = Math.random();
	t=w;
	var x = paso;
	var cadTabla;
	var Act;
	Act="SI";
	asiento.V_NumeroPasajeros=0;
	asiento.V_PasajeroActual=0;
	asiento.V_PasajerosSel=0;
	http = CreateRequest();
	personalizat=true;
	pasajerosdisp='NO';

	termina();
	//document.getElementById("counter").innerHTML = '';
	if(viinco == 'NO' && redondo == 'SI')
	{
	document.getElementById("area2").innerHTML="";
	document.getElementById("area2").style.display="none";}
	if(redondo=='SI')
	var url = "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=PersonalizarAsientosVR&ARGUMENTS=-A"+corridaIda.claveCorrida.replace(/^\s*|\s*$/g,"")+",-A"+corridaIda.FechaSalidaInicio+",-A"+corridaIda.FechaSalidaBoleto+",-A"+corridaIda.HoraSalida+",-A"+corridaRegeso.claveCorrida.replace(/^\s*|\s*$/g,"")+",-A"+corridaRegeso.FechaSalidaInicio+",-A"+corridaRegeso.FechaSalidaBoleto+",-A"+corridaRegeso.HoraSalida+",-A"+corridaIda.EmpresaCorrida+",-A"+corridaRegeso.EmpresaCorrida+",-A,-A,-A,-A,-A,-A"+consecutivo+",-A"+w+",-A"+Act+",-A,-A,-A,-A"+corridaIda.EmpresaCorrida+",-A"+corridaIda.CadenaCorridaTKN+",-A"+corridaIda.CadenaFechaTKN+",-A"+corridaIda.CadenaHoraTKN+",-A"+corridaIda.CadenaVersionTKN+",-A"+corridaIda.CadenaPuntoInicialTKN+",-A"+corridaIda.CadenaPuntoFinalTKN+",-A"+corridaIda.ClaveServicio+",-A"+corridaIda.Viaje+",-A"+corridaRegeso.EmpresaCorrida+",-A"+corridaRegeso.CadenaCorridaTKN+",-A"+corridaRegeso.CadenaFechaTKN+",-A"+corridaRegeso.CadenaHoraTKN+",-A"+corridaRegeso.CadenaVersionTKN+",-A"+corridaRegeso.CadenaPuntoInicialTKN+",-A"+corridaRegeso.CadenaPuntoFinalTKN+",-A"+corridaRegeso.ClaveServicio+",-A"+corridaRegeso.Viaje+",-A1";
	//if(redondo=='NO')   var url = "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=PersonalizarVR&ARGUMENTS=-A"+corridaIda.claveCorrida.replace(/^\s*|\s*$/g,"")+",-A"+corridaIda.FechaSalidaInicio+",-A"+corridaIda.FechaSalidaBoleto+",-A"+corridaIda.HoraSalida+",-A,-A,-A,-A,-A"+corridaIda.EmpresaCorrida+",-A,-A,-A,-A,-A,-A,-A"+consecutivo+",-A"+w+"";
	if(redondo=='NO')   var url = "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=PersonalizarAsientosVR&ARGUMENTS=-A"+corridaIda.claveCorrida.replace(/^\s*|\s*$/g,"")+",-A"+corridaIda.FechaSalidaInicio+",-A"+corridaIda.FechaSalidaBoleto+",-A"+corridaIda.HoraSalida+",-A,-A,-A,-A,-A"+corridaIda.EmpresaCorrida+",-A,-A,-A,-A,-A,-A,-A"+consecutivo+",-A"+w+",-A"+Act+",-A,-A,-A,-A"+corridaIda.EmpresaCorrida+",-A"+corridaIda.CadenaCorridaTKN+",-A"+corridaIda.CadenaFechaTKN+",-A"+corridaIda.CadenaHoraTKN+",-A"+corridaIda.CadenaVersionTKN+",-A"+corridaIda.CadenaPuntoInicialTKN+",-A"+corridaIda.CadenaPuntoFinalTKN+",-A"+corridaIda.ClaveServicio+",-A"+corridaIda.Viaje+",-A,-A,-A,-A,-A,-A,-A,-A,-A,-A1"	;
	if(oficinar.search("-")>0)
			{
				url+=",-A"+opcionConexion.ClaveRuta+",-A"+opcionConexion.Servicio;
			}
	else
		{
			url+=",-A,-A";
		}
		url+=",-A"+corridaIda.CadenaFechaLocalTKN;
		if(redondo!='NO'){
			url+=",-A"+corridaRegeso.CadenaFechaLocalTKN;
		}
	http.open("GET",url,true);
	document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	ocultamiestrab(false);
	http.onreadystatechange  = function(){
				if(http.readyState == 4 && http.status == 200) {

					var json_data = http.responseText;
					try{
						object_diagrama = eval(json_data);
						object_diagramaRespaldo=object_diagrama;
						if(object_diagrama.Error)
							document.getElementById("area").innerHTML = generaError(object_diagrama.Error);
						else{
							generaAsientos(object_diagrama,'ida');


							/*if (sesion != 0 && !vendir){
								document.getElementById('pago_0').checked="checked";
								TipoPago(1);
							}*/

							puntoactual(3,'CE');
							datos(d,x,object_diagrama);
							if(inmige==0){
							iniTimeDown(inmipe,paso);
							}

							tiempoinicial = new Date().getTime()/1000;
								$('#clock').FlipClock(inmipe, {
						clockFace: "MinuteCounter",
						countdown: true
						});
								$("a.iframe").fancybox({
								'transitionIn'	:	'elastic',
								'transitionOut'	:	'elastic',
								'speedIn'		:	600,
								'speedOut'		:	200,
								'overlayShow'	:	false
								});
						}
					}
					catch(e){
						document.getElementById("area").innerHTML =http.responseText;
						alert(e);
					}
				}
	}
	http.send(null);
}

function personalizaAsientosR(){

	document.title =msj.TituloAsientoRegreso;
	var c;
	var r;
	var d;
	var w = Math.random();
	t=w;
	var x = paso;
	var cadTabla;
	asientoR.V_NumeroPasajeros=0;
	asientoR.V_PasajeroActual=0;
	asientoR.V_PasajerosSel=0;
	http = CreateRequest();
	personalizat=true;
	pasajerosdisp='NO';

	termina();
	//document.getElementById("counter").innerHTML = '';
	if(viinco == 'NO' && redondo == 'SI')
	{
	document.getElementById("area2").innerHTML="";
	document.getElementById("area2").style.display="none";}
	if(redondo=='SI')
	var url = "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=PersonalizarAsientosVR&ARGUMENTS=-A"+corridaIda.claveCorrida.replace(/^\s*|\s*$/g,"")+",-A"+corridaIda.FechaSalidaInicio+",-A"+corridaIda.FechaSalidaBoleto+",-A"+corridaIda.HoraSalida+",-A"+corridaRegeso.claveCorrida.replace(/^\s*|\s*$/g,"")+",-A"+corridaRegeso.FechaSalidaInicio+",-A"+corridaRegeso.FechaSalidaBoleto+",-A"+corridaRegeso.HoraSalida+",-A"+corridaIda.EmpresaCorrida+",-A"+corridaRegeso.EmpresaCorrida+",-A,-A,-A,-A,-A,-A"+consecutivo+",-A"+w+",-A,-A,-A,-A,-A"+corridaIda.EmpresaCorrida+",-A"+corridaIda.CadenaCorridaTKN+",-A"+corridaIda.CadenaFechaTKN+",-A"+corridaIda.CadenaHoraTKN+",-A"+corridaIda.CadenaVersionTKN+",-A"+corridaIda.CadenaPuntoInicialTKN+",-A"+corridaIda.CadenaPuntoFinalTKN+",-A"+corridaIda.ClaveServicio+",-A"+corridaIda.Viaje+",-A"+corridaRegeso.EmpresaCorrida+",-A"+corridaRegeso.CadenaCorridaTKN+",-A"+corridaRegeso.CadenaFechaTKN+",-A"+corridaRegeso.CadenaHoraTKN+",-A"+corridaRegeso.CadenaVersionTKN+",-A"+corridaRegeso.CadenaPuntoInicialTKN+",-A"+corridaRegeso.CadenaPuntoFinalTKN+",-A"+corridaRegeso.ClaveServicio+",-A"+corridaRegeso.Viaje+",-A2";
	//if(redondo=='NO')   var url = "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=PersonalizarVR&ARGUMENTS=-A"+corridaIda.claveCorrida.replace(/^\s*|\s*$/g,"")+",-A"+corridaIda.FechaSalidaInicio+",-A"+corridaIda.FechaSalidaBoleto+",-A"+corridaIda.HoraSalida+",-A,-A,-A,-A,-A"+corridaIda.EmpresaCorrida+",-A,-A,-A,-A,-A,-A,-A"+consecutivo+",-A"+w+"";
	if(redondo=='NO')   var url = "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=PersonalizarAsientosVR&ARGUMENTS=-A"+corridaIda.claveCorrida.replace(/^\s*|\s*$/g,"")+",-A"+corridaIda.FechaSalidaInicio+",-A"+corridaIda.FechaSalidaBoleto+",-A"+corridaIda.HoraSalida+",-A,-A,-A,-A,-A"+corridaIda.EmpresaCorrida+",-A,-A,-A,-A,-A,-A,-A"+consecutivo+",-A"+w+",-A,-A,-A,-A,-A"+corridaIda.EmpresaCorrida+",-A"+corridaIda.CadenaCorridaTKN+",-A"+corridaIda.CadenaFechaTKN+",-A"+corridaIda.CadenaHoraTKN+",-A"+corridaIda.CadenaVersionTKN+",-A"+corridaIda.CadenaPuntoInicialTKN+",-A"+corridaIda.CadenaPuntoFinalTKN+",-A"+corridaIda.ClaveServicio+",-A"+corridaIda.Viaje+",-A,-A,-A,-A,-A,-A,-A,-A,-A,-A1"	;
	if(oficinar.search("-")>0)
			{
				url+=",-A"+opcionConexion.ClaveRuta+",-A"+opcionConexion.Servicio;
			}
	else
		{
			url+=",-A,-A";
		}
		url+=",-A"+corridaIda.CadenaFechaLocalTKN;
		if(redondo!='NO'){
			url+=",-A"+corridaRegeso.CadenaFechaLocalTKN;
		}
	http.open("GET",url,true);
	document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	ocultamiestrab(false);
	http.onreadystatechange  = function(){
				if(http.readyState == 4 && http.status == 200) {
					var json_data = http.responseText;

					try{
						object_diagramaR = eval(json_data);
						if(object_diagramaR.Error)
							document.getElementById("area").innerHTML = generaError(object_diagramaR.Error);
						else{
							generaAsientos(object_diagramaR,'regreso');



							/*if (sesion != 0 && !vendir){
								document.getElementById('pago_0').checked="checked";
								TipoPago(1);
							}*/

							puntoactual(4,'CE');
							datos(d,3);
							if(inmige==0){
							iniTimeDown(inmipe,paso);
							}
							tiempoinicial = new Date().getTime()/1000;
							$('#clock').FlipClock(inmipe, {
							clockFace: "MinuteCounter",
							countdown: true
							});
								$("a.iframe").fancybox({
								'transitionIn'	:	'elastic',
								'transitionOut'	:	'elastic',
								'speedIn'		:	600,
								'speedOut'		:	200,
								'overlayShow'	:	false
								});
						}
					}
					catch(e){
						document.getElementById("area").innerHTML =http.responseText;
						alert(e);
					}
				}
	}
	http.send(null);
}

function validacionesTB(){

	var muestra;
	var nombreTB;
	var domicilio;
	//valida Datos Pasajero
	//validacoma(domicilio.value, domicilio);
	if(pago == 'TB'){
			nombreTB = $("[name='nombreTB']")[0];
			if(nombreTB.value == ""){
				if(typeof ponError == 'function')
				ponError("nombreTB");
			alert(""+msj.FaltaNombreTB);
				return false;
		}
		else{
			if(soloLetrasOk(nombreTB.value,txt.RSNombre)!= true)
				return false;
		}
		//DIRECCION
		 domicilio = $("[name='domicilio']")[0];
		if(domicilio.value == ""){
				if(typeof ponError == 'function')
				ponError("domicilio");
			alert(""+msj.FaltaDomicilio);
			return false;
		}

		//Ciudad
		  ciudad = $("[name='ciudad']")[0];
		if(ciudad.value == ""){
				if(typeof ponError == 'function')
				ponError("ciudad");
			alert(""+msj.FaltaCapturarCiudad);
			return false;
		}
		else{
			if(soloLetrasOk(ciudad.value,txt.Ciudad)!= true)
				return false;
		}
		//CodigoPostal
		 codigoPostal = $("[name='codigoPostal']")[0];
		if(codigoPostal.value == ""  || codigoPostal.value.length > 10  ){
				if(typeof ponError == 'function')
				ponError("codigoPostal");
			alert(""+msj.ErrorenCodPos);
			return false;
		}
		else{
			if(soloNumerosOk(codigoPostal.value,txt.CodigoPostal)!= true)
				return false;
		}
		//Pais
		select = $("[name='select']")[0];
		if(select.value == ""){
				if(typeof ponError == 'function')
				ponError("select");
			alert(""+msj.FaltaElegirPais);
			return false;
		}
		else{
			if(soloLetrasOk(select.value,msj.Pais)!= true)
				return false;
		}
		//Telefono
		 telefono = $("[name='telefono']")[0];
		if(telefono.value == ""  || telefono.value.length > 50  ){
				if(typeof ponError == 'function')
				ponError("telefono");
			alert(""+msj.ErrorenTelef);
			return false;
		}
		else{
			if(soloNumerosOk(telefono.value,txt.telef)!= true)
				return false;
		}
		//Email
		 correo = $("[name='email']")[0];

		if(correo.value == ""  || correo.value.length > 100  ){
				if(typeof ponError == 'function')
				ponError("email");
			alert(""+msj.ErrorenEmail);
			return false;
		}
		else{
			if(emailOk(correo.value,txt.CorreoElectronico)!= true)
				return false;
		}
		correoc = $("[name='emailc']")[0];
		if(correo.value!=correoc.value)
		{
					if(typeof ponError == 'function')
				ponError("emailc");
			alert(""+msj.EmailDIferente);
			return false;
			}

	}
	else{
		direccion = '';
		ciudad= '';
		codigoPostal= '';
		select= '';
		telefono= '';
		correo= '';
		estado= '';
	}

	//Terminos y condiciones
	/*
	var checkbox = $('input[name=checkbox]').attr('checked');
	//var checkbox = true // Noreste no lleva terminos y condiciones en personaliza
	if (checkbox){}
	else{
		alert(""+msj.ParaContinuarAceptTermCond);
		return false;
	}
	*/

	//valida captcha
	if ( jcap() != true  ){
			if(typeof ponError == 'function')
			ponError("uword");
		return false;
	}

//si no tronó en ningun [if] entonces si pasa al siguiente PASO
return true;

}


 	function guardaAEJ(){
		termina();
		$('#reloj').countdown('destroy');
	var d;
	personalizat = false;
	http = CreateRequest();
	var url = "/netScripts/Request.aspx?APPNAME=navegante4&PRGNAME=MergeGuardaNVR&ARGUMENTS=-A"+consecutivo+",-A,-A,-A,-A,-A";
	//url+=',-A'+domicilio.value+',-A' +ciudad.value+',-A'+codigoPostal.value+',-A'+select.value+',-A'+telefono.value+',-A'+email.value+',-A'+nombreTB.value+',-A1';
	url+=',-A'+$("#domicilio").val()+',-A' +$("#ciudad").val()+',-A'+$("#codigoPostal").val()+',-A'+$("#select").val()+',-A'+$("#telefono").val()+',-A'+$("#email").val()+',-A'+$("#nombreTB").val()+',-A1,-A'+idioma;
	/***/
	/* ahernandez - 12 08 2013 - funciones de Google Analytics */
	/*if (sesion == 0)
	{
		_gaq.push(['_trackEvent', 'botonPAGAR', 'botonPAGAR']);
	}*/
	/***/
	//document.forms["pagobanco"].submit();
	http.open("GET",url,true);
	document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	ocultamiestrab(false);
	document.getElementById("continuar").innerHTML = "";
	http.onreadystatechange = function(){
		if(http.readyState == 4 && http.status == 200) {
			document.getElementById("area").innerHTML = "";
			$('#continuar').html('');
			$('#continuar').hide();
			if(pago!='TB' && sesion>0){
				eval(http.responseText);
				if(dato.Error)generaError(dato.Error);
				else RespuestaGuardado(dato);
			}
			else
			{
				if(http.responseText.substr(0,6) =="../vpc")
				{
					//document.forms["pagobanco"].submit();
					//$('<iframe />', {name: 'frame', id:'frame',src: http.responseText,width:"100%",height:"500px"}).appendTo('#area');
					//$('<iframe />', {name: 'myframe', id:'myframe',src:"", width:"100%",height:"500px"}).appendTo('#area');
					pagoBoa();
					if(inmige==0 && pago == 'TB'){
						iniTimeDown(inmiba,paso);
					}
					puntoactual(6,'CE');
					datos(d,6);

					$('#clock').FlipClock(inmiba, {
						clockFace: "MinuteCounter",
						countdown: true
						});
				}
				else{
					eval(http.responseText);
					document.getElementById("area").innerHTML = generaError(dato.Error);
				}
			}
		}
	}
	http.send(null);
	}

function ajustaReloj(inmitiempo)
{
	tiempofinal = new Date().getTime()/1000;
	var diferencia=inmitiempo-(tiempofinal-tiempoinicial);
	if (diferencia<0) diferencia=0;
	iniTimeDown(Math.round(diferencia),paso);
	$('#clock').FlipClock(Math.round(diferencia), {
		clockFace: "MinuteCounter",
		countdown: true
		});
	return true;
}


function replaceAll( text, busca, reemplaza ){
  while (text.toString().indexOf(busca) != -1)
      text = text.toString().replace(busca,reemplaza);
  return text;
}


function corridasConexion(){
document.title =msj.TituloSalida;
	var x = paso;
	var camb='';
	ncs=500;
	seluno=false;
	if(Inbo==1) camb="SI"; else camb="NO";
	var http = CreateRequest();

	termina();
	var url = "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=RecuperaCorridasVRARGUMENTS&ARGUMENTS=-A"+oficinao+",-A"+oficinar+",-A"+fechasal+",-A"+adulto+",-A"+insen+",-A"+menor+",-A"+estudiantes+",-A"+maestros+",-A"+viajeredondo+",-A"+sesion+",-A"+claus+",-A,-A"+camb+",-A,-A,-A,-A,-A,-A1,-A"+consecutivo+"";
	http.open("GET",url,true);
	document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	ocultamiestrab(false);
	http.onreadystatechange  = function(){
		if(http.readyState == 4 && http.status == 200) {
			var json_data = http.responseText;

				//alert(json_data);

			try{
				object_corridas = eval(json_data);
				if(object_corridas.Error)
							document.getElementById("area").innerHTML = generaError(msj.NoHayTarifas);
				else{
				opcionesConexion(object_corridas)
						}
			}catch(e){
				document.getElementById("area").innerHTML =http.responseText;
			}
		}
	}
	http.send(null);


}

function opcionesConexion(object_corridas)
{
	document.title =msj.TituloSalida;
	var c,d,b;
	var x = paso;
	var camb='';
	nccs=500;
	seluno=false;
	selopc=false;
	if(Inbo==1) camb="SI"; else camb="NO";
	var http = CreateRequest();
	var url = "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=OpcionesConexion&ARGUMENTS=-A"+sesion+",-A"+consecutivo;
	http.open("GET",url,true);
	http.onreadystatechange  = function(){
		if(http.readyState == 4 && http.status == 200) {
			var json_data = http.responseText;
			try{
				object_opcionesCorrida = eval(json_data);
				//alert(json_data);
				generaCorridasConexion(object_corridas,'ida',object_opcionesCorrida);
				if(object_corridas.Error)
							document.getElementById("area").innerHTML = generaError(msj.NoHayTarifas);
				else{
				if (object_corridas[0].claveCorrida!='0'){

					puntoactual(1,'CE');
					datos(d,x);
					if(document.getElementById("banner")!=null)
					document.getElementById("banner").innerHTML = banner(b);
					if(inmige==0){
							iniTimeDown(inmicr,paso);
							}

					tiempoinicial = new Date().getTime()/1000;

					$('#clock').FlipClock(inmicr, {
						clockFace: "MinuteCounter",
						countdown: true
						});
					$("a.iframe").fancybox({
						'width' : '80%',
						'height' : '80%',
						'autoScale' : false,
						'transitionIn'	:	'elastic',
						'transitionOut'	:	'elastic',
						'speedIn'		:	600,
						'speedOut'		:	200,
						'overlayShow'	:	false
					});
					}
						}
						if(ncs!=500 && personalizat == true)seleccionacorridaatras(ncs);
						if(redondo == 'NO')personalizat=false;
						if(viinco == 'NO' && redondo == 'SI') corridasRegreso();
			}catch(e){
				alert(e);
				document.getElementById("area").innerHTML =http.responseText;
			}
		}
	}
	http.send(null);
}

function CCida(i){

	image = document.getElementById('Imagec'+(i));
    image.src = "../imagenes/CheckBoxSelect.gif";
	selopc='true';
	if(i!=nccs){
		if(nccs!=500){
		image = document.getElementById('Imagec'+(nccs));
    	image.src = "../imagenes/CheckBox.gif";
		}
		image = document.getElementById('Imagec'+(i));
    	image.src = "../imagenes/CheckBoxSelect.gif";
		opcionConexion = object_opcionesCorrida[i];
	}
nccs=i;
}