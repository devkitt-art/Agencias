//ODM VERSION 7.5

/* ahernandez - 12 08 2013 - funciones de Google Analytics */
var _gaq = _gaq || [];
var leytra = "";
var muestraTC = 0;
var muestraTA = 0;
// P R O D U C C I O N:
_gaq.push(["_setAccount", "UA-43160524-1"]);

// Q A:
//_gaq.push(['_setAccount', 'UA-4f3303437-1']);

_gaq.push(["_trackPageview"]);

(function () {
  var ga = document.createElement("script");
  ga.type = "text/javascript";
  ga.async = true;
  ga.src =
    ("https:" == document.location.protocol ? "https://ssl" : "http://www") +
    ".google-analytics.com/ga.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(ga, s);
})();
/***/
/***/

//Genera la tabla de corridas para modo ida o regreso
function generaCorridas(corridas, modo) {
  var i = 0;
  var clase, cadTabla;
  var muestratiposervicio = 0;
  if (
    viajeredondo == "V2" &&
    modo == "ida" &&
    typeof corridas.Error != "undefined"
  ) {
    cadTabla +=
      "<div>&nbsp</div><tbody><tr><td>" + msj.NoHayTarifas + "</td></tr>";
  } else {
    if (esint == "SI" && opeint != "" && claus != "" && mint != 0)
      var inter =
        '<table class="aviso" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">' +
        txt.IntercambioLabel +
        '</td></tr><tr><td align="center" class="blue">' +
        opeint +
        "</td></tr></table>";
    else var inter = "";
    cadTabla = cintaOrigen(1, modo);
    cadTabla += "<div class='head'><!--img width='690' height='57' ";
    cadTabla += " src='../imagenes/titulos-horario-salida.jpg'--> </div>";
    cadTabla += "<div class='col-md-12'><div class='table_process'>";
    cadTabla += "<div class='table-responsive'>" + inter;
    cadTabla += "<table class='omex' cellspacing='0' width='100%'>";

    // ahernandez - 04 12 2013
    var toquens = new Array();
    toquens = opeint.split(",");

    if (
      (esint != "SI" && corridas[0].claveCorrida != "0") ||
      (esint == "SI" &&
        corridas[0].claveCorrida != "0" &&
        numPasInt == adulto + insen + estudiantes + maestros + menor)
    ) {
      muestratiposervicio = 1;
      cadTabla += "<thead>";
      cadTabla += "<tr class='tablagris'>";

      for (var j = 0; j < columnas.length; j++) {
        if (
          columnas[j].nombreColumna != "Itinerario" ||
          (columnas[j].nombreColumna == "Itinerario" &&
            corridas[0].muestraItinerario == 1)
        ) {
          cadTabla += "<th";
          if (columnas[j].width)
            cadTabla += " width='" + columnas[j].width + "'>";
          else cadTabla += ">";
          cadTabla += columnas[j].nombreColumna + "</th>";

          //alert(columnas[j].nombreColumna);
        }
      }
      cadTabla += "</tr>";
      cadTabla += "</thead>";
      cadTabla += "<tbody>";
      //cadTabla+='<tr><td width="85" colspan="8"><img width="680" height="15" style="margin-top:5px;" src="../imagenes/separador_200.png"></td></tr>'
      do {
        if (viinco == "NO" && redondo == "SI" && modo != "ida")
          cadTabla += " <tr id=corr" + (i + 500) + " class=''>";
        else cadTabla += " <tr id=corr" + i + " class=''>";
        for (var j = 0; j < columnas.length; j++) {
          if (
            columnas[j].nombreColumna != "Itinerario" ||
            (columnas[j].nombreColumna == "Itinerario" &&
              corridas[0].muestraItinerario == 1)
          ) {
            cadTabla += "<td>";
            if (columnas[j].items) {
              for (var k = 0; k < columnas[j].items.length; k++) {
                cadTabla += pintaColumna(
                  i,
                  columnas[j].items[k].id,
                  modo,
                  corridas
                );
                //alert(columnas[j].items[k].id);
              }
            } else cadTabla += pintaColumna(i, columnas[j].id, modo, corridas);
            cadTabla += "</td>";
          }
        }
        cadTabla += "</tr>";
        i++;
      } while (corridas[i]);
    } else if (
      esint == "SI" &&
      numPasInt != adulto + insen + estudiantes + maestros + menor
    )
      cadTabla += "<tr><td>" + txt.IntercambioError + "</td></tr>";
    else
      cadTabla += "<div>&nbsp</div><tr><td>" + msj.NoHayCorridas + "</td></tr>";
  }
  cadTabla += "</tbody> ";
  cadTabla += "</table> ";
  cadTabla += "</div>";
  cadTabla += "</div>";
  cadTabla += "</div>";
  if (muestratiposervicio == 1) {
    cadTabla += '<div class="col-md-12"><i class="fa fa-info-circle"></i>';
    cadTabla +=
      "<a class='iframe' href='../imagenes/" +
      txt.pdfTiposServicio +
      "#zoom=100'>&nbsp;" +
      txt.ConsultaTipoS +
      " </a></div>";
  }

  $("#area").html(cadTabla);
  ocultamiestrab(true);
}

function pintaColumna(corrida, columna, modo, corridas) {
  var cad = "";
  if (columna == "selecciona") {
    //if(viinco == 'NO' && modo!='ida')	cad += "<img src='../imagenes/btn-seleccione.png' alt='Seleccione' width='73' height='20' id='Image"+(corrida+500)+"'  onmouseover=\"MM_swapImage('Image"+(corrida+500)+"','',' ../imagenes/btn-seleccione_over.png\',1)\" onmouseout='MM_swapImgRestore()'  onClick='return ";
    //else	cad += "<img src='../imagenes/btn-seleccione.png' alt='Seleccione' width='73' height='20' id='Image"+(corrida+100)+"'  onmouseover=\"MM_swapImage('Image"+(corrida+100)+"','',' ../imagenes/btn-seleccione_over.png\',1)\" onmouseout='MM_swapImgRestore()'  onClick='return ";
    if (viinco == "NO" && modo != "ida")
      cad +=
        "<img align='center' src='../imagenes/CheckBox.gif' alt='Seleccione' width='29' height='26' id='Image" +
        (corrida + 500) +
        "'  onClick='return ";
    else
      cad +=
        "<img align='center' src='../imagenes/CheckBox.gif' alt='Seleccione' width='29' height='26' id='Image" +
        (corrida + 100) +
        "'    onClick='return ";
    if (modo == "ida") cad += " Cida(" + corrida + ");'  />";
    else cad += "Cregreso(" + corrida + ");'  />";
  } else if (columna == "fechaSalida")
    cad += corridas[corrida].FechaSalidaBoleto;
  else if (columna == "horaSalida")
    cad += cambiaFormatoHora(corridas[corrida].HoraSalida);
  else if (columna == "fechaLlegada") cad += corridas[corrida].FechaLlegada;
  else if (columna == "horaLlegada")
    cad += cambiaFormatoHora(corridas[corrida].HoraLlegada);
  else if (columna == "claseDeServicio") cad += corridas[corrida].ClaveServicio;
  else if (columna == "linea") {
    if (corridas[corrida].ClaveClaseServicio != "")
      cad +=
        "<img src='../imagenes/logo_" +
        corridas[corrida].ClaveClaseServicio +
        ".png' width='70' height='20' alt='" +
        corridas[corrida].DescripcionEmpresaCorrida +
        "' />";
    else
      cad +=
        "<img src='../imagenes/logo_" +
        corridas[corrida].EmpresaCorrida +
        ".png' width='70' height='20' alt='" +
        corridas[corrida].DescripcionEmpresaCorrida +
        "' />";
  } else if (columna == "tarifa") cad += corridas[corrida].Tarifa;
  else if (
    columna == "itinerario" &&
    corridas[corrida].muestraItinerario == 1
  ) {
    var a =
      "<a class='iframe' style='text-align:left;font-weight: bold;' href='Request.aspx?APPNAME=NAVEGANTE&PRGNAME=RecuperaItinerarioVR&ARGUMENTS=-A" +
      corridas[corrida].claveCorrida.replace(/^\s*|\s*$/g, "") +
      ",-A" +
      corridas[corrida].FechaSalidaInicio +
      ",-A" +
      corridas[corrida].FechaSalidaBoleto +
      ",-A" +
      corridas[corrida].HoraSalida +
      ",-A";
    if (modo == "ida") a += oficinao + ",-A" + oficinar;
    else a += oficinar + ",-A" + oficinao;
    a +=
      ",-A,-A" +
      corridas[corrida].EmpresaCorrida +
      ",-A,-A" +
      corridas[corrida].EmpresaCorrida +
      ",-A" +
      corridas[corrida].CadenaCorridaTKN +
      ",-A" +
      corridas[corrida].CadenaFechaTKN +
      ",-A" +
      corridas[corrida].CadenaPuntoInicialTKN +
      ",-A" +
      corridas[corrida].CadenaPuntoFinalTKN +
      ",-A" +
      idioma +
      "'>" +
      txt.Itinerario +
      "</a>";
    cad += a;
  } else if (columna == "tarifapromo")
    if (corridas[corrida].TarifaPromo != 0)
      cad += corridas[corrida].TarifaPromo;
    else cad += "-";
  return cad;
}

//Genera ventana personalizacion
function generaPersonaliza(personalizaObj) {
  var x = adulto + insen + menor + estudiantes + maestros;
  var ad, is, ni, es, ma;
  var tipointabi = document.getElementById("tipoOper_N");
  ad = x - insen - menor - estudiantes - maestros;
  is = x - menor - estudiantes - maestros;
  ni = x - estudiantes - maestros;
  es = x - maestros;
  ma = x;
  oriabierto = personalizaObj.Ori;
  desabierto = personalizaObj.Des;
  //alert(oriabierto);
  //alert(personalizaObj.CostoTotal); alert(mint);
  if (esint == "NO") {
    var ti = "radio";
    var sele = "";
  } else {
    var ti = "hidden";
    var sele = 'checked="checked"';
    pago = "EF";
  }
  if (esint == "SI" && opeint != "" && claus != "" && mint != 0) {
    var inter =
      '<table class="aviso" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">' +
      txt.IntercambioLabel +
      '</td></tr><tr><td align="center" class="blue">' +
      opeint +
      "</td></tr></table>";
    if (
      typeof oriabierto != "undefined" &&
      typeof desabierto != "undefined" &&
      personalizaObj.CostoTotal > mint &&
      personalizaObj.AplicaPrepago == 0
    ) {
      personalizaObj.CostoTotal = personalizaObj.CostoTotal - mint;
    } else {
      if (
        typeof oriabierto != "undefined" &&
        typeof desabierto != "undefined" &&
        (personalizaObj.CostoTotal < mint ||
          personalizaObj.CostoTotal == mint) &&
        personalizaObj.AplicaPrepago == 0
      ) {
        personalizaObj.CostoTotal = 0;
      }
    }
  } else {
    var inter = "";
  }

  var cadTabla = "<div class='head'>";
  cadTabla +=
    "<!--img src='../imagenes/titulos-llenar-formulario.jpg' width='690' height='57' --/>";
  cadTabla += "</div><!-- head -->";
  cadTabla += "<div class='contenido'>" + inter;
  cadTabla +=
    "<table width='95%' border='0' align='center' cellpadding='0' cellspacing='0' class='forma'	>";
  cadTabla += "<tr>";
  cadTabla +=
    "<td><table class='formulario' width='100%' border='0' cellspacing='0' cellpadding='0'>";
  cadTabla += "<tr>";
  cadTabla +=
    "<td><table class='nf' width='120' border='0' cellspacing='0' cellpadding='0'>";
  cadTabla += "<tr>";
  cadTabla += "<td class='titulo'>" + txt.CostoTotal + "</td></tr>";
  cadTabla +=
    "<td align='center' bgcolor='#094992' class='precio res'>$" +
    personalizaObj.CostoTotal +
    "</td>";
  cadTabla += "</tr>";
  if (personalizaObj.TotalPrepago > 0 || personalizaObj.AplicaPrepago > 0) {
    if (personalizaObj.TotalPrepago >= mintprepago) {
      personalizaObj.TotalPrepago = personalizaObj.TotalPrepago - mintprepago;
    } else {
      personalizaObj.TotalPrepago = 0;
    }
    cadTabla +=
      "<tr><td width='20%' class='titulo'>" +
      txt.PorPagar +
      "</td></tr><tr><td id='back_costos' class='res' bgcolor='#427951' class='precio'>$" +
      personalizaObj.TotalPrepago +
      "</td></tr>";
    TotalPrepago = personalizaObj.TotalPrepago;
    AplicaPrepago = personalizaObj.AplicaPrepago;
  }
  cadTabla += "</table></td>";
  //cadTabla += "<td class='alert'>*campos requeridos</td>";
  cadTabla += " </tr>";
  cadTabla += "</table></td>";
  cadTabla += "</tr>";
  cadTabla += "<tr>";
  if (sesion != 0 && !vendir) {
    cadTabla +=
      "<td><table class='formulario' width='100%' border='0' cellspacing='0' cellpadding='0'>";
    cadTabla += "<tr style='visibility:hidden'>";
    cadTabla += " <td>Forma de Pago: </td>";
    //jmoreno se oculta para el pago con todito
    cadTabla += "<td style='visibility:hidden'><label>";
    cadTabla +=
      "<input type='radio' name='pago' value='EF' id='pago_0' onClick='TipoPago(1);' " +
      sele +
      " disabled='/>";
    cadTabla += txt.Efectivo + "</label></td>";
    cadTabla += "<td style='visibility:hidden'> <label>";
    cadTabla +=
      "<input type='" +
      ti +
      "' name='pago' value='TB' id='pago_1' onClick='TipoPago(2);' disabled='disabled'/>";
    if (esint == "NO") cadTabla += "Pago con Tarjeta";
    cadTabla += "</label></td>";
    cadTabla += "</tr>";
    cadTabla += "</table></td>";
  }
  cadTabla += "</tr>";
  cadTabla +=
    " <td class='blue'><strong>" + txt.RegistrodePasajeros + "</strong></td>";
  cadTabla += "</tr>";
  cadTabla += "<tr>";
  cadTabla += "<td>&nbsp;</td>";
  cadTabla += "</tr>";
  cadTabla += "<tr>";
  cadTabla +=
    "<td><table class='formulario' width='600' border='0' cellspacing='0' cellpadding='0'>";
  var tipo;
  var arrNombres = NomPasajeros.split("-");
  var contaux = 0;
  var TipoPasAux;
  var NombreAux;
  for (cont = 1; cont <= x; cont++) {
    NombreAux = "";
    if (contaux < numPasInt && NomPasajeros != "") {
      TipoPasAux = arrNombres[contaux].substring(0, 2);
    }

    if (adulto > 0 && cont <= ad) {
      tipo = txt.AdultoMayus;
      tipoAbre = personalizaObj.Adul;
      tipop = "AD";
    } else if (insen > 0 && cont <= is) {
      tipo = txt.InsenMayus;
      tipoAbre = personalizaObj.Ins;
      tipop = "IN";
    } else if (menor > 0 && cont <= ni) {
      tipo = txt.MenorMayus;
      tipoAbre = personalizaObj.Nin;
      tipop = "NI";
    } else if (estudiantes > 0 && cont <= es) {
      tipo = txt.EstudianteMayus;
      tipoAbre = personalizaObj.Est;
      tipop = "ES";
    } else if (maestros > 0 && cont <= ma) {
      tipo = txt.MaestroMayus;
      tipoAbre = personalizaObj.Mae;
      tipop = "MA";
    }
    //Creo un arreglo para los demas programas
    tipoPas[cont - 1] = tipo;
    tipoPasInt[cont - 1] = tipoAbre;
    tipoPasExtAbie[cont - 1] = tipop;

    if (
      tipop == TipoPasAux ||
      (tipop == "IN" && TipoPasAux == "XA") ||
      (tipop == "NI" &&
        TipoPasAux == "ZA" &&
        contaux < numPasInt &&
        NomPasajeros != "")
    ) {
      NombreAux = arrNombres[contaux].substring(3);
    }
    contaux++;

    cadTabla += "<tr>";
    cadTabla +=
      "<td  ><label for='pasajero" + cont + "'>" + tipo + "&nbsp:</label></td>";

    if (NombreAux == "") {
      cadTabla +=
        "<td><input onchange='javascript:this.value=this.value.toUpperCase().replace(/,/g,sustitucion);' name='pasajero' type='text' id='pasajero" +
        cont +
        "' size='50'/>";
    } else {
      cadTabla +=
        "<td><input onchange='javascript:this.value=this.value.toUpperCase().replace(/,/g,sustitucion);' name='pasajero' type='text' id='pasajero" +
        cont +
        "' value='" +
        NombreAux +
        "'size='50' readonly/>";
    }
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
  cadTabla +=
    "<td style='visibility:hidden'> <input type='checkbox' name='checkbox' id='checkbox' />";
  cadTabla += "<label for='checkbox'>" + txt.Acepto + "</label>";
  cadTabla +=
    "<a class='iframe' href='../imagenes/terminos.html'> " +
    txt.Terminos +
    " </a> " +
    txt.PagoPrecio +
    "</td>";
  cadTabla += "</tr>";
  cadTabla += "<tr>";
  cadTabla += "<td>&nbsp;</td>";
  cadTabla += "</tr>";
  cadTabla += "<tr>";
  cadTabla +=
    "<td style='visibility:hidden'><table class='formulario' width='100%' border='0' cellspacing='0' cellpadding='0'>";
  cadTabla += "<tr>";
  cadTabla +=
    "<td width='50%><label for='uword'>" +
    txt.CaptureTxtComoEnImg +
    "</label></td>";
  cadTabla +=
    "<td><input id='uword' class='cajaMediana' type='text' value='' name='uword'></td>";
  cadTabla += sjcap();
  cadTabla += "<br/>";
  cadTabla +=
    "<a href='#' onClick='return RefreshImage();'>" +
    txt.RefrescarImagen +
    "</a></td>";
  cadTabla += "</tr>";
  cadTabla += "</table></td>";
  cadTabla += "</tr>";
  cadTabla += "</table>";
  cadTabla += "</div><!-- contenido -->";
  cadTabla += "<tr>";
  cadTabla +=
    "<td ><table class='formulario' width='650' border='0' cellspacing='0' cellpadding='0' style='visibility:hidden'>";
  //cadTabla += "<td width='120'><label for='domicilio'>Domicilio</label></td>";
  cadTabla +=
    "<td colspan='3'><label for='domicilio'>" +
    txt.Domicilio +
    ":</label><input name='domicilio' type='text' id='domicilio' size='50' />";
  cadTabla += "<span class='alert'>*</span></td>";
  //cadTabla += "<td><label for='ciudad'>Ciudad</label></td>";
  cadTabla +=
    "<td width='195'><label for='ciudad'>" +
    txt.Ciudad +
    ": </label><input name='ciudad'  type='text' id='ciudad' size='20' />";
  cadTabla += "<span class='alert'>*</span></td>";
  //cadTabla += "<td width='96'><label for='codigoPostal'>C&oacute;digo postal</label></td>";
  cadTabla +=
    "<td width='239'><label for='codigoPostal'>" +
    txt.CodPostal +
    ": </label><input name='codigoPostal' type='text' id='codigoPostal' size='7' />";
  cadTabla += "<span class='alert'>*</span></td>";
  //cadTabla += "<td><label for='select'>Pais</label></td>";
  cadTabla +=
    "<td colspan='3'><label for='select'>" +
    txt.Pais +
    ": </label><select name='select' id='select'>";
  cadTabla += paisesTB + "</select>";

  cadTabla += " <span class='alert'>*</span></td>";
  //cadTabla += "<td> <label for='telefono'>Tel&eacute;fono Casa/Oficina: </label></td>";
  cadTabla +=
    "<td colspan='3'><label for='telefono'>" +
    txt.TelCasaOfic +
    ": </label><input type='text' name='telefono' id='telefono' /> ";
  cadTabla += txt.IncluyaLada;
  cadTabla += " <span class='alert'>*</span></td>";
  //cadTabla += "<td><label for='email'>Correo electr&oacute;nico</label></td>";
  cadTabla +=
    "<td colspan='3'><label for='email'>" +
    txt.RSCorreo +
    ": </label><input type='text' name='email' id='email' />";
  cadTabla += "<span class='alert'>*</span></td>";
  cadTabla += "</table></td>";
  cadTabla += "<td>&nbsp;</td>";

  $("#area").html(cadTabla);
  ocultamiestrab(true);
}

//Genera resumen modo 1 ce o modo 2 para ne
function generaResumen(modo) {
  if (esint == "SI" && opeint != "" && claus != "" && (mint != 0 || mint == 0))
    var inter =
      '<table class="" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">' +
      txt.IntercambioLabel +
      '</td></tr><tr><td align="center" class="blue">' +
      opeint +
      "</td></tr></table>";
  else var inter = "";

  var cadTabla = "<div class='head'>";
  cadTabla +=
    "<!--img src='../imagenes/titulos-verifique-su-viaje.jpg' width='690' height='57' /-->";
  cadTabla += "</div><!-- head -->";
  cadTabla += cintaOrigen(4, "ida");
  cadTabla += '<div class="table_process"><div class="col-md-12">';
  cadTabla += "<div class='table_process'>" + inter;
  cadTabla += '<div class="personal_information"><div class="full_summary">';
  cadTabla +=
    '<p class="type_trip">' +
    txt.ViajeSalida +
    '<i class="fa fa-long-arrow-right"></i></p>';
  cadTabla += '<div class="trip_details">';
  if (modo != 2) {
    //DIA
    cadTabla +=
      '<div class="col-md-2 col-sm-4 col-xs-4 inline_cols"><div class="out_trip">';
    cadTabla += '<p class="header_col">' + txt.Dia + "</p>";
    if (corridaIda.CadenaCorridaTKN.split("-").length == 1) {
      cadTabla += '<p align="center">' + corridaIda.FechaSalidaBoleto + "</p>";
    } else {
      var ffecha = corridaIda.CadenaFechaLocalTKN.split("-");
      for (var i = 0; i < ffecha.length - 1; i++) {
        cadTabla += '<p align="center">' + ffecha[i] + "</p>";
      }
      if (oficinar.search("-") > 0) {
        cadTabla += '<p align="center">-</p>';
      }
    }
    cadTabla += "</div><!----></div><!--col-md-2-->";
    //HORA
    cadTabla +=
      '<div class="col-md-2 col-sm-4 col-xs-4 inline_cols"><div class="out_trip">';
    cadTabla += '<p class="header_col">' + txt.Hora + "</p>";
    if (corridaIda.CadenaCorridaTKN.split("-").length == 1) {
      cadTabla +=
        '<p align="center">' +
        cambiaFormatoHora(corridaIda.HoraSalida) +
        "</p>";
    } else {
      var hhora = corridaIda.CadenaHoraTKN.split("-");
      for (var i = 0; i < hhora.length - 1; i++) {
        cadTabla += '<p align="center">' + cambiaFormatoHora(hhora[i]) + "</p>";
      }
      if (oficinar.search("-") > 0) {
        cadTabla += '<p align="center">-</p>';
      }
    }
    cadTabla += "</div><!----></div><!--col-md-2-->";
  }
  //Servicio
  cadTabla +=
    '<div class="col-md-2 col-sm-4 col-xs-4 inline_cols"><div class="out_trip">';
  cadTabla += '<p class="header_col">' + txt.Servicio + "</p>";
  if (modo != 2) {
    if (corridaIda.CadenaCorridaTKN.split("-").length == 1) {
      cadTabla += '<p align="center">' + corridaIda.ClaveServicio + "</p>";
    } else {
      var aservicio = corridaIda.ServiciosTKN.split("-");
      for (var i = 0; i < aservicio.length - 1; i++) {
        cadTabla += '<p align="center">' + aservicio[i] + "</p>";
      }
      if (oficinar.search("-") > 0) {
        cadTabla += '<p align="center">' + opcionConexion.Servicio + "</p>";
      }
    }
  } else {
    cadTabla += '<p align="center">' + desSer + "</p>";
  }
  cadTabla += "</div><!----></div><!--col-md-2-->";
  //Origen
  cadTabla +=
    '<div class="col-md-3 col-sm-4 col-xs-4 inline_cols"><div class="out_trip">';
  cadTabla += '<p class="header_col">' + txt.Origen + "</p>";
  if (modo != 2) {
    if (corridaIda.CadenaCorridaTKN.split("-").length == 1) {
      cadTabla += '<p align="center">' + oficinaori + "</p>";
    } else {
      var aorigen = corridaIda.OficinasOrigenTKN.split("-");
      for (var i = 0; i < aorigen.length - 1; i++) {
        cadTabla += '<p align="center">' + aorigen[i] + "</p>";
      }
      if (oficinar.search("-") > 0) {
        cadTabla += '<p align="center">' + opcionConexion.Origen + "</p>";
      }
    }
  } else {
    cadTabla += '<p align="center">' + oriabierto + "</p>";
  }
  cadTabla += "</div><!----></div><!--col-md-2-->";
  //Destino
  cadTabla +=
    '<div class="col-md-3 col-sm-4 col-xs-4 inline_cols"><div class="out_trip">';
  cadTabla += '<p class="header_col">' + txt.Destino + "</p>";
  if (modo != 2) {
    if (corridaIda.CadenaCorridaTKN.split("-").length == 1) {
      cadTabla += '<p align="center">' + oficinareg + "</p>";
    } else {
      var adestino = corridaIda.OficinasDestinoTKN.split("-");
      for (var i = 0; i < adestino.length - 1; i++) {
        cadTabla += '<p align="center">' + adestino[i] + "</p>";
      }
      if (oficinar.search("-") > 0) {
        cadTabla += '<p align="center">' + opcionConexion.Destino + "</p>";
      }
    }
  } else {
    if (oficinar.search("-") > 0 && modo == 2) {
      cadTabla += '<p align="center">' + oficinareg + "</p>";
    } else {
      cadTabla += '<p align="center">' + desabierto + "</p>";
    }
  }
  cadTabla += "</div><!----></div><!--col-md-2-->";

  cadTabla += "</div><!--trip_details-->";
  cadTabla += '<div class="row"></div>';

  ////Pasajeros
  cadTabla += '<div class="passengers_details">';
  cadTabla +=
    '<div class="col-md-2 col-sm-3 col-xs-3 inline_cols"><div class="pass_trip">' +
    '<p class="header_pass">#</p></div><!--out_trip--></div><!--col-md-2-->';

  cadTabla +=
    '<div class="col-md-5 col-sm-3 col-xs-3 inline_cols"><div class="pass_trip">' +
    '<p class="header_pass">' +
    txt.PasajeroMin +
    "</p></div><!--out_trip--></div><!--col-md-2-->";

  cadTabla +=
    '<div class="col-md-3 col-sm-3 col-xs-3 inline_cols"><div class="pass_trip">' +
    '<p class="header_pass">' +
    txt.Tipo +
    "</p></div><!--out_trip--></div><!--col-md-2-->";

  if (modo != 2)
    cadTabla +=
      '<div class="col-md-2 col-sm-3 col-xs-3 inline_cols"><div class="pass_trip">' +
      '<p class="header_pass">' +
      txt.Asiento +
      "</p></div><!--out_trip--></div><!--col-md-2-->";
  cadTabla += '<div class="row"></div>';
  for (x = 0; x < NombrePas.length; x++) {
    cadTabla +=
      '<div class="col-md-2 col-sm-3 col-xs-3 inline_cols"><div class="pass_trip">' +
      "<p>" +
      (x + 1) +
      "</p></div><!--out_trip--></div><!--col-md-2-->";
    cadTabla +=
      '<div class="col-md-5 col-sm-3 col-xs-3 inline_cols"><div class="pass_trip">' +
      "<p>" +
      NombrePas[x] +
      "</p></div><!--out_trip--></div><!--col-md-2-->";
    cadTabla +=
      '<div class="col-md-3 col-sm-3 col-xs-3 inline_cols"><div class="pass_trip">' +
      "<p>" +
      tipoPas[x] +
      "</p></div><!--out_trip--></div><!--col-md-2-->";
    if (modo != 2) {
      cadTabla +=
        '<div class="col-md-2 col-sm-3 col-xs-3 inline_cols"><div class="pass_trip">' +
        "<p>" +
        A_AsientosPasajeros[x] +
        "</p></div><!--out_trip--></div><!--col-md-2-->";
    }
    cadTabla += '<div class="row"></div>';
  }
  cadTabla +=
    "</div><!--passangers_details--><div class='row'></div><hr class='blue'></div><!--full_summary--></div>";
  if (redondo == "SI") {
    cadTabla +=
      '<div class="col-md-12"><div><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
      oficinareg +
      " - " +
      oficinaori +
      "</li>";
    cadTabla += '<li class="cost"></li>';
    cadTabla +=
      '<li class="date">' + fechaenletra(fechareg) + "</li></ul></div></div>";

    cadTabla += '<div class="personal_information"><div class="full_summary">';
    cadTabla +=
      '<p class="type_trip">' +
      txt.ViajeRegreso +
      '<i class="fa fa-long-arrow-right"></i></p>';
    cadTabla += '<div class="trip_details">';

    //Info regreso

    if (modo != 2) {
      //DIA R
      cadTabla +=
        '<div class="col-md-2 col-sm-4 col-xs-4 inline_cols"><div class="out_trip">';
      cadTabla += '<p class="header_col">' + txt.Dia + "</p>";
      if (corridaRegeso.CadenaCorridaTKN.split("-").length == 1) {
        cadTabla +=
          '<p align="center">' + corridaRegeso.FechaSalidaBoleto + "</p>";
      } else {
        if (oficinar.search("-") > 0) {
          cadTabla += '<p align="center">-</p>';
        }
        var ffechaR = corridaRegeso.CadenaFechaLocalTKN.split("-");
        for (var i = 0; i < ffechaR.length - 1; i++) {
          cadTabla += '<p align="center">' + ffechaR[i] + "</p>";
        }
      }
      cadTabla += "</div><!----></div><!--col-md-2-->";
      //HORA R
      cadTabla +=
        '<div class="col-md-2 col-sm-4 col-xs-4 inline_cols"><div class="out_trip">';
      cadTabla += '<p class="header_col">' + txt.Hora + "</p>";
      if (corridaRegeso.CadenaCorridaTKN.split("-").length == 1) {
        cadTabla +=
          '<p align="center">' +
          cambiaFormatoHora(corridaRegeso.HoraSalida) +
          "</p>";
      } else {
        if (oficinar.search("-") > 0) {
          cadTabla += '<p align="center">-</p>';
        }
        var hhoraR = corridaRegeso.CadenaHoraTKN.split("-");
        for (var i = 0; i < hhoraR.length - 1; i++) {
          cadTabla +=
            '<p align="center">' + cambiaFormatoHora(hhoraR[i]) + "</p>";
        }
      }
      cadTabla += "</div><!----></div><!--col-md-2-->";
    }
    //Servicio R
    cadTabla +=
      '<div class="col-md-2 col-sm-4 col-xs-4 inline_cols"><div class="out_trip">';
    cadTabla += '<p class="header_col">' + txt.Servicio + "</p>";
    if (modo != 2) {
      if (corridaRegeso.CadenaCorridaTKN.split("-").length == 1) {
        cadTabla += '<p align="center">' + corridaRegeso.ClaveServicio + "</p>";
      } else {
        if (oficinar.search("-") > 0) {
          cadTabla += '<p align="center">' + opcionConexion.Servicio + "</p>";
        }
        var aservicioR = corridaRegeso.ServiciosTKN.split("-");
        for (var i = 0; i < aservicioR.length - 1; i++) {
          cadTabla += '<p align="center">' + aservicioR[i] + "</p>";
        }
      }
    } else {
      cadTabla += '<p align="center">' + desSer + "</p>";
    }
    cadTabla += "</div><!----></div><!--col-md-2-->";
    //Origen R
    cadTabla +=
      '<div class="col-md-3 col-sm-4 col-xs-4 inline_cols"><div class="out_trip">';
    cadTabla += '<p class="header_col">' + txt.Origen + "</p>";
    if (modo != 2) {
      if (corridaRegeso.CadenaCorridaTKN.split("-").length == 1) {
        cadTabla += '<p align="center">' + oficinareg + "</p>";
      } else {
        if (oficinar.search("-") > 0) {
          cadTabla += '<p align="center">' + opcionConexion.Destino + "</p>";
        }
        var aorigenR = corridaRegeso.OficinasOrigenTKN.split("-");
        for (var i = 0; i < aorigen.length - 1; i++) {
          cadTabla += '<p align="center">' + aorigenR[i] + "</p>";
        }
      }
    } else {
      if (oficinar.search("-") > 0 && modo == 2) {
        cadTabla += '<p align="center">' + oficinareg + "</p>";
      } else {
        cadTabla += '<p align="center">' + desabierto + "</p>";
      }
    }
    cadTabla += "</div><!----></div><!--col-md-2-->";
    //Destino R
    cadTabla +=
      '<div class="col-md-3 col-sm-4 col-xs-4 inline_cols"><div class="out_trip">';
    cadTabla += '<p class="header_col">' + txt.Destino + "</p>";
    if (modo != 2) {
      if (corridaRegeso.CadenaCorridaTKN.split("-").length == 1) {
        cadTabla += '<p align="center">' + oficinaori + "</p>";
      } else {
        if (oficinar.search("-") > 0) {
          cadTabla += '<p align="center">' + opcionConexion.Origen + "</p>";
        }
        var adestinoR = corridaRegeso.OficinasDestinoTKN.split("-");
        for (var i = 0; i < adestino.length - 1; i++) {
          cadTabla += '<p align="center">' + adestinoR[i] + "</p>";
        }
      }
    } else {
      cadTabla += '<p align="center">' + oriabierto + "</p>";
    }
    cadTabla += "</div><!----></div><!--col-md-2-->";

    cadTabla += "</div><!--trip_details-->";
    cadTabla += '<div class="row"></div>';
    //Pasajeros R
    cadTabla += '<div class="passengers_details">';
    cadTabla +=
      '<div class="col-md-2 col-sm-3 col-xs-3 inline_cols"><div class="pass_trip">' +
      '<p class="header_pass">#</p></div><!--out_trip--></div><!--col-md-2-->';

    cadTabla +=
      '<div class="col-md-5 col-sm-3 col-xs-3 inline_cols"><div class="pass_trip">' +
      '<p class="header_pass">' +
      txt.PasajeroMin +
      "</p></div><!--out_trip--></div><!--col-md-2-->";

    cadTabla +=
      '<div class="col-md-3 col-sm-3 col-xs-3 inline_cols"><div class="pass_trip">' +
      '<p class="header_pass">' +
      txt.Tipo +
      "</p></div><!--out_trip--></div><!--col-md-2-->";

    if (modo != 2)
      cadTabla +=
        '<div class="col-md-2 col-sm-3 col-xs-3 inline_cols"><div class="pass_trip">' +
        '<p class="header_pass">' +
        txt.Asiento +
        "</p></div><!--out_trip--></div><!--col-md-2-->";
    cadTabla += '<div class="row"></div>';
    for (x = 0; x < NombrePas.length; x++) {
      cadTabla +=
        '<div class="col-md-2 col-sm-3 col-xs-3 inline_cols"><div class="pass_trip">' +
        "<p>" +
        (x + 1) +
        "</p></div><!--out_trip--></div><!--col-md-2-->";
      cadTabla +=
        '<div class="col-md-5 col-sm-3 col-xs-3 inline_cols"><div class="pass_trip">' +
        "<p>" +
        NombrePas[x] +
        "</p></div><!--out_trip--></div><!--col-md-2-->";
      cadTabla +=
        '<div class="col-md-3 col-sm-3 col-xs-3 inline_cols"><div class="pass_trip">' +
        "<p>" +
        tipoPas[x] +
        "</p></div><!--out_trip--></div><!--col-md-2-->";
      if (modo != 2) {
        cadTabla +=
          '<div class="col-md-2 col-sm-3 col-xs-3 inline_cols"><div class="pass_trip">' +
          "<p>" +
          A_AsientosPasajerosRegreso[x] +
          "</p></div><!--out_trip--></div><!--col-md-2-->";
      }
      cadTabla += '<div class="row"></div>';
    }
    cadTabla +=
      "</div><!--passangers_details--><div class='row'></div><hr class='blue'></div><!--full_summary--></div>";
  }

  //Tarjetahabiente
  cadTabla += '<div class="col-md-12"><i class="fa fa-info-circle"></i>';
  cadTabla +=
    "<a class='iframe' href='../imagenes/" +
    txt.pdfPoliticas +
    "#zoom=100'>&nbsp;" +
    txt.InfoImportante +
    " </a>";
  cadTabla +=
    '<div class="col-md-12"><div class="table_process" ><div class="header_process right">';
  cadTabla +=
    '<ul class="trip_cost_date"><li class="trip">' +
    txt.DatosTarjeta +
    "</li></ul></div>";
  cadTabla +=
    '<div class="personal_information" id="datosth"><form><div class="row-process multi_row">';
  cadTabla +=
    '<div class="col-md-6 col-sm-12 col-xs-12 col-inputs inline_cols">' +
    '<label for="nombreTB">' +
    txt.RSNombre +
    ':</label><input name="nombreTB" type="text" id="nombreTB" class="form-control"></div>';
  cadTabla +=
    '<div class="col-md-6 col-sm-12 col-xs-12 col-inputs inline_cols">';
  cadTabla +=
    "<label for='select'>" +
    txt.Pais +
    ": </label><p><select name='select' id='select'  style='height: 34px;'>";
  cadTabla += paisesTB + "</select></p>";
  cadTabla += "</div>";
  cadTabla += '<div class="row"></div>';
  cadTabla += '</div><!--row-process--><div class="row-process multi_row">';
  cadTabla +=
    '<div class="col-md-6 col-sm-12 col-xs-12 col-inputs inline_cols">' +
    '<label for="domicilio">' +
    txt.Domicilio +
    ':</label><input name="domicilio" type="text" id="domicilio" class="form-control"></div>';
  cadTabla +=
    '<div class="col-md-3 col-sm-12 col-xs-12 col-inputs inline_cols">' +
    '<label for="ciudad">' +
    txt.Ciudad +
    ':</label><input name="ciudad" type="text" id="ciudad" class="form-control"></div>';
  cadTabla +=
    '<div class="col-md-3 col-sm-12 col-xs-12 col-inputs inline_cols">' +
    '<label for="codigoPostal">' +
    txt.CodPostal +
    ':</label><input name="codigoPostal" type="text" id="codigoPostal" class="form-control"></div>';
  cadTabla += '</div><!--row-process--><div class="row-process multi_row">';
  cadTabla +=
    '<div class="col-md-6 col-sm-12 col-xs-12 col-inputs inline_cols">' +
    '<label for="telefono">' +
    txt.TelCasaOfic +
    ':</label><input name="telefono" type="text" id="telefono" class="form-control"></div>';
  cadTabla +=
    '<div class="col-md-3 col-sm-12 col-xs-12 col-inputs inline_cols">' +
    '<label for="email">' +
    txt.RSCorreo +
    ':</label><input name="email" type="text" id="email" class="form-control"></div>';
  cadTabla +=
    '<div class="col-md-3 col-sm-12 col-xs-12 col-inputs inline_cols">' +
    '<label for="emailc">' +
    txt.ConfirmaCorreo +
    ':</label><input name="emailc" type="text" id="emailc" class="form-control"></div>';
  cadTabla += '<div class="row"></div>';
  cadTabla += '</div><!--row-process--><div class="row-process multi_row">';
  cadTabla +=
    '<div class="col-md-3 col-sm-12 col-xs-12 col-inputs inline_cols">';
  cadTabla += sjcap();
  cadTabla +=
    "<p class='text-center'><a href='#' onClick='return RefreshImage();'>" +
    txt.RefrescarImagen +
    "</a></p>";
  cadTabla += "</div>";
  cadTabla +=
    '<div class="col-md-4 col-sm-12 col-xs-12 col-inputs inline_cols">' +
    '<label for="uword">' +
    txt.CaptureTxtComoEnImg +
    ':</label><input name="uword" type="text" id="uword" class="form-control"></div>';
  cadTabla +=
    '<div class="col-md-4 col-sm-12 col-xs-12 col-inputs inline_cols">';
  cadTabla += '<table class="forma"><tbody><tr><td>';

  /*
	cadTabla += "<input type='checkbox' name='checkbox' id='checkbox' />";
	cadTabla += "<label for='checkbox'>&nbsp;"+txt.Acepto+"</label>";
	cadTabla += "<a class='iframe' href='../imagenes/"+txt.pdfPoliticas+"#zoom=100'> "+txt.Terminos+" </a>";
	*/

  cadTabla += "</td></tr></tbody></table>";
  cadTabla += "</div>";
  cadTabla += "</div><!--row-process-->";
  cadTabla += '<div class="row"></div>';
  cadTabla += '<hr class="small"><div class="row-process multi_row">';
  cadTabla += '<table align="center">';

  //cadTabla +="<td width='20%' class='titulo'>"+txt.CostoTotal+"</td><br><td width='3%' class='titulo'></td><td width='30%'class='titulo'>"+txt.FormadePago+"</td><td width='30%' class='titulo'></td>";
  cadTabla += "<tr>";
  cadTabla +=
    "<td width='20%'><br/></td>" +
    "<td width='3%'><br/></td>" +
    "<td width='30%'><br/></td>";
  cadTabla +=
    "<td width='30%' rowspan=3 align=right> <img src='../imagenes/terminosllame.png' /> </td>";
  cadTabla += "</tr>";
  cadTabla += "<tr>";
  cadTabla +=
    "<td width='20%' class='titulo'>" +
    txt.CostoTotal +
    "</td><br><td width='3%' class='titulo'></td><td width='30%'class='titulo'>" +
    txt.FormadePago +
    "</td>";

  var tablaaux =
    "<tr><td><p>&nbsp;</p></td></tr><tr><td><p>&nbsp;</p></td></tr>";
  if (modo != 2) {
    if (object_diagrama.TotalPrepago > 0 || object_diagrama.AplicaPrepago > 0) {
      tablaaux =
        "<tr><td width='20%' class='titulo'>" +
        txt.PorPagar +
        "</td></tr><tr><td id='back_costos' class='res' bgcolor='#427951' class='precio'>$" +
        object_diagrama.TotalPrepago +
        "</td></tr>";
      TotalPrepago = object_diagrama.TotalPrepago;
      AplicaPrepago = object_diagrama.AplicaPrepago;
    }
  } else {
    if (object_servicio.TotalPrepago > 0 || object_servicio.AplicaPrepago > 0) {
      tablaaux =
        "<tr><td width='20%' class='titulo'>" +
        txt.PorPagar +
        "</td></tr><tr><td id='back_costos' class='res' bgcolor='#427951' class='precio'>$" +
        object_servicio.TotalPrepago +
        "</td></tr>";
      TotalPrepago = object_servicio.TotalPrepago;
      AplicaPrepago = object_servicio.AplicaPrepago;
    }
  }

  if (modo != 2)
    cadTabla +=
      "<tr>	<td width='20%'><table><tr><td id='back_costos' class='res' bgcolor='#427951' class='precio'>$" +
      object_diagrama.CostoTotal +
      "</td></tr>" +
      tablaaux +
      "</table>  </td> <td width='3%' ></td> ";
  else
    cadTabla +=
      "<tr><td width='20%' class='res' bgcolor='#094992' class='precio' id='back_costos'>$" +
      object_servicio.CostoTotal +
      "</td>" +
      tablaaux +
      "<td width='3%'></td> ";

  cadTabla += "</div></div></div>";
  // ahern

  //cadTabla += "<td width='5%><form name='formu'><p align='center'><img src="carpeta\toditocash.png"/><br><p align='center'>Todito Cash <input type='radio' name="pago' value='todito'></p><td width="5%" class = <td width='4%'><p align='center'><img src='C:\Users\valsishga\Desktop\Infopantallas\card_sm_visa.png' /><img src='C:\Users\valsishga\Desktop\Infopantallas\card_sm_masterc.png' /><img src='C:\Users\valsishga\Desktop\Infopantallas\card_sm_carnet.gif"/></p>";
  //cadTabla += "<p align='center'><br>Tarjeta Bancaria <input type='radio' name='pago' value='banamex' checked></form></td>";
  if (sesion == 0) {
    if (muestraTC == 1)
      cadTabla +=
        "<td width='30%'><form name='formu'><p align='center'><img src='../imagenes/card_todito.jpeg'/><br><p align='center'>Todito Cash <input type='radio' name='pago' value='todito'></p>";
    cadTabla +=
      "<td width='30%'><p align='center'><img src='../imagenes/card_visa.gif' /><img src='../imagenes/card_master.gif' /></p><p align='center'>Tarjeta Bancaria <input type='radio' name='pago' value='banamex' checked></form></td>";
    //JMORENO TARJETA AMIGO
    if (muestraTA == 1)
      cadTabla +=
        "<td><p align='center'><img src='../imagenes/amigabanner.png'/><br><p align='center'>Tarjeta amiga<input type='radio' name='pago' value='amigo'></td>";
  } else {
    cadTabla +=
      "<td width='20%'></td><td width='20%'></td>   <td width='30%'><form name='formu'><input type='radio' name='pago' value='EF' checked> " +
      txt.Efectivo +
      " </form></td>";
  }

  cadTabla += "</tr></table>"; //</table></td> </tr>

  cadTabla += "</tr>";
  cadTabla += "<tr>";
  cadTabla += "<td>&nbsp;</td>";
  cadTabla += "</tr>   ";
  cadTabla += "</table>";
  if (modo != 2) {
    var curUnixTime = Math.round(new Date().getTime() / 1000);
    var hentrada =
      object_resumen.LOGIN +
      "^" +
      consecutivo +
      "^" +
      curUnixTime +
      "^" +
      object_diagrama.CostoTotal +
      "^";
    var hmac = CryptoJS.HmacMD5(hentrada, object_resumen.HASHID);
    /*alert('log: '+object_resumen.LOGIN);
	alert('key: '+object_resumen.HASHID);
	alert('url:' +object_resumen.URL);
	alert('sequence: '+consecutivo);
	alert('timestamp'+curUnixTime);
	alert('hash: '+hmac);*/
    formboa = '<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11"/> ';
    formboa +=
      '<form name="pagobanco" action="' +
      object_resumen.URL +
      '" method="post" target="myFrame">' +
      '<input name="x_login" value="' +
      object_resumen.LOGIN +
      '" type="hidden">' +
      '<input name="x_gateway_id" value="AJ5138-05" type="hidden">' +
      '<input name="x_amount" value="' +
      object_diagrama.CostoTotal +
      '" type="hidden">' +
      '<input name="x_fp_sequence" value="' +
      consecutivo +
      '" type="hidden">' +
      '<input name="x_fp_timestamp" value="' +
      curUnixTime +
      '" type="hidden">' +
      '<input name="x_fp_hash" value="' +
      hmac +
      '" type="hidden">' +
      '<input name="x_relay_response" value="TRUE" type="hidden"> ' +
      '<input name="x_show_form" value="PAYMENT_FORM" type="hidden">' +
      //'<input name="x_type" value="AUTH_CAPTURE" type="hidden">'+
      //'<input name="x_test_request" value="TRUE" type="hidden">'+
      //'<input name="x_relay_response" value="TRUE" type="hidden">'+
      //'<input name="merchant_cookie_1" value="12345" type="hidden">'+
      //'<input name="merchant_cookie_2" value="67890" type="hidden">'+
      //'<input name="x_test_request" value="TRUE" type="hidden">'+
      '<input value="Checkout" type="hidden">' +
      //'<input type="submit" value="post">'+
      "</form>";
    /*/hgaytan
	cadTabla += " <form name='formu'><input type='radio' name='pago' value='todito'>Todito<br>";
	cadTabla += "<input type='radio' name='pago' value='banamex'>Banamex </form>";
	// fin hgaytan*/
  }
  cadTabla += "</div><!-- contenido -->";

  $("#area").html(cadTabla);
  ocultamiestrab(true);
  if (modo != 2 && sesion == 0) $("#datos").html("");

  if (sesion != 0 && !vendir) {
    document.getElementById("nombreTB").disabled = true;
    document.getElementById("select").disabled = true;
    document.getElementById("domicilio").disabled = true;
    document.getElementById("ciudad").disabled = true;
    document.getElementById("codigoPostal").disabled = true;
    document.getElementById("telefono").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("emailc").disabled = true;
  }
}
// HGAYTAN
//Genera Todito modo 1 ce o modo 2 para ne
function generaTodito(modo) {
  if (esint == "SI" && opeint != "" && claus != "" && (mint != 0 || mint == 0))
    var inter =
      '<table class="" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">' +
      txt.IntercambioLabel +
      '</td></tr><tr><td align="center" class="blue">' +
      opeint +
      "</td></tr></table>";
  else var inter = "";

  var cadTabla = "<div class='head'>";
  cadTabla +=
    "<!--img src='../imagenes/titulos-verifique-su-viaje.jpg' width='690' height='57' /-->";
  cadTabla += "</div><!-- head -->";

  cadTabla += "<div class='contenido'>" + inter;

  cadTabla +=
    "<table background='../imagenes/toditocash.png' frame='box' cellpadding='9' width='70%' align='center' border='0'>";
  cadTabla += "<tr ><th align='center' height='100'>  </th></tr>";
  cadTabla += "<tr align='center'><td align='right'>Número de tarjeta:</td>";
  cadTabla +=
    "<td height='50'><input type='text' id='ntarjeta' name='ntarjeta' placeholder='1234567890'></td>";
  cadTabla += "</tr><tr><td align='right'>Clave de seguridad:</td>";
  cadTabla +=
    "<td height=85'><input type='password' id='nclave' name='nclave' placeholder='nip: 3456'></td>";
  cadTabla += "</tr></table><br><br><br> ";

  cadTabla += "</div><!-- contenido -->";

  $("#area").html(cadTabla);
  ocultamiestrab(true);
  //if(modo!=2 && sesion == 0) $('#datos').html('');
  $("#datos").html("");
  // hgaytan 05 03 14
  $("#continuar").show();
  if (modo == 1) {
    $("#continuar").html(
      '<a onclick="validacionesTodito(1);" href="#" class="btn_ctr">Continuar ››</a>'
    );
  }
  if (modo == 2) {
    $("#continuar").html(
      '<a onclick="validacionesTodito(2);" href="#" class="btn_ctr">Continuar ››</a>'
    );
  }

  $("#regresar").html("");
}
// FIN HGAYTAN
//JMORENO TARJETA AMIGO
function generaAmigo(modo) {
  //var leytra='';
  //obtieneParam(leytra);

  if (esint == "SI" && opeint != "" && claus != "" && (mint != 0 || mint == 0))
    var inter =
      '<table class="" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">' +
      txt.IntercambioLabel +
      '</td></tr><tr><td align="center" class="blue">' +
      opeint +
      "</td></tr></table>";
  else var inter = "";
  var cadTabla = "<div class='head'>";
  cadTabla +=
    "<!--img src='../imagenes/titulos-verifique-su-viaje.jpg' width='690' height='57' /-->";
  cadTabla += "</div><!-- head -->";
  cadTabla += "<div class='contenido'>" + inter;

  cadTabla +=
    "<table background='../imagenes/amigadatos.png' frame='box' cellpadding='9' width='70%' align='center' border='0'>";
  cadTabla += "<tr ><th align='center' height='100'>  </th></tr>";
  cadTabla +=
    "<tr align='center'><td align='right'>N&uacute;mero de Tarjeta:</td>";
  cadTabla +=
    "<td height='40' align='left'><input type='text' id='ntarjeta' name='ntarjeta' placeholder='1234567890123456'></td></tr>";
  cadTabla +=
    "<tr align='center'><td align='right'>C&oacute;digo de Seguridad:</td>";
  cadTabla +=
    "<td height='40' align='left'><input type='text' size='3' id='ncodigo' name='ncodigo' placeholder='123' maxlength='3'></td></tr>";
  cadTabla += "<tr align='center'><td align='right'>Fecha de Vencimiento:</td>";
  cadTabla +=
    "<td height='40' align='left'><input type='text' size='2' id='nmes' name='nmes' placeholder='01' maxlength='2'> / ";
  cadTabla +=
    "<input type='text' id='nano' size='2' name='nano' placeholder='15' maxlength='2'> Mes / A&ntilde;o</td></tr>";
  cadTabla += "</table><br><br><br> ";
  cadTabla += "<tr><td height='40'><b>" + leytra + "</b></td></tr>";
  cadTabla += "</div><!-- contenido -->";
  //
  $("#area").html(cadTabla);
  ocultamiestrab(true);
  //if(modo!=2 && sesion == 0) $('#datos').html('');
  $("#datos").html("");
  // hgaytan 05 03 14
  $("#continuar").show();
  if (modo == 1) {
    $("#continuar").html(
      '<a onclick="validacionesAmigo(1);" href="#" class="btn_ctr">Continuar ››</a>'
    );
  }
  if (modo == 2) {
    $("#continuar").html(
      '<a onclick="validacionesAmigo(2);" href="#" class="btn_ctr">Continuar ››</a>'
    );
  }

  $("#regresar").html("");
}

function obtieneParam(elementoActualizar) {
  http = CreateRequest();
  var url =
    "/netScripts/Request.aspx?APPNAME=navegante4&PRGNAME=getParam&ARGUMENTS=-ALEYTRA";

  // Se manda el request
  http.open("GET", url, true);
  // Se establece el callback para manejar el resultado del request
  http.onreadystatechange = function () {
    // Se valida que el request ya haya finalizado y que finalice ok
    if (http.readyState == 4) {
      if (http.status == 200) {
        //alert('in ' +http.responseText);
        leytra = "" + http.responseText;
      } //end if status
    } //end if ready
  }; //end function onchange
  http.send(null);
}

function obtieneParamMostrarTC(parametro) {
  http = CreateRequest();
  var url =
    "/netScripts/Request.aspx?APPNAME=navegante4&PRGNAME=getParam&ARGUMENTS=-A" +
    parametro;

  // Se manda el request
  http.open("GET", url, true);
  // Se establece el callback para manejar el resultado del request
  http.onreadystatechange = function () {
    // Se valida que el request ya haya finalizado y que finalice ok
    if (http.readyState == 4) {
      if (http.status == 200) {
        //alert('in '+parametro+'' +http.responseText);
        muestraTC = "" + http.responseText;
      } //end if status
    } //end if ready
  }; //end function onchange
  http.send(null);
}

function obtieneParamMostrarTA(parametro) {
  http1 = CreateRequest();
  var url =
    "/netScripts/Request.aspx?APPNAME=navegante4&PRGNAME=getParam&ARGUMENTS=-A" +
    parametro;

  // Se manda el request
  http1.open("GET", url, true);
  // Se establece el callback para manejar el resultado del request
  http1.onreadystatechange = function () {
    // Se valida que el request ya haya finalizado y que finalice ok
    if (http1.readyState == 4) {
      if (http1.status == 200) {
        //alert('in '+parametro+'' +http1.responseText);
        muestraTA = "" + http1.responseText;
      } //end if status
    } //end if ready
  }; //end function onchange
  http1.send(null);
}

//Genera asientos ida y regreso
function generaAsientos(dia, modo) {
  var botonida;
  var A = "'B'";
  var B = '"A"';
  var tviajeley = "";
  var ocultabotones = "";
  var num = 0;
  var anchotabla = 495;
  var x = adulto + insen + menor + estudiantes + maestros;
  var ad, is, ni, es, ma;
  var tipointabi = document.getElementById("tipoOper_N");
  ad = x - insen - menor - estudiantes - maestros;
  is = x - menor - estudiantes - maestros;
  ni = x - estudiantes - maestros;
  es = x - maestros;
  ma = x;
  var fecha = new Date();
  var diaactual = fecha.getDate();
  var mesactual = fecha.getMonth() + 1;
  var anoactual = fecha.getFullYear();
  var fechaactual = "";

  if (diaactual < 10) fechaactual = "0" + diaactual;
  else fechaactual = diaactual;
  if (mesactual < 10) fechaactual += "/0" + mesactual + "/" + anoactual;
  else fechaactual += "/" + mesactual + "/" + anoactual;

  if (dia.Filas > 10) anchotabla = 520;

  if (dia.Filas2do != 0) {
    var segundopiso = true;
    if (dia.Filas2do > dia.Filas) dia.Filas = dia.Filas2do;
    if (dia.Filas > dia.Filas2do) dia.Filas2do = dia.Filas;
  }

  document.getElementById("area").innerHTML =
    "<center><img src='../imagenes/loading.gif' align='center' /></center>";
  if (viinas == "NO" && modo == "regreso") num = 100;
  if (viinas == "NO" && redondo == "SI") ocultabotones = 'style="display:none"';
  if (esint == "SI" && opeint != "" && claus != "" && mint != 0)
    var inter =
      '<table class="aviso" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">' +
      txt.IntercambioLabel +
      '</td></tr><tr><td align="center" class="blue">' +
      opeint +
      "</td></tr></table>";
  else var inter = "";
  if (modo == "ida") {
    generacadenaasientos();
    botonida = "-" + txt.AsientosSalida;
    tviajeley = txt.ViajedeSalida;
    tviajeley1 = txt.SelecAsientoSalidaSigPasaj;
  }
  var x = adulto + insen + menor + estudiantes + maestros;
  var botonredondo;

  if (redondo == "SI" && modo == "ida")
    botonredondo =
      '<a href="#" onClick="javascript:paso=4;return adelante();" class="iframe">-' +
      txt.AsientosRegreso +
      "</a>";
  else botonredondo = "";
  if (redondo == "SI" && modo == "regreso") {
    botonredondo = "-" + txt.AsientosRegreso;
    botonida =
      '<a href="#" onClick="javascript:paso=4;return asientos();>-' +
      txt.AsientosSalida +
      "</a>";
    tviajeley = txt.ViajedeRegreso;
    tviajeley1 = txt.SelecAsientoRegresoSigPasaj;
  }
  if (redondo == "SI" && modo == "regreso" && viinas == "NO")
    $("#area2").empty();
  else $("#area").empty();
  var div = $("<div>", { class: "head" });
  var titulo;
  if (modo == "regreso" && viinas == "SI")
    titulo = $("<!--img>", {
      src: "../imagenes/titulos-seleccione-asientos.jpg",
      width: "690",
      height: "57",
    });
  else
    titulo = $("<!--img>", {
      src: "../imagenes/titulos-seleccione-asientos.jpg",
      width: "690",
      height: "57",
    });
  div.append(titulo);
  $("#area").append(div);
  var cadTabla = cintaOrigen(3, modo);
  cadTabla += '<div class="col-md-16"><div class="table_process">';
  cadTabla += '<div class="cont_info_seats">';

  cadTabla +=
    '<div class="col-md-3 seats"><div class="info_seats"><p><img src="../imagenes/Asiento_V.jpg">' +
    txt.AsientoOcupado +
    "</p></div></div>";
  cadTabla +=
    '<div class="col-md-3 seats"><div class="info_seats"><p><img src="../imagenes/Asiento_L.jpg">' +
    txt.AsientoDisponible +
    "</p></div></div>";
  cadTabla +=
    '<div class="col-md-3 seats"><div class="info_seats"><p><img src="../imagenes/Asiento_S.jpg">' +
    txt.AsientoSeleccionado +
    "</p></div></div>";
  cadTabla +=
    '<div class="col-md-3 seats"><div class="info_seats"><p><img src="../imagenes/Asiento_D.jpg">' +
    txt.AsientoDiscapacidad +
    "</p></div></div>";

  cadTabla += "</div>";

  cadTabla += '<div class="col-md-5">';
  cadTabla += '<div class="table_bus">';

  cadTabla +=
    '<table border="0" align="center" cellpadding="0" cellspacing="0" class="fondoautobus" valign="center">' +
    "<tbody>";
  //'<tr>'+
  //'<td valign="bottom" align="left" rowspan="3">'+
  //'<img src="../imagenes/frente.jpg" width="48"  border="0"> '+
  //'</td>'+
  //'<td valign="top" align="left">&nbsp;</td>'+
  //'<td valign="bottom" align="left" rowspan="3">&nbsp;</td>'+
  //'</tr>'+

  if (segundopiso) {
    cadTabla +=
      "<tr><td align='left' width=10% valign='center' ><img src='../imagenes/Piso_1.jpg' border'0' style='font-size: 10px'> </td>";
    cadTabla +=
      '<td align="left" width=90%>' +
      '<table class="recuadroBlanco4" background="../imagenes/diagrama-camion.jpg"><tr><td width=50%">&nbsp;</td><td>' +
      '<table width="' +
      anchotabla +
      '" cellspacing="0" cellpadding="0" border="0">';
  } else {
    cadTabla +=
      '<tr><td align="center" width=100%>' +
      '<table class="recuadroBlanco2" background="../imagenes/diagrama-camion.jpg"><tr><td width=50%">&nbsp;</td><td>' +
      '<table width="' +
      anchotabla +
      '" cellspacing="0" cellpadding="0" border="0">';
  }

  var i = 0,
    a = 0,
    r = 4,
    u = 52,
    f = 0;
  do {
    cadTabla += "<tr>";
    a = r - 1;
    f = 1;
    if (dia.NoCapturaUltFila == "S") f = 0;

    cadTabla += "<td></td>";
    do {
      cadTabla +=
        "<td align='right'><span>" +
        dia.Asientos[a].Asientos.substring(1, 3) +
        "</span>";
      if (modo == "ida")
        cadTabla +=
          "<img id='A" +
          a +
          "'  width='34' height='25' src='../imagenes/" +
          dia.Asientos[a].Imagenes +
          "' border ='0' onClick='return  SeleccionaAsiento(this," +
          a +
          "," +
          B +
          ");' ></td>";
      else
        cadTabla +=
          "<img id='A" +
          (a + num) +
          "'  src='../imagenes/" +
          dia.Asientos[a].Imagenes +
          "' width='34' height='25' border ='0' onClick='return  SeleccionaAsientoR(this," +
          a +
          "," +
          B +
          ");' ></td>";
      if (modo == "ida")
        asiento.asientosaseleccion[dia.Asientos[a].Asientos] = a;
      else asientoR.asientosaseleccion[dia.Asientos[a].Asientos] = a;
      a += 4;
      f++;
    } while (f < dia.Filas);
    if (dia.NoCapturaUltFila == "N") {
      cadTabla +=
        "<td align='right'><span>" +
        dia.Asientos[a].Asientos.substring(1, 3) +
        "</span>";
      if (modo == "ida")
        cadTabla +=
          "<img id='A" +
          u +
          "' width='34' height='25' src='../imagenes/" +
          dia.Asientos[u].Imagenes +
          "' border ='0' onClick='return  SeleccionaAsiento(this," +
          u +
          "," +
          B +
          ");' ></td>";
      else
        cadTabla +=
          "<img id='A" +
          (u + num) +
          "' width='34' height='25' src='../imagenes/" +
          dia.Asientos[u].Imagenes +
          "' border ='0' onClick='return  SeleccionaAsientoR(this," +
          u +
          "," +
          B +
          ");' ></td>";
      if (modo == "ida")
        asiento.asientosaseleccion[dia.Asientos[a].Asientos] = u;
      else asientoR.asientosaseleccion[dia.Asientos[a].Asientos] = u;
    }
    if (r == 3) {
      cadTabla +=
        "</tr><tr><td align='right'><img id='A53'  src='../imagenes/" +
        dia.Asientos[53].Imagenes +
        "'  border ='0'></td>";
      cadTabla += "<td align='center' colspan=" + (dia.Filas - 1) + ">";
      /*<img border=0 src='../imagenes/logo_";
			 if(modo=='ida') cadTabla += corridaIda.EmpresaCorrida+".jpg' height=20 width=90 ></td>";
			 else cadTabla += corridaRegeso.EmpresaCorrida+".jpg' height=20 width=90 >*/

      ///////////
      cadTabla += "</td>";

      u--;
      cadTabla +=
        "<td align='right'><font face='Arial' size='1' color=#345F85>" +
        dia.Asientos[a].Asientos.substring(1, 3) +
        "</font>";
      if (modo == "ida")
        cadTabla +=
          "<img id='A" +
          u +
          "' width='34' height='25' src='../imagenes/" +
          dia.Asientos[u].Imagenes +
          "' border ='0' onClick='return  SeleccionaAsiento(this," +
          u +
          "," +
          B +
          ");' ></td>";
      else
        cadTabla +=
          "<img id='A" +
          (u + num) +
          "'  width='34' height='25' src='../imagenes/" +
          dia.Asientos[u].Imagenes +
          "' border ='0' onClick='return  SeleccionaAsientoR(this," +
          u +
          ",);' ></td>";
      if (modo == "ida")
        asiento.asientosaseleccion[dia.Asientos[a].Asientos] = u;
      else asientoR.asientosaseleccion[dia.Asientos[a].Asientos] = u;
    }
    cadTabla += "</tr>";
    u--;
    r--;
    i++;
  } while (i < 4);

  //////////////

  //jabrego; segundo piso
  if (segundopiso) {
    i = 0;
    a = 0;
    r = 58;
    u = 106;
    f = 0;
    anchotabla = 495;

    if (dia.Filas2do > 11) anchotabla = 620;

    cadTabla +=
      "</table> </td><td width='10%'>&nbsp;</td></tr></table> </td></tr>";
    //cadTabla += "<tr><td align='right' width='10' valign='top' ><img src='../imagenes/izquierdo.jpg' border'0' style='font-size: 10px'> </td></tr>";
    //cadTabla += '<table border="0" align="center" cellpadding="0" cellspacing="0" class="fondoautobus" valign="center">'+
    cadTabla +=
      "<tbody>" +
      //'<tr>'+
      //'<td valign="bottom" align="left" rowspan="3">'+
      //'<img src="../imagenes/frente.jpg" width="48"  border="0"> '+
      //'</td>'+
      //'<td valign="top" align="left">&nbsp;</td>'+
      //'<td valign="bottom" align="left" rowspan="3">&nbsp;</td>'+
      //'</tr>'+
      //'<tr>'+
      "<tr><td align='left' width=10% valign='center' ><img src='../imagenes/Piso_2.jpg' border'0' style='font-size: 10px'> </td>" +
      '<td align="right" width=90%>' +
      //'<table class="recuadroBlanco3" background="../imagenes/diagrama_segPiso.jpg"><td width=50%">&nbsp;</td><td>'+
      '<table class="recuadroBlanco3" background="../imagenes/diagrama_segPiso.jpg"><td>' +
      '<table width="' +
      anchotabla +
      '" cellspacing="0" cellpadding="0" border="0">';
    do {
      cadTabla += "<tr>";
      a = r - 1;
      f = 0;
      if (dia.NoCapturaUltFila == "S") f = 0;
      cadTabla += "<td></td>";
      do {
        cadTabla +=
          "<td align='right'><font face='Arial' size='1' color=#345F85>" +
          dia.Asientos[a].Asientos.substring(1, 3) +
          "</font>";
        if (modo == "ida")
          cadTabla +=
            "<img id='A" +
            a +
            "'  width='34' height='25' src='../imagenes/" +
            dia.Asientos[a].Imagenes +
            "' border ='0' onClick='return  SeleccionaAsiento(this," +
            a +
            "," +
            B +
            ");' ></td>";
        else
          cadTabla +=
            "<img id='A" +
            (a + num) +
            "'  src='../imagenes/" +
            dia.Asientos[a].Imagenes +
            "' width='34' height='25' border ='0' onClick='return  SeleccionaAsientoR(this," +
            a +
            "," +
            B +
            ");' ></td>";
        if (modo == "ida")
          asiento.asientosaseleccion[dia.Asientos[a].Asientos] = a;
        else asientoR.asientosaseleccion[dia.Asientos[a].Asientos] = a;
        a += 4;
        f++;
      } while (f < dia.Filas2do);
      if (dia.NoCapturaUltFila == "N") {
        cadTabla +=
          "<td align='right'><font face='Arial' size='1' color=#345F85>" +
          dia.Asientos[a].Asientos.substring(1, 3) +
          "</font>";
        if (modo == "ida")
          cadTabla +=
            "<img id='A" +
            u +
            "' width='34' height='25' src='../imagenes/" +
            dia.Asientos[u].Imagenes +
            "' border ='0' onClick='return  SeleccionaAsiento(this," +
            u +
            "," +
            B +
            ");' ></td>";
        else
          cadTabla +=
            "<img id='A" +
            (u + num) +
            "' width='34' height='25' src='../imagenes/" +
            dia.Asientos[u].Imagenes +
            "' border ='0' onClick='return  SeleccionaAsientoR(this," +
            u +
            "," +
            B +
            ");' ></td>";
        if (modo == "ida")
          asiento.asientosaseleccion[dia.Asientos[a].Asientos] = u;
        else asientoR.asientosaseleccion[dia.Asientos[a].Asientos] = u;
      }
      if (r == 57) {
        cadTabla +=
          "</tr><tr><td align='right'><img id='A107'  src='../imagenes/" +
          dia.Asientos[107].Imagenes +
          "'  border ='0'></td>";
        cadTabla +=
          "<td align='center' colspan=" +
          (dia.Filas2do - 1) +
          "><img border=0 src='../imagenes/logo_";
        if (modo == "ida")
          cadTabla +=
            corridaIda.EmpresaCorrida + ".jpg' height=20 width=90 ></td>";
        else
          cadTabla +=
            corridaRegeso.EmpresaCorrida + ".jpg' height=20 width=90 ></td>";

        u--;
        cadTabla +=
          "<td align='right'><font face='Arial' size='1' color=#345F85>" +
          dia.Asientos[a].Asientos.substring(1, 3) +
          "</font>";
        if (modo == "ida")
          cadTabla +=
            "<img id='A" +
            u +
            "' width='34' height='25' src='../imagenes/" +
            dia.Asientos[u].Imagenes +
            "' border ='0' onClick='return  SeleccionaAsiento(this," +
            u +
            "," +
            B +
            ");' ></td>";
        else
          cadTabla +=
            "<img id='A" +
            (u + num) +
            "'  width='34' height='25' src='../imagenes/" +
            dia.Asientos[u].Imagenes +
            "' border ='0' onClick='return  SeleccionaAsientoR(this," +
            u +
            ",);' ></td>";
        if (modo == "ida")
          asiento.asientosaseleccion[dia.Asientos[a].Asientos] = u;
        else asientoR.asientosaseleccion[dia.Asientos[a].Asientos] = u;
      }
      cadTabla += "</tr>";
      u--;
      r--;
      i++;
    } while (i < 4);
    var cuadroseleccion = "";
    if (modo == "ida") {
      cuadroseleccion =
        '<input name="textfield" type="hidden" id="textfieldAsi" size="3" class="color1" onkeyup = "if(event.keyCode == 12) return SeleccionaAsiento(' +
        A +
        "," +
        A +
        "," +
        A +
        ');" onBlur="return SeleccionaAsiento(' +
        A +
        "," +
        A +
        "," +
        A +
        ');"/></td>';
      datosp =
        '<td class="pad" id="campo_asiento" type"display:none"><span id="pasajeroN" style="visibility:hidden">' +
        txt.Pasajero +
        ' 1</span> <span id="nombrePasajero" style="visibility:hidden"></span> <span id="tipoPasajero" style="visibility:hidden">' +
        tipoPas[0] +
        '</span> <span  style="visibility:hidden">' +
        txt.AsientoMayus +
        "</span> ";
    } else {
      cuadroseleccion =
        '<input name="textfieldR" type="hidden" id="textfieldAsiR" size="3" class="color1" onkeyup = "if(event.keyCode == 32)return SeleccionaAsientoR(' +
        A +
        "," +
        A +
        "," +
        A +
        ');" onBlur="return SeleccionaAsientoR(' +
        A +
        "," +
        A +
        "," +
        A +
        ');"/></td>';
      datosp =
        '<td class="pad" id="campo_asientoR" type"display:none"><span id="pasajeroNR" style="visibility:hidden">' +
        txt.Pasajero +
        ' 1</span> <span id="nombrePasajeroR" style="visibility:hidden"></span> <span id="tipoPasajeroR" style="visibility:hidden">' +
        tipoPas[0] +
        '</span> <span style="visibility:hidden">' +
        txt.AsientoMayus +
        "</span> ";
    }
    cadTabla +=
      "</table> </td><td width='10%'>&nbsp;</td></tr></table> </td></tr>";
    //cadTabla += "<tr><td align='right' width='10' valign='top' ><img src='../imagenes/izquierdo.jpg' border'0' style='font-size: 10px'> </td></tr>";
    cadTabla += "</tbody></table>";
  } else {
    var cuadroseleccion = "";
    datosp = "";
    if (modo == "ida") {
      cuadroseleccion =
        '<input name="textfield" type="hidden" id="textfieldAsi" size="3" class="color1" onkeyup = "if(event.keyCode == 12) return SeleccionaAsiento(' +
        A +
        "," +
        A +
        "," +
        A +
        ');" onBlur="return SeleccionaAsiento(' +
        A +
        "," +
        A +
        "," +
        A +
        ');"/></td>';
      datosp =
        '<td id="campo_asiento" type"display:none"><span id="pasajeroN" style="visibility:hidden">' +
        txt.Pasajero +
        ' 1</span> <span id="nombrePasajero" style="visibility:hidden"></span> <span id="tipoPasajero" style="visibility:hidden">' +
        tipoPas[0] +
        '</span> <span style="visibility:hidden">' +
        txt.AsientoMayus +
        "</span> ";
    } else {
      cuadroseleccion =
        '<input name="textfieldR" type="hidden" id="textfieldAsiR" size="3" class="color1" onkeyup = "if(event.keyCode == 32)return SeleccionaAsientoR(' +
        A +
        "," +
        A +
        "," +
        A +
        ');" onBlur="return SeleccionaAsientoR(' +
        A +
        "," +
        A +
        "," +
        A +
        ');"/></td>';
      datosp =
        '<td class="pad" id="campo_asientoR" type"display:none"><span id="pasajeroNR" style="visibility:hidden">' +
        txt.Pasajero +
        ' 1</span> <span id="nombrePasajeroR" style="visibility:hidden"></span> <span id="tipoPasajeroR" style="visibility:hidden">' +
        tipoPas[0] +
        '</span> <span style="visibility:hidden">' +
        txt.AsientoMayus +
        "</span> ";
    }
    cadTabla +=
      "</table> </td><td width='10%'>&nbsp;</td></tr></table> </td></tr>";
    //cadTabla += "<tr><td align='right' width='10' valign='top' ><img src='../imagenes/izquierdo.jpg' border'0' style='font-size: 10px'> </td></tr>";
    cadTabla += "</tbody></table>";
  }
  //Termina col-md-6
  cadTabla += "</div>";
  //Termina table_bus
  cadTabla += "</div>";
  var tipo;
  var arrNombres = NomPasajeros.split("-");
  var contaux = 0;
  var TipoPasAux;
  var NombreAux;
  cadTabla += '<div class="col-md-6 col-sm-12 col-xs-12 cols_name">';
  cadTabla += '<div class="fields_names"><form>';
  for (cont = 1; cont <= x; cont++) {
    NombreAux = "";
    if (contaux < numPasInt && NomPasajeros != "") {
      TipoPasAux = arrNombres[contaux].substring(0, 2);
    }

    if (adulto > 0 && cont <= ad) {
      tipo = txt.AdultoMayus;
      tipoAbre = dia.Adul;
      tipop = "AD";
    } else if (insen > 0 && cont <= is) {
      tipo = txt.InsenMayus;
      tipoAbre = dia.Ins;
      tipop = "IN";
    } else if (menor > 0 && cont <= ni) {
      tipo = txt.MenorMayus;
      tipoAbre = dia.Nin;
      tipop = "NI";
    } else if (estudiantes > 0 && cont <= es) {
      tipo = txt.EstudianteMayus;
      tipoAbre = dia.Est;
      tipop = "ES";
    } else if (maestros > 0 && cont <= ma) {
      tipo = txt.MaestroMayus;
      tipoAbre = dia.Mae;
      tipop = "MA";
    }
    //Creo un arreglo para los demas programas
    tipoPas[cont - 1] = tipo;
    tipoPasInt[cont - 1] = tipoAbre;
    tipoPasExtAbie[cont - 1] = tipop;

    if (
      tipop == TipoPasAux ||
      (tipop == "IN" && TipoPasAux == "XA") ||
      (tipop == "NI" &&
        TipoPasAux == "ZA" &&
        contaux < numPasInt &&
        NomPasajeros != "")
    ) {
      NombreAux = arrNombres[contaux].substring(3);
    }
    contaux++;

    cadTabla +=
      '<div class="row"><div class="form-group col-md-9 col-sm-9 col-xs-9 cols_inline">';
    cadTabla += '<label for="pasajero' + cont + '">' + tipo + ":</label>";

    //cadTabla += "<td  ><label for='pasajero"+cont+"'>"+tipo	+":</label></td>";

    ManifiestoCompleto = dia.manifiestoC;
    if (modo == "ida") {
      if (NombreAux == "") {
        cadTabla +=
          "<input onchange='javascript:this.value=this.value.toUpperCase().replace(/,/g,sustitucion);' onkeypress='return event.keyCode != 13;' name='pasajero' type='text' class='form-control' id='pasajero" +
          cont +
          "'></div>";
      } else {
        cadTabla +=
          "<input onchange='javascript:this.value=this.value.toUpperCase().replace(/,/g,sustitucion);' name='pasajero' type='text' id='pasajero" +
          cont +
          "' value='" +
          NombreAux +
          "' class='form-control' readonly/></div>";
      }

      //cadTabla += "<td><input  type='text' id='pasajero"+cont+"' size='50' />";
      cadTabla +=
        '<div class="form-group col-md-3 col-sm-3 col-xs-3 cols_inline"><label for="exampleInputEmail1">' +
        txt.Asiento +
        "</label>" +
        '<span name="asientosSeleccionados" id="asientoseleccionado' +
        cont +
        '" class="form-control"></span></div></div>';
      //cadTabla += "<td><span name='asientosSeleccionados' id='asientoseleccionado"+cont+"'></span></td>";
      if (
        corridaIda.CadenaCorridaTKN.split("-").length > 1 &&
        dia.NACFEN == 1 &&
        dia.manifiesto == 1 &&
        (viajeredondo == "V2" || dia.manifiestoVS == 1)
      ) {
        NACFEN = 1;
        cadTabla +=
          "<div class='row'><div class='form-group col-md-3 col-sm-3 col-xs-3'><label for='select'>" +
          txt.Nacionalidad +
          ": </label><select name='selectnc' id='selectnc" +
          cont +
          "' style='height:34px;width:100px' class='form-control'>";
        cadTabla += paises + "</select></div>";
        cadTabla += "<div class='form-group col-md-5 col-sm-5 col-xs-5'>";
        cadTabla +=
          "<label for='select'>" +
          txt.FechaNacimiento +
          ": </label><div class='row'></div>";
        cadTabla += calendario("fn", cont);
        cadTabla += "</div>";
        cadTabla += "<div class='form-group col-md-5 col-sm-5 col-xs-4'>";
        cadTabla +=
          "<label for='select'>" +
          txt.Confirma +
          ": </label><div class='row'></div>";
        cadTabla += calendario("fc", cont);
        cadTabla += "</div>";
        if (dia.manifiestoC == 1) {
          cadTabla += "<div class='row'></div>";
          cadTabla += "<div class='form-group col-md-3 col-sm-3 col-xs-3'>";
          cadTabla += "<label for='select'>" + txt.Sexo + ": </label>";
          cadTabla +=
            "<select name='selectng' id='selectng" +
            cont +
            "' style='height:34px; width:100%' class='form-control'>";
          cadTabla +=
            "<option value='M' selected>" +
            txt.Male +
            "</option><option value='F'>" +
            txt.Female +
            "</option>";
          cadTabla += "</select>";
          cadTabla += "</div>";
          cadTabla += "<div class='form-group col-md-4 col-sm-4 col-xs-4'>";
          cadTabla +=
            "<label for='select'>" + txt.DocumentoPresentado + ": </label>";
          cadTabla +=
            "<select onchange='verificaVencimiento(this," +
            cont +
            ")' name='selectdp' class='form-control' id='selectdp" +
            cont +
            "' style='height:34px; width:100%' >";
          cadTabla += dia.Documentos;
          cadTabla += "</select>";
          cadTabla += "</div>";
          cadTabla += "<div class='form-group col-md-5 col-sm-5 col-xs-5'>";
          cadTabla += "<label for='select'>" + txt.NumDocumento + ": </label>";
          cadTabla +=
            "<input class='form-control' name='numdoc' type='text' id='numdoc" +
            cont +
            "' size='20'/>";
          cadTabla += "</div><div class='row'></div>";
          cadTabla += "<div class='form-group col-md-5 col-sm-5 col-xs-5'>";
          cadTabla +=
            "<label id='titulofv" +
            cont +
            "' for='select'>" +
            txt.FechaVencimiento +
            ": </label><div class='row'></div>";
          cadTabla += calendario("fv", cont);
          cadTabla += "</div>";
          cadTabla += "<div class='form-group col-md-3 col-sm-3 col-xs-3'>";
          cadTabla +=
            "<label for='select'>" + txt.PaisResidencia + ": </label>";
          cadTabla +=
            "<select name='selectncr' id='selectncr" +
            cont +
            "' style='height:34px; width:100%' class='form-control'>";
          cadTabla += paises;
          cadTabla += "</select>";
          cadTabla += "</div>";
          cadTabla += "<div class='row'></div>";
          cadTabla +=
            "<div class='form-group col-md-10 col-sm-10 col-xs-10'><hr></div>";
          cadTabla += "<div class='row'></div>";
        }
        cadTabla += "</div>";
      }
    } else {
      cadTabla +=
        "<div class='row'></div><label style='border-style: inset;  border-width: 1px; border-radius: 4px;width: 100%; height: 40px;'>&nbsp" +
        NombrePas[cont - 1] +
        "&nbsp</label></div>";
      //cadTabla +="<td>"+(NombrePas[cont-1])+"</td>";
      cadTabla +=
        '<div class="form-group col-md-3 col-sm-3 col-xs-3 cols_inline"><label for="exampleInputEmail1">' +
        txt.Asiento +
        "</label>" +
        '<span name="asientosSeleccionados" id="asientoseleccionadoR' +
        cont +
        '" class="form-control" style="height: 40px;"></span></div></div>';

      /*if(corridaIda.CadenaCorridaTKN.split("-").length>1 && dia.NACFEN==1)
				{
					cadTabla += "<div class='row'><div class='form-group col-md-6 col-sm-6 col-xs-6'><label for='select'>"+txt.Nacionalidad+":</label>";
					cadTabla += "<div class='row'></div><label>"+(ANacionalidad[cont-1])+"</label></div>";
					cadTabla += "<div class='form-group col-md-6 col-sm-6 col-xs-6'>";
					cadTabla +="<label for='select'>"+txt.FechaNacimiento+": </label>";
					cadTabla +=	"<label>"+(AFechaNacimiento[cont-1])+"</label></div></div>";

				}*/
      //cadTabla += "<td><span name='asientosSeleccionadosR' id='asientoseleccionadoR"+cont+"'></span></td>";
    }
    //cadTabla += "<td><span class='alert'>*</span></td>";
    //cadTabla += "</tr>";
  }
  cadTabla +=
    "</form></div><!--col-md-6--></div><!--fields_names--></div></div></div>";

  //cadTabla += "</table>";
  var div2 = $("<div>", { class: "contenido" });
  /*div2.html( inter + '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">'+
		'<tr>'+
                    '<td><table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                      //'<tr><td width="50%" align="right" class="botonesAsientos" '+ocultabotones+'>'+ botonida +'</td></tr>'+
					  //'<tr><td width="50%" align="right" class="botonesAsientos" '+ocultabotones+'>'+ botonredondo +'</td></tr>'+
					  '<tr><td>&nbsp;</td></tr>'+
					  //'<tr><td width="50%"><strong class="20_puntos verde_1 negritas">'+ tviajeley +'</strong></td></tr>'+
                    '</table></td>'+
                  '</tr>'+
                  '<tr>'+
                    //'<td class="pad">'+tviajeley1+'</td>'+
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
	);*/
  div2.html(inter + cadTabla);
  if (redondo == "SI" && modo == "regreso" && viinas == "NO")
    $("#area2").append(div2);
  else $("#area").append(div2);
  for (cont = 1; cont <= x; cont++) {
    $("#birthdate" + cont).datepicker({
      showOn: "button",
      buttonImageOnly: true,
      buttonImage: "../imagenes/calendario.png",
    });
    $("#birthdatecf" + cont).datepicker({
      showOn: "button",
      buttonImageOnly: true,
      buttonImage: "../imagenes/calendario.png",
    });
  }

  ocultamiestrab(true);
}

//Genera error
function generaError(mensaje) {
  var cadTable =
    '<div class="contenido">' +
    '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">' +
    '<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>' +
    "<tr>" +
    '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">' +
    "<tr>" +
    '<td width="8%" align="right"></td>' +
    '<td width="3%">&nbsp;</td>' +
    '<td width="27%" ><strong>' +
    txt.Aviso +
    "</strong></td>" +
    '<td width="31%" ><label for="textfield"></label></td>' +
    '<td align="center"><label for="radio"></label></td>' +
    "</tr>" +
    "<tr>" +
    '<td align="right">&nbsp;</td>' +
    "<td>&nbsp;</td>" +
    '<td colspan="3" >' +
    mensaje +
    "</td>" +
    "</tr>" +
    "</table></td>" +
    "</tr>" +
    " <tr>" +
    "<td>&nbsp;</td>" +
    "</tr>" +
    "</table></div>";

  document.getElementById("continuar").innerHTML = "";
  document.getElementById("regresar").innerHTML = "";
  return cadTable;
}

//Filtro CE agencias
function generaFiltroAgencia() {
  limpiaVariables();
  var fecha = new Date();
  var diaactual = fecha.getDate();
  var mesactual = fecha.getMonth() + 1;
  var anoactual = fecha.getFullYear();
  var fechaactual = "";

  if (diaactual < 10) fechaactual = "0" + diaactual;
  else fechaactual = diaactual;
  if (mesactual < 10) fechaactual += "/0" + mesactual + "/" + anoactual;
  else fechaactual += "/" + mesactual + "/" + anoactual;

  if (esint == "SI" && opeint != "" && claus != "" && mint != 0)
    var inter =
      '<table class="aviso" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">' +
      txt.IntercambioLabel +
      '</td></tr><tr><td align="center" class="blue">' +
      opeint +
      "</td></tr></table>";
  else var inter = "";

  var cadTable =
    '<div class="col-md-12"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
    txt.VerifiqueTitulo +
    "</li></div>";
  cadTable += "<div id='contenidos_generales'>";

  cadTable += "<form>" + inter;
  cadTable += "<label>";
  cadTable +=
    "<input type='radio' name='tipoViaje' value='V1' id='tipoViaje_0'  onClick='Viajesencillo();' checked='checked'/></input>";
  cadTable += txt.ViajeSencillo + "</label>";
  cadTable += "<label>";
  cadTable +=
    "<input type='radio' name='tipoViaje' value='V2' id='tipoViaje_1' onClick='Viajeredondo();'/></input>";
  cadTable += txt.ViajeRedondo + "</label></td>";
  cadTable += "<br /><br />";

  cadTable += "<label for='textfield'>" + txt.Origen + ": </label>";
  cadTable +=
    "<span id='tdOrigenAge'><select name='Origen' id='Origen' style='width:200px;' onChange='return cargaOrigenesANT()'>";
  cadTable += "<option>" + txt.cargandoorides + "</option></select></span>";
  cadTable += "<br /><br />";

  cadTable += "<label for='textfield2'>" + txt.Destino + ": </label>";
  cadTable +=
    "<span id='tdDestinoAge'><select name='Destino' id='Destino' style='width:200px;'>";
  cadTable += "<option>" + txt.DestinoMayus + "</option></select></span>";
  cadTable += "<br /><br />";

  cadTable +=
    "<label for='textfield2' style='visibility:hidden'>" +
    txt.fechaSalida +
    ": </label><label for='textfield2'>" +
    txt.FechaLabel +
    "</label>";
  cadTable += "<br /><br />";

  cadTable += "<label for='textfield2'>" + txt.fechaSalida + ": </label>";
  cadTable += "<label for='textfield7'></label>";
  cadTable +=
    "<input name='Fechabox0' type='text' id='fsalida' size='10' value='" +
    fechaactual +
    "' />";
  cadTable += "<br /><br />";

  cadTable +=
    "<table class='primera' width='270' border='0' cellspacing='0' cellpadding='0'>";
  cadTable += "<tr id='FRegreso'>";
  cadTable +=
    "<td><label for='textfield10'>" + txt.fechaRegreso + ": </label></td>";
  cadTable +=
    "<td width='140' height='30'><input name='Fechabox' type='text' id='regreso' size='10' value='" +
    fechaactual +
    "' /></td>";
  cadTable += "</tr>";
  cadTable += "</table>";
  cadTable += "<br />";

  cadTable += "<label for='textfield5'>" + txt.Adulto + ": </label>";
  cadTable += "<select name='Adulto' id='Adulto'>";
  for (x = 0; x <= 5; x++)
    cadTable += "<option value=" + x + "> " + x + "</option>";
  cadTable += "</select>";

  cadTable +=
    "<label for='textfield5'>&nbsp;&nbsp;&nbsp;" + txt.Menor + ": </label>";
  cadTable += "<select name='Nino' id='Nino'>";
  for (x = 0; x <= 10; x++)
    cadTable += "<option value=" + x + "> " + x + "</option>";
  cadTable += "</select>";

  cadTable +=
    "<label for='textfield9'>&nbsp;&nbsp;&nbsp;" + txt.Senectud + ": </label>";
  cadTable += "<select name='Insen' id='Insen'>";
  for (x = 0; x <= 6; x++)
    cadTable += "<option value=" + x + "> " + x + "</option>";
  cadTable += "</select>";

  cadTable +=
    "<label for='textfield10' style='visibility:hidden'>&nbsp;&nbsp;&nbsp;Estudiante: </label>";
  cadTable +=
    "<select name='Estudiante' id='Estudiante' style='visibility:hidden'>";
  for (x = 0; x <= 24; x++)
    cadTable += "<option value=" + x + "> " + x + "</option>";
  cadTable += "</select>";

  cadTable +=
    "<label for='textfield11' style='visibility:hidden'>&nbsp;&nbsp;&nbsp;Profesor: </label>";
  cadTable += "<select name='Maestro' id='Maestro' style='visibility:hidden'>";
  for (x = 0; x <= 24; x++)
    cadTable += "<option value=" + x + "> " + x + "</option>";
  cadTable += "</select>";

  cadTable += "<br />";
  cadTable += "<table width='300' border='0' cellspacing='20' cellpadding='0'>";
  cadTable += "<tr id='info'>";
  cadTable +=
    "<td ><input name='infoAD' type='text' id='infoAD' size='9' value=' 12 - 59 a&ntilde;os' readonly style='font-size: 9pt; height: 20px; background:#F0F0F2; border:0px; font-weight:bold;' /></td>";
  cadTable +=
    "<td ><input name='infoNI' type='text' id='infoNI' size='9' value=' 2 - 11 a&ntilde;os' readonly style='font-size: 9pt; height: 20px; background:#F0F0F2; border:0px; font-weight:bold;' /></td>";
  cadTable +=
    "<td ><input name='infoIN' type='text' id='infoIN' size='11' value=' 60 - M&aacute;s a&ntilde;os' readonly style='font-size: 9pt; height: 20px; background:#F0F0F2; border:0px; font-weight:bold;' /></td>";
  cadTable += "</tr>";
  cadTable += "</table>";

  cadTable += "<br /><br /><br />";

  cadTable += "</form></div><!-- contenido -->";

  $("#nav").html("");
  $("#edopasos").html("");
  $("#area").html(cadTable);
  datos();

  $("#franja").css({ background: "url(../imagenes/bg_franja_agencias.jpg)" });
  $("#regreso").datepicker({
    showOn: "button",
    buttonImageOnly: true,
    buttonImage: "../imagenes/calendario.png",
  });
  $("#fsalida").datepicker({
    showOn: "button",
    buttonImageOnly: true,
    buttonImage: "../imagenes/calendario.png",
  });
  $("#continuar").show();
  //$("#continuar").html('<a onclick="return adelante();" href="#"><img width="107" height="26" border="0" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage(\'imgSiguiente\',\'\',\'../imagenes/btn_continuar_over.jpg\',1)" id="imgSiguiente" src="../imagenes/btn_continuar.jpg" class="botonNav"></a>')
  $("#continuar").html(
    '<a onclick="return adelante();" href="#" class="btn_ctr">' +
      txt.Continuar +
      " ››</a>"
  );
  $("#regresar").html("");
  cargaOrigenesANT();
}

//Filtro NE agencias
function generaFiltroAbierto() {
  limpiaVariables();

  // jaflores Jun/2013 Se agrega funcionalidad de Intercambio de Boletos Abiertos
  if (esint == "SI" && opeint != "" && claus != "" && mint != 0)
    var inter =
      '<table class="aviso" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">' +
      txt.IntercambioLabel +
      ' </td></tr><tr><td align="center" class="blue">' +
      opeint +
      "</td></tr></table>";
  else var inter = "";

  var cadTable =
    '<div class="col-md-12"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
    txt.VerifiqueTitulo +
    "</li></div>";
  cadTable += "<div id='contenidos_generales'>";

  cadTable += "<form>" + inter;
  cadTable += "<label>";
  cadTable +=
    "<input type='radio' name='tipoViaje' value='V1' id='tipoViaje_0'  />";
  cadTable += txt.ViajeSencillo + "</label>";
  cadTable += "<label>";
  cadTable +=
    "<input type='radio' name='tipoViaje' value='V2' id='tipoViaje_1' />";
  cadTable += txt.ViajeRedondo + "</label>";
  cadTable += "<br /><br />";

  cadTable += "<label for='textfield'>" + txt.Origen + ": </label></td>";
  cadTable +=
    "<span id='tdOrigenAge'><select name='Origen' id='Origen' onChange='cargaDestinos(this)' style='width:150px;'>";
  cadTable += "<option>" + txt.cargandoorides + "</option></select></span>";
  cadTable += "<br /><br />";

  cadTable += "<label for='textfield2'>" + txt.Destino + "</label></td>";
  cadTable +=
    "<span id='tdDestinoAge'><select name='Destino' id='Destino' style='width:150px;'>";
  cadTable += "<option>" + txt.DestinoMayus + "</option></select></span>";
  cadTable += "<br /><br />";

  cadTable +=
    "<label for='textfield2'>" +
    txt.ClasedeServicio +
    ": </label><label for='textfield7'></label>";
  cadTable += "<select name='select3' id='select3'>";
  for (x = 0; x < object_servicio.length; x++) {
    cadTable +=
      "<option value=" +
      object_servicio[x].claveServicio +
      "> " +
      object_servicio[x].descripcionSer +
      "</option>";
  }
  cadTable += "</select>";
  cadTable += "<br /><br />";

  cadTable += "<label for='textfield5'>" + txt.Adulto + ": </label>";
  cadTable += "<select name='Adulto' id='Adulto'>";
  for (x = 0; x <= 5; x++)
    cadTable += "<option value=" + x + "> " + x + "</option>";
  cadTable += "</select>";

  cadTable +=
    "<label for='textfield5'>&nbsp;&nbsp;&nbsp;" + txt.Menor + ": </label>";
  cadTable += "<select name='Nino' id='Nino'>";
  for (x = 0; x <= 10; x++)
    cadTable += "<option value=" + x + "> " + x + "</option>";
  cadTable += "</select>";

  cadTable +=
    "<label for='textfield9'>&nbsp;&nbsp;&nbsp;" + txt.Senectud + ": </label>";
  cadTable += "<select name='Insen' id='Insen'>";
  for (x = 0; x <= 6; x++)
    cadTable += "<option value=" + x + "> " + x + "</option>";
  cadTable += "</select>";

  cadTable +=
    "<label for='textfield10' style='visibility:hidden'>&nbsp;&nbsp;&nbsp;Estudiante: </label>";
  cadTable +=
    "<select name='Estudiante' id='Estudiante' style='visibility:hidden'>";
  for (x = 0; x <= 10; x++)
    cadTable += "<option value=" + x + "> " + x + "</option>";
  cadTable += "</select>";

  cadTable +=
    "<label for='textfield11' style='visibility:hidden'>&nbsp;&nbsp;&nbsp;Profesor: </label>";
  cadTable += "<select name='Maestro' id='Maestro' style='visibility:hidden'>";
  for (x = 0; x <= 10; x++)
    cadTable += "<option value=" + x + "> " + x + "</option>";
  cadTable += "</select>";

  cadTable += "<br />";
  cadTable += "<table width='300' border='0' cellspacing='20' cellpadding='0'>";
  cadTable += "<tr id='info'>";
  cadTable +=
    "<td ><input name='infoAD' type='text' id='infoAD' size='9' value=' 12 - 59 a&ntilde;os' readonly style='font-size: 9pt; height: 20px; background:#F0F0F2; border:0px; font-weight:bold;' /></td>";
  cadTable +=
    "<td ><input name='infoNI' type='text' id='infoNI' size='9' value=' 2 - 11 a&ntilde;os' readonly style='font-size: 9pt; height: 20px; background:#F0F0F2; border:0px; font-weight:bold;' /></td>";
  cadTable +=
    "<td ><input name='infoIN' type='text' id='infoIN' size='11' value=' 60 - M&aacute;s a&ntilde;os' readonly style='font-size: 9pt; height: 20px; background:#F0F0F2; border:0px; font-weight:bold;' /></td>";
  cadTable += "</tr>";
  cadTable += "</table>";

  cadTable += "<br /><br /><br />";
  cadTable += "</form></div><!-- contenido -->";

  $("#nav").html("");
  $("#edopasos").html("");
  $("#area").html(cadTable);
  datos();
  habilitarArea("Abierto");
  $("#franja").css({ background: "url(../imagenes/bg_franja_agencias.jpg)" });
  $("#regreso").datepicker({
    showOn: "button",
    buttonImageOnly: true,
    buttonImage: "../imagenes/calendario.png",
  });
  $("#fsalida").datepicker({
    showOn: "button",
    buttonImageOnly: true,
    buttonImage: "../imagenes/calendario.png",
  });
  $("#continuar").show();
  //$("#continuar").html('<a onclick="return adelante();" href="#"><img width="107" height="26" border="0" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage(\'imgSiguiente\',\'\',\'../imagenes/btn_continuar_over.jpg\',1)" id="imgSiguiente" src="../imagenes/btn_continuar.jpg" class="botonNav"></a>');
  $("#continuar").html(
    '<a onclick="return adelante();" href="#" class="btn_ctr">' +
      txt.Continuar +
      " ››</a>"
  );
  $("#regresar").html("");
  cargaOrigenesANT();
}

//Genera cancelacion  pantalla inicial
function cancelacion() {
  termina();
  if (viinco == "NO") {
    document.getElementById("area2").innerHTML = "";
    document.getElementById("area2").style.display = "none";
  }
  personalizat = false;
  document.getElementById("counter").innerHTML = "";
  $("dt").removeClass("textos_resumen_current");
  $("#Cancelaci&oacute;n").addClass("textos_resumen_current");
  var sig = "'";
  esint = "NO";
  opeint = "";
  mint = 0;
  var cadTabla =
    '<div class="col-md-12"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
    txt.TituloCancelacion +
    "</li></div>" +
    '<div class="contenido">' +
    '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">' +
    '<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>' +
    "<tr>" +
    '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">' +
    "<tr>" +
    '<td width="8%" align="right"></td>' +
    '<td width="3%">&nbsp;</td>' +
    '<td width="27%" class="blue" align="right"><strong>' +
    txt.NumOperacion +
    "&nbsp</strong></td>" +
    '<td width="31%" class="blue"><label for="textfield"></label>' +
    '<input type="text" name="textfield3" id="textfieldop" /></td>' +
    '<td align="center"><label for="radio"></label></td>' +
    "</tr>" +
    "<tr>" +
    '<td align="right"></td>' +
    "<td>&nbsp;</td>" +
    '<td class="blue"><strong>NIT&nbsp:&nbsp</strong></td>' +
    '<td class="blue"><input type="text" name="textfield3" id="textfield3Nit" /></td>' +
    '<td align="center" class="">&nbsp;</td>' +
    "</tr>" +
    "</table></td>" +
    "</tr>" +
    "<tr>" +
    '<td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">' +
    "<tr>" +
    '<td class="res"><input type="button" onclick="return validacancelacion();" name="enviar" id="enviar" value=' +
    txt.Enviar +
    " /></td>" +
    "</tr>" +
    "</table></td>" +
    "</tr>" +
    "<tr>" +
    "<td>&nbsp;</td>" +
    "</tr>" +
    "</table>" +
    "</div>" +
    "</div>";
  $("#edopasos").html("");
  document.getElementById("area").innerHTML = cadTabla;
  document.getElementById("continuar").innerHTML = "";
  document.getElementById("regresar").innerHTML = "";
}

//Genera intercambio  pantalla inicial
function intercambio() {
  termina();
  if (viinco == "NO") {
    document.getElementById("area2").innerHTML = "";
    document.getElementById("area2").style.display = "none";
  }
  personalizat = false;
  document.getElementById("counter").innerHTML = "";
  $("dt").removeClass("textos_resumen_current");
  $("#Intercambio").addClass("textos_resumen_current");
  var sig = "'";
  esint = "NO";
  opeint = "";
  mint = 0;
  mintprepago = 0;
  var cadTabla =
    '<div class="col-md-12"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
    txt.Intercambio +
    "</li></div>" +
    '<div class="contenido">' +
    '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">' +
    '<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>' +
    "<tr>" +
    '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">' +
    "<tr>" +
    '<td width="8%" align="right"></td>' +
    '<td width="3%">&nbsp;</td>' +
    '<td width="27%" class="blue"><strong>' +
    txt.NumOperacion +
    ":</strong></td>" +
    '<td width="31%" class="color3"><label for="textfield"></label>' +
    '<input type="text" name="textfield3" id="textfieldint" /></td>' +
    '<td align="center"><label for="radio"></label></td>' +
    "</tr>" +
    "</table></td>" +
    "</tr>" +
    '<table width="640" border="0" align="center">' +
    "<td>" +
    '<label><input type="radio" name="tipoOper" value="V1" id="tipoOper_C"  checked="checked"/></input>' +
    txt.Confirmado +
    "</label>" +
    "<label>" +
    '<input type="radio" name="tipoOper" value="V2" id="tipoOper_N" /></input>' +
    txt.NoConfirmado +
    "</label></td></table>" +
    "<tr>" +
    '<td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">' +
    "<tr>" +
    '<td class="res"><input type="button" onclick="return validaintercambio();" name="enviar" id="enviar" value="' +
    txt.Enviar +
    '" /></td>' +
    "</tr>" +
    "</table></td>" +
    "</tr>" +
    '<td align="right">&nbsp;</td>' +
    "<tr>" +
    "<td>&nbsp;</td>" +
    "</tr>" +
    "</table>" +
    "</div>";
  $("#edopasos").html("");
  document.getElementById("area").innerHTML = cadTabla;
  document.getElementById("continuar").innerHTML = "";
  document.getElementById("regresar").innerHTML = "";
}

//Genera contraseña pantalla inicial
function contrasena() {
  termina();
  if (viinco == "NO") {
    document.getElementById("area2").innerHTML = "";
    document.getElementById("area2").style.display = "none";
  }
  personalizat = false;
  document.getElementById("counter").innerHTML = "";
  $("dt").removeClass("textos_resumen_current");
  $("#Cambiar").addClass("textos_resumen_current");
  var sig = "'";
  esint = "NO";
  opeint = "";
  mint = 0;
  var cadTabla =
    '<div class="col-md-12"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
    txt.CambiarContrasena +
    "</li></div>" +
    '<div class="contenido">' +
    '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">' +
    '<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>' +
    "<tr>" +
    '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">' +
    "<tr>" +
    '<td width="8%" align="right"></td>' +
    '<td width="3%">&nbsp;</td>' +
    '<td width="27%" class="color5"><strong>' +
    txt.ContrasenaActual +
    ":</strong></td>" +
    '<td width="31%" class="color3"><label for="textfield"></label>' +
    '<input type="password" name="textfield" id="contraactual" /></td>' +
    '<td align="center"><label for="radio"></label></td>' +
    "</tr>" +
    "<tr>" +
    '<td align="right"></td>' +
    "<td>&nbsp;</td>" +
    '<td class="color5"><strong>' +
    txt.ContrasenaNueva +
    ":</strong></td>" +
    '<td class="color3"><input type="password" name="textfield2" id="nvacon" /></td>' +
    '<td align="center" class=>&nbsp;</td>' +
    "</tr>" +
    "<tr>" +
    '<td align="right"></td>' +
    "<td>&nbsp;</td>" +
    '<td class="color5"><strong>' +
    txt.ConfirmarContrasena +
    ":</strong></td>" +
    '<td class="color3"><input type="password" name="textfield3" id="confcontra" /></td>' +
    '<td align="center" class="color3">&nbsp;</td>' +
    "</tr>" +
    "</table></td>" +
    "</tr>" +
    " <td>&nbsp;</td>" +
    "</tr>" +
    "</table>" +
    "</div>";
  $("#edopasos").html("");
  document.getElementById("area").innerHTML = cadTabla;
  //document.getElementById("continuar").innerHTML = "<a href='#' onClick='return validacontrasena();'><img src='../imagenes/btn_continuar.jpg' class = 'botonNav' width='140' height='35' border='0' id='Image11' onmouseover=\"MM_swapImage('Image11','','../imagenes/btn_continuar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";
  document.getElementById("continuar").innerHTML =
    "<a href='#' onClick='return validacontrasena();' class='btn_ctr'>" +
    txt.Continuar +
    " ››</a>";
  document.getElementById("regresar").innerHTML = "";
}

//Genera Movimientos  pantalla inicial
function movimientos() {
  termina();
  if (viinco == "NO") {
    document.getElementById("area2").innerHTML = "";
    document.getElementById("area2").style.display = "none";
  }
  personalizat = false;
  document.getElementById("counter").innerHTML = "";
  $("dt").removeClass("textos_resumen_current");
  $("#Movimientos").addClass("textos_resumen_current");
  var sig = "'";
  esint = "NO";
  opeint = "";
  mint = 0;
  var fecha = new Date();
  var diaactual = fecha.getDate();
  var mesactual = fecha.getMonth() + 1;
  var anoactual = fecha.getFullYear();
  if (diaactual < 10) diaactual = "0" + diaactual;
  if (mesactual < 10) mesactual = "0" + mesactual;
  var cadTabla =
    '<div class="col-md-12"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
    txt.ReporteMovimientos +
    "</li></div>" +
    '<div class="contenido">' +
    '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">' +
    '<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>' +
    "<tr>" +
    '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">' +
    "<tr>" +
    '<td width="8%" align="right"></td>' +
    '<td width="3%">&nbsp;</td>' +
    '<td width="27%" class="color5"><strong>' +
    txt.FechaInicial +
    ":</strong></td>" +
    '<td width="31%" class="color3"><label for="textfield"></label>' +
    '<input name="textfield" type="text" id="textfieldA" value="' +
    "01" +
    "/" +
    mesactual +
    "/" +
    anoactual +
    '" /></td>' +
    '<td align="center"><label for="radio"></label></td>' +
    "</tr>" +
    "<tr>" +
    '<td align="right"></td>' +
    "<td>&nbsp;</td>" +
    '<td class="color5"><strong>' +
    txt.FechaFinal +
    ":</strong></td>" +
    '<td class="color3"><input name="textfield2" type="text" id="textfield2B" value="' +
    diaactual +
    "/" +
    mesactual +
    "/" +
    anoactual +
    '" /></td>' +
    '<td align="center" class="">&nbsp;</td>' +
    "</tr>" +
    "</table></td>" +
    "</tr>" +
    "<tr>" +
    '<td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">' +
    "<tr>" +
    '<td class="res"><input type="button" onclick="return validamovimientos();" value=' +
    txt.Enviar +
    " /></td>" +
    "</tr>" +
    "</table></td>" +
    "</tr>" +
    "<tr>" +
    "<td>&nbsp;</td>" +
    "</tr>" +
    "</table>" +
    "</div>";
  $("#edopasos").html("");
  document.getElementById("area").innerHTML = cadTabla;
  document.getElementById("continuar").innerHTML = "";
  document.getElementById("regresar").innerHTML = "";

  $(document).ready(function () {
    $("#textfieldA").datepicker({
      showOn: "button",
      buttonImageOnly: true,
      buttonImage: "../imagenes/calendario.png",
    });
    $("#textfield2B").datepicker({
      showOn: "button",
      buttonImageOnly: true,
      buttonImage: "../imagenes/calendario.png",
    });
  });
}

//Genera Saldos pantalla inicial
function generaSaldos(saldos) {
  var cadtabla = "";
  var sig = "'";
  if (saldos.Error != "") {
    cadtabla =
      '<div class="col-md-12"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
      txt.Saldos +
      "</li></div>" +
      '<div class="contenido">' +
      '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">' +
      "<tr>" +
      '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">' +
      "<tr>" +
      '<td width="8%" align="right"></td>' +
      '<td width="3%">&nbsp;</td>' +
      '<td width="27%" class="color7"><strong>ERROR</strong></td>' +
      '<td width="31%" class="color3"><label for="textfield"></label></td>' +
      '<td align="center"><label for="radio"></label></td>' +
      "</tr>" +
      "<tr>" +
      '<td align="right">&nbsp;</td>' +
      "<td>&nbsp;</td>" +
      '<td colspan="3" class="color2">' +
      saldos.Error +
      "</td>" +
      "</tr>" +
      "</table></td>" +
      " </tr>" +
      " <tr>" +
      "<td>&nbsp;</td>" +
      "</tr>" +
      "</table>" +
      "</div>";
    document.getElementById("continuar").innerHTML = "";
  } else {
    cadtabla =
      '<div class="col-md-12"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
      txt.Saldos +
      "</li></div>" +
      '<div class="contenido">' +
      '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">' +
      '<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>' +
      "<tr>" +
      '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">' +
      "<tr>" +
      '<td width="8%" align="right"></td>' +
      '<td width="3%">&nbsp;</td>' +
      '<td width="27%" class="color5"><strong>' +
      txt.SaldoaDepositar +
      ":</strong></td>" +
      '<td width="31%" class="color7"><label for="textfield"><strong>$' +
      saldos.Asaldoagencia +
      "</strong></label></td>" +
      '<td align="center"><label for="radio"></label></td>' +
      "</tr>" +
      "<tr>" +
      '<td align="right"></td>' +
      "<td>&nbsp;</td>" +
      '<td class="color5"><strong>' +
      txt.MontoenFicha +
      ":</strong></td>" +
      '<td class="color3"><input type="text" name="textfield2" id="saldoadepositar" /></td>' +
      '<td align="center" class=>&nbsp;</td>' +
      "</tr>" +
      "<tr>" +
      '<td align="right">&nbsp;</td>' +
      "<td>&nbsp;</td>" +
      '<td class="color2">&nbsp;</td>' +
      '<td class="color3">&nbsp;</td>' +
      '<td align="center" class="color3">&nbsp;</td>' +
      "</tr>" +
      "<tr>" +
      '<td align="right">&nbsp;</td>' +
      "<td>&nbsp;</td>" +
      '<td colspan="3" class="res">' +
      txt.PresContinuarParaEmitirFicha +
      "</td>" +
      "</tr>" +
      "</table></td>" +
      "</tr>" +
      "<tr>" +
      "<td>&nbsp;</td>" +
      "</tr>" +
      "</table></div>";
    //document.getElementById("continuar").innerHTML = "<a href='#' onClick='return validasaldos("+ saldos.saldoagencia +");'><img src='../imagenes/btn_continuar.jpg' class = 'botonNav' width='140' height='35' border='0' id='Image11' onmouseover=\"MM_swapImage('Image11','','../imagenes/btn_continuar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";
    document.getElementById("continuar").innerHTML =
      "<a href='#' onClick='return validasaldos(" +
      saldos.saldoagencia +
      ");' class='btn_ctr'>" +
      txt.Continuar +
      " ››</a>";
  }
  return cadtabla;
}

//Genera ficha agencias para deposito
function generaficha(ficha) {
  var sig = "'";
  var cadtabla =
    '<div class="col-md-12"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
    txt.Saldos +
    "</li></div>" +
    '<div class="contenido">' +
    '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">' +
    "<tr>" +
    '<td class="recuadroBlanco" id="fichaim"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">' +
    "<tr>" +
    '<td colspan="5"><span class="color5"><strong>' +
    txt.FichadeDeposito +
    '</strong></span><strong class="color7"> AGENCIA </strong></td>' +
    "</tr>" +
    "<tr>" +
    '<td width="6%" align="right"></td>' +
    '<td width="2%">&nbsp;</td>' +
    '<td width="36%" class="color2">' +
    txt.AgenciaMayus +
    ":</td>" +
    '<td width="53%" class="color3"><strong>' +
    ficha.agencia +
    "</strong></td>" +
    '<td width="3%" align="center">&nbsp;</td>' +
    "</tr>" +
    '<tr class="colorB">' +
    '<td align="right"></td>' +
    "<td>&nbsp;</td>" +
    '<td class="color2">' +
    txt.Banco +
    ":</td>" +
    '<td class="color3"><strong>' +
    ficha.banco +
    "</strong></td>" +
    '<td align="center" class=>&nbsp;</td>' +
    "</tr>" +
    "<tr>" +
    '<td align="right"></td>' +
    "<td>&nbsp;</td>" +
    '<td class="color2">' +
    txt.Sucursal +
    "</td>" +
    '<td class="color3"><strong>' +
    ficha.sucursal +
    "</strong></td>" +
    '<td align="center" class="color3">&nbsp;</td>' +
    "</tr>" +
    '<tr class="colorB">' +
    '<td align="right"></td>' +
    "<td>&nbsp;</td>" +
    '<td class="color2">' +
    txt.Cuenta +
    ":</td>" +
    '<td class="color3"><strong>' +
    ficha.cuenta +
    "</strong></td>" +
    '<td align="center" class="color3">&nbsp;</td>' +
    "</tr>" +
    "<tr>" +
    '<td align="right"></td>' +
    "<td>&nbsp;</td>" +
    '<td class="color2">' +
    txt.NumReferInterbanc +
    ":</td>" +
    '<td class="color3"><strong>' +
    ficha.referencia +
    "</strong></td>" +
    '<td align="center" class="color3">&nbsp;</td>' +
    "</tr>" +
    '<tr class="colorB">' +
    '<td align="right"></td>' +
    "<td>&nbsp;</td>" +
    '<td class="color2">' +
    txt.CantidadaDepositar +
    ":</td>" +
    '<td class="color3"><strong>$' +
    ficha.cantidad +
    "</strong></td>" +
    '<td align="center" class="color3">&nbsp;</td>' +
    "</tr>" +
    "</table></td>" +
    "</tr>" +
    "<tr>" +
    '<td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">' +
    "<tr>" +
    '<td width="319"><input type="button" onClick=' +
    sig +
    "saldos();" +
    sig +
    ' name="Regresar" id="Regresar" value="' +
    txt.Regresar +
    '" /></td>' +
    '<td width="321" align="right" style="padding:0px 0px 0px 500px"><input type="button" onClick="javascript:imprSelec(' +
    sig +
    "fichaim" +
    sig +
    ');" name="Imprimir" id="Imprimir" value=' +
    txt.Imprimir +
    " /></td>" +
    "</tr>" +
    "</table></td>" +
    "</tr>" +
    "<tr>" +
    "<td>&nbsp;</td>" +
    "</tr>" +
    "</table> </div>";
  return cadtabla;
}

//Genera Datos segun el paso (Informacion lado izquierdo)
function datos(d, x) {
  //alert('datos: '+d+x);
  var j = 0;
  var costo = "";
  var descuento = 0;
  //document.getElementById("datos").className ="textos_resumen";
  //De acuerdo al punto(x) se tiene que actualizar los datos que se mostraran

  if (sesion == 0 || vendir) {
    var i = 0;
    //alert(objeto.length)
    d = '<div class="title_step">';

    d += '<div class="col-md-4 inline_cols"><div></div></div></div>';

    d += '<div class="col-md-3"><div class="cont-summary">';
    d += '<div class="header_process"><h3>' + txt.RESUMEN + "</h3></div>";
    d += '<div class="summary">';
    d += '<ul class="info-travel">';
    d += '<li class="blue">' + txt.fechaSalida + "</li>";
    d += '<li class="grey gap">' + fechasal + "</li>";
    d += '<li class="blue">' + txt.SALIDA + "</li>";
    d += '<li class="grey gap">' + oficinaori + "</li>";
    d += '<li class="blue">' + txt.Destino + "</li>";
    d += '<li class="grey gap">' + oficinareg + "</li>";
    if (x > 1) {
      d += '<li class="blue">' + txt.horaSalida + "</li>";
      d +=
        '<li class="grey gap">' +
        cambiaFormatoHora(corridaIda.HoraSalida) +
        "</li>";
    }
    d += '<hr class="summary_divider">';
    if (redondo == "SI") {
      d += '<li class="blue">' + txt.fechaRegreso + "</li>";
      d += '<li class="grey gap">' + fechareg + "</li>";
      d += '<li class="blue">' + txt.SALIDA + "</li>";
      d += '<li class="grey gap">' + oficinareg + "</li>";
      d += '<li class="blue">' + txt.Destino + "</li>";
      d += '<li class="grey gap">' + oficinaori + "</li>";
      if (x > 2) {
        d += '<li class="blue">' + txt.horaSalida + "</li>";
        d +=
          '<li class="grey gap">' +
          cambiaFormatoHora(corridaRegeso.HoraSalida) +
          "</li>";
      }
      d += '<hr class="summary_divider">';
    }

    if (x > 2) {
      d += '<li class="blue summary_inline">' + txt.CostoTotal + "</li>";
      d +=
        '<li class="grey summary_inline text-center">$' +
        object_diagrama.CostoTotal +
        "</li>";
      d += '<li class="light-blue">' + txt.ViajeSalida + "</li>";

      var npromos = 0;
      var npromosAD = 0;
      var npromosXA = 0;
      var npromosZA = 0;
      var npromosotra = 0;
      var ntotal = 0;
      var nahorro = 0;
      while (object_diagrama.PasajerosIda[i]) {
        if (object_diagrama.PasajerosIda[i].CostoOri > 0) {
          npromos++;
          ntotal += object_diagrama.PasajerosIda[i].Costo;
          nahorro += object_diagrama.PasajerosIda[i].CostoOri;
          switch (object_diagrama.PasajerosIda[i].TipoPasajero) {
            case "AD":
              npromosAD++;
              break;
            case "ZA":
              npromosZA++;
              break;
            case "XA":
              npromosXA++;
              break;
            default:
              npromosotra++;
          }
        }
        i++;
      }
      if (npromos > 0) {
        d += '<li class="blue">' + npromos + "&nbsp" + txt.Promocion + ":</li>";
        d +=
          ' <li class="grey gap">$' +
          ntotal +
          ' <span class="red">' +
          txt.Ahorras +
          "&nbsp $" +
          nahorro +
          "</span></li>";
      }
      i = 0;
      while (object_diagrama.PasajerosIda[i]) {
        if (object_diagrama.PasajerosIda[i].CostoOri <= 0) {
          d +=
            '<li class="blue">' +
            object_diagrama.PasajerosIda[i].Leyenda +
            ":</li>";
          switch (object_diagrama.PasajerosIda[i].TipoPasajero) {
            case "AD":
              d +=
                '<li class="grey gap">$' +
                object_diagrama.PasajerosIda[i].Costo * (adulto - npromosAD) +
                "</li>";
              break;
            case "NI":
              d +=
                '<li class="grey gap">$' +
                object_diagrama.PasajerosIda[i].Costo * menor +
                "</li>";
              break;
            case "ZA":
              d +=
                '<li class="grey gap">$' +
                object_diagrama.PasajerosIda[i].Costo * (menor - npromosZA) +
                "</li>";
              break;
            case "IN":
              d +=
                '<li class="grey gap">$' +
                object_diagrama.PasajerosIda[i].Costo * insen +
                "</li>";
              break;
            case "XA":
              d +=
                '<li class="grey gap">$' +
                object_diagrama.PasajerosIda[i].Costo * (insen - npromosXA) +
                "</li>";
              break;
            case "ES":
              d +=
                '<li class="grey gap">$' +
                object_diagrama.PasajerosIda[i].Costo * estudiantes +
                "</li>";
              break;
            case "MA":
              d +=
                '<li class="grey gap">$' +
                object_diagrama.PasajerosIda[i].Costo * maestros +
                "</li>";
              break;
            default:
              d += "<li></li>";
          }
        }
        i++;
      }

      if (redondo == "SI") {
        d += '<li class="light-blue">' + txt.ViajeRegreso + "</li>";

        var npromos = 0;
        var npromosAD = 0;
        var npromosXA = 0;
        var npromosZA = 0;
        var npromosotra = 0;
        var ntotal = 0;
        var nahorro = 0;
        var i = 0;
        while (object_diagrama.PasajerosRegreso[i]) {
          if (object_diagrama.PasajerosRegreso[i].CostoOri > 0) {
            npromos++;
            ntotal += object_diagrama.PasajerosRegreso[i].Costo;
            nahorro += object_diagrama.PasajerosRegreso[i].CostoOri;
            switch (object_diagrama.PasajerosRegreso[i].TipoPasajeroR) {
              case "AD":
                npromosAD++;
                break;
              case "ZA":
                npromosZA++;
                break;
              case "XA":
                npromosXA++;
                break;
              default:
                npromosotra++;
            }
          }
          i++;
        }
        if (npromos > 0) {
          d +=
            '<li class="blue">' + npromos + "&nbsp" + txt.Promocion + ":</li>";
          d +=
            ' <li class="grey gap">$' +
            ntotal +
            ' <span class="red">' +
            txt.Ahorras +
            "&nbsp $" +
            nahorro +
            "</span></li>";
        }
        i = 0;
        while (object_diagrama.PasajerosRegreso[i]) {
          if (object_diagrama.PasajerosRegreso[i].CostoOri <= 0) {
            d +=
              '<li class="blue">' +
              object_diagrama.PasajerosRegreso[i].Leyenda +
              ":</li>";
            switch (object_diagrama.PasajerosRegreso[i].TipoPasajeroR) {
              case "AD":
                d +=
                  '<li class="grey gap">$' +
                  object_diagrama.PasajerosRegreso[i].Costo *
                    (adulto - npromosAD) +
                  "</li>";
                break;
              case "NI":
                d +=
                  '<li class="grey gap">$' +
                  object_diagrama.PasajerosRegreso[i].Costo * menor +
                  "</li>";
                break;
              case "ZA":
                d +=
                  '<li class="grey gap">$' +
                  object_diagrama.PasajerosRegreso[i].Costo *
                    (menor - npromosZA) +
                  "</li>";
                break;
              case "IN":
                d +=
                  '<li class="grey gap">$' +
                  object_diagrama.PasajerosRegreso[i].Costo * insen +
                  "</li>";
                break;
              case "XA":
                d +=
                  '<li class="grey gap">$' +
                  object_diagrama.PasajerosRegreso[i].Costo *
                    (insen - npromosXA) +
                  "</li>";
                break;
              case "ES":
                d +=
                  '<li class="grey gap">$' +
                  object_diagrama.PasajerosRegreso[i].Costo * estudiantes +
                  "</li>";
                break;
              case "MA":
                d +=
                  '<li class="grey gap">$' +
                  object_diagrama.PasajerosRegreso[i].Costo * maestros +
                  "</li>";
                break;
              default:
                d += "<li></li>";
            }
          }
          i++;
        }
      }
    }
    d += "</ul>";
    d += "</div><!--summary--></div><!--cont-summary--></div><!--col-md-12-->";
    /*d+='<div class="col-md-9"><div class="table_process"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">'+oficinaori+' - '+oficinareg+'</li>';
        if(x>2)d+='<li class="cost">$'+object_diagrama.CostoTotal+'</li>';
		else d+='<li class="cost"></li>';
		d+='<li class="date">'+fechaenletra(fechasal)+'</li></ul></div></div></div>';
		if (redondo=='SI' && x!=4){
		d+='<div class="col-md-9"><div class="table_process"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">'+oficinareg+' - '+oficinaori+'</li>';
        d+='<li class="cost"></li>'
		d+='<li class="date">'+fechaenletra(fechareg)+'</li></ul></div></div></div>';
		}*/

    if (x > 3) d = " ";
    /*if(x==8){
			d+='<h1>'+txt.PasoFinal+'</h1>';
			d+='<div class="col-md-9"><div class="table_process"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">'+oficinaori+' - '+oficinareg+'</li>';
			d+='<li class="cost"></li>';
			d+='<li class="date">'+fechaenletra(fechasal)+'</li></ul></div></div></div>';
		if (redondo=='SI'){
			d+='<div class="col-md-9"><div class="table_process"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">'+oficinareg+' - '+oficinaori+'</li>';
			d+='<li class="cost"></li>'
			d+='<li class="date">'+fechaenletra(fechareg)+'</li></ul></div></div></div>';
			}
		}*/
  } else if (sesion != 0) {
    //alert('imprime menu de agencia');
    d = "<div id='resumen_compra' class='col-md-3'>";
    d += "<div class='cont-summary'>";
    d +=
      "<ul class='info-travel'><div class='header_process'><h3>" +
      txt.VentaBoletosAgencias +
      "</h3></div>";
    d += "<li class='blue'>" + txt.Agencia + ": </li>";
    d += "<li class='gray gap'>" + agenc + "</li>";
    d += "<li class='blue'>" + txt.Usuario + ":</li>";
    d += "<li class='gray gap'>" + usuar + "</li></ul>";
    d +=
      "<img src='../imagenes/separador_200.png' style='margin-left:-15px; margin-top:10px';/></div>";

    d += "<id='resumen_compra' class='col-md-3'>";
    d += "<div class='info-travel'>";
    if (admin == "SI")
      d +=
        "<br /><dt class='blue' id='Administrador'><a href='#' onClick='administrador()'>" +
        txt.Administrador +
        "</a></dt>";
    if (venta == "SI")
      d +=
        "<dt class='textos_resumen_current' id='Venta'><a href='#' onClick='javascript: Inbo=0; adelante(paso=-1);'>" +
        txt.Venta +
        "</a></dt>";
    if (venta == "SI")
      d +=
        "<dt class='blue' id='Abierto'><a href='#' onClick='javascript: Inbo=0; abierto();'>" +
        txt.BoletoAbierto +
        "</a></dt>";
    if (venta == "SI")
      d +=
        "<dt class='blue' id='Intercambio'><a href='#' onClick='intercambio();'>" +
        txt.Intercambio +
        "</a></dt>";
    if (venta == "SI")
      d +=
        "<dt class='blue' id='Cancelaci&oacute;n'><a href='#' onClick='cancelacion();'>" +
        txt.Cancelacion +
        "</a></dt>";
    if (camco == "SI")
      d +=
        "<dt class='blue' id='Cambiar'><a href='#' onClick='contrasena();'>" +
        txt.CambiarContrasena +
        "</a></dt>";
    if (saldo == "SI")
      d +=
        "<dt class='blue' id='Saldos'><a href='#' onClick='saldos();'>" +
        txt.Saldos +
        "</a></dt>";
    if (repmo == "SI")
      d +=
        "<dt class='blue' id='Movimientos'><a href='#' onClick='movimientos();'>" +
        txt.Movimientos +
        "</a></dt>";
    d +=
      "<span class='blue'><a href='/netScripts/Request.aspx?APPNAME=NAVEGANTE&PRGNAME=CerrarSesion&ARGUMENTS=-A" +
      sesion +
      ",-A" +
      claus +
      "' target='_top'>" +
      txt.CerrarSesion +
      "</a></span><br />";
    d +=
      "<img src='../imagenes/separador_200.png' style='margin-left:-15px; margin-top:10px';/>";
    d += "</div>";
    d += "</div>";
  }
  $("#datos").html(d);
}

//Banner
function banner2(b) {
  b =
    "<iframe frameborder='0'  class= 'banner2' height='390' width='200' id='bannerExterno'  scrolling='no' src=" +
    banner3 +
    ">Banner</iframe>";
  return b;
}

//Banner
function banner(b) {
  b =
    "<iframe frameborder='0'   class= 'banner1' height='200' width='200' id='bannerExterno'  scrolling='no' src=" +
    banner1 +
    ">Banner</iframe>";
  return b;
}

//Boton regresar
function regresar(r) {
  //r="<a href='#' onClick='return atras();'><img src='../imagenes/btn_regresar.jpg' class = 'botonNav' alt='Regresar'  width='140' height='35' border='0' id='Image20' onmouseover=\"MM_swapImage('Image20','','../imagenes/btn_regresar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";
  r =
    "<a href='#' onClick='return atras();' class='btn_back'>‹‹ " +
    txt.Regresar +
    "</a>";
  return r;
}

//Boton continuar
function continuar(f) {
  //f="<a href='#' onClick='return adelante();'><img src='../imagenes/btn_continuar.jpg' class = 'botonNav' width='140' height='35' border='0' id='Image11' onmouseover=\"MM_swapImage('Image11','','../imagenes/btn_continuar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";
  f =
    "<a href='#' onClick='return adelante(); class='btn_next'>" +
    txt.Continuar +
    " ››</a>";
  return f;
}

//Realiza validacion y presenta mensaje si la contraseña fue cambiada o se presento error
function validacontrasena() {
	var regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{12,15}$/;
    var regexSpecialCharacter = /["`'\\¿¡¨]/;
	
	var cactual = document.getElementById("contraactual").value;
	var cnueva = document.getElementById("nvacon").value;
	var cconfirma = document.getElementById("confcontra").value;
	cactual.replace(/^\s*|\s*$/g, "");
	cnueva.replace(/^\s*|\s*$/g, "");
	cconfirma.replace(/^\s*|\s*$/g, "");

	if(regexSpecialCharacter.test(cnueva)){
		alert(
			idioma == "IN"
			? `Special characters (', ", \`, \\, \u00bf, \u00a1, \u00a8), cannot be used`
			: `Los caracteres especiales (', ", \`, \\, \u00bf, \u00a1, \u00a8), no pueden ser utilizados`
        );
        return false;
    }

	if(cactual == cnueva) {
        alert(
          idioma == "IN"
          ? "The password cannot be the same"
          : "La contrasenia no puede ser la misma");
        return false;
    }

	if(!regexPass.test(cnueva)) {
        alert(
          idioma == "IN"
          ? 'Remember that for safety\n\t*The password must be greater than or equal to 12 characters and less than 15 characters\n\t*must contain upper and lower case letters\n\t*Must contain numbers\n\t*Must contain special characters'
          : 'Recuerda que por seguridad\n\t*La contrase\u00f1a debe de ser mayor o igual a 12 caracteres y menor a 15 caracteres\n\t*Debe de contener mayusculas y minusculas\n\t*Debe de contener numeros\n\t*Debe contener caracteres especiales')
        return false;
      }

	if (cactual == "" || cnueva == "") {
		alert("" + msj.ContrasenaVacia);
		return false;
	}
	if (cnueva != cconfirma) {
		alert("" + msj.ErrorConfContrase);
		return false;
	}
	var http = CreateRequest();
	var url = "/netScripts/Request.aspx?APPNAME=NAVEGANTE&PRGNAME=contrasena&ARGUMENTS=-A" +window.btoa(cactual) +",-A" +window.btoa(cnueva) +",-A" +sesion +",-A" +idioma;
	http.open("GET", url, true);
	http.onreadystatechange = function () {
		if (http.readyState <= 3) {
		document.getElementById("area").innerHTML =
			"<center><img src='../imagenes/loading.gif' align='center' /></center>";
		}
		if (http.readyState == 4 && http.status == 200) {
		var json_data = http.responseText;
		try {
			var object_contrasena = eval(json_data);
			document.getElementById("area").innerHTML =
			'<div class="col-md-12"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
			txt.CambiarContrasena +
			"</li></div>" +
			'<div class="contenido">' +
			'<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">' +
			'<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>' +
			"<tr>" +
			'<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">' +
			"<tr>" +
			'<td width="8%" align="right"></td>' +
			'<td width="3%">&nbsp;</td>' +
			'<td width="27%" class="color7"><strong>' +
			txt.Aviso +
			"</strong></td>" +
			'<td width="31%" class="color3"><label for="textfield"></label></td>' +
			'<td align="center"><label for="radio"></label></td>' +
			"</tr>" +
			"<tr>" +
			'<td align="right">&nbsp;</td>' +
			"<td>&nbsp;</td>" +
			'<td colspan="3" class="color2">' +
			object_contrasena.Estado +
			"</td>" +
			"</tr>" +
			"</table></td>" +
			" </tr>" +
			" <tr>" +
			"<td>&nbsp;</td>" +
			"</tr>" +
			"</table></div>";
			document.getElementById("continuar").innerHTML = "";
			//document.getElementById("regresar").innerHTML = "<a href='#' onClick='return contrasena();'><img src='../imagenes/btn_regresar.jpg' alt='Regresar' width='100' height='20' border='0' id='Image20' onmouseover=\"MM_swapImage('Image20','','../imagenes/btn_regresar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";
			document.getElementById("regresar").innerHTML =
			"<a href='#' onClick='return contrasena();' class='btn_ctr'>\u02c2\u02c2 " +txt.Regresar +"</a>";
		} catch (e) {}
		}
	};
	http.send(null);
}

//Genera administrador pantalla incial
function administrador() {
  termina();
  if (viinco == "NO") {
    document.getElementById("area2").innerHTML = "";
    document.getElementById("area2").style.display = "none";
  }
  personalizat = false;
  document.getElementById("counter").innerHTML = "";
  var elUsuario = "<!$MG_chUsuario>";
  $("dt").removeClass("textos_resumen_current");
  $("#Administrador").addClass("textos_resumen_current");

  document.title = "Administrador Agencias";
  var http = CreateRequest();
  var url =
    "/netScripts/Request.aspx?APPNAME=NAVEGANTE&PRGNAME=administrador&ARGUMENTS=-A" +
    sesion +
    ",-A" +
    claus +
    "";
  http.open("GET", url, true);
  http.onreadystatechange = function () {
    if (http.readyState <= 3)
      document.getElementById("area").innerHTML =
        "<center><img src='../imagenes/loading.gif' align='center' /></center>";
    if (http.readyState == 4 && http.status == 200) {
      var admin = http.responseText;
      try {
        adminJSON = eval(admin);
        //var cadTabla = '<div class="head"><img src="../imagenes/titulo_administrador.jpg" width="690" height="57" /></div>'+
        var cadTabla =
          '<div class="head"><strong class="color5">' +
          txt.Administrador +
          "</strong></div>" +
          '<div class="contenido">' +
          '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">' +
          '<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>' +
          "<tr>" +
          '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">' +
          "<tr>" +
          '<td colspan="6" class="datos"><span class="color5">' +
          txt.UsuariosAgencia +
          "<span></td>" +
          " <tr>" +
          '<tr class="color7">' +
          '<td width="8%">&nbsp;</td>' +
          '<td width="3%">&nbsp;</td>' +
          '<td width="17%"><strong class="color5">' +
          txt.Usuario +
          "</strong></td>" +
          '<td width="30%"><strong class="color5">' +
          txt.Nombre +
          "</strong></td>" +
          '<td width="12%" align="center"><strong class="color5">' +
          txt.Elegir +
          "</strong></td>" +
          '<td width="30%" align="center">&nbsp;</td>' +
          "</tr>";
        for (var u = 0; u < adminJSON.length; u++) {
          cadTabla += '<td width="8%" align="right"></td>';
          cadTabla += '<td width="3%">&nbsp;</td>';
          cadTabla += '<td width="17%" >' + adminJSON[u].claveUsuario + "</td>";
          cadTabla +=
            '<td width="30%" ><label for="radio">' +
            adminJSON[u].nombreUsuario +
            "</td>";
          cadTabla +=
            '<td  align="center" class="color3"><input type="radio"  name="radio" id="radio" onClick="return Seleccionado(' +
            u +
            ')"></td>';
          cadTabla += "</tr>";
        }
        cadTabla +=
          "</table></td>" +
          "</tr>" +
          "<tr>" +
          "</td>&nbsp;</td>" +
          "</tr>" +
          "</table>" +
          "</div>";
      } catch (e) {}
      $("#edopasos").html("");
      document.getElementById("area").innerHTML = cadTabla;
      //document.getElementById("continuar").innerHTML = "<a href='#' onClick='return validaUsuario ();'><img src='../imagenes/btn_continuar.jpg' class = 'botonNav' width='140' height='35' border='0' id='Image11' onmouseover=\"MM_swapImage('Image11','','../imagenes/btn_continuar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";;
      document.getElementById("continuar").innerHTML =
        "<a href='#' onClick='return validaUsuario ();' class='btn_ctr'>" +
        txt.Continuar +
        " ››</a>";
      checked = "N";
    }
  };
  http.send(null);
}

//Administracion del horario del usuario seleccionado
function adminhorario() {
  q++;
  $("dt").removeClass("textos_resumen_current");
  $("#Administrador").addClass("textos_resumen_current");

  document.title = "Administrador Agencias";
  var http = CreateRequest();
  var url =
    "/netScripts/Request.aspx?APPNAME=NAVEGANTE&PRGNAME=adminhorarios&ARGUMENTS=-A" +
    adminJSON[Elegido].claveUsuario +
    ",-A" +
    sesion +
    ",-A" +
    claus +
    ",-A" +
    q +
    ",-A" +
    idioma;
  http.open("GET", url, true);
  http.onreadystatechange = function () {
    if (http.readyState <= 3)
      document.getElementById("area").innerHTML =
        "<center><img src='../imagenes/loading.gif' align='center' /></center>";
    if (http.readyState == 4 && http.status == 200) {
      var hora = http.responseText;
      try {
        var horarioJSON = eval(hora);
        //var cadTabla = '<div class="head"><img src="../imagenes/titulo_administrador.jpg" width="690" height="57" /></div>'+
        var cadTabla =
          '<div class="head"><strong class="color5">' +
          txt.AdminHorario +
          "</strong></div>" +
          '<div class="contenido">' +
          '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">' +
          '<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>' +
          "<tr>" +
          '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">' +
          "<tr>" +
          '  <td colspan="7" class="datos"><span class="color5">' +
          txt.HorarioUsuario +
          ': </span><span class="color2">' +
          adminJSON[Elegido].claveUsuario +
          "</span></td>" +
          " </tr>" +
          " <tr>" +
          ' <td colspan="7" class="datos"><span class="color2">' +
          adminJSON[Elegido].nombreUsuario +
          "</span></td>" +
          " </tr>" +
          '<tr class="color5">' +
          '<td width="23%">&nbsp;</td>' +
          '<td width="3%">&nbsp;</td>' +
          '<td width="13%"><strong class="color5">' +
          txt.DiaMayus +
          "</strong></td>" +
          '<td width="14%" align="center"><strong class="color5">' +
          txt.Inicio +
          "</strong></td>" +
          '<td width="14%" align="center"><strong class="color5">' +
          txt.Fin +
          "</strong></td>" +
          '<td width="17%" align="center"><strong class="color5">' +
          txt.DiaActivo +
          "</strong></td>" +
          '<td width="16%" align="center">&nbsp;</td>' +
          "</tr>";
        var chek = "";
        var enable = "";
        for (var h = 0; h < horarioJSON.length; h++) {
          if (horarioJSON[h].Activo) {
            chek = 'checked="checked"';
            enable = "";
          } else {
            chek = "";
            enable = 'disabled="disabled"';
          }

          cadTabla += "<tr>";
          cadTabla += '<td align="right"></td>';
          cadTabla += "<td>&nbsp;</td>";
          cadTabla += '<td class="color2">' + horarioJSON[h].dia + "</td>";
          cadTabla +=
            '<td align="center"><input name="textfield7" class="inputCenter" type="text" id="inicio' +
            h +
            '" value=' +
            horarioJSON[h].horaInicio +
            ' size="6" maxlength="5" ' +
            enable +
            "/></td>";
          cadTabla +=
            '<td align="center"><input name="textfield14" class="inputCenter" type="text" id="fin' +
            h +
            '" value=' +
            horarioJSON[h].horaFin +
            ' size="6" maxlength="5" ' +
            enable +
            "/></td>";
          cadTabla +=
            '<td align="center"><input type="checkbox" name="checkbox7" id="checkbox' +
            h +
            '" ' +
            chek +
            ' onClick="habilita(' +
            h +
            ')"  /></td>';
          cadTabla += "<td>&nbsp;</td>";
          cadTabla += "</tr>";
        }

        cadTabla +=
          "</table></td>" +
          "</tr>" +
          "<tr>" +
          "<td>&nbsp;</td>" +
          "</tr>" +
          "</table>" +
          "</div>";
        document.getElementById("area").innerHTML = cadTabla;
        //document.getElementById("continuar").innerHTML = "<a href='#' onclick='guardaHorarios();'><img src='../imagenes/btn_continuar.jpg' class = 'botonNav' width='140' height='35' border='0' id='Image11' onmouseover=\"MM_swapImage('Image11','','../imagenes/btn_continuar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";;;
        document.getElementById("continuar").innerHTML =
          "<a href='#' onclick='guardaHorarios();' class='btn_ctr'>" +
          txt.Continuar +
          " ››</a>";
      } catch (e) {}
    }
  };
  http.send(null);
}

//Se verifica la respuesta de sistema al realizar la cancelacion
function validacancelacion() {
  var i = 0;
  var ope = document.getElementById("textfieldop").value;
  var ni = document.getElementById("textfield3Nit").value;
  ope.replace(/^\s*|\s*$/g, "");
  ni.replace(/^\s*|\s*$/g, "");
  if (ope == 0 || ope == "") {
    alert("" + msj.NoNumOperacion);
    return false;
  }

  if (ni == 0 || ni == "") {
    alert("" + msj.NoNit);
    return false;
  }
  ope = ope.replace(/,/gi, "-");
  var http = CreateRequest();
  var url =
    "/netScripts/Request.aspx?APPNAME=NAVEGANTE&PRGNAME=CancelacionBoletosGrupal&ARGUMENTS=-A" +
    sesion +
    ",-A" +
    claus +
    ",-A" +
    ope +
    ",-A" +
    ni +
    ",-A1,-A" +
    idioma;
  http.open("GET", url, true);
  document.getElementById("area").innerHTML =
    "<center><img src='../imagenes/loading.gif' align='center' /></center>";
  http.onreadystatechange = function () {
    if (http.readyState <= 3) {
      document.getElementById("area").innerHTML =
        "<center><img src='../imagenes/loading.gif' align='center' /></center>";
    }
    if (http.readyState == 4 && http.status == 200) {
      var json_data = http.responseText;
      try {
        var object_cance = eval(json_data);
        if (object_cance.Estado == "Cancelado") {
          //window.open("../nueva/PDF/"+ object_cance.Ru,"PDF Cancelacion");
          window.location = object_cance.Ru;
          document.getElementById("area").value = cancelacion();
        } else {
          document.getElementById("area").innerHTML =
            '<div class="col-md-12"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
            txt.TituloCancelacion +
            "</li></div>" +
            '<div class="contenido">' +
            '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">' +
            '<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>' +
            "<tr>" +
            '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">' +
            "<tr>" +
            '<td width="8%" align="right"></td>' +
            '<td width="3%">&nbsp;</td>' +
            '<td width="27%" class="color7"><strong>' +
            txt.Aviso +
            "</strong></td>" +
            '<td width="31%" class="color3"><label for="textfield"></label></td>' +
            '<td align="center"><label for="radio"></label></td>' +
            "</tr>" +
            "<tr>" +
            '<td align="right">&nbsp;</td>' +
            "<td>&nbsp;</td>" +
            '<td colspan="3" class="color2">' +
            object_cance.Estado +
            "</td>" +
            "</tr>" +
            "</table></td>" +
            " </tr>" +
            " <tr>" +
            "<td>&nbsp;</td>" +
            "</tr>" +
            "</table></div>";
          //document.getElementById("regresar").innerHTML = "<a href='#' onClick='return cancelacion();'><img src='../imagenes/btn_regresar.jpg' alt='Regresar' width='100' height='20' border='0' id='Image20' onmouseover=\"MM_swapImage('Image20','','../imagenes/btn_regresar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";
          document.getElementById("regresar").innerHTML =
            "<a href='#' onClick='return cancelacion();' class='btn_ctr'>‹‹ " +
            txt.Regresar +
            "</a>";
        }
      } catch (e) {}
    }
  };
  http.send(null);
}

//Recibe respuesta y valida si es posible realizar el intercambio
function validaintercambio() {
  var ope = document.getElementById("textfieldint").value;
  ope.replace(/^\s*|\s*$/g, "");
  var sig = "'";
  var tipoint = document.getElementById("tipoOper_C");
  if (tipoint.checked) {
    var conabi = "CE";
  } else {
    var conabi = "NE";
  }
  if (ope == "") {
    alert("" + msj.NoNumOperacion);
    return false;
  }
  ope = ope.replace(/,/gi, "-");
  var http = CreateRequest();
  var url =
    "/netScripts/Request.aspx?APPNAME=NAVEGANTE&PRGNAME=ValidaIntercambioGrupal&ARGUMENTS=-A" +
    ope +
    ",-A" +
    sesion +
    ",-A" +
    claus +
    ",-ASI,-A" +
    consecutivo +
    ",-A" +
    conabi +
    ",-A" +
    idioma;
  http.open("GET", url, true);
  document.getElementById("area").innerHTML =
    "<center><img src='../imagenes/loading.gif' align='center' /></center>";
  http.onreadystatechange = function () {
    if (http.readyState <= 3) {
      document.getElementById("area").innerHTML =
        "<center><img src='../imagenes/loading.gif' align='center' /></center>";
    }
    if (http.readyState == 4 && http.status == 200) {
      var json_data = http.responseText;
      try {
        var object_inter = eval(json_data);
        if (object_inter.Estado != "") {
          document.getElementById("area").innerHTML =
            '<div class="col-md-12"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
            txt.Intercambio +
            "</li></div>" +
            '<div class="contenido">' +
            '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">' +
            '<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>' +
            "<tr>" +
            '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">' +
            "<tr>" +
            '<td width="8%" align="right"></td>' +
            '<td width="3%">&nbsp;</td>' +
            '<td width="27%" class="color7"><strong>ERROR</strong></td>' +
            '<td width="31%" class="color3"><label for="textfield"></label></td>' +
            '<td align="center"><label for="radio"></label></td>' +
            "</tr>" +
            "<tr>" +
            '<td align="right">&nbsp;</td>' +
            "<td>&nbsp;</td>" +
            '<td colspan="3" class="color2">' +
            object_inter.Estado +
            "</td>" +
            "</tr>" +
            "</table></td>" +
            "</tr>" +
            "<tr>" +
            '<td><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">' +
            "<tr>" +
            '<td><input type="button" onclick="intercambio();" name="Regresar" id="Regresar" value="' +
            txt.Regresar +
            '" /></td>' +
            "</tr>" +
            "</table></td>" +
            "</tr>" +
            "<tr>" +
            "<td>&nbsp;</td>" +
            "</tr>" +
            "</table></div>";
          document.getElementById("continuar").innerHTML = "";
          document.getElementById("regresar").innerHTML = "";
        } else {
          esint = object_inter.Esintercambio;
          opeint = object_inter.opeinter;
          mint = object_inter.Minter;
          mintprepago = object_inter.MinterPre;
          numPasInt = object_inter.numPasajeros;
          NomPasajeros = object_inter.NomPas;

          if (tipoint.checked) {
            paso = -1;
            Inbo = 1;
            adelante();
          } else {
            paso = 10;
            Inbo = 1;
            abierto();
          }
        }
      } catch (e) {}
    }
  };
  http.send(null);
}

//Guarda horario administrador y genera usuarios a seleccionar
function guardaHorarios() {
  var elUsuario = "<!$MG_chUsuario>";
  $("dt").removeClass("textos_resumen_current");
  $("#Administrador").addClass("textos_resumen_current");

  document.title = "Administrador Agencias";
  var http = CreateRequest();
  var url =
    "/netScripts/Request.aspx?APPNAME=NAVEGANTE&PRGNAME=cambiahorarios&ARGUMENTS=-A" +
    adminJSON[Elegido].claveUsuario +
    ",-A" +
    sesion +
    ",-A" +
    claus +
    "";
  var inicios = "";
  var finales = "";
  for (var i = 0; i < 7; i++) {
    if ($("#checkbox" + i).attr("checked")) {
      url += ",-A" + i;
      inicios += ",-A" + $("#inicio" + i).val();
      finales += ",-A" + $("#fin" + i).val();
    } else {
      url += ",-A";
      inicios += ",-A" + $("#inicio" + i).val();
      finales += ",-A" + $("#fin" + i).val();
    }
  }
  url += inicios + finales;

  http.open("GET", url, true);
  http.onreadystatechange = function () {
    if (http.readyState <= 3)
      document.getElementById("area").innerHTML =
        "<center><img src='../imagenes/loading.gif' align='center' /></center>";
    if (http.readyState == 4 && http.status == 200) {
      var admin = http.responseText;
      try {
        adminJSON = eval(admin);
        //var cadTabla = '<div class="head"><img src="../imagenes//titulo_administrador.jpg" width="690" height="57" /></div>'+
        var cadTabla =
          '<div class="head"><strong class="color5">' +
          txt.Administrador +
          "</strong></div>" +
          '<div class="contenido">' +
          '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="forma">' +
          '<tr><td><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>' +
          "<tr>" +
          '<td class="recuadroBlanco"><table width="640" border="0" align="center" cellpadding="0" cellspacing="0" class="formulario">' +
          "<tr>" +
          '<td colspan="6" class="datos"><span class="color5">' +
          txt.UsuariosAgencia +
          "<span></td>" +
          " <tr>" +
          '<tr class="color7">' +
          '<td width="8%">&nbsp;</td>' +
          '<td width="3%">&nbsp;</td>' +
          '<td width="17%"><strong class="color5">' +
          txt.Usuario +
          "</strong></td>" +
          '<td width="30%"><strong class="color5">' +
          txt.Nombre +
          "</strong></td>" +
          '<td width="12%" align="center"><strong class="color5">' +
          txt.Elegir +
          "</strong></td>" +
          '<td width="30%" align="center">&nbsp;</td>' +
          "</tr>";
        for (var u = 0; u < adminJSON.length; u++) {
          cadTabla += '<td width="8%" align="right"></td>';
          cadTabla += '<td width="3%">&nbsp;</td>';
          cadTabla += '<td width="17%" >' + adminJSON[u].claveUsuario + "</td>";
          cadTabla +=
            '<td width="30%"><label for="radio"><strong>' +
            adminJSON[u].nombreUsuario +
            "</td>";
          cadTabla +=
            '<td  align="center"><input type="radio"  name="radio" id="radio" onClick="return Seleccionado(' +
            u +
            ')"></td>';
          cadTabla += "</tr>";
        }
        cadTabla +=
          "</table></td>" +
          "</tr>" +
          "<tr>" +
          "</td>&nbsp;</td>" +
          "</tr>" +
          "</table>" +
          "</div>";
      } catch (e) {}
      document.getElementById("area").innerHTML = cadTabla;
      //document.getElementById("continuar").innerHTML = "<a href='#' onClick='return validaUsuario ();'><img src='../imagenes/btn_continuar.jpg' class = 'botonNav' width='140' height='35' border='0' id='Image11' onmouseover=\"MM_swapImage('Image11','','../imagenes/btn_continuar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";;
      document.getElementById("continuar").innerHTML =
        "<a href='#' onClick='return validaUsuario ();' class='btn_ctr'>Continuar ››</a>";
      checked = "N";
    }
  };
  http.send(null);
}

//Genera html venta completada
function RespuestaGuardado(d) {
  termina();
  document.getElementById("counter").innerHTML = "";

  // ahernandez - 21 02 2013 - ##5728##
  $("#timer").remove();

  /***/
  /* ahernandez - 12 08 2013 - funciones de Google Analytics */
  if (sesion == 0) {
    _gaq.push(["_trackEvent", "infoBOLETOS", "infoBOLETOS"]);
  }
  /***/

  var cad = "";
  cad += '<div class="contenido">';
  cad +=
    '<div class="col-md-12"><div class="table_process"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
    oficinaori +
    " - " +
    oficinareg +
    "</li>";
  cad += '<li class="cost">' + d.ClaseServicio + "</li>";
  cad +=
    '<li class="date">' +
    fechaenletra(fechasal) +
    "</li></ul></div></div></div>";
  if (d.ViajeRegreso) {
    cad +=
      '<div class="col-md-12"><div class="table_process"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
      oficinareg +
      " - " +
      oficinaori +
      "</li>";
    cad += '<li class="cost">' + d.ClaseServicioR + "</li>";
    cad +=
      '<li class="date">' +
      fechaenletra(fechareg) +
      "</li></ul></div></div></div>";
  }
  cad += '<div class="summary">';
  if (sesion == 0) {
    cad +=
      '<div class="row"><div class="col-md-6 col-sm-6 col-xs-12 inline_cols"><ul class="info-travel">';
    cad +=
      '<li class="green">' +
      txt.NumTransacEmpresa +
      ':&nbsp</li><li class="grey">' +
      d.Tarjeta +
      "</li></ul></div>";
    cad +=
      '<div class="col-md-6 col-sm-6 col-xs-12 inline_cols"><ul class="info-travel">';
    cad +=
      '<li class="green">' +
      txt.NumAutorizBanco +
      ':&nbsp</li><li class="grey">' +
      d.Autorizacion +
      "</li></ul></div>";
    cad += "</div>"; //row
    cad +=
      '<div class="row"><div class="col-md-6 col-sm-6 col-xs-12 inline_cols"><ul class="info-travel">';
    cad +=
      '<li class="green">' +
      txt.NumReciboBanco +
      ':&nbsp</li><li class="grey">' +
      d.Voucher +
      "</li></ul></div>";
    cad +=
      '<div class="col-md-6 col-sm-6 col-xs-12 inline_cols"><ul class="info-travel">';
    cad +=
      '<li class="green">' +
      txt.NIT +
      ':&nbsp</li><li class="grey">' +
      d.Nit +
      "</li></ul></div>";
    cad += "</div>"; //row
  } else {
    cad += '<div class="row">';
    cad +=
      '<div class="row"><div class="col-md-6 col-sm-6 col-xs-12 inline_cols"><ul class="info-travel">';
    cad +=
      '<li class="green">' +
      txt.Operacion +
      ':&nbsp</li><li class="grey">' +
      d.ViajeIda[0].Operacion +
      "</li></ul></div>";
    cad +=
      '<div class="col-md-6 col-sm-6 col-xs-12 inline_cols"><ul class="info-travel">';
    cad +=
      '<li class="green">' +
      txt.NIT +
      ':&nbsp</li><li class="grey">' +
      d.Nit +
      "</li></ul></div>";
    cad += "</div>"; //row
  }
  cad += "</div>"; //summary

  ////Detalle IDA

  cad +=
    '<p class="type_trip" align="left">' +
    txt.DetallesSalida +
    '<i class="fa fa-long-arrow-right"></i></p>';
  cad +=
    '<div class="row"></div><table width="810" border="0" align="center" cellpadding="0" cellspacing="0" ><tbody><tr class="cintaverde">' +
    '                <td align="center" class="lineaInf res"  width="13%">' +
    txt.Operacion +
    "</td>";
  if (d.Abierto == "NO") {
    cad +=
      '          <td width="5%" align="center" class="lineaInf Abierto res">' +
      txt.Asiento +
      "</td>";
  }
  cad +=
    '              <td width="30%" align="center" class="lineaInf res">' +
    txt.PasajeroMin +
    "</td>";
  if (d.Abierto == "NO") {
    cad +=
      '          <td width="10%" align="center" class="lineaInf Abierto res">' +
      txt.fechaSalida +
      "</td>";
    cad +=
      '          <td width="10%" align="center" class="lineaInf Abierto res">' +
      txt.horaSalida +
      "</td>";
  }
  if (d.ViajeIda[0].Empresa != "")
    cad +=
      '              <td width="15%" align="center" class="lineaInf res">' +
      txt.Origen +
      " / " +
      txt.Destino +
      "</td>" +
      '                <td width="7%" align="center" class="lineaInf res">' +
      txt.Empresa +
      "</td>" +
      '<td width="10%" align="center" class="lineaInf res">' +
      txt.Monto +
      "</td><td>&nbsp;</td>";
  cad += "</tr>";
  for (i = 0; i < d.ViajeIda.length; i++) {
    cad += " <tr>" + '		<td class="res">' + d.ViajeIda[i].Operacion + "</td>";
    if (d.Abierto == "NO") {
      if (d.ViajeIda[i].Asiento == 0) {
        cad += '        <td class="Abierto res" >-</td>';
      } else {
        cad +=
          '        <td class="Abierto res" >' + d.ViajeIda[i].Asiento + "</td>";
      }
    }
    cad += '        <td class="res">' + d.ViajeIda[i].NombrePasajero + "</td>";
    if (d.Abierto == "NO") {
      if (d.ViajeIda[i].Asiento == 0) {
        cad += '        <td class="Abierto res" >-</td>';
        cad += '        <td class="Abierto res" >-</td>';
      } else {
        cad +=
          '        <td class="Abierto res" >' +
          d.ViajeIda[i].fechacorr +
          "</td>";
        cad +=
          '        <td class="Abierto res" >' +
          cambiaFormatoHora(d.ViajeIda[i].horacorr) +
          "</td>";
      }
    }
    if (d.ViajeIda[i].Empresa != "")
      cad +=
        '<td class="res">' +
        d.ViajeIda[i].OrigenDestino +
        "</td>" +
        '<td class="res">' +
        d.ViajeIda[i].Empresa +
        "</td>" +
        '<td class="res">$' +
        d.ViajeIda[i].Monto +
        "</td>";
    ("	 </tr>");
  }
  cad += "</tbody></table>";
  cad += '<div class="row"></div>';
  ////Detalle Regreso
  if (d.ViajeRegreso) {
    cad +=
      '<p class="type_trip" align="left">' +
      txt.DetallesRegreso +
      '<i class="fa fa-long-arrow-left"></i></p>';
    cad +=
      '<div class="row"></div><table width="810" border="0" align="center" cellpadding="0" cellspacing="0" ><tbody><tr class="cintaverde">' +
      '                <td align="center" class="lineaInf res"  width="13%">' +
      txt.Operacion +
      "</td>";
    if (d.Abierto == "NO") {
      cad +=
        '          <td width="5%" align="center" class="lineaInf Abierto res">' +
        txt.Asiento +
        "</td>";
    }
    cad +=
      '              <td width="30%" align="center" class="lineaInf res">' +
      txt.PasajeroMin +
      "</td>";
    if (d.Abierto == "NO") {
      cad +=
        '          <td width="10%" align="center" class="lineaInf Abierto res">' +
        txt.fechaSalida +
        "</td>";
      cad +=
        '          <td width="10%" align="center" class="lineaInf Abierto res">' +
        txt.horaSalida +
        "</td>";
    }
    if (d.ViajeRegreso[0].Empresa != "")
      cad +=
        '              <td width="15%" align="center" class="lineaInf res">' +
        txt.Origen +
        " / " +
        txt.Destino +
        "</td>" +
        '                <td width="7%" align="center" class="lineaInf res">' +
        txt.Empresa +
        "</td>" +
        '<td width="10%" align="center" class="lineaInf res">' +
        txt.Monto +
        "</td><td>&nbsp;</td>";
    cad += "</tr>";
    for (i = 0; i < d.ViajeRegreso.length; i++) {
      cad +=
        " <tr>" + '		<td class="res">' + d.ViajeRegreso[i].Operacion + "</td>";
      if (d.Abierto == "NO") {
        if (d.ViajeRegreso[i].Asiento == 0) {
          cad += '        <td class="Abierto res" >-</td>';
        } else {
          cad +=
            '        <td class="Abierto res" >' +
            d.ViajeRegreso[i].Asiento +
            "</td>";
        }
      }
      cad +=
        '        <td class="res">' + d.ViajeRegreso[i].NombrePasajero + "</td>";
      if (d.Abierto == "NO") {
        if (d.ViajeRegreso[i].Asiento == 0) {
          cad += '        <td class="Abierto res" >-</td>';
          cad += '        <td class="Abierto res" >-</td>';
        } else {
          cad +=
            '        <td class="Abierto res" >' +
            d.ViajeRegreso[i].fechacorr +
            "</td>";
          cad +=
            '        <td class="Abierto res" >' +
            cambiaFormatoHora(d.ViajeRegreso[i].horacorr) +
            "</td>";
        }
      }
      if (d.ViajeRegreso[i].Empresa != "")
        cad +=
          '<td class="res">' +
          d.ViajeRegreso[i].OrigenDestino +
          "</td>" +
          '<td class="res">' +
          d.ViajeRegreso[i].Empresa +
          "</td>" +
          '<td class="res">$' +
          d.ViajeRegreso[i].Monto +
          "</td>";
      ("	 </tr>");
    }
    cad += "</tbody></table>";
  }
  cad += '<div class="row"></div>';
  cad += "<p>&nbsp;</p>";
  cad += "<table align='left'><tbody><tr>";
  cad += "<td class='titulo'>" + txt.CostoTotal + "</td></tr>";
  cad +=
    "<tr><td align='center' bgcolor='#094992' class='precio res'>$" +
    d.Total +
    "</td></tr>";

  if (TotalPrepago > 0 || AplicaPrepago > 0) {
    cad +=
      "<tr><td class='titulo'>" +
      txt.PorPagar +
      "</td></tr><tr><td align='center' bgcolor='#094992' class='precio res'>$" +
      TotalPrepago +
      "</td></tr>";
  }
  cad += "</tbody></table>";
  cad += '<div class="row"></div>';
  cad += "<p>&nbsp;</p>";
  /*cad += "<table width=100%><tbody><tr>";
	cad += '<td>'+d.LECOTR+'</td>';
	cad += "</tr></tbody></table>";*/
  cad += '<div class="row"></div>';
  cad += "<p>&nbsp;</p>";
  cad += "<table width=100%><tbody><tr>";
  if (sesion > 0 || (pavpin != "NO" && sesion == 0)) {
    cad +=
      '<td width="7%" align="center" class="negritas"><a href="/netScripts/Request.aspx?APPNAME=NAVEGANTE7&PRGNAME=';
    if (sesion > 0) cad += "paseabordar";
    else cad += "paseabordarVPI";
    cad +=
      "&ARGUMENTS=-A" +
      sesion +
      ",-A" +
      d.Operacion +
      ',-A0" target="_blank">' +
      txt.Imprimir +
      "</a></td>" +
      '<td width="31%" align="right" class="negritas"><a href="/netScripts/Request.aspx?APPNAME=NAVEGANTE7&PRGNAME=';
    if (sesion > 0) cad += "paseabordar";
    else cad += "paseabordarVPI";
    cad +=
      "&ARGUMENTS=-A" +
      sesion +
      ",-A" +
      d.Operacion +
      ',-A1" target="_blank">' +
      txt.Guardar +
      "</a></td>";
  } else {
    cad +=
      '<td width="7%" align="center" class="negritas"><a onClick="return printWindow();" href="#">' +
      txt.Imprimir +
      "</a></td>";
    cad += '<td width="31%" align="center">&nbsp;</td>';
  }
  cad += "</tr></tbody></table>";
  cad += '<div class="row"></div>';
  cad += "<p>&nbsp;</p>";

  cad += "<table width=100% frame=box><tbody>";
  if (idioma == "ES") {
    cad +=
      "<tr><td align='center' style='margin-left:50px' width=810px>" +
      d.LECOPA +
      "</td></tr>";
  } else {
    cad +=
      "<tr><td align='center' style='margin-left:50px' width=810px>" +
      d.LECOPI +
      "</td></tr>";
  }
  cad += "</tbody></table>";
  cad += "</div>";
  cad += '<div class="row"></div>';

  cad += "</div>"; //contenido

  $("#area").html(cad);
  puntoactual(8);
  var d;
  datos(d, 8);
  if (sesion > 0) generaNuevaSesion();
}

function puntoactual(pasoa) {
  var retorno = "";
  retorno +=
    '<div class="cont_message_clock"><div class="message_clock message_sale">';
  retorno += "<h2>" + txt.DescubreOfertas + "</h2>";
  retorno += "<p>" + txt.TenemosHorarios + "</p></div>";
  if (pasoa < 6)
    retorno +=
      '<div class="message_clock clock"><div class="numbers" id="reloj">00</div><small>' +
      txt.TiempoRestante +
      "</small></div>";
  if (pasoa == 6)
    retorno +=
      '<div class="message_clock clock"><div class="numbers" id="reloj">00</div><small>' +
      txt.TiempoRestante +
      "</small></div>";
  retorno += '<div class="row"></div>';
  retorno += "</div>";
  retorno += '<div class="title_step">';
  switch (pasoa) {
    case 1:
      retorno += '<h1><span class="circle">1</span>' + txt.PasoSalida + ".";
      break;
    case 2:
      retorno += '<h1><span class="circle">2</span>' + txt.PasoRegreso + ".";
      break;
    case 3:
      retorno += '<h1><span class="circle">3</span>' + txt.PasoAsiento + ".";
      break;
    case 4:
      retorno += '<h1><span class="circle">3</span>' + txt.PasoAsiento + ".";
      break;
    case 5:
      retorno +=
        '<h1><span class="circle">4</span>' + txt.PasoPersonaliza + ".";
      break;
    case 6:
      retorno += '<h1><span class="circle">5</span>' + txt.PasoResumen + ".";
      break;
    case 8:
      retorno += '<h1><span class="circle">6</span>' + txt.PasoFinal + ".";
      break;
    default:
      retorno += "<p>prueba</p>";
  }

  retorno += '<div class="steps_breadcumbs">';
  retorno += "<ul>";
  if (pasoa == 1) retorno += '<li class="active">1</li>';
  else retorno += "<li>1</li>";
  if (pasoa == 2) retorno += '<li class="active">2</li>';
  else retorno += "<li>2</li>";
  if (pasoa == 3 || pasoa == 4) retorno += '<li class="active">3</li>';
  else retorno += "<li>3</li>";
  if (pasoa == 5) retorno += '<li class="active">4</li>';
  else retorno += "<li>4</li>";
  if (pasoa == 6) retorno += '<li class="active">5</li>';
  else retorno += "<li>5</li>";
  if (pasoa == 8) retorno += '<li class="active">6</li>';
  else retorno += "<li>6</li>";

  retorno += "</ul></div><!--steps_breadcumbs-->";
  retorno += '</h1><div class="row"></div></div><!--title_step-->';

  /*	switch(pasoa) {
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
	retorno +='</div></div>';*/
  //$('#nav').html(retorno);
  //$('#nav').show();
  $("#edopasos").html(retorno);
  $("#edopasos").show();
}

function puntoactual_bk(pasoa) {
  var retorno = "";
  if (pasoa == 1) retorno += "<span class='opcion_salida_current'></span>";
  else retorno += "<span class='opcion_salida'></span>";
  if (pasoa == 2) retorno += " <span class='opcion_regreso_current'></span>";
  else retorno += " <span class='opcion_regreso'></span>";
  if (pasoa == 3) retorno += "<span class='opcion_registro_current'></span>";
  else retorno += "<span class='opcion_registro'></span>";
  if (pasoa == 4 || paso == 5)
    retorno += "<span class='opcion_asientos_current'></span>";
  else retorno += "<span class='opcion_asientos'></span>";
  if (pasoa == 6) retorno += "<span class='opcion_resumen_current'></span>";
  else retorno += "<span class='opcion_resumen'></span>";
  if (a == 7) retorno += "<span class='opcion_pago_current'></span>";
  else retorno += "<span class='opcion_pago'></span>";
  if (pasoa == 8)
    retorno += "<span class='opcion_confirmacion_current'></span>";
  else retorno += "<span class='opcion_confirmacion'></span>";

  $("#nav").html(retorno);
}

function cargaOrigenes() {
  var cadena = "";

  http = CreateRequest();
  http.open(
    "GET",
    "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=OrigenDestino",
    true
  );
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      if (sesion == 0)
        document.getElementById("tdOrigen").innerHTML =
          '<select name="Origen" id="tdOrigen" onChange="cargaDestinos(this)" style="width:200px;"> <option value="ORIGEN">ORIGEN</option>' +
          http.responseText +
          "</select>";
      else
        $("#tdOrigenAge").html(
          '<select name="Origen" id="tdOrigen" onChange="cargaDestinos(this)" style="width:200px;"> <option value="ORIGEN">ORIGEN</option>' +
            http.responseText +
            "</select>"
        );
    }
  };
  http.send(null);
}

function cargaDestinos(par) {
  var cadena = "";
  if (sesion == 0)
    document.getElementById("tdDestino").innerHTML =
      '<select name="Destino" id="tdDestino" style="width:130px;"><option value=-1>Cargando...</option>';
  else
    $("#tdDestinoAge").html(
      '<select name="Destino" id="tdDestino" style="width:130px;"><option value=-1>Cargando...</option>'
    );
  //http = CreateRequest();

  //http.open("GET","/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=OrigenDestino&ARGUMENTS=-A"+ par.options[par.selectedIndex].value ,true);
  $.post(
    "/netScripts/Request.aspx",
    {
      APPNAME: "Navegante",
      PRGNAME: "OrigenDestino",
      ARGUMENTS: "origen",
      origen: par.options[par.selectedIndex].value,
    },
    function (resultadoPOST) {
      if (sesion == 0)
        document.getElementById("tdDestino").innerHTML =
          '<select  name="Destino" id="tdDestino" style="width:130px;"><option value=DESTINO>DESTINO</option>' +
          resultadoPOST +
          "</select>";
      else
        $("#tdDestinoAge").html(
          '<select  name="Destino" id="tdDestino" style="width:130px;"><option value=DESTINO>DESTINO</option>' +
            resultadoPOST +
            "</select>"
        );
    },
    "text"
  );

  //http.send(null);
}

function pagoR(p) {
  p =
    "<a href='#' onClick='return adelante();'><img src='../imagenes/btn_pagar.jpg' alt='Pagar' width='140' height='35' border='0' id='Image1' onmouseover=\"MM_swapImage('Image1','','../imagenes/btn_pagar_over.jpg',1)\" onmouseout='MM_swapImgRestore()' /></a>";
  return p;
}

function generaRutaAbierto(objetoruta) {
  var i = 0;
  var clase, cadTabla;
  if (esint == "SI" && opeint != "" && claus != "" && mint != 0)
    var inter =
      '<table class="aviso" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color1">' +
      txt.IntercambioLabel +
      '</td></tr><tr><td align="center" class="blue">' +
      opeint +
      "</td></tr></table>";
  else var inter = "";
  cadTabla =
    "<div class='head'><strong class='negritas verde_1 20_puntos condensada'>SELECCIONE LA RUTA</strong></div>";
  cadTabla += "<div class='contenido'>" + inter;
  cadTabla +=
    "<TABLE class='horarios' cellspacing=0 cellpadding=0 width='680' >";
  cadTabla +=
    '<tr><td colspan="4"><img width="680" height="15" style="margin-top:5px;" alt="" src="../imagenes/separador_200.png"></td></tr>';
  cadTabla +=
    "<tr class='fondo3'><TH width='50' > <FONT >Clave Ruta</FONT> </TH>";
  cadTabla += "<TH width='108'> <FONT  >Descripcion Ruta</FONT> </TH>";
  cadTabla += "<TH width='62' > <FONT  >Tarifa Ruta</FONT> </TH>";
  cadTabla += "<TH width='62' > <FONT  >Opciones</FONT> </TH>";
  cadTabla += "</tr>";
  for (i = 0; i < objetoruta.length - 1; i++) {
    cadTabla += "<tr>";
    cadTabla += "<td align='center' >" + objetoruta[i].ClaveRuta + "</td>";
    cadTabla +=
      "<td align='center' >" + objetoruta[i].DescripcionRuta + "</td>";
    cadTabla += "<td align='center' >" + objetoruta[i].TarifaRuta + "</td>";
    cadTabla +=
      '<td align="center"><input type="radio" id="rutaele' +
      i +
      '" name="rutaele" value="' +
      objetoruta[i].ClaveRuta +
      '"';
    if (i == 0) cadTabla += ' checked="checked"';
    cadTabla += "></td>";
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

function generamain() {
  var cadtabla = "";
  var comsim = "'";
  //cadtabla= '<body onload= "MM_preloadImages('+comsim+'../imagenes/btn-seleccione_over.png'+comsim+','+comsim+'../imagenes/btn_continuar_over.jpg'+comsim+','+comsim+'../imagenes/btn_entrar_over.jpg'+comsim+','+comsim+'../imagenes/loading.gif'+comsim+');obtieneParam(leytra)">';
  /*window.onload=function (e){
	MM_preloadImages(+comsim+'../imagenes/btn-seleccione_over.png'+comsim+','+comsim+'../imagenes/btn_continuar_over.jpg'+comsim+','+comsim+'../imagenes/btn_entrar_over.jpg'+comsim+','+comsim+'../imagenes/loading.gif'+comsim);
	obtieneParam(leytra);

	obtieneParamMostrarTA('MTAINT');
	obtieneParamMostrarTC('MTCINT');

	}*/
  cadtabla += encmain();
  cadtabla +=
    '<!--     <form name="pago" action="/netScripts/Request.aspx" method="POST" target="_self">     -->';
  cadtabla +=
    '<!--     <input type="hidden" name="APPNAME" value="Navegante7"/>     -->';
  cadtabla +=
    '<!--     <input type="hidden" name="PRGNAME" value="MergeGuardaNVR"/>     -->';
  cadtabla +=
    '<!--     <input type="hidden" name="ARGUMENTS" value="consecutivo" />     -->';
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
  cadtabla += "</div><!-- datos -->";

  /*cadtabla += '<div id="banner2">';
	cadtabla += '</div><!-- banner -->';

	cadtabla += '<div id="banner">';
	cadtabla += '</div><!-- banner -->';*/
  cadtabla += '<div class="clearfix"></div>';
  cadtabla += "</div> <!-- sidebar -->";
  cadtabla += '<div id="main">';
  cadtabla += '<div id="nav">';
  cadtabla += "<!--Aqui va todo el punto-->";
  cadtabla += "</div><!-- nav -->";
  cadtabla += '<div class="clearfix"></div>';
  cadtabla += '<div id="area">';
  cadtabla += "<!--Aqui va todo el cuadro-->";
  cadtabla += "</div><!-- area -->";

  if ((viinco == "NO" && redondo == "SI") || (sesion != 0 && viinco == "NO"))
    cadtabla += '<div id="area2" style="display:none"></div>';

  cadtabla += '<div class="acciones">';
  cadtabla += '<div class="row_buttons">';
  cadtabla += '<div id="regresar" class ="regresar">';
  cadtabla += "</div>";
  cadtabla += '<div id="continuar" class="continuar">';
  //cadtabla += '<a href="#" onClick="return adelante();"><img class = "botonNav" src="../imagenes/btn_continuar.jpg" width="100" height="20" border="0" id="Image11" onmouseover="MM_swapImage('+comsim+'Image11'+comsim+','+comsim+''+comsim+','+comsim+'../imagenes/btn_continuar_over.jpg'+comsim+',1)" onmouseout="MM_swapImgRestore()" /></a>';
  cadtabla +=
    '<a href="#" onClick="return adelante();" class="btn_next">' +
    txt.Continuar +
    " ››</a>";
  cadtabla += "</div>";
  cadtabla += "</div>";
  cadtabla += '<div class="clearfix"></div>';
  cadtabla += "</div><!-- acciones -->";
  cadtabla += '<div class="clearfix"></div>';
  //cadtabla += '<div class="ayuda">Centro de atenci&oacute;n telef&oacute;nica '+centel+'::<a href="'+urlayu+'">Ayuda</a></div>';
  cadtabla += "</div> <!-- main -->";
  cadtabla += '<div class="clearfix"></div>';
  cadtabla += piemain();
  cadtabla += "</div> <!-- contenedor -->";
  cadtabla += '<div id="counter" class="box" ></div>';
  cadtabla += '<div id="confirmacion" title="Aviso">';
  cadtabla +=
    '<p><span style="float:left; margin:0 7px 20px 0;"></span>SU SESI&#211;N EXPIRARA: &#191;Deseas agregar mas tiempo?</p>';
  cadtabla += "</div>";
  cadtabla += "<!--     </form>     -->";
  document.write(cadtabla);
}

function variaasientos(modo) {
  this.V_NumeroPasajeros = adulto + insen + menor + estudiantes + maestros;
  this.V_PasajeroActual = 0;
  this.asientosaseleccion = new Array(80);
  this.V_PasajerosSel = 0;
  this.pasajeros = new Array();
  this.modo == modo;
  cont = 0;
  for (i = 0; i < adulto; i++) this.pasajeros[cont++] = new Pasajeros("Adulto");
  for (i = 0; i < insen; i++) this.pasajeros[cont++] = new Pasajeros("INAPAM");
  for (i = 0; i < menor; i++) this.pasajeros[cont++] = new Pasajeros("Niño");
  for (i = 0; i < estudiantes; i++)
    this.pasajeros[cont++] = new Pasajeros("Estudiante");
  for (i = 0; i < maestros; i++)
    this.pasajeros[cont++] = new Pasajeros("Maestro");

  this.agregaPasajero = function (Nombre, pas) {
    if (!this.pasajeros[pas - 1])
      this.pasajeros[pas - 1] = new Pasajeros("Adulto");
    var divPas = $("<div>", { class: "item" });
    a = $("<a>", { class: "btn-asiento" });
    divPas.append(a);
    this.pasajeros[pas - 1].a1 = a;
    var idpas =
      'onChange ="javascript:this.value=this.value.toUpperCase().replace(/,/g,sustitucion);"';
    var idtipopas = "";
    var nametext = "salida-nombre1";
    if (modo == "ida") idtipopas = 'onChange ="actualizanumeropasajeros();"';
    if (redondo == "SI") {
      if (modo == "ida") {
        idpas =
          'id="pasn' +
          (pas - 1) +
          '" onkeyup ="document.getElementById(&#39;pasnR' +
          (pas - 1) +
          "&#39;).value = document.getElementById(&#39;pasn" +
          (pas - 1) +
          '&#39).value.substring(0,50).toUpperCase();" onChange ="javascript:this.value=this.value.toUpperCase().replace(/,/g,sustitucion);"';
        idtipopas =
          'id="tipopas' +
          (pas - 1) +
          '" onChange ="asiento.tipopasajerosregreso(&#34;tipopas' +
          (pas - 1) +
          "&#34;,&#34;tipopasR" +
          (pas - 1) +
          '&#34;); actualizanumeropasajeros();"';
      } else {
        idpas = 'id="pasnR' + (pas - 1) + '" disabled="disabled"';
        idtipopas = 'id="tipopasR' + (pas - 1) + '" disabled="disabled"';
        nametext = "salida-nombre2";
      }
    }
    var cad =
      '<input type="text" name="' +
      nametext +
      '" class="campo" placeholder="Nombre completo del pasajero" value="' +
      Nombre +
      '" ' +
      idpas +
      "/>" +
      "<select " +
      idtipopas +
      ' name="salida-tipopas1"><option value="AD"';
    if (this.pasajeros[pas - 1].TipoPas == "Adulto")
      cad += 'selected="selected"';
    cad += ' >Adulto</option><option value="IN" ';
    /*if(this.pasajeros[pas-1].TipoPas == 'Adulto') cad+='selected="selected"';
			cad +=' >Adulto</option><option value="IN" ';*/
    if (this.pasajeros[pas - 1].TipoPas == "INAPAM")
      cad += 'selected="selected"';
    cad += ' >INAPAM</option><option value="NI" ';
    if (this.pasajeros[pas - 1].TipoPas == "Niño") cad += 'selected="selected"';
    cad += ' >Menor</option><option value="ES" ';
    if (this.pasajeros[pas - 1].TipoPas == "Estudiante")
      cad += 'selected="selected"';
    cad += ' >Estudiante</option><option value="MA" ';
    if (this.pasajeros[pas - 1].TipoPas == "Maestro")
      cad += 'selected="selected"';
    cad +=
      " >Maestro</option></select>" +
      '<a href="#" class="btn btn-izq btn-gris" id="eliminaPas' +
      pas +
      '">Eliminar</a>'; //+
    //'</div>'
    divPas.append(cad);
    if (modo == "ida") $("#detalleAsientosida").append(divPas);
    else $("#detalleAsientosRegreso").append(divPas);
    $(".boton").button();
    $(".campo").addClass("ui-widget ui-state-default ui-corner-all");
    this.pasajeros[pas - 1].div = divPas;
    if (asiento.V_NumeroPasajeros > 8) {
      $("#agregaPasajeroida").css({ visibility: "hidden" });
      if (redondo == "SI")
        $("#agregaPasajeroRegreso").css({ visibility: "hidden" });
    }
    $("#eliminaPas" + pas).click(function (event) {
      if (asiento.V_NumeroPasajeros > 1) {
        asiento.pasajeros[pas - 1].div.remove();
        asiento.pasajeros[pas - 1].eliminado = true;
        as = asiento.pasajeros[pas - 1].asiento;
        if (asiento.pasajeros[pas - 1].asiento != 0) {
          asiento.desApartaAsiento(pas - 1, $("#ida" + as)); //<<----------------
          asiento.pasajeros[pas - 1].a.remove();
        }

        asiento.pasajeros[1].div = undefined;
        asiento.V_NumeroPasajeros--;
        temp = A_AsientosPasajeros; //<<----------------------------
        A_AsientosPasajeros = new Array();
        for (i = 0, j = 0; i < temp.length; i++) {
          if (i + 1 != pas) {
            A_AsientosPasajeros[j] = temp[i];
            j++;
          }
        }
        asiento.actualizaPasajeroActual();
        if (redondo == "SI") {
          asientoR.pasajeros[pas - 1].div.remove();
          asientoR.pasajeros[pas - 1].eliminado = true;
          as = asientoR.pasajeros[pas - 1].asiento;
          if (asientoR.pasajeros[pas - 1].asiento != 0) {
            asientoR.desApartaAsiento(pas - 1, $("#Regreso" + as)); //<<----------------
            asientoR.pasajeros[pas - 1].a.remove();
          }

          asientoR.pasajeros[1].div = undefined;
          asientoR.V_NumeroPasajeros--;
          temp = A_AsientosPasajerosRegreso; //<<----------------------------
          A_AsientosPasajerosRegreso = new Array();
          for (i = 0, j = 0; i < temp.length; i++) {
            if (i + 1 != pas) {
              A_AsientosPasajerosRegreso[j] = temp[i];
              j++;
            }
          }
          asientoR.actualizaPasajeroActual();
        }
        actualizanumeropasajeros();
        $("#agregaPasajeroida").css({ visibility: "visible" });
        if (redondo == "SI")
          $("#agregaPasajeroRegreso").css({ visibility: "visible" });
      } else alert("No es posible eliminar este pasajero");
    });
  };

  this.actualizaPasajeroActual = function () {
    i = 0;
    this.V_PasajeroActual = -1;
    for (i = 0; i < this.pasajeros.length; i++) {
      if (this.pasajeros[i].asiento == 0 && !this.pasajeros[i].eliminado) {
        this.V_PasajeroActual = i;
        break;
      }
    }
  };

  this.desApartaAsiento = function (borrar, Tipo) {
    numeroAsiento = this.pasajeros[borrar].Num;
    if (modo == "ida") {
      as = object_diagrama.Asientos[numeroAsiento].Asientos;
      object_diagrama.Asientos[numeroAsiento].Estados = 1;
    } else {
      as = object_diagramaR.Asientos[numeroAsiento].Asientos;
      object_diagramaR.Asientos[numeroAsiento].Estados = 1;
    }
    A_AsientosPasajeros[borrar] = 0; //<-------
    $(Tipo).attr("src", "../imagenes/Asiento_L.jpg");
    $(Tipo).toggleClass("seleccionado");
    this.pasajeros[borrar].a1.html("");
    this.pasajeros[borrar].a.remove();
    this.pasajeros[borrar].asiento = 0;
    this.V_PasajerosSel--;
  };

  this.tipopasajerosregreso = function (idvalor, idcopia) {
    var u = $("#" + idvalor).val();
    $("#" + idcopia + " option[value=" + u + "]").attr("selected", true);
  };

  this.limpiapasajeros = function () {
    i = 0;
    for (i = 0; i < this.pasajeros.length; i++) {
      this.pasajeros[i].asiento = 0;
    }
  };
}

function Pasajeros(tipoPas) {
  this.TipoPas = tipoPas;
  this.Nombre = "";
  this.asiento = 0;
  this.eliminado = false;
  this.Num = -1;
}

function validaasientos(viaje) {
  var V_NumP = 0;
  var bandera = 0;
  var pasajeros = adulto + insen + menor + estudiantes + maestros;
  var pasajerosNombres;
  var Nacionalidades;
  var Nacimientos = new Array();
  var DiaNacimiento;
  var MesNacimiento;
  var YearNacimiento;
  var Nacimientoscf = new Array();
  var DiaNacimientocf;
  var MesNacimientocf;
  var YearNacimientocf;
  var Genero;
  var Documento;
  var NumDocumento;
  var Vencimiento = new Array();
  var DiaNacimientofv;
  var MesNacimientofv;
  var YearNacimientofv;
  var Residencia;

  if (viaje == "ida") {
    pasajerosNombres = $("[name='pasajero']");

    if (NACFEN == 1) {
      Nacionalidades = $("[name='selectnc']");
      DiaNacimiento = $("[name='selectdiafn']");
      MesNacimiento = $("[name='selectmesfn']");
      YearNacimiento = $("[name='selectyearfn']");
      DiaNacimientocf = $("[name='selectdiafc']");
      MesNacimientocf = $("[name='selectmesfc']");
      YearNacimientocf = $("[name='selectyearfc']");
      if (ManifiestoCompleto == 1) {
        Genero = $("[name='selectng']");
        Documento = $("[name='selectdp']");
        NumDocumento = $("[name='numdoc']");
        Residencia = $("[name='selectncr']");
        DiaNacimientofv = $("[name='selectdiafv']");
        MesNacimientofv = $("[name='selectmesfv']");
        YearNacimientofv = $("[name='selectyearfv']");
      }
    }

    for (x = 0; x < pasajerosNombres.length; x++) {
      if (pasajerosNombres[x].value == "") {
        if (typeof ponError == "function")
          if (corridaIda.claveCorrida != 0) ponError("pasajero");
          else ponError("pasajero" + (x + 1));

        alert("" + msj.FaltaCaptNomPasajero + " " + (x + 1));
        return false;
      } else {
        if (
          soloLetrasOk(pasajerosNombres[x].value, "Pasajero " + (x + 1) + "") !=
          true
        )
          return false;
        else NombrePas[x] = pasajerosNombres[x].value;
      }
    }
    if (corridaIda.CadenaCorridaTKN.split("-").length > 1 && NACFEN == 1) {
      for (x = 0; x < pasajerosNombres.length; x++) {
        dia = DiaNacimiento[x].value;
        mes = MesNacimiento[x].value;
        año = YearNacimiento[x].value;
        var añonac = año;
        fecha = dia + "/" + mes + "/" + año;
        Nacimientos[x] = fecha;

        dia = DiaNacimientocf[x].value;
        mes = MesNacimientocf[x].value;
        año = YearNacimientocf[x].value;
        fecha = dia + "/" + mes + "/" + año;
        Nacimientoscf[x] = fecha;

        if (ManifiestoCompleto == 1) {
          dia = DiaNacimientofv[x].value;
          mes = MesNacimientofv[x].value;
          año = YearNacimientofv[x].value;
          fecha = dia + "/" + mes + "/" + año;
          Vencimiento[x] = fecha;
        }

        if (ManifiestoCompleto == 1) {
          if (NumDocumento[x].value == "") {
            if (typeof ponError == "function")
              if (corridaIda.claveCorrida != 0) ponError("numdoc");
              else ponError("numdoc" + (x + 1));
            alert("" + msj.FaltaNumDocumento + " " + (x + 1));
            return false;
          } else {
            if (!alphanumeric(NumDocumento[x].value)) {
              if (typeof ponError == "function")
                if (corridaIda.claveCorrida != 0) ponError("numdoc");
                else ponError("numdoc" + (x + 1));
              alert("" + msj.ErrorNumDocumento + " " + (x + 1));
              return false;
            }
          }
          if (
            validarFormatoFecha(Vencimiento[x]) != true ||
            existeFecha(Vencimiento[x]) != true
          ) {
            alert("" + msj.ElegirFechaValida + " " + (x + 1));
            return false;
          }
          if (!fechaMayorOIgualQue(Vencimiento[x], fechasal)) {
            alert("" + msj.FechaDocVencida + " " + (x + 1));
            return false;
          }
        }
        if (Nacimientos[x] != Nacimientoscf[x]) {
          alert("" + msj.FechasDistintas + " " + (x + 1));
          return false;
        }

        var dt = new Date();
        //dt.setMonth(dt.getMonth()-1);
        dt.setDate(dt.getDate() - 30);
        var yyyy = dt.getFullYear().toString();
        var mm = (dt.getMonth() + 1).toString(); // getMonth() is zero-based
        var dd = dt.getDate().toString();
        var fechatemp =
          (dd[1] ? dd : "0" + dd[0]) +
          "/" +
          (mm[1] ? mm : "0" + mm[0]) +
          "/" +
          yyyy;

        yyyy = dt.getFullYear() - 90;

        if (
          validarFormatoFecha(Nacimientos[x]) != true ||
          existeFecha(Nacimientos[x]) != true ||
          añonac < yyyy
        ) {
          alert("" + msj.ElegirFechaValida + " " + (x + 1));
          return false;
        }

        if (fechaMayorOIgualQue(Nacimientos[x], fechatemp)) {
          alert("" + msj.FechaNacMes + " " + (x + 1));
          return false;
        } else {
          ANacionalidad[x] = Nacionalidades[x].value;
          AFechaNacimiento[x] = Nacimientos[x];
          if (ManifiestoCompleto == 1) {
            AGenero[x] = Genero[x].value;
            ADocumento[x] = Documento[x].value;
            ADocumento[x] = ADocumento[x].substring(1, 5);
            ANumDocumento[x] = NumDocumento[x].value;
            AFechaVencimiento[x] = Vencimiento[x];
            AResidencia[x] = Residencia[x].value;
          }
        }
      }
    }
  }
  if (viaje == "ida" || (viinas == "NO" && redondo == "SI")) {
    if (asiento.V_PasajerosSel == pasajeros) bandera = 1;
    else {
      V_NumP = pasajeros - asiento.V_PasajerosSel;
      alert("" + msj.FaltaSeleccionar + " " + V_NumP + " " + msj.AsientosdeIda);
      return false;
    }
  }
  if (viaje == "regreso" || (viinas == "NO" && redondo == "SI")) {
    if (asientoR.V_PasajerosSel == pasajeros) bandera = 1;
    else {
      V_NumP = pasajeros - asientoR.V_PasajerosSel;
      alert(
        "" + msj.FaltaSeleccionar + " " + V_NumP + " " + msj.AsientosdeRegreso
      );
      return false;
    }
  }

  if (bandera == 1) return "SI";
  else return false;
}

/* ahernandez - 18 01 2013 - ##34579## - Cuando ya existe el elemento "timer", primero se elimina */
function generareloj() {
  if (document.getElementById("timer") != null) {
    $("#timer").remove();
  }

  /*if (paso>=1) {
	$('#area').before('<div id="timer">'+
	'<img src="../imagenes/reloj1.gif" width="35" height="35" border="0" />'+
		'<div id="textos_complementarios_espera">TIEMPO RESTANTE:</div>'+
	'<div class="numbers" id="reloj">00</div>'+
	'<div id="textos_complementarios2_espera">Para completar este paso</div></div>');
	}


if(paso==7) $('#timer').css({top: '70px'});
*/
}

function cargaOrigenesANT() {
  var cadena = "";
  //var v_URL = "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=OrigenDestino";
  http = CreateRequest();
  http.open(
    "GET",
    "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=OrigenDestino&ARGUMENTS=-A,-AA",
    true
  );

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      if (forma1 == "H")
        cadena =
          '<label for="textfield" class="OrigenDestino">Origen </label><BR><select size="1"  class="origen"  name="Origen" id="Origen" onChange="cargaDestinosANT(this)" style="width:130px;"> <option value="ORIGEN">ORIGEN</option>' +
          http.responseText +
          "</select>";
      else
        cadena =
          '<select size="1"  class="origen" name="Origen" id="Origen" onChange="cargaDestinosANT(this)" style="width:200px;"> <option value="ORIGEN">' +
          txt.OrigenMayus +
          "</option>" +
          http.responseText +
          "</select>";

      if (sesion == 0) {
        document.getElementById("tdOrigen").innerHTML = cadena;
      } else {
        $("#tdOrigenAge").html(
          '<select id="tdOrigen"  name="tdOrigen" onChange="cargaDestinosANT(this)" style="width:200px;"> <option value="Seleccione">' +
            txt.OrigenMayus +
            "</option>" +
            http.responseText +
            "</select>"
        );
      }
    }
  };
  http.send(null);
}

function cargaOrigenesMOCKUP() {
  var cadena = "";
  http = CreateRequest();
  http.open(
    "GET",
    "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=OrigenDestino",
    true
  );
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      var cadorg = http.responseText;
      cadena =
        '<select size="1" style="width:200px" name="Origen" id="Origen" data-placeholder="' +
        txt.DeDondeSales +
        '"><option value=""></option>' +
        cadorg +
        "</select>";
      document.getElementById("tdOrigen").innerHTML = cadena;
      //$("#odm_ubicacion").attr("placeholder","¿De dónde sales?");
      var myOpts = document.getElementById("Origen").options;
      document.getElementById("Origen").options;
      var n = myOpts.length;
      //			alert("elementos     "+n);
      for (var i = 0; i < n; i++) {
        orgT.push({
          label: myOpts[i].text,
          value: myOpts[i].text,
          id: myOpts[i].value,
        });
      }
      ComvierteCamelCase("Origen");
      $("#Origen")
        .chosen()
        .on("change", function () {
          $("#Origen option[value=" + this.value + "]").attr("selected", true);
          $("#tdDestino").html(
            '<select name="Destino" id="Destino" style="width:200px;" data-placeholder="' +
              txt.Espera +
              '"></select>'
          );
          $("#Destino").chosen();
          cargaDestinosMOCKUP(this.value);
        });
      //			alert("fin");
    }
  };
  http.send(null);
}

function cargaDestinosMOCKUP(ori) {
  var cadena = "";
  http = CreateRequest();
  http.open(
    "GET",
    "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=OrigenDestino&ARGUMENTS=-A" +
      ori,
    true
  );
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      cadena =
        '<select size="1" name="Destino" id="Destino" style="width:200px" data-placeholder="' +
        txt.ADondeVas +
        '"> <option value=""></option>' +
        http.responseText +
        "</select>";
      document.getElementById("tdDestino").innerHTML = cadena;

      var myOpts = document.getElementById("Destino").options;
      var n = myOpts.length;

      desT.length = 0;
      for (var i = 0; i < n; i++) {
        desT.push({
          label: myOpts[i].text,
          value: myOpts[i].text,
          id: myOpts[i].value,
        });
      }
      //$("#odm_destino").attr("placeholder","¿A dónde vas?");
      ComvierteCamelCase("Destino");
      $("#Destino")
        .chosen()
        .on("change", function () {
          $("#Destino option[value=" + this.value + "]").attr("selected", true);
        });
    }
  };
  http.send(null);
}

function cargaDestinosANT(par) {
  var cadena = "";
  //if(document.form.Origen.value != 'ORIGEN'){
  if (sesion == 0)
    document.getElementById("tdDestino").innerHTML =
      '<select class="ancho1" name="Destino" id="Destino" style="width:200px;"><option value=-1>' +
      txt.cargandoorides +
      "</option>";
  else
    $("#tdDestinoAge").html(
      '<select  name="tdDestino" id="tdDestino"><option value=-1>' +
        txt.cargandoorides +
        "</option></select>"
    );
  //else document.getElementById("tdDestinoAge").innerHTML ='<select  name="tdDestino" id="tdDestino"><option value=-1>Cargando...</option></select>';
  http = CreateRequest();
  http.open(
    "GET",
    "/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=OrigenDestino&ARGUMENTS=-A" +
      par.options[par.selectedIndex].value +
      ",-AA",
    true
  );
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      var res = http.responseText.replace(/por/gi, txt.Por);
      if (forma1 == "H")
        var cadena =
          '<label for="textfield2" class="OrigenDestino">Destino</label><BR><select  size="1" class="origen" name="Destino" id="Destino" style="width:200px;">' +
          res +
          "</select>";
      else
        cadena =
          '<select  size="1" class="origen" name="Destino" id="Destino">' +
          res +
          "</select>";
      if (sesion == 0) document.getElementById("tdDestino").innerHTML = cadena;
      else
        $("#tdDestinoAge").html(
          '<select  name="tdDestino" id="tdDestino" style="width:200px;">' +
            res +
            "</select>"
        );
      //else document.getElementById("tdDestinoAge").innerHTML ='<select  name="tdDestino" id="tdDestino"><option value=Seleccione>DESTINO</option>' + http.responseText + '</select>' ;
    }

    sortSelect(document.getElementById("tdDestino"));
    var x = document.getElementById("tdDestino");
    var option = document.createElement("option");
    option.text = txt.DestinoMayus;
    option.disabled = true;
    x.add(option, x[0]);
    document.getElementById("tdDestino").selectedIndex = "0";
  };

  http.send(null);
}

function sortSelect(selElem) {
  var tmpAry = new Array();
  for (var i = 0; i < selElem.options.length; i++) {
    tmpAry[i] = new Array();
    tmpAry[i][0] = selElem.options[i].text;
    tmpAry[i][1] = selElem.options[i].value;
  }
  tmpAry.sort();
  while (selElem.options.length > 0) {
    selElem.options[0] = null;
  }
  for (var i = 0; i < tmpAry.length; i++) {
    var op = new Option(tmpAry[i][0], tmpAry[i][1]);
    selElem.options[i] = op;
  }
  return;
}

function quitaError(id) {
  $("#" + id).css({ border: "1px solid #D3D3D3" });
}

function ponError(id) {
  $("#" + id).css({ border: "3px solid #f40000" });
  $("#" + id).focus();
}

function habilitarArea(area) {
  $("dt").removeClass("textos_resumen_current");
  $("#" + area).addClass("textos_resumen_current");
}

function validarcoma(e) {
  // 1
}

function encmain() {
  vrcad = "";
  //if (sesion !=0 )
  if (urlenc != "" && urlenc.substring(2, 5) != "$MG") {
    vrcad =
      '<iframe src="' +
      urlenc +
      txt.IdiomaEncPie +
      '" id="encmain" scrolling="no"></iframe>';
  } else {
    vrcad += '<div id="header">';
    vrcad +=
      '<div id="logos" class="rediseno"> <a href="' +
      urlprin +
      '" target="_self">';
    vrcad +=
      '<img src="../imagenes/logo_main1.png" alt="logo_main1" border="0"/>';
    vrcad +=
      '<img class="lalinea" src="../imagenes/logo_main2.png" alt="logo_main2" border="0"/></a>';
    vrcad += "</div> <!-- logos -->";
    vrcad += "</div> <!-- header -->";
  }
  /*vrcad += '<div id="header">';
	vrcad='<div class="header"><div class="col-md-3"><a href="#"><img class="logo" src="images/logo-omnibus-mexicanos.png"></a></div>';
	vrcad+='<div class="col-md-9"><div class="row"><div class="telefono"><p><span>Lada sin costo</span> 01 (800) 021 4000</p></div></div>';
	vrcad+='<div class="row"><div class="follow"><ul><li class="lenguaje"><a href="#"><img src="images/flag-usa.png"> Ingles</a></li>';
	vrcad+='<li class="ayuda"><a href="#"><i class="fa fa-question-circle"></i> Ayuda</a></li>';
	vrcad+='<li class="siguenos">Síguenos<a href="#"><i class="fa fa-facebook-official facebook"></i></a><a href="#">'
			+'<i class="fa fa-twitter-square twitter"></i></a></li></ul></div></div></div></div><!--header-->';
	vrcad+='<nav id="main"><div class="col-md-3 col-sm-3 col-xs-6 menu-item-cont"><div class="menu-item item-one"><a href="#">Inicio</a></div></div><!--col-md-3-->';
	vrcad+='<div class="col-md-3 col-sm-3 col-xs-6 menu-item-cont"><div class="menu-item item-two"><a href="#">Nuestros Destinos</a></div></div><!--col-md-3-->';
	vrcad+='<div class="col-md-3 col-sm-3 col-xs-6 menu-item-cont"><div class="menu-item item-three"><a href="#">Puntos de venta</a></div></div><!--col-md-3-->';
	vrcad+='<div class="col-md-3 col-sm-3 col-xs-6 menu-item-cont"><div class="menu-item item-four"><a href="#">Autobuses</a></div></div><!--col-md-3-->';
	vrcad+='</nav><!--main-->';
	vrcad += '</div> <!-- header -->';*/
  return vrcad;
}
function piemain() {
  vrcad = "";
  //if(sesion == 0)
  if (urlpie != "" && urlpie.substring(2, 5) != "$MG")
    vrcad =
      '<iframe src="' +
      urlpie +
      txt.IdiomaEncPie +
      '" id="piemain" scrolling="no"></iframe>';
  return vrcad;
}
function ComvierteCamelCase(elem) {
  var array = new Array();

  $("#" + elem + " option").each(function (i) {
    array = $(this).text().toLowerCase().split(" ");
    for (var i = 0; i < array.length; i++) {
      array[i] =
        array[i].substring(0, 1).toUpperCase() +
        array[i].substring(1, array[i].length);
    }
    var text = "";
    for (var i = 0; i < array.length; i++) {
      text += array[i] + " ";
    }

    $(this).text(text.substring(0, text.length - 1));
  });
}

function fechaenletra(d) {
  var fecha = "";
  var parts = d.split("/");

  var dt = new Date(
    parseInt(parts[2], 10),
    parseInt(parts[1], 10) - 1,
    parseInt(parts[0], 10)
  );

  switch (dt.getDay()) {
    case 1:
      fecha += msj.Lunes;
      break;
    case 2:
      fecha += msj.Martes;
      break;
    case 3:
      fecha += msj.Miercoles;
      break;
    case 4:
      fecha += msj.Jueves;
      break;
    case 5:
      fecha += msj.Viernes;
      break;
    case 6:
      fecha += msj.Sabado;
      break;
    case 0:
      fecha += msj.Domingo;
      break;
    default:
      fecha += " ";
  }

  fecha += " " + parts[0] + " ";

  switch (parseInt(parts[1], 10) - 1) {
    case 0:
      fecha += msj.Enero;
      break;
    case 1:
      fecha += msj.Febrero;
      break;
    case 2:
      fecha += msj.Marzo;
      break;
    case 3:
      fecha += msj.Abril;
      break;
    case 4:
      fecha += msj.Mayo;
      break;
    case 5:
      fecha += msj.Junio;
      break;
    case 6:
      fecha += msj.Julio;
      break;
    case 7:
      fecha += msj.Agosto;
      break;
    case 8:
      fecha += msj.Septiembre;
      break;
    case 9:
      fecha += msj.Octubre;
      break;
    case 10:
      fecha += msj.Noviembre;
      break;
    case 11:
      fecha += msj.Diciembre;
      break;
    default:
      fecha += " ";
  }

  fecha += " " + parts[2];

  if (!validarFormatoFecha(fecha)) {
    fecha = "";
  }

  return fecha;
}

function cintaOrigen(x, modo) {
  //alert('cinta origen:'+x+modo);
  d = "";
  if ((x == 4 || x == 1 || x == 3) && modo == "ida") {
    d +=
      '<div class="col-md-12"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
      oficinaori +
      " - " +
      oficinareg +
      "</li>";
    d +=
      '<li class="date">' + fechaenletra(fechasal) + "</li></ul></div></div>";
  }
  if ((x != 4 || x == 1 || x == 3) && modo == "regreso") {
    d +=
      '<div class="col-md-12"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
      oficinareg +
      " - " +
      oficinaori +
      "</li>";
    d +=
      '<li class="date">' + fechaenletra(fechareg) + "</li></ul></div></div>";
  }

  if (x > 6) d = " ";
  if (x == 8) {
    d += "<h1>" + txt.PasoFinal + "</h1>";
    d +=
      '<div class="col-md-12"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
      oficinaori +
      " - " +
      oficinareg +
      "</li>";
    d +=
      '<li class="date">' + fechaenletra(fechasal) + "</li></ul></div></div>";
    if (redondo == "SI") {
      d +=
        '<div class="col-md-12"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
        oficinareg +
        " - " +
        oficinaori +
        "</li>";
      d +=
        '<li class="date">' + fechaenletra(fechareg) + "</li></ul></div></div>";
    }
  }
  return d;
}

function pagoBoa() {
  var cadTabla;
  ocultamiestrab(true);
  cadTabla = '<div class="row"></div>';
  cadTabla += '<div><table style="width:100%; height:800px"><tr><td>';
  cadTabla += formboa;
  cadTabla +=
    '<iframe id="myFrame" name="myFrame" style="width:100%; height:800px"></iframe>';
  cadTabla += "</td></tr><table></div>";
  $("#area").html(cadTabla);
  document.forms["pagobanco"].submit();
  //$('<iframe />', {name: 'myframe', id:'myframe',src:"", width:"100%",height:"500px"}).appendTo('#area');
}

function validarFormatoFecha(campo) {
  var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
  if (campo.match(RegExPattern) && campo != "") {
    return true;
  } else {
    return false;
  }
}

function existeFecha(fecha) {
  var fechaf = fecha.split("/");
  var day = fechaf[0];
  var month = fechaf[1];
  var year = fechaf[2];
  var date = new Date(year, month, "0");
  if (day - 0 > date.getDate() - 0) {
    return false;
  }
  return true;
}

function limpiaVariables() {
  pasajeros = 0;
  NACFEN = 0;
  tipoPas = [];
  NombrePas = [];
  ANacionalidad = [];
  AFechaNacimiento = [];
  tipoPasInt = [];
  tipoPasExtAbie = [];
  asientoR.V_NumeroPasajeros = 0;
  asientoR.V_PasajeroActual = 0;
  asientoR.V_PasajerosSel = 0;
  asiento.V_NumeroPasajeros = 0;
  asiento.V_PasajeroActual = 0;
  asiento.V_PasajerosSel = 0;
  A_AsientosPasajeros = [];
  A_AsientosPasajerosRegreso = [];
  corridaIda = 0;
  corridaRegeso = 0;
  TotalPrepago = 0;
  AplicaPrepago = 0;

  generaNuevaSesion();
  if (esint != "SI") {
    NomPasajeros = "";
    mintprepago = 0;
  }
}

function alphanumeric(val) {
  var regex = /^[0-9A-Za-z]+$/;
  if (regex.test(val)) {
    return true;
  } else {
    return false;
  }
}

function calendario(nombre, cont) {
  cadena =
    '<select name="selectdia' +
    nombre +
    '" id="selectdia' +
    nombre +
    cont +
    '" >' +
    '<option value="01">01</option>' +
    '<option value="02">02</option>' +
    '<option value="03">03</option>' +
    '<option value="04">04</option>' +
    '<option value="05">05</option>' +
    '<option value="06">06</option>' +
    '<option value="07">07</option>' +
    '<option value="08">08</option>' +
    '<option value="09">09</option>' +
    '<option value="10">10</option>' +
    '<option value="11">11</option>' +
    '<option value="12">12</option>' +
    '<option value="13">13</option>' +
    '<option value="14">14</option>' +
    '<option value="15">15</option>' +
    '<option value="16">16</option>' +
    '<option value="17">17</option>' +
    '<option value="18">18</option>' +
    '<option value="19">19</option>' +
    '<option value="20">20</option>' +
    '<option value="21">21</option>' +
    '<option value="22">22</option>' +
    '<option value="23">23</option>' +
    '<option value="24">24</option>' +
    '<option value="25">25</option>' +
    '<option value="26">26</option>' +
    '<option value="27">27</option>' +
    '<option value="28">28</option>' +
    '<option value="29">29</option>' +
    '<option value="30">30</option>' +
    '<option value="31">31</option>' +
    "</select>&nbsp;";

  cadena +=
    '<select name="selectmes' +
    nombre +
    '" id="selectmes' +
    nombre +
    cont +
    '">' +
    '<option value="01">01</option>' +
    '<option value="02">02</option>' +
    '<option value="03">03</option>' +
    '<option value="04">04</option>' +
    '<option value="05">05</option>' +
    '<option value="06">06</option>' +
    '<option value="07">07</option>' +
    '<option value="08">08</option>' +
    '<option value="09">09</option>' +
    '<option value="10">10</option>' +
    '<option value="11">11</option>' +
    '<option value="12">12</option>' +
    "</select>&nbsp;";

  cadena +=
    '<input name="selectyear' +
    nombre +
    '" type="text" id="selectyear' +
    nombre +
    cont +
    '" size="4" maxlength="4" onKeyPress="return numbersonly(this, event)">';

  return cadena;
}

function numbersonly(myfield, e, dec) {
  var key;
  var keychar;
  if (window.event) key = window.event.keyCode;
  else if (e) key = e.which;
  else return true;
  keychar = String.fromCharCode(key);
  // control keys
  if (key == null || key == 0 || key == 8 || key == 9 || key == 13 || key == 27)
    return true;
  // numbers
  else if ("0123456789".indexOf(keychar) > -1) return true;
  // decimal point jump
  else if (dec && keychar == ".") {
    myfield.form.elements[dec].focus();
    return false;
  } else return false;
}

function verificaVencimiento(a, b) {
  var DocumentoProvisional;
  DocumentoProvisional = $("[name='selectdp']");
  var Vigencia;
  Vigencia = DocumentoProvisional[b - 1].value;
  Vigencia = Vigencia.substring(0, 1);
  if (Vigencia == 1) {
    document.getElementById("selectdiafv" + b).value = "31";
    document.getElementById("selectmesfv" + b).value = "12";
    document.getElementById("selectyearfv" + b).value = "2999";
    document.getElementById("selectdiafv" + b).style.visibility = "hidden";
    document.getElementById("selectmesfv" + b).style.visibility = "hidden";
    document.getElementById("selectyearfv" + b).style.visibility = "hidden";
    document.getElementById("titulofv" + b).style.visibility = "hidden";
  } else {
    document.getElementById("selectdiafv" + b).style.visibility = "visible";
    document.getElementById("selectmesfv" + b).style.visibility = "visible";
    document.getElementById("selectyearfv" + b).style.visibility = "visible";
    document.getElementById("titulofv" + b).style.visibility = "visible";
  }
}

function cambiaFormatoHora(original1) {
  cadena = "";
  aux = "";

  if (original1.length < 5) {
    return original1;
  }

  if (parseInt(original1.substring(0, 2)) < 12) {
    cadena = original1 + "AM";
  } else if (parseInt(original1.substring(0, 2)) == 12) {
    cadena = original1 + "PM";
  } else {
    aux = parseInt(original1.substring(0, 2)) - 12;
    aux1 = "" + aux;
    if (aux1.length == 1) aux1 = "0" + aux1;
    cadena = "" + aux1 + original1.substring(2, 5) + "PM";
  }
  return cadena;
}

function generaCorridasConexion(corridas, modo, objetoruta) {
  var i = 0;
  var clase, cadTabla;
  var muestratiposervicio = 0;
  if (
    viajeredondo == "V2" &&
    modo == "ida" &&
    typeof corridas.Error != "undefined"
  ) {
    cadTabla +=
      "<div>&nbsp</div><tbody><tr><td>" + msj.NoHayTarifas + "</td></tr>";
  } else {
    if (esint == "SI" && opeint != "" && claus != "" && mint != 0)
      var inter =
        '<table class="aviso" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" class="color2">' +
        txt.IntercambioLabel +
        '</td></tr><tr><td align="center" class="blue">' +
        opeint +
        "</td></tr></table>";
    else var inter = "";
    var origenesaux = corridas[0].OficinasOrigenTKN;
    var destinosaux = corridas[0].OficinasDestinoTKN;
    var res1 = origenesaux.split("-");
    var res2 = destinosaux.split("-");

    cadTabla = cintaOrigen(1, modo);

    cadTabla += "<div class='head'><!--img width='690' height='57' ";
    cadTabla += " src='../imagenes/titulos-horario-salida.jpg'--> </div>";
    cadTabla += "<div class='col-md-12'><div class='table_process'>";
    cadTabla += "<div class='table-responsive'>" + inter;

    if (modo != "ida") {
      cadTabla +=
        '<div class="col-md-12"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
        opcionConexion.Destino +
        " - " +
        opcionConexion.Origen +
        "</li></div></div>";

      //
      cadTabla +=
        "<div class='col-md-12'><table class='omex' cellspacing='0' width='100%'>";
      cadTabla +=
        "<tr class='tablagris'><TH width='20%' > <FONT >" +
        txt.Servicio +
        "</FONT> </TH>";
      cadTabla +=
        "<TH width='20%'> <FONT  >Clave Ruta</FONT>" + txt.ClaveRuta + "</TH>";
      cadTabla +=
        "<TH width='20%' > <FONT  >" + txt.DescripccioRuta + "</FONT> </TH>";
      cadTabla +=
        "<TH width='20%' > <FONT  >" + txt.TarifaRuta + "</FONT> </TH>";
      cadTabla +=
        "<TH width='20%' > <FONT  >" + txt.Seleccionar + "</FONT> </TH>";
      cadTabla += "</tr>";

      cadTabla += "<tr>";
      cadTabla += "<td>" + opcionConexion.Servicio + "</td>";
      cadTabla += "<td>" + opcionConexion.ClaveRuta + "</td>";
      cadTabla += "<td>" + opcionConexion.DescripcionRuta + "</td>";
      cadTabla += "<td>" + opcionConexion.TarifaRuta + "</td>";
      cadTabla +=
        "<td><img align='center' src='../imagenes/CheckBoxSelect.gif' alt='Seleccione' width='29' height='26'/></td>";
      cadTabla += "</tr>";

      cadTabla += "</table><div class='col-md-12'>";
    }

    cadTabla += "<table class='omex' cellspacing='0' width='100%'>";

    cadTabla +=
      '<div class="col-md-12"><div class="header_process right"><ul class="trip_cost_date"></div></div>';
    cadTabla +=
      '<div class="col-md-12"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
      res1[0] +
      " - " +
      res2[1] +
      "</li></div></div>";

    // ahernandez - 04 12 2013
    var toquens = new Array();
    toquens = opeint.split(",");

    if (
      (esint != "SI" && corridas[0].claveCorrida != "0") ||
      (esint == "SI" &&
        corridas[0].claveCorrida != "0" &&
        numPasInt == adulto + insen + estudiantes + maestros + menor)
    ) {
      muestratiposervicio = 1;
      cadTabla += "<thead>";
      cadTabla += "<tr class='tablagris'>";

      for (var j = 0; j < columnas.length; j++) {
        if (
          columnas[j].nombreColumna != "Itinerario" ||
          (columnas[j].nombreColumna == "Itinerario" &&
            corridas[0].muestraItinerario == 1)
        ) {
          cadTabla += "<th";
          if (columnas[j].width)
            cadTabla += " width='" + columnas[j].width + "'>";
          else cadTabla += ">";
          cadTabla += columnas[j].nombreColumna + "</th>";

          //alert(columnas[j].nombreColumna);
        }
      }
      cadTabla += "</tr>";
      cadTabla += "</thead>";
      cadTabla += "<tbody>";
      //cadTabla+='<tr><td width="85" colspan="8"><img width="680" height="15" style="margin-top:5px;" src="../imagenes/separador_200.png"></td></tr>'
      do {
        if (viinco == "NO" && redondo == "SI" && modo != "ida")
          cadTabla += " <tr id=corr" + (i + 500) + " class=''>";
        else cadTabla += " <tr id=corr" + i + " class=''>";
        for (var j = 0; j < columnas.length; j++) {
          if (
            columnas[j].nombreColumna != "Itinerario" ||
            (columnas[j].nombreColumna == "Itinerario" &&
              corridas[0].muestraItinerario == 1)
          ) {
            cadTabla += "<td>";
            if (columnas[j].items) {
              for (var k = 0; k < columnas[j].items.length; k++) {
                cadTabla += pintaColumna(
                  i,
                  columnas[j].items[k].id,
                  modo,
                  corridas
                );
                //alert(columnas[j].items[k].id);
              }
            } else cadTabla += pintaColumna(i, columnas[j].id, modo, corridas);
            cadTabla += "</td>";
          }
        }
        cadTabla += "</tr>";
        i++;
      } while (corridas[i]);
    } else if (
      esint == "SI" &&
      numPasInt != adulto + insen + estudiantes + maestros + menor
    )
      cadTabla += "<tr><td>" + txt.IntercambioError + "</td></tr>";
    else
      cadTabla += "<div>&nbsp</div><tr><td>" + msj.NoHayCorridas + "</td></tr>";
  }
  cadTabla += "</tbody> ";
  cadTabla += "</table> ";
  cadTabla += "</div>";
  cadTabla += "</div>";
  cadTabla += "</div>";

  if (modo == "ida") {
    cadTabla +=
      '<div class="col-md-12"><div class="header_process right"><ul class="trip_cost_date"><li class="trip">' +
      objetoruta[0].Origen +
      " - " +
      objetoruta[0].Destino +
      "</li></div></div>";

    //
    cadTabla +=
      "<div class='col-md-12'><table class='omex' cellspacing='0' width='100%'>";
    cadTabla +=
      "<tr class='tablagris'><TH width='20%' > <FONT >" +
      txt.Servicio +
      "</FONT> </TH>";
    cadTabla +=
      "<TH width='20%'> <FONT  >Clave Ruta</FONT>" + txt.ClaveRuta + "</TH>";
    cadTabla +=
      "<TH width='20%' > <FONT  >" + txt.DescripccioRuta + "</FONT> </TH>";
    cadTabla += "<TH width='20%' > <FONT  >" + txt.TarifaRuta + "</FONT> </TH>";
    cadTabla +=
      "<TH width='20%' > <FONT  >" + txt.Seleccionar + "</FONT> </TH>";
    cadTabla += "</tr>";
    for (i = 0; i < objetoruta.length - 1; i++) {
      cadTabla += "<tr>";
      cadTabla += "<td>" + objetoruta[i].Servicio + "</td>";
      cadTabla += "<td>" + objetoruta[i].ClaveRuta + "</td>";
      cadTabla += "<td>" + objetoruta[i].DescripcionRuta + "</td>";
      cadTabla += "<td>" + objetoruta[i].TarifaRuta + "</td>";
      cadTabla +=
        "<td><img align='center' src='../imagenes/CheckBox.gif' alt='Seleccione' width='29' height='26' id='Imagec" +
        i +
        "'    onClick='return CCida(" +
        i +
        ");'  /></td>";
      cadTabla += "</tr>";
    }
    cadTabla += "</table><div class='col-md-12'>";
  }
  //

  if (muestratiposervicio == 1) {
    cadTabla += '<div class="col-md-12"><i class="fa fa-info-circle"></i>';
    cadTabla +=
      "<a class='iframe' href='../imagenes/" +
      txt.pdfTiposServicio +
      "#zoom=100'>&nbsp;" +
      txt.ConsultaTipoS +
      " </a></div>";
  }

  $("#area").html(cadTabla);
  ocultamiestrab(true);
}
