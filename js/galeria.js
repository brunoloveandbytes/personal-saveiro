/*
 * Jquery AnimateOneByOne
 * Author:             Devlart (Louis Frayard)
 * Date:               13-07-12
 * URL:                http://www.devlart.fr
 * Version:            1.1
 */
$.fn.animateOneByOne = function(params) {
    params = $.extend( {css:'', duration: 700, interval:300, order:'ASC', callback:''}, params);
    var elements = null;
    if(params.order == 'ASC'){ elements = $(this) }
    else{ elements = $(this).get().reverse() }
    var count = $(this).length - 1;
    $(elements).each(function(id) {
        setTimeout(function(element) {
            if(id == count){ $(element).animate(params.css,params.duration,params.callback) }
            else{ $(element).animate(params.css,params.duration) }
     }, id * (params.interval + params.duration), $(this));
   });
};

// TABS
$.fn.tabs = function(options){
	var $this = $(this);
	var n_tabs = [];
	var html = '';
	var settings = $.extend({
            tab: 1
        }, options );

	// CONSTRUCTION - DON'T CHANGE
	$this.children('.tab').each(function(e){ n_tabs.push($(this).attr("data-tab")) });
	html += '<div class="header upper head_extrabold">galeria<div class="wrap text_bold">';
	for(n=0;n<n_tabs.length;n++){ html += '<div class="tab spaced">' + n_tabs[n] + '</div>' }
	html += '</div></div>';
	html += '<div class="content">';
	for(n=1;n<=n_tabs.length;n++){ html += '<div class="wrap">' + $this.children('.tab:nth-child('+n+')').html() + '</div>' }
	html += '</div>';
	$this.html('').html(html);

	// BIND EVENTS
	var $content = $this.children(".content");
	var $header  = $this.children(".header");
	var $tab  = $this.children(".header").find(".tab");

	function setTab(tab){
		$('.gallery > .item').animateOneByOne({css:{ opacity:'0' }, duration: 0, interval: 0});
		$content.children('.wrap').removeClass('visible');
		$content.children('.wrap:nth-child(' + tab + ')').addClass('visible');
		$header.find('.tab').removeClass('active');
		$header.find('.tab:nth-child(' + tab + ')').addClass('active');
		$('.visible .gallery > .item').animateOneByOne({
	        css:{ opacity:'1' },
            duration: 500,
            interval:-440
	    });
	}

	$tab.on("click", function(){ setTab($(this).index()+1) });

	setTab(options.tab);

	return this;
};

$('#vw-tabs').tabs({tab:1});

// GALLERY
$.fn.lightbox = function(){
	var html = '';
	var dataImage = $(this).attr('data-image');

	html += '<div class="lightbox lightbox_bg">';
	html += '<div class="wrap"><div class="close"></div></div>';
	html += '</div>';

	$('#vw-tabs').parent().append(html);

	$(".lightbox").css("background-image", "url(" + dataImage + ")");

	// BIND EVENTS
	$('.lightbox, .lightbox .close').on("click", function(e){
		if($(e.target).is('div.lightbox') || $(e.target).is('div.close')){
			$(".lightbox").remove();
		}
	});

	return this;
};

$(".gallery .item:not(.item_small)").on("click", function(){ $(this).lightbox() });

$(".gallery .item_small").on("click", function(){
	var marginBottom = Math.ceil(parseFloat($(this).css("marginBottom").replace("px","")));
	var marginLeft = Math.ceil(parseFloat($(this).css("marginLeft").replace("px","")));
	var x = $(this).position().left + marginLeft;
	var y = $(this).position().top;
	var width = $(this).outerWidth();
	var height = $(this).outerHeight();
	var wrap_width = $(this).parent().outerWidth();
	var wrap_height = $(this).parent().outerHeight();
	var inner_width = $(this).innerWidth();
	var inner_height = $(this).innerHeight();

	var descColor = $(this).attr("data-desc-color");

	var quant_x = wrap_width/width;
	var quant_y = wrap_height/height;

	if(marginLeft==0){ marginLeft = Math.ceil(parseFloat($(this).next().css("marginLeft").replace("px",""))) }

	var cubeWidth  = (inner_width*2) + marginLeft;
	var cubeHeight = (inner_height*2) + marginBottom;

	// console.log("x:",x);
	// console.log("y:",y);
	// console.log("width:",width);
	// console.log("height:",height);
	// console.log("wrap_width:",wrap_width);
	// console.log("wrap_height:",wrap_height);
	// console.log("quant_x:",quant_x);
	// console.log("quant_y:",quant_y);
	// console.log("innerWidth:",inner_width);
	// console.log("innerHeight:",inner_height);

	if($("#light_cube").length==0){
		$(".item_small").parent().append('<span id="light_cube" style="display:block;position:absolute;padding:5px;z-index:10"><div class="close_cube"></div><div class="desc_cube upper"></div></span>');
	}

	$("#light_cube").css('background-image','url(' + $(this).attr('data-image') + ')');
	$(".desc_cube").html($(this).attr("data-description"));
	if(typeof descColor=="undefined"){ descColor = "000" }

	// console.log(y+height);
	// console.log(wrap_height-(height*0.2));

	if((x+width)>(wrap_width-(width/2))){  x -= (width + marginLeft) }  // VERIFICA LEFT
	if((y+height)>(wrap_height-(height*0.2))){ y -= (height + marginBottom) } // VERIFICA HEIGHT

	$('#light_cube').css({ top: y, left: x, width: cubeWidth, height: cubeHeight, color: "#"+descColor });

	$('.close_cube').on("click", function(){ $('#light_cube').remove() });

	// x / width  = index_x
	// y / height = index_y
});