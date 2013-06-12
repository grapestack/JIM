var initJIM = function(ref) {
	window.jim = jim;
	window[ref] = window.jim;
	
	var collapsers = jim('.collapser','[]');
	
	for (var i=0;i<collapsers.length;i++) {			
		collapsers[i].onclick = function(){ 
		
		var collapseTarget = this.getAttribute("data-target");			
		
			if (jim(collapseTarget).className.indexOf(' display') != -1) {
							
				jim(collapseTarget).className = jim(collapseTarget).className.replace(' display', '');
			
			} else {
					
				jim(collapseTarget).className = jim(collapseTarget).className + ' display';
			
			}
					
		};
	}		
}

function jim(obj,rt) {

	if (rt) {
		var grt = rt;
	} else {
		var grt = '{}';
	}

	if (obj) {
		
		if (obj=='resize') {
			return jim().resize(grt);
		}
		
		if (typeof(obj) == 'string') {
			
			if (obj.toString().substring(0,1) == '#') { 
				var objStr = obj.split("#");
				return jim().get(objStr[1],'#',grt);

			} else if (obj.toString().substring(0,1) == '.') { 
				var objStr = obj.split(".");
				return jim().get(objStr[1],'.',grt);

			} else {

				return jim().get(obj,'#',grt);

			}


		} else if (typeof(obj) == 'object') {
			return obj;
			
		}
	}

// JavaScript Inline Markup

var about = 'JIM Is Minimal';

this.info = about;

this.getInfo = function() {
	return this.info;
}

this.getAbout = function() {
	return about;
}

this.resize = function(callback) {

	var res;
	window.onresize=function() {
		if (res){ clearTimeout(res) };
			
	var collapsers = jim('.collapse1','[]');

	for (var i=0;i<collapsers.length;i++) {			

			var collapseTarget = collapsers[i].getAttribute("data-target");
			
			if (document.width >= 0) {			
				}
				
			if (document.width >= 480) {
					jim(collapseTarget).className = jim(collapseTarget).className.replace(' display', '');
				}
				
			if (document.width >= 980) {
					jim(collapseTarget).className = jim(collapseTarget).className.replace(' display', '');
				}		
				

					
		};
		
	var collapsers = jim('.collapse2','[]');
		
	for (var i=0;i<collapsers.length;i++) {			

			var collapseTarget = collapsers[i].getAttribute("data-target");
			
			if (document.width >= 0) {
					jim(collapseTarget).className = jim(collapseTarget).className.replace(' display', '');			
				}
				
			if (document.width >= 480) {								
				}
				
			if (document.width >= 980) {
					jim(collapseTarget).className = jim(collapseTarget).className.replace(' display', '');
				}		
				

					
		};
		
		res = setTimeout(callback,25);
		
	}			
	
}

this.get = function(obj,objDefinition,rt) {

	if (objDefinition == '#') {
		
	return document.getElementById(obj);
		
	} else if (objDefinition == '.') {
	
	var nl = document.getElementsByClassName(obj);
		
	var arr = [];
	for (var i = 0, ref = arr.length = nl.length; i < ref; i++) {
	 arr[i] = nl[i];
	}
	
	if (rt == '[]') {
		return arr;
	} else if (rt == '{}') {
		return nl;
	}	
		
	} else {
		return false;
	}
		
}

this.getEventSource = function(ev)
	{
		if(ev)			//Moz
		{
			return ev.target;
		}
	
		if(window.event)	//IE
		{
			return window.event.srcElement;
		}
	}

return this;

}