# om-forms

A Clojurescript library that lets you build beautiful forms based on Om and Bootstrap 3.

## Usage

### Getting started

Your dependencies in project.clj should roughly look like this:

```clojure
:dependencies [[org.clojure/clojure "1.7.0-RC1"]
               [org.clojure/clojurescript "0.0-3308"]
               [org.omcljs/om "0.8.8"]
               [sablono "0.3.4"]
               [om-forms "0.1.0-SNAPSHOT"]
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
  [customer _owner]
  (om/component
    (sablono/html
      (f/form
        {}
        (f/text "Your name" "Type your name here" customer [:name])
        (f/button "Submit" #(js/alert (:name @customer)))))))
```

![](https://github.com/bilus/om-forms/blob/master/images/hello-world.png)

Note that `form` returns a data structure compatible with sablono which we then compile into a node.

#### Simple example
#### Grouping controls
#### Wrapping in panel
#### Button groups

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
