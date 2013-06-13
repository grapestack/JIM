var initJIM = function(ref) {
	window.jim = jim;
	window[ref] = window.jim;
	
	var collapsers = jim('.collapser','[]');
	
	for (var i=0;i<collapsers.length;i++) {			
		collapsers[i].onclick = function(){ 
		
		var collapseTarget = this.getAttribute("data-target");			
								
			if (jim().hasClass(jim(collapseTarget).className.split(' '),'display')) {
							
				var newClasses = jim().removeClass(jim(collapseTarget).className,'display');
												
				jim(collapseTarget).className = newClasses;
			
			} else {
					
				var newClasses = jim().addClass(jim(collapseTarget).className,'display');
												
				jim(collapseTarget).className = newClasses;
			
			}
					
		};
	}		
	
	var controls = jim('.control','[]');
	
	for (var i=0;i<controls.length;i++) {			
		controls[i].onclick = function(){ 
		
		var controlTarget = this.getAttribute("data-control");			
											
					var controlTargets = jim('.'+controlTarget,'[]');
	
						for (var ii=0;ii<controlTargets.length;ii++) {
							
							if (jim().hasClass(controlTargets[ii].className.split(' '),'display')) {
							
								var newClasses = jim().removeClass(controlTargets[ii].className,'display');
								
								controlTargets[ii].className = newClasses;
							
							} else {
								
								var newClasses = jim().addClass(controlTargets[ii].className,'display');
								
								controlTargets[ii].className = newClasses;
								
							}
						
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
				
					jim().removeClass(jim(collapseTarget).className.split(' '),'display');

				}
				
			if (document.width >= 480) {
					jim().removeClass(jim(collapseTarget).className.split(' '),'display');
				}
				
			if (document.width >= 980) {				
				}		
				

					
		};
		
	var collapsers = jim('.collapse2','[]');
		
	for (var i=0;i<collapsers.length;i++) {			

			var collapseTarget = collapsers[i].getAttribute("data-target");
			
			if (document.width >= 0) {
					jim().removeClass(jim(collapseTarget).className.split(' '),'display');	
				}
				
			if (document.width >= 480) {								
				}
				
			if (document.width >= 980) {
					jim().removeClass(jim(collapseTarget).className.split(' '),'display');
				}		
				

					
		};
		
		res = setTimeout(callback,25);
		
	}			
	
}

this.removeClass = function(classes,targetClass){

	if (typeof(classes) == 'string') {
		classes = classes.split(" ");
	} else 	if (typeof(classes) == 'object') {
		classes = classes.obj.className.split(" ");
	}
	

	
	var tempClasses = [];
		for (var iii=0;iii<classes.length;iii++) {
			if (classes[iii] != targetClass) {
				tempClasses.push(classes[iii]);
			}
		}
		
	return  tempClasses.join(" ");
	
}

this.addClass = function(classes,targetClass){		
						
						console.log(classes);
						
	if (typeof(classes) == 'string') {
		classes = classes.split(" ");
	} else if (typeof(classes) == 'object') {
		classes = classes.obj.className.split(" ");
	}
														
	var tempClasses = [];
	var classExsists = true;
		for (var iii=0;iii<classes.length;iii++) {
			tempClasses.push(classes[iii]);
			if (classes[iii] == targetClass) {
				classExsists = false;
			}			
		}
		
	if (classExsists == true) {
		tempClasses.push(targetClass);
	}
				
	return tempClasses.join(" ");
	
}

this.hasClass = function(classes,compareClass){
	
	var existingClass = false;
	
		for (var iii=0;iii<classes.length;iii++) {
			if (classes[iii] == compareClass) {
				existingClass = true;
			}
		}
		
	return existingClass;
	
}

this.get = function(obj,objDefinition,rt) {

	if (objDefinition == '#') {

		if (rt == 'obj') {
		
			var returnObj = {
				"obj":document.getElementById(obj),
				"jim":jim,
				"$":jim
				}
				
			return returnObj;			
		} else {
			
			return document.getElementById(obj);
			
		}
		
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
		} else if (rt == 'obj') {
			
			var returnObj = {
				"obj":obj,
				"jim":jim,
				"$":jim
				}
				
			return returnObj;
			
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