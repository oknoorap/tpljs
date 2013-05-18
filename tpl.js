var tpljs = function() {
	'use strict';

	var
		_tpljs,
		rcontent = /\/\*([\s\S]*?)\*\//g,
		rtemplate = new RegExp('\\$([a-zA-Z0-9_]+)', 'g')
	;

	/* tpljs alias */
	_tpljs = function() {};

	/* store tpljs data */
	_tpljs.prototype.tpl = {};
	
	/* add tpl js using function, templating using javascript comments */
	_tpljs.prototype.add = function(name, fn) {
		var
			rcontentMatch = fn.toString().match(rcontent),
			content = ''
		;

		/* Extract Content */
		if (rcontentMatch != null) {
			content = rcontentMatch[0];
			content = content.replace(rcontent, function(m, $1) {
				return $1.replace("\n", '').trim();
			});
		}

		_tpljs.prototype.tpl[name] = content;
	};

	/* get template and give variable */
	_tpljs.prototype.view = function(name, obj) {
		var template = _tpljs.prototype.tpl[name];

		if( typeof template !== 'undefined' ) {
			if(typeof obj !== 'undefined') {

				/* Replace all variables with objects */
				template = template.replace(rtemplate, function replace_var_with_value(match, value) {
					if (obj.hasOwnProperty( value )) {
						return obj[ value ];
					};
				});

			}
			return template;
		}

		return;
	};

	return Object.create(_tpljs.prototype);
};
tpljs.call(this);