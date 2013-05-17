var tpljs = function() {
	'use strict';

	var
		_tpljs
	;

	/* tpljs alias */
	_tpljs = function() {};

	/* store tpljs data */
	_tpljs.prototype.tpl = {};
	
	/* add tpl js using function, templating using javascript comments */
	_tpljs.prototype.add = function(name, fn){
		_tpljs.prototype.tpl[name] = fn;
	};

	/* get template and give variable */
	_tpljs.prototype.view = function(name, obj) {
		var template = _tpljs.prototype.tpl[name].toString();

		if( typeof template !== 'undefined' ) {
			var
				rcontent = /\/\*([\s\S]*?)\*\//g,
				rcontentMatch = template.match(rcontent),
				content
			;

			if (rcontentMatch != null) {
				content = rcontentMatch[0];
				content = content.replace(rcontent, function(m, $1) {
					return $1.replace("\n", '').trim();
				});

				if(typeof obj !== 'undefined') {
					var
						i
					;
					for(i in obj) {
						if (obj.hasOwnProperty(i)) {
							content = content.replace(new RegExp('\\$' + i, 'g'), obj[i]);
						}
					}

					return content;
				}

				return content;
			}

			return;
		}

		return;
	};

	return Object.create(_tpljs.prototype);
};
tpljs.call(this);