var orgT = [];
var desT = [];

$(document).ready(function () {

	$('#Origen').chosen();
	$('#Destino').chosen();
	valida_viaje();

// FECHAS
	var nowTemp = new Date();
	var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
	var tom = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate()+1, 0, 0, 0, 0);
	var checkout1; 
	var checkin1;
	checkin1 = $('#dpd1').datepicker({
		format: 'dd/mm/yyyy',
		autoclose: true,
		onRender : function(date) {
			return date.valueOf() < now.valueOf() ? 'disabled' : '';
			}
		}).on('changeDate', function(ev) {
			if (ev.date.valueOf() > checkout1.date.valueOf()) {
				var newDate = new Date(ev.date)
				newDate.setDate(newDate.getDate() );
				checkout1.setValue(newDate);
				}
			checkin1.hide();
			$('#dpd2')[0].focus();
		}).data('datepicker');

	checkout1 = $('#dpd2').datepicker({
		format: 'dd/mm/yyyy',
		onRender : function(date) {
			return date.valueOf() <= checkin1.date.valueOf() ? 'disabled' : '';
			}
		}).on('changeDate', function(ev) {
			checkout1.hide();
		}).data('datepicker');
	//		ee(1);
	//$("#dpd1").val(ee(1));
		$("#dpd1").val(fechaactual(1));

	//$('#dpd1').focusout(function(){checkin1.hide();});
	//$('#dpd2').focusout(function(){checkout1.hide();});
	//$('#dpd1').blur(function(){checkin1.hide();});
	//$('#dpd2').blur(function(){checkout1.hide();});
	

 $("#btn_venta").click(function () {
	if(validaConsulta())
	  { 
		urlbase=$('#form').attr('action').replace('//netScripts','/netScripts')+'?APPNAME='+document.form.APPNAME.value+'&PRGNAME=AccesoEx&ARGUMENTS=-A';
		url =urlbase+document.form.modo.value+',-A'+document.form.modo1.value+',-A'+$("#Origen option:selected").val()+',-A'+$("#Destino option:selected").val()+',-A'+document.form.dpd1.value+',-A'+document.form.dpd2.value+',-A'+document.form.Adulto.value+',-A'+document.form.Insen.value+',-A'+document.form.Nino.value+',-A'+document.form.Estudiante.value+',-A'+document.form.Maestro.value+',-A'+$("input:radio[name='tipoViaje']:checked").val();
		//window.location=url;
		document.form.submit();
		}else 
		{return false;}
  });

 $("#btn_venta_bk").click(function () {
	if(validaConsulta())
	  { 
		urlbase=$('#form').attr('action').replace('//uniScripts','/uniScripts')+'?APPNAME='+document.form.APPNAME.value+'&PRGNAME=AccesoEx&ARGUMENTS=-A';
		url =urlbase+document.form.modo.value+',-A'+document.form.modo1.value+',-A'+$("#Origen option:selected").val()+',-A'+$("#Destino option:selected").val()+',-A'+document.form.dpd1.value+',-A'+document.form.dpd2.value+',-A'+document.form.Adulto.value+',-A'+document.form.Insen.value+',-A'+document.form.Nino.value+',-A'+document.form.Estudiante.value+',-A'+document.form.Maestro.value+',-A'+$("input:radio[name='tipoViaje']:checked").val();
		if(window.location==urlbase+"PU,-AH#"||window.location==urlbase+"PU,-AH")
			{
				$.colorbox({iframe:true,fixed:true,href:url,width:"95%",height:"95%"
				});
		}else{
		send(url);	
		}
		}else 
		{return false;}
  });
  
  $("#btn_1").click(function () {
  	//alert('click local');
	 //http://201.131.2.163:30045
	 //venta.odm.com.mx
  	var url_loc="//venta.odm.com.mx/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=AccesoEx&ARGUMENTS=-APU,-AH#";
  	//alert (url_loc);
  	urlbase=$('#form').attr('action').replace('//uniScripts','/uniScripts')+'?APPNAME='+document.form.APPNAME.value+'&PRGNAME=AccesoEx&ARGUMENTS=-A';
  	alert(window.location+ "  "+urlbase+"PU,-AH#");
  	try{
			if(window.location==urlbase+"PU,-AH#"|| window.location==urlbase+"PU,-AH")
			//if(parent.location==urlbase+"PU,-AH#"|| parent.location==urlbase+"PU,-AH")
			{	alert('local');
				$.colorbox({iframe:true,fixed:true,href:url_loc,width:"95%",height:"95%"
					});
			}
			else
			{	alert('externo');
				send(url_loc);
			}
		}catch(er)
		{}

  });

});


function valida_viaje(){
    if ($('#tipoViaje_0').is(':checked')){
	   $("#dpd2").hide();
	    $("#ldpd2").hide();
     //  alert("primera")
    }else if ($('#tipoViaje_1').is(':checked')){
       $("#dpd2").show();
	    $("#ldpd2").show();
      // alert("segunda");
    }
}
function ee(dias){
	alert("entra");
var fechaActual = new Date();
	try{
		if(isNaN(parseInt(dias)))
			dias=0;		
	}catch (er)
	{dias=0;}
    dia = fechaActual.getDate()+ dias ;
    mes = fechaActual.getMonth() +1;
    anno = fechaActual.getFullYear();
    if (dia <10) dia = "0" + dia;
    if (mes <10) mes = "0" + mes;  
 
    fechahoy = dia + "/" + mes + "/" + anno;
	alert(""+fechahoy+"");
	return(fechahoy);
	//form.getElementById("Fechabox0").value =fechahoy;
}

function aumentaValor(a)
{
	var elem = document.getElementById(a);
	if(elem.value<10)
	{
		elem.value++;
	}
			
}

function disminuyeValor(a)
{
	var elem = document.getElementById(a);
	if(elem.value>0)
	{
		elem.value--;
	}
			
}

function cambia_clima(sel) {
		var elem=$('#Destino').find('option:selected').text();
		$.ajax({

  // The 'type' property sets the HTTP method.
  // A value of 'PUT' or 'DELETE' will trigger a preflight request.
  type: 'POST',

  // The URL to make the request to.
  url: 'http://mockup.mx/webdesign/oexpress1/request_weather.php',

  // The 'contentType' property sets the 'Content-Type' header.
  // The JQuery default for this property is
  // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
  // a preflight. If you set this value to anything other than
  // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
  // you will trigger a preflight request.
  contentType: 'text/plain',

  xhrFields: {
    // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
    // This can be used to set the 'withCredentials' property.
    // Set the value to 'true' if you'd like to pass cookies to the server.
    // If this is enabled, your server must respond with the header
    // 'Access-Control-Allow-Credentials: true'.
    withCredentials: false
  },

  headers: {
    // Set any custom headers here.
    // If you set any non-simple headers, your server must include these
    // headers in the 'Access-Control-Allow-Headers' response header.
  },

  data : {
				ciudad : elem
			},
			dataType : 'text',
			success : function(data) {
				$("#weather").html(data);
				//$("#ciudad").val(sel.value);

			},

  error: function() {
    // Here's where you handle an error response.
    // Note that if the error was due to a CORS issue,
    // this function will still fire, but there won't be any additional
    // information about the error.
  }
});
		
		

			}