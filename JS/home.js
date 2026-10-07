(function ($) {
	$(document).ready(function(){
		$('#slideshow ul')
		.after('<div id="slideshow_pager">')
		.cycle({
			pager: '#slideshow_pager',
			pause: 1
		});
		
		$('.campo').addClass('ui-widget ui-state-default ui-corner-all');
		$('.boton').button();
	});
}(jQuery));