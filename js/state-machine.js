$(document).ready(function() {
	var oldIE = $('html').is('.lt-ie10');
	var StateMachine = function(){
		var Trigger = {
			Next: 0,
			Previews: 1,
			Identidade: 2,
			Galeria: 3,
			Home:4,
			Tour:5,
			Fatos:6,
			Versoes:7,
			Entrance:8,
			Premios:9,
			Robust:10,
			Cross:11
		}
		var loadClassName = "load";
		this.Trigger = Trigger;
		this.animationCounter = 0;
		this.pendentState;
		this.onTransition = false;
		this.pendentTransition;
		this.currentTransition;
		this.lastState;
		this.states = [];
		this.states.push(new State({
										"stateMachine":this,
										"name":"empty",
										"stage":0,
										"transitions":[
															new Transition({
																"endStateName":"home",
																"trigger":Trigger.Home,
																"endFunction":function(){
																	$('#slide1').addClass('onTop');
																	$('#slide1').addClass('showWord');
																	$('#slide1').addClass('show');
																	$('#slide2').addClass('onTop');
																	$('#slide2').addClass('showWord');
																	$('#slide3').addClass('onMiddle');
																	$('#rotational').addClass('upCar');
																	$('#rotational').addClass('rotate');
																	$('#blue_car').removeClass('zoomCar');
																},
																"animatedProperties":[
																	new AnimatedProperty({'idName':'home','className':'show','classTransitionName':'default-transition','add':true}),
																	new AnimatedProperty({'idName':'menu','className':'show','classTransitionName':'opacity-transition','add':true, 'duration':500})
																]
															}),
															new Transition({
																"endStateName":"identidade",
																"trigger":Trigger.Identidade,
																"startFunction":function(){
																	$('#identidade').addClass('hided');
																	$('#identidade').addClass('onMiddle');
																},
																"endFunction":function(){
																	$('#slide1').addClass('onTop');
																	$('#slide1').addClass('showWord');
																	$('#slide1').addClass('show');
																	$('#slide2').addClass('onTop');
																	$('#slide2').addClass('showWord');
																	$('#slide3').addClass('onMiddle');
																	$('#rotational').addClass('upCar');
																	$('#rotational').addClass('rotate');
																	$('#blue_car').removeClass('zoomCar');
																	$('#home').addClass('show');
																},
																"animatedProperties":[
																	new AnimatedProperty({'idName':'menu','className':'show','classTransitionName':'opacity-transition','add':true, 'duration':500}),
																	new AnimatedProperty({'idName':'identidade','className':'hided','classTransitionName':'opacity-transition','remove':true})
																]
															}),
															new Transition({
																"endStateName":"versoes",
																"trigger":Trigger.Versoes,
																"startFunction":function(){
																	$('#versoes').addClass('hided');
																	$('#versoes').addClass('onMiddle');
																},
																"endFunction":function(){
																	$('#slide1').addClass('onTop');
																	$('#slide1').addClass('showWord');
																	$('#slide1').addClass('show');
																	$('#slide2').addClass('onTop');
																	$('#slide2').addClass('showWord');
																	$('#slide3').addClass('onMiddle');
																	$('#rotational').addClass('upCar');
																	$('#rotational').addClass('rotate');
																	$('#blue_car').removeClass('zoomCar');
																	$('#home').addClass('show');
																},
																"animatedProperties":[
																	new AnimatedProperty({'idName':'menu','className':'show','classTransitionName':'opacity-transition','add':true, 'duration':500}),
																	new AnimatedProperty({'idName':'versoes','className':'hided','classTransitionName':'opacity-transition','remove':true})
																]
															}),
															new Transition({
																"endStateName":"hand",
																"trigger":Trigger.Entrance,
																"endFunction":function(){$('#slide1').addClass('showWord');},
																"animatedProperties":[
																	new AnimatedProperty({'idName':'slide1','className':'show','add':true})
																]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"hand",
										"stage":1,
										"transitions":[
															new Transition({
																"endStateName":"surf",
																"trigger":Trigger.Next,
																"endFunction":function(){$('#slide2').addClass('showWord');},
																"animatedProperties":[
																	new AnimatedProperty({'idName':'slide2','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																	new AnimatedProperty({'idName':'slide1','className':'onTop','classTransitionName':'default-transition','add':true})
																]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"surf",
										"stage":2,
										"transitions":[
															new Transition({
																"endStateName":"hand",
																"trigger":Trigger.Previews,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'slide1','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'slide2','className':'onMiddle','classTransitionName':'default-transition','remove':true})
																					]
															}),
															new Transition({
																"endStateName":"downCar",
																"trigger":Trigger.Next,
																"endFunction":function(){$('#slide3').addClass('showWord');},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'slide2','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'slide2','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'slide3','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"downCar",
										"stage":3,
										"transitions":[
															new Transition({
																"endStateName":"surf",
																"trigger":Trigger.Previews,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'slide2','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'slide2','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'slide3','className':'onMiddle','classTransitionName':'default-transition','remove':true})
																						]
															}),
															new Transition({
																"endStateName":"upCar",
																"trigger":Trigger.Next,
																//"startFunction":function(){$('#slide3').removeClass('showWord');},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'rotational','className':'upCar','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'slide3','className':'showWord','classTransitionName':'default-transition','remove':true})
																						]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"upCar",
										"stage":3,
										"autoplay":true,
										"transitions":[
															new Transition({
																"endStateName":"downCar",
																"trigger":Trigger.Previews,
																"endFunction":function(){$('#slide3').addClass('showWord');},
																"animatedProperties":[new AnimatedProperty({'idName':'rotational','className':'upCar','classTransitionName':'default-transition','remove':true})]
															}),
															new Transition({
																"endStateName":"rotatedCar",
																"trigger":Trigger.Next,
																"animatedProperties":[new AnimatedProperty({'idName':'rotational','className':'rotate','classTransitionName':'default-transition','add':true})]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"rotatedCar",
										"stage":3,
										"autoplay":true,
										"transitions":[
															new Transition({
																"endStateName":"upCar",
																"trigger":Trigger.Previews,
																"animatedProperties":[new AnimatedProperty({'idName':'rotational','className':'rotate','classTransitionName':'default-transition','remove':true})]
															}),
															new Transition({
																"endStateName":"home",
																"trigger":Trigger.Next,
																"endFunction":function(){if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#home');},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'blue_car','className':'zoomCar','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'home','className':'show','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'menu','className':'show','classTransitionName':'opacity-transition','add':true, 'delay':2000, 'duration':1400})
																						]
															})
														]
									}));
		//Home principal
		this.states.push(new State({
										"stateMachine":this,
										"name":"home",
										"stage":4,
										"transitions":[
															new Transition({
																"endStateName":"rotatedCar",
																"trigger":Trigger.Previews,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'blue_car','className':'zoomCar','classTransitionName':'default-transition','add':true, 'delay':1000}),
																						new AnimatedProperty({'idName':'home','className':'show','classTransitionName':'default-transition','remove':true, 'delay':1000}),
																						new AnimatedProperty({'idName':'menu','className':'show','classTransitionName':'opacity-transition','remove':true})
																						]
															}),
															new Transition({
																"endStateName":"identidade",
																"trigger":Trigger.Identidade,
																"endFunction":function(){if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#identidade');},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"fatos",
																"trigger":Trigger.Fatos,
																"endFunction":function(){if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#fatos');},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"versoes",
																"trigger":Trigger.Versoes,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#versoes');
																						stateMachine.upSlides(['identidade','fatos']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'versoes','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"tour",
																"trigger":Trigger.Tour,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#360');
																						stateMachine.upSlides(['identidade','fatos','versoes']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'tour','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"galeria",
																"trigger":Trigger.Galeria,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#galeria');
																						stateMachine.upSlides(['identidade','fatos','versoes','tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"premios",
																"trigger":Trigger.Premios,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#premios');
																						stateMachine.upSlides(['identidade','fatos','versoes','tour','galeria']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'premios','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"robust",
																"trigger":Trigger.Robust,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#robust');
																						stateMachine.upSlides(['identidade','fatos','versoes','tour','galeria','premios']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'robust-slide','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"cross",
																"trigger":Trigger.Cross,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#cross');
																						stateMachine.upSlides(['identidade','fatos','versoes','tour','galeria','premios','robust']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'cross-slide','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"identidade",
										"welcomeFunction":function(){window.identidadeManager.start();},
										"goodbyeFunction":function(){window.identidadeManager.stop();},
										"stage":5,
										"transitions":[
															new Transition({
																"endStateName":"home",
																"trigger":Trigger.Home,
																"endFunction":function(){if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#home');},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"fatos",
																"trigger":Trigger.Fatos,
																"endFunction":function(){if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#fatos');},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"versoes",
																"trigger":Trigger.Versoes,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#versoes');
																						stateMachine.upSlides(['fatos']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"tour",
																"trigger":Trigger.Tour,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#tour');
																						stateMachine.upSlides(['fatos','versoes']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"galeria",
																"trigger":Trigger.Galeria,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#galeria');
																						stateMachine.upSlides(['fatos','versoes','tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"premios",
																"trigger":Trigger.Premios,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#premios');
																						stateMachine.upSlides(['fatos','versoes','tour','galeria']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"fatos",
										"stage":6,
										"transitions":[
															new Transition({
																"endStateName":"home",
																"trigger":Trigger.Home,
																"endFunction":function(){if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#home');},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"identidade",
																"trigger":Trigger.Identidade,
																"endFunction":function(){if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#identidade');},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"versoes",
																"trigger":Trigger.Versoes,
																"endFunction":function(){if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#versoes');},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"tour",
																"trigger":Trigger.Tour,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#tour');
																						stateMachine.upSlides(['versoes']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"galeria",
																"trigger":Trigger.Galeria,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#galeria');
																						stateMachine.upSlides(['versoes','tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"versoes",
										"goodbyeFunction":function(){setTimeout(function(){ window.versoesManager.stop();},1000);},
										"stage":7,
										"transitions":[
															new Transition({
																"endStateName":"home",
																"trigger":Trigger.Home,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#home');
																						stateMachine.downSlides(['identidade','fatos']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"identidade",
																"trigger":Trigger.Identidade,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#identidade');
																						stateMachine.downSlides(['fatos']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"fatos",
																"trigger":Trigger.Fatos,
																"endFunction":function(){if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#fatos');},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"tour",
																"trigger":Trigger.Tour,
																"endFunction":function(){if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#tour');},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'tour','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"galeria",
																"trigger":Trigger.Galeria,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#galeria');
																						stateMachine.upSlides(['tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"tour",
										"stage":4,
										"transitions":[
															new Transition({
																"endStateName":"home",
																"trigger":Trigger.Home,
																"startFunction":function(){$('.tour_sequence').removeClass('onMiddle');$('.tour_principal').addClass('onMiddle');},
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#home');
																						stateMachine.downSlides(['identidade','fatos','versoes']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"identidade",
																"trigger":Trigger.Identidade,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#identidade');
																						stateMachine.downSlides(['fatos','versoes']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"fatos",
																"trigger":Trigger.Fatos,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#fatos');
																						stateMachine.downSlides(['versoes']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"versoes",
																"trigger":Trigger.Versoes,
																"endFunction":function(){if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#versoes');},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'versoes','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"galeria",
																"trigger":Trigger.Galeria,
																"endFunction":function(){if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#galeria');},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"galeria",
										"stage":4,
										"transitions":[
															new Transition({
																"endStateName":"home",
																"trigger":Trigger.Home,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#home');
																						stateMachine.downSlides(['identidade','fatos','versoes','tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"identidade",
																"trigger":Trigger.Identidade,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#identidade');
																						stateMachine.downSlides(['fatos','versoes','tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"fatos",
																"trigger":Trigger.Fatos,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#fatos');
																						stateMachine.downSlides(['versoes','tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"versoes",
																"trigger":Trigger.Versoes,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#versoes');
																						stateMachine.downSlides(['tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'versoes','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"tour",
																"trigger":Trigger.Tour,
																"endFunction":function(){if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#tour');},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'tour','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"premios",
										"stage":4,
										"welcomeFunction":function(){window.premiosManager.setLastState(stateMachine.state)},
										"transitions":[
															new Transition({
																"endStateName":"home",
																"trigger":Trigger.Home,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#home');
																						stateMachine.downSlides(['galeria','tour','versoes','fatos','identidade']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"identidade",
																"trigger":Trigger.Identidade,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#identidade');
																						stateMachine.downSlides(['galeria','tour','versoes','fatos']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"fatos",
																"trigger":Trigger.Fatos,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#fatos');
																						stateMachine.downSlides(['galeria','tour','versoes']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"versoes",
																"trigger":Trigger.Versoes,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#versoes');
																						stateMachine.downSlides(['galeria','tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'versoes','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"tour",
																"trigger":Trigger.Tour,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#tour');
																						stateMachine.downSlides(['galeria']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'tour','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"galeria",
																"trigger":Trigger.Galeria,
																"endFunction":function(){if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#galeria');},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'galeria','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"robust",
										"stage":4,
										"welcomeFunction":function(){window.robustManager.setLastState(stateMachine.state)},
										"transitions":[
															new Transition({
																"endStateName":"home",
																"trigger":Trigger.Home,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#home');
																						stateMachine.downSlides(['premios','galeria','tour','versoes','fatos','identidade']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'robust-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"identidade",
																"trigger":Trigger.Identidade,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#identidade');
																						stateMachine.downSlides(['premios','galeria','tour','versoes','fatos']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"fatos",
																"trigger":Trigger.Fatos,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#fatos');
																						stateMachine.downSlides(['premios','galeria','tour','versoes']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"versoes",
																"trigger":Trigger.Versoes,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#versoes');
																						stateMachine.downSlides(['premios','galeria','tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'versoes','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"tour",
																"trigger":Trigger.Tour,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#tour');
																						stateMachine.downSlides(['premios','galeria']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'tour','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"galeria",
																"trigger":Trigger.Galeria,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#galeria');
																						stateMachine.downSlides(['premios']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'galeria','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"premios",
																"trigger":Trigger.Premios,
																"endFunction":function(){if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#premios');},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'premios','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"cross",
										"stage":4,
										"welcomeFunction":function(){window.crossManager.setLastState(stateMachine.state)},
										"transitions":[
															new Transition({
																"endStateName":"home",
																"trigger":Trigger.Home,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#home');
																						stateMachine.downSlides(['robust','premios','galeria','tour','versoes','fatos','identidade']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'cross-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"identidade",
																"trigger":Trigger.Identidade,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#identidade');
																						stateMachine.downSlides(['robust-slide','premios','galeria','tour','versoes','fatos']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"fatos",
																"trigger":Trigger.Fatos,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#fatos');
																						stateMachine.downSlides(['robust-slide','premios','galeria','tour','versoes']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"versoes",
																"trigger":Trigger.Versoes,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#versoes');
																						stateMachine.downSlides(['robust-slide','premios','galeria','tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'versoes','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"tour",
																"trigger":Trigger.Tour,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#tour');
																						stateMachine.downSlides(['robust-slide','premios','galeria']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'tour','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"galeria",
																"trigger":Trigger.Galeria,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#galeria');
																						stateMachine.downSlides(['robust-slide','premios']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'galeria','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"premios",
																"trigger":Trigger.Premios,
																"endFunction":function(){
																						if(window.location.href.indexOf('com.br') > -1 && !oldIE)window.history.pushState("", "", '#premios');
																						stateMachine.downSlides(['robust-slide']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'premios','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															})
														]
									}));
		
		
		
		this.askMove = function(trigger){
			//console.log(this.state.transitions);
			for(var i=0;i<this.state.transitions.length;i++){
				if(this.state.transitions[i].trigger == trigger){
					this.pendentTransition = this.state.transitions[i];
					var stateName = this.state.transitions[i].endStateName;
					var stage = this.getStateByName(stateName).stage;
					console.log(stateName+':'+stage);
					window.imageLoader.askToChangeStage(window.imageLoader.ChangeStage.Any,stage);
				}
			}
		}
		this.stageLoaded = function(){
			if(this.pendentTransition != null){
				this.move(this.pendentTransition.trigger);
				this.pendentTransition = null;	
			}
		}
		this.move = function(trigger){
			if(imageLoader.onLoading){
				$('.'+loadClassName).addClass('hide-load');	
			}			
			if(!this.onTransition){
				this.state.move(trigger);
			}
		}
		this.makeTransition = function(transition){
			this.currentTransition = transition;
			this.onTransition = true;
			this.pendentState = transition.endStateName;
			transition.startFunction();
			for(var i=0;i<transition.animatedProperties.length;i++){
				this.animationCounter++;
				transition.animatedProperties[i].animate(this.completeAnimationProperty);
			}
		}
		this.getStateByName = function(name){
			for(var i=0;i<this.states.length;i++){
				if(this.states[i].name == name){
					return this.states[i];
				}
			}
			return null;
		}
		this.setState = function(name){
			this.lastState = this.state;
			this.state = this.getStateByName(name);
			if(this.state.autoplay){
				this.moveAutoPlay();
			}
		}
		this.completeAnimationProperty = function(id,classTransitionName){
			$('#'+id).removeClass(classTransitionName);
			stateMachine.animationCounter--;
			if(stateMachine.animationCounter < 1){
				stateMachine.finishTransition();
			}
		}
		this.finishTransition = function(){
			this.currentTransition.endFunction();
			this.onTransition = false;
			console.log('state trocado: '+this.pendentState);
			this.getStateByName(this.pendentState).welcomeFunction();
			this.setState(this.pendentState);
		}
		this.moveAutoPlay = function(){
			var transition=null;
			for(var i=0;i<this.state.transitions.length;i++){
				if(this.state.transitions[i].endStateName != this.lastState.name){
					transition = this.state.transitions[i];
				}
			}
			if(transition!=null){
				//this.move(transition.trigger);
				this.askMove(transition.trigger);
			}
		}
		this.switchEntrance = function(){
			/*
			var page = window.location.href.substring(window.location.href.indexOf("#")+1);
		    switch(page){
		    	case "home":
		    		this.askMove(Trigger.Home);
		    		break;
		    	case "identidade":
		    		this.askMove(Trigger.Identidade);
		    		break;
		    	case "versoes":
		    		this.askMove(Trigger.Versoes);
		    		break;
		    	default:
		    		this.askMove(Trigger.Entrance);
		    		break;
		    }
		    */
		    this.askMove(Trigger.Home);
		}
		this.upSlides = function(slides){
			for(var i=0;i<slides.length;i++){
				$('#'+slides[i]).addClass('onTop');
				$('#'+slides[i]).removeClass('onBottom');
			}
		}
		this.downSlides = function(slides){
			for(var i=0;i<slides.length;i++){
				$('#'+slides[i]).addClass('onBottom');
				$('#'+slides[i]).removeClass('onTop');
			}
		}
		this.state = this.states[0];
		this.switchEntrance();
	}
	var State = function(options){
		this.stateMachine = options.stateMachine;
		this.name = options.name;
		this.stage = options.stage;
		this.transitions = options.transitions;
		this.autoplay = (options.autoplay)?(options.autoplay):false;
		this.move = function(trigger){
			for(var i=0;i<this.transitions.length;i++){
				if(this.transitions[i].trigger == trigger){
					this.stateMachine.makeTransition(this.transitions[i]);
					this.goodbyeFunction();
				}
			}
		}
		this.welcomeFunction = (options.welcomeFunction)?(options.welcomeFunction):(function(){});
		this.goodbyeFunction = (options.goodbyeFunction)?(options.goodbyeFunction):(function(){});
	}

	var Transition = function(options){
		this.trigger = options.trigger;
		this.endStateName = options.endStateName;
		this.animatedProperties = options.animatedProperties;
		this.startFunction = (options.startFunction)?(options.startFunction):(function(){});
		this.endFunction = (options.endFunction)?(options.endFunction):(function(){});
	}

	var AnimatedProperty = function(options){
		this.idName=options.idName;
		this.className=options.className;
		this.add=options.add;
		this.remove=options.remove;
		this.classTransitionName = (options.classTransitionName)?(options.classTransitionName):("");
		this.duration=(options.duration)?(options.duration):((oldIE)?(0):(1400));
		this.delay=(options.delay)?(options.delay):0;
		this.animate = function(callback){
			console.log(this.duration);
			var add = this.add;
			var remove = this.remove;
			var idName = this.idName;
			var className = this.className;
			var classTransitionName = this.classTransitionName;
			var duration = this.duration;
			setTimeout(function(){
				$('#'+idName).addClass(classTransitionName);
				if(add) $('#'+idName).addClass(className);
				if(remove) $('#'+idName).removeClass(className);
				var id = idName;
				setTimeout(function(){ callback(idName,classTransitionName); }, duration);
			}, this.delay);
		}
	}
	var stateMachine = new StateMachine();
	window.stateMachine = stateMachine;
	//Main events
	var lastScrollRefresh = 0;
	if (window.addEventListener) {
		// IE9, Chrome, Safari, Opera
		window.addEventListener("mousewheel", onScroll, false);
		// Firefox
		window.addEventListener("DOMMouseScroll", onScroll, false);
	}
	// IE 6/7/8
	else window.attachEvent("onmousewheel", onScroll);
	function onScroll(e) {
		var e = window.event || e; // old IE support
		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		if(Date.now() - lastScrollRefresh > 1){
			if(!stateMachine.onAnimation){
				if(delta > 0){
					//goToPrev();
					stateMachine.askMove(stateMachine.Trigger.Previews);
				}else if(delta < 0){
					//goToNext();
					stateMachine.askMove(stateMachine.Trigger.Next);
				}
			}
			lastScrollRefresh = Date.now();
		}
	}
	document.body.addEventListener('touchstart', function(e){
        stateMachine.askMove(stateMachine.Trigger.Next);
    }, false)
});