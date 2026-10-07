	function cargaOrigenes(id){
		http = CreateRequest();
		http.open("GET","/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=OrigenDestino",true);
		http.onreadystatechange  = function(){
			if(http.readyState == 4 && http.status == 200) {
				$(".ui-autocomplete-input")[0].value = ""
				$("#"+id).html('');
				$("#"+id).append(http.responseText);
				if(paso!=50 && paso!=0 && paso!=10) 
				{	$("#tdOrigen option[value="+oficinao+"]").attr("selected",true);
					$(".ui-autocomplete-input")[0].value = oficinaori; 
					cargaDestinos(oficinao,"tdDestino"); 
					$(".ui-autocomplete-input")[0].id= 'orifil';
					}
			}
		}
		$(".ui-autocomplete-input")[0].value = "cargando..."
		http.send(null);
	}
	function cargaDestinos(par,id){
		http = CreateRequest();
		http.open("GET","/netScripts/Request.aspx?APPNAME=Navegante&PRGNAME=OrigenDestino&ARGUMENTS=-A"+ par ,true);
		http.onreadystatechange  = function(){
			if(http.readyState == 4 && http.status == 200) {
				$(".ui-autocomplete-input")[1].value = ""
				$("#"+id).html('');
				$("#"+id).append(http.responseText);
				if(paso!=50 && paso!=0 && paso!=10)
				{	if($("#tdOrigen").val() == oficinao) {$("#tdDestino option[value="+oficinar+"]").attr("selected",true);
					$(".ui-autocomplete-input")[1].value = oficinareg;}
					$(".ui-autocomplete-input")[1].id= 'desfil';					
					}
			}
		}
		$(".ui-autocomplete-input")[1].value = "cargando..."
		http.send(null);
	}
	(function( $ ) {
		$.widget( "ui.combobox", {
			_create: function(a) {
				var self = this,
					select = this.element.hide(),
					selected = select.children( ":selected" ),
					value = selected.val() ? selected.text() : "";
				var input = this.input = $( "<input>" )
					.insertAfter( select )
					.val( value )
					.autocomplete({
						delay: 0,
						minLength: 0,
						source: function( request, response ) {
							var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
							response( select.children( "option" ).map(function() {
								var text = $( this ).text();
								if ( this.value && ( !request.term || matcher.test(text) ) )
									return {
										label: text.replace(
											new RegExp(
												"(?![^&;]+;)(?!<[^<>]*)(" +
												$.ui.autocomplete.escapeRegex(request.term) +
												")(?![^<>]*>)(?![^&;]+;)", "gi"
											), "<strong>$1</strong>" ),
										value: text,
										option: this
									};
							}) );
						},
						select: function( event, ui ) {
							ui.item.option.selected = true;
							self._trigger( "selected", event, {
								item: ui.item.option
							});
							
							if(ui.item.option.parentNode.id == 'tdOrigen')
								cargaDestinos(ui.item.option.value,'tdDestino');
						},
						change: function( event, ui ) {
							if ( !ui.item ) {
								var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( $(this).val() ) + "$", "i" ),
									valid = false;
								select.children( "option" ).each(function() {
									if ( $( this ).text().match( matcher ) ) {
										this.selected = valid = true;
										return false;
									}
								});
								if ( !valid ) {
									// remove invalid value, as it didn't match anything
									$( this ).val( "" );
									select.val( "" );
									input.data( "autocomplete" ).term = "";
									return false;
								}
								
							}
							
						}
					})
					.addClass( "ui-widget ui-widget-content ui-corner-left" )
					.attr("placeholder","Seleccione");
					
				input.data( "autocomplete" )._renderItem = function( ul, item ) {
					return $( "<li></li>" )
						.data( "item.autocomplete", item )
						.append( "<a>" + item.label + "</a>" )
						.appendTo( ul );
				};

				this.button = $( "<button type='button'>&nbsp;</button>" )
					.attr( "tabIndex", -1 )
					.attr( "title", "Show All Items" )
					.insertAfter( input )
					.button({
						icons: {
							primary: "ui-icon-triangle-1-s"
						},
						text: false
					})
					.removeClass( "ui-corner-all" )
					.addClass( "ui-corner-right ui-button-icon" )
					.click(function() {
						// close if already visible
						//input.val("")
						if ( input.autocomplete( "widget" ).is( ":visible" ) ) {
							input.autocomplete( "close" );
							return;
						}

						// work around a bug (likely same cause as #5265)
						$( this ).blur();

						// pass empty string as value to search for, displaying all results
						input.autocomplete( "search", "" );
						input.focus();
					});
			},

			destroy: function() {
				this.input.remove();
				this.button.remove();
				this.element.show();
				$.Widget.prototype.destroy.call( this );
			}
		});
	})( jQuery );