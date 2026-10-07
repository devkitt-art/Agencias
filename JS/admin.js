var Elegido
var checked
checked = 'N'
var adminJSON;

 function validaConsulta()
	{
		if(checked == 'N')
		{
			alert("Elegir un usuario para continuar." );
			return false;
		}

		return adminhorario();	
	}
	

		
	
function Seleccionado( userselected )
	{
		Elegido = userselected ;
		checked = 'S';
	}

	function administrador()
{
var elUsuario = '<!$MG_chUsuario>'
    $('li').removeClass('select');
	$('#Administrador').addClass('select');
		
	document.title ="ETN - Administrador Agencias";
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
                        '<td align="right"><a href="#" onClick="return validaConsulta ();"><img src="../imagenes/btn_continuarB.png" alt="Continuar" width="88" height="27" border="0" id="Image1" onmouseover="MM_swapImage(\'Image1\',\'\',\'../imagenes/btn_continuarB_over.png\',1)" onmouseout="MM_swapImgRestore()" /></a></td>'+
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

function adminhorario()
{

    $('li').removeClass('select');
	$('#Administrador').addClass('select');
		
	document.title ="ETN - Administrador Agencias";
	var http = CreateRequest();	
	var url = "/netScripts/Request.aspx?APPNAME=NAVEGANTE&PRGNAME=adminhorarios&ARGUMENTS=-A"+adminJSON[Elegido].claveUsuario+",-A"+sesion+",-A"+claus+"";
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
                     
					 for(var h = 0;h<horarioJSON.length;h++){
					 cadTabla +='<tr>';
							cadTabla +='<td align="right"><img src="../imagenes/flechaVerde2.png" alt="" width="10" height="12" /></td>';
							cadTabla +='<td>&nbsp;</td>';
							cadTabla += '<td class="color2">'+horarioJSON[h].dia+'</td>';
							cadTabla += '<td align="center"><input name="textfield7" class="inputCenter" type="text" id="textfield7" value='+horarioJSON[h].horaInicio+' size="6" maxlength="5" /></td>';								
							cadTabla += '<td align="center"><input name="textfield14" class="inputCenter" type="text" id="textfield14" value='+horarioJSON[h].horaFin+' size="6" maxlength="5" /></td>';
							cadTabla += '<td align="center"><input type="checkbox" name="checkbox7" id="checkbox7" /></td>';							
							cadTabla += '<td>&nbsp;</td>';
							cadTabla +='</tr>';
							}	
												 
					  cadTabla+='</table></td>'+
					  '</tr>'+
					  '<tr>'+
					  
					 ' <table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">'+
					  '<tr>'+
					  '<td align="right"><a href="#" onclick="administrador();"><img src="../imagenes/btn_continuarB.png" alt="Continuar" width="88" height="27" border="0" id="Image1" onmouseover="MM_swapImage(\'Image1\',\'\',\'../imagenes/btn_continuarB_over.png\',1)" onmouseout="MM_swapImgRestore()" /></a></td>'+
					  '</tr>'+
					  '</table></td>'+
					  '</tr>'+
					  '<tr>'+
					  '<td>&nbsp;</td>'+
					  '</tr>'+
					  '</table>'+
					  '</div>';

}

catch(e){}	
			document.getElementById("area").innerHTML = cadTabla;
			document.getElementById("continuar").innerHTML = '';
}
}
http.send(null);
}	