//Idioma Espa?ol - Textos y Mensajes

var ColumnasES = eval( [
			{"id": "fechaSalida","nombreColumna":"Salida","width":"85"},
			{"id": "horaSalida","nombreColumna":"Hora","width":"85"},
			{"id": "fechaLlegada","nombreColumna":"Llegada","width":"85"},
			{"id": "horaLlegada","nombreColumna":"Hora","width":"85"},
			{"id": "claseDeServicio","nombreColumna":"Servicio","width":"85"},
			//{"id": "linea","nombreColumna":"L&iacute;nea","width":"85"},
			{"id": "tarifa","nombreColumna":"Precio","width":"85"},
			{"id": "tarifapromo","nombreColumna":"Precio <br> Internet","width":"85"},
			{"id": "itinerario","nombreColumna":"Itinerario","width":"90"},
			{"id": "selecciona","nombreColumna":"Seleccionar","width":"90"}
			]);
			

var txtES = {  // Textos "duros" en el codigo HTML
'SALIDA':'Salida',
'REGRESO':'Regreso','REGISTRO':'Registro',
'ASIENTOS':'Asientos',
'RESUMEN':'Resumen',
'PAGO':'Pago',
'CONFIRMACION':'Confirmaci&oacute;n',
'fechaSalida':'D&iacute;a de salida',
'horaSalida':'Hora de Salida',
'fechaLlegada':'Fecha de llegada',
'horaLlegada':'Hora de llegada',
'fechaRegreso':'D&iacute;a de regreso',
'Horario':'Horario',
'Servicio':'Servicio',
'Linea':'Linea',
'Costo':'Costo',
'Itinerario':'Itinerario',
'Selecciona':'Selecciona',
'NoHaySalidasParaCriterio':'No hay disponibilidad para esta solicitud, int?ntelo nuevamente con otra fecha o tipo de pasajero...',
'VerCostos':'ver costos',
'EstaIntercambiandoNumOper':'Est?s intercambiando n?mero(s) de operaci?n',
'CostoTotal':'COSTO TOTAL',
'CamposRequeridos':'REQUIERE TEXTO',
'FormadePago':'Forma de Pago',
'Efectivo':'Efectivo',
'PagoconTarjeta':'Pago con Tarjeta',
'Domicilio':'Domicilio',
'Ciudad':'Ciudad',
'CodPostal':'C&oacute;digo postal',
'CodigoPostal':'Codigo postal',
'RSCalle':'Calle',
'RSNumExt':'N?mero   <br>Exterior',
'RSNumInt':'N?mero   Interior',
'RSDelMpio':'Delegaci?n / Municipio',
'RSEstado':'Estado',
'RSNombre':'Nombre',
'RSApPaterno':'Apellido Paterno',
'RSApMaterno':'Apellido Materno',
//'RSSeparador':'?',
'RSSeparador':String.fromCharCode(187),
//'RSSeparador2':'|',
'RSSeparador2':String.fromCharCode(124),
'Pais':'Pa&iacute;s',
'Estado':'Estado',
'TelCasaOfic':'Tel&eacute;fono (Casa/Oficina)',
'CorreoElectronico':'Correo electrónico',
'IncluyaLada':'incluya la clave de larga distancia',
'VerTermCondic':'Leer t?rminos, condiciones',
'FechadeRegreso':'FECHA DE REGRESO',
'RegistrodePasajeros':'REGISTRO DE PASAJEROS',
'Utiliza1erNomParaPasajeros':'Utilizar el primer nombre para todos los pasajeros',
'Adulto':'Adulto',
'Menor':'Menor',
'Senectud':'Senectud',
'Estudiante':'Estudiante',
'Profesor':'Profesor',
'AdultoMayus':'ADULTO',
'MenorMayus':'MENOR',
'InsenMayus':'SENECTUD',
'EstudianteMayus':'ESTUDIANTE',
'MaestroMayus':'MAESTRO',
'VerItinerario':'Ver',
'Acepto':'Acepto',
'Terminos':'t&eacute;rminos y condiciones',
'PagoPrecio':'de pago y precio.',
'AceptoTerminosCond':'Acepto t?rminos y condiciones de pago y precio.',
'CaptureTxtComoEnImg':'Escribe la palabra de la imagen',
'RefrescarImagen':'Refrescar imagen',
'Dia':'D&iacute;a de Salida',
'Hora':'Hora de Salida',
'Origen':'Origen',
'Destino':'Destino',
'OrigenMayus':'ORIGEN',
'DestinoMayus':'DESTINO',
'DatosDelPasajero':'DATOS DEL PASAJERO',
'DatosDel':'DATOS DEL ',
'Pasajero':'PASAJERO',
'PasajeroMin':'Pasajero',
'Asiento':'Asiento',
'AsientoMayus':'ASIENTO',
'ViajedeRegreso':'VIAJE DE REGRESO',
'ViajedeSalida':'VIAJE DE SALIDA', 
'AsientosSalida':'Asientos de salida',
'AsientosRegreso':'Asientos de regreso',
'SelecAsientoSalidaSigPasaj':'Seleccione el asiento de salida para el siguiente pasajero:',
'SelecAsientoRegresoSigPasaj':'Seleccione el asiento de regreso para el siguiente pasajero:',
'AsientoOcupado':'Asiento ocupado',
'AsientoDisponible':'Asiento disponible',
'AsientoSeleccionado':'Asiento seleccionado',
'AsientoDiscapacidad':'Para usuarios con capacidades diferentes (No reclinable)',
'Aviso':'Aviso',
'ViajeSencillo':'Viaje Sencillo',
'ViajeRedondo':'Viaje Redondo',
'ClasedeServicio':'Clase de servicio',
'NumOperacion':'N&uacute;mero de operaci&oacute;n',
'NIT':'NIT',
'ContrasenaActual':'Contrase&ntilde;a actual',
'ContrasenaNueva':'Contrase&ntilde;a nueva',
'ConfirmarContrasena':'Confirmar Contrase&ntilde;a',
'FechaInicial':'FECHA INICIAL',
'FechaFinal':'FECHA FINAL',
'SaldoaDepositar':'SALDO A DEPOSITAR',
'MontoenFicha':'MONTO EN FICHA',
'PresContinuarParaEmitirFicha':'Presione &quot;Continuar&quot; para emitir la ficha de dep&oacute;sito',
'FichadeDeposito':'FICHA DE DEP&Oacute;SITO',
'AgenciaMayus':'AGENCIA',
'Banco':'BANCO',
'Sucursal':'SUCURSAL',
'Cuenta':'CUENTA',
'NumReferInterbanc':'N&Uacute;MERO DE REF. INTERBANCARIA',
'CantidadaDepositar':'CANTIDAD A DEPOSITAR',
'DatosdeCompra':'DATOS DE COMPRA',
'TiempoRestante':'TIEMPO RESTANTE',
'ParaCompletarPaso':'Para completar este paso',
'SuSesionExpirara':'SU SESI&#211;N EXPIRARA: &#191;Deseas agregar mas tiempo?',
'Ahorro':'Ahorro',
'Promocion':'Promocion(es)',
'Pasajeros':'PASAJEROS',
'Adultos':'Adultos',
'Ninios':'Ni&ntilde;os',
'Insen':'Insen',
'Maestros':'Maestros',
'Estudiantes':'Estudiantes',
'GraciasporSuCompra':'Gracias por su compra',
'VentaBoletosAgencias':'VENTA DE BOLETOS AGENCIAS', //aqui
'Agencia':'Agencia',
'Usuario':'Usuario',
'Administrador':'Administrador',
'Venta':'Venta',
'BoletoAbierto':'Boleto Abierto',
'Intercambio':'Intercambio',
'Cancelacion':'Cancelaci&oacute;n',
'CambiarContrasena':'Cambiar contrase&ntilde;a',
'Saldos':'Saldos',
'Movimientos':'Movimientos',
'CerrarSesion':'Cerrar Sesi&oacute;n',
'AdministradorAgencias':'Administrador Agencias',
'Nombre':'Nombre',
'Elegir':'Elegir',
'DiaMayus':'DIA',
'Inicio':'INICIO',
'Fin':'FIN',
'DiaActivo':'DIA ACTIVO',
'NumTransacEmpresa':'No. Transacci&oacute;n de la empresa',
'NumAutorizBanco':'No. Autorizaci&oacute;n del Banco',
'NumReciboBanco':'No. Recibo del Banco',
'RSPagadoEnBanco':'Pagado en el Banco',
'RSSaldoConsumidoConvenio':'Saldo Consumido del Convenio',
'RSSaldoConsumidoVF':'Saldo Consumido del Programa de Lealtad',
'Operacion':'Operaci&oacute;n',
'Tipo':'Tipo',
'Monto':'Monto',
'Descuento':'Descuento',
'ParaImpreBoletosenTaquilla':'Para la impresi&oacute;n de sus boletos en taquilla, deber&aacute; presentar copia de identificaci&oacute;n oficial vigente',
'PasajeroResumen':'DATOS DEL PASAJERO',
'DatosSalida':'DATOS DEL VIAJE DE SALIDA',
'DatosRegreso':'DATOS DEL VIAJE DE REGRESO',
'textorequiere':'campos requeridos',
'pasaporte':'VISA',
'totalMay':'TOTAL',
'formapago1':'TARJETA MEXICANA',
'formapago2':'TARJETA AMERICANA',
'botonfiltro':'BUSCAR',
'tipoviaje1':'Viaje Sencillo',
'tipoviaje2':'Viaje Redondo',
'titulofiltros':'Agenda tu viaje',
'origenfil':'ORIGEN',
'destinofil':'DESTINO',
'fechasalidafil':'SALIDA',
'fecharegresofil':'REGRESO',
'cargandoorides':'Cargando...',
'telef':'Teléfono',
'correop':'Correo',
'Nombrepas':'Nombre',
'RSInfoAdicional':'INFORMACION ADICIONAL',
'RSPromocion':'C?digo de Promoci?n',
'RSCorreo':'Correo electr&oacute;nico',
'RSTarjetaBancaria':'Tarjeta Bancaria',
'RSPuntosViajeroFrecuente':'Puntos de Viajero Frecuente',
'RSConvenio':'Convenio',
'RSNumeroConvenio':'N?mero de Convenio',
'RSARedimir':'A Redimir',
'RSPuntos':'Puntos',
'RSAPagarBanco':'A Pagar En El Banco',
'RSAPagar':'A Pagar',
'RSNumero':'N?mero',
'RSPromocionInvalida':'Promoci?n inv?lida o no existe',
'RSConvenioInvalido':'Convenio inv?lido o no existe',
'RSNIP':'NIP',
'RSNIPInvalido':'NIP inv?lido o el miembro no existe',
'Totalres':'TOTAL',
'MontoIva':'IVA',
'Montobruto':'IMPORTE',
'TipoPasRes':'T. PASAJERO',
'Veravisopriva':'Aviso de Privacidad',
'SeparadorTermyPriva':'y',
'mensajebancoerrA':'No cierre el navegador, su transacci&oacute;n est&aacute; siendo procesada.',
'mensajebancoerrB':'Si ocurre un error favor de llamar al:',
'mensajebancoerrC':'Su n&uacute;mero de sesi&oacute;n es:',
'mensajebancoerrD':'Su tarjeta fue:',
'Costo_n':'Costo Normal',
'sencillo':'Un Piso',
'doble':'Doble Piso',
'LeyendaVFCRM_1':'Nombre Viajero Frecuente',
'LeyendaVFCRM_2':'Nivel de Membres&#237;a',
'LeyendaVFCRM_3':'Puntos Disponibles',
'Tramo':'TRAMO',
'Empresa':'L&iacute;nea',
'Imprimir':'IMPRIMIR',
'Guardar':'GUARDAR PASE DE ABORDAR',
'ViajeSalida':'Viaje de ida',
'ViajeRegreso':'Viaje de regreso',
'DeDondeSales':'&iquest;De d&oacute;nde sales?',
'ADondeVas':'&iquest;A d&oacute;nde vas?',
'Espera':'Espera...',
'PasoSalida':'Elige el horario de salida',
'PasoRegreso':'Elige tu hora de regreso',
'PasoPersonaliza':'Revisa tu compra',
'PasoAsiento':'Selecciona tu asiento',
'PasoResumen':'Detalles de Pago',
'DatosTarjeta':'Datos del tarjetahabiente',
'ConfirmaCorreo':'Confirma tu correo',
'Ahorras':'Ahorras' ,
'PasoFinal':'Confirmaci&oacute;n de viaje',
'DescubreOfertas':'Descubre las mejores ofertas.',
'TenemosHorarios':'Tenemos los mejores precios y horarios.',
'InfoImportante':'INFORMACI&Oacute;N IMPORTANTE SOBRE TU VIAJE',
'pdfPoliticas':'POLITICASCOMERCIALES.pdf',
'DetallesSalida':'Detalles de viaje de salida',
'DetallesRegreso':'Detalles de viaje de regreso',
'Regresar':'Regresar',
'Continuar':'Continuar',
'ConsultaTipoS':'CONSULTA LAS CLASES DE SERVICIO',
'pdfTiposServicio':'TipoServicio.pdf',
'Nacionalidad':'Nacionalidad',
'FechaNacimiento':'Fecha de Nacimiento',
'Confirma':'Confirma',
'IdiomaEncPie':'?Idioma=1',
'VerifiqueTitulo':'Verifica que los datos sean correctos',
'FiltrosAgencias':'Filtros Agencias',
'TituloCancelacion':'Cancelaci&oacuten de Boletos de Agencia de viajes por Internet',
'FiltroAbierto':'Filtro Agencias Abierto',
'Enviar':'Enviar',
'Confirmado':'Confirmado',
'NoConfirmado':'No Confirmado',
'IntercambioLabel':'Est&aacute;s intercambiando n&uacute;mero(s) de operaci&oacute;n',
'UsuariosAgencia':'Usuarios agencia',
'AdminHorario':'ADMINISTRADOR HORARIO',
'HorarioUsuario':'Horario del usuario',
'Tarifanodisponible':'Tarifa no disponible',
'ReporteMovimientos':'Reporte de movimientos',
'IntercambioError':'Los Intercambios solo pueden ser de un Boleto por otro Boleto.',
'FechaLabel':'D&iacute;a/Mes/A&ntilde;o',
'Sexo':'Sexo',
'Male':'Hombre',
'Female':'Mujer',
'DocumentoPresentado':'Documento',
'NumDocumento':'N&uacute;mero de Documento',
'FechaVencimiento':'Fecha vencimiento documento',
'PaisResidencia':'Pa&iacute;s de Residencia',
'Por':'CON CONEXI&Oacute;N EN',
'ClaveRuta':'Clave Ruta',
'DescripccioRuta':'Descripci&oacute;n Ruta',
'TarifaRuta':'Tarifa Ruta',
'Seleccionar':'Seleccionar',
'PorPagar':'Por Pagar en Agencia'
};

var msjES = {  // Mensajes de validaciones en alerts
'ContrasenaNoPuedeQuedarVacia':'La contrase\u00f1a no puede quedar vacia',
'ErroralConfirmarContrasena':'Error al confirmar contrase\u00f1a',
'OperacionNoPuedeQuedarVacia':'La Operacion no debe quedar vac\u00eda.',
'FavorTeclearUsuario':'Favor de Teclear el Usuario',
'FavorTeclearContrasena':'Favor de Teclear la Contrase\u00f1a',
'NoComprasdeMasde10Pasaj':'No se puede hacer una compra de mas de 10 pasajeros',
'NoPuedeViajarMenorSolo':'No puede viajar un menor solo, tiene que ir con un acompa\u00f1ante que no sea menor',
'NecesitaSelecOrigen':'Necesita seleccionar un origen',
'NecesitaSelecDestino':'Necesita seleccionar un destino',
'ErrorOrigDestIguales':'Error: origen y destino iguales',
'ElegirFechaValida':'Favor de Elegir una Fecha Valida',
'FechaRegNoMenoraFechaSal':'La fecha de regreso no puede ser menor a la fecha de salida',
'DebeSelecTipoPasajeroalMenos':'Debe seleccionar un tipo de pasajero cuando menos',
'ElCampo':'El campo ',  //verificar linea 1088 validaciones
'NoDebeContenerNum':'solo debe contener letras',
'DebeContenerSoloNum':'debe contener solo numeros',
'NoTieneFormatoCorreo':'no contiene un formato de correo electronico.',  //verificar linea 1112 validaciones
'Requerido':'Requerido',
'IntroducSoloNumeros':'Introducir solo n&uacute;meros',
'IntroducCorreoValido':'Introducir correo electr&oacute;nico v&aacute;lido',
'NecesarioAceptTermCond':'Es necesario aceptar t?rminos y condiciones',
'FaltaSeleccionar':'Falta seleccionar',
'AsientosdeIda':'asiento(s) de ida',
'AsientosdeRegreso':'asiento(s) de regreso',
'FaltaNombrePasajero':'Falta nombre del pasajero',
'FaltaDomicilio':'Falta capturar el domicilio',
'FaltaCaptNomPasajero':'Falta capturar nombre del pasajero',
'RSFaltaApPaternoPasajero':'Falta apellido paterno del pasajero',
'RSFaltaCaptApPaternoPasajero':'Falta capturar apellido paterno del pasajero',
'FaltaCaptPasaporte':'Falta capturar Visa del pasajero',
'FaltaCapturarDomic':'Falta capturar la calle',
'FaltaCapturarNumExt':'Falta capturar el n?mero exterior',
'FaltaCapturarNumInt':'Falta capturar el n?mero interior',
'FaltaCapturarDelMpio':'Falta capturar la delegaci?n o municipio',
'FaltaCapturarEstado':'Falta capturar el estado',
'FaltaCapturarCiudad':'Falta capturar la ciudad',
'ErrorenCodPos':'Error en el Codigo Postal',
'FaltaElegirPais':'Falta elegir pais',
'ErrorenTelef':'Error en el telefono',
'ErrorenEmail':'Error en el email',
//'Pasajero':'Pasajero', utilizar el de txtES
'ParaContinuarAceptTermCond':'Para continuar debes indicar que estas de acuerdo con los terminos y condiciones de precio y viaje en la parte inferior de la pantalla.',
'DebeSelecTipoPasajero':'Debe seleccionar el tipo de pasajero',
'FavorSelecCorrida':'Favor de seleccionar una corrida',
'FavorSelecRuta':'Favor de seleccionar una ruta conexion',
'CorridaRegNoPuedeSerSelec':'La corrida de Regreso no puede ser seleccionada, porque su fecha de Salida es menor a la fecha de Llegada de la corrida de Ida.',
'NoPuedeSelecCorridaTraslapeconIda':'No es posible seleccionar esta corrida ya que se traslapa con la corrida de ida',
'CantidadIncorrecta':'La cantidad introducida no es correcta',
'SoloAceptaNumeros':'Solo se aceptan n?meros',
'PasajerosYaFueronSelec':'Todos los Pasajeros ya fueron seleccionados',
'TipoPagoInvalido':'Tipo de pago invalido',
'NoComprasdeMasde20Pasaj':'No se puede hacer una compra de mas de 20 pasajeros',
'MontoFichaNoPuedeSerCero':'El monto de la ficha no puede ser cero',
'MontoFichaNoPuedeSerVacio':'El monto de la ficha no puede quedar vac\u00EDo',
'DepositoNoPuedeSerMayoraVenta':'El dep\u00F3sito no puede ser mayor al saldo de venta',
'FechaFinalNoMenoraInicial':'La fecha final no puede ser menor a la incial',
'ElegirUsuarioparaContinuar':'Elegir un usuario para continuar.',
'Enero':'Enero',
'Febrero':'Febrero',
'Marzo':'Marzo',
'Abril':'Abril',
'Mayo':'Mayo',
'Junio':'Junio',
'Julio':'Julio',
'Agosto':'Agosto',
'Septiembre':'Septiembre',
'Octubre':'Octubre',
'Noviembre':'Noviembre',
'Diciembre':'Diciembre',
'Lunes':'Lunes',
'Martes':'Martes',
'Miercoles':'Mi&eacutercoles',
'Jueves':'Jueves',
'Viernes':'Viernes',
'Sabado':'S&aacutebado',
'Domingo':'Domingo',
'informacionreq':'Informaci&oacute;n requerida',
'mensajecap':'ERROR: Capture el Codigo como se muestra.',
'RSNoPuedeSerMayorDe':'no puede ser mayor de',
'RSNoPuedeSerMenorDe':'no puede ser menor de',
'RSNoPuedeSerIgualA':'no puede ser igual a',
'NoHayCorridas':'No tenemos viajes disponibles para la fecha seleccionada, favor de consultar otra fecha o llamar al 1-800-923-1799 mencionando su # de Agencia',
'TituloSalida':'Elige el horario de salida',
'TituloRegreso':'Elige el horario de regreso',
'TituloRegistro':'Registro de datos',
'TituloAsiento':'Elige el Asiento',
'TituloAsientoRegreso':'Elige el Asiento Regreso',
'TituloResumen':'Verifique sus datos',
'FaltaNombreTB':'Capture nombre del tarjetahabiente',
'EmailDIferente':'Los correos no coinciden',
'SesionTerminada':'Tu sesion ha expirado. Por favor vuelve a intentarlo.',
'TiempoAgotado':'Tiempo Agotado',
'NoHayTarifas':'No hay tarifa para los criterios seleccionados...',
'FechasDistintas':'Las fechas no coinciden',
'NoNumOperacion':'Por favor introduzca un n\u00FAmero de operaci\u00F3n',
'NoNit':'Por favor introduzca el NIT',
'ContrasenaVacia':'La contrase\u00f1a no puede quedar vac\u00eda',
'ErrorConfContrase':'Error al confirmar contrase\u00f1a',
'MenorPorAdulto':'Solo pueden viajar dos menores por cada adulto',
'FechasDistintas':'Las fechas no coinciden',
'FaltaNumDocumento':'Introduzca el n\u00famero de documento',
'ErrorNumDocumento':'Introduzca un n\u00famero de documento correcto',
'FechaDocVencida':'El documento que presenta se encontrar\u00E1 vencido en el momento del viaje',
'FechaNacMes':'La fecha de nacimiento debe ser anterior de un mes a la fecha actual'
};

var paisesES = "<option value='AF'>Afganist&aacute;n</option>"+
    "<option value='AL'>Albania</option>"+
    "<option value='DE'>Alemania</option>"+
    "<option value='AD'>Andorra</option>"+
    "<option value='AO'>Angola</option>"+
    "<option value='AI'>Anguilla</option>"+
    "<option value='AQ'>Ant&aacute;rtida</option>"+
    "<option value='AG'>Antigua y Barbuda</option>"+
    "<option value='AN'>Antillas Holandesas</option>"+
    "<option value='SA'>Arabia Saud&iacute;</option>"+
    "<option value='DZ'>Argelia</option>"+
    "<option value='AR'>Argentina</option>"+
    "<option value='AM'>Armenia</option>"+
    "<option value='AW'>Aruba</option>"+
    "<option value='AU'>Australia</option>"+
    "<option value='AT'>Austria</option>"+
    "<option value='AZ'>Azerbaiy&aacute;n</option>"+
    "<option value='BS'>Bahamas</option>"+
    "<option value='BH'>Bahrein</option>"+
    "<option value='BD'>Bangladesh</option>"+
    "<option value='BB'>Barbados</option>"+
    "<option value='BE'>B&eacute;lgica</option>"+
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
    "<option value='BT'>But&aacute;n</option>"+
    "<option value='CV'>Cabo Verde</option>"+
    "<option value='KH'>Camboya</option>"+
    "<option value='CM'>Camer&uacute;n</option>"+
    "<option value='CA'>Canad&aacute;</option>"+
    "<option value='TD'>Chad</option>"+
    "<option value='CL'>Chile</option>"+
    "<option value='CN'>China</option>"+
    "<option value='CY'>Chipre</option>"+
    "<option value='VA'>Ciudad del Vaticano (Santa Sede)</option>"+
    "<option value='CO'>Colombia</option>"+
    "<option value='KM'>Comores</option>"+
    "<option value='CG'>Congo</option>"+
    "<option value='CD'>Congo, Rep&uacute;blica Democr&aacute;tica del</option>"+
    "<option value='KR'>Corea</option>"+
    "<option value='KP'>Corea del Norte</option>"+
    "<option value='CI'>Costa de Marf&iacute;l</option>"+
    "<option value='CR'>Costa Rica</option>"+
    "<option value='HR'>Croacia (Hrvatska)</option>"+
    "<option value='CU'>Cuba</option>"+
    "<option value='DK'>Dinamarca</option>"+
    "<option value='DJ'>Djibouti</option>"+
    "<option value='DM'>Dominica</option>"+
    "<option value='EC'>Ecuador</option>"+
    "<option value='EG'>Egipto</option>"+
    "<option value='SV'>El Salvador</option>"+
    "<option value='AE'>Emiratos &Aacute;rabes Unidos</option>"+
    "<option value='ER'>Eritrea</option>"+
    "<option value='SI'>Eslovenia</option>"+
    "<option value='ES'>España</option>"+
    "<option value='US'>Estados Unidos</option>"+
    "<option value='EE'>Estonia</option>"+
    "<option value='ET'>Etiop&iacute;a</option>"+
    "<option value='FJ'>Fiji</option>"+
    "<option value='PH'>Filipinas</option>"+
    "<option value='FI'>Finlandia</option>"+
    "<option value='FR'>Francia</option>"+
    "<option value='GA'>Gab&oacute;n</option>"+
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
    "<option value='HT'>Hait&iacute;</option>"+
    "<option value='HN'>Honduras</option>"+
    "<option value='HU'>Hungr&iacute;a</option>"+
    "<option value='IN'>India</option>"+
    "<option value='ID'>Indonesia</option>"+
    "<option value='IQ'>Irak</option>"+
    "<option value='IR'>Ir&aacute;n</option>"+
    "<option value='IE'>Irlanda</option>"+
    "<option value='BV'>Isla Bouvet</option>"+
    "<option value='CX'>Isla de Christmas</option>"+
    "<option value='IS'>Islandia</option>"+
    "<option value='KY'>Islas Caim&aacute;n</option>"+
    "<option value='CK'>Islas Cook</option>"+
    "<option value='CC'>Islas de Cocos o Keeling</option>"+
    "<option value='FO'>Islas Faroe</option>"+
    "<option value='HM'>Islas Heard y McDonald</option>"+
    "<option value='FK'>Islas Malvinas</option>"+
    "<option value='MP'>Islas Marianas del Norte</option>"+
    "<option value='MH'>Islas Marshall</option>"+
    "<option value='UM'>Islas menores de Estados Unidos</option>"+
    "<option value='PW'>Islas Palau</option>"+
    "<option value='SB'>Islas Salom&oacute;n</option>"+
    "<option value='SJ'>Islas Svalbard y Jan Mayen</option>"+
    "<option value='TK'>Islas Tokelau</option>"+
    "<option value='TC'>Islas Turks y Caicos</option>"+
    "<option value='VI'>Islas V&iacute;rgenes (EE.UU.)</option>"+
    "<option value='VG'>Islas V&iacute;rgenes (Reino Unido)</option>"+
    "<option value='WF'>Islas Wallis y Futuna</option>"+
    "<option value='IL'>Israel</option>"+
    "<option value='IT'>Italia</option>"+
    "<option value='JM'>Jamaica</option>"+
    "<option value='JP'>Jap&oacute;n</option>"+
    "<option value='JO'>Jordania</option>"+
    "<option value='KZ'>Kazajist&aacute;n</option>"+
    "<option value='KE'>Kenia</option>"+
    "<option value='KG'>Kirguizist&aacute;n</option>"+
    "<option value='KI'>Kiribati</option>"+
    "<option value='KW'>Kuwait</option>"+
    "<option value='LA'>Laos</option>"+
    "<option value='LS'>Lesotho</option>"+
    "<option value='LV'>Letonia</option>"+
    "<option value='LB'>L&iacute;bano</option>"+
    "<option value='LR'>Liberia</option>"+
    "<option value='LY'>Libia</option>"+
    "<option value='LI'>Liechtenstein</option>"+
    "<option value='LT'>Lituania</option>"+
    "<option value='LU'>Luxemburgo</option>"+
    "<option value='MK'>Macedonia, Ex-Rep&uacute;blica Yugoslava de</option>"+
    "<option value='MG'>Madagascar</option>"+
    "<option value='MY'>Malasia</option>"+
    "<option value='MW'>Malawi</option>"+
    "<option value='MV'>Maldivas</option>"+
    "<option value='ML'>Mal&iacute;</option>"+
    "<option value='MT'>Malta</option>"+
    "<option value='MA'>Marruecos</option>"+
    "<option value='MQ'>Martinica</option>"+
    "<option value='MU'>Mauricio</option>"+
    "<option value='MR'>Mauritania</option>"+
    "<option value='YT'>Mayotte</option>"+
    "<option value='MX' selected>M&eacute;xico</option>"+
    "<option value='FM'>Micronesia</option>"+
    "<option value='MD'>Moldavia</option>"+
    "<option value='MC'>M&oacute;naco</option>"+
    "<option value='MN'>Mongolia</option>"+
    "<option value='MS'>Montserrat</option>"+
    "<option value='MZ'>Mozambique</option>"+
    "<option value='NA'>Namibia</option>"+
    "<option value='NR'>Nauru</option>"+
    "<option value='NP'>Nepal</option>"+
    "<option value='NI'>Nicaragua</option>"+
    "<option value='NE'>N&iacute;ger</option>"+
    "<option value='NG'>Nigeria</option>"+
    "<option value='NU'>Niue</option>"+
    "<option value='NF'>Norfolk</option>"+
    "<option value='NO'>Noruega</option>"+
    "<option value='NC'>Nueva Caledonia</option>"+
    "<option value='NZ'>Nueva Zelanda</option>"+
    "<option value='OM'>Om&aacute;n</option>"+
    "<option value='NL'>Pa&iacute;ses Bajos</option>"+
    "<option value='PA'>Panam&aacute;</option>"+
    "<option value='PG'>Pap&uacute;a Nueva Guinea</option>"+
    "<option value='PK'>Paquist&aacute;n</option>"+
    "<option value='PY'>Paraguay</option>"+
    "<option value='PE'>Per&uacute;</option>"+
    "<option value='PN'>Pitcairn</option>"+
    "<option value='PF'>Polinesia Francesa</option>"+
    "<option value='PL'>Polonia</option>"+
    "<option value='PT'>Portugal</option>"+
    "<option value='PR'>Puerto Rico</option>"+
    "<option value='QA'>Qatar</option>"+
    "<option value='UK'>Reino Unido</option>"+
    "<option value='CF'>Rep&uacute;blica Centroafricana</option>"+
    "<option value='CZ'>Rep&uacute;blica Checa</option>"+
    "<option value='ZA'>Rep&uacute;blica de Sud&aacute;frica</option>"+
    "<option value='DO'>Rep&uacute;blica Dominicana</option>"+
    "<option value='SK'>Rep&uacute;blica Eslovaca</option>"+
    "<option value='RE'>Reuni&oacute;n</option>"+
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
    "<option value='LC'>Santa Luc&iacute;a</option>"+
    "<option value='ST'>Santo Tom&eacute; y Pr&iacute;ncipe</option>"+
    "<option value='SN'>Senegal</option>"+
    "<option value='SC'>Seychelles</option>"+
    "<option value='SL'>Sierra Leona</option>"+
    "<option value='SG'>Singapur</option>"+
    "<option value='SY'>Siria</option>"+
    "<option value='SO'>Somalia</option>"+
    "<option value='LK'>Sri Lanka</option>"+
    "<option value='PM'>St. Pierre y Miquelon</option>"+
    "<option value='SZ'>Suazilandia</option>"+
    "<option value='SD'>Sud&aacute;n</option>"+
    "<option value='SE'>Suecia</option>"+
    "<option value='CH'>Suiza</option>"+
    "<option value='SR'>Surinam</option>"+
    "<option value='TH'>Tailandia</option>"+
    "<option value='TW'>Taiw&aacute;n</option>"+
    "<option value='TZ'>Tanzania</option>"+
    "<option value='TJ'>Tayikist&aacute;n</option>"+
    "<option value='TF'>Territorios franceses del Sur</option>"+
    "<option value='TP'>Timor Oriental</option>"+
    "<option value='TG'>Togo</option>"+
    "<option value='TO'>Tonga</option>"+
    "<option value='TT'>Trinidad y Tobago</option>"+
    "<option value='TN'>T&uacute;nez</option>"+
    "<option value='TM'>Turkmenist&aacute;n</option>"+
    "<option value='TR'>Turqu&iacute;a</option>"+
    "<option value='TV'>Tuvalu</option>"+
    "<option value='UA'>Ucrania</option>"+
    "<option value='UG'>Uganda</option>"+
    "<option value='UY'>Uruguay</option>"+
    "<option value='UZ'>Uzbekist&aacute;n</option>"+
    "<option value='VU'>Vanuatu</option>"+
    "<option value='VE'>Venezuela</option>"+
    "<option value='VN'>Vietnam</option>"+
    "<option value='YE'>Yemen</option>"+
    "<option value='YU'>Yugoslavia</option>"+
    "<option value='ZM'>Zambia</option>"+
    "<option value='ZW'>Zimbabue</option>";
	
	
var paisesESTB = "<option value='AF'>Afganist&aacute;n</option>"+
    "<option value='AL'>Albania</option>"+
    "<option value='DE'>Alemania</option>"+
    "<option value='AD'>Andorra</option>"+
    "<option value='AO'>Angola</option>"+
    "<option value='AI'>Anguilla</option>"+
    "<option value='AQ'>Ant&aacute;rtida</option>"+
    "<option value='AG'>Antigua y Barbuda</option>"+
    "<option value='AN'>Antillas Holandesas</option>"+
    "<option value='SA'>Arabia Saud&iacute;</option>"+
    "<option value='DZ'>Argelia</option>"+
    "<option value='AR'>Argentina</option>"+
    "<option value='AM'>Armenia</option>"+
    "<option value='AW'>Aruba</option>"+
    "<option value='AU'>Australia</option>"+
    "<option value='AT'>Austria</option>"+
    "<option value='AZ'>Azerbaiy&aacute;n</option>"+
    "<option value='BS'>Bahamas</option>"+
    "<option value='BH'>Bahrein</option>"+
    "<option value='BD'>Bangladesh</option>"+
    "<option value='BB'>Barbados</option>"+
    "<option value='BE'>B&eacute;lgica</option>"+
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
    "<option value='BT'>But&aacute;n</option>"+
    "<option value='CV'>Cabo Verde</option>"+
    "<option value='KH'>Camboya</option>"+
    "<option value='CM'>Camer&uacute;n</option>"+
    "<option value='CA'>Canad&aacute;</option>"+
    "<option value='TD'>Chad</option>"+
    "<option value='CL'>Chile</option>"+
    "<option value='CN'>China</option>"+
    "<option value='CY'>Chipre</option>"+
    "<option value='VA'>Ciudad del Vaticano (Santa Sede)</option>"+
    "<option value='CO'>Colombia</option>"+
    "<option value='KM'>Comores</option>"+
    "<option value='CG'>Congo</option>"+
    "<option value='CD'>Congo, Rep&uacute;blica Democr&aacute;tica del</option>"+
    "<option value='KR'>Corea</option>"+
    "<option value='KP'>Corea del Norte</option>"+
    "<option value='CI'>Costa de Marf&iacute;l</option>"+
    "<option value='CR'>Costa Rica</option>"+
    "<option value='HR'>Croacia (Hrvatska)</option>"+
    "<option value='CU'>Cuba</option>"+
    "<option value='DK'>Dinamarca</option>"+
    "<option value='DJ'>Djibouti</option>"+
    "<option value='DM'>Dominica</option>"+
    "<option value='EC'>Ecuador</option>"+
    "<option value='EG'>Egipto</option>"+
    "<option value='SV'>El Salvador</option>"+
    "<option value='AE'>Emiratos &Aacute;rabes Unidos</option>"+
    "<option value='ER'>Eritrea</option>"+
    "<option value='SI'>Eslovenia</option>"+
    "<option value='ES'>España</option>"+
    "<option value='US' selected>Estados Unidos</option>"+
    "<option value='EE'>Estonia</option>"+
    "<option value='ET'>Etiop&iacute;a</option>"+
    "<option value='FJ'>Fiji</option>"+
    "<option value='PH'>Filipinas</option>"+
    "<option value='FI'>Finlandia</option>"+
    "<option value='FR'>Francia</option>"+
    "<option value='GA'>Gab&oacute;n</option>"+
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
    "<option value='HT'>Hait&iacute;</option>"+
    "<option value='HN'>Honduras</option>"+
    "<option value='HU'>Hungr&iacute;a</option>"+
    "<option value='IN'>India</option>"+
    "<option value='ID'>Indonesia</option>"+
    "<option value='IQ'>Irak</option>"+
    "<option value='IR'>Ir&aacute;n</option>"+
    "<option value='IE'>Irlanda</option>"+
    "<option value='BV'>Isla Bouvet</option>"+
    "<option value='CX'>Isla de Christmas</option>"+
    "<option value='IS'>Islandia</option>"+
    "<option value='KY'>Islas Caim&aacute;n</option>"+
    "<option value='CK'>Islas Cook</option>"+
    "<option value='CC'>Islas de Cocos o Keeling</option>"+
    "<option value='FO'>Islas Faroe</option>"+
    "<option value='HM'>Islas Heard y McDonald</option>"+
    "<option value='FK'>Islas Malvinas</option>"+
    "<option value='MP'>Islas Marianas del Norte</option>"+
    "<option value='MH'>Islas Marshall</option>"+
    "<option value='UM'>Islas menores de Estados Unidos</option>"+
    "<option value='PW'>Islas Palau</option>"+
    "<option value='SB'>Islas Salom&oacute;n</option>"+
    "<option value='SJ'>Islas Svalbard y Jan Mayen</option>"+
    "<option value='TK'>Islas Tokelau</option>"+
    "<option value='TC'>Islas Turks y Caicos</option>"+
    "<option value='VI'>Islas V&iacute;rgenes (EE.UU.)</option>"+
    "<option value='VG'>Islas V&iacute;rgenes (Reino Unido)</option>"+
    "<option value='WF'>Islas Wallis y Futuna</option>"+
    "<option value='IL'>Israel</option>"+
    "<option value='IT'>Italia</option>"+
    "<option value='JM'>Jamaica</option>"+
    "<option value='JP'>Jap&oacute;n</option>"+
    "<option value='JO'>Jordania</option>"+
    "<option value='KZ'>Kazajist&aacute;n</option>"+
    "<option value='KE'>Kenia</option>"+
    "<option value='KG'>Kirguizist&aacute;n</option>"+
    "<option value='KI'>Kiribati</option>"+
    "<option value='KW'>Kuwait</option>"+
    "<option value='LA'>Laos</option>"+
    "<option value='LS'>Lesotho</option>"+
    "<option value='LV'>Letonia</option>"+
    "<option value='LB'>L&iacute;bano</option>"+
    "<option value='LR'>Liberia</option>"+
    "<option value='LY'>Libia</option>"+
    "<option value='LI'>Liechtenstein</option>"+
    "<option value='LT'>Lituania</option>"+
    "<option value='LU'>Luxemburgo</option>"+
    "<option value='MK'>Macedonia, Ex-Rep&uacute;blica Yugoslava de</option>"+
    "<option value='MG'>Madagascar</option>"+
    "<option value='MY'>Malasia</option>"+
    "<option value='MW'>Malawi</option>"+
    "<option value='MV'>Maldivas</option>"+
    "<option value='ML'>Mal&iacute;</option>"+
    "<option value='MT'>Malta</option>"+
    "<option value='MA'>Marruecos</option>"+
    "<option value='MQ'>Martinica</option>"+
    "<option value='MU'>Mauricio</option>"+
    "<option value='MR'>Mauritania</option>"+
    "<option value='YT'>Mayotte</option>"+
    "<option value='MX'>M&eacute;xico</option>"+
    "<option value='FM'>Micronesia</option>"+
    "<option value='MD'>Moldavia</option>"+
    "<option value='MC'>M&oacute;naco</option>"+
    "<option value='MN'>Mongolia</option>"+
    "<option value='MS'>Montserrat</option>"+
    "<option value='MZ'>Mozambique</option>"+
    "<option value='NA'>Namibia</option>"+
    "<option value='NR'>Nauru</option>"+
    "<option value='NP'>Nepal</option>"+
    "<option value='NI'>Nicaragua</option>"+
    "<option value='NE'>N&iacute;ger</option>"+
    "<option value='NG'>Nigeria</option>"+
    "<option value='NU'>Niue</option>"+
    "<option value='NF'>Norfolk</option>"+
    "<option value='NO'>Noruega</option>"+
    "<option value='NC'>Nueva Caledonia</option>"+
    "<option value='NZ'>Nueva Zelanda</option>"+
    "<option value='OM'>Om&aacute;n</option>"+
    "<option value='NL'>Pa&iacute;ses Bajos</option>"+
    "<option value='PA'>Panam&aacute;</option>"+
    "<option value='PG'>Pap&uacute;a Nueva Guinea</option>"+
    "<option value='PK'>Paquist&aacute;n</option>"+
    "<option value='PY'>Paraguay</option>"+
    "<option value='PE'>Per&uacute;</option>"+
    "<option value='PN'>Pitcairn</option>"+
    "<option value='PF'>Polinesia Francesa</option>"+
    "<option value='PL'>Polonia</option>"+
    "<option value='PT'>Portugal</option>"+
    "<option value='PR'>Puerto Rico</option>"+
    "<option value='QA'>Qatar</option>"+
    "<option value='UK'>Reino Unido</option>"+
    "<option value='CF'>Rep&uacute;blica Centroafricana</option>"+
    "<option value='CZ'>Rep&uacute;blica Checa</option>"+
    "<option value='ZA'>Rep&uacute;blica de Sud&aacute;frica</option>"+
    "<option value='DO'>Rep&uacute;blica Dominicana</option>"+
    "<option value='SK'>Rep&uacute;blica Eslovaca</option>"+
    "<option value='RE'>Reuni&oacute;n</option>"+
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
    "<option value='LC'>Santa Luc&iacute;a</option>"+
    "<option value='ST'>Santo Tom&eacute; y Pr&iacute;ncipe</option>"+
    "<option value='SN'>Senegal</option>"+
    "<option value='SC'>Seychelles</option>"+
    "<option value='SL'>Sierra Leona</option>"+
    "<option value='SG'>Singapur</option>"+
    "<option value='SY'>Siria</option>"+
    "<option value='SO'>Somalia</option>"+
    "<option value='LK'>Sri Lanka</option>"+
    "<option value='PM'>St. Pierre y Miquelon</option>"+
    "<option value='SZ'>Suazilandia</option>"+
    "<option value='SD'>Sud&aacute;n</option>"+
    "<option value='SE'>Suecia</option>"+
    "<option value='CH'>Suiza</option>"+
    "<option value='SR'>Surinam</option>"+
    "<option value='TH'>Tailandia</option>"+
    "<option value='TW'>Taiw&aacute;n</option>"+
    "<option value='TZ'>Tanzania</option>"+
    "<option value='TJ'>Tayikist&aacute;n</option>"+
    "<option value='TF'>Territorios franceses del Sur</option>"+
    "<option value='TP'>Timor Oriental</option>"+
    "<option value='TG'>Togo</option>"+
    "<option value='TO'>Tonga</option>"+
    "<option value='TT'>Trinidad y Tobago</option>"+
    "<option value='TN'>T&uacute;nez</option>"+
    "<option value='TM'>Turkmenist&aacute;n</option>"+
    "<option value='TR'>Turqu&iacute;a</option>"+
    "<option value='TV'>Tuvalu</option>"+
    "<option value='UA'>Ucrania</option>"+
    "<option value='UG'>Uganda</option>"+
    "<option value='UY'>Uruguay</option>"+
    "<option value='UZ'>Uzbekist&aacute;n</option>"+
    "<option value='VU'>Vanuatu</option>"+
    "<option value='VE'>Venezuela</option>"+
    "<option value='VN'>Vietnam</option>"+
    "<option value='YE'>Yemen</option>"+
    "<option value='YU'>Yugoslavia</option>"+
    "<option value='ZM'>Zambia</option>"+
    "<option value='ZW'>Zimbabue</option>";
	
var estadoES = "<option value='AS'>AGUASCALIENTES</option>"+
	"<option value='BC'>BAJA CALIFORNIA</option>"+
	"<option value='BS'>BAJA CALIFORNIA SUR</option>"+
	"<option value='CC'>CAMPECHE</option>"+
	"<option value='CL'>COAHUILA</option>"+
	"<option value='CM'>COLIMA</option>"+
	"<option value='CS'>CHIAPAS</option>"+
	"<option value='CH'>CHIHUHUA</option>"+
	"<option value='DF'>DISTRITO FEDERAL</option>"+
	"<option value='DG'>DURANGO</option>"+
	"<option value='GT'>GUANAJUATO</option>"+
	"<option value='GR'>GUERRERO</option>"+
	"<option value='HG'>HIDALGO</option>"+
	"<option value='JC'>JALISCO</option>"+
	"<option value='MC'>MEXICO</option>"+
	"<option value='MN'>MICHOACAN</option>"+
	"<option value='MS'>MORELOS</option>"+
	"<option value='NT'>NAYARIT</option>"+
	"<option value='NL'>NUEVO LEON</option>"+
	"<option value='OC'>OAXACA</option>"+
	"<option value='PL'>PUEBLA</option>"+
	"<option value='QT'>QUERETARO</option>"+
	"<option value='QR'>QUINTANA ROO</option>"+
	"<option value='SP'>SAN LUIS POTOSI</option>"+
	"<option value='SL'>SINALOA</option>"+
	"<option value='SR'>SONORA</option>"+
	"<option value='TC'>TABASCO</option>"+
	"<option value='TS'>TAMAULIPAS</option>"+
	"<option value='TL'>TLAXCALA</option>"+
	"<option value='VZ'>VERACRUZ</option>"+
	"<option value='YN'>YUCATAN</option>"+
	"<option value='ZS'>ZACATECAS</option>"+
    "</select>";	

function RecuperaTxtES()
{
	return txtES;
}

function RecuperaMsjES()
{
	return msjES;
}

function RecupColumnasES()
{
	return ColumnasES;
}

function RecupPaisesES()
{
	return paisesES;
}

function RecupEstadoES()
{
	return estadoES;
}

function RecupPaisesESTB()
{
	return paisesESTB;
}