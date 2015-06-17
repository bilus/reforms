- FIX checkbox and radio alignment.

# om-forms

A Clojurescript library that lets you build beautiful forms with Om and Bootstrap 3. Its purpose is to make it possible to quickly build forms rather than make it possible to use every Bootstrap feature. 
I have deliberately limited the library to the key essentials but you think something useful is missing, please let me know. 

You can safely use this library in your project. It has been used in a large production project and its interface isn't likely to change.

![](https://github.com/bilus/om-forms/blob/master/doc/images/sample.png)

## Usage

### Getting started

Your dependencies in project.clj should roughly look like this:

```clojure
:dependencies [[org.clojure/clojure "1.7.0-RC1"]
               [org.clojure/clojurescript "0.0-3308"]
               [org.omcljs/om "0.8.8"]
               [sablono "0.3.4"]
               [om-forms "0.1.0-SNAPSHOT"]
               ...]
```

Remember to link to bootstrap css from your html page, e.g.:

```html
<link href="https://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet"/>
```


Minimal requires:

```clojure
(ns hello-world.core
  (:require [om-forms.core :include-macros true :as forms]
            [om.core :as om]
            [sablono.core :include-macros true :as sablono]))
```

### Hello, world

Here's how you create an Om component with a form with just one text field and a button:

```clojure
(defn simple-view
  [data _owner]
  (om/component
    (sablono/html
      (f/form
        {}
        (f/text "Your name" "Type your name here" data [:name])
        (f/form-buttons
           (f/button "Submit" #(js/alert (:name @data))))))))
```

![](https://github.com/bilus/om-forms/blob/master/doc/images/hello-world.png)

Note that `form` returns a data structure compatible with sablono which we then compile into a node.

### Prettying it up

#### Changing orientation

To change the orientation use `with-options`:

```clojure
(f/with-options {:form {:horizontal true}}
    (f/form
     {}
     (f/text "Your name" "Type your name here" data [:name])
     (f/form-buttons
       (f/button "Submit" #(js/alert (:name @data))))))
```

![](https://github.com/bilus/om-forms/blob/master/doc/images/hello-world-horizontal.png)

#### Wrapping in panel

To wrap the form in a panel, use `panel`:

```clojure
(f/panel
    "Hello, world"
    {}
    (f/form
      {}
      (f/text "Your name" "Type your name here" data [:name])
      (f/form-buttons
        (f/button "Submit" #(js/alert (:name @data))))))
```

![](https://github.com/bilus/om-forms/blob/master/doc/images/hello-world-panel.png)

#### Button types

Finally, let's take make the button clearly a primary one and add a cancel button and, just for the fun of it, a checkbox that toggles the orientation:

```clojure
(f/form
  {}
  (f/text "Your name" "Type your name here" data [:name])
  (f/form-buttons
    (f/button-primary "Submit" #(js/alert (:name @data)))
    (f/button-default "Cancel" #(js/alert "Cancel!")))
  (f/checkbox "Horizontal form" data [:orientation-horizontal]))
```

![](https://github.com/bilus/om-forms/blob/master/doc/images/hello-world-buttons.png)

The complete example: [here](https://github.com/bilus/om-forms/blob/master/examples/hello_world/src/hello_world.cljs).

For the list of available controls, see reference: ...

### Form options
#### Orientation
#### Columns
#### Other

### Validation
#### Basics
#### Custom error
#### Custom validators
#### Nesting validators
#### Showing warnings

### Tables
#### Basic table
#### Column names
#### Row selection

### Background processing

### Advanced
#### Storing validation errors in local state

### Further reading
#### Examples
#### Reference

Report problems...

## License

Copyright © 2015 Designed.ly

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
