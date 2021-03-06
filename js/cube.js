
$(document).ready(function() {

	var CubeManager = function(){
		this.enabled = false;
		this.cubeName=null;
		this.cubeContainer=null
		this.setCubeName = function(cubeName){
			$('#'+this.cubeName).css('display','none');
			this.cubeName = cubeName;
			$('#'+this.cubeName).css('display','inline');
		}
		this.setActive = function(enabled){
			if(!enabled){
				$('#'+this.cubeName).css('display','none');
				this.cubeName = null;
			}else{
				this.restartCube();
			}
			this.enabled = enabled;
		}
		this.restartCube = function(){
			intialRotation = rotation3d.y;
			rotation3d.x = 0;
		}
	}

	var cubeManager = new CubeManager();
	window.cubeManager = cubeManager;
	//cubeManager.setCubeName('saveiro_aventura_interno');
	//cubeManager.setActive(true);
	var container;
	var rotationContainer;
	var mousePosition = {x:500, y:500};
	var rotation3d = {x:0, y:0, z:0};
	var startingOrientation;
	var velocity = 0.25;
	var lastPosition = null;
	var printTime = 0;
	var realOrientation = null;
	var lastGamma = null;
	var intialRotation = null;
	var lastX = null;
	var lastY = null;
    container = document.getElementById("tour_interno");
    rotationContainer = document.getElementById("rotationContainer");
    window.addEventListener("deviceorientation", deviceMotionListener);
    window.addEventListener('orientationchange', doOnOrientationChange);
	window.onmousemove = handleMouseMove;
    function doOnOrientationChange(){
		realOrientation = window.orientation;
		lastGamma = event.gamma;
	}
	function handleMouseMove(event) {
		event = event || window.event; // IE-ism
		var deltaX,deltaY;
		
		if(lastPosition){
			deltaX = event.pageX - lastPosition.pageX;
			deltaY = event.pageY - lastPosition.pageY;
			rotation3d.y += velocity*deltaX;
			rotation3d.x -= velocity*deltaY;
		}
		
		lastPosition = event;
	}
	function deviceMotionListener(event){
	    if(realOrientation == null){realOrientation = window.orientation;}
	    if(lastGamma == null){lastGamma = event.gamma;}

	    if(Math.abs(event.gamma) < 10){
			if(lastGamma*event.gamma<0){
				realOrientation = -realOrientation;
				lastGamma = event.gamma;	
			}
	    }else{
	    	if(lastGamma*event.gamma<0){
				lastGamma = event.gamma;	
			}
	    }
	    if(event.alpha != null){
	    	if(realOrientation == 90){
		    	if(event.gamma < 0){
			        rotation3d.x = -90 - event.gamma;
			        rotation3d.y = -event.alpha;
			    }else{
			    	rotation3d.x = 90 - event.gamma;
			    	rotation3d.y = 180 - event.alpha;
			    }
		    }else if(realOrientation == -90){
		        if(event.gamma < 0){
			        rotation3d.x = 90 + event.gamma;
			        rotation3d.y = -event.alpha;
			    }else{
			    	rotation3d.x = -90 + event.gamma;
			    	rotation3d.y = 180 - event.alpha;
			    }
		    }else if(realOrientation == 0){
		    	rotation3d.x = event.beta - 90;
		    }else{
		    	rotation3d.x = event.beta - 90;
		    }
		    if(realOrientation != window.orientation){
		    	rotation3d.y = 180 + rotation3d.y;
		    }
		    if(intialRotation==null){
				intialRotation = rotation3d.y;
			}
	    }
	}
	function refresh(){
		if(cubeManager.enabled){
			var smooth = 0.5;
			var newX,newY;
			if(lastX && lastX){
				if(Math.abs(lastX - rotation3d.x) < 90 && Math.abs(lastY - rotation3d.y-intialRotation) < 90){
					newX = smooth*lastX + (1-smooth)*rotation3d.x;
					newY = smooth*lastY + (1-smooth)*rotation3d.y-intialRotation;
				}else{
					newX = rotation3d.x;
					newY = rotation3d.y-intialRotation;
				}
			}else{
				newX = rotation3d.x;
				newY = rotation3d.y-intialRotation;
			}
			lastX = newX;
			lastY = newY;

			var newOrientation;
			if($(window).width() > 2000){
				newOrientation = "translate3d(0px,0px,1250px) rotateX(" + newX + "deg) rotateY(" + newY + "deg)";
			}else if($(window).width() > 1280){
				newOrientation = "translate3d(0px,0px,1000px) rotateX(" + newX + "deg) rotateY(" + newY + "deg)";
			}else{
				newOrientation = "translate3d(0px,0px,640px) rotateX(" + newX + "deg) rotateY(" + newY + "deg)";
			}
			$('#'+cubeManager.cubeName+' .cube').css({
		        'transform': newOrientation,
		        '-webkit-transform': newOrientation,
		        '-moz-transform': newOrientation,
		        '-ms-transform': newOrientation,
		        '-o-transform:rotate': newOrientation
		    });
		}
	}
	window.setInterval(refresh,40);
});