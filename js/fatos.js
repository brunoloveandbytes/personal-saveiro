// CAROUSEL

$.fn.hideFrame = function(){ $(this).removeClass("visible").addClass("hidden"); return this; };
$.fn.showFrame = function(){ $(this).removeClass("hidden").addClass("visible"); return this; };
$.fn.carousel = function(options) {
	var $this = $(this);
	var settings = $.extend({
            frame: 1
        }, options );

	if($this.find(".item").length>0){
		$this.find(".item").each(function(e){
			var setas = "<div class='seta_esq'></div><div class='seta_dir'></div>";
			$(this).addClass("hidden").find(".content").append(setas);
		});
		$this.find(".item:first-child").find(".seta_esq").remove();
		$this.find(".item:last-child").find(".seta_dir").remove();
		$this.find(".item:first-child").showFrame();

		$(".item .seta_dir").on("click", function(e){ changeFrame($this,"next") });
		$(".item .seta_esq").on("click", function(e){ changeFrame($this,"prev") });
		$(document).keydown(function(e){
			if(e.which==37){ changeFrame($this,"prev") }
			if(e.which==39){ changeFrame($this,"next") }
		});
	}
	changeFrame($this, settings.frame);
	return this;
};

function changeFrame(el,frame){
	var visible = $(el).find(".item.visible");
	if(($(visible).index()==0 && frame=="prev") || ($(visible).index()==$(el).find(".item:last-child").index() && frame=="next")){ return false }
	if(frame=="next"){ $(visible).hideFrame().next().showFrame() } else
	if(frame=="prev"){ $(visible).hideFrame().prev().showFrame() }
	else{
		if(frame!=$(visible).index()+1){
			$(visible).hideFrame();
			$(el).find('.item:nth-child(' + frame + ')').showFrame();
		}
	}
}

// WRAP ICONS
$(document).ready(function(){
	$(".wrap_icons .icon").on("click", function(e){
		changeFrame($("#carousel"),$(this).index()+2);
	});
});

// ICONS ADAPTIVE (DESKTOP ONLY)
if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	function calcAdapt(el){
		if($(document).outerWidth()<960){
			$(".wrap_icons .icon, .wrap_icons .icon .desc").removeAttr("style");
			return false;
		}
		if($(document).outerWidth()>960 && $(document).outerWidth()<1280){
			// MEDIUM
			var top = el.outerHeight()-130;
			var width = el.outerHeight()/1.8;
			var padding = el.outerHeight();
			if(width<129){ $(".wrap_icons .icon .desc").css("font-size","12px") }else
			{ $(".wrap_icons .icon .desc").css("font-size","14px") }
			if(top>100 && top<135){ $(".wrap_icons .icon:nth-child(even)").css("top", top + "px") }
			if(padding<249){ $(".wrap_icons .icon").css("padding-top", padding + "px") }
		} else if($(document).outerWidth()>1280){
			// LARGE
			var top = el.outerHeight()-100;
			var width = el.outerHeight()/1.7;
			var padding = el.outerHeight();
			if(width<145){ $(".wrap_icons .icon .desc").css("font-size","14px") }else
			{ $(".wrap_icons .icon .desc").css("font-size","16px") }
			if(top>146 && top<170){ $(".wrap_icons .icon:nth-child(even)").css("top", top + "px") }
			if(padding<260){ $(".wrap_icons .icon").css("padding-top", padding + "px") }
		}

		$(".wrap_icons .icon").css("width", width + "px");
	}

	$(window).on("resize", function(){
		calcAdapt($(".wrap_icons"));
	});
	calcAdapt($(".wrap_icons"));
}

// INIT
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	$("#carousel").carousel({frame:2}); // SE MOBILE - IGNORA O PRIMEIRO FRAME
	$("#carousel #wrap .item:nth-child(1)").remove();
	$("#carousel #wrap .item:nth-child(1) .seta_esq").css("display","none");
}else{
	$("#carousel").carousel({frame:1});
}
