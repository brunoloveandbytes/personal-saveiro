
$(document).ready(function() {
	var TagManager = function(){
		this.homeTag = function(){
			//alert('home tag!');
			var result = dataLayer.push({
				'event': 'GAEvent', 
				'eventFLD' : 'acesso_home | nova-saveiro | nova-saveiro',
				'eventCategory': 'viu_pagina',
				'eventAction': 'visualizou', 
				'eventLabel': 'home',
				'modelName': 'nova-saveiro',
				'siteName': 'nova-saveiro' 
			});
			console.log(result);

		}
	}
	var tagManager = new TagManager();
	window.tagManager = tagManager;
});