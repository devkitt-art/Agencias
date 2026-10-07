//ODM VERSION 7.5

/* ahernandez - 12 08 2013 - funciones de Google Analytics */
  var _gaq = _gaq || [];
  var leytra='';
  var muestraTC=0;
  var muestraTA=0;
  // P R O D U C C I O N:
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

//Genera la tabla de corridas para modo ida o regreso
function generaCorridas(corridas,modo){
	var i = 0;
	var clase, cadTabla;
	if(esint=='SI' && opeint!='' && claus!='' && mint!=0)
		var inter = '<table class="aviso" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">Est&aacute;s intercambiando n&uacute;mero(s) de operaci&oacute;n </td></tr><tr><td align="center" class="color1">'+ opeint +'</td></tr></table>';
	else var inter ='';
	cadTabla ="<div class='head'><!--img width='690' height='57' ";
	cadTabla +=" src='../imagenes/titulos-horario-salida.jpg'--> </div>";
	cadTabla += "<div class='contenido'>" + inter;
	cadTabla += "<table class='horarios' width='860' border='0' cellspacing='0' cellpadding='0'>";
	
	// ahernandez - 04 12 2013
	var toquens = new Array;
	toquens = opeint.split(",");
	
	if (
	(esint!='SI'  &&  corridas[0].claveCorrida!='0' )   
	||   
	(esint=='SI'  &&  corridas[0].claveCorrida!='0'  &&  toquens.length==(adulto+insen+estudiantes+maestros+menor))
	)
	{
		cadTabla += "<tr class='tablagris'>";
		
		for( var j = 0;j<columnas.length;j++){
		if(columnas[j].nombreColumna != "Itinerario" ||(columnas[j].nombreColumna == "Itinerario" && corridas[0].muestraItinerario == 1))
		{
			cadTabla+= "<th";
			if(columnas[j].width) cadTabla+=" width='"+columnas[j].width+"'>";
			else cadTabla+= ">";
			cadTabla += columnas[j].nombreColumna + "</th>";
			
			//alert(columnas[j].nombreColumna);
		}		
			
		}
		 //cadTabla+='<tr><td width="85" colspan="8"><img width="680" height="15" style="margin-top:5px;" src="../imagenes/separador_200.png"></td></tr>'
		do {
			if(viinco == 'NO' && redondo == 'SI' && modo!='ida') cadTabla += " <tr id=corr"+(i+500)+" class=''>";
			else	cadTabla += " <tr id=corr"+i+" class=''>";
			for(var j = 0;j<columnas.length;j++){
			if(columnas[j].nombreColumna != "Itinerario" ||(columnas[j].nombreColumna == "Itinerario" && corridas[0].muestraItinerario == 1))
			{
				cadTabla += "<td>";
				if(columnas[j].items){
					for(var k=0;k<columnas[j].items.length;k++){
						cadTabla+=pintaColumna(i,columnas[j].items[k].id,modo,corridas);
						//alert(columnas[j].items[k].id);
					}
				}
				else cadTabla+=pintaColumna(i,columnas[j].id,modo,corridas);
				cadTabla += "</td>";
			}
			}
			cadTabla += "</tr>";
			i++;
		} while (corridas[i])
	}
	else
		if (esint=='SI'  &&  toquens.length!=(adulto+insen+estudiantes+maestros+menor))
			cadTabla += "<tr><td>Los Intercambios solo pueden ser de un Boleto por otro Boleto.</td></tr>";
		else 
			cadTabla += "<tr><td>"+msj.NoHayCorridas+"</td></tr>";
			
	cadTabla += "</table> ";
	cadTabla += "</div>";
	
	$('#area').html(cadTabla);
    ocultamiestrab(true);
}


function pintaColumna(corrida,columna,modo,corridas){
	var cad="";
	if(columna == "selecciona"){
		if(viinco == 'NO' && modo!='ida')	cad += "<img src='../imagenes/btn-seleccione.png' alt='Seleccione' width='73' height='20' id='Image"+(corrida+500)+"'  onmouseover=\"MM_swapImage('Image"+(corrida+500)+"','',' ../imagenes/btn-seleccione_over.png\',1)\" onmouseout='MM_swapImgRestore()'  onClick='return ";
		else	cad += "<img src='../imagenes/btn-seleccione.png' alt='Seleccione' width='73' height='20' id='Image"+(corrida+100)+"'  onmouseover=\"MM_swapImage('Image"+(corrida+100)+"','',' ../imagenes/btn-seleccione_over.png\',1)\" onmouseout='MM_swapImgRestore()'  onClick='return ";
		if(modo=='ida') cad += " Cida(" +corrida+");'  />";
		else cad += "Cregreso(" +corrida+");'  />";
	}
	else if(columna == "fechaSalida") cad += corridas[corrida].FechaSalidaBoleto;
	else if(columna == "horaSalida") cad += corridas[corrida].HoraSalida;
	else if(columna == "fechaLlegada")cad += corridas[corrida].FechaLlegada;
	else if(columna == "horaLlegada")cad += corridas[corrida].HoraLlegada;
	else if(columna == "claseDeServicio")cad += corridas[corrida].ClaveServicio;
	else if(columna == "linea")
	{
		if( corridas[corrida].ClaveClaseServicio != '' )
			cad += "<img src='../imagenes/logo_"+corridas[corrida].ClaveClaseServicio+".png' width='70' height='20' alt='"+corridas[corrida].DescripcionEmpresaCorrida+"' />";
		else
			cad += "<img src='../imagenes/logo_"+corridas[corrida].EmpresaCorrida+".png' width='70' height='20' alt='"+corridas[corrida].DescripcionEmpresaCorrida+"' />";
	}
	else if(columna == "tarifa")cad += corridas[corrida].Tarifa;
	else if(columna == "itinerario" && corridas[corrida].muestraItinerario == 1){
		var a = "<a class='iframe' style='text-align:left;font-weight: bold;' href='Request.aspx?APPNAME=NAVEGANTE&PRGNAME=RecuperaItinerarioVR&ARGUMENTS=-A"+corridas[corrida].claveCorrida.replace(/^\s*|\s*$/g,"")+",-A"+corridas[corrida].FechaSalidaInicio+",-A"+corridas[corrida].FechaSalidaBoleto+",-A"+corridas[corrida].HoraSalida+",-A";
		if(modo=='ida') a += oficinao+",-A"+oficinar;
		else a += oficinar+",-A"+oficinao;
		a += ",-A,-A"+corridas[corrida].EmpresaCorrida+",-A,-A"+corridas[corrida].EmpresaCorrida+",-A"+corridas[corrida].CadenaCorridaTKN+",-A"+corridas[corrida].CadenaFechaTKN+",-A"+corridas[corrida].CadenaPuntoInicialTKN+",-A"+corridas[corrida].CadenaPuntoFinalTKN+",-A"+idioma+"'>"+txt.Itinerario+"</a>";
		cad += a;
	}
	else if(columna == "tarifapromo") if(corridas[corrida].TarifaPromo!=0) cad += corridas[corrida].TarifaPromo; else cad+='-';
	return cad;
}


//Genera ventana personalizacion
function generaPersonaliza(personalizaObj){
	var x = adulto + insen + menor + estudiantes + maestros;
	var ad,is,ni,es,ma;
	var tipointabi = document.getElementById("tipoOper_N");		
	ad = x-insen-menor-estudiantes-maestros;
	is = x-menor-estudiantes-maestros;
	ni = x-estudiantes-maestros;
	es = x-maestros;
	ma = x;	
	oriabierto = personalizaObj.Ori;
	desabierto = personalizaObj.Des;
	//alert(oriabierto);
	//alert(personalizaObj.CostoTotal); alert(mint);
	if(esint=='NO' ) {var ti='radio'; var sele='';}
	else {var ti='hidden'; var sele='checked="checked"'; pago = 'EF'}
	if(esint=='SI' && opeint!='' && claus!='' && mint!=0)
		{var inter = '<table class="aviso" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">Est&aacute;s intercambiando n&uacute;mero(s) de operaci&oacute;n </td></tr><tr><td align="center" class="color1">'+ opeint +'</td></tr></table>';
		if(typeof(oriabierto)!='undefined' && typeof(desabierto)!='undefined' && personalizaObj.CostoTotal>mint){personalizaObj.CostoTotal = personalizaObj.CostoTotal-mint;}
		else{if((typeof(oriabierto)!='undefined' && typeof(desabierto)!='undefined') && (personalizaObj.CostoTotal<mint || personalizaObj.CostoTotal==mint)){personalizaObj.CostoTotal = 0}}}
	else {var inter ='';}
		
	var cadTabla = "<div class='head'>";
	cadTabla += "<!--img src='../imagenes/titulos-llenar-formulario.jpg' width='690' height='57' --/>";
	cadTabla += "</div><!-- head -->";
	cadTabla += "<div class='contenido'>" + inter;
	cadTabla += "<table width='95%' border='0' align='center' cellpadding='0' cellspacing='0' class='forma'	>";
	cadTabla += "<tr>";
	cadTabla += "<td><table class='formulario' width='100%' border='0' cellspacing='0' cellpadding='0'>";
	cadTabla += "<tr>";
	cadTabla += "<td><table class='nf' width='120' border='0' cellspacing='0' cellpadding='0'>";
	cadTabla += "<tr>";
	cadTabla += "<td class='titulo'>"+txt.CostoTotal+"</td></tr>";
	cadTabla += "<td align='center' bgcolor='#255136' class='precio res'>$"+personalizaObj.CostoTotal+"</td>";
	cadTabla += "</tr>";
	cadTabla += "</table></td>";
	//cadTabla += "<td class='alert'>*campos requeridos</td>";
	cadTabla += " </tr>";
	cadTabla += "</table></td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	if(sesion!=  0 && !vendir){
		cadTabla += "<td><table class='formulario' width='100%' border='0' cellspacing='0' cellpadding='0'>";
		cadTabla += "<tr style='visibility:hidden'>";
		cadTabla += " <td>Forma de Pago: </td>";
		//jmoreno se oculta para el pago con todito
		cadTabla += "<td style='visibility:hidden'><label>";
		cadTabla += "<input type='radio' name='pago' value='EF' id='pago_0' onClick='TipoPago(1);' "+sele+" disabled='/>";
		cadTabla += "Efectivo</label></td>";
		cadTabla += "<td style='visibility:hidden'> <label>";
		cadTabla += "<input type='"+ti+"' name='pago' value='TB' id='pago_1' onClick='TipoPago(2);' disabled='disabled'/>";
		if(esint=='NO') cadTabla += "Pago con Tarjeta";
		cadTabla += "</label></td>";
		cadTabla += "</tr>";
		cadTabla += "</table></td>";
	}
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	cadTabla += "<td><table class='formulario' width='650' border='0' cellspacing='0' cellpadding='0'>";
	cadTabla += "<tr>";
	//cadTabla += "<td width='120'><label for='domicilio'>Domicilio</label></td>";
	cadTabla += "<td colspan='3'><label for='domicilio'>"+txt.Domicilio+":</label><input name='domicilio' type='text' id='domicilio' size='50' />";
    cadTabla +="<span class='alert'>*</span></td>";
	cadTabla +="</tr>";
	cadTabla +="<tr>";
	//cadTabla += "<td><label for='ciudad'>Ciudad</label></td>";
	cadTabla += "<td width='195'><label for='ciudad'>"+txt.Ciudad+": </label><input name='ciudad'  type='text' id='ciudad' size='20' />";
	 cadTabla +="<span class='alert'>*</span></td>";
	 cadTabla +="</tr>";
    //cadTabla += "<td width='96'><label for='codigoPostal'>C&oacute;digo postal</label></td>";
	cadTabla += "<tr><td width='239'><label for='codigoPostal'>"+txt.CodPostal+": </label><input name='codigoPostal' type='text' id='codigoPostal' size='7' />";
	cadTabla +="<span class='alert'>*</span></td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	//cadTabla += "<td><label for='select'>Pais</label></td>";
	cadTabla += "<td colspan='3'><label for='select'>"+txt.Pais+": </label><select name='select' id='select'>";
	cadTabla += paises+"</select>";
	
	cadTabla += " <span class='alert'>*</span></td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	//cadTabla += "<td> <label for='telefono'>Tel&eacute;fono Casa/Oficina: </label></td>";
	cadTabla += "<td colspan='3'><label for='telefono'>"+txt.TelCasaOfic+": </label><input type='text' name='telefono' id='telefono' /> ";
	cadTabla += txt.IncluyaLada;
	cadTabla += " <span class='alert'>*</span></td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	//cadTabla += "<td><label for='email'>Correo electr&oacute;nico</label></td>";
	cadTabla += "<td colspan='3'><label for='email'>"+txt.RSCorreo+": </label><input type='text' name='email' id='email' />";
	cadTabla += "<span class='alert'>*</span></td>";
	cadTabla += "</tr>";
	cadTabla += "</table></td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	cadTabla += "<td>&nbsp;</td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	cadTabla += " <td class='colorAlt pad'><strong>"+txt.RegistrodePasajeros+"</strong></td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	cadTabla += "<td  class='colorAlt pad'><a onClick='return autoRelleno();' href='#'><img src='../imagenes/btn_autorrelleno.png' alt='Autorrelleno' width='102' height='22' border='0' id='Image1' onmouseover=\"MM_swapImage('Image1','','../imagenes/btn_autorrelleno_over.png',1)\" onmouseout='MM_swapImgRestore()' /></a> "+txt.Utiliza1erNomParaPasajeros+"</td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	cadTabla += "<td>&nbsp;</td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	cadTabla += "<td><table class='formulario' width='600' border='0' cellspacing='0' cellpadding='0'>";
	var tipo;
	for(cont=1;cont<=x;cont++){		
		if (adulto>0 && cont <= ad){			
			tipo = txt.AdultoMayus;	
			tipoAbre = personalizaObj.Adul;
			tipop = 'AD';}
		else if (insen>0 && cont <= is)	{	
			tipo = txt.InsenMayus;
			tipoAbre = personalizaObj.Ins;
			tipop = 'IN';}
		else if (menor>0 && cont <= ni)	{	
			tipo = txt.MenorMayus;
			tipoAbre = personalizaObj.Nin;
			tipop = 'NI';}
		else if (estudiantes>0 && cont <= es){		
			tipo = txt.EstudianteMayus;
			tipoAbre = personalizaObj.Est;
			tipop = 'ES';}
		else if (maestros>0 && cont <= ma){		
			tipo = txt.MaestroMayus;
			tipoAbre = personalizaObj.Mae;
			tipop = 'MA';}
		//Creo un arreglo para los demas programas 
		tipoPas[cont-1] = tipo;
		tipoPasInt[cont-1] = tipoAbre;
		tipoPasExtAbie[cont-1] =tipop;
		
		
		cadTabla += "<tr>";		
		cadTabla += "<td  ><label for='pasajero"+cont+"'>"+tipo	+":</label></td>";
		cadTabla += "<td><input onchange='javascript:this.value=this.value.toUpperCase().replace(/,/g,sustitucion);' name='pasajero' type='text' id='pasajero"+cont+"' size='50' />";
		cadTabla += "<span class='alert'>*</span></td>";
		cadTabla += "</tr>";		
	}
	cadTabla += "</table></td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	cadTabla += "<td>&nbsp;";
	cadTabla += "</td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	cadTabla += "<td> <input type='checkbox' name='checkbox' id='checkbox' />";
	cadTabla += "<label for='checkbox'>"+txt.Acepto+"</label>";
	cadTabla += "<a class='iframe' href='../imagenes/terminos.html'> "+txt.Terminos+" </a> "+txt.PagoPrecio+"</td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	cadTabla += "<td>&nbsp;</td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	cadTabla += "<td><table class='formulario' width='100%' border='0' cellspacing='0' cellpadding='0'>";
	cadTabla += "<tr>";
	cadTabla += "<td width='50%><label for='uword'>"+txt.CaptureTxtComoEnImg+"</label></td>";
	cadTabla +="<td><input id='uword' class='cajaMediana' type='text' value='' name='uword'></td>";
	cadTabla += sjcap();
	cadTabla += "<br/>";
	cadTabla += "<a href='#' onClick='return RefreshImage();'>"+txt.RefrescarImagen+"</a></td>";
	cadTabla += "</tr>";
	cadTabla += "</table></td>";
	cadTabla += "</tr>";
	cadTabla += "</table>";
	cadTabla += "</div><!-- contenido -->";
		
	$('#area').html(cadTabla);	
    ocultamiestrab(true);
}


//Genera resumen modo 1 ce o modo 2 para ne
function generaResumen(modo){
	if(esint=='SI' && opeint!='' && claus!='' && (mint!=0 || mint==0))
		var inter = '<table class="" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">Est&aacute;s intercambiando n&uacute;mero(s) de operaci&oacute;n </td></tr><tr><td align="center" class="color1">'+ opeint +'</td></tr></table>';
		else var inter ='';
	
	var cadTabla ="<div class='head'>";
	cadTabla +="<!--img src='../imagenes/titulos-verifique-su-viaje.jpg' width='690' height='57' /-->";
	cadTabla +="</div><!-- head -->" ;            
	cadTabla +="<div class='contenido'>" + inter;
	cadTabla +="<table width='95%' border='0' align='center' cellpadding='0' cellspacing='0' class='forma'>";
	cadTabla +="<tr>";
	cadTabla +="<td class='recuadroBlanco'><table width='640' border='0' align='center' cellpadding='0' cellspacing='0' class='formulario'>";
	cadTabla +="<tr>";
	cadTabla +="<td colspan='6' class='datos'><span class='color5'>"+txt.DatosSalida+"</span></td>";
	cadTabla +="</tr>";
	cadTabla +="<tr class='color7'>";
	if(modo!=2){
		cadTabla +="<td width='18%' class='res'>"+txt.Dia+"</td>";
		cadTabla +="<td width='9%' class='res'>"+txt.Hora+"</td>";
	}
	cadTabla +="<td width='15%' class='res'>"+txt.Servicio+"</td>";
	cadTabla +="<td width='3%' class='res'>&nbsp;</td>";
	cadTabla +="<td width='23%' class='res'>"+txt.Origen+"</td>";
	cadTabla +="<td width='32%' class='res'>"+txt.Destino+"</td>";
	cadTabla +="</tr>";
	//cadTabla +='<tr><td width="136" colspan="8"><img width="680" height="15" style="margin-top:5px;" src="../imagenes/separador_200.png"></td></tr>'
	if(modo!=2)
	{
		if(corridaIda.CadenaCorridaTKN.split("-").length==1)
		{
		cadTabla +="<tr>";

		cadTabla +="<td class='res'>"+corridaIda.FechaSalidaBoleto+"</td>";
		cadTabla +="<td class='res'>"+corridaIda.HoraSalida+"</td>";
		cadTabla +="<td class='res'>"+corridaIda.ClaveServicio+"</td>";
		}
		else
		{
			
			var ffecha=corridaIda.CadenaFechaTKN.split("-");
			var hhora=corridaIda.CadenaHoraTKN.split("-");
			var aservicio=corridaIda.ServiciosTKN.split("-");
			var aorigen=corridaIda.OficinasOrigenTKN.split("-");
			var adestino=corridaIda.OficinasDestinoTKN.split("-");
			for (var i=0;i<ffecha.length-1;i++)
			{
				cadTabla +="<tr>";
				cadTabla +="<td class='res'>"+ffecha[i]+"</td>";
				cadTabla +="<td class='res'>"+hhora[i]+"</td>";
				cadTabla +="<td class='res'>"+aservicio[i]+"</td>";
				cadTabla +="<td align='center'>&nbsp;</td>";
				cadTabla +="<td class='res'>"+aorigen[i]+"</td>";
				cadTabla +="<td class='res'>"+adestino[i]+"</td>";
				cadTabla +="</tr>";
			}
		}
	}
	else{
		cadTabla +="<tr>";
		cadTabla +="<td align='center'>"+desSer+"</td>";
	}

	if(corridaIda.CadenaCorridaTKN.split("-").length==1)
	{
	cadTabla +="<td align='center'>&nbsp;</td>";
	if(modo!=2) cadTabla +="<td class='res'>"+oficinaori+"</td>"; else cadTabla +="<td align='center'>"+oriabierto+"</td>";
	if(modo!=2) cadTabla +="<td class='res'>"+oficinareg+"</td>"; else cadTabla +="<td align='center'>"+desabierto+"</td>";
	cadTabla +="</tr>";
	}
	cadTabla +="</table></td>";
	cadTabla +="</tr>";
	cadTabla +="<tr>";
	cadTabla +="<td>&nbsp;</td>";
	cadTabla +="</tr>";
	cadTabla +="<tr>";
	cadTabla +="<td><table width='680' border='0' align='center' cellpadding='0' cellspacing='0' class='formulario'>";
	cadTabla +="<tr>";
	cadTabla +="<td colspan='7' class='datos'><span class='color5'>"+txt.DatosDelPasajero+"</span></td>";
	cadTabla +="</tr>";
	//cadTabla +='<tr><td width="136" colspan="8"><img width="680" height="15" style="margin-top:5px;" src="../imagenes/separador_200.png"></td></tr>'
	
	//Se ocupa ver que asiento es asignado acada tipo de pasajero
	for (x=0;x<pasajeros.length;x++){	
		cadTabla +="<tr>";
		cadTabla +="<td width='11%' class='res'>"+ (x+1) +"</td>";
		cadTabla +="<td width='32%' class='res'>"+pasajeros[x].value+"</td>";
		cadTabla +="<td width='15%' class='res'>"+tipoPas[x]+"</td>";
		if(modo!=2){
			cadTabla +="<td width='12%' class='res'>"+txt.Asiento+"</td>";
			cadTabla +="<td width='15%' class='res'>"+ A_AsientosPasajeros[x] +"</td>";
		}
		cadTabla +="</tr>";
	}
		
	cadTabla +="</table></td>";
	cadTabla +="</tr>";
	cadTabla +="<tr>";
	cadTabla +="<td>&nbsp;</td>";
	cadTabla +="</tr>";
	if(redondo == 'SI'){
		cadTabla +="<tr>";
		cadTabla +="<td class='recuadroBlanco'><table width='640' border='0' align='center' cellpadding='0' cellspacing='0' class='formulario'>";
		cadTabla +="<tr>";
		cadTabla +="<td colspan='6' class='datos'><span class='color5'>"+txt.DatosRegreso+"</span></td>";
		cadTabla +="</tr>";
		cadTabla +="<tr class='color7'>";
		if(modo!=2){
			cadTabla +="<td width='18%' class='res'>"+txt.Dia+"</td>";
			cadTabla +="<td width='9%' class='res'>"+txt.Hora+"</td>";
		}
		cadTabla +="<td width='15%' class='res'>"+txt.Servicio+"</td>";
		cadTabla +="<td width='3%' class='res'>&nbsp;</td>";
		cadTabla +="<td width='23%' class='res'>"+txt.Origen+"</td>";
		cadTabla +="<td width='32%' class='res'>"+txt.Destino+"</td>";
		cadTabla +="</tr>";
		//cadTabla +='<tr><td width="136" colspan="8"><img width="680" height="15" style="margin-top:5px;" src="../imagenes/separador_200.png"></td></tr>'
		cadTabla +="<tr>";
		if(modo!=2)
		{
			if(corridaRegeso.CadenaCorridaTKN.split("-").length==1)
			{
			cadTabla +="<td class='res'>"+corridaRegeso.FechaSalidaBoleto+"</td>";
			cadTabla +="<td class='res'>"+corridaRegeso.HoraSalida+"</td>";
			cadTabla +="<td class='res'>"+corridaRegeso.ClaveServicio+"</td>";
			}
			else
			{
			
				var ffechaR=corridaRegeso.CadenaFechaTKN.split("-");
				var hhoraR=corridaRegeso.CadenaHoraTKN.split("-");
				var aservicioR=corridaRegeso.ServiciosTKN.split("-");
				var aorigenR=corridaRegeso.OficinasOrigenTKN.split("-");
				var adestinoR=corridaRegeso.OficinasDestinoTKN.split("-");
				for (var i=0;i<ffechaR.length-1;i++)
				{
					cadTabla +="<tr>";
					cadTabla +="<td class='res'>"+ffechaR[i]+"</td>";
					cadTabla +="<td class='res'>"+hhoraR[i]+"</td>";
					cadTabla +="<td class='res'>"+aservicioR[i]+"</td>";
					cadTabla +="<td align='center'>&nbsp;</td>";
					cadTabla +="<td class='res'>"+aorigenR[i]+"</td>";
					cadTabla +="<td class='res'>"+adestinoR[i]+"</td>";
					cadTabla +="</tr>";
				}
			}
		}
		else{
			cadTabla +="<td class='res'>"+desSer+"</td>";
		}
		if(corridaRegeso.CadenaCorridaTKN.split("-").length==1)
		{
		cadTabla +="<td align='center'>&nbsp;</td>";
		if(modo!=2)cadTabla +="<td class='res'>"+oficinareg+"</td>";else cadTabla +="<td align='center'>"+desabierto+"</td>";
		if(modo!=2)cadTabla +="<td class='res'>"+oficinaori+"</td>";else cadTabla +="<td align='center'>"+oriabierto+"</td>";
		cadTabla +="</tr>";
		}
		cadTabla +="</table></td>";
		cadTabla +="</tr>";
		cadTabla +="<tr>";
		cadTabla +="<td>&nbsp;</td>";
		cadTabla +="</tr>";
		cadTabla +="<tr>";
		cadTabla +="<td><table width='680' border='0' align='center' cellpadding='0' cellspacing='0' class='formulario'>";
		cadTabla +="<tr>";
		cadTabla +="<td colspan='7' class='datos'><span class='color5'>"+txt.DatosDelPasajero+"</span></td>";
		cadTabla +="</tr>";
		//cadTabla +='<tr><td width="136" colspan="8"><img width="680" height="15" style="margin-top:5px;" src="../imagenes/separador_200.png"></td></tr>'
		
		//Se ocupa ver que asiento es asignado acada tipo de pasajero
		for (x=0;x<pasajeros.length;x++){	
			cadTabla +="<tr>";
			cadTabla +="<td width='11%' class='res'>"+ (x+1) +"</td>";
			cadTabla +="<td width='32%' class='res'>"+pasajeros[x].value+"</td>";
			cadTabla +="<td width='15%' class='res'>"+tipoPas[x]+"</td>";
			if(modo!=2){
				cadTabla +="<td width='12%' class='res'>"+txt.Asiento+"</td>";
				cadTabla +="<td width='15%' class='res'>"+ A_AsientosPasajerosRegreso[x] +"</td>";
			}
			cadTabla +="</tr>";
		}		
		
		cadTabla +="</table></td>";
		cadTabla +="</tr>";
		cadTabla +="<tr>";
		cadTabla +="<td>&nbsp;</td>";
		cadTabla +="</tr>";
	}

	/*
	cadTabla +="<tr>";	
	cadTabla +="<td><table class='nf' width='100%' border='0' cellspacing='0' cellpadding='0'>";
	cadTabla += "<tr>";
	cadTabla +="<td width='25%' class='titulo'>COSTO TOTAL</td> <td width='20%' class='titulo'></td><td width='25%' class='titulo'></td><td width='30%' class='titulo'>PAGO</td></tr>";
	
	if(modo!=2)cadTabla +="<tr><td width='20%' class='res' bgcolor='#0098DB' class='precio' id='back_costos'>$"+object_personaliza.CostoTotal+"</td> <td width='20%' ></td><td width='30%' ></td> ";
	else cadTabla +="<tr><td width='20%' class='res' bgcolor='##0098DB' class='precio' id='back_costos'>$"+object_servicio.CostoTotal+"</td> ";
	// ahernandez - 27 05 2014 ----- <td width='20%'></td> <td width='20%' ></td> ";
	
	//cadTabla += "<td width='30%'><form name='formu'><input type='radio' name='pago' value='todito'>Todito Cash<br><input type='radio' name='pago' value='banamex'>Tarjeta Bancaria </form></td>";
	//cadTabla += "<td width='30%'><form name='formu'><input type='radio' name='pago' value='todito'>Todito Cash<br>";
	if (sesion==0)
	{
		cadTabla += "<td width='30%'><form name='formu'><input type='radio' name='pago' value='todito'> Todito Cash <br>";
		cadTabla +="<input type='radio' name='pago' value='banamex' checked> Tarjeta Bancaria </form></td>";
	}
	*/
	cadTabla +="<tr>";
	cadTabla +="<td>          <table class='nf' width='100%' border='0' cellspacing='0' cellpadding='0'>";
	cadTabla += "<tr>";
	cadTabla +="<td width='20%' class='titulo'>"+txt.CostoTotal+"</td><br><td width='3%' class='titulo'></td><td width='30%'class='titulo'>"+txt.FormadePago+"</td><td width='30%' class='titulo'></td>";
	
	if(modo!=2)cadTabla +="<tr>	<td width='20%'><table><tr><td id='back_costos' class='res' bgcolor='#427951' class='precio'>$"+object_personaliza.CostoTotal+"</td></tr><tr><td><p>&nbsp;</p></td></tr><tr><td><p>&nbsp;</p></td></tr></table>  </td> <td width='3%' ></td> ";
	else cadTabla +="<tr><td width='20%' class='res' bgcolor='#427951' class='precio' id='back_costos'>$"+object_servicio.CostoTotal+"</td> <td width='3%'></td> ";
	// ahern
	
	//cadTabla += "<td width='5%><form name='formu'><p align='center'><img src="carpeta\toditocash.png"/><br><p align='center'>Todito Cash <input type='radio' name="pago' value='todito'></p><td width="5%" class = <td width='4%'><p align='center'><img src='C:\Users\valsishga\Desktop\Infopantallas\card_sm_visa.png' /><img src='C:\Users\valsishga\Desktop\Infopantallas\card_sm_masterc.png' /><img src='C:\Users\valsishga\Desktop\Infopantallas\card_sm_carnet.gif"/></p>";
	//cadTabla += "<p align='center'><br>Tarjeta Bancaria <input type='radio' name='pago' value='banamex' checked></form></td>";
	if (sesion==0)
	{
		if(muestraTC==1)
		cadTabla += "<td width='30%><form name='formu'><p align='center'><img src='../imagenes/card_todito.jpeg'/><br><p align='center'>Todito Cash <input type='radio' name='pago' value='todito'></p>";
		cadTabla += "<td width='30%'' class = <td width='4%'><p align='center'><img src='../imagenes/card_visa.gif' /><img src='../imagenes/card_master.gif' /></p><p align='center'>Tarjeta Bancaria <input type='radio' name='pago' value='banamex' checked></form></td>";
		//JMORENO TARJETA AMIGO
		if(muestraTA==1)
		cadTabla +="<td><p align='center'><img src='../imagenes/amigabanner.png'/><br><p align='center'>Tarjeta amiga<input type='radio' name='pago' value='amigo'></td>";

	}


	else
	{
		cadTabla +="<td width='20%'></td><td width='20%'></td>   <td width='30%'><form name='formu'><input type='radio' name='pago' value='EF' checked> Efectivo </form></td>";
	}
	cadTabla +="</tr></table>";//</table></td> </tr>
	
	cadTabla +="</tr>";
	cadTabla +="<tr>";
	cadTabla +="<td>&nbsp;</td>";
	cadTabla +="</tr>   ";
	cadTabla +="</table>";
	/*/hgaytan
	cadTabla += " <form name='formu'><input type='radio' name='pago' value='todito'>Todito<br>";
	cadTabla += "<input type='radio' name='pago' value='banamex'>Banamex </form>";	
	// fin hgaytan*/
	cadTabla +="</div><!-- contenido -->";

	$('#area').html(cadTabla);
    ocultamiestrab(true); 
	if(modo!=2 && sesion == 0) $('#datos').html('');
}
// HGAYTAN
//Genera Todito modo 1 ce o modo 2 para ne
function generaTodito(modo){
	if(esint=='SI' && opeint!='' && claus!='' && (mint!=0 || mint==0))
		var inter = '<table class="" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">Est&aacute;s intercambiando n&uacute;mero(s) de operaci&oacute;n </td></tr><tr><td align="center" class="color1">'+ opeint +'</td></tr></table>';
		else var inter ='';
	
	var cadTabla ="<div class='head'>";
	cadTabla +="<!--img src='../imagenes/titulos-verifique-su-viaje.jpg' width='690' height='57' /-->";
	cadTabla +="</div><!-- head -->" ;         
	   
	cadTabla +="<div class='contenido'>" + inter;
	
	cadTabla +="<table background='../imagenes/toditocash.png' frame='box' cellpadding='9' width='70%' align='center' border='0'>";
	cadTabla +="<tr ><th align='center' height='100'>  </th></tr>";
	cadTabla +="<tr align='center'><td align='right'>Número de tarjeta:</td>";
	cadTabla +="<td height='50'><input type='text' id='ntarjeta' name='ntarjeta' placeholder='1234567890'></td>";
	cadTabla +="</tr><tr><td align='right'>Clave de seguridad:</td>";
	cadTabla +="<td height=85'><input type='password' id='nclave' name='nclave' placeholder='nip: 3456'></td>";
	cadTabla +="</tr></table><br><br><br> ";
	
	cadTabla +="</div><!-- contenido -->";

	$('#area').html(cadTabla);
    ocultamiestrab(true);
	//if(modo!=2 && sesion == 0) $('#datos').html('');
	$('#datos').html('');
// hgaytan 05 03 14
	$("#continuar").show();
		if (modo==1){
    $("#continuar").html('<a onclick="validacionesTodito(1);" href="#" class="btn_ctr">Continuar ››</a>');}
		if (modo==2){
    $("#continuar").html('<a onclick="validacionesTodito(2);" href="#" class="btn_ctr">Continuar ››</a>');}
	
    $("#regresar").html('');
}
// FIN HGAYTAN
//JMORENO TARJETA AMIGO
function generaAmigo(modo){
	 //var leytra='';
	//obtieneParam(leytra);
	
	if(esint=='SI' && opeint!='' && claus!='' && (mint!=0 || mint==0))
		var inter = '<table class="" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">Est&aacute;s intercambiando n&uacute;mero(s) de operaci&oacute;n </td></tr><tr><td align="center" class="color1">'+ opeint +'</td></tr></table>';
		else var inter ='';
	var cadTabla ="<div class='head'>";
	cadTabla +="<!--img src='../imagenes/titulos-verifique-su-viaje.jpg' width='690' height='57' /-->";
	cadTabla +="</div><!-- head -->" ;         
	cadTabla +="<div class='contenido'>" + inter;
	
	cadTabla +="<table background='../imagenes/amigadatos.png' frame='box' cellpadding='9' width='70%' align='center' border='0'>";
	cadTabla +="<tr ><th align='center' height='100'>  </th></tr>";
	cadTabla +="<tr align='center'><td align='right'>N&uacute;mero de Tarjeta:</td>";
	cadTabla +="<td height='40' align='left'><input type='text' id='ntarjeta' name='ntarjeta' placeholder='1234567890123456'></td></tr>";
	cadTabla +="<tr align='center'><td align='right'>C&oacute;digo de Seguridad:</td>";
	cadTabla +="<td height='40' align='left'><input type='text' size='3' id='ncodigo' name='ncodigo' placeholder='123' maxlength='3'></td></tr>";
	cadTabla +="<tr align='center'><td align='right'>Fecha de Vencimiento:</td>";
	cadTabla +="<td height='40' align='left'><input type='text' size='2' id='nmes' name='nmes' placeholder='01' maxlength='2'> / ";
	cadTabla +="<input type='text' id='nano' size='2' name='nano' placeholder='15' maxlength='2'> Mes / A&ntilde;o</td></tr>";
	cadTabla +="</table><br><br><br> ";
	cadTabla +="<tr><td height='40'><b>"+leytra+"</b></td></tr>"
	cadTabla +="</div><!-- contenido -->";
	//
	$('#area').html(cadTabla);
    ocultamiestrab(true);
	//if(modo!=2 && sesion == 0) $('#datos').html('');
	$('#datos').html('');
// hgaytan 05 03 14
	$("#continuar").show();
		if (modo==1){
		$("#continuar").html('<a onclick="validacionesAmigo(1);" href="#" class="btn_ctr">Continuar ››</a>');}
		if (modo==2){
		$("#continuar").html('<a onclick="validacionesAmigo(2);" href="#" class="btn_ctr">Continuar ››</a>');}
	
    $("#regresar").html('');
}

function obtieneParam(elementoActualizar){

http = CreateRequest();
var url = "/netScripts/Request.aspx?APPNAME=navegante4&PRGNAME=getParam&ARGUMENTS=-ALEYTRA";

// Se manda el request
http.open("GET",url,true);
// Se establece el callback para manejar el resultado del request
http.onreadystatechange = function()
{ 
// Se valida que el request ya haya finalizado y que finalice ok
 if(http.readyState == 4){
	 if (http.status==200) {
		 //alert('in ' +http.responseText);
		 leytra=''+http.responseText;
		}//end if status
	}  //end if ready
}//end function onchange
http.send(null);
}

function obtieneParamMostrarTC(parametro){
http = CreateRequest();
var url = "/netScripts/Request.aspx?APPNAME=navegante4&PRGNAME=getParam&ARGUMENTS=-A"+parametro;

// Se manda el request
http.open("GET",url,true);
// Se establece el callback para manejar el resultado del request
http.onreadystatechange = function()
{ 
// Se valida que el request ya haya finalizado y que finalice ok
 if(http.readyState == 4){
	 if (http.status==200) {
		 //alert('in '+parametro+'' +http.responseText);
		 muestraTC=''+http.responseText;
		}//end if status
	}  //end if ready
}//end function onchange
http.send(null);
}

function obtieneParamMostrarTA(parametro){
http1 = CreateRequest();
var url = "/netScripts/Request.aspx?APPNAME=navegante4&PRGNAME=getParam&ARGUMENTS=-A"+parametro;

// Se manda el request
http1.open("GET",url,true);
// Se establece el callback para manejar el resultado del request
http1.onreadystatechange = function()
{ 
// Se valida que el request ya haya finalizado y que finalice ok
 if(http1.readyState == 4){
	 if (http1.status==200) {
		 //alert('in '+parametro+'' +http1.responseText);
		 muestraTA=''+http1.responseText;
		}//end if status
	}  //end if ready
}//end function onchange
http1.send(null);
} 

//Genera asientos ida y regreso
function generaAsientos(dia,modo){
	var botonida;
	var A="'B'";
	var B='"A"';
	var tviajeley='';
	var ocultabotones='';
	var num=0; 
	var anchotabla = 495;
	
	if(dia.Filas >10)
		anchotabla = 520;
		
	if(dia.Filas2do!=0) 
	{
		var segundopiso=true;
		if(dia.Filas2do>dia.Filas)
			dia.Filas = dia.Filas2do;
		if(dia.Filas>dia.Filas2do)
			dia.Filas2do = dia.Filas;
	}

	document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
	if(viinas == 'NO' && modo=='Regreso') num=100;
	if(viinas == 'NO' && redondo == 'SI') ocultabotones='style="display:none"';
	if(esint=='SI' && opeint!='' && claus!='' && mint!=0)
		var inter = '<table class="aviso" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">Est&aacute;s intercambiando n&uacute;mero(s) de operaci&oacute;n </td></tr><tr><td align="center" class="color1">'+ opeint +'</td></tr></table>';
	else var inter ='';
	if(modo=='ida') { generacadenaasientos(); 
    botonida= '-'+txt.AsientosSalida; 
	tviajeley=txt.ViajedeSalida;
	tviajeley1=txt.SelecAsientoSalidaSigPasaj;	}
	var x = adulto + insen + menor + estudiantes + maestros;
	var botonredondo;
	
	if(redondo == 'SI' && modo=='ida')
		botonredondo='<a href="#" onClick="javascript:paso=4;return adelante();" class="iframe">-'+txt.AsientosRegreso+'</a>';
	else
		botonredondo = '';
	if(redondo == 'SI' && modo=='Regreso'){ 
		botonredondo='-'+txt.AsientosRegreso;
		botonida = '<a href="#" onClick="javascript:paso=4;return asientos();>-'+txt.AsientosSalida+'</a>'; 
		tviajeley=txt.ViajedeRegreso;
		tviajeley1=txt.SelecAsientoRegresoSigPasaj;
		}
	if(redondo == 'SI' && modo=='Regreso' && viinas == 'NO')	$('#area2').empty();
	else	$('#area').empty();
	var div = $('<div>',{"class":"head"});
	var titulo;
	if(modo=='Regreso' && viinas == 'SI') titulo = $('<!--img>',{src:"../imagenes/titulos-seleccione-asientos.jpg",width:"690",height:"57"});
	else
	titulo = $('<!--img>',{src:"../imagenes/titulos-seleccione-asientos.jpg",width:"690",height:"57"});
	div.append(titulo);
	$('#area').append(div);
	var cadTabla = '<table border="0" align="center" cellpadding="0" cellspacing="0" class="fondoautobus" valign="center">'+
		'<tbody>';
		//'<tr>'+
		//'<td valign="bottom" align="left" rowspan="3">'+
		//'<img src="../imagenes/frente.jpg" width="48"  border="0"> '+
		//'</td>'+
		//'<td valign="top" align="left">&nbsp;</td>'+
		//'<td valign="bottom" align="left" rowspan="3">&nbsp;</td>'+
		//'</tr>'+
		
	if(segundopiso) 
		{			
			cadTabla +="<tr><td align='left' width=10% valign='center' ><img src='../imagenes/Piso_1.jpg' border'0' style='font-size: 10px'> </td>";
			cadTabla +='<td align="left" width=90%>'+
						'<table class="recuadroBlanco4" background="../imagenes/diagrama-camion.jpg"><tr><td width=50%">&nbsp;</td><td>'+
						'<table width="'+anchotabla+'" cellspacing="0" cellpadding="0" border="0">';
		}
		else 
		{	cadTabla +='<tr><td align="left" width=90%>'+
						'<table class="recuadroBlanco2" background="../imagenes/diagrama-camion.jpg"><tr><td width=50%">&nbsp;</td><td>'+
						'<table width="'+anchotabla+'" cellspacing="0" cellpadding="0" border="0">';
		}
		
	var i = 0, a = 0, r = 4, u = 52,f = 0;	
	do { 
		cadTabla += "<tr>";
		  a = r-1 ;
		  f = 1;
		  if (dia.NoCapturaUltFila == "S") f = 0;
		
		  cadTabla += "<td></td>";
		  do
		  {
	            cadTabla += "<td align='right'><font face='Arial' size='1' color=#345F85>"+dia.Asientos[a].Asientos.substring(1,3)+"</font>";	  
	     		if(modo=='ida') cadTabla += "<img id='A"+a+"'  width='34' height='25' src='../imagenes/"+dia.Asientos[a].Imagenes+"' border ='0' onClick='return  SeleccionaAsiento(this,"+a+","+B+");' ></td>";
				else cadTabla += "<img id='A"+(a+num)+"'  src='../imagenes/"+dia.Asientos[a].Imagenes+"' width='34' height='25' border ='0' onClick='return  SeleccionaAsientoR(this,"+a+","+B+");' ></td>";
				if(modo=='ida')	asiento.asientosaseleccion[dia.Asientos[a].Asientos]=a;
				else	asientoR.asientosaseleccion[dia.Asientos[a].Asientos]=a;
	     		a+=4;
	     		f++;
	      }while (f<dia.Filas)
	      if (dia.NoCapturaUltFila == "N")
	      {
	        cadTabla += "<td align='right'><font face='Arial' size='1' color=#345F85>"+dia.Asientos[a].Asientos.substring(1,3)+"</font>" ;
		    if(modo=='ida') cadTabla += "<img id='A"+u+"' width='34' height='25' src='../imagenes/"+dia.Asientos[u].Imagenes+"' border ='0' onClick='return  SeleccionaAsiento(this,"+u+","+B+");' ></td>";
			else cadTabla += "<img id='A"+(u+num)+"' width='34' height='25' src='../imagenes/"+dia.Asientos[u].Imagenes+"' border ='0' onClick='return  SeleccionaAsientoR(this,"+u+","+B+");' ></td>";
			if(modo=='ida')	asiento.asientosaseleccion[dia.Asientos[a].Asientos]=u;
			else	asientoR.asientosaseleccion[dia.Asientos[a].Asientos]=u;
			}		
	      if (r==3)
	      {
	         cadTabla += "</tr><tr><td align='right'><img id='A53'  src='../imagenes/"+dia.Asientos[53].Imagenes+"'  border ='0'></td>";
	         cadTabla += "<td align='center' colspan="+(dia.Filas - 1)+"><img border=0 src='../imagenes/logo_";
			 if(modo=='ida') cadTabla += corridaIda.EmpresaCorrida+".jpg' height=20 width=90 ></td>";
			 else cadTabla += corridaRegeso.EmpresaCorrida+".jpg' height=20 width=90 ></td>";
			 
	         u--;
	         cadTabla += "<td align='right'><font face='Arial' size='1' color=#345F85>"+dia.Asientos[a].Asientos.substring(1,3)+"</font>" ;	         
		     if(modo=='ida') cadTabla += "<img id='A"+u+"' width='34' height='25' src='../imagenes/"+dia.Asientos[u].Imagenes+"' border ='0' onClick='return  SeleccionaAsiento(this,"+u+","+B+");' ></td>";
			 else cadTabla += "<img id='A"+(u+num)+"'  width='34' height='25' src='../imagenes/"+dia.Asientos[u].Imagenes+"' border ='0' onClick='return  SeleccionaAsientoR(this,"+u+",);' ></td>";
			 if(modo=='ida')	asiento.asientosaseleccion[dia.Asientos[a].Asientos]=u;
			 else	asientoR.asientosaseleccion[dia.Asientos[a].Asientos]=u;
          }
     	  cadTabla += "</tr>";
	      u--;	
          r--;   
		  i++;
	} while (i<4)
	
	//jabrego; segundo piso
	if(segundopiso)
	{
	i = 0;
	a = 0; 
	r = 58;
	u = 106;
	f = 0;
	anchotabla = 495;
	
	if(dia.Filas2do>11)
		anchotabla = 620;
		
	cadTabla += "</table> </td><td width='10%'>&nbsp;</td></tr></table> </td></tr>";
    //cadTabla += "<tr><td align='right' width='10' valign='top' ><img src='../imagenes/izquierdo.jpg' border'0' style='font-size: 10px'> </td></tr>";
	//cadTabla += '<table border="0" align="center" cellpadding="0" cellspacing="0" class="fondoautobus" valign="center">'+
	cadTabla +=	'<tbody>'+
		//'<tr>'+
		//'<td valign="bottom" align="left" rowspan="3">'+
		//'<img src="../imagenes/frente.jpg" width="48"  border="0"> '+
		//'</td>'+
		//'<td valign="top" align="left">&nbsp;</td>'+
		//'<td valign="bottom" align="left" rowspan="3">&nbsp;</td>'+
		//'</tr>'+
		//'<tr>'+
		"<tr><td align='left' width=10% valign='center' ><img src='../imagenes/Piso_2.jpg' border'0' style='font-size: 10px'> </td>"+
		'<td align="right" width=90%>'+
		//'<table class="recuadroBlanco3" background="../imagenes/diagrama_segPiso.jpg"><td width=50%">&nbsp;</td><td>'+
		'<table class="recuadroBlanco3" background="../imagenes/diagrama_segPiso.jpg"><td>'+
		'<table width="'+anchotabla+'" cellspacing="0" cellpadding="0" border="0">';
	do { 
		cadTabla += "<tr>";
		  a = r-1 ;
		  f = 0;
		  if (dia.NoCapturaUltFila == "S") f = 0;
		  cadTabla += "<td></td>";
		  do
		  {
		        cadTabla += "<td align='right'><font face='Arial' size='1' color=#345F85>"+dia.Asientos[a].Asientos.substring(1,3)+"</font>";	  
	     		if(modo=='ida') cadTabla += "<img id='A"+a+"'  width='34' height='25' src='../imagenes/"+dia.Asientos[a].Imagenes+"' border ='0' onClick='return  SeleccionaAsiento(this,"+a+","+B+");' ></td>";
				else cadTabla += "<img id='A"+(a+num)+"'  src='../imagenes/"+dia.Asientos[a].Imagenes+"' width='34' height='25' border ='0' onClick='return  SeleccionaAsientoR(this,"+a+","+B+");' ></td>";
				if(modo=='ida')	asiento.asientosaseleccion[dia.Asientos[a].Asientos]=a;
				else	asientoR.asientosaseleccion[dia.Asientos[a].Asientos]=a;
	     		a+=4;
	     		f++;
	      }while (f<dia.Filas2do)
	      if (dia.NoCapturaUltFila == "N")
	      {
	        cadTabla += "<td align='right'><font face='Arial' size='1' color=#345F85>"+dia.Asientos[a].Asientos.substring(1,3)+"</font>" ;
		    if(modo=='ida') cadTabla += "<img id='A"+u+"' width='34' height='25' src='../imagenes/"+dia.Asientos[u].Imagenes+"' border ='0' onClick='return  SeleccionaAsiento(this,"+u+","+B+");' ></td>";
			else cadTabla += "<img id='A"+(u+num)+"' width='34' height='25' src='../imagenes/"+dia.Asientos[u].Imagenes+"' border ='0' onClick='return  SeleccionaAsientoR(this,"+u+","+B+");' ></td>";
			if(modo=='ida')	asiento.asientosaseleccion[dia.Asientos[a].Asientos]=u;
			else	asientoR.asientosaseleccion[dia.Asientos[a].Asientos]=u;
			}		
	      if (r==57)
	      {
	         cadTabla += "</tr><tr><td align='right'><img id='A107'  src='../imagenes/"+dia.Asientos[107].Imagenes+"'  border ='0'></td>";
	         cadTabla += "<td align='center' colspan="+(dia.Filas2do - 1)+"><img border=0 src='../imagenes/logo_";
			 if(modo=='ida') cadTabla += corridaIda.EmpresaCorrida+".jpg' height=20 width=90 ></td>";
			 else cadTabla += corridaRegeso.EmpresaCorrida+".jpg' height=20 width=90 ></td>";
			 
	         u--;
	         cadTabla += "<td align='right'><font face='Arial' size='1' color=#345F85>"+dia.Asientos[a].Asientos.substring(1,3)+"</font>" ;	         
		     if(modo=='ida') cadTabla += "<img id='A"+u+"' width='34' height='25' src='../imagenes/"+dia.Asientos[u].Imagenes+"' border ='0' onClick='return  SeleccionaAsiento(this,"+u+","+B+");' ></td>";
			 else cadTabla += "<img id='A"+(u+num)+"'  width='34' height='25' src='../imagenes/"+dia.Asientos[u].Imagenes+"' border ='0' onClick='return  SeleccionaAsientoR(this,"+u+",);' ></td>";
			 if(modo=='ida')	asiento.asientosaseleccion[dia.Asientos[a].Asientos]=u;
			 else	asientoR.asientosaseleccion[dia.Asientos[a].Asientos]=u;
          }
     	  cadTabla += "</tr>";
	      u--;	
          r--;   
		  i++;
		}while (i<4)
	var cuadroseleccion='';
	if(modo=='ida') 
	{
		cuadroseleccion = '<input name="textfield" type="text" id="textfieldAsi" size="3" class="color1" onkeyup = "if(event.keyCode == 12) return SeleccionaAsiento('+A+','+A+','+A+');" onBlur="return SeleccionaAsiento('+A+','+A+','+A+');"/></td>';
		datosp ='<td class="pad" id="campo_asiento"><span class="color1" id="pasajeroN">'+txt.Pasajero+' 1</span> <span  class="color2 conFlecha" id="nombrePasajero">' + pasajeros[0].value + '</span> <span  class="color3" id="tipoPasajero">' + tipoPas[0] + '</span> <span  class="color4">'+txt.AsientoMayus+'</span> ';
		}
		else 
		{
			cuadroseleccion='<input name="textfieldR" type="text" id="textfieldAsiR" size="3" class="color1" onkeyup = "if(event.keyCode == 32)return SeleccionaAsientoR('+A+','+A+','+A+');" onBlur="return SeleccionaAsientoR('+A+','+A+','+A+');"/></td>';
			datosp = '<td class="pad" id="campo_asientoR"><span class="color1" id="pasajeroNR">'+txt.Pasajero+' 1</span> <span  class="color2 conFlecha" id="nombrePasajeroR">' + pasajeros[0].value + '</span> <span  class="color3" id="tipoPasajeroR">' + tipoPas[0] + '</span> <span  class="color4">'+txt.AsientoMayus+'</span> ';
			}
	cadTabla += "</table> </td><td width='10%'>&nbsp;</td></tr></table> </td></tr>";
	//cadTabla += "<tr><td align='right' width='10' valign='top' ><img src='../imagenes/izquierdo.jpg' border'0' style='font-size: 10px'> </td></tr>";
	cadTabla += "</tbody></table>";
	}
	else
	{
    var cuadroseleccion='';
	if(modo=='ida') 
	{
		cuadroseleccion = '<input name="textfield" type="text" id="textfieldAsi" size="3" class="color1" onkeyup = "if(event.keyCode == 12) return SeleccionaAsiento('+A+','+A+','+A+');" onBlur="return SeleccionaAsiento('+A+','+A+','+A+');"/></td>';
		datosp ='<td class="pad" id="campo_asiento"><span class="color1" id="pasajeroN">'+txt.Pasajero+' 1</span> <span  class="color2 conFlecha" id="nombrePasajero">' + pasajeros[0].value + '</span> <span  class="color3" id="tipoPasajero">' + tipoPas[0] + '</span> <span  class="color4">'+txt.AsientoMayus+'</span> ';
		}
		else 
		{
			cuadroseleccion='<input name="textfieldR" type="text" id="textfieldAsiR" size="3" class="color1" onkeyup = "if(event.keyCode == 32)return SeleccionaAsientoR('+A+','+A+','+A+');" onBlur="return SeleccionaAsientoR('+A+','+A+','+A+');"/></td>';
			datosp = '<td class="pad" id="campo_asientoR"><span class="color1" id="pasajeroNR">'+txt.Pasajero+' 1</span> <span  class="color2 conFlecha" id="nombrePasajeroR">' + pasajeros[0].value + '</span> <span  class="color3" id="tipoPasajeroR">' + tipoPas[0] + '</span> <span  class="color4">'+txt.AsientoMayus+'</span> ';
			}
	cadTabla += "</table> </td><td width='10%'>&nbsp;</td></tr></table> </td></tr>";
	//cadTabla += "<tr><td align='right' width='10' valign='top' ><img src='../imagenes/izquierdo.jpg' border'0' style='font-size: 10px'> </td></tr>";
	cadTabla += "</tbody></table>";
	}
	var div2 = $('<div>',{"class":"contenido"});
	div2.html( inter + '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
		'<tr>'+
                    '<td><table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                      '<tr><td width="50%" align="right" class="botonesAsientos" '+ocultabotones+'>'+ botonida +'</td></tr>'+
					  '<tr><td width="50%" align="right" class="botonesAsientos" '+ocultabotones+'>'+ botonredondo +'</td></tr>'+
					  '<tr><td>&nbsp;</td></tr>'+
					  '<tr><td width="50%"><strong class="20_puntos verde_1 negritas">'+ tviajeley +'</strong></td></tr>'+
                    '</table></td>'+
                  '</tr>'+
                  '<tr>'+
                    '<td class="pad">'+tviajeley1+'</td>'+
                  '</tr>'+
                   '<tr><td>&nbsp;</td></tr>'+
                   '<tr>'+
                     //'<td class="recuadroBlanco2">'+ cadTabla +
					 '<td>'+ cadTabla +
					'</td>'+
                   '</tr>'+ 
                   '<tr>'+
				   datosp +
                     '<label for="textfield"></label>'+
                     cuadroseleccion +
                   '</tr>'+
                '</table>'
	);
	if(redondo == 'SI' && modo=='Regreso' && viinas == 'NO')	$('#area2').append(div2);
	else	$('#area').append(div2);
    ocultamiestrab(true);
}


//Genera error
function generaError(mensaje){  
	var cadTable = 
		'<div class="contenido">'+
		'<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
		'<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>'+
		'<tr>'+
		'<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
		'<tr>'+
		'<td width="8%" align="right"></td>'+
		'<td width="3%">&nbsp;</td>'+
		'<td width="27%" class="color7"><strong>Aviso</strong></td>'+
		'<td width="31%" class="color3"><label for="textfield"></label></td>'+
		'<td align="center"><label for="radio"></label></td>'+
	    '</tr>'+
		'<tr>'+
		'<td align="right">&nbsp;</td>'+
		'<td>&nbsp;</td>'+
		'<td colspan="3" class="color2">'+ mensaje +'</td>'+
	    '</tr>'+
		'</table></td>'+
	    '</tr>'+
		' <tr>'+
		'<td>&nbsp;</td>'+
	    '</tr>'+
	    '</table></div>';
		
		document.getElementById("continuar").innerHTML = '';
		document.getElementById("regresar").innerHTML = '';
return cadTable;	
}



//Filtro CE agencias
function generaFiltroAgencia(){
var fecha=new Date();
var diaactual=fecha.getDate();
var mesactual=fecha.getMonth()+1;
var anoactual=fecha.getFullYear();
var fechaactual='';
	if( diaactual < 10)
		fechaactual = '0'+diaactual;
	else
		fechaactual = diaactual;
	if( mesactual < 10)
		fechaactual += "/0"+mesactual+"/"+anoactual;
	else
		fechaactual += "/"+mesactual+"/"+anoactual;

if(esint=='SI' && opeint!='' && claus!='' && mint!=0)
var inter = '<table class="aviso" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">Estas intercambiando n&uacute;mero(s) de operaci&oacute;n </td></tr><tr><td align="center" class="color1">'+ opeint +'</td></tr></table>';
else var inter ='';

	var cadTable = "<div id='banners_titulos'><!--img src='../imagenes/titulos-verifique-su-viaje.jpg'/></div><br /--><!-- head -->" ;
	cadTable += "<div id='contenidos_generales'>";
	cadTable += "<span class='verde_1 negritas'>VENTA EN L&Iacute;NEA A TRAV&Eacute;S DE AGENCIAS</span><br /><br />";

	cadTable += "<form>" + inter;
	cadTable += "<label>";
	cadTable += "<input type='radio' name='tipoViaje' value='V1' id='tipoViaje_0'  onClick='Viajesencillo();' checked='checked'/></input>";
	cadTable += "Viaje Sencillo</label>";
	cadTable += "<label>";
	cadTable += "<input type='radio' name='tipoViaje' value='V2' id='tipoViaje_1' onClick='Viajeredondo();'/></input>";
	cadTable += "Viaje Redondo</label></td>";
	cadTable += "<br /><br />";
	
	cadTable += "<label for='textfield'>Origen: </label>";
	cadTable += "<span id='tdOrigenAge'><select name='Origen' id='Origen' style='width:150px;' onChange='return cargaDestinosANT(this)'>";
	cadTable += "<option>ORIGEN</option></select></span>";
	cadTable += "<br /><br />";
	
	cadTable += "<label for='textfield2'>Destino: </label>";
	cadTable += "<span id='tdDestinoAge'><select name='Destino' id='Destino' style='width:150px;'>";
	cadTable += "<option>DESTINO</option></select></span>";
	cadTable += "<br /><br />";

	cadTable += "<label for='textfield2'>Fecha de Salida: </label>";
	cadTable += "<label for='textfield7'></label>";
	cadTable += "<input name='Fechabox0' type='text' id='fsalida' size='10' value='"+fechaactual+"' />";
	cadTable += "<br /><br />";

	cadTable += "<table class='primera' width='270' border='0' cellspacing='0' cellpadding='0'>";
	cadTable += "<tr id='FRegreso'>";
	cadTable += "<td><label for='textfield10'>Fecha de regreso: </label></td>";
	cadTable += "<td width='140' height='30'><input name='Fechabox' type='text' id='regreso' size='10' value='"+fechaactual+"' /></td>";
	cadTable += "</tr>";
	cadTable += "</table>";
	cadTable += "<br />";
	
	cadTable += "<label for='textfield5'>Adulto: </label>";
	cadTable += "<select name='Adulto' id='Adulto'>";
	for (x=0;x<=24;x++)
		cadTable += "<option value="+x+"> "+x+"</option>"	;
	cadTable += "</select>";
	
	cadTable += "<label for='textfield5'>&nbsp;&nbsp;&nbsp;Menor: </label>";
	cadTable += "<select name='Nino' id='Nino'>";
	for (x=0;x<=24;x++)
		cadTable += "<option value="+x+"> "+x+"</option>"	;
	cadTable += "</select>";
	
	cadTable += "<label for='textfield9'>&nbsp;&nbsp;&nbsp;Senectud: </label>";
	cadTable += "<select name='Insen' id='Insen'>";
	for (x=0;x<=24;x++)
		cadTable += "<option value="+x+"> "+x+"</option>"	;
	cadTable += "</select>";
	
	cadTable += "<label for='textfield10'>&nbsp;&nbsp;&nbsp;Estudiante: </label>";
	cadTable += "<select name='Estudiante' id='Estudiante'>";
	for (x=0;x<=24;x++)
		cadTable += "<option value="+x+"> "+x+"</option>";	
	cadTable += "</select>";
	
	cadTable += "<label for='textfield11'>&nbsp;&nbsp;&nbsp;Profesor: </label>";
	cadTable += "<select name='Maestro' id='Maestro'>";
	for (x=0;x<=24;x++)
		cadTable += "<option value="+x+"> "+x+"</option>";
	cadTable += "</select>";
	cadTable += "<br /><br /><br />";
	cadTable += "</form></div><!-- contenido -->";
	
	$("#nav").html('');
	$("#edopasos").html('');
	$("#area").html(cadTable);
	datos();

	$("#franja").css({ background: "url(../imagenes/bg_franja_agencias.jpg)" });
	$("#regreso").datepicker({ showOn: 'button', buttonImageOnly: true, buttonImage: '../imagenes/calendario.png' });
	$("#fsalida").datepicker({ showOn: 'button', buttonImageOnly: true, buttonImage: '../imagenes/calendario.png' });
	$("#continuar").show();
	//$("#continuar").html('<a onclick="return adelante();" href="#"><img width="107" height="26" border="0" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage(\'imgSiguiente\',\'\',\'../imagenes/btn_continuar_over.jpg\',1)" id="imgSiguiente" src="../imagenes/btn_continuar.jpg" class="botonNav"></a>')
    $("#continuar").html('<a onclick="return adelante();" href="#" class="btn_ctr">Continuar ››</a>');
	$("#regresar").html('');
	cargaOrigenesANT()
}


//Filtro NE agencias
function generaFiltroAbierto(){	

// jaflores Jun/2013 Se agrega funcionalidad de Intercambio de Boletos Abiertos
if(esint=='SI' && opeint!='' && claus!='' && mint!=0)
var inter = '<table class="aviso" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">Estas intercambiando n&uacute;mero(s) de operaci&oacute;n </td></tr><tr><td align="center" class="color1">'+ opeint +'</td></tr></table>';
else var inter ='';
	
	var cadTable = "<div id='banners_titulos'><img src='../imagenes/titulos-verifique-su-viaje.jpg'/></div><br /><!-- head -->" ;
	cadTable += "<div id='contenidos_generales'>";
	cadTable += "<span class='verde_1 negritas'>VENTA DE BOLETOS ABIERTOS PARA AGENCIAS</span><br /><br />";
	
	cadTable += "<form>"+inter;
	cadTable += "<label>";
	cadTable += "<input type='radio' name='tipoViaje' value='V1' id='tipoViaje_0'  />";
	cadTable += "Viaje Sencillo</label>";
	cadTable += "<label>";
	cadTable += "<input type='radio' name='tipoViaje' value='V2' id='tipoViaje_1' />";
	cadTable += "Viaje Redondo</label>";
	cadTable += "<br /><br />";
	
	cadTable += "<label for='textfield'>Origen: </label></td>";
	cadTable += "<span id='tdOrigenAge'><select name='Origen' id='Origen' onChange='cargaDestinos(this)' style='width:150px;'>";
	cadTable += "<option>ORIGEN</option></select></span>";
	cadTable += "<br /><br />";
	
	cadTable += "<label for='textfield2'>Destino: </label></td>";
	cadTable += "<span id='tdDestinoAge'><select name='Destino' id='Destino' style='width:150px;'>";
	cadTable += "<option>DESTINO</option></select></span>";
	cadTable += "<br /><br />";
	
    cadTable += "<label for='textfield2'>Clase de servicio: </label><label for='textfield7'></label>";
    cadTable += "<select name='select3' id='select3'>";
	for(x=0;x<object_servicio.length;x++){
		cadTable += "<option value="+object_servicio[x].claveServicio+"> "+object_servicio[x].descripcionSer+"</option>";	
	}
    cadTable += "</select>";
	cadTable += "<br /><br />";
	
	cadTable += "<label for='textfield5'>Adulto: </label>";
	cadTable += "<select name='Adulto' id='Adulto'>";
	for (x=0;x<=10;x++)
		cadTable += "<option value="+x+"> "+x+"</option>"	;
	cadTable += "</select>";
	
	cadTable += "<label for='textfield5'>&nbsp;&nbsp;&nbsp;Menor: </label>";
	cadTable += "<select name='Nino' id='Nino'>";
	for (x=0;x<=10;x++)
		cadTable += "<option value="+x+"> "+x+"</option>";	
	cadTable += "</select>";
	
	cadTable += "<label for='textfield9'>&nbsp;&nbsp;&nbsp;Senectud: </label>";
	cadTable += "<select name='Insen' id='Insen'>";
	for (x=0;x<=10;x++)
		cadTable += "<option value="+x+"> "+x+"</option>";
	cadTable += "</select>";
	
	cadTable += "<label for='textfield10'>&nbsp;&nbsp;&nbsp;Estudiante: </label>";
	cadTable += "<select name='Estudiante' id='Estudiante'>";
	for (x=0;x<=10;x++)
		cadTable += "<option value="+x+"> "+x+"</option>";
	cadTable += "</select>";
	
	cadTable += "<label for='textfield11'>&nbsp;&nbsp;&nbsp;Profesor: </label>";
	cadTable += "<select name='Maestro' id='Maestro'>";
	for (x=0;x<=10;x++)
		cadTable += "<option value="+x+"> "+x+"</option>";
	cadTable += "</select>";
	cadTable += "<br /><br /><br />";
	
	cadTable += "</form></div><!-- contenido -->";
	
	$("#nav").html('');
	$("#edopasos").html('');
	$("#area").html(cadTable);
	datos();
	habilitarArea("Abierto");
	$("#franja").css({ background: "url(../imagenes/bg_franja_agencias.jpg)" });
	$("#regreso").datepicker({ showOn: 'button', buttonImageOnly: true, buttonImage: '../imagenes/calendario.png' });
	$("#fsalida").datepicker({ showOn: 'button', buttonImageOnly: true, buttonImage: '../imagenes/calendario.png' });
	$("#continuar").show();
	//$("#continuar").html('<a onclick="return adelante();" href="#"><img width="107" height="26" border="0" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage(\'imgSiguiente\',\'\',\'../imagenes/btn_continuar_over.jpg\',1)" id="imgSiguiente" src="../imagenes/btn_continuar.jpg" class="botonNav"></a>');
    $("#continuar").html('<a onclick="return adelante();" href="#" class="btn_ctr">Continuar ››</a>');
    $("#regresar").html('');
	cargaOrigenesANT()
}


//Genera cancelacion  pantalla inicial
function cancelacion() {
termina();
if(viinco == 'NO') { document.getElementById("area2").innerHTML="";  document.getElementById("area2").style.display="none"; }
personalizat = false;
document.getElementById("counter").innerHTML = '';
$('dt').removeClass('textos_resumen_current');
$('#Cancelaci&oacute;n').addClass('textos_resumen_current');
if(paso==6) desbloqueoasientoatras(0);
var sig="'";
esint='NO'; opeint=''; mint=0;
var cadTabla = '<div class="head"> <img src="../imagenes/titulo_cancelacion.jpg" width="690" height="57" /> </div>'+
		'<div class="contenido">'+
		  '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
			'<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>'+
		    '<tr>'+
		      '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
		        '<tr>'+
		          '<td width="8%" align="right"></td>'+
		          '<td width="3%">&nbsp;</td>'+
		          '<td width="27%" class="color1 resR" align="right"><strong>N&uacute;mero de operaci&oacute;n:</strong></td>'+
		          '<td width="31%" class="color1"><label for="textfield"></label>'+
		            '<input type="text" name="textfield3" id="textfieldop" /></td>'+
		          '<td align="center"><label for="radio"></label></td>'+
	            '</tr>'+
		        '<tr>'+
		          '<td align="right"></td>'+
		          '<td>&nbsp;</td>'+
		          '<td class="color1 resR"><strong>NIT:</strong></td>'+
		          '<td class="color1"><input type="text" name="textfield3" id="textfield3Nit" /></td>'+
		          '<td align="center" class="">&nbsp;</td>'+
	            '</tr>'+
		        '</table></td>'+
	        '</tr>'+
		    '<tr>'+
		      '<td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
		        '<tr>'+
		          '<td class="res"><input type="button" onclick="return validacancelacion();" name="enviar" id="enviar" value="Enviar" /></td>'+
	            '</tr>'+
		        '</table></td>'+
	       '</tr>'+
		    '<tr>'+
		      '<td>&nbsp;</td>'+
	        '</tr>'+
	      '</table>'+
		'</div>'+
'</div>';
 document.getElementById("area").innerHTML = cadTabla;
 document.getElementById("continuar").innerHTML = '';
 document.getElementById("regresar").innerHTML = '';
 
}


//Genera intercambio  pantalla inicial
function intercambio(){
termina();
if(viinco == 'NO') { document.getElementById("area2").innerHTML="";  document.getElementById("area2").style.display="none"; }
personalizat = false;
document.getElementById("counter").innerHTML = '';
$('dt').removeClass('textos_resumen_current');
$('#Intercambio').addClass('textos_resumen_current');
if(paso==6) desbloqueoasientoatras(0);
var sig="'";
esint='NO'; opeint=''; mint=0;
var cadTabla= '<div class="head">'+
          '<img src="../imagenes/titulo_intercambio.jpg" width="690" height="57" />'+
          '</div>'+
	'<div class="contenido">'+
		  '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
		  '<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>'+
		    '<tr>'+
		      '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
		        '<tr>'+
		          '<td width="8%" align="right"></td>'+
		          '<td width="3%">&nbsp;</td>'+
		          '<td width="27%" class="color1 resR"><strong>N&uacute;mero de operaci&oacute;n:</strong></td>'+
		         '<td width="31%" class="color3"><label for="textfield"></label>'+
		            '<input type="text" name="textfield3" id="textfieldint" /></td>'+
		          '<td align="center"><label for="radio"></label></td>'+
	            '</tr>'+				
		        '</table></td>'+
	        '</tr>'+
			'<table width="640" border="0" align="center">'+
			'<td>'+
			'<label><input type="radio" name="tipoOper" value="V1" id="tipoOper_C"  checked="checked"/></input>'+
			'Confirmado</label>'+
			'<label>'+
			'<input type="radio" name="tipoOper" value="V2" id="tipoOper_N" /></input>'+
			'No Confirmado</label></td></table>'+
			'<tr>'+
		      '<td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
		        '<tr>'+
		          '<td class="res"><input type="button" onclick="return validaintercambio();" name="enviar" id="enviar" value="Enviar" /></td>'+
	            '</tr>'+
		        '</table></td>'+
	       '</tr>'+
		   '<td align="right">&nbsp;</td>'+
		   '<tr>'+
		      '<td>&nbsp;</td>'+
	        '</tr>'+
	      '</table>'+
		'</div>';
 document.getElementById("area").innerHTML = cadTabla;
 document.getElementById("continuar").innerHTML = '';
 document.getElementById("regresar").innerHTML = '';
}


//Genera contraseña pantalla inicial
function contrasena(){
termina();
if(viinco == 'NO') { document.getElementById("area2").innerHTML="";  document.getElementById("area2").style.display="none"; }
personalizat = false;
document.getElementById("counter").innerHTML = '';
$('dt').removeClass('textos_resumen_current');
$('#Cambiar').addClass('textos_resumen_current');
if(paso==6) desbloqueoasientoatras(0);
var sig="'";
esint='NO'; opeint=''; mint=0;
var cadTabla='<div class="head">'+
          '<img src="../imagenes/titulo_cambioContrasena.jpg" width="690" height="57" />'+
          '</div>'+
 '<div class="contenido">'+
                '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
				'<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>'+
                  '<tr>'+
                    '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
                      '<tr>'+
                        '<td width="8%" align="right"></td>'+
                        '<td width="3%">&nbsp;</td>'+
                        '<td width="27%" class="color1 resR"><strong>Contrase&ntilde;a actual:</strong></td>'+
                        '<td width="31%" class="color3"><label for="textfield"></label>'+
                        '<input type="password" name="textfield" id="contraactual" /></td>'+
                        '<td align="center"><label for="radio"></label></td>'+
                      '</tr>'+
                      '<tr>'+
                        '<td align="right"></td>'+
                        '<td>&nbsp;</td>'+
                        '<td class="color1 resR"><strong>Contrase&ntilde;a nueva:</strong></td>'+
                        '<td class="color3"><input type="password" name="textfield2" id="nvacon" /></td>'+
                        '<td align="center" class=>&nbsp;</td>'+
                      '</tr>'+
                      '<tr>'+
                        '<td align="right"></td>'+
                        '<td>&nbsp;</td>'+
                        '<td class="color1 resR"><strong>Confirmar Contrase&ntilde;a:</strong></td>'+
                        '<td class="color3"><input type="password" name="textfield3" id="confcontra" /></td>'+
                        '<td align="center" class="color3">&nbsp;</td>'+
                      '</tr>'+
                    '</table></td>'+
                  '</tr>'+
                  ' <td>&nbsp;</td>'+
                  '</tr>'+
                '</table>'+
			'</div>';
document.getElementById("area").innerHTML = cadTabla;
//document.getElementById("continuar").innerHTML = "<a href='#' onClick='return validacontrasena();'><img src='../imagenes/btn_continuar.jpg' class = 'botonNav' width='140' height='35' border='0' id='Image11' onmouseover=\"MM_swapImage('Image11','','../imagenes/btn_continuar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";
document.getElementById("continuar").innerHTML = "<a href='#' onClick='return validacontrasena();' class='btn_ctr'>Continuar ››</a>";
document.getElementById("regresar").innerHTML = '';
}


//Genera Movimientos  pantalla inicial
function movimientos(){
termina();
if(viinco == 'NO') { document.getElementById("area2").innerHTML="";  document.getElementById("area2").style.display="none"; }
personalizat = false;
document.getElementById("counter").innerHTML = '';
$('dt').removeClass('textos_resumen_current');
$('#Movimientos').addClass('textos_resumen_current');
if(paso==6) desbloqueoasientoatras(0);
var sig="'";
esint='NO'; opeint=''; mint=0;
var fecha=new Date();
var diaactual=fecha.getDate();
var mesactual=fecha.getMonth()+1;
var anoactual=fecha.getFullYear();
if (diaactual <10) diaactual = "0" + diaactual;
if (mesactual <10) mesactual = "0" + mesactual; 
var cadTabla='<div class="head">'+
          '<img src="../imagenes/titulo_movimientos.jpg" width="690" height="57" />'+
          '</div>'+
        '<div class="contenido">'+
		  '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
		  '<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>'+
		    '<tr>'+
		      '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
		        '<tr>'+
		          '<td width="8%" align="right"></td>'+
		          '<td width="3%">&nbsp;</td>'+
		          '<td width="27%" class="color1 resR"><strong>Fecha inicial:</strong></td>'+
		          '<td width="31%" class="color3"><label for="textfield"></label>'+
	              '<input name="textfield" type="text" id="textfieldA" value="'+ "01" +"/"+ mesactual +"/"+ anoactual +'" /></td>'+
		          '<td align="center"><label for="radio"></label></td>'+
	            '</tr>'+
		        '<tr>'+
		         '<td align="right"></td>'+
		          '<td>&nbsp;</td>'+
		          '<td class="color1 resR"><strong>Fecha final:</strong></td>'+
		          '<td class="color3"><input name="textfield2" type="text" id="textfield2B" value="'+ diaactual +"/"+ mesactual +"/"+ anoactual +'" /></td>'+
		          '<td align="center" class="">&nbsp;</td>'+
	            '</tr>'+
		        '</table></td>'+
	        '</tr>'+
		    '<tr>'+
		      '<td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
		        '<tr>'+
		          '<td class="res"><input type="button" onclick="return validamovimientos();" value="Enviar" /></td>'+
	            '</tr>'+
		        '</table></td>'+
	        '</tr>'+
		    '<tr>'+
		      '<td>&nbsp;</td>'+
	        '</tr>'+
	      '</table>'+
		'</div>';
document.getElementById("area").innerHTML = cadTabla;
document.getElementById("continuar").innerHTML = '';
document.getElementById("regresar").innerHTML = '';

$(document).ready(function(){
$("#textfieldA").datepicker({ showOn: 'button', buttonImageOnly: true, buttonImage: '../imagenes/calendario.png' });
$("#textfield2B").datepicker({ showOn: 'button', buttonImageOnly: true, buttonImage: '../imagenes/calendario.png' });
});
}


//Genera Saldos pantalla inicial
function generaSaldos(saldos){
var cadtabla='';
var sig="'";
if(saldos.Error!=''){
	cadtabla='<div class="head">'+
          '<img src="../imagenes/titulo_saldos.jpg" width="690" height="57" />'+
          '</div>'+
		  '<div class="contenido">'+
		  '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
		    '<tr>'+
		      '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
		        '<tr>'+
		          '<td width="8%" align="right"></td>'+
		          '<td width="3%">&nbsp;</td>'+
		          '<td width="27%" class="color7"><strong>ERROR</strong></td>'+
		          '<td width="31%" class="color3"><label for="textfield"></label></td>'+
		          '<td align="center"><label for="radio"></label></td>'+
	            '</tr>'+
		        '<tr>'+
		          '<td align="right">&nbsp;</td>'+
		          '<td>&nbsp;</td>'+
		          '<td colspan="3" class="color2">'+ saldos.Error +'</td>'+
	            '</tr>'+
		        '</table></td>'+
	       ' </tr>'+
		   ' <tr>'+
		      '<td>&nbsp;</td>'+
	        '</tr>'+
	      '</table>'+
		'</div>';
		document.getElementById("continuar").innerHTML = '';
	}
else
{
cadtabla='<div class="head">'+
          '<img src="../imagenes/titulo_saldos.jpg" width="690" height="57" />'+
          '</div>'+
 '<div class="contenido">'+
                '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
				'<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>'+
                  '<tr>'+
                   '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
                    '<tr>'+
                        '<td width="8%" align="right"></td>'+
                        '<td width="3%">&nbsp;</td>'+
                        '<td width="27%" class="color1 resR"><strong>Saldo a depositar:</strong></td>'+
                        '<td width="31%" class="color7"><label for="textfield"><strong>$'+ saldos.Asaldoagencia +'</strong></label></td>'+
                        '<td align="center"><label for="radio"></label></td>'+
                     '</tr>'+
                      '<tr>'+
                        '<td align="right"></td>'+
                        '<td>&nbsp;</td>'+
                        '<td class="color1 resR"><strong>Monto en ficha:</strong></td>'+
                        '<td class="color3"><input type="text" name="textfield2" id="saldoadepositar" /></td>'+
                        '<td align="center" class=>&nbsp;</td>'+
                      '</tr>'+
                      '<tr>'+
                        '<td align="right">&nbsp;</td>'+
                        '<td>&nbsp;</td>'+
                        '<td class="color2">&nbsp;</td>'+
                        '<td class="color3">&nbsp;</td>'+
                        '<td align="center" class="color3">&nbsp;</td>'+
                     '</tr>'+
                      '<tr>'+
                        '<td align="right">&nbsp;</td>'+
                        '<td>&nbsp;</td>'+
			           '<td colspan="3" class="res">Presione <strong>&quot;Continuar&quot;</strong> para emitir la ficha de dep&oacute;sito</td>'+
                      '</tr>'+
                    '</table></td>'+
                  '</tr>'+
					'<tr>'+
                    '<td>&nbsp;</td>'+
                  '</tr>'+
                '</table></div>';
				//document.getElementById("continuar").innerHTML = "<a href='#' onClick='return validasaldos("+ saldos.saldoagencia +");'><img src='../imagenes/btn_continuar.jpg' class = 'botonNav' width='140' height='35' border='0' id='Image11' onmouseover=\"MM_swapImage('Image11','','../imagenes/btn_continuar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";
                document.getElementById("continuar").innerHTML = "<a href='#' onClick='return validasaldos("+ saldos.saldoagencia +");' class='btn_ctr'>Continuar ››</a>";
             
			}
return cadtabla;
}


//Genera ficha agencias para deposito
function generaficha(ficha){
var sig="'";
var cadtabla='<div class="head">'+
          '<img src="../imagenes/titulo_saldos.jpg" width="690" height="57" />'+
          '</div>'+
			'<div class="contenido">'+
                '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
                  '<tr>'+
                    '<td class="recuadroBlanco" id="fichaim"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
                       '<tr>'+
                        '<td colspan="5"><span class="color5"><strong>FICHA DE DEP&oacute;SITO</strong></span><strong class="color7"> AGENCIA </strong></td>'+
                      '</tr>'+
                      '<tr>'+
                        '<td width="6%" align="right"></td>'+
                        '<td width="2%">&nbsp;</td>'+
                        '<td width="36%" class="color2">AGENCIA:</td>'+
                        '<td width="53%" class="color3"><strong>'+ ficha.agencia +'</strong></td>'+
                        '<td width="3%" align="center">&nbsp;</td>'+
                      '</tr>'+
                      '<tr class="colorB">'+
                        '<td align="right"></td>'+
                        '<td>&nbsp;</td>'+
                        '<td class="color2">BANCO:</td>'+
                        '<td class="color3"><strong>'+ ficha.banco +'</strong></td>'+
                        '<td align="center" class=>&nbsp;</td>'+
                      '</tr>'+
                      '<tr>'+
                        '<td align="right"></td>'+
                        '<td>&nbsp;</td>'+
                        '<td class="color2">SUCURSAL</td>'+
                        '<td class="color3"><strong>'+ ficha.sucursal +'</strong></td>'+
                        '<td align="center" class="color3">&nbsp;</td>'+
                      '</tr>'+
                      '<tr class="colorB">'+
                        '<td align="right"></td>'+
                        '<td>&nbsp;</td>'+
                        '<td class="color2">CUENTA:</td>'+
                        '<td class="color3"><strong>'+ ficha.cuenta +'</strong></td>'+
                        '<td align="center" class="color3">&nbsp;</td>'+
                      '</tr>'+
                      '<tr>'+
                        '<td align="right"></td>'+
                        '<td>&nbsp;</td>'+
                        '<td class="color2">N&Uacute;MERO DE REF. INTERBANCARIA:</td>'+
                        '<td class="color3"><strong>'+ ficha.referencia +'</strong></td>'+
                        '<td align="center" class="color3">&nbsp;</td>'+
                      '</tr>'+
                      '<tr class="colorB">'+
                        '<td align="right"></td>'+
                        '<td>&nbsp;</td>'+
                        '<td class="color2">CANTIDAD A DEPOSITAR:</td>'+
                        '<td class="color3"><strong>$'+ ficha.cantidad +'</strong></td>'+
                        '<td align="center" class="color3">&nbsp;</td>'+
                      '</tr>'+
                    '</table></td>'+
                  '</tr>'+
                  '<tr>'+
                    '<td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
                      '<tr>'+
                        '<td width="319"><input type="button" onClick='+sig+'saldos();'+sig+' name="Regresar" id="Regresar" value="Regresar" /></td>'+
                        '<td width="321" align="right" style="padding:0px 0px 0px 500px"><input type="button" onClick="javascript:imprSelec('+sig+'fichaim'+sig+');" name="Imprimir" id="Imprimir" value="Imprimir" /></td>'+
                      '</tr>'+
                    '</table></td>'+
                 '</tr>'+
                  '<tr>'+
                    '<td>&nbsp;</td>'+
                  '</tr>'+
                '</table> </div>';
return cadtabla;
}


//Genera Datos segun el paso (Informacion lado izquierdo)
function datos(d,x){
var j=0;
var costo='';
var descuento=0;
document.getElementById("datos").className ="textos_resumen";
	//De acuerdo al punto(x) se tiene que actualizar los datos que se mostraran
	if (sesion == 0|| vendir){
		var i = 0;
		//alert(objeto.length)
		d= "<table width=1000px><tr class='cintaverde'><td>"+txt.RESUMEN+"</td></tr></table>";
		d+="<table class='tablaresumen'>"
		d+="<tr><td><span class='verde_2 negritas'>"+txt.Pasajeros+"</span></td><td width='20px'></td>";	
		d+="<td><span class='verde_2 negritas' >"+txt.fechaSalida+"</span></td><td width='20px'></td>";
		d+="<td><span class='verde_2 negritas' >"+txt.Origen+"</span></td><td width='20px'></td>";
		d+="<td><span class='verde_2 negritas' >"+txt.Destino+"</span></td><td width='20px'></td>";
		if(x > 1 ){
			d+="<td><span class='verde_2 negritas'>"+txt.Horario+"</span></td><td width='20px'></td>" ; 
		}
		if (redondo == 'SI'){
			d+="<td><span class='verde_2 negritas'>"+txt.fechaRegreso+"</span></td><td width='20px'></td>";
			d+="<td><span class='verde_2 negritas'>"+txt.Origen+"</span></td><td width='20px'></td>";
			d+="<td><span class='verde_2 negritas'>"+txt.Destino+"</span></td><td width='20px'></td>";
			if(x > 2 ){
				d+="<td><span class='verde_2 negritas'>"+txt.Horario+"</span></td><td width='20px'></td>" ; 
			}
			
		}
		d+="</tr><tr><td>";
		if (adulto>0) d+="<span class='gris_medio negritas'>"+txt.Adultos+": </span><span class='verde_2 negritas'>"+adulto+"</span></em><br />";
		if (menor>0) d+="<span class='gris_medio negritas'>"+txt.Ninios+": </span><span class='verde_2 negritas'>"+menor+"</span></em><br />";
		if (insen>0) d+="<span class='gris_medio negritas'>"+txt.Insen+": </span><span class='verde_2 negritas'>"+insen+"</span></em><br />";
		if (estudiantes>0) d+="<span class='gris_medio negritas'>"+txt.Estudiantes+": </span><span class='verde_2 negritas'>"+estudiantes+"</span></em><br />";
		if (maestros>0) d+="<span class='gris_medio negritas'>"+txt.Maestros+": </span><span class='verde_2 negritas'>"+maestros+"</span></em><br />";		
		d+="</td><td></td><td><span class='gris_medio negritas' >"+fechasal+"</span></td><td></td>";
		d+="<td><span class='gris_medio negritas' >"+oficinaori+"</span></td><td></td>";
		d+="<td><span class='gris_medio negritas' >"+oficinareg+"</span></td><td></td>";
		if(x > 1 ){
			d+="<td><span class='gris_medio negritas'>"+corridaIda.HoraSalida+"</span></td><td></td>";
		}
		if (redondo == 'SI'){
			d+="<td><span class='gris_medio negritas'>"+fechareg+"</span></td><td></td>";
			d+="<td><span class='gris_medio negritas'>"+oficinareg+":</span></td><td></td>";
			d+="<td><span class='gris_medio negritas'>"+oficinaori+"</span></td><td></td>";
			if(x > 2 ){
				d+="<td><span class='gris_medio negritas'>"+corridaRegeso.HoraSalida+"</span></td><td></td>";
			}
			
		}
		d+="</tr>";
		
		if(x>=3 && x<=6){
			d+="<tr style='font-size:14px;'><span class='color2'>"+txt.totalMay+"</span> <span class='color1'><strong>$"+object_personaliza.CostoTotal+"</strong></span></tr>";
		}
		
		
		d+="</table>";
		
		d+= "<table width=1000px><tr class='cintaverde2'><td>"+oficinaori+" - "+oficinareg+"</td><td width 600px></td><td>"+fechaenletra(fechasal)+"</td></tr></table>";
		if (redondo=='SI'){
		d+="<table width=1000px><tr class='cintaverde2'><td>"+oficinareg+" - "+oficinaori+"</td><td width 600px></td><td>"+fechaenletra(fechareg)+"</td></tr></table>";
		}
			
		//d+= "<tr><img style='margin-left:-15px; margin-top:10px;' src='../imagenes/separador_200.png'></tr>"
		
		/*if(x>=3 && x<6){			
			d+="<p style='font-size:14px;'><span class='color2'>"+txt.Costo+":</span> <span class='color1'><strong>$"+object_personaliza.CostoTotal+"*</strong></span></p>";
			d+="<p><span class='color1'><strong>"+txt.ViajeSalida+"</strong></span><strong><br />";
			
			
			while (object_personaliza.PasajerosIda[i]){	
				//Este if queda obsoleto temporalmente 05032012
				if(object_personaliza.QDescuentoIda=='SI' && j==0)
				{
					do{
					d+= '</strong><span class="color5"><em>'+object_personaliza.DescuentoIda[j].CadDesIda+' promoci&oacute;n '+object_personaliza.DescuentoIda[j].CadNumAIda+' pasajero:</em><strong><br />';
					d+= '$'+object_personaliza.DescuentoIda[j].CadMonIda+'</strong></span><br />';
					costo=object_personaliza.DescuentoIda[j].CadMonIda;
					j++;
					descuento=conviertecadenafloat(costo)+descuento;
					}while(object_personaliza.DescuentoIda[j])
						if(object_personaliza.NDescuentosIda<adulto){
							d+="</strong><span class='color5'><em>"+object_personaliza.PasajerosIda[i].Leyenda+":</em><strong><br />";
							d+="$"+(conviertecadenafloat(object_personaliza.PasajerosIda[i].Costo)-descuento).toFixed(2)+"</strong></span><br />";
							}
				}else{	
					if(object_personaliza.PasajerosIda[i].CostoOri>0)	{
						d+="</strong><span class='color5'><em>"+object_personaliza.PasajerosIda[i].Leyenda+":</em><strong><br />";
						d+="$"+object_personaliza.PasajerosIda[i].Costo+"<br />";	
						d+=txt.Ahorro+" $"+object_personaliza.PasajerosIda[i].CostoOri+"</strong></span><br />";	
					}
					else{
						d+="</strong><span class='color5'><em>"+object_personaliza.PasajerosIda[i].Leyenda+":</em><strong><br />";
						d+="$"+object_personaliza.PasajerosIda[i].Costo+"</strong></span><br />";		
					}					
				}
			i++;
			} //while(object_personaliza.PasajerosIda[i] )
				
			d+="</p>";
				
			if (redondo == 'SI'){
				d+="<p><span class='color1'><strong>Viaje de regreso</strong></span><strong><br />";
				i=0;
				j=0;
				costo='';
				descuento=0;
				do{
					//Este bloque if no entra 05032012
					if(object_personaliza.QDescuentoReg=='SI' && j==0)
						{
						do{
						d+= '</strong><span class="color5"><em>'+object_personaliza.DescuentoReg[j].CadDesReg+' promoci&oacute;n '+object_personaliza.DescuentoReg[j].CadNumAReg+' pasajero:</em><strong><br />';
						d+= '$'+object_personaliza.DescuentoReg[j].CadMonReg+'</strong></span><br />';
						costo=object_personaliza.DescuentoReg[j].CadMonReg;
						j++;
						descuento=conviertecadenafloat(costo)+descuento;
						}while(object_personaliza.DescuentoReg[j])
							if(object_personaliza.NDescuentosReg<adulto){
								d+="</strong><span class='color5'><em>"+object_personaliza.PasajerosRegreso[i].Leyenda+":</em><strong><br />";
								d+="$"+(conviertecadenafloat(object_personaliza.PasajerosRegreso[i].Costo)-descuento).toFixed(2)+"</strong></span><br />";
							}
				}else{		
					if(object_personaliza.PasajerosRegreso[i].CostoOri>0)	{
						d+="</strong><span class='color5'><em>"+object_personaliza.PasajerosRegreso[i].Leyenda+":</em><strong><br />";
						d+="$"+object_personaliza.PasajerosRegreso[i].Costo+"<br />";	
						d+=txt.Ahorro+" $"+object_personaliza.PasajerosRegreso[i].CostoOri+"</strong></span><br />";	
						}
					else{
						d+="</strong><span class='color5'><em>"+object_personaliza.PasajerosRegreso[i].Leyenda+":</em><strong><br />";
						d+="$"+object_personaliza.PasajerosRegreso[i].Costo+"</strong></span><br />";
						}
					}
					i++;
				} while (object_personaliza.PasajerosRegreso[i] )
			d+="</p>";		
			}	
		}*/
		/*d+="<p><span class='verde_2 negritas'>"+txt.Pasajeros+":</span><br />";
		if (adulto>0) d+="<span class='gris_medio negritas'>"+txt.Adultos+": </span><span class='verde_2 negritas'>"+adulto+"</span></em><br />";
		if (menor>0) d+="<span class='gris_medio negritas'>"+txt.Ninios+": </span><span class='verde_2 negritas'>"+menor+"</span></em><br />";
		if (insen>0) d+="<span class='gris_medio negritas'>"+txt.Insen+": </span><span class='verde_2 negritas'>"+insen+"</span></em><br />";
		if (estudiantes>0) d+="<span class='gris_medio negritas'>"+txt.Estudiantes+": </span><span class='verde_2 negritas'>"+estudiantes+"</span></em><br />";
		if (maestros>0) d+="<span class='gris_medio negritas'>"+txt.Maestros+": </span><span class='verde_2 negritas'>"+maestros+"</span></em><br />";
		d+="</p>";
		*/
		if(x>6)
			d=" ";
		
	}
	else if(sesion != 0){
	//alert('imprime menu de agencia');
		d+="<div id='resumen_compra' class='textos_resumen'>";
		d="<span class='negritas verde_1 18_puntos condensada'><p><strong>VENTA DE BOLETOS AGENCIAS</strong></p></span>";
		d+="<span class='verde_2 negritas'>Agencia: </span><br />";
		d+="<span class='gris_medio negritas'>"+agenc+"</span><br />";
		d+="<span class='verde_2 negritas'>Usuario: </span><br />";
		d+="<span class='gris_medio negritas'>"+usuar+"</span><br />";
		d+="<img src='../imagenes/separador_200.png' style='margin-left:-15px; margin-top:10px';/>";
		
		
        d+="<id='resumen_compra' class='textos_resumen'>";
		if(admin == 'SI')d+="<br /><dt class='verde_2' id='Administrador'><a href='#' onClick='administrador()'>Administrador</a></dt>";
        if(venta == 'SI')d+="<dt class='textos_resumen_current' id='Venta'><a href='#' onClick='javascript: Inbo=0; adelante(paso=-1);'>Venta</a></dt>";
		if(venta == 'SI')d+="<dt class='verde_2' id='Abierto'><a href='#' onClick='javascript: Inbo=0; abierto();'>Boleto Abierto</a></dt>";
       	if(venta == 'SI')d+="<dt class='verde_2' id='Intercambio'><a href='#' onClick='intercambio();'>Intercambio</a></dt>";
        if(venta == 'SI')d+="<dt class='verde_2' id='Cancelaci&oacute;n'><a href='#' onClick='cancelacion();'>Cancelaci&oacute;n</a></dt>";
        if(camco == 'SI')d+="<dt class='verde_2' id='Cambiar'><a href='#' onClick='contrasena();'>Cambiar contrase&ntilde;a</a></dt>";
        if(saldo == 'SI')d+="<dt class='verde_2' id='Saldos'><a href='#' onClick='saldos();'>Saldos</a></dt>";
		if(repmo == 'SI')d+="<dt class='verde_2' id='Movimientos'><a href='#' onClick='movimientos();'>Movimientos</a></dt>";
		d+="<span class='verde_1'><a href='/netScripts/Request.aspx?APPNAME=NAVEGANTE&PRGNAME=CerrarSesion&ARGUMENTS=-A"+sesion+",-A"+claus+"' target='_top'>Cerrar Sesi&oacute;n</a></span><br />";
		d+="<img src='../imagenes/separador_200.png' style='margin-left:-15px; margin-top:10px';/>";
		d+="</div>";

		
	}
	$('#datos').html(d);
}


//Banner
function banner2(b){
	b="<iframe frameborder='0'  class= 'banner2' height='390' width='200' id='bannerExterno'  scrolling='no' src="+banner3+">Banner</iframe>";
	return b;
}


//Banner
function banner(b){
	b="<iframe frameborder='0'   class= 'banner1' height='200' width='200' id='bannerExterno'  scrolling='no' src="+banner1+">Banner</iframe>";
	return b;
}


//Boton regresar
function regresar(r){
	//r="<a href='#' onClick='return atras();'><img src='../imagenes/btn_regresar.jpg' class = 'botonNav' alt='Regresar'  width='140' height='35' border='0' id='Image20' onmouseover=\"MM_swapImage('Image20','','../imagenes/btn_regresar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";
    r="<a href='#' onClick='return atras();' class='btn_ctr'>‹‹ Regresar</a>";
	return(r);
	}
	
	
//Boton continuar
function continuar(f){
	//f="<a href='#' onClick='return adelante();'><img src='../imagenes/btn_continuar.jpg' class = 'botonNav' width='140' height='35' border='0' id='Image11' onmouseover=\"MM_swapImage('Image11','','../imagenes/btn_continuar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";
    f="<a href='#' onClick='return adelante(); class='btn_ctr'>Continuar ››</a>";
	return(f);
	}
	
	
//Realiza validacion y presenta mensaje si la contraseña fue cambiada o se presento error
function validacontrasena(){
var cactual = document.getElementById("contraactual").value;
var cnueva = document.getElementById("nvacon").value;
var cconfirma = document.getElementById("confcontra").value;
cactual.replace(/^\s*|\s*$/g,"");
cnueva.replace(/^\s*|\s*$/g,"");
cconfirma.replace(/^\s*|\s*$/g,"");
if(cactual=="" || cnueva=="")
		{
		alert("La contrase&ntilde;a no puede quedar vacia" );
		 return false;
		}
if(cnueva!=cconfirma)
		{
		alert("Error al confirmar contrase&ntilde;a" );
		 return false;
		}
		var http = CreateRequest();
			var url = "/netScripts/Request.aspx?APPNAME=NAVEGANTE&PRGNAME=contrasena&ARGUMENTS=-A"+ cactual +",-A"+ cnueva +",-A"+ sesion;
			http.open("GET",url,true);
			http.onreadystatechange  = function(){
				if(http.readyState <= 3)
						{
						document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
						}
				if(http.readyState == 4 && http.status == 200) {
				var json_data = http.responseText;
				try{
				var object_contrasena = eval(json_data);					
				document.getElementById("area").innerHTML = '<div class="head">'+
				'<img src="../imagenes/titulo_cambioContrasena.jpg" width="690" height="57" />'+
				'</div>'+
				'<div class="contenido">'+
		  '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
		  '<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>'+
		    '<tr>'+
		      '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
		        '<tr>'+
		          '<td width="8%" align="right"></td>'+
		          '<td width="3%">&nbsp;</td>'+
		          '<td width="27%" class="color7"><strong>Aviso</strong></td>'+
		          '<td width="31%" class="color3"><label for="textfield"></label></td>'+
		          '<td align="center"><label for="radio"></label></td>'+
	            '</tr>'+
		        '<tr>'+
		          '<td align="right">&nbsp;</td>'+
		          '<td>&nbsp;</td>'+
		          '<td colspan="3" class="color2">'+ object_contrasena.Estado +'</td>'+
	            '</tr>'+
		        '</table></td>'+
	       ' </tr>'+
		   ' <tr>'+
		      '<td>&nbsp;</td>'+
	        '</tr>'+
	      '</table></div>';
				document.getElementById("continuar").innerHTML = '';
				//document.getElementById("regresar").innerHTML = "<a href='#' onClick='return contrasena();'><img src='../imagenes/btn_regresar.jpg' alt='Regresar' width='100' height='20' border='0' id='Image20' onmouseover=\"MM_swapImage('Image20','','../imagenes/btn_regresar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";
                document.getElementById("regresar").innerHTML = "<a href='#' onClick='return contrasena();' class='btn_ctr'>‹‹ Regresar</a>";                
				}
				catch(e){}
		}
	}
	http.send(null);
}


//Genera administrador pantalla incial
function administrador(){
termina();
if(viinco == 'NO') { document.getElementById("area2").innerHTML="";  document.getElementById("area2").style.display="none"; }
personalizat = false;
document.getElementById("counter").innerHTML = '';
var elUsuario = '<!$MG_chUsuario>'
    $('dt').removeClass('textos_resumen_current');
	$('#Administrador').addClass('textos_resumen_current');
		
	document.title ="Administrador Agencias";
	var http = CreateRequest();	
	var url = "/netScripts/Request.aspx?APPNAME=NAVEGANTE&PRGNAME=administrador&ARGUMENTS=-A"+sesion+",-A"+claus+"";
	http.open("GET",url,true);
	http.onreadystatechange=function(){
		if(http.readyState <= 3) 
			document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
		if(http.readyState == 4 && http.status == 200) {
			var admin = http.responseText;			
			try{
				adminJSON = eval(admin);
				//var cadTabla = '<div class="head"><img src="../imagenes/titulo_administrador.jpg" width="690" height="57" /></div>'+
				var cadTabla = '<div class="head"><strong class="negritas verde_1 20_puntos condensada">ADMINISTRADOR</strong></div>'+
		'<div class="contenido">'+
                '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
				'<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>'+
                  '<tr>'+
                    '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
                      '<tr>'+
                        '<td colspan="6" class="datos"><span class="color5">Usuarios agencia<span></td>'+
                     ' <tr>'+
                      '<tr class="color7">'+
                        '<td width="8%">&nbsp;</td>'+
                        '<td width="3%">&nbsp;</td>'+
                        '<td width="17%"><strong class="color1">Usuario</strong></td>'+
                        '<td width="30%"><strong class="color1">Nombre</strong></td>'+
                        '<td width="12%" align="center"><strong class="color1">Elegir</strong></td>'+
                        '<td width="30%" align="center">&nbsp;</td>'+
                      '</tr>';		  
					for(var u = 0;u<adminJSON.length;u++){
							cadTabla +='<td width="8%" align="right"></td>';
							cadTabla +='<td width="3%">&nbsp;</td>';
							cadTabla += '<td width="17%" >'+adminJSON[u].claveUsuario+'</td>';
							cadTabla += '<td width="30%" ><label for="radio">'+adminJSON[u].nombreUsuario+'</td>';								
							cadTabla += '<td  align="center" class="color3"><input type="radio"  name="radio" id="radio" onClick="return Seleccionado('+u+')"></td>';
							cadTabla += "</tr>";							
							}							
					cadTabla += '</table></td>'+
					
					
                  '</tr>'+

                  '<tr>'+
                    '</td>&nbsp;</td>'+
                  '</tr>'+
                '</table>'+
				'</div>';
			}catch(e){}
			document.getElementById("area").innerHTML = cadTabla;
			//document.getElementById("continuar").innerHTML = "<a href='#' onClick='return validaUsuario ();'><img src='../imagenes/btn_continuar.jpg' class = 'botonNav' width='140' height='35' border='0' id='Image11' onmouseover=\"MM_swapImage('Image11','','../imagenes/btn_continuar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";;
            document.getElementById("continuar").innerHTML = "<a href='#' onClick='return validaUsuario ();' class='btn_ctr'>Continuar ››</a>";;
			checked = 'N'
		}
	
	}
	http.send(null);
}


//Administracion del horario del usuario seleccionado
function adminhorario(){
	q++;
    $('dt').removeClass('textos_resumen_current');
	$('#Administrador').addClass('textos_resumen_current');
		
	document.title ="Administrador Agencias";
	var http = CreateRequest();	
	var url = "/netScripts/Request.aspx?APPNAME=NAVEGANTE&PRGNAME=adminhorarios&ARGUMENTS=-A"+adminJSON[Elegido].claveUsuario+",-A"+sesion+",-A"+claus+",-A"+q+"";
	http.open("GET",url,true);
	http.onreadystatechange=function(){
		if(http.readyState <= 3) 
			document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
		if(http.readyState == 4 && http.status == 200) {
			var hora = http.responseText;			
			try{
			
				var horarioJSON = eval(hora);				
			    //var cadTabla = '<div class="head"><img src="../imagenes/titulo_administrador.jpg" width="690" height="57" /></div>'+            
				var cadTabla = '<div class="head"><strong class="negritas verde_1 20_puntos condensada">ADMINISTRADOR HORARIO</strong></div>'+
				'<div class="contenido">'+
                '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
				'<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>'+
                  '<tr>'+
                    '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
                     '<tr>'+
                      '  <td colspan="7" class="datos"><span class="color5">Horario del usuario: </span><span class="color2">'+adminJSON[Elegido].claveUsuario+'</span></td>'+
                     ' </tr>'+
                     ' <tr>'+
                       ' <td colspan="7" class="datos"><span class="color2">'+adminJSON[Elegido].nombreUsuario+'</span></td>'+
                     ' </tr>'+
                      '<tr class="color7">'+
                        '<td width="23%">&nbsp;</td>'+
                      '<td width="3%">&nbsp;</td>'+
                      '<td width="13%"><strong class="color1">DIA</strong></td>'+
                        '<td width="14%" align="center"><strong class="color1">INICIO</strong></td>'+
                      '<td width="14%" align="center"><strong class="color1">FIN</strong></td>'+
                       '<td width="17%" align="center"><strong class="color1">DIA ACTIVO</strong></td>'+
                      '<td width="16%" align="center">&nbsp;</td>'+	
                     '</tr>';
                     var chek="";
					 var enable="";
					 for(var h = 0;h<horarioJSON.length;h++){
						if(horarioJSON[h].Activo) {
							chek='checked="checked"';
							enable = '';
						}
						else{
						chek='';
						enable='disabled="disabled"';
						}
						
						
						cadTabla +='<tr>';
							cadTabla +='<td align="right"></td>';
							cadTabla +='<td>&nbsp;</td>';
							cadTabla += '<td class="color2">'+horarioJSON[h].dia+'</td>';
							cadTabla += '<td align="center"><input name="textfield7" class="inputCenter" type="text" id="inicio'+h+'" value='+horarioJSON[h].horaInicio+' size="6" maxlength="5" '+enable+'/></td>';								
							cadTabla += '<td align="center"><input name="textfield14" class="inputCenter" type="text" id="fin'+h+'" value='+horarioJSON[h].horaFin+' size="6" maxlength="5" '+enable+'/></td>';
							cadTabla += '<td align="center"><input type="checkbox" name="checkbox7" id="checkbox'+h+'" '+chek+' onClick="habilita('+h+')"  /></td>';							
							cadTabla += '<td>&nbsp;</td>';
							cadTabla +='</tr>';
							}	
												 
					  cadTabla+='</table></td>'+
					  '</tr>'+
					  '<tr>'+
					  '<td>&nbsp;</td>'+
					  '</tr>'+
					  '</table>'+
					  '</div>';
					document.getElementById("area").innerHTML = cadTabla;
					//document.getElementById("continuar").innerHTML = "<a href='#' onclick='guardaHorarios();'><img src='../imagenes/btn_continuar.jpg' class = 'botonNav' width='140' height='35' border='0' id='Image11' onmouseover=\"MM_swapImage('Image11','','../imagenes/btn_continuar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";;;
                    document.getElementById("continuar").innerHTML = "<a href='#' onclick='guardaHorarios();' class='btn_ctr'>Continuar ››</a>";
}

catch(e){}	
}
}
http.send(null);
}


//Se verifica la respuesta de sistema al realizar la cancelacion
function validacancelacion(){
var i=0;
var ope = document.getElementById("textfieldop").value;
var ni = document.getElementById("textfield3Nit").value;
ope.replace(/^\s*|\s*$/g,"");
ni.replace(/^\s*|\s*$/g,"");
		if (ope == 0 || ope == "")
		{
				alert("No puede dejar vacio el N&uacute;mero de operaci&oacute;n");
				return false;
		}

		if ( ni == 0 || ni == "")
		{
				alert("No puede dejar vacio el NIT");
				return false;
		}
		ope=ope.replace(/,/gi, '-');
		var http = CreateRequest();
			var url = "/netScripts/Request.aspx?APPNAME=NAVEGANTE&PRGNAME=CancelacionBoletosGrupal&ARGUMENTS=-A"+ sesion +",-A"+ claus +",-A"+ ope +",-A"+ ni +",-A1";
			http.open("GET",url,true);
			http.onreadystatechange  = function(){
				if(http.readyState <= 3)
						{
						document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
						}
				if(http.readyState == 4 && http.status == 200) {
				var json_data = http.responseText;
				try{
				var object_cance = eval(json_data);
					if(object_cance.Estado=='Cancelado'){			
					//window.open("../nueva/PDF/"+ object_cance.Ru,"PDF Cancelacion");
					window.location = object_cance.Ru;
					document.getElementById("area").value =cancelacion();
					}
					else{
					document.getElementById("area").innerHTML='<div class="head">'+
					'<img src="../imagenes/titulo_cancelacion.jpg" width="690" height="57" />'+
					'</div>'+
					  '<div class="contenido">'+
		  '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
		  '<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>'+
		    '<tr>'+
		      '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
		        '<tr>'+
		          '<td width="8%" align="right"></td>'+
		          '<td width="3%">&nbsp;</td>'+
		          '<td width="27%" class="color7"><strong>Aviso</strong></td>'+
		          '<td width="31%" class="color3"><label for="textfield"></label></td>'+
		          '<td align="center"><label for="radio"></label></td>'+
	            '</tr>'+
		        '<tr>'+
		          '<td align="right">&nbsp;</td>'+
		          '<td>&nbsp;</td>'+
		          '<td colspan="3" class="color2">'+ object_cance.Estado +'</td>'+
	            '</tr>'+
		        '</table></td>'+
	       ' </tr>'+
		   ' <tr>'+
		      '<td>&nbsp;</td>'+
	        '</tr>'+
	      '</table></div>';
					//document.getElementById("regresar").innerHTML = "<a href='#' onClick='return cancelacion();'><img src='../imagenes/btn_regresar.jpg' alt='Regresar' width='100' height='20' border='0' id='Image20' onmouseover=\"MM_swapImage('Image20','','../imagenes/btn_regresar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";
                    document.getElementById("regresar").innerHTML = "<a href='#' onClick='return cancelacion();' class='btn_ctr'>‹‹ Regresar</a>";                    
					}
				}			
				catch(e){ }
		}
	}
	http.send(null);
}


//Recibe respuesta y valida si es posible realizar el intercambio
function validaintercambio(){
var ope = document.getElementById("textfieldint").value;
ope.replace(/^\s*|\s*$/g,"");
var sig="'";
var tipoint = document.getElementById("tipoOper_C");
if(tipoint.checked)
{
	var conabi="CE";
}
else
{
	var conabi="NE";
}
if(ope=="")
		{
			alert("La Operacion no debe quedar vac&iacute;a." );
			return false;
		}
	ope=ope.replace(/,/gi, '-');
	var http = CreateRequest();
			var url = "/netScripts/Request.aspx?APPNAME=NAVEGANTE&PRGNAME=ValidaIntercambioGrupal&ARGUMENTS=-A"+ ope +",-A"+ sesion +",-A"+ claus +",-ASI,-A"+consecutivo+",-A"+conabi;
			http.open("GET",url,true);
			http.onreadystatechange  = function(){
				if(http.readyState <= 3)
						{
						document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
						}
				if(http.readyState == 4 && http.status == 200) {
				var json_data = http.responseText;
				try{
				var object_inter = eval(json_data);
					if(object_inter.Estado!=""){
					document.getElementById("area").innerHTML ='<div class="head">'+
					'<img src="../imagenes/titulo_intercambio.jpg" width="690" height="57" />'+
					'</div>'+
					'<div class="contenido">'+
					'<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
					'<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>'+
					'<tr>'+
					'<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
					'<tr>'+
					'<td width="8%" align="right"></td>'+
					'<td width="3%">&nbsp;</td>'+
					'<td width="27%" class="color7"><strong>ERROR</strong></td>'+
					'<td width="31%" class="color3"><label for="textfield"></label></td>'+
					'<td align="center"><label for="radio"></label></td>'+
					'</tr>'+
					'<tr>'+
					'<td align="right">&nbsp;</td>'+
					'<td>&nbsp;</td>'+
					'<td colspan="3" class="color2">'+ object_inter.Estado +'</td>'+
					'</tr>'+
					'</table></td>'+
					'</tr>'+
					'<tr>'+
					'<td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
					'<tr>'+
					'<td><input type="button" onclick="intercambio();" name="Regresar" id="Regresar" value="Regresar" /></td>'+
					'</tr>'+
					'</table></td>'+
					'</tr>'+
					'<tr>'+
					'<td>&nbsp;</td>'+
					'</tr>'+
					'</table></div>';
					document.getElementById("continuar").innerHTML = '';
					document.getElementById("regresar").innerHTML = '';
					}
					else{
					esint = object_inter.Esintercambio;
					opeint = object_inter.opeinter;
					mint = object_inter.Minter;
					
					if (tipoint.checked) {
					paso=-1;
					Inbo=1;
					adelante();
					}
					else{
					paso=10;	
					Inbo=1;
					abierto();
					}
					}
				}
				catch(e){}
		}
	}
	http.send(null);
	

}


//Guarda horario administrador y genera usuarios a seleccionar
function guardaHorarios(){
var elUsuario = '<!$MG_chUsuario>'
    $('dt').removeClass('textos_resumen_current');
	$('#Administrador').addClass('textos_resumen_current');
		
	document.title ="Administrador Agencias";
	var http = CreateRequest();	
	var url = "/netScripts/Request.aspx?APPNAME=NAVEGANTE&PRGNAME=cambiahorarios&ARGUMENTS=-A"+adminJSON[Elegido].claveUsuario+",-A"+sesion+",-A"+claus+"";
	var inicios = "";
	var finales="";
	for( var i =0;i<7;i++){
		if( $("#checkbox"+i).attr('checked')){
			url+=",-A"+i;
			inicios+= ",-A"+$("#inicio"+i).val();
			finales+=",-A"+$("#fin"+i).val();
		}
		else {
			url += ",-A";
			inicios+= ",-A"+$("#inicio"+i).val();
			finales+=",-A"+$("#fin"+i).val();
			
		}
	}
	url+=inicios+finales;
	
	http.open("GET",url,true);
	http.onreadystatechange=function(){
		if(http.readyState <= 3) 
			document.getElementById("area").innerHTML = "<center><img src='../imagenes/loading.gif' align='center' /></center>";
		if(http.readyState == 4 && http.status == 200) {
			var admin = http.responseText;			
			try{
				adminJSON = eval(admin);
				//var cadTabla = '<div class="head"><img src="../imagenes//titulo_administrador.jpg" width="690" height="57" /></div>'+
				var cadTabla = '<div class="head"><strong class="negritas verde_1 20_puntos condensada">ADMINISTRADOR</strong></div>'+
		'<div class="contenido">'+
                '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
				'<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>'+
                  '<tr>'+
                    '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
                      '<tr>'+
                        '<td colspan="6" class="datos"><span class="color5">Usuarios agencia<span></td>'+
                     ' <tr>'+
                      '<tr class="color7">'+
                        '<td width="8%">&nbsp;</td>'+
                        '<td width="3%">&nbsp;</td>'+
                        '<td width="17%"><strong class="color1">Usuario</strong></td>'+
                        '<td width="30%"><strong class="color1">Nombre<strong></td>'+
                        '<td width="12%" align="center"><strong class="color1">Elegir<strong></td>'+
                        '<td width="30%" align="center">&nbsp;</td>'+
                      '</tr>';		  
					for(var u = 0;u<adminJSON.length;u++){
							cadTabla +='<td width="8%" align="right"></td>';
							cadTabla +='<td width="3%">&nbsp;</td>';
							cadTabla += '<td width="17%" >'+adminJSON[u].claveUsuario+'</td>';
							cadTabla += '<td width="30%"><label for="radio"><strong>'+adminJSON[u].nombreUsuario+'</td>';								
							cadTabla += '<td  align="center"><input type="radio"  name="radio" id="radio" onClick="return Seleccionado('+u+')"></td>';
							cadTabla += "</tr>";							
							}							
					cadTabla += '</table></td>'+					
                  '</tr>'+                  
                  '<tr>'+
                    '</td>&nbsp;</td>'+
                 '</tr>'+
                '</table>'+
				'</div>';
			}catch(e){}
			document.getElementById("area").innerHTML = cadTabla;
			//document.getElementById("continuar").innerHTML = "<a href='#' onClick='return validaUsuario ();'><img src='../imagenes/btn_continuar.jpg' class = 'botonNav' width='140' height='35' border='0' id='Image11' onmouseover=\"MM_swapImage('Image11','','../imagenes/btn_continuar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";;
            document.getElementById("continuar").innerHTML = "<a href='#' onClick='return validaUsuario ();' class='btn_ctr'>Continuar ››</a>";
			checked = 'N'
		}
	
	}
	http.send(null);

}


//Genera html venta completada
function RespuestaGuardado(d){
	termina();
	document.getElementById("counter").innerHTML = '';
	
	// ahernandez - 21 02 2013 - ##5728##
	$('#timer').remove();
	
	/***/
	/* ahernandez - 12 08 2013 - funciones de Google Analytics */
	if(sesion==0)
	{
		_gaq.push(['_trackEvent', 'infoBOLETOS', 'infoBOLETOS']);
	}
	/***/
	
	var cad="";
	cad+='<div class="head"><!--img src="../imagenes/titulos-detalle-compra.png" width="690" height="57" /--></div>'+
		'<div class="contenido">'+
		'   <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
        '   	<tr>'+
        '       	<td align="right" class="textoDetalle"><span class="color5"><strong>'+txt.Operacion+': '+ d.Operacion+'</strong></span><br />'+
        '            <span class="color8"><strong>'+txt.NIT+': </strong></span><strong class="color5">'+ d.Nit+'</strong></td>'+
        '       </tr>'+
		'		<tr >'+
		'			<td class="textoDetalle">';
	if(d.Abierto=='SI'){	
		cad +='<strong>BOLETO ABIERTO</strong><br />';
	}	
	cad +='			</td></tr>';
	if(pago == 'TB'){
		//hgaytan
		var textoSalida = '	<td id="tarjeta" style="" class="textoDetalle" >'+txt.NumTransacEmpresa+': '+ d.Tarjeta+'<br />'+
			'            '+txt.NumAutorizBanco+': '+ d.Autorizacion +'<br />'+
			'            '+txt.NumReciboBanco+': '+ d.Voucher;
		if(d.Todito == 1){
			var textoSalida = '	<td id="tarjeta" style="" class="textoDetalle" >'+
							'No. Autorizaci&oacute;n de la empresa Todito Cash: <b>'+ d.Voucher+'</b>';
		}
		//jmoreno Tarjeta amigo
		if(d.Todito == 2){
			var textoSalida = '	<td id="tarjeta" style="" class="textoDetalle" >'+
							'No. Autorizaci&oacute;n de la empresa Tarjeta amiga: <b>'+ d.Voucher+'</b>';
		}
		// fin hgaytan
		cad +='	<tr>'+textoSalida+'</tr>';
	}
	cad +='     <tr><td colspan="2">&nbsp;</td></tr>'+
        '       <tr>'+
        '       	<td colspan="2"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
        '           		<tr>'+
        '               <td colspan="6" class="datos lineaInf"><span class="color5">'+txt.ViajedeSalida+'</span></td>'+
        '              </tr>'+
        '              <tr class="color7">';
	if(d.Abierto=='NO'){
		cad +='      <td class="Abierto res" width="18%" >'+txt.Dia+'</td>'+
		'                <td class="Abierto res" width="9%" >'+txt.Hora+'</td>';
	}
	cad +='                <td width="15%" class="res" >'+txt.Servicio+'</td>'+
        '                <td width="3%" class="res" >&nbsp;</td>		'+
        '                <td width="23%" class="res" >'+txt.Origen+'</td>'+
        '                <td width="32%" class="res" >'+txt.Destino+'</td>'+
        '              </tr>	'+
        '              <tr>'+
		'			<tr><td width="136" colspan="8"><img width="680" height="15" style="margin-top:5px;" src="../imagenes/separador_200.png"></td></tr>';
	if(d.Abierto=='NO'){
			cad +='      <td  class="Abierto res" >'+d.FechaSalida+'</td>'+
        '                <td  class="Abierto res" >'+d.HoraSalida+'</td>';
	}
	cad +='              <td class="res" >'+d.ClaseServicio+'</td>'+
        '                <td class="res" >&nbsp;</td>				'+		
        '                <td class="res" >'+d.Origen+'</td>'+
        '                <td class="res" >'+d.Destino+'</td>'+
        '              </tr>'+
        '            </table></td>'+
        '          </tr>'+
        '          <tr>'+
        '            <td>&nbsp;</td>'+
        '          </tr>'+
        '          <tr>'+
        '            <td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
        '              <tr class="color7">'+
        '                <td align="center" class="lineaInf res"  width="13%">'+txt.Operacion+'</td>';
	if(d.Abierto=='NO'){
		cad +='          <td width="10%" align="center" class="lineaInf Abierto res">'+txt.Asiento+'</td>';
	}
    cad +='              <td width="7%" align="center" class="lineaInf res">'+txt.Tipo+'</td>'+
        '                <td width="30%" align="center" class="lineaInf res">'+txt.PasajeroMin+'</td>'+
        '                <td width="13%" align="center" class="lineaInf res">'+txt.Monto+'</td>';
		
	if (d.ViajeIda[0].Empresa!='')
	    cad +='              <td width="7%" align="center" class="lineaInf res">'+txt.Empresa+'</td>'+
        '                <td width="30%" align="center" class="lineaInf res">'+txt.Origen +' / '+txt.Destino+'</td>'+
							'<td>&nbsp;</td>';
	
	if(d.PromoIda=='SI') cad+='<td width="20%" align="center" class="lineaInf res" id="MuestraDI">'+txt.Descuento+'</td>';
    cad +='                <td width="18%" align="center" class="lineaInf res" id="MuestraI1">&nbsp;</td>'+
        '            </tr>'+
		'			<tr><td width="136" colspan="8"><img width="680" height="15" style="margin-top:5px;" src="../imagenes/separador_200.png"></td></tr>';
	for(i=0;i<d.ViajeIda.length;i++){
		cad+=' <tr>'+
				'		<td class="res">'+d.ViajeIda[i].Operacion+'</td>';
		if(d.Abierto=='NO'){
			cad +='        <td class="Abierto res" >'+d.ViajeIda[i].Asiento+'</td>';
		}
		cad+=   '	    <td class="res">'+d.ViajeIda[i].TipoPasajero+'</td>'+
                '        <td class="res">'+d.ViajeIda[i].NombrePasajero+'</td>						'+
                '        <td class="res">$ '+d.ViajeIda[i].Monto+'</td>';
		if (d.ViajeIda[i].Empresa!='')
			cad+='		<td class="res">'+d.ViajeIda[i].Empresa+'</td>'+
						'<td class="res">'+d.ViajeIda[i].OrigenDestino+'</td>';
	if(d.PromoIda=='SI') cad+=	'<td class="res" ><span class="alert"><strong>'+d.ViajeIda[i].Promo+'</strong></span></td>';
	
		cad+=		'<td class="res">'+d.ViajeIda[i].IntIva+'</td>';
		cad+='        <td class="res" id="MuestraI2">&nbsp;</td>'+
				'	 </tr>';
		
	}
	cad +='         </table></td>'+
        '          </tr>'+
        '          <tr>'+
        '            <td>&nbsp;</td>'+
        '          </tr>';
	if(d.ViajeRegreso){
		cad+='		<tr> <td> <table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
		'              <tr>'+
		'                <td colspan="6" class="datos lineaInf"><span class="color5">'+txt.ViajedeRegreso+'</span></td>'+
		'              </tr>'+
		'              <tr class="color7">';
		if(d.Abierto=='NO'){
			cad += '     <td width="18%" class="res">'+txt.Dia+'</td>'+
			'            <td width="9%" class="res">'+txt.Hora+'</td>';
		}
		cad +='                <td width="15%" class="res">'+txt.Servicio+'</td>'+
        '                <td width="3%" class="res">&nbsp;</td>'+
        '                <td width="23%" class="res">'+txt.Origen+'</td>'+
        '                <td width="32%" class="res">'+txt.Destino+'</td>'+
        '              </tr>'+
        '              <tr>'+
		'			<tr><td width="136" colspan="8"><img width="680" height="15" style="margin-top:5px;" src="../imagenes/separador_200.png"></td></tr>';
		if(d.Abierto=='NO'){
			cad +='      <td class="Abierto res" >'+d.FechaSalidaReg+'</td>'+
			'            <td class="Abierto res">'+d.HoraSalidaR+'</td>';
		}
		cad +='          <td class="res">'+d.ClaseServicioR+'</td>'+
        '                <td class="res">&nbsp;</td>'+
        '                <td class="res">'+d.Destino+'</td>'+
        '                <td class="res">'+d.Origen+'</td>'+
        '              </tr>'+
        '            </table></td>'+
        '          </tr>'+
        '          <tr>'+
        '            <td>&nbsp;</td>'+
        '          </tr>'+
        '          <tr>'+
        '            <td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
        '              <tr class="color7">'+
        '                <td width="13%" align="center" class="lineaInf res">'+txt.Operacion+'</td>';
		if(d.Abierto=='NO'){
			cad +='      <td width="10%" align="center" class="lineaInf Abierto res">'+txt.Asiento+'</td>';
		}
		cad += '         <td width="7%"  class="lineaInf res">'+txt.Tipo+'</td>'+
        '                <td width="30%"  class="lineaInf res">'+txt.PasajeroMin+'</td>'+
        '                <td width="13%" class="lineaInf res">'+txt.Monto+'</td>';
		if (d.ViajeRegreso[0].Empresa!='')
	    cad +='              <td width="7%" align="center" class="lineaInf res">'+txt.Empresa+'</td>'+
        '                <td width="30%" align="center" class="lineaInf res">'+txt.Origen+' / '+txt.Destino+'</td>';
	
		if(d.PromoReg=='SI') cad += '<td width="20%" align="center" class="lineaInf res" id="MuestraDR">'+txt.Descuento+'</td>';
        cad +='                <td width="18%" align="center" class="lineaInf res" id="MuestraR1">&nbsp;</td>'+
        '              </tr>'+
		'			<tr><td width="136" colspan="8"><img width="680" height="15" style="margin-top:5px;" src="../imagenes/separador_200.png"></td></tr>';
		for(i=0;i<d.ViajeRegreso.length;i++){
			cad +='      <tr>'+
			'            <td class="res">'+d.ViajeRegreso[i].Operacion+'</td>';
			if(d.Abierto=='NO'){
			cad +='      <td class="Abierto res" >'+d.ViajeRegreso[i].Asiento+'</td>';
			}
			cad +='                <td class="res">'+d.ViajeRegreso[i].TipoPasajero+'</td>'+
			'                <td class="res">'+d.ViajeRegreso[i].NombrePasajero+'</td>'+
			'				<td class="res">$ '+d.ViajeRegreso[i].Monto+'</td>';
			if (d.ViajeRegreso[i].Empresa!='')
			cad+='		<td class="res">'+d.ViajeRegreso[i].Empresa+'</td>'+
						'<td class="res">'+d.ViajeRegreso[i].OrigenDestino+'</td>';
			if(d.PromoReg=='SI') cad += '<td class="res"><span class="alert"><strong>'+d.ViajeRegreso[i].Promo+'</strong></span></td>';
			
			cad+='	<td class="res">'+d.ViajeRegreso[i].IntIvaRe+'</td>';
			cad +='               <td class="res" id="MuestraR2">&nbsp;</td>'+
			'              </tr>';

		}
		cad +='            </table></td>'+
        '          </tr>';
	}
	cad +='          <tr>'+
        '          <td>&nbsp;'+
        '          </td>'+
        '          </tr>'+
        '          <tr>'+
        '            <td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
		'                <tr><td width="7%" align="center" class="titulo">'+txt.CostoTotal+'</td></tr>'+
        '                <tr>'+
        '                  <td width="7%" class="res" bgcolor="#427951" class="precio" id="back_costos">$'+d.Total+'</td>'+
        '                  </tr>'+
        '              <tr>';
	if(sesion>0 || (pavpin!='NO' && sesion==0))
	{
		cad+=    '<td width="7%" align="center" class="negritas"><a href="/netScripts/Request.aspx?APPNAME=NAVEGANTE7&PRGNAME=';
		if(sesion>0) cad+='paseabordar';
		else cad+='paseabordarVPI';
		cad+= '&ARGUMENTS=-A'+sesion+',-A'+ d.Operacion+',-A0" target="_blank">'+txt.Imprimir+'</a></td>'+
			'<td width="31%" align="center" class="negritas"><a href="/netScripts/Request.aspx?APPNAME=NAVEGANTE7&PRGNAME=';
		if(sesion>0) cad+='paseabordar';
		else cad+='paseabordarVPI';
		cad+=	'&ARGUMENTS=-A'+sesion+',-A'+ d.Operacion+',-A1" target="_blank">'+txt.Guardar+'</a></td>';
	}
	else
	{
		cad += '<td width="7%" align="center" class="negritas"><a onClick="return printWindow();" href="#">'+txt.Imprimir+'</a></td>';
		cad += '<td width="31%" align="center">&nbsp;</td>';
	}
	
	if(sesion == 0){
    cad+= '                <td width="6%" align="center">&nbsp;</td>'+
        '              </tr>'+
        '              <tr>'+
        '                <td colspan="6" align="center" class="color2">'+txt.ParaImpreBoletosenTaquilla+'</td>'+
        '              </tr>'+
        '            </table></td>'+
        '          </tr>'+
		'<tr><td><div id="terminos" style="font-weight:normal;font-size:11pt;padding:15;margin: 10px 0 10px 0;display:hidden">'+
'<h3>Pol&iacute;ticas Comerciales del pase de Abordar y del Ticket de Abordar.</h3>'+
'    <ul>'+
		'<ul type="disc">'+ 
	'<li class="MsoNormal" <i><span style="font-size: 11.0pt">Este pase de abordar <strong>no es cancelable ni reembolsable</strong>.</span></i></li>'+
	'<li class="MsoNormal"<i><span style="font-size: 11.0pt">Este pase de abordar solo podr&aacute; ser transferido hasta una hora '+ 
	'antes del horario indicado de la salida del viaje, '+
 'por otro horario o fecha &uacute;nicamente, no as&iacute;  por otro origen o destino.</span></i></li>'+ 
	'<li class="MsoNormal"<i><span style="font-size: 11.0pt">Para realizar '+
	'<strong>una impresi&oacute;n</strong> de este pase de abordar por un boleto o <strong>para realizar un cambio de fecha u hora,</strong> es indispensable '+
 ' que el <strong>pasajero presente una identificaci&oacute;n oficial con fotograf&iacute;an '+ 
 'y una copia por ambos lados</strong>, la cual se entregar&aacute; en las taquillas '+ 
 'de &Oacute;mnibus de M&eacute;xico, de no presentar este requisito no se podr&aacute; realizar '+
 'la impresi&oacute;n del boleto o el cambio de fecha u hora.</span></i></li>'+
 '<li class="MsoNormal"<i><span style="font-size: 11.0pt">Solo '+ 
	'se podr&aacute; realizar un cambio por un boleto confirmado con otra fecha y hora, o en su '+ 
	'caso por un boleto No confirmado (Abierto). En el caso del boleto abierto solo tendr&aacute; '+ 
	'la opci&oacute;n de intercambio por un confirmado &uacute;nicamente. Posterior a estos movimientos el boleto no ser&aacute; '+ 
	'intercambiable y ser&aacute; v&aacute;lido &uacute;nicamente para la fecha y hora solicitada.</span></i></li>'+ 
	'<li class="MsoNormal"<i><span style="font-size: 11.0pt">Los pases de abordar '+
	'adquiridos con descuentos (INAPAM, Estudiantes o Maestros) no tienen el beneficio a cambios por otro horario,'+
	'fecha, origen o destino y deber&aacute;n viajar en tiempo y forma.</span></i></li>'+
'</ul>'+

'<i><span style="font-size: 11.0pt">TARIFA</span></i>'+
'<ul type="disc">'+
	'<li class="MsoNormal"<i>'+
	'<span style="font-size: 11.0pt">Menores entre 0 años y hasta 5 años 11 meses, '+ 
	'no pagan boleto sin derecho a ocupar asiento.</span></i></li>'+
	'<li class="MsoNormal"<i>'+

	'<span style="font-size: 11.0pt">Menores entre 6 años y hasta los 11 años 11 meses, '+
	'pagan el 50% del boleto con derecho a ocupar asiento.</span></i></li>'+
	'<li class="MsoNormal"<i>'+
	'<span style="font-size: 11.0pt">Mayores de 12 años en adelante '+
	'pagan tarifa completa con derecho a ocupar asiento.</span></i></li>'+
'</ul>'+

'<i><span style="font-size: 11.0pt">DESCUENTOS</span></i>'+
'<ul type="disc">'+
	'<li class="MsoNormal"<i>'+
	'<span style="font-size:11.0pt"><b>Estudiantes.-</b>'+

	 'Aplicable en un<b> 50% de descuento</b> y sujeto a disponibilidad de 8 lugares por autob&uacute;s, '+
	'&uacute;nicamente en la temporada vacacional estipulada por el Diario Oficial de la Federaci&oacute;n a instituciones '+ 
	'incorporadas a la SEP. La credencial que acredite el descuento al cliente deber&aacute; ser original, '+
	'sin tachaduras o enmendaduras, vigente, con fotograf&iacute;a, y con sellos de la SEP. '+
	'En caso de que la instituci&oacute;n educativa cuente con un periodo extraordinario vacacional, '+ 
	'el cliente deber&aacute; presentar una carta membretada por la escuela donde estipule el periodo '+
	'extraordinario vacacional y los datos completos del estudiante en compañ&iacute;a de la '+
	'credencial que lo acredite como estudiante.</span></i></li>'+
	
	'<li class="MsoNormal" <i>'+
	'<span style="font-size:11.0pt"><b>Maestro.-</b>'+ 
	 'Mismas pol&iacute;ticas de aplicaci&oacute;n que el de descuento de estudiante, '+
	 'a excepci&oacute;n de periodo extraordinario vacacional y con la diferencia '+
	 'de que el porcentaje es <b>del 25%</b> y est&aacute; sujeto a disponibilidad de hasta 2 '+
	 'descuentos por autob&uacute;s y siempre y cuando su actividad laboral este vigente.</span></i></li>'+

	'<li class="MsoNormal"<i>'+
	'<span style="font-size:11.0pt"><b>INSEN &oacute; INAPAM.-</b>' +
	'<b>Es el descuento asignado al 50%</b> para adultos mayores, '+
	'aplicables todo el año y sujetos a disponibilidad de hasta 6 '+
	'descuentos por autob&uacute;s, a la persona que se acredite con la '+ 
	'credencial de "INSEN o INAPAM, por lo que el boleto deber&aacute; '+ 
	'expedirse al nombre de la persona que aparece en la credencial '+ 
	'sin excepci&oacute;n alguna, y se le solicitar&aacute; al momento de abordar. '+
	'De lo contrario se le solicitar&aacute; el pago restante por el monto de su boleto.</span></i></li>'+
'</ul>'+

'<i><span style="font-size: 11.0pt">GENERALES</span></i>'+
'<ul type="disc">'+
	'<li class="MsoNormal"<i>'+

	'<span style="font-size: 11.0pt"><strong>Este pase de abordar es v&aacute;lido para ascender '+ 
	'a su autob&uacute;s directamente sin necesidad de canje</strong>. </span></i></li>'+
	'<li class="MsoNormal"<i>'+
	'<span style="font-size: 11.0pt">Este pase de abordar es v&aacute;lido &uacute;nicamente '+ 
	'para la fecha y hora indicada en el mismo.</span></i></li>'+
	'<li class="MsoNormal"<i>'+
	
	'<span style="font-size: 11.0pt">&Oacute;mnibus de M&eacute;xico no se hace responsable '+ 
	'por el mal uso que se haga del pase de abordar, siendo esto exclusivo '+
	'del pasajero que lo imprime.</span></i></li>'+
	'<li class="MsoNormal" <i>'+
	'<span style="font-size: 11.0pt">Presentarse en el and&eacute;n para abordar su '+ 
	'unidad con un m&iacute;nimo de 20 minutos antes de la salida de su viaje. </span>'+
	'</i></li>'+
	'<li class="MsoNormal"<i>'+

	'<span style="font-size: 11.0pt">En caso de perder su viaje por no abordar su '+ 
	'autob&uacute;s en tiempo y forma, ser&aacute; la p&eacute;rdida de su viaje y no se realizar&aacute; el '+ 
	'reembolso ni reubicaci&oacute;n en otro horario.</span></i></li>'+
	'<li class="MsoNormal"<i>'+
	'<span style="font-size: 11.0pt">En caso de que su pase de abordar cuente '+ 
	'con descuento de (INAPAM, Estudiante &oacute; Maestro) es necesario que presente la '+ 
	'identificaci&oacute;n que acredite su descuento al momento de abordar la unidad, '+ 
	'durante y al t&eacute;rmino del viaje, ya que en caso de no presentarla se le cobrara '+ 
	'la cantidad restante al boleto completo.</span></i></li>'+	
    '<li class="MsoNormal"<i>'+
	'<span style="font-size: 11.0pt">El cliente tiene derecho a transportar 2 '+ 
	'maletas o su equivalente a 25 kilos por pasajero.</span></i></li>'+
	'<li class="MsoNormal" <i>'+
	'<span style="font-size: 11.0pt">No se permite viajar con animales, '+ 
	'armas de fuego o punzo cortantes, as&iacute; como objetos o sustancias '+ 
	'peligrosas (tanques de gas, ox&iacute;geno, solventes, etc.).</span></i></li>'+

	'<li class="MsoNormal" <i>'+
	'<span style="font-size: 11.0pt"><strong>En caso de requerir un comprobante '+ 
	//jmoreno
	'FISCAL</strong> deber&aacute; realizar el tramite directamente en nuestro portal de internet <a href="//www.odm.com.mx"> www.odm.com.mx </a> '+
	'en el link “Facturaci&oacute;n electr&oacute;nica” dentro de los veinte  d&iacute;as '+ 
	'naturales posterior al termino de su viaje.</span></i></li>'+
	'<li class="MsoNormal"<i>'+
	'<span style="font-size: 11.0pt">Documentar su equipaje antes de abordar su '+
	'unidad, solicitando y conservando el ticket que el equipajero le '+
	'proporcionara para que al t&eacute;rmino de su viaje lo presente y le sean '+
	'entregadas sus pertenencias.</span></i></li>'+
	'<li class="MsoNormal" <i>Solo permite la transportaci&oacute;n '+
	'de perros gu&iacute;a “perros lazarillos” a bordo del autob&uacute;s, a las para personas '+
	'ciegas o con deficiencia visual grave.</span></i></li>'+
    '<li class="MsoNormal" <i>El perro gu&iacute;a debe viajar a un '+
	'costado del pasajero sin obstruir el paso, sujeto con correa y bozal e identificado '+
	'por un distintivo de car&aacute;cter oficial.</span></i></li>'+
	'<li class="MsoNormal" <i>La transportaci&oacute;n del perro lazarillo '+
	'no causa costo alguno.</span></i></li>'+
	'<li class="MsoNormal" <i>'+

	'<span style="font-size: 11.0pt"> Para mayor informaci&oacute;n, favor de comunicarse al tel&eacute;fono <strong>5141 43 00</strong> '+
	'en la ciudad de M&eacute;xico D.F., y en interior de la Republica, al <strong>01 800 765 66 36</strong> en el '+
	'"Centro Telef&oacute;nico de Atenci&oacute;n a Clientes" donde con gusto atenderemos su llamada '+ 
	'las 24 horas de d&iacute;a y todos los d&iacute;as del año.</span></i></li>'+ 

'</ul>';
        

		}
cad += '        </table>'
cad += '</div>'
	$("#area").html(cad);
	puntoactual(8); 
	if (sesion >0)
		generaNuevaSesion();
}


function puntoactual(pasoa){
    var retorno='';
    retorno +='<div class="steps"><div class="wrapper">';
    if(pasoa==1)    retorno += '<div class="step active selected"> <span class="icon">1</span> <span class="text">'+txt.SALIDA+'</span><div class="sep"></div></div>';
        else    retorno += '<div class="step"> <span class="icon">1</span> <span class="text">'+txt.SALIDA+'</span><div class="sep"></div></div>';
    if(pasoa==2)    retorno += '<div class="step active selected"> <span class="icon">2</span> <span class="text">'+txt.REGRESO+'</span><div class="sep"></div></div>';
        else    retorno += '<div class="step"> <span class="icon">2</span> <span class="text">'+txt.REGRESO+'</span><div class="sep"></div></div>';
    if(pasoa==3)    retorno += '<div class="step active selected"> <span class="icon">3</span> <span class="text">'+txt.REGISTRO+'</span><div class="sep"></div></div>';
        else    retorno += '<div class="step"> <span class="icon">3</span> <span class="text">'+txt.REGISTRO+'</span><div class="sep"></div></div>';
    if(pasoa==4 || paso==5) retorno += '<div class="step active selected"> <span class="icon">4</span> <span class="text">'+txt.ASIENTOS+'</span><div class="sep"></div></div>';
        else    retorno += '<div class="step"> <span class="icon">4</span> <span class="text">'+txt.ASIENTOS+'</span><div class="sep"></div></div>';
    if(pasoa==6)    retorno += '<div class="step active selected"> <span class="icon">5</span> <span class="text">'+txt.RESUMEN+'</span><div class="sep"></div></div>';
        else    retorno += '<div class="step"> <span class="icon">5</span> <span class="text">'+txt.RESUMEN+'</span><div class="sep"></div></div>';
    if(pasoa==7)    retorno += '<div class="step active selected"> <span class="icon">6</span> <span class="text">'+txt.PAGO+'</span><div class="sep"></div></div>';
        else    retorno += '<div class="step"> <span class="icon">6</span> <span class="text">'+txt.PAGO+'</span><div class="sep"></div></div>';
    if(pasoa==8)    retorno += '<div class="step active selected"> <span class="icon">7</span> <span class="text">'+txt.CONFIRMACION+'</span><div class="sep"></div></div>';
        else    retorno += '<div class="step"> <span class="icon">7</span> <span class="text">'+txt.CONFIRMACION+'</span><div class="sep"></div></div>';
	
    retorno +='</div>';
	
	retorno +='<div>';
	switch(pasoa) {
    case 1:
        retorno+='<table class="tituloPasos"><tr><td >'+txt.PasoSalida+'</td><tr></table>';
        break;
    case 2:
        retorno+='<table class="tituloPasos"><tr><td >'+txt.PasoRegreso+'</td><tr></table>';
        break;
    case 3:
        retorno+='<table class="tituloPasos"><tr><td >'+txt.PasoPersonaliza+'</td><tr></table>';
        break;
	case 4:
		retorno+='<table class="tituloPasos"><tr><td >'+txt.PasoAsiento+'</td><tr></table>';
        break;
	case 5:
		retorno+='<table class="tituloPasos"><tr><td >'+txt.PasoAsiento+'</td><tr></table>';
        break;
	case 6:
		retorno+='<table class="tituloPasos"><tr><td >'+txt.PasoResumen+'</td><tr></table>';
        break;
    default:
        retorno+='<p></p>';
	}
	retorno +='</div></div>';
    //$('#nav').html(retorno);
    //$('#nav').show();
    $('#edopasos').html(retorno);
    $('#edopasos').show();
}

function puntoactual_bk(pasoa){
var retorno='';
    if(pasoa==1)    retorno += "<span class='opcion_salida_current'></span>";
        else    retorno += "<span class='opcion_salida'></span>";
    if(pasoa==2)    retorno += " <span class='opcion_regreso_current'></span>";
        else    retorno += " <span class='opcion_regreso'></span>";
    if(pasoa==3)    retorno += "<span class='opcion_registro_current'></span>";
        else    retorno += "<span class='opcion_registro'></span>";
    if(pasoa==4 || paso==5) retorno += "<span class='opcion_asientos_current'></span>";
        else    retorno += "<span class='opcion_asientos'></span>";
    if(pasoa==6)    retorno += "<span class='opcion_resumen_current'></span>";
        else    retorno += "<span class='opcion_resumen'></span>";
    if(a==7)    retorno += "<span class='opcion_pago_current'></span>";
        else    retorno += "<span class='opcion_pago'></span>";
    if(pasoa==8)    retorno += "<span class='opcion_confirmacion_current'></span>";
        else    retorno += "<span class='opcion_confirmacion'></span>";
		
    $('#nav').html(retorno);
}


function cargaOrigenes(){
	var cadena='';
	
	http = CreateRequest();
	http.open("GET","/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=OrigenDestino",true);
	http.onreadystatechange  = function(){
		if(http.readyState == 4 && http.status == 200) {
		if(sesion ==0) document.getElementById("tdOrigen").innerHTML ='<select name="Origen" id="tdOrigen" onChange="cargaDestinos(this)" style="width:130px;"> <option value=\"ORIGEN\">ORIGEN</option>' + http.responseText + '</select>';
		else $("#tdOrigenAge").html('<select name="Origen" id="tdOrigen" onChange="cargaDestinos(this)" style="width:130px;"> <option value=\"ORIGEN\">ORIGEN</option>' + http.responseText + '</select>');

		}
	}
	http.send(null);
}


function cargaDestinos(par){
	var cadena='';
	if(sesion ==0)document.getElementById("tdDestino").innerHTML = '<select name="Destino" id="tdDestino" style="width:130px;"><option value=-1>Cargando...</option>';
	else  $("#tdDestinoAge").html('<select name="Destino" id="tdDestino" style="width:130px;"><option value=-1>Cargando...</option>');
	//http = CreateRequest();
	
	//http.open("GET","/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=OrigenDestino&ARGUMENTS=-A"+ par.options[par.selectedIndex].value ,true);
	$.post("/netScripts/Request.aspx",
		{
		APPNAME : 'Navegante',
		PRGNAME : 'OrigenDestino',
		ARGUMENTS: 'origen',
		origen : par.options[par.selectedIndex].value
		},function(resultadoPOST){
			if(sesion ==0) 
				document.getElementById("tdDestino").innerHTML = '<select  name="Destino" id="tdDestino" style="width:130px;"><option value=DESTINO>DESTINO</option>' + resultadoPOST + '</select>' ; 
			else $("#tdDestinoAge").html('<select  name="Destino" id="tdDestino" style="width:130px;"><option value=DESTINO>DESTINO</option>' + resultadoPOST + '</select>');
		
		},'text');
	
	//http.send(null);
	
}


function pagoR(p){
		p="<a href='#' onClick='return adelante();'><img src='../imagenes/btn_pagar.jpg' alt='Pagar' width='140' height='35' border='0' id='Image1' onmouseover=\"MM_swapImage('Image1','','../imagenes/btn_pagar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";
		return p;
	}
	
	
function generaRutaAbierto(objetoruta){
	var i = 0;
	var clase, cadTabla;
	if(esint=='SI' && opeint!='' && claus!='' && mint!=0)
		var inter = '<table class="aviso" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color1">Est&aacute;s intercambiando n&uacute;mero(s) de operaci&oacute;n </td></tr><tr><td align="center" class="color1">'+ opeint +'</td></tr></table>';
	else var inter ='';
	cadTabla = "<div class='head'><strong class='negritas verde_1 20_puntos condensada'>SELECCIONE LA RUTA</strong></div>";
	cadTabla += "<div class='contenido'>" + inter;
	cadTabla += "<TABLE class='horarios' cellspacing=0 cellpadding=0 width='680' >";
	cadTabla += '<tr><td colspan="4"><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>';
	cadTabla += "<tr class='fondo3'><TH width='50' > <FONT >Clave Ruta</FONT> </TH>";
		cadTabla += "<TH width='108'> <FONT  >Descripcion Ruta</FONT> </TH>";
		cadTabla += "<TH width='62' > <FONT  >Tarifa Ruta</FONT> </TH>";
		cadTabla += "<TH width='62' > <FONT  >Opciones</FONT> </TH>";
	cadTabla += "</tr>";
	for(i=0;i<(objetoruta.length-1);i++)
	{
		cadTabla += "<tr>";
			cadTabla += "<td align='center' >"+ objetoruta[i].ClaveRuta +"</td>";
			cadTabla += "<td align='center' >"+ objetoruta[i].DescripcionRuta +"</td>";
			cadTabla += "<td align='center' >"+ objetoruta[i].TarifaRuta +"</td>";
			cadTabla += '<td align="center"><input type="radio" id="rutaele'+i+'" name="rutaele" value="'+ objetoruta[i].ClaveRuta +'"' 
			if(i==0)
				cadTabla +=' checked="checked"';
			cadTabla += '></td>';
		cadTabla += "</tr>";
	}
	cadTabla += "</table>";
	cadTabla += "</div>";
	
return cadTabla;
}


function printWindow() {
	bV = parseInt(navigator.appVersion);
	if (bV >= 4) window.print();
}


function generamain(){
var cadtabla=''
var comsim="'";
	//cadtabla= '<body onload= "MM_preloadImages('+comsim+'../imagenes/btn-seleccione_over.png'+comsim+','+comsim+'../imagenes/btn_continuar_over.jpg'+comsim+','+comsim+'../imagenes/btn_entrar_over.jpg'+comsim+','+comsim+'../imagenes/loading.gif'+comsim+');obtieneParam(leytra)">';
	window.onload=function (e){
	MM_preloadImages(+comsim+'../imagenes/btn-seleccione_over.png'+comsim+','+comsim+'../imagenes/btn_continuar_over.jpg'+comsim+','+comsim+'../imagenes/btn_entrar_over.jpg'+comsim+','+comsim+'../imagenes/loading.gif'+comsim);
	obtieneParam(leytra);
	
	obtieneParamMostrarTA('MTAINT');
	obtieneParamMostrarTC('MTCINT');
	
	}
	cadtabla += encmain();	
	cadtabla += '<!--     <form name="pago" action="/netScripts/Request.aspx" method="POST" target="_self">     -->';
	cadtabla += '<!--     <input type="hidden" name="APPNAME" value="Navegante7"/>     -->';
	cadtabla += '<!--     <input type="hidden" name="PRGNAME" value="MergeGuardaNVR"/>     -->';
	cadtabla += '<!--     <input type="hidden" name="ARGUMENTS" value="consecutivo" />     -->';
	cadtabla += '<!--     <input type="hidden" name="consecutivo" />     -->';
	cadtabla += '<div id="contenedor">';
	cadtabla += '<div id="edopasos"></div>';
	/*
	cadtabla += '<div id="header">';
	cadtabla += '<div id="logos" class="rediseno"> <a href="'+urlprin+'" target="_self">';
	cadtabla += '<img src="../imagenes/logo_main1.png" alt="logo_main1" border="0"/>';
	cadtabla += '<img class="lalinea" src="../imagenes/logo_main2.png" alt="logo_main2" border="0"/></a>';
	cadtabla += '</div> <!-- logos -->';
	cadtabla += '<div id="contacto">';
	cadtabla += '<img class= "oculto" src="../imagenes/Centel.png" width="148" height="19" alt="Centel" border="0"/>';
	cadtabla += '<a href="'+urlayu+'" class="rediseno"><img src="../imagenes/btn_ayuda.png" width="66" height="19" alt="Ayuda" border="0"/></a><br />';
	cadtabla += '<br />';
	cadtabla += '<a href="'+urlprin+'" target="_self" class="rediseno"><img class= "ocultoETN" src="../imagenes/btn_home.png" width="66" height="19" border="0" /></a> ';
	cadtabla += '</div><!-- contacto -->';
	cadtabla += '<div class="clearfix"></div>';
	cadtabla += '</div> <!-- header -->';
	*/
	cadtabla += '<div id="sidebar">';
	cadtabla += '<div id="datos">';
	cadtabla += '</div><!-- datos -->';
	   
	//cadtabla += '<div id="banner2">';
	//cadtabla += '</div><!-- banner -->';
			   
	//cadtabla += '<div id="banner">';
	//cadtabla += '</div><!-- banner -->';
	cadtabla += '<div class="clearfix"></div>';
	cadtabla += '</div> <!-- sidebar -->';
	cadtabla += '<div id="main">';
	cadtabla += '<div id="nav">';
	cadtabla += '<!--Aqui va todo el punto-->';
	cadtabla += '</div><!-- nav -->';
	cadtabla += '<div class="clearfix"></div>';
	cadtabla += '<div id="area">';
	cadtabla += '<!--Aqui va todo el cuadro-->';
	cadtabla += '</div><!-- area -->';
			
	if(viinco=='NO' && redondo=='SI' || sesion!=0 && viinco=='NO') 
	cadtabla +='<div id="area2" style="display:none"></div>';
				   
	cadtabla += '<div class="acciones">';
		
	cadtabla += '<div id="regresar" class ="regresar">';
	cadtabla += '</div>';
	cadtabla += '<div id="continuar" class="continuar">';
	//cadtabla += '<a href="#" onClick="return adelante();"><img class = "botonNav" src="../imagenes/btn_continuar.jpg" width="100" height="20" border="0" id="Image11" onmouseover="MM_swapImage('+comsim+'Image11'+comsim+','+comsim+''+comsim+','+comsim+'../imagenes/btn_continuar_over.jpg'+comsim+',1)" onmouseout="MM_swapImgRestore()" /></a>';
    cadtabla += '<a href="#" onClick="return adelante();" class="btn_ctr">Continuar ››</a>';
	cadtabla += '</div>';
	cadtabla += '<div class="clearfix"></div>';
	cadtabla += '</div><!-- acciones -->';
	cadtabla += '<div class="clearfix"></div>';
	cadtabla += '<div class="ayuda">Centro de atenci&oacute;n telef&oacute;nica '+centel+'::<a href="'+urlayu+'">Ayuda</a></div>';
	cadtabla += '</div> <!-- main -->';
	cadtabla += '<div class="clearfix"></div>';
	cadtabla += piemain();
	cadtabla += '</div> <!-- contenedor -->';
	cadtabla += '<div id="counter" class="box" ></div>';
	cadtabla += '<div id="confirmacion" title="Aviso">';
	cadtabla += '<p><span style="float:left; margin:0 7px 20px 0;"></span>SU SESI&#211;N EXPIRARA: &#191;Deseas agregar mas tiempo?</p>';
	cadtabla += '</div>';
	cadtabla += '<!--     </form>     -->';
document.write(cadtabla);
}


function variaasientos(modo){
	this.V_NumeroPasajeros= adulto + insen + menor + estudiantes + maestros;
	this.V_PasajeroActual=0;
	this.asientosaseleccion = new Array(80);
	this.V_PasajerosSel=0;
	this.pasajeros = new Array();
	this.modo==modo;
	cont = 0;
	for(i=0;i<adulto;i++)
		this.pasajeros[cont++] = new Pasajeros('Adulto')
	for(i=0;i<insen;i++)
		this.pasajeros[cont++] = new Pasajeros('INAPAM')
	for(i=0;i<menor;i++)
		this.pasajeros[cont++] = new Pasajeros('Niño')
	for(i=0;i<estudiantes;i++)
		this.pasajeros[cont++] = new Pasajeros('Estudiante')
	for(i=0;i<maestros;i++)
		this.pasajeros[cont++] = new Pasajeros('Maestro')
	
	this.agregaPasajero = function(Nombre,pas){
		if(!this.pasajeros[pas-1] ) this.pasajeros[pas-1] = new Pasajeros('Adulto');
		var divPas = $('<div>',{'class':'item'});
		a = $('<a>',{'class':'btn-asiento'});
		divPas.append(a);
		this.pasajeros[pas-1].a1 = a;
		var idpas='onChange ="javascript:this.value=this.value.toUpperCase().replace(/,/g,sustitucion);"';
		var idtipopas='';
		var nametext ='salida-nombre1';
		if(modo=='ida') idtipopas= 'onChange ="actualizanumeropasajeros();"';
		if(redondo=='SI')
		{
			if(modo=='ida') {
				idpas = 'id="pasn'+(pas-1)+'" onkeyup ="document.getElementById(&#39;pasnR'+(pas-1)+'&#39;).value = document.getElementById(&#39;pasn'+(pas-1)+'&#39).value.substring(0,50).toUpperCase();" onChange ="javascript:this.value=this.value.toUpperCase().replace(/,/g,sustitucion);"';
				idtipopas = 'id="tipopas'+(pas-1)+'" onChange ="asiento.tipopasajerosregreso(&#34;tipopas'+(pas-1)+'&#34;,&#34;tipopasR'+(pas-1)+'&#34;); actualizanumeropasajeros();"'; 
				}
				else { idpas = 'id="pasnR'+(pas-1)+'" disabled="disabled"'; 
				idtipopas ='id="tipopasR'+(pas-1)+'" disabled="disabled"'; 
				nametext ='salida-nombre2'; }
		}
		var cad='<input type="text" name="'+ nametext +'" class="campo" placeholder="Nombre completo del pasajero" value="'+Nombre+'" '+idpas+'/>'+
			'<select '+idtipopas+' name="salida-tipopas1"><option value="AD"';
			if(this.pasajeros[pas-1].TipoPas == 'Adulto') cad+='selected="selected"';
			cad +=' >Adulto</option><option value="IN" ';
			/*if(this.pasajeros[pas-1].TipoPas == 'Adulto') cad+='selected="selected"';
			cad +=' >Adulto</option><option value="IN" ';*/
			if(this.pasajeros[pas-1].TipoPas == 'INAPAM') cad+='selected="selected"';
			cad +=' >INAPAM</option><option value="NI" ';
			if(this.pasajeros[pas-1].TipoPas == 'Niño') cad+='selected="selected"';
			cad +=' >Menor</option><option value="ES" ';
			if(this.pasajeros[pas-1].TipoPas == 'Estudiante') cad+='selected="selected"';
			cad +=' >Estudiante</option><option value="MA" ';
			if(this.pasajeros[pas-1].TipoPas == 'Maestro') cad+='selected="selected"';
			cad +=' >Maestro</option></select>'+
				'<a href="#" class="btn btn-izq btn-gris" id="eliminaPas'+pas+'">Eliminar</a>'//+
			//'</div>'
		divPas.append(cad);
		if(modo=='ida') $("#detalleAsientosida").append(divPas);
		else $("#detalleAsientosRegreso").append(divPas);
		$('.boton').button(); 
		$('.campo').addClass('ui-widget ui-state-default ui-corner-all');
		this.pasajeros[pas-1].div=divPas;
			if(asiento.V_NumeroPasajeros > 8) {
					$("#agregaPasajeroida").css({'visibility': 'hidden'});
					if(redondo=='SI') $("#agregaPasajeroRegreso").css({'visibility': 'hidden'});
				}
		$("#eliminaPas"+pas).click(function(event){
		 if(asiento.V_NumeroPasajeros > 1)
		 {
			asiento.pasajeros[pas-1].div.remove();
			asiento.pasajeros[pas-1].eliminado = true;
			as = asiento.pasajeros[pas-1].asiento;
			if(asiento.pasajeros[pas-1].asiento != 0){
				asiento.desApartaAsiento(pas-1,$("#ida"+as)); //<<----------------
				asiento.pasajeros[pas-1].a.remove();
			}
			
			asiento.pasajeros[1].div= undefined;
			asiento.V_NumeroPasajeros--;
			temp = A_AsientosPasajeros; //<<----------------------------
			A_AsientosPasajeros = new Array();
			for(i=0,j=0;i<temp.length;i++){
				if(i+1!= pas){
					A_AsientosPasajeros[j] = temp[i];
					j++;
				}
			}
			asiento.actualizaPasajeroActual();
			if(redondo=='SI'){
				asientoR.pasajeros[pas-1].div.remove();
				asientoR.pasajeros[pas-1].eliminado = true;
				as = asientoR.pasajeros[pas-1].asiento;
				if(asientoR.pasajeros[pas-1].asiento != 0){
					asientoR.desApartaAsiento(pas-1,$("#Regreso"+as)); //<<----------------
					asientoR.pasajeros[pas-1].a.remove();
				}
				
				asientoR.pasajeros[1].div= undefined;
				asientoR.V_NumeroPasajeros--;
				temp = A_AsientosPasajerosRegreso; //<<----------------------------
				A_AsientosPasajerosRegreso = new Array();
				for(i=0,j=0;i<temp.length;i++){
					if(i+1!= pas){
						A_AsientosPasajerosRegreso[j] = temp[i];
						j++;
					}
				}
				asientoR.actualizaPasajeroActual();
			}
			actualizanumeropasajeros();
			$("#agregaPasajeroida").css({'visibility': 'visible'});
			if(redondo=='SI') $("#agregaPasajeroRegreso").css({'visibility': 'visible'});
		 }
		 else alert("No es posible eliminar este pasajero");
		});
	}

	this.actualizaPasajeroActual = function(){
		i = 0;
		this.V_PasajeroActual = -1;
		for(i=0;i<this.pasajeros.length;i++){
			if(this.pasajeros[i].asiento == 0 && ! this.pasajeros[i].eliminado){
				this.V_PasajeroActual = i;
				break;
			}
		}
	}
	
	this.desApartaAsiento = function( borrar,Tipo){
		numeroAsiento = this.pasajeros[borrar].Num;
		if(modo=='ida'){
			as = object_diagrama.Asientos[numeroAsiento].Asientos;
			object_diagrama.Asientos[numeroAsiento].Estados=1;
		}
		else{
			as = object_diagramaR.Asientos[numeroAsiento].Asientos;
			object_diagramaR.Asientos[numeroAsiento].Estados=1;
		}
		A_AsientosPasajeros[borrar]=0; //<-------
		$(Tipo).attr("src","../imagenes/Asiento_L.jpg");
		$(Tipo).toggleClass('seleccionado');
		this.pasajeros[borrar].a1.html('');
		this.pasajeros[borrar].a.remove();
		this.pasajeros[borrar].asiento = 0;
		this.V_PasajerosSel--;
	}
	
	this.tipopasajerosregreso = function(idvalor,idcopia){
	var u = $('#'+idvalor).val(); 
	$("#"+idcopia+" option[value="+u+"]").attr("selected",true);	
	}
	
	this.limpiapasajeros = function(){
		i = 0;
		for(i=0;i<this.pasajeros.length;i++){
			this.pasajeros[i].asiento = 0;
		}
	}
}


function Pasajeros(tipoPas){
		this.TipoPas = tipoPas;
		this.Nombre = "";
		this.asiento = 0;
		this.eliminado = false;
		this.Num = -1;
	}
	
	
function validaasientos(viaje){
var V_NumP=0;
var bandera=0;
var pasajeros= adulto + insen + menor + estudiantes + maestros;

	if(viaje=='ida' || (viinas == 'NO' && redondo == 'SI')){
		if	(asiento.V_PasajerosSel==pasajeros)
			bandera=1;
		else
 			{
 			V_NumP= pasajeros-asiento.V_PasajerosSel;
			alert(""+msj.FaltaSeleccionar+" "+V_NumP+" "+msj.AsientosdeIda);
			return false;
 			}
	}
	if(viaje=='regreso' || (viinas == 'NO' && redondo == 'SI')){
		if	(asientoR.V_PasajerosSel==pasajeros)
			bandera=1;
		else
 			{
 			V_NumP= pasajeros-asientoR.V_PasajerosSel;
			alert(""+msj.FaltaSeleccionar+" "+V_NumP+" "+msj.AsientosdeRegreso);
			return false;
 			}
	}
if(bandera == 1) return 'SI';	else return false;
}

/* ahernandez - 18 01 2013 - ##34579## - Cuando ya existe el elemento "timer", primero se elimina */
function generareloj(){
	
	if (document.getElementById('timer') != null)
	{
		$('#timer').remove();
	}
	
if (paso>=3) {
	$('#area').before('<div id="timer">'+
	'<img src="../imagenes/reloj1.gif" width="35" height="35" border="0" />'+
	'<div id="textos_complementarios_espera">TIEMPO RESTANTE:</div>'+
	'<div class="numbers" id="reloj">00</div>'+
	'<div id="textos_complementarios2_espera">Para completar este paso</div></div>');
	}
if(paso==7) $('#timer').css({top: '70px'});
	
}


function cargaOrigenesANT(){
	var cadena='';

	http = CreateRequest();
	http.open("GET","/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=OrigenDestino",true);
	http.onreadystatechange  = function(){
	
		if(http.readyState == 4 && http.status == 200) {
			if(forma1=='H') cadena = '<label for="textfield" class="OrigenDestino">Origen </label><BR><select size="1"  class="origen"  name="Origen" id="Origen" onChange="cargaDestinosANT(this)" style="width:130px;"> <option value=\"ORIGEN\">ORIGEN</option>' + http.responseText + '</select>' ;
				else cadena = '<select size="1"  class="origen" name="Origen" id="Origen" onChange="cargaDestinosANT(this)" style="width:130px;"> <option value=\"ORIGEN\">ORIGEN</option>' + http.responseText + '</select>' ;
				if(sesion==0) document.getElementById("tdOrigen").innerHTML = cadena;
					else $("#tdOrigenAge").html('<select id="tdOrigen"  name="tdOrigen" onChange="cargaDestinosANT(this)" style="width:130px;"> <option value=\"Seleccione\">ORIGEN</option>' + http.responseText + '</select>');
					//else document.getElementById("tdOrigenAge").innerHTML ='<select id="tdOrigen"  name="tdOrigen" onChange="cargaDestinosANT(this)"> <option value=\"Seleccione\">ORIGEN</option>' + http.responseText + '</select>';
		}
	}
	http.send(null);
}


function cargaOrigenesMOCKUP(){
	var cadena='';
	http = CreateRequest()	
	http.open("GET","/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=OrigenDestino",true);
	http.onreadystatechange  = function(){
			if(http.readyState == 4 && http.status == 200) {
			var cadorg =  http.responseText;
			cadena = '<select size="1" style="width:200px" name="Origen" id="Origen" data-placeholder="'+txt.DeDondeSales+'"><option value=""></option>' + cadorg + '</select>' ;
			document.getElementById("tdOrigen").innerHTML = cadena;
			//$("#odm_ubicacion").attr("placeholder","¿De dónde sales?");
			var myOpts = document.getElementById('Origen').options;
			document.getElementById('Origen').options;
			var n = myOpts.length;
//			alert("elementos     "+n);
			for (var i=0 ; i<n ; i++) {
				orgT.push({"label":myOpts[i].text,"value":myOpts[i].text,"id":myOpts[i].value});
			}
			ComvierteCamelCase('Origen');
			$('#Origen').chosen().on('change', function() {$("#Origen option[value="+this.value+"]").attr("selected",true);
															$('#tdDestino').html('<select name="Destino" id="Destino" style="width:200px;" data-placeholder="'+txt.Espera+'"></select>');
															$('#Destino').chosen();
															cargaDestinosMOCKUP(this.value); });
//			alert("fin");

		}
	}
	http.send(null);
}

function cargaDestinosMOCKUP(ori){
	var cadena='';
	http = CreateRequest();
	http.open("GET","/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=OrigenDestino&ARGUMENTS=-A"+ ori,true);
	http.onreadystatechange  = function(){
			if(http.readyState == 4 && http.status == 200) {
			cadena = '<select size="1" name="Destino" id="Destino" style="width:200px" data-placeholder="'+txt.ADondeVas+'"> <option value=""></option>' + http.responseText + '</select>' ;
			document.getElementById("tdDestino").innerHTML = cadena;
			
			var myOpts = document.getElementById('Destino').options;
			var n = myOpts.length;
			
			desT.length = 0;
			for (var i=0 ; i<n ; i++) {
				desT.push({"label":myOpts[i].text,"value":myOpts[i].text,"id":myOpts[i].value});
			}
			//$("#odm_destino").attr("placeholder","¿A dónde vas?");
			ComvierteCamelCase('Destino');
			$('#Destino').chosen().on('change', function() {$("#Destino option[value="+this.value+"]").attr("selected",true);});
		}
	}
	http.send(null);
}


function cargaDestinosANT(par){
	var cadena='';
	//if(document.form.Origen.value != 'ORIGEN'){
	if(sesion==0) document.getElementById("tdDestino").innerHTML = '<select class="ancho1" name="Destino" id="Destino" style="width:130px;"><option value=-1>Cargando...</option>';
		else $("#tdDestinoAge").html('<select  name="tdDestino" id="tdDestino"><option value=-1>Cargando...</option></select>');
	//else document.getElementById("tdDestinoAge").innerHTML ='<select  name="tdDestino" id="tdDestino"><option value=-1>Cargando...</option></select>';
	http = CreateRequest();
	http.open("GET","/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=OrigenDestino&ARGUMENTS=-A"+ par.options[par.selectedIndex].value ,true);
	http.onreadystatechange  = function(){
	
		if(http.readyState == 4 && http.status == 200) {
			if(forma1=='H') var cadena ='<label for="textfield2" class="OrigenDestino">Destino</label><BR><select  size="1" class="origen" name="Destino" id="Destino" style="width:130px;"><option value=DESTINO>DESTINO</option>' + http.responseText + '</select>' ;
				else  cadena = '<select  size="1" class="origen" name="Destino" id="Destino"><option value=DESTINO>DESTINO</option>' + http.responseText + '</select>' ; 
			if(sesion==0) document.getElementById("tdDestino").innerHTML = cadena;
				else $("#tdDestinoAge").html('<select  name="tdDestino" id="tdDestino" style="width:130px;"><option value=Seleccione>DESTINO</option>' + http.responseText + '</select>');					
				//else document.getElementById("tdDestinoAge").innerHTML ='<select  name="tdDestino" id="tdDestino"><option value=Seleccione>DESTINO</option>' + http.responseText + '</select>' ; 
		}
	}
	
	http.send(null);
	
}

function quitaError(id){
		$("#"+ id).css({border: '1px solid #D3D3D3'})
}

function ponError(id){
		$("#" +id).css({border: '3px solid #f40000'});
		$("#" +id).focus();
}

function habilitarArea(area){
	$('dt').removeClass('textos_resumen_current');
	$('#' + area).addClass('textos_resumen_current');
}

function validarcoma(e) { // 1
    
}

function encmain(){
	vrcad='';
	//if (sesion !=0 )
	if (urlenc!='' && urlenc.substring(2,5) != '$MG')
	{
		vrcad = '<iframe src="'+urlenc+'" id="encmain" scrolling="no"></iframe>';
	}
	else{
		vrcad += '<div id="header">';
		vrcad += '<div id="logos" class="rediseno"> <a href="'+urlprin+'" target="_self">';
		vrcad += '<img src="../imagenes/logo_main1.png" alt="logo_main1" border="0"/>';
		vrcad += '<img class="lalinea" src="../imagenes/logo_main2.png" alt="logo_main2" border="0"/></a>';
		vrcad += '</div> <!-- logos -->';
		vrcad += '</div> <!-- header -->';
	}
	return vrcad;
}
function piemain(){
	vrcad='';
	//if(sesion == 0)
	if(urlpie!='' && urlpie.substring(2,5) != '$MG')
		vrcad = '<iframe src="'+urlpie+'" id="piemain" scrolling="no"></iframe>';
	return vrcad;
}
function ComvierteCamelCase(elem)
{
	var array = new Array();

	$('#'+elem+' option').each(function(i){
		array = $(this).text().toLowerCase().split(" ");
		for (var i = 0; i < array.length; i++) {
			array[i] = array[i].substring(0,1).toUpperCase() + array[i].substring(1, array[i].length);
		};
		var text = "";
		for (var i = 0; i < array.length; i++) {
			text += array[i] + " ";
		};

		$(this).text(text.substring(0, text.length-1));
	});
	
}

function fechaenletra(d)
{
		var fecha="";
		var parts = d.split("/");
		var dt = new Date(parseInt(parts[2], 10),
                  parseInt(parts[1], 10)-1,
                  parseInt(parts[0], 10));
				  
				  
		switch(dt.getDay()) 
		{
		case 1:
        fecha+=msj.Lunes;
        break;
		case 2:
		fecha+=msj.Martes;
        break;
		case 3:
		fecha+=msj.Miercoles;
        break;
		case 4:
		fecha+=msj.Jueves;
        break;
		case 5:
		fecha+=msj.Viernes;
        break;
		case 6:
		fecha+=msj.Sabado;
        break;
		case 0:
		fecha+=msj.Domingo;
        break;
		default:
        fecha+=" "
		}
		
		fecha+=" "+parts[0]+" de ";
		
		switch(parseInt(parts[1], 10)-1) 
		{
		case 0:
        fecha+=msj.Enero;
        break;
		case 1:
		fecha+=msj.Febrero;
        break;
		case 2:
		fecha+=msj.Marzo;
        break;
		case 3:
		fecha+=msj.Abril;
        break;
		case 4:
		fecha+=msj.Mayo;
        break;
		case 5:
		fecha+=msj.Junio;
        break;
		case 6:
		fecha+=msj.Julio;
        break;
		case 7:
		fecha+=msj.Agosto;
        break;
		case 8:
		fecha+=msj.Septiembre;
        break;
		case 9:
		fecha+=msj.Octubre;
        break;
		case 10:
		fecha+=msj.Noviembre;
        break;
		case 11:
		fecha+=msj.Diciembre;
        break;
		default:
        fecha+=" "
		}
		
		fecha+=" "+parts[2];
		return fecha;
}