var columnas = eval( [
			{"id": "fechaSalida","nombreColumna":"Fecha de<br>Salida","width":"85"},
			{"id": "horaSalida","nombreColumna":"Hora de<br>Salida","width":"85"},
			{"id": "fechaLlegada","nombreColumna":"Fecha de<br>llegada","width":"85"},
			{"id": "horaLlegada","nombreColumna":"Hora de<br>llegada","width":"85"},
			{"id": "claseDeServicio","nombreColumna":"Servicio","width":"85"},
			{"id": "linea","nombreColumna":"Linea","width":"85"},
			{"id": "tarifa","nombreColumna":"Costo","width":"85"},
			{"id": "selecciona","nombreColumna":"Seleccionar","width":"85"}
			]);
			
//Genera la tabla de corridas para modo ida o regreso
function generaCorridas(corridas,modo){
	var i = 0;
	var clase, cadTabla;
	if(esint=='SI' && opeint!='' && claus!='' && mint!=0)
		var inter = '<table class="aviso" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">Estás intercambiando número(s) de operación </td></tr><tr><td align="center" class="color1">'+ opeint +'</td></tr></table>';
	else var inter ='';
	cadTabla ="<div class='head'><img width='690' height='57' ";
	if(modo=='ida') cadTabla +=" src='../imagenes/titulos-horario-salida.jpg'> </div>";
	else cadTabla +=" src='../imagenes/titulos-horario-regreso.jpg'> </div>";
	cadTabla += "<div class='contenido'>" + inter;
	cadTabla += "<table class='horarios' width='680' border='0' cellspacing='0' cellpadding='0'>";
	if (corridas[0].claveCorrida!='0'){
		cadTabla += "<tr class='azul_1'>";
		for( var j = 0;j<columnas.length;j++){
			cadTabla+= "<th";
			if(columnas[j].width) cadTabla+=" width='"+columnas[j].width+"'>";
			else cadTabla+= ">";
			cadTabla += columnas[j].nombreColumna + "</th>";
		}
		cadTabla+='<tr><td width="85" colspan="8"><img width="680" height="15" style="margin-top:5px;" src="../imagenes/separador_200.png"></td></tr>'
		do {
			if(viinco == 'NO' && redondo == 'SI' && modo!='ida') cadTabla += " <tr id=corr"+(i+500)+" class=''>";
			else	cadTabla += " <tr id=corr"+i+" class=''>";
			for(var j = 0;j<columnas.length;j++){
				cadTabla += "<td>";
				if(columnas[j].items){
					for(var k=0;k<columnas[j].items.length;k++){
						cadTabla+=pintaColumna(i,columnas[j].items[k].id,modo,corridas);
					}
				}
				else cadTabla+=pintaColumna(i,columnas[j].id,modo,corridas);
				cadTabla += "</td>";
			}
			cadTabla += "</tr>";
			i++;
		} while (corridas[i])
	}else cadTabla += "<tr><td>No hay salidas para los criterios de ida seleccionados... </td></tr>";
	cadTabla += "</table> ";
	cadTabla += "</div>";
	
	return cadTabla;
}
function pintaColumna(corrida,columna,modo,corridas){
	var cad="";
	if(columna == "fechaSalida") cad += corridas[corrida].FechaSalidaBoleto;
	else if(columna == "horaSalida") cad += corridas[corrida].HoraSalida;
	else if(columna == "fechaLlegada")cad += corridas[corrida].FechaLlegada;
	else if(columna == "horaLlegada")cad += corridas[corrida].HoraLlegada;
	else if(columna == "claseDeServicio")cad += corridas[corrida].ClaveServicio;
	else if(columna == "linea")cad += "<img src='../imagenes/logo_"+corridas[corrida].EmpresaCorrida+".png' width='70' height='20' alt='"+corridas[corrida].DescripcionEmpresaCorrida+"' />";
	else if(columna == "tarifa")cad += corridas[corrida].Tarifa;
	else if(columna == "itinerario"){
		var a = "<a class='iframe' href='Request.aspx?APPNAME=NAVEGANTE&PRGNAME=RecuperaItinerarioVR&ARGUMENTS=-A"+corridas[corrida].claveCorrida.replace(/^\s*|\s*$/g,"")+",-A"+corridas[corrida].FechaSalidaInicio+",-A"+corridas[corrida].FechaSalidaBoleto+",-A"+corridas[corrida].HoraSalida+",-A";
		if(modo=='ida') a += oficinao+",-A"+oficinar;
		else a += oficinar+",-A"+oficinao;
		a += ",-A,-A"+corridas[corrida].EmpresaCorrida+"'>ver itinerario</a>";
		cad += a;
	}
	else if(columna == "selecciona"){
		if(viinco == 'NO' && modo!='ida')	cad += "<img src='../imagenes/btn-seleccione.png' alt='Seleccione' width='73' height='20' id='Image"+(corrida+500)+"'  onmouseover=\"MM_swapImage('Image"+(corrida+500)+"','',' ../imagenes/btn-seleccione_over.png\',1)\" onmouseout='MM_swapImgRestore()'  onClick='return ";
		else	cad += "<img src='../imagenes/btn-seleccione.png' alt='Seleccione' width='73' height='20' id='Image"+(corrida+100)+"'  onmouseover=\"MM_swapImage('Image"+(corrida+100)+"','',' ../imagenes/btn-seleccione_over.png\',1)\" onmouseout='MM_swapImgRestore()'  onClick='return ";
		if(modo=='ida') cad += " Cida(" +corrida+");'  />";
		else cad += "Cregreso(" +corrida+");'  />";
	}
	return cad;
}
//Genera ventana personalizacion
function generaPersonaliza(personalizaObj){
	var x = adulto + insen + menor + estudiantes + maestros;
	var ad,is,ni,es,ma;
	ad = x-insen-menor-estudiantes-maestros;
	is = x-menor-estudiantes-maestros;
	ni = x-estudiantes-maestros;
	es = x-maestros;
	ma = x;	
	oriabierto = personalizaObj.Ori;
	desabierto = personalizaObj.Des;
	if(esint=='NO' ) {var ti='radio'; var sele='';}
	else {var ti='hidden'; var sele='checked="checked"'; pago = 'EF'}
	
	
	if(esint=='SI' && opeint!='' && claus!='' && mint!=0)
		var inter = '<table class="aviso" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">Estás intercambiando número(s) de operación </td></tr><tr><td align="center" class="color1">'+ opeint +'</td></tr></table>';
	else var inter ='';
		
	var cadTabla = "<div class='head'>";
	cadTabla += "<img src='../imagenes/titulos-llenar-formulario.jpg' width='690' height='57' />";
	cadTabla += "</div><!-- head -->";
	cadTabla += "<div class='contenido'>" + inter;
	cadTabla += "<table width='95%' border='0' align='center' cellpadding='0' cellspacing='0' class='forma'	>";
	cadTabla += "<tr>";
	cadTabla += "<td><table class='formulario' width='100%' border='0' cellspacing='0' cellpadding='0'>";
	cadTabla += "<tr>";
	cadTabla += "<td><table class='nf' width='120' border='0' cellspacing='0' cellpadding='0'>";
	cadTabla += "<tr>";
	cadTabla += "<td class='titulo'>COSTO TOTAL</td></tr>";
	cadTabla += "<td align='center' bgcolor='#0098DB' class='precio'>$"+personalizaObj.CostoTotal+"</td>";
	cadTabla += "</tr>";
	cadTabla += "</table></td>";
	//cadTabla += "<td class='alert'>*campos requeridos</td>";
	cadTabla += " </tr>";
	cadTabla += "</table></td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	if(sesion!=  0 && !vendir){
		cadTabla += "<td><table class='formulario' width='100%' border='0' cellspacing='0' cellpadding='0'>";
		cadTabla += "<tr>";
		cadTabla += " <td>Forma de Pago: </td>";
		cadTabla += "<td><label>";
		cadTabla += "<input type='radio' name='pago' value='EF' id='pago_0' onClick='TipoPago(1);' "+sele+" />";
		cadTabla += "Efectivo</label></td>";
		cadTabla += "<td> <label>";
		cadTabla += "<input type='"+ti+"' name='pago' value='TB' id='pago_1' onClick='TipoPago(2);'/>";
		if(esint=='NO') cadTabla += "Pago con Tarjeta";
		cadTable += "</label></td>";
		cadTabla += "</tr>";
		cadTabla += "</table></td>";
	}
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	cadTabla += "<td><table class='formulario' width='650' border='0' cellspacing='0' cellpadding='0'>";
	cadTabla += "<tr>";
	cadTabla += "<td width='120'><label for='domicilio'>Domicilio</label></td>";
	cadTabla += "<td colspan='3'><input name='domicilio' type='text' id='domicilio' size='50' />";
	cadTabla += "<span class='alert'>*</span></td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	cadTabla += "<td><label for='ciudad'>Ciudad</label></td>";
	cadTabla += "<td width='195'><input name='ciudad' type='text' id='ciudad' size='20' /></td>";
	cadTabla += "<td width='96'><label for='codigoPostal'>Código postal</label></td>";
	cadTabla += "<td width='239'><input name='codigoPostal' type='text' id='codigoPostal' size='7' /></td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	cadTabla += "<td><label for='select'>Pais</label></td>";
	cadTabla += "<td colspan='3'><select name='select' id='select'>";
	cadTabla +=    "<option value='AF'>Afganistán</option>"+
    "<option value='AL'>Albania</option>"+
    "<option value='DE'>Alemania</option>"+
    "<option value='AD'>Andorra</option>"+
    "<option value='AO'>Angola</option>"+
    "<option value='AI'>Anguilla</option>"+
    "<option value='AQ'>Antártida</option>"+
    "<option value='AG'>Antigua y Barbuda</option>"+
    "<option value='AN'>Antillas Holandesas</option>"+
    "<option value='SA'>Arabia Saudí</option>"+
    "<option value='DZ'>Argelia</option>"+
    "<option value='AR'>Argentina</option>"+
    "<option value='AM'>Armenia</option>"+
    "<option value='AW'>Aruba</option>"+
    "<option value='AU'>Australia</option>"+
    "<option value='AT'>Austria</option>"+
    "<option value='AZ'>Azerbaiyán</option>"+
    "<option value='BS'>Bahamas</option>"+
    "<option value='BH'>Bahrein</option>"+
    "<option value='BD'>Bangladesh</option>"+
    "<option value='BB'>Barbados</option>"+
    "<option value='BE'>Bélgica</option>"+
    "<option value='BZ'>Belice</option>"+
    "<option value='BJ'>Benin</option>"+
    "<option value='BM'>Bermudas</option>"+
    "<option value='BY'>Bielorrusia</option>"+
    "<option value='MM'>Birmania</option>"+
    "<option value='BO'>Bolivia</option>"+
    "<option value='BA'>Bosnia y Herzegovina</option>"+
    "<option value='BW'>Botswana</option>"+
    "<option value='BR'>Brasil</option>"+
    "<option value='BN'>Brunei</option>"+
    "<option value='BG'>Bulgaria</option>"+
    "<option value='BF'>Burkina Faso</option>"+
    "<option value='BI'>Burundi</option>"+
    "<option value='BT'>Bután</option>"+
    "<option value='CV'>Cabo Verde</option>"+
    "<option value='KH'>Camboya</option>"+
    "<option value='CM'>Camerún</option>"+
    "<option value='CA'>Canadá</option>"+
    "<option value='TD'>Chad</option>"+
    "<option value='CL'>Chile</option>"+
    "<option value='CN'>China</option>"+
    "<option value='CY'>Chipre</option>"+
    "<option value='VA'>Ciudad del Vaticano (Santa Sede)</option>"+
    "<option value='CO'>Colombia</option>"+
    "<option value='KM'>Comores</option>"+
    "<option value='CG'>Congo</option>"+
    "<option value='CD'>Congo, República Democrática del</option>"+
    "<option value='KR'>Corea</option>"+
    "<option value='KP'>Corea del Norte</option>"+
    "<option value='CI'>Costa de Marfíl</option>"+
    "<option value='CR'>Costa Rica</option>"+
    "<option value='HR'>Croacia (Hrvatska)</option>"+
    "<option value='CU'>Cuba</option>"+
    "<option value='DK'>Dinamarca</option>"+
    "<option value='DJ'>Djibouti</option>"+
    "<option value='DM'>Dominica</option>"+
    "<option value='EC'>Ecuador</option>"+
    "<option value='EG'>Egipto</option>"+
    "<option value='SV'>El Salvador</option>"+
    "<option value='AE'>Emiratos Árabes Unidos</option>"+
    "<option value='ER'>Eritrea</option>"+
    "<option value='SI'>Eslovenia</option>"+
    "<option value='ES'>España</option>"+
    "<option value='US'>Estados Unidos</option>"+
    "<option value='EE'>Estonia</option>"+
    "<option value='ET'>Etiopía</option>"+
    "<option value='FJ'>Fiji</option>"+
    "<option value='PH'>Filipinas</option>"+
    "<option value='FI'>Finlandia</option>"+
    "<option value='FR'>Francia</option>"+
    "<option value='GA'>Gabón</option>"+
    "<option value='GM'>Gambia</option>"+
    "<option value='GE'>Georgia</option>"+
    "<option value='GH'>Ghana</option>"+
    "<option value='GI'>Gibraltar</option>"+
    "<option value='GD'>Granada</option>"+
    "<option value='GR'>Grecia</option>"+
    "<option value='GL'>Groenlandia</option>"+
    "<option value='GP'>Guadalupe</option>"+
    "<option value='GU'>Guam</option>"+
    "<option value='GT'>Guatemala</option>"+
    "<option value='GY'>Guayana</option>"+
    "<option value='GF'>Guayana Francesa</option>"+
    "<option value='GN'>Guinea</option>"+
    "<option value='GQ'>Guinea Ecuatorial</option>"+
    "<option value='GW'>Guinea-Bissau</option>"+
    "<option value='HT'>Haití</option>"+
    "<option value='HN'>Honduras</option>"+
    "<option value='HU'>Hungría</option>"+
    "<option value='IN'>India</option>"+
    "<option value='ID'>Indonesia</option>"+
    "<option value='IQ'>Irak</option>"+
    "<option value='IR'>Irán</option>"+
    "<option value='IE'>Irlanda</option>"+
    "<option value='BV'>Isla Bouvet</option>"+
    "<option value='CX'>Isla de Christmas</option>"+
    "<option value='IS'>Islandia</option>"+
    "<option value='KY'>Islas Caimán</option>"+
    "<option value='CK'>Islas Cook</option>"+
    "<option value='CC'>Islas de Cocos o Keeling</option>"+
    "<option value='FO'>Islas Faroe</option>"+
    "<option value='HM'>Islas Heard y McDonald</option>"+
    "<option value='FK'>Islas Malvinas</option>"+
    "<option value='MP'>Islas Marianas del Norte</option>"+
    "<option value='MH'>Islas Marshall</option>"+
    "<option value='UM'>Islas menores de Estados Unidos</option>"+
    "<option value='PW'>Islas Palau</option>"+
    "<option value='SB'>Islas Salomón</option>"+
    "<option value='SJ'>Islas Svalbard y Jan Mayen</option>"+
    "<option value='TK'>Islas Tokelau</option>"+
    "<option value='TC'>Islas Turks y Caicos</option>"+
    "<option value='VI'>Islas Vírgenes (EE.UU.)</option>"+
    "<option value='VG'>Islas Vírgenes (Reino Unido)</option>"+
    "<option value='WF'>Islas Wallis y Futuna</option>"+
    "<option value='IL'>Israel</option>"+
    "<option value='IT'>Italia</option>"+
    "<option value='JM'>Jamaica</option>"+
    "<option value='JP'>Japón</option>"+
    "<option value='JO'>Jordania</option>"+
    "<option value='KZ'>Kazajistán</option>"+
    "<option value='KE'>Kenia</option>"+
    "<option value='KG'>Kirguizistán</option>"+
    "<option value='KI'>Kiribati</option>"+
    "<option value='KW'>Kuwait</option>"+
    "<option value='LA'>Laos</option>"+
    "<option value='LS'>Lesotho</option>"+
    "<option value='LV'>Letonia</option>"+
    "<option value='LB'>Líbano</option>"+
    "<option value='LR'>Liberia</option>"+
    "<option value='LY'>Libia</option>"+
    "<option value='LI'>Liechtenstein</option>"+
    "<option value='LT'>Lituania</option>"+
    "<option value='LU'>Luxemburgo</option>"+
    "<option value='MK'>Macedonia, Ex-República Yugoslava de</option>"+
    "<option value='MG'>Madagascar</option>"+
    "<option value='MY'>Malasia</option>"+
    "<option value='MW'>Malawi</option>"+
    "<option value='MV'>Maldivas</option>"+
    "<option value='ML'>Malí</option>"+
    "<option value='MT'>Malta</option>"+
    "<option value='MA'>Marruecos</option>"+
    "<option value='MQ'>Martinica</option>"+
    "<option value='MU'>Mauricio</option>"+
    "<option value='MR'>Mauritania</option>"+
    "<option value='YT'>Mayotte</option>"+
    "<option value='MX' selected>México</option>"+
    "<option value='FM'>Micronesia</option>"+
    "<option value='MD'>Moldavia</option>"+
    "<option value='MC'>Mónaco</option>"+
    "<option value='MN'>Mongolia</option>"+
    "<option value='MS'>Montserrat</option>"+
    "<option value='MZ'>Mozambique</option>"+
    "<option value='NA'>Namibia</option>"+
    "<option value='NR'>Nauru</option>"+
    "<option value='NP'>Nepal</option>"+
    "<option value='NI'>Nicaragua</option>"+
    "<option value='NE'>Níger</option>"+
    "<option value='NG'>Nigeria</option>"+
    "<option value='NU'>Niue</option>"+
    "<option value='NF'>Norfolk</option>"+
    "<option value='NO'>Noruega</option>"+
    "<option value='NC'>Nueva Caledonia</option>"+
    "<option value='NZ'>Nueva Zelanda</option>"+
    "<option value='OM'>Omán</option>"+
    "<option value='NL'>Países Bajos</option>"+
    "<option value='PA'>Panamá</option>"+
    "<option value='PG'>Papúa Nueva Guinea</option>"+
    "<option value='PK'>Paquistán</option>"+
    "<option value='PY'>Paraguay</option>"+
    "<option value='PE'>Perú</option>"+
    "<option value='PN'>Pitcairn</option>"+
    "<option value='PF'>Polinesia Francesa</option>"+
    "<option value='PL'>Polonia</option>"+
    "<option value='PT'>Portugal</option>"+
    "<option value='PR'>Puerto Rico</option>"+
    "<option value='QA'>Qatar</option>"+
    "<option value='UK'>Reino Unido</option>"+
    "<option value='CF'>República Centroafricana</option>"+
    "<option value='CZ'>República Checa</option>"+
    "<option value='ZA'>República de Sudáfrica</option>"+
    "<option value='DO'>República Dominicana</option>"+
    "<option value='SK'>República Eslovaca</option>"+
    "<option value='RE'>Reunión</option>"+
    "<option value='RW'>Ruanda</option>"+
    "<option value='RO'>Rumania</option>"+
    "<option value='RU'>Rusia</option>"+
    "<option value='EH'>Sahara Occidental</option>"+
    "<option value='KN'>Saint Kitts y Nevis</option>"+
    "<option value='WS'>Samoa</option>"+
    "<option value='AS'>Samoa Americana</option>"+
    "<option value='SM'>San Marino</option>"+
    "<option value='VC'>San Vicente y Granadinas</option>"+
    "<option value='SH'>Santa Helena</option>"+
    "<option value='LC'>Santa Lucía</option>"+
    "<option value='ST'>Santo Tomé y Príncipe</option>"+
    "<option value='SN'>Senegal</option>"+
    "<option value='SC'>Seychelles</option>"+
    "<option value='SL'>Sierra Leona</option>"+
    "<option value='SG'>Singapur</option>"+
    "<option value='SY'>Siria</option>"+
    "<option value='SO'>Somalia</option>"+
    "<option value='LK'>Sri Lanka</option>"+
    "<option value='PM'>St. Pierre y Miquelon</option>"+
    "<option value='SZ'>Suazilandia</option>"+
    "<option value='SD'>Sudán</option>"+
    "<option value='SE'>Suecia</option>"+
    "<option value='CH'>Suiza</option>"+
    "<option value='SR'>Surinam</option>"+
    "<option value='TH'>Tailandia</option>"+
    "<option value='TW'>Taiwán</option>"+
    "<option value='TZ'>Tanzania</option>"+
    "<option value='TJ'>Tayikistán</option>"+
    "<option value='TF'>Territorios franceses del Sur</option>"+
    "<option value='TP'>Timor Oriental</option>"+
    "<option value='TG'>Togo</option>"+
    "<option value='TO'>Tonga</option>"+
    "<option value='TT'>Trinidad y Tobago</option>"+
    "<option value='TN'>Túnez</option>"+
    "<option value='TM'>Turkmenistán</option>"+
    "<option value='TR'>Turquía</option>"+
    "<option value='TV'>Tuvalu</option>"+
    "<option value='UA'>Ucrania</option>"+
    "<option value='UG'>Uganda</option>"+
    "<option value='UY'>Uruguay</option>"+
    "<option value='UZ'>Uzbekistán</option>"+
    "<option value='VU'>Vanuatu</option>"+
    "<option value='VE'>Venezuela</option>"+
    "<option value='VN'>Vietnam</option>"+
    "<option value='YE'>Yemen</option>"+
    "<option value='YU'>Yugoslavia</option>"+
    "<option value='ZM'>Zambia</option>"+
    "<option value='ZW'>Zimbabue</option>"+
    "</select>";	
	
	cadTabla += " <span class='alert'>*</span></td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	cadTabla += "<td> <label for='telefono'>Teléfono Casa/Oficina: </label></td>";
	cadTabla += "<td colspan='3'><input type='text' name='telefono' id='telefono' /> ";
	cadTabla += "(incluya la lada de larga distancia)</td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	cadTabla += "<td><label for='email'>Correo electrónico</label></td>";
	cadTabla += "<td colspan='3'><input type='text' name='email' id='email' />";
	cadTabla += "<span class='alert'>*</span></td>";
	cadTabla += "</tr>";
	cadTabla += "</table></td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	cadTabla += "<td>&nbsp;</td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	cadTabla += " <td class='colorAlt pad'><strong>REGISTRO DE PASAJEROS</strong></td>";
	cadTabla += "</tr>";
	//cadTabla += "<tr>";
	//cadTabla += "<td  class='colorAlt pad'><a onClick='return autoRelleno();' href='#'><img src='../imagenes/btn_autorrelleno.png' alt='Autorrelleno' width='102' height='22' border='0' id='Image1' onmouseover=\"MM_swapImage('Image1','','../imagenes/btn_autorrelleno_over.png',1)\" onmouseout='MM_swapImgRestore()' /></a> Utilizar el primer nombre para todos los pasajeros</td>";
	//cadTabla += "</tr>";
	cadTabla += "<tr>";
	cadTabla += "<td>&nbsp;</td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	cadTabla += "<td><table class='formulario' width='600' border='0' cellspacing='0' cellpadding='0'>";
	var tipo;
	for(cont=1;cont<=x;cont++){		
		if (adulto>0 && cont <= ad){			
			tipo = 'ADULTO';	
			tipoAbre = personalizaObj.Adul;
			tipop = 'AD';}
		else if (insen>0 && cont <= is)	{	
			tipo = 'INSEN';
			tipoAbre = personalizaObj.Ins;
			tipop = 'IN';}
		else if (menor>0 && cont <= ni)	{	
			tipo = 'MENOR';
			tipoAbre = personalizaObj.Nin;
			tipop = 'NI';}
		else if (estudiantes>0 && cont <= es){		
			tipo = 'ESTUDIANTE';
			tipoAbre = personalizaObj.Est;
			tipop = 'ES';}
		else if (maestros>0 && cont <= ma){		
			tipo = 'MAESTRO';
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
	cadTabla += "<label for='checkbox'>Acepto </label>";
	cadTabla += "<a class='iframe' href='../imagenes/terminos.html'>términos y condiciones</a> de pago y precio.</td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	cadTabla += "<td>&nbsp;</td>";
	cadTabla += "</tr>";
	cadTabla += "<tr>";
	cadTabla += "<td><table class='formulario' width='517' border='0' cellspacing='0' cellpadding='0'>";
	cadTabla += "<tr>";
	cadTabla += "<td><label for='uword'>Capture el texto como se muestra en la imagen</label></td>";
		
	cadTabla += sjcap();
	cadTabla += "<br/>";
	cadTabla += "<a href='#' onClick='return RefreshImage();'>Refrescar imagen</a></td>";
	cadTabla += "</tr>";
	cadTabla += "</table></td>";
	cadTabla += "</tr>";
	cadTabla += "</table>";
	cadTabla += "</div><!-- contenido -->";
		
	return cadTabla;	
}
//Genera resumen modo 1 ce o modo 2 para ne
function generaResumen(modo){
	if(esint=='SI' && opeint!='' && claus!='' && mint!=0)
		var inter = '<table class="" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">Estás intercambiando número(s) de operación </td></tr><tr><td align="center" class="color1">'+ opeint +'</td></tr></table>';
		else var inter ='';
	
	var cadTabla ="<div class='head'>";
	cadTabla +="<img src='../imagenes/titulos-verifique-su-viaje.jpg' width='690' height='57' />";
	cadTabla +="</div><!-- head -->" ;            
	cadTabla +="<div class='contenido'>" + inter;
	cadTabla +="<table width='95%' border='0' align='center' cellpadding='0' cellspacing='0' class='forma'>";
	cadTabla +="<tr>";
	cadTabla +="<td class='recuadroBlanco'><table width='640' border='0' align='center' cellpadding='0' cellspacing='0' class='formulario'>";
	cadTabla +="<tr>";
	cadTabla +="<td colspan='6' class='datos'><span class='color5'>Datos del</span> <span class='color6'>viaje de salida</span></td>";
	cadTabla +="</tr>";
	cadTabla +="<tr class='color7'>";
	if(modo!=2){
		cadTabla +="<td width='18%' align='center'><strong>Dia</strong></td>";
		cadTabla +="<td width='9%' align='center'><strong>Hora</strong></td>";
	}
	cadTabla +="<td width='15%' align='center'><strong>Servicio</strong></td>";
	cadTabla +="<td width='3%' align='center'>&nbsp;</td>";
	cadTabla +="<td width='23%' align='center'><strong>Origen</strong></td>";
	cadTabla +="<td width='32%' align='center'><strong>Destino</strong></td>";
	cadTabla +="</tr>";
	cadTabla +="<tr>";
	if(modo!=2)
	{
		cadTabla +="<td align='center'>"+corridaIda.FechaSalidaBoleto+"</td>";
		cadTabla +="<td align='center'>"+corridaIda.HoraSalida+"</td>";
		cadTabla +="<td align='center'>"+corridaIda.ClaveServicio+"</td>";
	}
	else{
		cadTabla +="<td align='center'>"+desSer+"</td>";
	}	
	cadTabla +="<td align='center'>&nbsp;</td>";
	if(modo!=2) cadTabla +="<td align='center'>"+oficinaori+"</td>"; else cadTabla +="<td align='center'>"+oriabierto+"</td>";
	if(modo!=2) cadTabla +="<td align='center'>"+oficinareg+"</td>"; else cadTabla +="<td align='center'>"+desabierto+"</td>";
	cadTabla +="</tr>";
	cadTabla +="</table></td>";
	cadTabla +="</tr>";
	cadTabla +="<tr>";
	cadTabla +="<td>&nbsp;</td>";
	cadTabla +="</tr>";
	cadTabla +="<tr>";
	cadTabla +="<td><table width='640' border='0' align='center' cellpadding='0' cellspacing='0' class='formulario'>";
	cadTabla +="<tr>";
	cadTabla +="<td colspan='7' class='datos'><span class='color5'>Datos del</span> <span class='color6'>pasajero</span></td>";
	cadTabla +="</tr>";
	
	//Se ocupa ver que asiento es asignado acada tipo de pasajero
	for (x=0;x<pasajeros.length;x++){	
		cadTabla +="<tr>";
		cadTabla +="<td width='8%' align='right'><img src='../imagenes/flechaVerde2.png' width='10' height='12' /></td>";
		cadTabla +="<td width='3%'>&nbsp;</td>";
		cadTabla +="<td width='32%' class='color2'>"+pasajeros[x].value+"</td>";
		cadTabla +="<td width='15%' class='color3'>"+tipoPas[x]+"</td>";
		if(modo!=2){
			cadTabla +="<td width='12%' class='color3'><strong>ASIENTO</strong></td>";
			cadTabla +="<td width='5%' align='center' class='numAsiento'>"+ A_AsientosPasajeros[x] +"</td>";
		}
		cadTabla +="<td width='25%'>&nbsp;</td>" ;                     
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
		cadTabla +="<td colspan='6' class='datos'><span class='color5'>Datos del</span> <span class='color6'>viaje de regreso</span></td>";
		cadTabla +="</tr>";
		cadTabla +="<tr class='color7'>";
		if(modo!=2){
			cadTabla +="<td width='18%' align='center'><strong>Dia</strong></td>";
			cadTabla +="<td width='9%' align='center'><strong>Hora</strong></td>";
		}
		cadTabla +="<td width='15%' align='center'><strong>Servicio</strong></td>";
		cadTabla +="<td width='3%' align='center'>&nbsp;</td>";
		cadTabla +="<td width='23%' align='center'><strong>Origen</strong></td>";
		cadTabla +="<td width='32%' align='center'><strong>Destino</strong></td>";
		cadTabla +="</tr>";
		cadTabla +="<tr>";
		if(modo!=2)
		{
			cadTabla +="<td align='center'>"+corridaRegeso.FechaSalidaBoleto+"</td>";
			cadTabla +="<td align='center'>"+corridaRegeso.HoraSalida+"</td>";
			cadTabla +="<td align='center'>"+corridaRegeso.ClaveServicio+"</td>";
		}
		else{
			cadTabla +="<td align='center'>"+desSer+"</td>";
		}
		cadTabla +="<td align='center'>&nbsp;</td>";
		if(modo!=2)cadTabla +="<td align='center'>"+oficinareg+"</td>";else cadTabla +="<td align='center'>"+desabierto+"</td>";
		if(modo!=2)cadTabla +="<td align='center'>"+oficinaori+"</td>";else cadTabla +="<td align='center'>"+oriabierto+"</td>";
		cadTabla +="</tr>";
		cadTabla +="</table></td>";
		cadTabla +="</tr>";
		cadTabla +="<tr>";
		cadTabla +="<td>&nbsp;</td>";
		cadTabla +="</tr>";
		cadTabla +="<tr>";
		cadTabla +="<td><table width='640' border='0' align='center' cellpadding='0' cellspacing='0' class='formulario'>";
		cadTabla +="<tr>";
		cadTabla +="<td colspan='7' class='datos'><span class='color5'>Datos del</span> <span class='color6'>pasajero</span></td>";
		cadTabla +="</tr>";
		
		//Se ocupa ver que asiento es asignado acada tipo de pasajero
		for (x=0;x<pasajeros.length;x++){	
			cadTabla +="<tr>";
			cadTabla +="<td width='8%' align='right'><img src='../imagenes/flechaVerde2.png' width='10' height='12' /></td>";
			cadTabla +="<td width='3%'>&nbsp;</td>";
			cadTabla +="<td width='32%' class='color2'>"+pasajeros[x].value+"</td>";
			cadTabla +="<td width='15%' class='color3'>"+tipoPas[x]+"</td>";
			if(modo!=2){
				cadTabla +="<td width='12%' class='color3'><strong>ASIENTO</strong></td>";
				cadTabla +="<td width='5%' align='center' class='numAsiento'>"+ A_AsientosPasajerosRegreso[x] +"</td>";
			}
			cadTabla +="<td width='25%'>&nbsp;</td>" ;                      
			cadTabla +="</tr>";
		}		
		
		cadTabla +="</table></td>";
		cadTabla +="</tr>";
		cadTabla +="<tr>";
		cadTabla +="<td>&nbsp;</td>";
		cadTabla +="</tr>";
	}
	cadTabla +="<tr>";
	cadTabla +="<td><table class='nf' width='300' border='0' cellspacing='0' cellpadding='0'>";
	cadTabla +="<tr>";
	cadTabla +="<td width='117' class='titulo'>Costo total:</td>";
	cadTabla +="<td class= 'oculto' width='36' align='right'><img src='../imagenes/verde_1.png' width='12' height='25' /></td>";
	if(modo!=2)cadTabla +="<td width='93' align='center' bgcolor='#879B1B' class='precio'>$"+object_personaliza.CostoTotal+"</td>";
	else cadTabla +="<td width='93' align='center' bgcolor='#879B1B' class='precio'>$"+object_servicio.CostoTotal+"</td>";
	
	cadTabla +="<td class= 'oculto' width='54'><img src='../imagenes/verde_2.png' width='12' height='25' /></td>";
	cadTabla +="</tr>";
	cadTabla +="</table></td>";
	cadTabla +="</tr>";
	cadTabla +="<tr>";
	cadTabla +="<td>&nbsp;</td>";
	cadTabla +="</tr>   ";
	cadTabla +="</table>";
	cadTabla +="</div><!-- contenido -->";

	return cadTabla;
}
//Genera asientos ida y regreso
function generaAsientos(dia,modo){
    var botonida;
	var A="'B'";
	var B='"A"';
	var tviajeley='';
	var ocultabotones='';
	var num=0;
	if(viinas == 'NO' && modo=='Regreso') num=100;
	if(viinas == 'NO' && redondo == 'SI') ocultabotones='style="display:none"';
	if(esint=='SI' && opeint!='' && claus!='' && mint!=0)
		var inter = '<table class="aviso" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">Estás intercambiando número(s) de operación </td></tr><tr><td align="center" class="color1">'+ opeint +'</td></tr></table>';
	else var inter ='';
	if(modo=='ida') { generacadenaasientos(); 
    botonida= '<img src="../imagenes/asientos_salida_azul.png" width="125" height="35" alt="Asientos Salida" />'; 
	tviajeley='Viaje de salida';
	tviajeley1='Seleccione el asiento de salida para el siguiente pasajero:';	}
	var x = adulto + insen + menor + estudiantes + maestros;
	var botonredondo;
	
	if(redondo == 'SI' && modo=='ida')
		botonredondo='<a href="#" onClick="javascript:paso=4;return adelante();"><img src="../imagenes/asientos_regreso_blanco.png" alt="Asientos Regreso" width="125" height="35" border="0" id="Image1" onmouseover="MM_swapImage(\'Image1\',\'\',\'../imagenes/asientos_regreso_azul.png\',1)" onmouseout="MM_swapImgRestore()" /></a>';
	else
		botonredondo = '';
	if(redondo == 'SI' && modo=='Regreso'){ 
		botonredondo='<a href="#" onClick="return adelante(paso=4);"><img src="../imagenes/asientos_regreso_azul.png" alt="Asientos Regreso" width="125" height="35" border="0" id="Image1" /></a>';
		botonida = '<a href="#" onClick="javascript:paso=4;return asientos();"><img src="../imagenes/asientos_salida_blanco.png" alt="Asientos Ida" width="125" height="35" border="0" id="Image1" onmouseover="MM_swapImage(\'Image1\',\'\',\'../imagenes/asientos_salida_azul.png\',1)" onmouseout="MM_swapImgRestore()" /></a>'; 
		tviajeley='Viaje de regreso';
		tviajeley1='Seleccione el asiento de regreso para el siguiente pasajero:';
		}
	if(redondo == 'SI' && modo=='Regreso' && viinas == 'NO')	$('#area2').empty();
	else	$('#area').empty();
	var div = $('<div>',{"class":"head"});
	if(modo=='Regreso' && viinas == 'SI') {var titulo = $('<img>',{src:"../imagenes/titulos-seleccione-asientos.jpg",width:"690",height:"57"});
	div.append(titulo);	}
	$('#area').append(div);
	var cadTabla = '<table height="188" border="0" align="center" cellpadding="0" cellspacing="0" class="fondoautobus" valign="center">'+
		'<tbody>'+
		'<tr>'+
		'<td valign="bottom" align="left" rowspan="3">'+
		'<img src="../imagenes/frente.jpg" width="48" height="185" border="0"> '+
		'</td>'+
		'<td valign="top" align="left">&nbsp;</td>'+
		'<td valign="bottom" align="left" rowspan="3">&nbsp;</td>'+
		'</tr>'+
		'<tr>'+
		'<td align="left" rowspan="">'+
		'<table width="495" cellspacing="0" cellpadding="0" border="0">';
	var i = 0, a = 0, r = 4, u = 52,f = 0;
	do { 
		cadTabla += "<tr>";
		  a = r-1 ;
		  f = 1;
		  cadTabla += "<td></td>";
		  do
		  {
	            cadTabla += "<td align='rigth'><font face='Arial' size='1' color=#345F85>"+dia.Asientos[a].Asientos+"</font>";	  
	     		if(modo=='ida') cadTabla += "<img id='A"+a+"'  src='../imagenes/"+dia.Asientos[a].Imagenes+"' border ='0' onClick='return  SeleccionaAsiento(this,"+a+","+B+");' ></td>";
				else cadTabla += "<img id='A"+(a+num)+"'  src='../imagenes/"+dia.Asientos[a].Imagenes+"' border ='0' onClick='return  SeleccionaAsientoR(this,"+a+","+B+");' ></td>";
				if(modo=='ida')	asiento.asientosaseleccion[dia.Asientos[a].Asientos]=a;
				else	asientoR.asientosaseleccion[dia.Asientos[a].Asientos]=a;
	     		a+=4;
	     		f++;
	      }while (f<dia.Filas)
	      if (dia.NoCapturaUltFila == "N")
	      {
	        cadTabla += "<td align='rigthr'><font face='Arial' size='1' color=#345F85>"+dia.Asientos[a].Asientos+"</font>" ;
		    if(modo=='ida') cadTabla += "<img id='A"+u+"' src='../imagenes/"+dia.Asientos[u].Imagenes+"' border ='0' onClick='return  SeleccionaAsiento(this,"+u+","+B+");' ></td>";
			else cadTabla += "<img id='A"+(u+num)+"' src='../imagenes/"+dia.Asientos[u].Imagenes+"' border ='0' onClick='return  SeleccionaAsientoR(this,"+u+","+B+");' ></td>";
			if(modo=='ida')	asiento.asientosaseleccion[dia.Asientos[a].Asientos]=u;
			else	asientoR.asientosaseleccion[dia.Asientos[a].Asientos]=u;
			}		
	      if (r==3)
	      {
	         cadTabla += "</tr><tr><td align='rigthr'><img id='A53'  src='../imagenes/"+dia.Asientos[53].Imagenes+"'  border ='0'></td>";
	         cadTabla += "<td align='center' colspan="+(dia.Filas-1)+"><img border=0 src='../imagenes/logo_";
			 if(modo=='ida') cadTabla += corridaIda.EmpresaCorrida+".jpg' height=20 width=90 ></td>";
			 else cadTabla += corridaRegeso.EmpresaCorrida+".jpg' height=20 width=90 ></td>";
			 
	         u--;
	         cadTabla += "<td align='rigthr'><font face='Arial' size='1' color=#345F85>"+dia.Asientos[a].Asientos+"</font>" ;	         
		     if(modo=='ida') cadTabla += "<img id='A"+u+"'  src='../imagenes/"+dia.Asientos[u].Imagenes+"' border ='0' onClick='return  SeleccionaAsiento(this,"+u+","+B+");' ></td>";
			 else cadTabla += "<img id='A"+(u+num)+"'  src='../imagenes/"+dia.Asientos[u].Imagenes+"' border ='0' onClick='return  SeleccionaAsientoR(this,"+u+",);' ></td>";
			 if(modo=='ida')	asiento.asientosaseleccion[dia.Asientos[a].Asientos]=u;
			 else	asientoR.asientosaseleccion[dia.Asientos[a].Asientos]=u;
          }


     	  cadTabla += "</tr>";
	      u--;	
          r--;   
		  i++;
	} while (i<4)
    var cuadroseleccion='';
	if(modo=='ida') 
	{
		cuadroseleccion = '<input name="textfield" type="text" id="textfieldAsi" size="3" class="color1" onkeyup = "if(event.keyCode == 32)return SeleccionaAsiento('+A+','+A+','+A+');" onBlur="return SeleccionaAsiento('+A+','+A+','+A+');"/></td>';
		datosp ='<td class="pad" id="campo_asiento"><span class="color1" id="pasajeroN">Pasajero 1</span> <span  class="color2 conFlecha" id="nombrePasajero">' + pasajeros[0].value + '</span> <span  class="color3" id="tipoPasajero">' + tipoPas[0] + '</span> <span  class="color4">ASIENTO</span> ';
		}
		else 
		{
			cuadroseleccion='<input name="textfieldR" type="text" id="textfieldAsiR" size="3" class="color1" onkeyup = "if(event.keyCode == 32)return SeleccionaAsientoR('+A+','+A+','+A+');" onBlur="return SeleccionaAsientoR('+A+','+A+','+A+');"/></td>';
			datosp = '<td class="pad" id="campo_asientoR"><span class="color1" id="pasajeroNR">Pasajero 1</span> <span  class="color2 conFlecha" id="nombrePasajeroR">' + pasajeros[0].value + '</span> <span  class="color3" id="tipoPasajeroR">' + tipoPas[0] + '</span> <span  class="color4">ASIENTO</span> ';
			}
	cadTabla += "</table> </td></tr>";
    cadTabla += "<tr><td align='rigth' width='10' valign='top' ><img src='../imagenes/izquierdo.jpg' border'0' style='font-size: 10px'> </td></tr></tbody></table>";
	var div2 = $('<div>',{"class":"contenido"});
	div2.html( inter + '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
		'<tr>'+
                    '<td><table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                      '<tr>'+
                        '<td width="50%"><strong>'+ tviajeley +'</strong><img src="../imagenes/flecha_salida.png" width="40" height="40" alt="Salida" /></td>'+
                        '<td width="50%" align="right" class="botonesAsientos" '+ocultabotones+'>'+ botonida + botonredondo +'</td>'+
                      '</tr>'+
                    '</table></td>'+
                  '</tr>'+
                  '<tr>'+
                    '<td class="pad">'+tviajeley1+'</td>'+
                  '</tr>'+
                   '<tr>'+
                     '<td class="pad"><table width="357" border="0" cellspacing="0" cellpadding="0">'+
                       '<tr>'+
                         '<td class="nf"><img src="../imagenes/asiento-ocupado.png" width="47" height="33" /></td>'+
                         '<td class="color3">= asiento ocupado</td>'+
                         '<td><img src="../imagenes/asiento-disponible.png" width="47" height="33" alt="Disponible" /></td>'+
                         '<td class="color3">= asiento disponible'+
                         '</td>'+
                       '</tr>'+
                     '</table></td>'+
                   '</tr>'+
                   '<tr>'+
                     '<td class="recuadroBlanco2">'+ cadTabla +
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
}
//Genera error
function generaError(mensaje){       
	var cadTable = 
		'<div class="contenido">'+
		'<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
		'<tr>'+
		'<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
		'<tr>'+
		'<td width="8%" align="right"><img src="../imagenes/flechaVerde2.png" width="10" height="12" /></td>'+
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
if(esint=='SI' && opeint!='' && claus!='' && mint!=0)
var inter = '<table class="aviso" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">Estás intercambiando número(s) de operación </td></tr><tr><td align="center" class="color1">'+ opeint +'</td></tr></table>';
else var inter ='';
	cadTable = "<div class='head' ><img src='../imagenes/titulo_inicio.jpg' width='690' height='57' /></div><!-- head -->" ;        
	cadTable += "<div id='cuadroVentaVertical2' >";
	cadTable += inter + "<table width='300' border='0' align='center' cellpadding='0' cellspacing='0'>";
	cadTable += "<tr>";
	cadTable += "<td align='center' class='nf'>";
	cadTable += "<table width='300' border='0' cellspacing='0' cellpadding='0'>";
	cadTable += "<tr>";
	cadTable += "<td align='center' valign='bottom'><img src='../imagenes/titulo_cv_vbpagencias.png' width='166' height='44' alt='Venta de Boletos' /></td>";
	cadTable += "</tr>";
	cadTable += "<tr>";
	cadTable += "<td align='center' valign='bottom'>&nbsp;</td>";
	cadTable += "</tr>";
	cadTable += "<tr>";
	cadTable += "<td align='center' valign='bottom'><label>";
	cadTable += "<input type='radio' name='tipoViaje' value='V1' id='tipoViaje_0'  onClick='Viajesencillo();'/>";
	cadTable += "Viaje Sencillo</label>";
	cadTable += "<label>";
	cadTable += "<input type='radio' name='tipoViaje' value='V2' id='tipoViaje_1' onClick='Viajeredondo();'/>";
	cadTable += "Viaje Redondo</label></td>";
	cadTable += "</tr>";
	cadTable += "</table></td>";
	cadTable += "</tr>";
	cadTable += "<tr>";
	cadTable += "<td align='center'><table class='primera' width='270' border='0' cellspacing='0' cellpadding='0'>";
	cadTable += "<tr>";
	cadTable += "<td width='113'><label for='textfield'>Origen</label></td>";
	cadTable += "<td colspan='2' id='tdOrigenAge'><select name='tdOrigen' id='tdOrigen' onChange='return cargaDestinos(this)'>";
	cadTable += "</select></td>";
	cadTable += "</tr>";
	cadTable += "<tr>";
	cadTable += "<td><label for='textfield2'>Destino</label></td>";
	cadTable += "<td colspan='2' id='tdDestinoAge'><select name='tdDestino' id='tdDestino'>";
	cadTable += "</select></td>";
	cadTable += "</tr>";
	cadTable += "<tr>";
	cadTable += "<td><label for='textfield2'>Fecha de Salida</label>";
	cadTable += "<label for='textfield7'></label></td>";
	cadTable += "<td width='140' height='30'><input name='Fechabox0' type='text' id='textfield7' size='10' value='"+diaactual+"/"+mesactual+"/"+anoactual+"' /></td>";
	cadTable += "</tr>";
	cadTable += "<tr id='FRegreso'>";
	cadTable += "<td><label for='textfield10'>Fecha de regreso</label></td>";
	cadTable += "<td width='140' height='30'><input name='Fechabox' type='text' id='textfield10' size='10' value='"+diaactual+"/"+mesactual+"/"+anoactual+"' /></td>";
	cadTable += "</tr>";
	cadTable += "</table></td>";
	cadTable += "</tr>";
	cadTable += "<tr>";
	cadTable += "<td align='center'><table class='segunda' width='270' border='0' cellspacing='0' cellpadding='0'>";
	cadTable += "<tr>";
	cadTable += "<td width='67'><label for='textfield5'>Adulto</label></td>";
	cadTable += "<td width='68'><select name='Adulto' id='Adulto'>";
	for (x=0;x<=10;x++)
		cadTable += "<option value="+x+"> "+x+"</option>"	;
	cadTable += "</select></td>";
	cadTable += "<td width='65'><label for='textfield5'>Menor</label></td>";
	cadTable += "<td width='70'><select name='Nino' id='Nino'>";
	for (x=0;x<=10;x++)
		cadTable += "<option value="+x+"> "+x+"</option>"	;
	cadTable += "</select></td>";
	cadTable += "</tr>";
	cadTable += "<tr>";
	cadTable += "<td><label for='textfield9'>Senectud</label></td>";
	cadTable += "<td><select name='Insen' id='Insen'>";
	for (x=0;x<=10;x++)
		cadTable += "<option value="+x+"> "+x+"</option>"	;
	cadTable += "</select></td>";
	cadTable += "<td><label for='textfield10'>Estudiante</label></td>";
	cadTable += "<td><select name='Estudiante' id='Estudiante'>";
	for (x=0;x<=10;x++)
		cadTable += "<option value="+x+"> "+x+"</option>";	
	cadTable += "</select></td>";
	cadTable += "</tr>";
	cadTable += "<tr>";
	cadTable += "<td><label for='textfield11'>Profesor</label></td>";
	cadTable += "<td><select name='Maestro' id='Maestro'>";
	for (x=0;x<=10;x++)
		cadTable += "<option value="+x+"> "+x+"</option>";
	cadTable += "</select></td>";
	cadTable += "<td>&nbsp;</td>";
	cadTable += "<td>&nbsp;</td>";
	cadTable += "</tr>";
	cadTable += "</table></td>";
	cadTable += "</tr>";
	cadTable += "<tr>";
	cadTable += "<td>&nbsp;</td>";
	cadTable += "</tr>";
	cadTable += "</table>";
	cadTable += "<td>&nbsp;</td>";
	cadTable += "</div><!-- contenido -->";
	
	return cadTable;
}
//Filtro NE agencias
function generaFiltroAbierto(){	
	cadTable = "<div class='head' ><img src='../imagenes/titulo_inicio.jpg' width='690' height='57' /></div><!-- head -->" ;           
	cadTable += "<div id='cuadroVentaVertical2' >";
	cadTable += "<table width='300' border='0' align='center' cellpadding='0' cellspacing='0'>";
	cadTable += "<tr>";
	cadTable += "<td align='center' class='nf'>";
	cadTable += "<table width='300' border='0' cellspacing='0' cellpadding='0'>";
	cadTable += "<tr>";
	cadTable += "<td align='center' valign='bottom'><img src='../imagenes/titulo_vba_agencias.png' width='166' height='44' alt='Venta de Boletos' /></td>";
	cadTable += "</tr>";
	cadTable += "<tr>";
	cadTable += "<td align='center' valign='bottom'>&nbsp;</td>";
	cadTable += "</tr>";
	cadTable += "<tr>";
	cadTable += "<td align='center' valign='bottom'><label>";
	cadTable += "<input type='radio' name='tipoViaje' value='V1' id='tipoViaje_0'  />";
	cadTable += "Viaje Sencillo</label>";
	cadTable += "<label>";
	cadTable += "<input type='radio' name='tipoViaje' value='V2' id='tipoViaje_1' />";
	cadTable += "Viaje Redondo</label></td>";
	cadTable += "</tr>";
	cadTable += "</table></td>";
	cadTable += "</tr>";
	cadTable += "<tr>";
	cadTable += "<td align='center'><table class='primera' width='270' border='0' cellspacing='0' cellpadding='0'>";
	cadTable += "<tr>";
	cadTable += "<td width='113'><label for='textfield'>Origen</label></td>";
	cadTable += "<td colspan='2' id='tdOrigenAge'><select name='tdOrigen' id='tdOrigen' onChange='cargaDestinos(this)'>";
	cadTable += "</select></td>";
	cadTable += "</tr>";
	cadTable += "<tr>";
	cadTable += "<td><label for='textfield2'>Destino</label></td>";
	cadTable += "<td colspan='2' id='tdDestinoAge'><select name='tdDestino' id='tdDestino'>";
	cadTable += "</select></td>";
	cadTable += "</tr>";
	
	cadTable += "<tr>";
    cadTable += "<td><label for='textfield2'>Clase de servicio</label><label for='textfield7'></label></td>";
    cadTable += "<td><select name='select3' id='select3'>";
	
	for(x=0;x<object_servicio.length;x++){
		cadTable += "<option value="+object_servicio[x].claveServicio+"> "+object_servicio[x].descripcionSer+"</option>";	
	}
    cadTable += "</select></td>";
    cadTable += "</tr>"	;
	cadTable += "</table></td>";
	cadTable += "</tr>"	;
	cadTable += "<tr>";
	cadTable += "<td align='center'><table class='segunda' width='270' border='0' cellspacing='0' cellpadding='0'>";
	cadTable += "<tr>";
	cadTable += "<td width='67'><label for='textfield5'>Adulto</label></td>";
	cadTable += "<td width='68'><select name='Adulto' id='Adulto'>";
	for (x=0;x<=10;x++)
		cadTable += "<option value="+x+"> "+x+"</option>"	;
	cadTable += "</select></td>";
	cadTable += "<td width='65'><label for='textfield5'>Menor</label></td>";
	cadTable += "<td width='70'><select name='Nino' id='Nino'>";
	for (x=0;x<=10;x++)
		cadTable += "<option value="+x+"> "+x+"</option>";	
	cadTable += "</select></td>";
	cadTable += "</tr>";
	cadTable += "<tr>";
	cadTable += "<td><label for='textfield9'>Senectud</label></td>";
	cadTable += "<td><select name='Insen' id='Insen'>";
	for (x=0;x<=10;x++)
		cadTable += "<option value="+x+"> "+x+"</option>";
	cadTable += "</select></td>";
	cadTable += "<td><label for='textfield10'>Estudiante</label></td>";
	cadTable += "<td><select name='Estudiante' id='Estudiante'>";
	for (x=0;x<=10;x++)
		cadTable += "<option value="+x+"> "+x+"</option>";
	cadTable += "</select></td>";
	cadTable += "</tr>";
	cadTable += "<tr>";
	cadTable += "<td><label for='textfield11'>Profesor</label></td>";
	cadTable += "<td><select name='Maestro' id='Maestro'>";
	for (x=0;x<=10;x++)
		cadTable += "<option value="+x+"> "+x+"</option>";
	cadTable += "</select></td>";
	cadTable += "<td>&nbsp;</td>";
	cadTable += "<td>&nbsp;</td>";
	cadTable += "</tr>";
	cadTable += "</table></td>";
	cadTable += "</tr>";
	cadTable += "<tr>";
	cadTable += "<td align='right'>&nbsp;</td>";
	cadTable += "</tr>";
	cadTable += "</table>";
	cadTable += "</div><!-- contenido -->";
	
	return cadTable;
}
//Genera cancelacion  pantalla inicial
function cancelacion() {
termina();
if(viinco == 'NO') { document.getElementById("area2").innerHTML="";  document.getElementById("area2").style.display="none"; }
personalizat = false;
document.getElementById("counter").innerHTML = '';
$('li').removeClass('select');
$('#Cancelación').addClass('select');
if(paso==6) desbloqueoasientoatras(0);
var sig="'";
esint='NO'; opeint=''; mint=0;
var cadTabla = '<div class="head"> <img src="../imagenes/titulo_cancelacion.jpg" width="690" height="57" /> </div>'+
		'<div class="contenido">'+
		  '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
		    '<tr>'+
		      '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
		        '<tr>'+
		          '<td width="8%" align="right"><img src="../imagenes/flechaVerde2.png" width="10" height="12" /></td>'+
		          '<td width="3%">&nbsp;</td>'+
		          '<td width="27%" class="color2">NUMERO DE OPERACIÓN</td>'+
		          '<td width="31%" class="color3"><label for="textfield"></label>'+
		            '<input type="text" name="textfield3" id="textfieldop" /></td>'+
		          '<td align="center"><label for="radio"></label></td>'+
	            '</tr>'+
		        '<tr>'+
		          '<td align="right"><img src="../imagenes/flechaVerde2.png" width="10" height="12" /></td>'+
		          '<td>&nbsp;</td>'+
		          '<td class="color2">NIT</td>'+
		          '<td class="color3"><input type="text" name="textfield3" id="textfield3Nit" /></td>'+
		          '<td align="center" class="">&nbsp;</td>'+
	            '</tr>'+
		        '</table></td>'+
	        '</tr>'+
		    '<tr>'+
		      '<td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
		        '<tr>'+
		          '<td align="right"><a href="#" onclick="return validacancelacion();"><img src="../imagenes/btn_enviar.png" alt="Enviar" width="72" height="27" border="0" id="Image1" onmouseover="MM_swapImage('+sig+'Image1'+sig+','+sig+sig+','+sig+'../imagenes/btn_enviar_over.png'+sig+',1)" onmouseout="MM_swapImgRestore()" /></a></td>'+
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
$('li').removeClass('select');
$('#Intercambio').addClass('select');
if(paso==6) desbloqueoasientoatras(0);
var sig="'";
esint='NO'; opeint=''; mint=0;
var cadTabla= '<div class="head">'+
          '<img src="../imagenes/titulo_intercambio.jpg" width="690" height="57" />'+
          '</div>'+
	'<div class="contenido">'+
		  '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
		    '<tr>'+
		      '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
		        '<tr>'+
		          '<td width="8%" align="right"><img src="../imagenes/flechaVerde2.png" width="10" height="12" /></td>'+
		          '<td width="3%">&nbsp;</td>'+
		          '<td width="27%" class="color2">NUMERO DE OPERACIÓN</td>'+
		         '<td width="31%" class="color3"><label for="textfield"></label>'+
		            '<input type="text" name="textfield3" id="textfieldint" /></td>'+
		          '<td align="center"><label for="radio"></label></td>'+
	            '</tr>'+				
		        '</table></td>'+
	        '</tr>'+
			'<tr>'+
		      '<td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
		        '<tr>'+
		          '<td align="right"><a href="#" onclick="return validaintercambio();"><img src="../imagenes/btn_enviar.png" alt="Enviar" width="72" height="27" border="0" id="Image1" onmouseover="MM_swapImage('+sig+'Image1'+sig+','+sig+sig+','+sig+'../imagenes/btn_enviar_over.png'+sig+',1)" onmouseout="MM_swapImgRestore()" /></a></td>'+
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
$('li').removeClass('select');
$('#Cambiar').addClass('select');
if(paso==6) desbloqueoasientoatras(0);
var sig="'";
esint='NO'; opeint=''; mint=0;
var cadTabla='<div class="head">'+
          '<img src="../imagenes/titulo_cambioContrasena.jpg" width="690" height="57" />'+
          '</div>'+
 '<div class="contenido">'+
                '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
                  '<tr>'+
                    '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
                      '<tr>'+
                        '<td width="8%" align="right"><img src="../imagenes/flechaVerde2.png" width="10" height="12" /></td>'+
                        '<td width="3%">&nbsp;</td>'+
                        '<td width="27%" class="color2">CONTRASEÑA ACTUAL</td>'+
                        '<td width="31%" class="color3"><label for="textfield"></label>'+
                        '<input type="password" name="textfield" id="contraactual" /></td>'+
                        '<td align="center"><label for="radio"></label></td>'+
                      '</tr>'+
                      '<tr>'+
                        '<td align="right"><img src="../imagenes/flechaVerde2.png" width="10" height="12" /></td>'+
                        '<td>&nbsp;</td>'+
                        '<td class="color2">CONTRASEÑA NUEVA</td>'+
                        '<td class="color3"><input type="password" name="textfield2" id="nvacon" /></td>'+
                        '<td align="center" class=>&nbsp;</td>'+
                      '</tr>'+
                      '<tr>'+
                        '<td align="right"><img src="../imagenes/flechaVerde2.png" width="10" height="12" /></td>'+
                        '<td>&nbsp;</td>'+
                        '<td class="color2">CONFIRMAR CONTRASEÑA</td>'+
                        '<td class="color3"><input type="password" name="textfield3" id="confcontra" /></td>'+
                        '<td align="center" class="color3">&nbsp;</td>'+
                      '</tr>'+
                    '</table></td>'+
                  '</tr>'+
                  '<tr>'+
                   ' <td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
					'<tr>'+
                        '<td align="right"><a href="#" onclick="return validacontrasena();"><img src="../imagenes/btn_continuarB.png" alt="Continuar" width="88" height="27" border="0" id="Image1" onmouseover="MM_swapImage('+sig+'Image1'+sig+','+sig+sig+','+sig+'../imagenes/btn_continuarB_over.png'+sig+',1)" onmouseout="MM_swapImgRestore()" /></a></td>'+
                      '</tr>'+
                    '</table></td>'+
                  '</tr>'+
                 '<tr>'+
                   ' <td>&nbsp;</td>'+
                  '</tr>'+
                '</table>'+
			'</div>';
document.getElementById("area").innerHTML = cadTabla;
document.getElementById("continuar").innerHTML = '';
document.getElementById("regresar").innerHTML = '';
}
//Genera Movimientos  pantalla inicial
function movimientos(){
termina();
if(viinco == 'NO') { document.getElementById("area2").innerHTML="";  document.getElementById("area2").style.display="none"; }
personalizat = false;
document.getElementById("counter").innerHTML = '';
$('li').removeClass('select');
$('#Movimientos').addClass('select');
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
		    '<tr>'+
		      '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
		        '<tr>'+
		          '<td width="8%" align="right"><img src="../imagenes/flechaVerde2.png" width="10" height="12" /></td>'+
		          '<td width="3%">&nbsp;</td>'+
		          '<td width="27%" class="color2">FECHA INICIAL</td>'+
		          '<td width="31%" class="color3"><label for="textfield"></label>'+
	              '<input name="textfield" type="text" id="textfieldA" value="'+ "01" +"/"+ mesactual +"/"+ anoactual +'" /></td>'+
		          '<td align="center"><label for="radio"></label></td>'+
	            '</tr>'+
		        '<tr>'+
		         '<td align="right"><img src="../imagenes/flechaVerde2.png" width="10" height="12" /></td>'+
		          '<td>&nbsp;</td>'+
		          '<td class="color2">FECHA FINAL</td>'+
		          '<td class="color3"><input name="textfield2" type="text" id="textfield2B" value="'+ diaactual +"/"+ mesactual +"/"+ anoactual +'" /></td>'+
		          '<td align="center" class="">&nbsp;</td>'+
	            '</tr>'+
		        '</table></td>'+
	        '</tr>'+
		    '<tr>'+
		      '<td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
		        '<tr>'+
		          '<td align="right"><a href="#" onclick="return validamovimientos();"><img src="../imagenes/btn_enviar.png" alt="Enviar" width="72" height="27" border="0" id="Image1" onmouseover="MM_swapImage('+sig+'Image1'+sig+','+sig+sig+','+sig+'../imagenes/btn_enviar_over.png'+sig+',1)" onmouseout="MM_swapImgRestore()" /></a></td>'+
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
		          '<td width="8%" align="right"><img src="../imagenes/flechaVerde2.png" width="10" height="12" /></td>'+
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
	}
else
{
cadtabla='<div class="head">'+
          '<img src="../imagenes/titulo_saldos.jpg" width="690" height="57" />'+
          '</div>'+
 '<div class="contenido">'+
                '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
                  '<tr>'+
                   '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
                      '<tr>'+
                        '<td width="8%" align="right"><img src="../imagenes/flechaVerde2.png" width="10" height="12" /></td>'+
                        '<td width="3%">&nbsp;</td>'+
                        '<td width="27%" class="color2">SALDO A DEPOSITAR</td>'+
                        '<td width="31%" class="color7"><label for="textfield"><strong>$'+ saldos.Asaldoagencia +'</strong></label></td>'+
                        '<td align="center"><label for="radio"></label></td>'+
                     '</tr>'+
                      '<tr>'+
                        '<td align="right"><img src="../imagenes/flechaVerde2.png" width="10" height="12" /></td>'+
                        '<td>&nbsp;</td>'+
                        '<td class="color2">MONTO EN FICHA</td>'+
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
                        '<td colspan="3" class="color5"><strong>Presione &quot;Continuar&quot; para emitir la ficha de depósito</strong></td>'+
                      '</tr>'+
                    '</table></td>'+
                  '</tr>'+
                  '<tr>'+
                    '<td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
                      '<tr>'+
                        '<td align="right"><a href="#" onClick="return validasaldos('+ saldos.saldoagencia +');"><img src="../imagenes/btn_continuarB.png" alt="Continuar" width="88" height="27" border="0" id="Image1" onmouseover="MM_swapImage('+sig+'Image1'+sig+','+sig+sig+','+sig+'../imagenes/btn_continuarB_over.png'+sig+',1)" onmouseout="MM_swapImgRestore()" /></a></td>'+
                      '</tr>'+
                    '</table></td>'+
                  '</tr>'+
                  '<tr>'+
                    '<td>&nbsp;</td>'+
                  '</tr>'+
                '</table></div>';
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
                        '<td colspan="5"><span class="color5"><strong>FICHA DE DEPÓSITO</strong></span><strong class="color7"> AGENCIA </strong></td>'+
                      '</tr>'+
                      '<tr>'+
                        '<td width="6%" align="right"><img src="../imagenes/flechaVerde2.png" width="10" height="12" /></td>'+
                        '<td width="2%">&nbsp;</td>'+
                        '<td width="36%" class="color2">AGENCIA:</td>'+
                        '<td width="53%" class="color3"><strong>'+ ficha.agencia +'</strong></td>'+
                        '<td width="3%" align="center">&nbsp;</td>'+
                      '</tr>'+
                      '<tr class="colorB">'+
                        '<td align="right"><img src="../imagenes/flechaVerde2.png" width="10" height="12" /></td>'+
                        '<td>&nbsp;</td>'+
                        '<td class="color2">BANCO:</td>'+
                        '<td class="color3"><strong>'+ ficha.banco +'</strong></td>'+
                        '<td align="center" class=>&nbsp;</td>'+
                      '</tr>'+
                      '<tr>'+
                        '<td align="right"><img src="../imagenes/flechaVerde2.png" alt="" width="10" height="12" /></td>'+
                        '<td>&nbsp;</td>'+
                        '<td class="color2">SUCURSAL</td>'+
                        '<td class="color3"><strong>'+ ficha.sucursal +'</strong></td>'+
                        '<td align="center" class="color3">&nbsp;</td>'+
                      '</tr>'+
                      '<tr class="colorB">'+
                        '<td align="right"><img src="../imagenes/flechaVerde2.png" alt="" width="10" height="12" /></td>'+
                        '<td>&nbsp;</td>'+
                        '<td class="color2">CUENTA:</td>'+
                        '<td class="color3"><strong>'+ ficha.cuenta +'</strong></td>'+
                        '<td align="center" class="color3">&nbsp;</td>'+
                      '</tr>'+
                      '<tr>'+
                        '<td align="right"><img src="../imagenes/flechaVerde2.png" alt="" width="10" height="12" /></td>'+
                        '<td>&nbsp;</td>'+
                        '<td class="color2">NÚMERO DE REF. INTERBANCARIA:</td>'+
                        '<td class="color3"><strong>'+ ficha.referencia +'</strong></td>'+
                        '<td align="center" class="color3">&nbsp;</td>'+
                      '</tr>'+
                      '<tr class="colorB">'+
                        '<td align="right"><img src="../imagenes/flechaVerde2.png" alt="" width="10" height="12" /></td>'+
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
                        '<td width="319"><a href="#" onClick='+sig+'saldos();'+sig+'><img src="../imagenes/btn_regresar.png" alt="Regresar" width="72" height="27" border="0" id="Image2" onmouseover="MM_swapImage('+sig+'Image2'+sig+','+sig+sig+','+sig+'../imagenes/btn_regresar_over.png'+sig+',1)" onmouseout="MM_swapImgRestore()" /></a></td>'+
                        '<td width="321" align="right"><a href="#" onClick="javascript:imprSelec('+sig+'fichaim'+sig+');"><img src="../imagenes/btn_imprimir.png" alt="Imprimir" width="72" height="27" border="0" id="Image1" onmouseover="MM_swapImage('+sig+'Image1'+sig+','+sig+sig+','+sig+'../imagenes/btn_imprimir_over.png'+sig+',1)" onmouseout="MM_swapImgRestore()" /></a></td>'+
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
		d= "<span class='negritas azul_1 18_puntos condensada'><p>"+txt.DatosdeCompra+"</p></span>";
		d+="<span class='azul_2 negritas'>Fecha de Salida:</span><br />";
		d+="<span class='gris_medio negritas'>"+fechasal+"</span><br />";
		d+="<span class='azul_2 negritas'>Origen:</span><br />";
		d+="<span class='gris_medio negritas'>"+oficinaori+"</span><br />";
		d+="<span class='azul_2 negritas'>Destino:</span><br />";
		d+="<span class='gris_medio negritas'>"+oficinareg+"</span><br />";
		if(x > 1 ){
			d+="<span class='azul_2 negritas'>Horario:</span><br />" ; 
			d+="<span class='gris_medio negritas'>"+corridaIda.HoraSalida+"</span><br />";
		}
		d+="</p>";
		d+="<hr />";
		if (redondo == 'SI'){
			d+="<p><span class='azul_2 negritas'>Fecha de Regreso:</span><br />";
			d+="<span class='gris_medio negritas'>"+fechareg+"</span><br />";
			d+="<span class='azul_2 negritas'>Origen:</span><br />";
			d+="<span class='gris_medio negritas'>"+oficinareg+"</span><br />";
			d+="<span class='azul_2 negritas'>Destino:</span><br />";
			d+="<span class='gris_medio negritas'>"+oficinaori+"</span><br />";
			if(x > 2 ){
				d+="<span class='azul_2 negritas'>Horario:</span><br />" ; 
				d+="<span class='gris_medio negritas'>"+corridaRegeso.HoraSalida+"</span><br />";
			}
				d+="</p>";
			d+="<hr />";
		}
		if(x>=3 && x<6){			
			d+="<p style='font-size:14px;'><span class='color2'>Costo:</span> <span class='color1'><strong>$"+object_personaliza.CostoTotal+"*</strong></span></p>";
			d+="<p><span class='color1'><strong>Viaje de ida</strong></span><strong><br />";
			
			
			do{	
				//Este if queda osoleto temporalmente 05032012
				if(object_personaliza.QDescuentoIda=='SI' && j==0)
				{
					do{
					d+= '</strong><span class="color5"><em>'+object_personaliza.DescuentoIda[j].CadDesIda+' promoción '+object_personaliza.DescuentoIda[j].CadNumAIda+' pasajero:</em><strong><br />';
					d+= '$'+object_personaliza.DescuentoIda[j].CadMonIda+'</strong></span><br />';
					costo=object_personaliza.DescuentoIda[j].CadMonIda;
					j++;
					descuento=conviertecadenafloat(costo)+descuento;
					}while(j<object_personaliza.DescuentoIda.length)
						if(object_personaliza.NDescuentosIda<adulto){
							d+="</strong><span class='color5'><em>"+object_personaliza.PasajerosIda[i].Leyenda+":</em><strong><br />";
							d+="$"+(conviertecadenafloat(object_personaliza.PasajerosIda[i].Costo)-descuento).toFixed(2)+"</strong></span><br />";
							}
				}else{	
					if(object_personaliza.PasajerosIda[i].CostoOri>0)	{
						d+="</strong><span class='color5'><em>"+object_personaliza.PasajerosIda[i].Leyenda+":</em><strong><br />";
						d+="$"+object_personaliza.PasajerosIda[i].Costo+"<br />";	
						d+="Ahorro $"+object_personaliza.PasajerosIda[i].CostoOri+"</strong></span><br />";	
					}
					else{
						d+="</strong><span class='color5'><em>"+object_personaliza.PasajerosIda[i].Leyenda+":</em><strong><br />";
						d+="$"+object_personaliza.PasajerosIda[i].Costo+"</strong></span><br />";		
					}					
				}
			i++;
			} while (i<object_personaliza.PasajerosIda.length )
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
						d+= '</strong><span class="color5"><em>'+object_personaliza.DescuentoReg[j].CadDesReg+' promoción '+object_personaliza.DescuentoReg[j].CadNumAReg+' pasajero:</em><strong><br />';
						d+= '$'+object_personaliza.DescuentoReg[j].CadMonReg+'</strong></span><br />';
						costo=object_personaliza.DescuentoReg[j].CadMonReg;
						j++;
						descuento=conviertecadenafloat(costo)+descuento;
						}while(j<object_personaliza.DescuentoReg.length)
							if(object_personaliza.NDescuentosReg<adulto){
								d+="</strong><span class='color5'><em>"+object_personaliza.PasajerosRegreso[i].Leyenda+":</em><strong><br />";
								d+="$"+(conviertecadenafloat(object_personaliza.PasajerosRegreso[i].Costo)-descuento).toFixed(2)+"</strong></span><br />";
							}
				}else{		
					if(object_personaliza.PasajerosRegreso[i].CostoOri>0)	{
						d+="</strong><span class='color5'><em>"+object_personaliza.PasajerosRegreso[i].Leyenda+":</em><strong><br />";
						d+="$"+object_personaliza.PasajerosRegreso[i].Costo+"<br />";	
						d+="Ahorro $"+object_personaliza.PasajerosRegreso[i].CostoOri+"</strong></span><br />";	
						}
					else{
						d+="</strong><span class='color5'><em>"+object_personaliza.PasajerosRegreso[i].Leyenda+":</em><strong><br />";
						d+="$"+object_personaliza.PasajerosRegreso[i].Costo+"</strong></span><br />";
						}
					}
					i++;
				} while (i<object_personaliza.PasajerosRegreso.length )
			d+="</p>";		
			}	
		}
		d+="<p><span class='azul_2 negritas'>Pasajeros:</span><br />";
		if (adulto>0) d+="<span class='gris_medio negritas'>Adultos: </span><span class='azul_2 negritas'>"+adulto+"</span></em><br />";
		if (menor>0) d+="<span class='gris_medio negritas'>Niños: </span><span class='azul_2 negritas'>"+menor+"</span></em><br />";
		if (insen>0) d+="<span class='gris_medio negritas'>Insen: </span><span class='azul_2 negritas'>"+insen+"</span></em><br />";
		if (estudiantes>0) d+="<span class='gris_medio negritas'>Estudiantes: </span><span class='azul_2 negritas'>"+estudiantes+"</span></em><br />";
		if (maestros>0) d+="<span class='gris_medio negritas'>Maestros: </span><span class='azul_2 negritas'>"+maestros+"</span></em><br />";
		d+="</p>";		
		if(x>=6)
			d=" ";
		
	}
	else if(sesion != 0){
	//alert('imprime menu de agencia');
		d="<p><strong>VENTA DE BOLETOS AGENCIAS</strong><br />";
		d+="Agencia: "+agenc+"<br />";
		d+="Usuario: "+usuar+"</p>";
		d+="<ul class='menu'>";
        if(admin == 'SI')d+="<li id= Administrador><a href='#' onClick='administrador()'>Administrador</a></li>";
        if(venta == 'SI')d+="<li id= Venta class='select'><a href='#' onClick='javascript: Inbo=0; adelante(paso=-1);'>Venta</a></li>";
        if(venta == 'SI')d+="<li id= Abierto ><a href='#' onClick='abierto();'>Boleto Abierto</a></li>";
        if(venta == 'SI')d+="<li id= Intercambio><a href='#' onClick='intercambio();'>Intercambio</a></li>";
        if(venta == 'SI')d+="<li id= Cancelación><a href='#' onClick='cancelacion();'>Cancelación</a></li>";
        if(camco == 'SI')d+="<li id= Cambiar><a href='#' onClick='contrasena();'>Cambiar contraseña</a></li>";
        if(saldo == 'SI')d+="<li id= Saldos><a href='#' onClick='saldos();'>Saldos</a></li>";
        if(repmo == 'SI')d+="<li id= Movimientos><a href='#' onClick='movimientos();'>Movimientos</a></li>";
    	d+="<li class='cerrarSesion'><a href='/netScripts/Request.aspx?APPNAME=NAVEGANTE&PRGNAME=CerrarSesion&ARGUMENTS=-A"+sesion+",-A"+claus+"' target='_top'>Cerrar Sesión</a></li>";
		d+="</ul>";
	}
	return d;
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
	r="<a href='#' onClick='return atras();'><img src='../imagenes/btn_regresar.jpg' class = 'botonNav' alt='Regresar'  width='140' height='35' border='0' id='Image20' onmouseover=\"MM_swapImage('Image20','','../imagenes/btn_regresar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";
	return(r);
	}
//Boton continuar
function continuar(f){
	f="<a href='#' onClick='return adelante();'><img src='../imagenes/btn_continuar.jpg' class = 'botonNav' width='140' height='35' border='0' id='Image11' onmouseover=\"MM_swapImage('Image11','','../imagenes/btn_continuar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";
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
		alert("La contraseña no puede quedar vacia" );
		 return false;
		}
if(cnueva!=cconfirma)
		{
		alert("Error al confirmar contraseña" );
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
		    '<tr>'+
		      '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
		        '<tr>'+
		          '<td width="8%" align="right"><img src="../imagenes/flechaVerde2.png" width="10" height="12" /></td>'+
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
				document.getElementById("regresar").innerHTML = "<a href='#' onClick='return contrasena();'><img src='../imagenes/btn_regresar.jpg' alt='Regresar' width='100' height='20' border='0' id='Image20' onmouseover=\"MM_swapImage('Image20','','../imagenes/btn_regresar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";
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
    $('li').removeClass('select');
	$('#Administrador').addClass('select');
		
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
				var cadTabla = '<div class="head"><img src="../imagenes//titulo_administrador.jpg" width="690" height="57" /></div>'+
		'<div class="contenido">'+
                '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
                  '<tr>'+
                    '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
                      '<tr>'+
                        '<td colspan="6" class="datos"><span class="color5">Usuarios <span><span class="color6"> agencia<span></td>'+
                     ' <tr>'+
                      '<tr class="color7">'+
                        '<td width="8%">&nbsp;</td>'+
                        '<td width="3%">&nbsp;</td>'+
                        '<td width="17%"><strong>Usuario</strong></td>'+
                        '<td width="30%"><strong>Nombre<strong></td>'+
                        '<td width="12%" align="center"><strong>Elegir<strong></td>'+
                        '<td width="30%" align="center">&nbsp;</td>'+
                      '</tr>';		  
					for(var u = 0;u<adminJSON.length;u++){
							cadTabla +='<td width="8%" align="right"><img src="../imagenes/flechaVerde2.png" width="10" height="12" /></td>';
							cadTabla +='<td width="3%">&nbsp;</td>';
							cadTabla += '<td width="17%" class="color2">'+adminJSON[u].claveUsuario+'</td>';
							cadTabla += '<td width="30%" class="color3"><label for="radio"><strong>'+adminJSON[u].nombreUsuario+'</td>';								
							cadTabla += '<td  align="center" class="color3"><input type="radio"  name="radio" id="radio" onClick="return Seleccionado('+u+')"></td>';
							cadTabla += "</tr>";							
							}							
					cadTabla += '</table></td>'+
					
					
                  '</tr>'+
                  
                 '<tr>'+
                    '<td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
                                                             
                     ' <tr>'+
                        '<td align="right"><a href="#" onClick="return validaUsuario ();"><img src="../imagenes/btn_continuarB.png" alt="Continuar" width="88" height="27" border="0" id="Image1" onmouseover="MM_swapImage(\'Image1\',\'\',\'../imagenes/btn_continuarB_over.png\',1)" onmouseout="MM_swapImgRestore()" /></a></td>'+
                      '</tr>'+
                    '</table></td>'+
                  '</tr>'+
                  '<tr>'+
                    '</td>&nbsp;</td>'+
                  '</tr>'+
                '</table>'+
				'</div>';
			}catch(e){}
			document.getElementById("area").innerHTML = cadTabla;
			document.getElementById("continuar").innerHTML = '';
			checked = 'N'
		}
	
	}
	http.send(null);
}
//Administracion del horario del usuario seleccionado
function adminhorario(){
	q++;
    $('li').removeClass('select');
	$('#Administrador').addClass('select');
		
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
			    var cadTabla = '<div class="head"><img src="../imagenes/titulo_administrador.jpg" width="690" height="57" /></div>'+            
				'<div class="contenido">'+
                '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
                  '<tr>'+
                    '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
                     '<tr>'+
                      '  <td colspan="7" class="datos"><span class="color5">Horario del usuario: </span><span class="color1">'+adminJSON[Elegido].claveUsuario+'</span></td>'+
                     ' </tr>'+
                     ' <tr>'+
                       ' <td colspan="7" class="datos"><span class="color2">'+adminJSON[Elegido].nombreUsuario+'</span></td>'+
                     ' </tr>'+
                      '<tr class="color7">'+
                        '<td width="23%">&nbsp;</td>'+
                      '<td width="3%">&nbsp;</td>'+
                      '<td width="13%"><strong>DIA</strong></td>'+
                        '<td width="14%" align="center"><strong>INICIO</strong></td>'+
                      '<td width="14%" align="center"><strong>FIN</strong></td>'+
                       '<td width="17%" align="center"><strong>DIA ACTIVO</strong></td>'+
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
							cadTabla +='<td align="right"><img src="../imagenes/flechaVerde2.png" alt="" width="10" height="12" /></td>';
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
					  
					 ' <table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
					  '<tr>'+
					  '<td align="right"><a href="#" onclick="guardaHorarios();"><img src="../imagenes/btn_continuar.png" alt="Continuar" width="88" height="27" border="0" id="Image1" onmouseover="MM_swapImage(\'Image1\',\'\',\'../imagenes/btn_continuarB_over.png\',1)" onmouseout="MM_swapImgRestore()" /></a></td>'+
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
				alert("No puede dejar vacio el Número de operación");
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
		    '<tr>'+
		      '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
		        '<tr>'+
		          '<td width="8%" align="right"><img src="../imagenes/flechaVerde2.png" width="10" height="12" /></td>'+
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
					document.getElementById("regresar").innerHTML = "<a href='#' onClick='return cancelacion();'><img src='../imagenes/btn_regresar.jpg' alt='Regresar' width='100' height='20' border='0' id='Image20' onmouseover=\"MM_swapImage('Image20','','../imagenes/btn_regresar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";
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
if(ope=="")
		{
			alert("La Operacion no debe quedar vacía." );
			return false;
		}
	ope=ope.replace(/,/gi, '-');
	var http = CreateRequest();
			var url = "/netScripts/Request.aspx?APPNAME=NAVEGANTE&PRGNAME=ValidaIntercambioGrupal&ARGUMENTS=-A"+ ope +",-A"+ sesion +",-A"+ claus +",-ASI,-A"+consecutivo;
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
					'<tr>'+
					'<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
					'<tr>'+
					'<td width="8%" align="right"><img src="../imagenes/flechaVerde2.png" width="10" height="12" /></td>'+
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
					'<td><a href="#" onclick="intercambio();"><img src="../imagenes/btn_regresar.png" alt="Regresar" width="72" height="27" border="0" id="Image1" onmouseover="MM_swapImage('+sig+'Image1'+sig+','+sig+sig+','+sig+'../imagenes/btn_regresar_over.png'+sig+',1)" onmouseout="MM_swapImgRestore()" /></a></td>'+
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
					paso=-1;
					Inbo=1;
					adelante();
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
    $('li').removeClass('select');
	$('#Administrador').addClass('select');
		
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
				var cadTabla = '<div class="head"><img src="../imagenes//titulo_administrador.jpg" width="690" height="57" /></div>'+
		'<div class="contenido">'+
                '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
                  '<tr>'+
                    '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
                      '<tr>'+
                        '<td colspan="6" class="datos"><span class="color5">Usuarios <span><span class="color6"> agencia<span></td>'+
                     ' <tr>'+
                      '<tr class="color7">'+
                        '<td width="8%">&nbsp;</td>'+
                        '<td width="3%">&nbsp;</td>'+
                        '<td width="17%"><strong>Usuario</strong></td>'+
                        '<td width="30%"><strong>Nombre<strong></td>'+
                        '<td width="12%" align="center"><strong>Elegir<strong></td>'+
                        '<td width="30%" align="center">&nbsp;</td>'+
                      '</tr>';		  
					for(var u = 0;u<adminJSON.length;u++){
							cadTabla +='<td width="8%" align="right"><img src="../imagenes/flechaVerde2.png" width="10" height="12" /></td>';
							cadTabla +='<td width="3%">&nbsp;</td>';
							cadTabla += '<td width="17%" class="color2">'+adminJSON[u].claveUsuario+'</td>';
							cadTabla += '<td width="30%" class="color3"><label for="radio"><strong>'+adminJSON[u].nombreUsuario+'</td>';								
							cadTabla += '<td  align="center" class="color3"><input type="radio"  name="radio" id="radio" onClick="return Seleccionado('+u+')"></td>';
							cadTabla += "</tr>";							
							}							
					cadTabla += '</table></td>'+					
                  '</tr>'+                  
                 '<tr>'+
                    '<td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
                 '<tr>'+
                    '<td align="right"><a href="#" onClick="return validaUsuario ();"><img src="../imagenes/btn_continuarB.png" alt="Continuar" width="88" height="27" border="0" id="Image1" onmouseover="MM_swapImage(\'Image1\',\'\',\'../imagenes/btn_continuarB_over.png\',1)" onmouseout="MM_swapImgRestore()" /></a></td>'+
                 '</tr>'+
                    '</table></td>'+
                 '</tr>'+
                 '<tr>'+
                    '</td>&nbsp;</td>'+
                 '</tr>'+
                '</table>'+
				'</div>';
			}catch(e){}
			document.getElementById("area").innerHTML = cadTabla;
			document.getElementById("continuar").innerHTML = '';
			checked = 'N'
		}
	
	}
	http.send(null);

}
//Genera html venta completada
function RespuestaGuardado(d){
	termina();
	document.getElementById("counter").innerHTML = '';
	var cad="";
	cad+='<div class="head"><img src="../imagenes/titulos-detalle-compra.png" width="690" height="57" /></div>'+
		'<div class="contenido">'+
		'   <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
        '   	<tr>'+
        '       	<td align="right" class="textoDetalle"><span class="color5"><strong>Operaci&oacute;n:</strong></span><strong>'+ d.Operacion+'<br />'+
        '            <span class="color8">NIT:</span>'+ d.Nit+'</strong></td>'+
        '       </tr>'+
		'		<tr >'+
		'			<td class="textoDetalle"><span class="color5"><strong>Gracias por su compra<br /></strong></span>';
	if(d.Abierto=='SI'){	
		cad +='<strong>BOLETO ABIERTO</strong><br />';
	}	
	cad +='			</td></tr>';
	if(pago == 'TB'){
		cad +='	<tr>'+
			'   	<td id="tarjeta" style="" class="textoDetalle" ><span class="color5"><strong>No. Transaccion de la empresa:</strong></span><strong>'+ d.Tarjeta+'<br />'+
			'            <span class="color5" >No. Autorizaci&oacute;n del Banco:</span>'+ d.Autorizacion +'<br />'+
			'            <span class="color5" >No. Recibo del Banco:</span>'+ d.Voucher+'</strong></td>'+
			'	</tr>';
	}
	cad +='     <tr><td colspan="2">&nbsp;</td></tr>'+
        '       <tr>'+
        '       	<td colspan="2"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
        '           		<tr>'+
        '               <td colspan="6" class="datos lineaInf"><span class="color5">Viaje de salida</span></td>'+
        '              </tr>'+
        '              <tr class="color7">';
	if(d.Abierto=='NO'){
		cad +='      <td class="Abierto" width="18%" align="center"><strong>Dia</strong></td>'+
		'                <td class="Abierto" width="9%" align="center"><strong>Hora</strong></td>';
	}
	cad +='                <td width="15%" align="center"><strong>Servicio</strong></td>'+
        '                <td width="3%" align="center">&nbsp;</td>		'+
        '                <td width="23%" align="center"><strong>Origen</strong></td>'+
        '                <td width="32%" align="center"><strong>Destino</strong></td>'+
        '              </tr>	'+
        '              <tr>';
	if(d.Abierto=='NO'){
			cad +='      <td  class="Abierto" align="center">'+d.FechaSalida+'</td>'+
        '                <td  class="Abierto" align="center">'+d.HoraSalida+'</td>';
	}
	cad +='              <td align="center">'+d.ClaseServicio+'</td>'+
        '                <td align="center">&nbsp;</td>				'+		
        '                <td  align="center">'+d.Origen+'</td>'+
        '                <td  align="center">'+d.Destino+'</td>'+
        '              </tr>'+
        '            </table></td>'+
        '          </tr>'+
        '          <tr>'+
        '            <td>&nbsp;</td>'+
        '          </tr>'+
        '          <tr>'+
        '            <td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
        '              <tr class="color7">'+
        '                <td align="center" class="lineaInf"  width="13%"><strong>Operaci&oacute;n</strong></td>';
	if(d.Abierto=='NO'){
		cad +='          <td width="10%" align="center" class="lineaInf Abierto"><strong>Asiento</strong></td>';
	}
    cad +='              <td width="7%" align="center" class="lineaInf"><strong>Tipo</strong></td>'+
        '                <td width="39%" align="center" class="lineaInf"><strong>Pasajero</strong></td>'+
        '                <td width="13%" align="center" class="lineaInf"><strong>Monto</strong></td>';
	if(d.PromoIda=='SI') cad+='<td width="100%" align="center" class="lineaInf" id="MuestraDI"><strong>Descuento</strong></td>';
    cad +='                <td width="18%" align="center" class="lineaInf" id="MuestraI1">&nbsp;</td>'+
        '            </tr>';
	for(i=0;i<d.ViajeIda.length;i++){
		cad+=' <tr>'+
				'		<td align="center">'+d.ViajeIda[i].Operacion+'</td>';
		if(d.Abierto=='NO'){
			cad +='        <td class="Abierto" align="center">'+d.ViajeIda[i].Asiento+'</td>';
		}
		cad+=   '	    <td align="center">'+d.ViajeIda[i].TipoPasajero+'</td>'+
                '        <td align="center">'+d.ViajeIda[i].NombrePasajero+'</td>						'+
                '        <td align="center">$ '+d.ViajeIda[i].Monto+'</td>';
		if(d.PromoIda=='SI') cad+=	'<td align="center" ><span class="alert"><strong>'+d.ViajeIda[i].Promo+'% </strong></span></td>';
        cad+='        <td align="center" id="MuestraI2">&nbsp;</td>'+
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
		'                <td colspan="6" class="datos lineaInf"><span class="color5">Viaje de regreso</span></td>'+
		'              </tr>'+
		'              <tr class="color7">';
		if(d.Abierto=='NO'){
			cad += '     <td width="18%" align="center"><strong>Dia</strong></td>'+
			'            <td width="9%" align="center"><strong>Hora</strong></td>';
		}
		cad +='                <td width="15%" align="center"><strong>Servicio</strong></td>'+
        '                <td width="3%" align="center">&nbsp;</td>'+
        '                <td width="23%" align="center">	<strong>Origen</strong></td>'+
        '                <td width="32%" align="center"><strong>Destino</strong></td>'+
        '              </tr>'+
        '              <tr>';
		if(d.Abierto=='NO'){
			cad +='      <td class="Abierto" align="center">'+d.FechaSalidaReg+'</td>'+
			'            <td class="Abierto" align="center">'+d.HoraSalidaR+'</td>';
		}
		cad +='          <td align="center">'+d.ClaseServicio+'</td>'+
        '                <td align="center">&nbsp;</td>'+
        '                <td align="center">'+d.Destino+'</td>'+
        '                <td align="center">'+d.Origen+'</td>'+
        '              </tr>'+
        '            </table></td>'+
        '          </tr>'+
        '          <tr>'+
        '            <td>&nbsp;</td>'+
        '          </tr>'+
        '          <tr>'+
        '            <td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
        '              <tr class="color7">'+
        '                <td width="13%" align="center" class="lineaInf"><strong>Operaci&oacute;n</strong></td>';
		if(d.Abierto=='NO'){
			cad +='      <td width="10%" align="center" class="lineaInf Abierto"><strong>Asiento</strong></td>';
		}
		cad += '         <td width="7%" align="center" class="lineaInf"><strong>Tipo</strong></td>'+
        '                <td width="39%" align="center" class="lineaInf"><strong>Pasajero</strong></td>'+
        '                <td width="13%" align="center" class="lineaInf"><strong>Monto</strong></td>';
		if(d.PromoReg=='SI') cad += '<td width="100%" align="center" class="lineaInf" id="MuestraDR"><strong>Descuento</strong></td>';
        cad +='                <td width="18%" align="center" class="lineaInf" id="MuestraR1">&nbsp;</td>'+
        '              </tr>';
		for(i=0;i<d.ViajeRegreso.length;i++){
			cad +='      <tr>'+
			'            <td align="center">'+d.ViajeRegreso[i].Operacion+'</td>';
			if(d.Abierto=='NO'){
			cad +='      <td class="Abierto" align="center">'+d.ViajeRegreso[i].Asiento+'</td>';
			}
			cad +='                <td align="center">'+d.ViajeRegreso[i].TipoPasajero+'</td>'+
			'                <td align="center">'+d.ViajeRegreso[i].NombrePasajero+'</td>'+
			'				<td align="center">$ '+d.ViajeRegreso[i].Monto+'</td>';
			if(d.PromoReg=='SI') cad += '<td align="center" ><span class="alert"><strong>'+d.ViajeRegreso[i].Promo+'% </strong></span></td>';
			cad +='               <td align="center" id="MuestraR2">&nbsp;</td>'+
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
        '              <tr>'+
        '                <td width="11%" align="center"><a href="/netScripts/Request.aspx?APPNAME=NAVEGANTE7&PRGNAME=';
	if(sesion>0) cad+='paseabordar';
	else cad+='paseabordarVPI';
	cad+= '&ARGUMENTS=-A'+sesion+',-A'+ d.Operacion+',-A0" target="_blank"><img src="../imagenes/btn_imprimir.png" alt="Imprimir" width="72" height="27" border="0" id="Image1" onmouseover="MM_swapImage(\'Image1\',\'\',\'../imagenes/btn_imprimir_over.png\',1)" onmouseout="MM_swapImgRestore()" /></a></td>'+
        '                <td width="6%" align="center">&nbsp;</td>'+
        '                <td width="31%" align="center"><a href="/netScripts/Request.aspx?APPNAME=NAVEGANTE7&PRGNAME=';
	if(sesion>0) cad+='paseabordar';
	else cad+='paseabordarVPI';
	cad+='&ARGUMENTS=-A'+sesion+',-A'+ d.Operacion+',-A1" target="_blank"><img src="../imagenes/btn_guardar.png" alt="Guardar" width="175" height="27" border="0" id="Image2" onmouseover="MM_swapImage(\'Image2\',\'\',\'../imagenes/btn_guarda_over.png\',1)" onmouseout="MM_swapImgRestore()" /></a></td>'+
        '                <td width="6%" align="center">&nbsp;</td>'+
        '                <td width="24%" align="center" class="titulo">Costo Total:</td>'+
        '                <td width="22%" align="center"><table class="nf" width="100%" border="0" cellspacing="0" cellpadding="0">'+
        '                  <tr>'+
        '                    <td class="oculto" width="15%" align="right"><img src="../imagenes/cuadro_rojo_1.png" width="14" height="32" /></td>'+
        '                    <td width="75%" align="center" class="precio2">$'+d.Total+'</td>'+
        '                    <td class="oculto" width="15%"><img src="../imagenes/cuadro_rojo_2.png" width="14" height="32" /></td>'+
        '                  </tr>'+
        '                </table></td>'+
        '              </tr>'+
        '              <tr>'+
        '                <td colspan="3" align="center" class="color2">Para la impresi&oacute;n de sus boletos en taquilla, deber&aacute; presentar copia de identificaci&oacute;n oficial vigente</td>'+
        '                <td align="center">&nbsp;</td>'+
        '                <td align="center">&nbsp;</td>'+
        '                <td align="center">&nbsp;</td>'+
        '              </tr>'+
        '            </table></td>'+
        '          </tr>'+
        '        </table>'+
        '</div>';
	$("#area").html(cad);
	document.getElementById("nav").innerHTML = puntoactual(8); 
	if (sesion >0)
		generaNuevaSesion();
}
function puntoactual(pasoa){
var retorno='';
	if(pasoa==1)	retorno += "<span class='opcion_salida_current'></span>";
		else	retorno += "<span class='opcion_salida'></span>";
	if(pasoa==2)	retorno += " <span class='opcion_regreso_current'></span>";
		else	retorno += " <span class='opcion_regreso'></span>";
	if(pasoa==3)	retorno += "<span class='opcion_registro_current'></span>";
		else	retorno += "<span class='opcion_registro'></span>";
	if(pasoa==4 || paso==5)	retorno += "<span class='opcion_asientos_current'></span>";
		else	retorno += "<span class='opcion_asientos'></span>";
	if(pasoa==6)	retorno += "<span class='opcion_resumen_current'></span>";
		else	retorno += "<span class='opcion_resumen'></span>";
	if(pasoa==7)	retorno += "<span class='opcion_pago_current'></span>";
		else	retorno += "<span class='opcion_pago'></span>";
	if(pasoa==8)	retorno += "<span class='opcion_confirmacion_current'></span>";
		else	retorno += "<span class='opcion_confirmacion'></span>";
	return retorno;
}
function cargaOrigenes(){
	var cadena='';
	
	
	
	http = CreateRequest();
	http.open("GET","/netScripts/Request.aspx?APPNAME="+ server +"&PRGNAME=OrigenDestino",true);
	http.onreadystatechange  = function(){
	
		if(http.readyState == 4 && http.status == 200) {
			document.getElementById("tdOrigen").innerHTML ='<select name="Origen" id="Origen" onChange="cargaDestinos(this)" style="width:100px;"> <option value=\"ORIGEN\">ORIGEN</option>' + http.responseText + '</select>';
				

		}
	}
	http.send(null);
}
function cargaDestinos(par){
	var cadena='';
	document.getElementById("tdDestino").innerHTML = '<select name="Destino" id="Destino" style="width:100px;"><option value=-1>Cargando...</option>';
	
	http = CreateRequest();
	http.open("GET","/netScripts/Request.aspx?APPNAME="+ server +"&PRGNAME=OrigenDestino&ARGUMENTS=-A"+ par.options[par.selectedIndex].value ,true);
	http.onreadystatechange  = function(){
	
		if(http.readyState == 4 && http.status == 200) {
			document.getElementById("tdDestino").innerHTML = '<select  name="Destino" id="Destino" style="width:100px;"><option value=DESTINO>DESTINO</option>' + http.responseText + '</select>' ; 
			
		}
	}
	
	http.send(null);
	
}
	
	function pagoR(p){
		p="<a href='#' onClick='return adelante();'><img src='../imagenes/btn_pagar.jpg' alt='Pagar' width='112' height='25' border='0' id='Image1' onmouseover=\"MM_swapImage('Image1','','../imagenes/btn_pagar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";
		return p;
	}