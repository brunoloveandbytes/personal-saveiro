
$(document).ready(function() {
	var currentIdx = 1;
	var mouseclicked = 0;
	var lastMousePosition = {
	  x: null,
	  y: null
	};
	var drag = {
		x: -22,
		y: 0,
		verify: function(){
		  if(this.x < -22) this.x = -22;
		  if(this.x > $('.tour_left_bar_sequence').width()-42) this.x = $('.tour_left_bar_sequence').width()-42;
		  $('.tour_handle_sequence').css('left',drag.x+'px');
		  var normal = (drag.x+22)/($('.tour_left_bar_sequence').width()-20);
		  var idx = parseInt(5*normal);
		  if(idx==5){
			window.cubeManager.setActive(true);
			window.cubeManager.setCubeName('saveiro_aventura_interno');
		  }
		  if(parseInt(5*normal) != currentIdx){
		  	if(parseInt(5*normal) <= 4){
		  		$('.shadow_item'+(currentIdx+1)).css('left','100%');
		  		$('.aventura_car_item'+(currentIdx+1)).css('left','100%');
		  		$('.trabalho_car_item'+(currentIdx+1)).css('left','100%');
		  		currentIdx = parseInt(5*normal);;
		  		$('.shadow_item'+(currentIdx+1)).css('left','0%');
		  		$('.aventura_car_item'+(currentIdx+1)).css('left','0%');
		  		$('.trabalho_car_item'+(currentIdx+1)).css('left','0%');
		  	}
		  	console.log(currentIdx);
		  }
		}
	}
	$('.tour_handle_sequence').mousedown(function(){
		mouseclicked=1;
	});
	$('.tour_handle_sequence').mouseup(function(){
		mouseclicked--;
		lastMousePosition.x = null;
		lastMousePosition.y = null;
	});
	$('.tour_handle_sequence').mousemove(function(e){
	if(mouseclicked > 0){
	  if(lastMousePosition.x != null){
	    drag.x += e.clientX - lastMousePosition.x;
	    drag.y += e.clientY - lastMousePosition.y;
	    drag.verify();
	  }
	  lastMousePosition.x = e.clientX;
	  lastMousePosition.y = e.clientY;
	}
	});

	$('.tour_slider_sequence').mouseleave(function() {
	  	mouseclicked--;
		lastMousePosition.x = null;
		lastMousePosition.y = null;
	});

});