//Idioma Ingles - Textos y Mensajes

var ColumnasIN = eval( [
			{"id": "fechaSalida","nombreColumna":"Departure <br>Date","width":"85"},
			{"id": "horaSalida","nombreColumna":"Departure","width":"85"},
			{"id": "fechaLlegada","nombreColumna":"Arriving <br>Date","width":"85"},
			{"id": "horaLlegada","nombreColumna":"Schedule","width":"85"},
			{"id": "claseDeServicio","nombreColumna":"Service","width":"85"},
			//{"id": "linea","nombreColumna":"Carrier","width":"85"},
			{"id": "tarifa","nombreColumna":"Cost","width":"85"},
			{"id": "tarifapromo","nombreColumna":"Internet <br>Cost","width":"85"},
			{"id": "itinerario","nombreColumna":"Itinerary","width":"90"},
			{"id": "selecciona","nombreColumna":"Select","width":"90"},
			]);
			

var txtIN = {  // Textos "duros" en el codigo HTML
'SALIDA':'Depart',
'REGRESO':'Arrive',
'REGISTRO':'Registration',
'ASIENTOS':'Seats',
'RESUMEN':'Summary',
'PAGO':'Payment',
'CONFIRMACION':'Confirmation',
'fechaSalida':'Depart',
'horaSalida':'Depart Schedule',
'fechaLlegada':'Arrival Date',
'horaLlegada':'Arrival Schedule',
'fechaRegreso':'Return',
'Horario':'Time', //*
'Servicio':'Service',
'Linea':'Bus Company',
'Costo':'Cost',
'Itinerario':'Itinerary',
'Selecciona':'Select',
'NoHaySalidasParaCriterio':'There is no availability for this request, please try again with another date or type of passenger...',
'VerCostos':'See costs',
'EstaIntercambiandoNumOper':'You are exchanging operation numbers',
'CostoTotal':'TOTAL COST',
'CamposRequeridos':'Required fields',
'FormadePago':'Types of payment',
'Efectivo':'Cash',
'PagoconTarjeta':'Card payment',
'Domicilio':'Address',
'Ciudad':'City',
'CodPostal':'Zip code',
'CodigoPostal':'Zip Code',
'RSCalle':'Street',
'RSNumExt':'External <br>Number',
'RSNumInt':'Internal <br>Number',
'RSDelMpio':'Area / Municipality',
'RSEstado':'State',
'RSInfoAdicional':'ADITIONAL INFO',
'RSPromocion':'Promotion Code',
'RSCorreo':'Email',
'RSConvenio':'Agreement <br>Number',
'RSNombre':'Name & Middle Name',
'RSApPaterno':'Last Name (Father Family Surname)',
'RSApMaterno':'2nd Last Name (Mother Family Surname)',
//'RSSeparador':'?',
'RSSeparador':String.fromCharCode(187),
//'RSSeparador2':'|',
'RSSeparador2':String.fromCharCode(124),
'Pais':'Country',
'TelCasaOfic':'Phone number Home/Office',
'CorreoElectronico':'Email address',
'IncluyaLada':' Please include your area code',
'VerTermCondic':'Read terms, conditions',
'FechadeRegreso':'RETURN DATE',
'RegistrodePasajeros':'Passenger Registration',
'Utiliza1erNomParaPasajeros':'Use the first name for all passengers',
'Adulto':'Adult',
'Menor':'Child',
'Senectud':'Senior',
'Estudiante':'Student',
'Profesor':'Teacher',
'AdultoMayus':'ADULT',
'MenorMayus':'CHILD',
'InsenMayus':'SENIOR',
'EstudianteMayus':'STUDENT',
'MaestroMayus':'TEACHER',
'VerItinerario':'View',
'Acepto':'I accept',
'Terminos':'the terms and conditions',
'PagoPrecio':'of payment and price.',
'AceptoTerminosCond':'I accept the terms and conditions of payment and price.',
'CaptureTxtComoEnImg':'Capture the text like is shown in the image',
'RefrescarImagen':'Refresh image',
'Dia':'DAY',
'Hora':'TIME',
'Origen':'Departure',
'Destino':'Destination',
'OrigenMayus':'DEPARTURE',
'DestinoMayus':'DESTINATION',
'DatosDelPasajero':'Passenger Info',
'DatosDel':'Information of ',
'Pasajero':'PASSENGER',
'PasajeroMin':'Passenger',
'Asiento':'Seat',
'AsientoMayus':'SEAT',
'ViajedeRegreso':'RETURN TRIP INFO',
'ViajedeSalida':'OUTWARD TRIP INFO',
'AsientosSalida':'Outward trip seats',
'AsientosRegreso':'Return trip seats',
'SelecAsientoSalidaSigPasaj':'Select the outward trip seat for the following passenger:',
'SelecAsientoRegresoSigPasaj':'Select the return trip seat for the following passenger:',
'AsientoOcupado':'Occupied Seat',
'AsientoDisponible':'Available Seat',
'AsientoSeleccionado':'Selected Seat',
'AsientoDiscapacidad':'Seats that adjust to accommodate wheelchair passengers (non-reclining)',
'Aviso':'Message',
'ViajeSencillo':'Single Trip',
'ViajeRedondo':'Round Trip',
'ClasedeServicio':'Service Class',
'NumOperacion':'Operation number',
'NIT':'NIT',
'ContrasenaActual':'Current password',
'ContrasenaNueva':'New password',
'ConfirmarContrasena':'Confirm password',
'FechaInicial':'INITIAL DATE',
'FechaFinal':'FINAL DATE',
'SaldoaDepositar':'DEPOSITBALANCE',
'MontoenFicha':'AMOUNT IN THE DEPOSIT ORDER',
'PresContinuarParaEmitirFicha':'Press &quot;Next&quot; to emit the deposit order',
'FichadeDeposito':'DEPOSIT ORDER',
'AgenciaMayus':'AGENCY',
'Banco':'BANK',
'Sucursal':'BRANCH',
'Cuenta':'ACCOUNT',
'NumReferInterbanc':'INTERBANK REFENCE NUMBER',
'CantidadaDepositar':'AMOUNT TO DEPOSIT',
'DatosdeCompra':'PURCHASE INFORMATION',
'TiempoRestante':'TIME REMAINING',
'ParaCompletarPaso':'To complete this step',
'SuSesionExpirara':'YOUR SESSION WILL EXPIRE: &#191;Do you want to add more time?',
'Ahorro':'Saving',
'Promocion':'Promo',
'Pasajeros':'PASSENGERS',
'Adultos':'Adults',
'Ninios':'Children',
'Insen':'Senior',
'Maestros':'Teachers',
'Estudiantes':'Students',
'GraciasporSuCompra':'Thanks for your purchase',
'VentaBoletosAgencias':'TICKET SALES AGENCY',
'Agencia':'Agency',
'Usuario':'User',
'Administrador':'Administrator',
'Venta':'Sale',
'BoletoAbierto':'Open Ticket',
'Intercambio':'Exchange',
'Cancelacion':'Cancelation',
'CambiarContrasena':'Change password',
'Saldos':'Balance',
'Movimientos':'Report',
'CerrarSesion':'Close session',
'AdministradorAgencias':'Manager agencies',
'Nombre':'Name',
'Elegir':'Choose',
'DiaMayus':'DAY',
'Inicio':'INITIATION',
'Fin':'END',
'DiaActivo':'ACTIVE DAY',
'NumTransacEmpresa':'Company transaction number ',
'NumAutorizBanco':'Bank autorization number',
'NumReciboBanco':'Bank receipt number',
'RSPagadoEnBanco':'Paid in Bank',
'RSSaldoConsumidoConvenio':'Balance consumed from agreement',
'RSSaldoConsumidoVF':'Balance consumed from Loyalty Program',
'Operacion':'Operation',
'Tipo':'Type',
'Monto':'Amount',
'Descuento':'Discount',
'ParaImpreBoletosenTaquilla':'To print your ticket at the ticket office, you should show a copy of an official and valid ID.',
'PasajeroResumen':'INFO',
'DatosSalida':'OUTWARD TRIP INFO',
'DatosRegreso':'RETURN TRIP INFO	',
'textorequiere':'required fields',
'pasaporte':'VISA',
'totalMay':'TOTAL',
'formapago1':'MEXICAN CREDIT CARD',
'formapago2':'AMERICAN CREDIT CARD',
'botonfiltro':'SEARCH',
'tipoviaje1':'One Way',
'tipoviaje2':'Round Trip',
'titulofiltros':'Book your trip',
'origenfil':'FROM',
'destinofil':'TO',
'fechasalidafil':'DEPARTURE',
'fecharegresofil':'RETURN',
'cargandoorides':'Loading...',
'telef':'Phone',
'correop':'Email',
'Nombrepas':'Passenger Name',
'RSTarjetaBancaria':'Bank Card',
'RSPuntosViajeroFrecuente':'Frecuent Traveler Points',
'RSNumeroConvenio':'Agreement Number',
'RSConvenio':'Agreement',
'RSARedimir':'To Redeem',
'RSPuntos':'Points',
'RSAPagarBanco':'To Pay At Bank',
'RSAPagar':'To Pay',
'RSNumero':'Number',
'RSPromocionInvalida':'Promotion is invalid or does not exist',
'RSConvenioInvalido':'Agreement Code is invalid or does not exist',
'RSNIP':'NIP',
'RSNIPInvalido':'NIP is invslid or member does not exist',
'Totalres':'Total Amount',
'MontoIva':'TAX',
'Montobruto':'Amount',
'TipoPasRes':'T. Passenger',
'Veravisopriva':'Privacy Policy',
'SeparadorTermyPriva':'and',
'mensajebancoerrA':'Do not close the browser, your transaction is being processed.',
'mensajebancoerrB':'If an error occurred, please call:',
'mensajebancoerrC':'Your session number is:',
'mensajebancoerrD':'Your card was:',
'Costo_n':'NORMAL COST',
'sencillo':'Single Decker',
'doble':'Double Decker',
'LeyendaVFCRM_1':'Name Frequent Flyer',
'LeyendaVFCRM_2':'Membership Level',
'LeyendaVFCRM_3':'Points Available',
'Tramo':'LOCATION',
'Empresa':'Carrier',
'Imprimir':'PRINT',
'Guardar':'SAVE BOARDING PASS',
'ViajeSalida':'Outward trip info',
'ViajeRegreso':'Return trip info',
'DeDondeSales':'Departure',
'ADondeVas':'Destination',
'Espera':'Loading...',
'PasoSalida':'Choose departure time',
'PasoRegreso':'Choose return time',
'PasoPersonaliza':'Review your buy',
'PasoAsiento':'Choose the seat',
'PasoResumen':'Payment Details',
'DatosTarjeta':'Cardholder Information',
'ConfirmaCorreo':'Confirm your email',
'Ahorras':'Your Saving',
'PasoFinal':'Travel confirmation',
'DescubreOfertas':'Discover the best deals.',
'TenemosHorarios':'We have the best prices and schedules.',
'InfoImportante':'IMPORTANT INFORMATION ABOUT YOUR TRIP',
'pdfPoliticas':'POLITICASCOMERCIALESINGLES.pdf',
'DetallesSalida':'Outward trip details',
'DetallesRegreso':'Return trip details',
'Regresar':'Back',
'Continuar':'Next',
'ConsultaTipoS':'CHECK OUT THE  SERVICE CLASSES',
'pdfTiposServicio':'TipoServicioINGLES.pdf',
'Nacionalidad':'Nationality',
'FechaNacimiento':'BirthDate',
'Confirma':'Confirm',
'IdiomaEncPie':'?Idioma=2',
'VerifiqueTitulo':'Verify that the information is correct',
'FiltrosAgencias':'Agencies Filters',
'TituloCancelacion':'Cancelation of tickets sold by Agency on Internet',
'FiltroAbierto':'Agencies Filters Open',
'Enviar':'Submit',
'Confirmado':'Confirmed',
'NoConfirmado':'Open',
'IntercambioLabel':'You are exchanging operation number(s)',
'UsuariosAgencia':'Agency Users',
'AdminHorario':'SCHEDULE ADMINISTRATOR',
'HorarioUsuario':'User schedule',
'Tarifanodisponible':'Price not available',
'ReporteMovimientos':'Movements Report',
'IntercambioError':'Exchanges can only be a ticket for another ticket .',
'FechaLabel':'Day/Month/Year',
'Sexo':'Genre',
'Male':'Male',
'Female':'Female',
'DocumentoPresentado':'Paper',
'NumDocumento':'Paper Number',
'FechaVencimiento':'Paper due date',
'PaisResidencia':'Residence Country',
'Por':'WITH CONNECTION IN',
'ClaveRuta':'Route Code',
'DescripccioRuta':'Route Description',
'TarifaRuta':'Route Cost',
'Seleccionar':'Select',
'PorPagar':'To Pay at the Agency'
};

var msjIN = {  // Mensajes de validaciones en alerts
'ContrasenaNoPuedeQuedarVacia':'Enter the password',
'ErroralConfirmarContrasena':'Error to confirm the password',
'OperacionNoPuedeQuedarVacia':'the operation number cannot be empty.',
'FavorTeclearUsuario':'Please enter a user',
'FavorTeclearContrasena':'Please Enter the Password',
'NoComprasdeMasde10Pasaj':'Not allowed a purchase over than 10 passengers',
'NoPuedeViajarMenorSolo':'A child can not travel alone, must be accompanied by an adult.',
'NecesitaSelecOrigen':'Please enter an origin',
'NecesitaSelecDestino':'Please select a destination',
'ErrorOrigDestIguales':'Error: origin a destination are the same',
'ElegirFechaValida':'Please select a valid date',
'FechaRegNoMenoraFechaSal':'The return date can not be lesser than the departure date',
'DebeSelecTipoPasajeroalMenos':'Please select at least one type of passenger',
'ElCampo':'The field ',  //verificar linea 1088 validaciones
'NoDebeContenerNum':'must contain only letters.',
'DebeContenerSoloNum':'must contain only numbers',
'NoTieneFormatoCorreo':' do not have an email format.',  //verificar linea 1112 validaciones
'Requerido':'Required',
'IntroducSoloNumeros':'Introduce just numbers',
'IntroducCorreoValido':'Introduce a valid email',
'NecesarioAceptTermCond':'Is necesary to accept terms and conditions',
'FaltaSeleccionar':'Need to select',
'AsientosdeIda':'departure seat(s)',
'AsientosdeRegreso':'return seat(s)',
'FaltaNombrePasajero':'Passenger name missing',
'FaltaDomicilio':'Please enter the address',
'FaltaCaptNomPasajero':'Please capture the name of passenger',
'RSFaltaApPaternoPasajero':'Passenger lastname missing',
'RSFaltaCaptApPaternoPasajero':'Please capture the lastname of passenger',
'FaltaCaptPasaporte':'Please capture the name of Visa',
'FaltaCapturarDomic':'Please enter the address',
'FaltaCapturarNumExt':'Please enter the address external number',
'FaltaCapturarNumInt':'Please enter the address internal number',
'FaltaCapturarDelMpio':'Please enter the Area or Municipality',
'FaltaCapturarEstado':'Please enter the State',
'FaltaCapturarCiudad':'Please enter a city',
'ErrorenCodPos':'The field Zip Code must contain only numbers',
'FaltaElegirPais':'Please choose a contry',
'ErrorenTelef':'Please capture a valid phone number',
'ErrorenEmail':'Please capture a valid email',
//'Pasajero':'Pasajero', utilizar el de txtIN
'ParaContinuarAceptTermCond':'To continue you must agree the terms and conditions set in the price and travel in the lower part of the screen.',
'DebeSelecTipoPasajero':'Please select a type of passenger',
'FavorSelecCorrida':'Please select a trip',
'FavorSelecRuta':'Please select a conection route',
'CorridaRegNoPuedeSerSelec':' The return trip can not be select because the departure date is lesser than the arrival date.',
'NoPuedeSelecCorridaTraslapeconIda':'It is not possible to select this trip because it is overlapped whith the outward trip',
'CantidadIncorrecta':'Incorrect amount please verify',
'SoloAceptaNumeros':'Only accepts numbers',
'PasajerosYaFueronSelec':'All passengers have already been selected',
'TipoPagoInvalido':'This type of payment is invalid',
'NoComprasdeMasde20Pasaj':'You can not make a pursache over 20 passengers',
'MontoFichaNoPuedeSerCero':'The amount of the deposit order can?t be zero',
'MontoFichaNoPuedeSerVacio':'The amount of the deposit order can not be empty',
'DepositoNoPuedeSerMayoraVenta':'The deposit order can not be bigger than the purchase order',
'FechaFinalNoMenoraInicial':'The final date can not be lesser than the initial date',
'ElegirUsuarioparaContinuar':'Please choose a user to continue.',
'Enero':'January',
'Febrero':'February',
'Marzo':'March',
'Abril':'April',
'Mayo':'May',
'Junio':'Jun',
'Julio':'July',
'Agosto':'August',
'Septiembre':'September',
'Octubre':'October',
'Noviembre':'November',
'Diciembre':'December',
'Lunes':'Monday',
'Martes':'Tuesday',
'Miercoles':'Wednesday',
'Jueves':'Thursday',
'Viernes':'Friday',
'Sabado':'Saturday',
'Domingo':'Sunday',
'informacionreq':'required Information',
'mensajecap':'ERROR: Capture the Code as shown.',
'RSNoPuedeSerMayorDe':'cannot be greater than',
'RSNoPuedeSerMenorDe':'cannot be smallet than',
'RSNoPuedeSerIgualA':'cannot be equal to',
'NoHayCorridas':'There is no service available on the date requested.',
'TituloSalida':'Choose departure time',
'TituloRegreso':'Choose return time',
'TituloRegistro':'Registration',
'TituloAsiento':'Choose the seat',
'TituloAsientoRegreso':'Choose the return seat',
'TituloResumen':'Verify your information',
'FaltaNombreTB':'Capture the cardholder name',
'EmailDIferente':'Emails do not match',
'SesionTerminada':'Your session has expired. Please try again.',
'TiempoAgotado':'Time Out',
'NoHayTarifas':'There is no fee for the selected criteria...',
'FechasDistintas': 'Dates do not match',
'NoNumOperacion':'Please capture an operation Number',
'NoNit':'Please capture the NIT',
'ContrasenaVacia':'Please enter the password',
'ErrorConfContrase':'Please confirm the new password',
'MenorPorAdulto':'Only two children can travel per each adult',
'FechasDistintas': 'Dates do not match',
'FaltaNumDocumento':'Introduce the paper number',
'ErrorNumDocumento':'Introduce a right paper number',
'FechaDocVencida':'The document presents will be overcome in the time of travel',
'FechaNacMes':'The birth date must be earlier than one month to the current date'
};

var paisesIN = "<option value='AF'>Afghanistan</option>"+
"<option value='AX'>Åland Islands</option>"+
"<option value='AL'>Albania</option>"+
"<option value='DZ'>Algeria</option>"+
"<option value='AS'>American Samoa</option>"+
"<option value='AD'>Andorra</option>"+
"<option value='AO'>Angola</option>"+
"<option value='AI'>Anguilla</option>"+
"<option value='AQ'>Antarctica</option>"+
"<option value='AG'>Antigua and Barbuda</option>"+
"<option value='AR'>Argentina</option>"+
"<option value='AM'>Armenia</option>"+
"<option value='AW'>Aruba</option>"+
"<option value='AU'>Australia</option>"+
"<option value='AT'>Austria</option>"+
"<option value='AZ'>Azerbaijan</option>"+
"<option value='BS'>Bahamas</option>"+
"<option value='BH'>Bahrain</option>"+
"<option value='BD'>Bangladesh</option>"+
"<option value='BB'>Barbados</option>"+
"<option value='BY'>Belarus</option>"+
"<option value='BE'>Belgium</option>"+
"<option value='BZ'>Belize</option>"+
"<option value='BJ'>Benin</option>"+
"<option value='BM'>Bermuda</option>"+
"<option value='BT'>Bhutan</option>"+
"<option value='BO'>Bolivia</option>"+
"<option value='BA'>Bosnia and Herzegovina</option>"+
"<option value='BW'>Botswana</option>"+
"<option value='BV'>Bouvet Island</option>"+
"<option value='BR'>Brazil</option>"+
"<option value='IO'>British Indian Ocean Territory</option>"+
"<option value='BN'>Brunei Darussalam</option>"+
"<option value='BG'>Bulgaria</option>"+
"<option value='BF'>Burkina Faso</option>"+
"<option value='BI'>Burundi</option>"+
"<option value='KH'>Cambodia</option>"+
"<option value='CM'>Cameroon</option>"+
"<option value='CA'>Canada</option>"+
"<option value='CV'>Cape Verde</option>"+
"<option value='KY'>Cayman Islands</option>"+
"<option value='CF'>Central African Republic</option>"+
"<option value='TD'>Chad</option>"+
"<option value='CL'>Chile</option>"+
"<option value='CN'>China</option>"+
"<option value='CX'>Christmas Island</option>"+
"<option value='CC'>Cocos (Keeling) Islands</option>"+
"<option value='CO'>Colombia</option>"+
"<option value='KM'>Comoros</option>"+
"<option value='CG'>Congo</option>"+
"<option value='CD'>Congo, The Democratic Republic of The</option>"+
"<option value='CK'>Cook Islands</option>"+
"<option value='CR'>Costa Rica</option>"+
"<option value='CI'>Cote D'ivoire</option>"+
"<option value='HR'>Croatia</option>"+
"<option value='CU'>Cuba</option>"+
"<option value='CY'>Cyprus</option>"+
"<option value='CZ'>Czech Republic</option>"+
"<option value='DK'>Denmark</option>"+
"<option value='DJ'>Djibouti</option>"+
"<option value='DM'>Dominica</option>"+
"<option value='DO'>Dominican Republic</option>"+
"<option value='EC'>Ecuador</option>"+
"<option value='EG'>Egypt</option>"+
"<option value='SV'>El Salvador</option>"+
"<option value='GQ'>Equatorial Guinea</option>"+
"<option value='ER'>Eritrea</option>"+
"<option value='EE'>Estonia</option>"+
"<option value='ET'>Ethiopia</option>"+
"<option value='FK'>Falkland Islands (Malvinas)</option>"+
"<option value='FO'>Faroe Islands</option>"+
"<option value='FJ'>Fiji</option>"+
"<option value='FI'>Finland</option>"+
"<option value='FR'>France</option>"+
"<option value='GF'>French Guiana</option>"+
"<option value='PF'>French Polynesia</option>"+
"<option value='TF'>French Southern Territories</option>"+
"<option value='GA'>Gabon</option>"+
"<option value='GM'>Gambia</option>"+
"<option value='GE'>Georgia</option>"+
"<option value='DE'>Germany</option>"+
"<option value='GH'>Ghana</option>"+
"<option value='GI'>Gibraltar</option>"+
"<option value='GR'>Greece</option>"+
"<option value='GL'>Greenland</option>"+
"<option value='GD'>Grenada</option>"+
"<option value='GP'>Guadeloupe</option>"+
"<option value='GU'>Guam</option>"+
"<option value='GT'>Guatemala</option>"+
"<option value='GG'>Guernsey</option>"+
"<option value='GN'>Guinea</option>"+
"<option value='GW'>Guinea-bissau</option>"+
"<option value='GY'>Guyana</option>"+
"<option value='HT'>Haiti</option>"+
"<option value='HM'>Heard Island and Mcdonald Islands</option>"+
"<option value='VA'>Holy See (Vatican City State)</option>"+
"<option value='HN'>Honduras</option>"+
"<option value='HK'>Hong Kong</option>"+
"<option value='HU'>Hungary</option>"+
"<option value='IS'>Iceland</option>"+
"<option value='IN'>India</option>"+
"<option value='ID'>Indonesia</option>"+
"<option value='IR'>Iran, Islamic Republic of</option>"+
"<option value='IQ'>Iraq</option>"+
"<option value='IE'>Ireland</option>"+
"<option value='IM'>Isle of Man</option>"+
"<option value='IL'>Israel</option>"+
"<option value='IT'>Italy</option>"+
"<option value='JM'>Jamaica</option>"+
"<option value='JP'>Japan</option>"+
"<option value='JE'>Jersey</option>"+
"<option value='JO'>Jordan</option>"+
"<option value='KZ'>Kazakhstan</option>"+
"<option value='KE'>Kenya</option>"+
"<option value='KI'>Kiribati</option>"+
"<option value='KP'>Korea, Democratic People's Republic of</option>"+
"<option value='KR'>Korea, Republic of</option>"+
"<option value='KW'>Kuwait</option>"+
"<option value='KG'>Kyrgyzstan</option>"+
"<option value='LA'>Lao People's Democratic Republic</option>"+
"<option value='LV'>Latvia</option>"+
"<option value='LB'>Lebanon</option>"+
"<option value='LS'>Lesotho</option>"+
"<option value='LR'>Liberia</option>"+
"<option value='LY'>Libyan Arab Jamahiriya</option>"+
"<option value='LI'>Liechtenstein</option>"+
"<option value='LT'>Lithuania</option>"+
"<option value='LU'>Luxembourg</option>"+
"<option value='MO'>Macao</option>"+
"<option value='MK'>Macedonia, The Former Yugoslav Republic of</option>"+
"<option value='MG'>Madagascar</option>"+
"<option value='MW'>Malawi</option>"+
"<option value='MY'>Malaysia</option>"+
"<option value='MV'>Maldives</option>"+
"<option value='ML'>Mali</option>"+
"<option value='MT'>Malta</option>"+
"<option value='MH'>Marshall Islands</option>"+
"<option value='MQ'>Martinique</option>"+
"<option value='MR'>Mauritania</option>"+
"<option value='MU'>Mauritius</option>"+
"<option value='YT'>Mayotte</option>"+
"<option value='MX' selected>Mexico</option>"+
"<option value='FM'>Micronesia, Federated States of</option>"+
"<option value='MD'>Moldova, Republic of</option>"+
"<option value='MC'>Monaco</option>"+
"<option value='MN'>Mongolia</option>"+
"<option value='ME'>Montenegro</option>"+
"<option value='MS'>Montserrat</option>"+
"<option value='MA'>Morocco</option>"+
"<option value='MZ'>Mozambique</option>"+
"<option value='MM'>Myanmar</option>"+
"<option value='NA'>Namibia</option>"+
"<option value='NR'>Nauru</option>"+
"<option value='NP'>Nepal</option>"+
"<option value='NL'>Netherlands</option>"+
"<option value='AN'>Netherlands Antilles</option>"+
"<option value='NC'>New Caledonia</option>"+
"<option value='NZ'>New Zealand</option>"+
"<option value='NI'>Nicaragua</option>"+
"<option value='NE'>Niger</option>"+
"<option value='NG'>Nigeria</option>"+
"<option value='NU'>Niue</option>"+
"<option value='NF'>Norfolk Island</option>"+
"<option value='MP'>Northern Mariana Islands</option>"+
"<option value='NO'>Norway</option>"+
"<option value='OM'>Oman</option>"+
"<option value='PK'>Pakistan</option>"+
"<option value='PW'>Palau</option>"+
"<option value='PS'>Palestinian Territory, Occupied</option>"+
"<option value='PA'>Panama</option>"+
"<option value='PG'>Papua New Guinea</option>"+
"<option value='PY'>Paraguay</option>"+
"<option value='PE'>Peru</option>"+
"<option value='PH'>Philippines</option>"+
"<option value='PN'>Pitcairn</option>"+
"<option value='PL'>Poland</option>"+
"<option value='PT'>Portugal</option>"+
"<option value='PR'>Puerto Rico</option>"+
"<option value='QA'>Qatar</option>"+
"<option value='RE'>Reunion</option>"+
"<option value='RO'>Romania</option>"+
"<option value='RU'>Russian Federation</option>"+
"<option value='RW'>Rwanda</option>"+
"<option value='SH'>Saint Helena</option>"+
"<option value='KN'>Saint Kitts and Nevis</option>"+
"<option value='LC'>Saint Lucia</option>"+
"<option value='PM'>Saint Pierre and Miquelon</option>"+
"<option value='VC'>Saint Vincent and The Grenadines</option>"+
"<option value='WS'>Samoa</option>"+
"<option value='SM'>San Marino</option>"+
"<option value='ST'>Sao Tome and Principe</option>"+
"<option value='SA'>Saudi Arabia</option>"+
"<option value='SN'>Senegal</option>"+
"<option value='RS'>Serbia</option>"+
"<option value='SC'>Seychelles</option>"+
"<option value='SL'>Sierra Leone</option>"+
"<option value='SG'>Singapore</option>"+
"<option value='SK'>Slovakia</option>"+
"<option value='SI'>Slovenia</option>"+
"<option value='SB'>Solomon Islands</option>"+
"<option value='SO'>Somalia</option>"+
"<option value='ZA'>South Africa</option>"+
"<option value='GS'>South Georgia and The South Sandwich Islands</option>"+
"<option value='ES'>Spain</option>"+
"<option value='LK'>Sri Lanka</option>"+
"<option value='SD'>Sudan</option>"+
"<option value='SR'>Suriname</option>"+
"<option value='SJ'>Svalbard and Jan Mayen</option>"+
"<option value='SZ'>Swaziland</option>"+
"<option value='SE'>Sweden</option>"+
"<option value='CH'>Switzerland</option>"+
"<option value='SY'>Syrian Arab Republic</option>"+
"<option value='TW'>Taiwan, Province of China</option>"+
"<option value='TJ'>Tajikistan</option>"+
"<option value='TZ'>Tanzania, United Republic of</option>"+
"<option value='TH'>Thailand</option>"+
"<option value='TL'>Timor-leste</option>"+
"<option value='TG'>Togo</option>"+
"<option value='TK'>Tokelau</option>"+
"<option value='TO'>Tonga</option>"+
"<option value='TT'>Trinidad and Tobago</option>"+
"<option value='TN'>Tunisia</option>"+
"<option value='TR'>Turkey</option>"+
"<option value='TM'>Turkmenistan</option>"+
"<option value='TC'>Turks and Caicos Islands</option>"+
"<option value='TV'>Tuvalu</option>"+
"<option value='UG'>Uganda</option>"+
"<option value='UA'>Ukraine</option>"+
"<option value='AE'>United Arab Emirates</option>"+
"<option value='GB'>United Kingdom</option>"+
"<option value='US'>United States</option>"+
"<option value='UM'>United States Minor Outlying Islands</option>"+
"<option value='UY'>Uruguay</option>"+
"<option value='UZ'>Uzbekistan</option>"+
"<option value='VU'>Vanuatu</option>"+
"<option value='VE'>Venezuela</option>"+
"<option value='VN'>Viet Nam</option>"+
"<option value='VG'>Virgin Islands, British</option>"+
"<option value='VI'>Virgin Islands, U.S.</option>"+
"<option value='WF'>Wallis and Futuna</option>"+
"<option value='EH'>Western Sahara</option>"+
"<option value='YE'>Yemen</option>"+
"<option value='ZM'>Zambia</option>"+
"<option value='ZW'>Zimbabwe</option>";

var paisesINTB = "<option value='AF'>Afghanistan</option>"+
"<option value='AX'>Åland Islands</option>"+
"<option value='AL'>Albania</option>"+
"<option value='DZ'>Algeria</option>"+
"<option value='AS'>American Samoa</option>"+
"<option value='AD'>Andorra</option>"+
"<option value='AO'>Angola</option>"+
"<option value='AI'>Anguilla</option>"+
"<option value='AQ'>Antarctica</option>"+
"<option value='AG'>Antigua and Barbuda</option>"+
"<option value='AR'>Argentina</option>"+
"<option value='AM'>Armenia</option>"+
"<option value='AW'>Aruba</option>"+
"<option value='AU'>Australia</option>"+
"<option value='AT'>Austria</option>"+
"<option value='AZ'>Azerbaijan</option>"+
"<option value='BS'>Bahamas</option>"+
"<option value='BH'>Bahrain</option>"+
"<option value='BD'>Bangladesh</option>"+
"<option value='BB'>Barbados</option>"+
"<option value='BY'>Belarus</option>"+
"<option value='BE'>Belgium</option>"+
"<option value='BZ'>Belize</option>"+
"<option value='BJ'>Benin</option>"+
"<option value='BM'>Bermuda</option>"+
"<option value='BT'>Bhutan</option>"+
"<option value='BO'>Bolivia</option>"+
"<option value='BA'>Bosnia and Herzegovina</option>"+
"<option value='BW'>Botswana</option>"+
"<option value='BV'>Bouvet Island</option>"+
"<option value='BR'>Brazil</option>"+
"<option value='IO'>British Indian Ocean Territory</option>"+
"<option value='BN'>Brunei Darussalam</option>"+
"<option value='BG'>Bulgaria</option>"+
"<option value='BF'>Burkina Faso</option>"+
"<option value='BI'>Burundi</option>"+
"<option value='KH'>Cambodia</option>"+
"<option value='CM'>Cameroon</option>"+
"<option value='CA'>Canada</option>"+
"<option value='CV'>Cape Verde</option>"+
"<option value='KY'>Cayman Islands</option>"+
"<option value='CF'>Central African Republic</option>"+
"<option value='TD'>Chad</option>"+
"<option value='CL'>Chile</option>"+
"<option value='CN'>China</option>"+
"<option value='CX'>Christmas Island</option>"+
"<option value='CC'>Cocos (Keeling) Islands</option>"+
"<option value='CO'>Colombia</option>"+
"<option value='KM'>Comoros</option>"+
"<option value='CG'>Congo</option>"+
"<option value='CD'>Congo, The Democratic Republic of The</option>"+
"<option value='CK'>Cook Islands</option>"+
"<option value='CR'>Costa Rica</option>"+
"<option value='CI'>Cote D'ivoire</option>"+
"<option value='HR'>Croatia</option>"+
"<option value='CU'>Cuba</option>"+
"<option value='CY'>Cyprus</option>"+
"<option value='CZ'>Czech Republic</option>"+
"<option value='DK'>Denmark</option>"+
"<option value='DJ'>Djibouti</option>"+
"<option value='DM'>Dominica</option>"+
"<option value='DO'>Dominican Republic</option>"+
"<option value='EC'>Ecuador</option>"+
"<option value='EG'>Egypt</option>"+
"<option value='SV'>El Salvador</option>"+
"<option value='GQ'>Equatorial Guinea</option>"+
"<option value='ER'>Eritrea</option>"+
"<option value='EE'>Estonia</option>"+
"<option value='ET'>Ethiopia</option>"+
"<option value='FK'>Falkland Islands (Malvinas)</option>"+
"<option value='FO'>Faroe Islands</option>"+
"<option value='FJ'>Fiji</option>"+
"<option value='FI'>Finland</option>"+
"<option value='FR'>France</option>"+
"<option value='GF'>French Guiana</option>"+
"<option value='PF'>French Polynesia</option>"+
"<option value='TF'>French Southern Territories</option>"+
"<option value='GA'>Gabon</option>"+
"<option value='GM'>Gambia</option>"+
"<option value='GE'>Georgia</option>"+
"<option value='DE'>Germany</option>"+
"<option value='GH'>Ghana</option>"+
"<option value='GI'>Gibraltar</option>"+
"<option value='GR'>Greece</option>"+
"<option value='GL'>Greenland</option>"+
"<option value='GD'>Grenada</option>"+
"<option value='GP'>Guadeloupe</option>"+
"<option value='GU'>Guam</option>"+
"<option value='GT'>Guatemala</option>"+
"<option value='GG'>Guernsey</option>"+
"<option value='GN'>Guinea</option>"+
"<option value='GW'>Guinea-bissau</option>"+
"<option value='GY'>Guyana</option>"+
"<option value='HT'>Haiti</option>"+
"<option value='HM'>Heard Island and Mcdonald Islands</option>"+
"<option value='VA'>Holy See (Vatican City State)</option>"+
"<option value='HN'>Honduras</option>"+
"<option value='HK'>Hong Kong</option>"+
"<option value='HU'>Hungary</option>"+
"<option value='IS'>Iceland</option>"+
"<option value='IN'>India</option>"+
"<option value='ID'>Indonesia</option>"+
"<option value='IR'>Iran, Islamic Republic of</option>"+
"<option value='IQ'>Iraq</option>"+
"<option value='IE'>Ireland</option>"+
"<option value='IM'>Isle of Man</option>"+
"<option value='IL'>Israel</option>"+
"<option value='IT'>Italy</option>"+
"<option value='JM'>Jamaica</option>"+
"<option value='JP'>Japan</option>"+
"<option value='JE'>Jersey</option>"+
"<option value='JO'>Jordan</option>"+
"<option value='KZ'>Kazakhstan</option>"+
"<option value='KE'>Kenya</option>"+
"<option value='KI'>Kiribati</option>"+
"<option value='KP'>Korea, Democratic People's Republic of</option>"+
"<option value='KR'>Korea, Republic of</option>"+
"<option value='KW'>Kuwait</option>"+
"<option value='KG'>Kyrgyzstan</option>"+
"<option value='LA'>Lao People's Democratic Republic</option>"+
"<option value='LV'>Latvia</option>"+
"<option value='LB'>Lebanon</option>"+
"<option value='LS'>Lesotho</option>"+
"<option value='LR'>Liberia</option>"+
"<option value='LY'>Libyan Arab Jamahiriya</option>"+
"<option value='LI'>Liechtenstein</option>"+
"<option value='LT'>Lithuania</option>"+
"<option value='LU'>Luxembourg</option>"+
"<option value='MO'>Macao</option>"+
"<option value='MK'>Macedonia, The Former Yugoslav Republic of</option>"+
"<option value='MG'>Madagascar</option>"+
"<option value='MW'>Malawi</option>"+
"<option value='MY'>Malaysia</option>"+
"<option value='MV'>Maldives</option>"+
"<option value='ML'>Mali</option>"+
"<option value='MT'>Malta</option>"+
"<option value='MH'>Marshall Islands</option>"+
"<option value='MQ'>Martinique</option>"+
"<option value='MR'>Mauritania</option>"+
"<option value='MU'>Mauritius</option>"+
"<option value='YT'>Mayotte</option>"+
"<option value='MX'>Mexico</option>"+
"<option value='FM'>Micronesia, Federated States of</option>"+
"<option value='MD'>Moldova, Republic of</option>"+
"<option value='MC'>Monaco</option>"+
"<option value='MN'>Mongolia</option>"+
"<option value='ME'>Montenegro</option>"+
"<option value='MS'>Montserrat</option>"+
"<option value='MA'>Morocco</option>"+
"<option value='MZ'>Mozambique</option>"+
"<option value='MM'>Myanmar</option>"+
"<option value='NA'>Namibia</option>"+
"<option value='NR'>Nauru</option>"+
"<option value='NP'>Nepal</option>"+
"<option value='NL'>Netherlands</option>"+
"<option value='AN'>Netherlands Antilles</option>"+
"<option value='NC'>New Caledonia</option>"+
"<option value='NZ'>New Zealand</option>"+
"<option value='NI'>Nicaragua</option>"+
"<option value='NE'>Niger</option>"+
"<option value='NG'>Nigeria</option>"+
"<option value='NU'>Niue</option>"+
"<option value='NF'>Norfolk Island</option>"+
"<option value='MP'>Northern Mariana Islands</option>"+
"<option value='NO'>Norway</option>"+
"<option value='OM'>Oman</option>"+
"<option value='PK'>Pakistan</option>"+
"<option value='PW'>Palau</option>"+
"<option value='PS'>Palestinian Territory, Occupied</option>"+
"<option value='PA'>Panama</option>"+
"<option value='PG'>Papua New Guinea</option>"+
"<option value='PY'>Paraguay</option>"+
"<option value='PE'>Peru</option>"+
"<option value='PH'>Philippines</option>"+
"<option value='PN'>Pitcairn</option>"+
"<option value='PL'>Poland</option>"+
"<option value='PT'>Portugal</option>"+
"<option value='PR'>Puerto Rico</option>"+
"<option value='QA'>Qatar</option>"+
"<option value='RE'>Reunion</option>"+
"<option value='RO'>Romania</option>"+
"<option value='RU'>Russian Federation</option>"+
"<option value='RW'>Rwanda</option>"+
"<option value='SH'>Saint Helena</option>"+
"<option value='KN'>Saint Kitts and Nevis</option>"+
"<option value='LC'>Saint Lucia</option>"+
"<option value='PM'>Saint Pierre and Miquelon</option>"+
"<option value='VC'>Saint Vincent and The Grenadines</option>"+
"<option value='WS'>Samoa</option>"+
"<option value='SM'>San Marino</option>"+
"<option value='ST'>Sao Tome and Principe</option>"+
"<option value='SA'>Saudi Arabia</option>"+
"<option value='SN'>Senegal</option>"+
"<option value='RS'>Serbia</option>"+
"<option value='SC'>Seychelles</option>"+
"<option value='SL'>Sierra Leone</option>"+
"<option value='SG'>Singapore</option>"+
"<option value='SK'>Slovakia</option>"+
"<option value='SI'>Slovenia</option>"+
"<option value='SB'>Solomon Islands</option>"+
"<option value='SO'>Somalia</option>"+
"<option value='ZA'>South Africa</option>"+
"<option value='GS'>South Georgia and The South Sandwich Islands</option>"+
"<option value='ES'>Spain</option>"+
"<option value='LK'>Sri Lanka</option>"+
"<option value='SD'>Sudan</option>"+
"<option value='SR'>Suriname</option>"+
"<option value='SJ'>Svalbard and Jan Mayen</option>"+
"<option value='SZ'>Swaziland</option>"+
"<option value='SE'>Sweden</option>"+
"<option value='CH'>Switzerland</option>"+
"<option value='SY'>Syrian Arab Republic</option>"+
"<option value='TW'>Taiwan, Province of China</option>"+
"<option value='TJ'>Tajikistan</option>"+
"<option value='TZ'>Tanzania, United Republic of</option>"+
"<option value='TH'>Thailand</option>"+
"<option value='TL'>Timor-leste</option>"+
"<option value='TG'>Togo</option>"+
"<option value='TK'>Tokelau</option>"+
"<option value='TO'>Tonga</option>"+
"<option value='TT'>Trinidad and Tobago</option>"+
"<option value='TN'>Tunisia</option>"+
"<option value='TR'>Turkey</option>"+
"<option value='TM'>Turkmenistan</option>"+
"<option value='TC'>Turks and Caicos Islands</option>"+
"<option value='TV'>Tuvalu</option>"+
"<option value='UG'>Uganda</option>"+
"<option value='UA'>Ukraine</option>"+
"<option value='AE'>United Arab Emirates</option>"+
"<option value='GB'>United Kingdom</option>"+
"<option value='US' selected>United States</option>"+
"<option value='UM'>United States Minor Outlying Islands</option>"+
"<option value='UY'>Uruguay</option>"+
"<option value='UZ'>Uzbekistan</option>"+
"<option value='VU'>Vanuatu</option>"+
"<option value='VE'>Venezuela</option>"+
"<option value='VN'>Viet Nam</option>"+
"<option value='VG'>Virgin Islands, British</option>"+
"<option value='VI'>Virgin Islands, U.S.</option>"+
"<option value='WF'>Wallis and Futuna</option>"+
"<option value='EH'>Western Sahara</option>"+
"<option value='YE'>Yemen</option>"+
"<option value='ZM'>Zambia</option>"+
"<option value='ZW'>Zimbabwe</option>";

var estadoIN = "<option value='AS'>AGUASCALIENTES</option>"+
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
	
function  RecuperaTxtIN()
{
	return txtIN;
}

function RecuperaMsjIN()
{
	return msjIN;
}

function RecupColumnasIN()
{
	return ColumnasIN;
}

function RecupPaisesIN()
{
	return paisesIN;
}
function RecupEstadoIN()
{
	return estadoIN;
}
function RecupPaisesINTB()
{
	return paisesINTB;
}
