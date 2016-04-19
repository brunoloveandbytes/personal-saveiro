
$(document).ready(function() {
	var timerId = null;
	var IdentidadeManager = function(){
		var currentIdx = 1;
		this.start = function(){
			if(timerId==null){
				timerId = setInterval(function (){
			      window.identidadeManager.changeImage();
			    }, 1500);	
			}
		}
		this.stopAnimation = function(){
			clearInterval(timerId);
			timerId = null;
		}
		this.changeImage = function(){
			$('.identidade .car-0'+(currentIdx+1)).css('left','100%');
			currentIdx++;
			if(currentIdx > 4){
				currentIdx = 1;
			}
			$('.identidade .car-0'+(currentIdx+1)).css('left','0%');
		}
		this.stop = function(){
			this.stopAnimation();
			this.closeDescription();
		}
		this.closeDescription = function(){
			$('.identidade .description').removeClass('show');
			$('.identidade .close').removeClass('show');
		}
		this.showDescription = function(){
			$('.identidade .description').addClass('show');
			$('.identidade .close').addClass('show');
		}
	}
	var identidadeManager = new IdentidadeManager();
	window.identidadeManager = identidadeManager;
	//identidadeManager.start();
});