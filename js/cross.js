
$(document).ready(function() {
	var CrossManager = function(){
		var lastState = null;
		this.setLastState = function(state){
			lastState = state;
		}
		this.back = function(){
			var page;
			if(lastState!=null) page = lastState.name;
		    switch(page){
		    	case "home":
		    		window.stateMachine.askMove(window.stateMachine.Trigger.Home);
		    		break;
		    	case "identidade":
		    		window.stateMachine.askMove(window.stateMachine.Trigger.Identidade);
		    		break;
		    	case "fatos":
		    		window.stateMachine.askMove(window.stateMachine.Trigger.Fatos);
		    		break;
		    	case "versoes":
		    		window.stateMachine.askMove(window.stateMachine.Trigger.Versoes);
		    		break;
		    	case "tour":
		    		window.stateMachine.askMove(window.stateMachine.Trigger.Tour);
		    		break;
		    	case "galeria":
		    		window.stateMachine.askMove(window.stateMachine.Trigger.Galeria);
		    		break;
		    	default:
		    		window.stateMachine.askMove(window.stateMachine.Trigger.Home);
		    		break;
		    }
		}
	}
	var crossManager = new CrossManager();
	window.crossManager = crossManager;
});