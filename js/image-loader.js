$(document).ready(function() {
	var Bandwidth = {"Low":0,"High":1,"LimitValue":20}
	var Size = {"Micro":0,"Small":1,"Medium":2,"Large":3}
	var LoadState = {"StandBy":0,"Loading":1,"SmartyLoading":2}
	var ChangeStage = {"Prev":0,"Next":1,"Small":2,"Medium":3,"Large":4,"Any":5}
	var ImagePathProperties = function(){
		var commun_path = 'http://glasstecnologia.com.br/saveiro_remote/';
		/*
		this.getFolder = function(band,size){
			switch(size){
				case Size.Micro:
					if(band == Bandwidth.Low) return commun_path+'low/micro/';
					if(band == Bandwidth.High) return commun_path+'high/micro/';
					break;
				case Size.Small:
					if(band == Bandwidth.Low) return commun_path+'low/small/';
					if(band == Bandwidth.High) return commun_path+'high/small/';
					break;
				case Size.Medium:
					if(band == Bandwidth.Low) return commun_path+'low/medium/';
					if(band == Bandwidth.High) return commun_path+'high/medium/';
					break;
				case Size.Large:
					if(band == Bandwidth.Low) return commun_path+'low/large/';
					if(band == Bandwidth.High) return commun_path+'high/large/';
					break;
			}
		}
		*/
		this.getFolder = function(band,size){
			switch(size){
				case Size.Micro:
					if(band == Bandwidth.Low) return commun_path+'high/large/';
					if(band == Bandwidth.High) return commun_path+'high/large/';
					break;
				case Size.Small:
					if(band == Bandwidth.Low) return commun_path+'high/large/';
					if(band == Bandwidth.High) return commun_path+'high/large/';
					break;
				case Size.Medium:
					if(band == Bandwidth.Low) return commun_path+'high/large/';
					if(band == Bandwidth.High) return commun_path+'high/large/';
					break;
				case Size.Large:
					if(band == Bandwidth.Low) return commun_path+'high/large/';
					if(band == Bandwidth.High) return commun_path+'high/large/';
					break;
			}
		}
	}
	var UserProperties = function(){
		this.connectionSpeed = null;
		this.refreshFactor = 0.3;
		this.refreshSpeed = function(speed){
			if(speed < 1000){
				if(this.connectionSpeed == null){this.connectionSpeed = speed;}
				else{this.connectionSpeed = this.refreshFactor*speed + (1-this.refreshFactor)*this.connectionSpeed;}
			}
			if(this.connectionSpeed > Bandwidth.LimitValue){banddwidth = Bandwidth.High;}
			else{bandwidth = Bandwidth.Low;}
			if(this.connectionSpeed == null){bandwidth = Bandwidth.High;}
			//console.log("Current speed: " + this.connectionSpeed);
			//console.log("Current band: " + bandwidth);
		}
	}
	var ImageLoader = function(){
		this.ChangeStage = ChangeStage;
		this.microStages = [];
		this.smallStages = [];
		this.mediumStages = [];
		this.largeStages = [];
		this.currentStages;
		this.onLoading = false;
		var loadClassName = "load";
		//Stage 00
		var stages = new StagesCreator({'imageLoader':this, 'readyFunction':function(){$('.main-header').addClass('show');}, 'classes':[
																		{'className':'vw-logo','imgName':'tiles.png','sizes':{'ll':140,'lm':140,'ls':140,'lmi':140,'hl':140,'hm':140,'hs':140,'hmi':140}},
																		{'className':'gallery .item.trabalho1','imgName':'06_Galeria_01_Trabalho_Saveiro_Robust_Volkswagen.jpg','sizes':{'ll':140,'lm':140,'ls':140,'lmi':140,'hl':140,'hm':140,'hs':140,'hmi':140}}
																	]});
		this.microStages.push(stages.micro);this.smallStages.push(stages.small);this.mediumStages.push(stages.medium);this.largeStages.push(stages.large);
		//Stage 01
		stages = new StagesCreator({'imageLoader':this, 'readyFunction':function(){}, 'classes':[
																		{'className':'slide1','imgName':'00_Intro_01_Colheita_Volkswagen.jpg','sizes':{'ll': 48,'lm': 36,'ls': 20,'lmi':140,'hl':224,'hm':160,'hs': 84,'hmi':140}}
																	]});
		this.microStages.push(stages.micro);this.smallStages.push(stages.small);this.mediumStages.push(stages.medium);this.largeStages.push(stages.large);
		//Stage 02
		stages = new StagesCreator({'imageLoader':this, 'readyFunction':function(){}, 'classes':[
																		{'className':'slide2','imgName':'00_Intro_02_Surf_Volkswagen.jpg','sizes':{'ll': 16,'lm': 12,'ls':8.0,'lmi':140,'hl': 48,'hm': 36,'hs': 20,'hmi':140}}
																	]});
		this.microStages.push(stages.micro);this.smallStages.push(stages.small);this.mediumStages.push(stages.medium);this.largeStages.push(stages.large);
		//Stage 03
		stages = new StagesCreator({'imageLoader':this, 'readyFunction':function(){}, 'classes':[
																		{'className':'black_car','imgName':'black_car.jpg','sizes':{'ll': 16,'lm': 12,'ls':8.0,'lmi':140,'hl': 36,'hm': 28,'hs': 16,'hmi':140}},
																		{'className':'blue_car','imgName':'blue_car.jpg','sizes':{'ll': 12,'lm':8.0,'ls':8.0,'lmi':140,'hl': 32,'hm': 24,'hs': 16,'hmi':140}}
																	]});
		this.microStages.push(stages.micro);this.smallStages.push(stages.small);this.mediumStages.push(stages.medium);this.largeStages.push(stages.large);
		//Stage 04
		stages = new StagesCreator({'imageLoader':this, 'readyFunction':function(){}, 'classes':[
																		{'className':'home','imgName':'01_Home_01_Fundo_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'premios_button','imgName':'tiles.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'cars-home','imgName':'01_Home_02_Carros_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}}
																	]});
		this.microStages.push(stages.micro);this.smallStages.push(stages.small);this.mediumStages.push(stages.medium);this.largeStages.push(stages.large);
		//Stage 05
		stages = new StagesCreator({'imageLoader':this, 'readyFunction':function(){}, 'classes':[
																		{'className':'identidade','imgName':'02_Identidade_01_Fundo_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'identidade .car-02','imgName':'02_Identidade_02_Saveiro_Robust_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'identidade .car-03','imgName':'02_Identidade_03_Saveiro_Cross_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'identidade .car-04','imgName':'02_Identidade_04_Saveiro_Robust_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'identidade .car-05','imgName':'02_Identidade_05_Saveiro_Cross_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}}
																	]});
		this.microStages.push(stages.micro);this.smallStages.push(stages.small);this.mediumStages.push(stages.medium);this.largeStages.push(stages.large);
		//Stage 06
		stages = new StagesCreator({'imageLoader':this, 'readyFunction':function(){}, 'classes':[
																		{'className':'carousel','imgName':'02_Identidade_01_Fundo_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}}
																	]});
		this.microStages.push(stages.micro);this.smallStages.push(stages.small);this.mediumStages.push(stages.medium);this.largeStages.push(stages.large);
		//Stage 07
		stages = new StagesCreator({'imageLoader':this, 'readyFunction':function(){}, 'classes':[
																		{'className':'versoes','imgName':'02_Identidade_01_Fundo_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .plus','imgName':'tiles.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .arrow','imgName':'tiles.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .ruler .handle','imgName':'tiles.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .robust .image-car','imgName':'04_Versoes_01_Saveiro_Robust_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .trend_simples .image-car','imgName':'04_Versoes_04_Saveiro_Trend_Basica_CS_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .trend_dupla .image-car','imgName':'04_Versoes_05_Saveiro_Trend_Completa_CD_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .trend_estendida .image-car','imgName':'04_Versoes_02_Saveiro_Trend_Basica_CE_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .highline .image-car','imgName':'04_Versoes_06_Saveiro_Highline_Completa_CD_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .cross_dupla .image-car','imgName':'04_Versoes_08_Saveiro_Cross_CD_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .cross_estendida .image-car','imgName':'04_Versoes_07_Saveiro_Cross_CE_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .image-left-car','imgName':'04_Versoes_09_Saveiro_Robust_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .image-middle-car','imgName':'04_Versoes_10_Saveiro_Robust_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .image-right-car','imgName':'04_Versoes_11_Saveiro_Robust_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}}
																	]});
		this.microStages.push(stages.micro);this.smallStages.push(stages.small);this.mediumStages.push(stages.medium);this.largeStages.push(stages.large);

		switch(size){
			case Size.Micro:
				this.currentStages = this.microStages;
				break;
			case Size.Small:
				this.currentStages = this.smallStages;
				break;
			case Size.Medium:
				this.currentStages = this.mediumStages;
				break;
			case Size.Large:
				this.currentStages = this.largeStages;
				break;
		}
		this.currentStage = this.currentStages[0];
		this.currentLoadingStage = this.currentStages[0];
		this.onWaitStage = null;
		this.currentLoadingStage.load();
		this.askToChangeStage = function(changeStage,idx){
			switch(changeStage){
				case ChangeStage.Prev:
						var idx = this.currentStage.idx;
						if(idx > 0){
							if(this.currentStages[idx-1].ready){
								this.currentStage = this.currentStages[idx-1];
								if(loadState == LoadState.StandBy){
									loadState = LoadState.SmartyLoading;
									imageLoader.loadNextStage();
								}
								window.stateMachine.stageLoaded();

								//console.log("%cNew "+((size==0)?('Micro'):((size==1)?('Small'):((size==2)?('Medium'):('Large'))))+" stage: "+this.currentStage.idx, 'color: #cc0');
								this.printNewStage(this.currentStage.idx);
							}else{
								if(this.onWaitStage == null){
									this.onWaitStage = this.currentStages[idx-1];
									$('.'+loadClassName).removeClass('hide-load');
									this.onLoading = true;
									console.log("Waiting for stage...");
								}
							}
						}
					break;
				case ChangeStage.Next:
						var idx = this.currentStage.idx;
						if(idx + 1 < this.currentStages.length){
							if(this.currentStages[idx+1].ready){
								this.currentStage = this.currentStages[idx+1];
								if(loadState == LoadState.StandBy){
									loadState = LoadState.SmartyLoading;
									imageLoader.loadNextStage();
								}
								window.stateMachine.stageLoaded();
								//console.log("%cNew "+((size==0)?('Micro'):((size==1)?('Small'):((size==2)?('Medium'):('Large'))))+" stage: "+this.currentStage.idx, 'color: #cc0');
								this.printNewStage(this.currentStage.idx);
							}else{
								if(this.onWaitStage == null){
									this.onWaitStage = this.currentStages[idx+1];
									$('.'+loadClassName).removeClass('hide-load');
									this.onLoading = true;
									console.log("Waiting for stage...");
								}
							}
						}
					break;
				case ChangeStage.Any:
						if(idx >0 && idx < this.currentStages.length){
							if(this.currentStages[idx].ready){
								this.currentStage = this.currentStages[idx];
								if(loadState == LoadState.StandBy){
									loadState = LoadState.SmartyLoading;
									imageLoader.loadNextStage();	
								}
								window.stateMachine.stageLoaded();
								//console.log("%cNew "+((size==0)?('Micro'):((size==1)?('Small'):((size==2)?('Medium'):('Large'))))+" stage: "+this.currentStage.idx, 'color: #cc0');
								this.printNewStage(this.currentStage.idx);
							}else{
								if(this.onWaitStage == null){
									this.onWaitStage = this.currentStages[idx];
									$('.'+loadClassName).removeClass('hide-load');
									this.onLoading = true;
									console.log("Waiting for stage...");	
								}
							}
						}
					break;
				case ChangeStage.Small:
						size = Size.Small;
						var idx = this.currentStage.idx;
						this.currentStages = this.smallStages;
						this.changeSizeStage(idx);
						this.currentStages[0].refreshImages();
					break;
				case ChangeStage.Medium:
						size = Size.Medium;
						this.currentStages = this.mediumStages;
						var idx = this.currentStage.idx;
						this.changeSizeStage(idx);
						this.currentStages[0].refreshImages();
					break;
				case ChangeStage.Large:
						size = Size.Large;
						this.currentStages = this.largeStages;
						var idx = this.currentStage.idx;
						this.changeSizeStage(idx);
						this.currentStages[0].refreshImages();
					break;
			}
			this.currentStage.refreshImages();
		}
		this.refreshImages = function(){
			for(var i = 0; i < this.currentStages.length;i++){
				this.currentStages[i].refreshImages();
			}
		}
		this.changeSizeStage = function(idx){
			if(this.currentStages[idx].ready){
				this.currentStage = this.currentStages[idx];
				window.stateMachine.stageLoaded();
				//console.log("%cNew "+((size==0)?('Micro'):((size==1)?('Small'):((size==2)?('Medium'):('Large'))))+" stage: "+this.currentStage.idx, 'color: #cc0');
				this.printNewStage(this.currentStage.idx);
			}else{
				this.onWaitStage = this.currentStages[idx];
				//$('.'+loadClassName).removeClass('hide-load');
				this.onLoading = true;
				console.log("Waiting for resize...");
			}
			if(loadState != LoadState.Loading){
				loadState = LoadState.Loading;
				imageLoader.loadNextStage();
			}
		}
		this.unleashStage = function(){
			if(this.onWaitStage != null){
				if(this.onWaitStage.ready){
					this.currentStage = this.onWaitStage;
					this.onWaitStage = null;
					window.stateMachine.stageLoaded();
					//console.log("%cNew "+((size==0)?('Micro'):((size==1)?('Small'):((size==2)?('Medium'):('Large'))))+" stage: "+this.currentStage.idx, 'color: #cc0');
					this.printNewStage(this.currentStage.idx);
					this.currentStages[0].refreshImages();
					this.currentStage.refreshImages();
				}
			}else{
				if(loadState == LoadState.StandBy){
					var allLoaded = true;
					for(var i=0;i<imageLoader.currentStages.length;i++){
						if(!imageLoader.currentStages[i].ready){
							allLoaded = false;
						}
					}
					if(!allLoaded){
						console.log("%cEntrando em estado morto...", 'color: #f00');
						imageLoader.loadNextStage();
					}
				}
			}
			
		}
		this.printNewStage = function(stage){
			console.log("%cNew "+((size==0)?('Micro'):((size==1)?('Small'):((size==2)?('Medium'):('Large'))))+" stage: "+stage, 'color: #cc0');
		}
		this.loadNextStage = function(){
			var idx = imageLoader.currentLoadingStage.idx;
			var founded = false;
			switch(loadState){
				case LoadState.Loading:
						for(var i = 0; i < imageLoader.currentStages.length; i++){
							if(!founded){
								if(!imageLoader.currentStages[i].ready){
									imageLoader.currentLoadingStage = imageLoader.currentStages[i];
									founded = true;
								}	
							}
						}
						if(founded)imageLoader.currentLoadingStage.load();
						else{
							loadState = LoadState.SmartyLoading;
							setTimeout(function(){ imageLoader.loadNextStage();}, 0);
						}
					break;
				case LoadState.SmartyLoading:
						var idx = imageLoader.currentStage.idx;
						if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
							if(!imageLoader.smallStages[idx].ready){
								imageLoader.currentLoadingStage = imageLoader.smallStages[idx];
								founded = true;
							}
							if(!founded){
								if(!imageLoader.mediumStages[idx].ready){
									imageLoader.currentLoadingStage = imageLoader.mediumStages[idx];
									founded = true;
								}
							}
							if(!founded){
								if(!imageLoader.largeStages[idx].ready){
									imageLoader.currentLoadingStage = imageLoader.largeStages[idx];
									founded = true;
								}
							}
							if(!founded){
								loadState = LoadState.StandBy;
							}else{
								imageLoader.currentLoadingStage.load();
							}
						}else{
							loadState = LoadState.StandBy;
						}
					break;
			}
		}
	}
	var StagesCreator  = function(options){
		var microProperties = [];
		var smallProperties = [];
		var mediumProperties = [];
		var largeProperties = [];
		for(var i = 0; i < options.classes.length;i++){
			var classe = options.classes[i];
			microProperties.push(new ImageProperty({'className':classe.className,'imgName':classe.imgName, 'size':Size.Micro,'weights':{'low':classe.sizes.lmi,'high':classe.sizes.hmi}}));
			smallProperties.push(new ImageProperty({'className':classe.className,'imgName':classe.imgName, 'size':Size.Small,'weights':{'low':classe.sizes.ls,'high':classe.sizes.hs}}));
			mediumProperties.push(new ImageProperty({'className':classe.className,'imgName':classe.imgName, 'size':Size.Medium,'weights':{'low':classe.sizes.lm,'high':classe.sizes.hm}}));
			largeProperties.push(new ImageProperty({'className':classe.className,'imgName':classe.imgName, 'size':Size.Large,'weights':{'low':classe.sizes.ll,'high':classe.sizes.hl}}));
		}
		return {
				'micro':new Stage({'imageLoader':options.imageLoader, 'size':Size.Micro, 'readyFunction':options.readyFunction,'imageProperties':microProperties}),
				'small':new Stage({'imageLoader':options.imageLoader, 'size':Size.Small, 'readyFunction':options.readyFunction,'imageProperties':smallProperties}),
				'medium':new Stage({'imageLoader':options.imageLoader, 'size':Size.Medium, 'readyFunction':options.readyFunction,'imageProperties':mediumProperties}),
				'large':new Stage({'imageLoader':options.imageLoader, 'size':Size.Large, 'readyFunction':options.readyFunction,'imageProperties':largeProperties}),
			};
	}
	var Stage = function(options){
		this.ready = false;
		this.imageLoader = options.imageLoader;
		this.size = options.size;
		this.idx = this.imageLoader.largeStages.length;
		this.imageProperties = options.imageProperties;
		this.readyFunction = (options.readyFunction)?(options.readyFunction):(function(){});
		this.totalImagesLoading =  this.imageProperties.length;
		this.load = function(){
			for(var i = 0; i < this.imageProperties.length;i++){
				this.imageProperties[i].load(this);
			}
		}
		this.completeProperty = function(){
			this.totalImagesLoading--;
			if(this.totalImagesLoading==0){
				this.ready = true;
				this.readyFunction();
				//console.log('%c'+((this.size==0)?('Small'):((this.size==1)?('Medium'):('Large')))+' Stage '+this.idx+' is loaded!', 'color: #f00');
				this.imageLoader.printNewStage(this.idx);
				this.imageLoader.unleashStage();
				this.imageLoader.loadNextStage();
			}
		}
		this.refreshImages = function(){
			for(var i = 0; i < this.imageProperties.length;i++){
				this.imageProperties[i].refreshImage();
			}
		}
	}
	var ImageProperty = function(options){
		this.className = options.className;
		this.imgName = options.imgName;
		this.ready = false;
		this.highReady = false;
		this.size = options.size;
		this.weights = options.weights;
		this.lowurl = imagePathProperties.getFolder(Bandwidth.Low,this.size) + this.imgName;
		this.highurl = imagePathProperties.getFolder(Bandwidth.High,this.size) + this.imgName;
		this.load = function(stage){
			switch(bandwidth){
				case Bandwidth.Low:
					this.loadLowImage(this,stage);
					break;
				case Bandwidth.High:
					this.loadHighImage(this,stage);
					break;
			}
		}
		this.loadLowImage = function(imageProperty,stage){
			var startTime;
		    var img = new Image();
		    img.onload = function(){
		    	imageProperty.ready = true;
		    	imageProperty.refreshImage();
		        var elapsedTime = (new Date().getTime()) - startTime;
				userProperties.refreshSpeed(imageProperty.weights.low/(elapsedTime/1000));
				imageProperty.loadHighImage(imageProperty,stage);
				//console.log('Load low: '+ url);
				stage.completeProperty();
		    };
		    startTime = new Date().getTime();
		    var url = imageProperty.lowurl;
		    img.src = url;
		}
		this.loadHighImage = function(imageProperty,stage){
			var startTime;
		    var img = new Image();
		    img.onload = function(){
		    	imageProperty.ready = true;
		    	imageProperty.highReady = true;
		    	imageProperty.refreshImage();
		        var elapsedTime = (new Date().getTime()) - startTime;
		        userProperties.refreshSpeed(imageProperty.weights.high/(elapsedTime/1000));
		        //console.log('Load high: '+ url);
		        stage.completeProperty();
		    };
		    startTime = new Date().getTime();
		    var url = imageProperty.highurl;
		    img.src = url;
		}
		this.refreshImage = function(){
			if(this.ready && size == this.size){
				if(this.highReady){
					//console.log(this.highurl);
					$('.'+this.className).css('background-image','url('+this.highurl+')');
				}else{
					//console.log(this.lowurl);
					$('.'+this.className).css('background-image','url('+this.lowurl+')');
				}
			}
		}
	}
	var size = (($(window).width()<960)?(Size.Small):(($(window).width()>1280)?(Size.Large):(Size.Medium)));
	
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var phisicalWidth = screen.width*window.devicePixelRatio;
		if(phisicalWidth<700){
			size = Size.Micro;
		}else if(phisicalWidth<960){
			size = Size.Small;
		}else{
			size = Size.Medium;
		}
	}

	var bandwidth = Bandwidth.High;
	var imagePathProperties = new ImagePathProperties();
	var userProperties = new UserProperties();
	var imageLoader = new ImageLoader();
	window.imageLoader = imageLoader;
	var loadState = LoadState.Loading;

	if (window.matchMedia) {
	  var mqSmall = window.matchMedia("(min-width: 960px)");

	  mqSmall.addListener(function(mq){
	  	if (mq.matches) {
	  		imageLoader.askToChangeStage(ChangeStage.Medium);
	  	}else{
	  		imageLoader.askToChangeStage(ChangeStage.Small);
	  	}
	  	window.versoesManager.sizeWasChanged();
	  });
	  var mqLarge = window.matchMedia("(min-width: 1280px)");
	  mqLarge.addListener(function(mq){
	  	if (mq.matches) {
	  		imageLoader.askToChangeStage(ChangeStage.Large);
	  	}else{
	  		imageLoader.askToChangeStage(ChangeStage.Medium);
	  	}
	  	window.versoesManager.sizeWasChanged();
	  });
	}


	setInterval(function(){ imageLoader.unleashStage(); }, 1000);
	/*

	$(document).keydown(function(e) {
	    switch(e.which) {
	        case 38: // up
	        	imageLoader.askToChangeStage(ChangeStage.Prev);
	        break;
	        case 40: // down
	        	imageLoader.askToChangeStage(ChangeStage.Next);
	        break;
	        case 49: // down
	        	imageLoader.askToChangeStage(ChangeStage.Any,1);
	        break;
	        case 50: // down
	        	imageLoader.askToChangeStage(ChangeStage.Any,2);
	        break;
	        case 51: // down
	        	imageLoader.askToChangeStage(ChangeStage.Any,3);
	        break;
	        case 52: // down
	        	imageLoader.askToChangeStage(ChangeStage.Any,4);
	        break;
	        default: return; // exit this handler for other keys
	    }
	    e.preventDefault(); // prevent the default action (scroll / move caret)
	});
*/

	$(function () {
	  $(document).keyup(function (e) {
	     //alert(e.keyCode);
	  });
	});
});