Javascript Micro-Templating for Clients (tpljs)
=====

** Usage **
```
var template = new tpljs();

template.add('template_name', function() {/*
Your multiline string here with $variable
*/});

console.log( template.view('template_name', {variable: 'your data or function'}) );

```