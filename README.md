Javascript Micro-Templating for Clients (tpljs)
=====

**Usage**
```
var template = new tpljs();

template.add('template_name', function() {/*
Your multiline string here with $variable
*/});

console.log( template.view('template_name', {variable: 'your data or function'}) );

```

**Pass variable using callback**

You can pass variable using callback, e.g

```
var template = new tpljs();

template.add('template_name', function() {/*
Is url hash '#bar' = $hash
*/});

console.log( template.view('template_name', {hash: function() {

   if(window.location.hash === '#bar') {
      return 'true';
   }
   
   return 'false';

}}) );

```