### Time for Reforms has come

**[Reforms](http://github.com/bilus/reforms)** is a Clojurescript library that lets you build beautiful forms with [Om](https://github.com/omcljs/om) and [Bootstrap 3](http://getbootstrap.com/) and (optionally) [Font Awesome](http://fortawesome.github.io/Font-Awesome/).  

<p align="center"><img src="https://raw.githubusercontent.com/bilus/reforms/master/doc/images/sample.png" width="70%"></p>

#### Quick start ####

Add `reforms` to `:dependencies` in project.clj:

[![Clojars Project](http://clojars.org/reforms/latest-version.svg)](http://clojars.org/reforms)

The library does not use Bootstrap JavaScript so just link to bootstrap css from your html page, e.g.:

```html
<link href="https://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet"/>
```

Optionally, to use Font Awesome icons to use features such as progress spinner, warning icons etc., link to it as well:

```html
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
```

Create your first form:

```clojure
(f/form
  (f/text "Your name" "Type your name here" data [:name])
  (f/form-buttons
    (f/button "Submit" #(js/alert (:name @data)))))
```

It's all pure data to be compiled with [sablono](https://github.com/r0man/sablono):

```clojure
[:form [:div {:class "form-group"
              :key "data-name"}
        [:label {:for "data-name"
                 :class "control-label "} "Your name"]
        [:input {:value "My name"
                 :type "text"
                 :class "form-control"
                 :id "data-name"
                 :placeholder "Type your name here"}]]
 [:div.form-group.form-buttons
  [:button {:type "button"
            :class "btn btn-primary"
            :onClick #(js/alert (:name @data))} "Submit"]]]
```

Good places to start: [Readme](https://github.com/bilus/reforms/blob/master/README.md) [API Reference](http://bilus.github.io/reforms/doc/)

Examples:

- Hello world [source](https://github.com/bilus/reforms/tree/master/examples/hello_world) [demo](https://github.com/bilus/reforms/examples/hello_world/index.html)
- Dynamic form with customizations [source](https://github.com/bilus/reforms/tree/master/examples/simple) [demo](https://github.com/bilus/reforms/examples/simple/index.html)
- Available controls [source](https://github.com/bilus/reforms/tree/master/examples/controls) [demo](https://github.com/bilus/reforms/examples/controls/index.html)
- Validation [source](https://github.com/bilus/reforms/tree/master/examples/validation) [demo](https://github.com/bilus/reforms/examples/validation/index.html)

Please feel free to tweet me @martinbilski or drop me an email: gyamtso at gmail dot com.
