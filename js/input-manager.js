$(document).ready(function() {
	var InputManager = function(){
		this.dealClick = function(event){
			
		}
		$('.menu .secondary').on('click', function() {
			$('.secondary').removeClass('visible');
		});
		$('.menu .secondary').on('click', function() {
			$('.secondary').removeClass('visible');
		});

		$('.menu .primary .icon').on('click', function() {
			$('.secondary').addClass('visible');
		});
		$('.main-content').on('click', function() {
			$('.secondary').removeClass('visible');
		});
	}
	var inputManager = new InputManager();
	window.inputManager = inputManager;


	(function($) {
	  $.fn.nodoubletapzoom = function() {
	      $(this).bind('touchstart', function preventZoom(e) {
	        var t2 = e.timeStamp
	          , t1 = $(this).data('lastTouch') || t2
	          , dt = t2 - t1
	          , fingers = e.originalEvent.touches.length;
	        $(this).data('lastTouch', t2);
	        if (!dt || dt > 500 || fingers > 1) return; // not double-tap

	        e.preventDefault(); // double tap - prevent the zoom
	        // also synthesize click events we just swallowed up
	        $(this).trigger('click').trigger('click');
	      });
	  };
	})(jQuery);

	$('#menus').nodoubletapzoom();


	$(document).keydown(function(e) {
	    // ESCAPE key pressed
	    if (e.keyCode == 27) {
	        window.cubeManager.setActive(false);
	    }
	});

});