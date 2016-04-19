
$(document).ready(function() {
	var mousedown = 0;
	var quickFix = 19;
	var timerId = null;
	var lastMousePosition = {
	  x: null
	};
	var drag = {
		x: 0,
		verify: function(){
			quickFix = $('.trail').offset().left-$('.ruler').offset().left-31;
			var normalized = (this.x - $('.versoes .trail').offset().left)/$('.versoes .trail').width();
			if(normalized<0)normalized=0;
			if(normalized>1)normalized=1;

			console.log(normalized);
			var idx = 1+parseInt(0.5+parseInt(12*(normalized))/2);
		  	$('.versoes .handle').css('left',quickFix + normalized*$('.versoes .trail').width()+'px');
		  	versoesManager.goToIdx(idx);
		},
		snap: function(){
			var idx = versoesManager.getCurrentIdx();
			var novo;
			var target= quickFix+parseInt($('.versoes .trail').width()*(idx-1)/6);
			var atual = $('.versoes .handle').position().left;
			novo = parseInt(0.7*atual+0.3*target);
			if(novo == atual){
				$('.versoes .handle').css('left',target+'px');
				clearInterval(timerId);
				timerId = null;	
			}else{
				$('.versoes .handle').css('left',novo+'px');	
			}
			console.log('running...');
		},
		snapOnce: function(){
			var idx = versoesManager.getCurrentIdx();
			var novo;
			quickFix = $('.trail').offset().left-$('.ruler').offset().left-31;
			var target= quickFix+parseInt($('.versoes .trail').width()*(idx-1)/6);
			$('.versoes .handle').css('left',target+'px');
		}
	}

	$('.versoes .handle').mousedown(function(){
		mousedown=1;
	});
	

	$('.versoes .ruler').mousedown(function(){
		mousedown=1;
	});

	$('.versoes .handle').mouseup(function(){
		mousedown=0;
		lastMousePosition.x = null;
		lastMousePosition.y = null;
		if(timerId==null){
			timerId = setInterval(function () {
		      drag.snap();
		    }, 20);	
		}
	});

	$('.versoes .ruler').mousemove(function(e){
		if(mousedown > 0){
		  if(lastMousePosition.x != null){
		  	//console.log('X: '+ (e.clientX - lastMousePosition.x));
		    drag.x += e.clientX - lastMousePosition.x;
		    drag.verify();
		  }else{
		  	drag.x = e.clientX;
		  }
		  lastMousePosition.x = e.clientX;
		}
	});

	$('.versoes .ruler').mouseleave(function() {
		mousedown=0;
		if(timerId==null){
			timerId = setInterval(function () {
		      drag.snap();
		    }, 20);	
		}
	});
	$('.versoes .ruler').mouseup(function(){
		mousedown=0;
		lastMousePosition.x = null;
		if(timerId==null){
			timerId = setInterval(function () {
		      drag.snap();
		    }, 20);	
		}
	});



	var VersoesManager = function(){
		var currentIdx = 1;
		var maxIdx = 7;
		this.getCurrentIdx = function(){
			return currentIdx;
		}
		this.goToRight = function(){
			$('.car'+currentIdx).css('left','100%');
			currentIdx++;
			if(currentIdx > maxIdx){
				currentIdx = 1;
			}
			$('.car'+currentIdx).css('left','0%');
			drag.snapOnce();
		}
		this.goToLeft = function(){
			$('.car'+currentIdx).css('left','100%');
			currentIdx--;
			if(currentIdx < 1){
				currentIdx = maxIdx;
			}
			$('.car'+currentIdx).css('left','0%');
			drag.snapOnce();
		}
		this.goToIdx = function(idx){
			if(currentIdx!=idx){
				$('.car'+currentIdx).css('left','100%');
				currentIdx=idx;
				//console.log(idx);
				$('.car'+currentIdx).css('left','0%');
			}
		}
		this.switchDescription = function(elem){
			$father = $(elem).parent().parent();
			if($(elem).parent().hasClass('itens')){
				if(!$father.find('.itens').hasClass('open')){
					$father.find('.itens').addClass('open');
					$father.find('.opcionais').removeClass('open');
					$father.find('.opcionais').removeClass('closed-cores');
					$father.find('.opcionais').addClass('closed-serie');
					$father.find('.cores').removeClass('open');
				}
			}
			if($(elem).parent().hasClass('opcionais')){
				if(!$father.find('.opcionais').hasClass('open')){
					$father.find('.itens').removeClass('open');
					$father.find('.opcionais').removeClass('closed-serie');
					$father.find('.opcionais').removeClass('closed-cores');
					$father.find('.opcionais').addClass('open');
					$father.find('.cores').removeClass('open');
				}
			}
			if($(elem).parent().hasClass('cores')){
				if(!$father.find('.cores').hasClass('open')){
					$father.find('.itens').removeClass('open');
					$father.find('.opcionais').addClass('closed-cores');
					$father.find('.opcionais').removeClass('closed-serie');
					$father.find('.opcionais').removeClass('open');
					$father.find('.cores').addClass('open');
				}
			}
		}
		this.sizeWasChanged = function(){
			drag.snapOnce();
		}
		this.stop = function(){
			this.goToIdx(1);
			drag.snapOnce();
			$('.versoes_content').removeClass('on-description');
		}
	}
	var versoesManager = new VersoesManager();
	window.versoesManager = versoesManager;
});