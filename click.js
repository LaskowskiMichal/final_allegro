var addEvent = (function( window, document ) { 
    if ( document.addEventListener ) { 
        return function( elem, type, cb ) { 
            if ( (elem && !elem.length) || elem === window ) { 
                elem.addEventListener(type, cb, false ); 
            } 
            else if ( elem && elem.length ) { 
                var len = elem.length; 
                for ( var i = 0; i < len; i++ ) { 
                    addEvent( elem[i], type, cb ); 
                } 
            } 
        }; 
    } 
    else if ( document.attachEvent ) { 
        return function ( elem, type, cb ) { 
            if ( (elem && !elem.length) || elem === window ) { 
                elem.attachEvent( 'on' + type, function() { return cb.call(elem, window.event) } ); 
            } 
            else if ( elem.length ) { 
                var len = elem.length; 
                for ( var i = 0; i < len; i++ ) { 
                    addEvent( elem[i], type, cb ); 
                } 
            } 
        }; 
    } 
})(this, document); 
// Example Usage 
	var cont = document.getElementById('container');
	var el = document.getElementById('miesiac');
	var err = document.getElementById('error');
	var list = document.getElementById('nav');
function stopBubble(){
	if (!e) {
        var e = window.event;
    }
    e.cancelBubble = true;
	e.stopImmediatePropagation();
	e.returnValue = false;
    if (e.stopPropagation) {
		e.stopImmediatePropagation();
        e.stopPropagation();
		e.preventDefault();
	}
	else if(window.$.Event.prototype){
		window.$.Event.prototype.stopPropagation();
	}
}
function changeMonth(newMonth){
	
	el.innerHTML = (newMonth + '<img src="strzalkadol.png"/>');
	el.style.borderBottomColor = "lightgreen";
	el.style.color = '#939393';
	err.innerHTML = '';
	list.style.display = 'none';
	stopBubble();
}
function slideDown(){
	list.style.display = 'block';
	el.innerHTML = 'Miesiąc <img src="strzalkagora.png"/>';
	stopBubble();
}
function errorEv(){
	if(list.style.display == 'block'){
	el.innerHTML = 'Miesiąc <img src="strzalkadol.png"/>';
	el.style.borderBottomColor = 'red';
	list.style.display = 'none';
	err.innerHTML = 'Wybierz miesiąc';
	}
}

addEvent(el, 'click', slideDown);
addEvent(cont, 'click', errorEv);