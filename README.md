# om-forms

A Clojurescript library that lets you build beautiful forms with [Om](https://github.com/omcljs/om) and [Bootstrap 3](http://getbootstrap.com/) and (optionally) [Font Awesome](http://fortawesome.github.io/Font-Awesome/). It focuses on helping you quickly build forms rather than supporting every Bootstrap feature. 

I deliberately limit the functionality to the essentials. If you think something useful is missing though, please let me know. The library does not use Bootstrap JavaScript.  

You can safely use this library in your project. It has been used in a large production project and its interface isn't likely to change.

![Sample](https://github.com/bilus/om-forms/blob/master/doc/images/sample.png)

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

To use Font Awesome icons to use features such as progress spinner, warning icons etc., link to it as well:

```html
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
```


Minimal requires:

```clojure
(ns hello-world.core
  (:require [om-forms.core :include-macros true :as forms]
            [om.core :as om]
            [sablono.core :include-macros true :as sablono]))
```

### Quick tutorial

#### Hello, world!

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

![Hello world](https://github.com/bilus/om-forms/blob/master/doc/images/hello-world.png)

Note that `form` returns a data structure compatible with [sablono](https://github.com/r0man/sablono) which we then compile into a node using `sablono/html` above. The example below, though a bit simplified and scrubbed, should give you an idea:

```clojure
[:form {} [:div {:class "form-group"
                 :key "data-name"}
           [:label {:for "data-name"
                    :class "control-label "} "Your name"]
           [:input {:onChange ...
                    :value "My name"
                    :type "text"
                    :class "form-control"
                    :id "data-name"
                    :placeholder "Type your name here"}]]
 [:div.form-group.form-buttons
  [:button {:type "button"
            :class "btn btn-primary"
            :onClick #(js/alert (:name @data))} "Submit"]]]
```

#### Data binding

The controls bind directly to Om cursors. For example, as the user types text into the text box below, `data` is automatically updated:

```clojure
(f/text "Your name" "Type your name here" data [:name])
```

<img src="https://github.com/bilus/om-forms/blob/master/doc/images/text.png" width="70%">

```clojure
(prn @data) ;; => {:name "John Wayne}
```


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

![Horizontal orientation](https://github.com/bilus/om-forms/blob/master/doc/images/hello-world-horizontal.png)

#### Wrapping in panel

To wrap the form in a panel use `panel`:

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

![Form wrapped in a panel](https://github.com/bilus/om-forms/blob/master/doc/images/hello-world-panel.png)

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

![Horizontal orientation](https://github.com/bilus/om-forms/blob/master/doc/images/hello-world-buttons-hor.png)

Click!

![Vertical orientation](https://github.com/bilus/om-forms/blob/master/doc/images/hello-world-buttons-ver.png)

The complete example: [here](https://github.com/bilus/om-forms/blob/master/examples/hello_world/src/hello_world.cljs).

For the list of available controls, see reference: TODO

### Validation

The library supports client-side data validation.

#### Basics

To use validators, `require` `om-forms.validation`, use form and form field helpers from this namespace instead of `om-forms.core` and use `validate!`:

```clojure
(ns my-validation
  (:require [om-forms.validation :include-macros true :as v]
            [om.core :as om]
            [sablono.core :include-macros true :as sablono]))
```

Apart from `form`, the helpers have an identical interface to ones in `om-forms.core`.

```clojure
(defn signup-form-view
  [[data ui-state] _owner]                                                ;; 1
  (reify                                                    
    om/IRender
    (render [_]
      (html
        (v/form                                                           ;; 2
          {}
          ui-state                                                        ;; 3
          (v/text "Login" "Choose your login" data [:login])              ;; 4
          (v/password "Password" "Enter your password" data [:password1]) 
          (v/password "Confirm password" "Re-enter your password" data [:password2])
          (f/form-buttons
            (f/button-primary "Sign up" #(sign-up! data ui-state))))))))  ;; 5
```

1. We're passing `data` to bind the form fields to and `ui-state` where validation results will be stored. There's no technical reason we cannot use `data` for this but separating this makes it cleaner. You can also store validation errors in local state (see the FAQ below).
2. Note that we're using `form` from `om-forms.validation` and that it takes an extra argument (3).
3. This is the cursor used to store validation errors.
4. Again, we use the helpers from `om-forms.validation` not `om-forms.core`.
5. Here we call our function which will perform validation

Here's the sign up function. It shows an alert if data validates:

```clojure
(defn sign-up!
  [data ui-state]
  (when (v/validate!                                                      ;; 1
           data                                                           ;; 2
           ui-state                                                       ;; 3
           (v/present [:login] "Enter login name")                        ;; 4
           (v/equal [:password1] [:password2] "Passwords do not match")
           (v/present [:password1] "Choose password")
           (v/present [:password2] "Re-enter password"))
    (js/alert "Signed up!"))
```

1. `validate!` returns true if data is valid.
2. This is data to validate.
3. Cursor to store validation results.
4. Validators.

Here's what happens after you click "Sign up" while all fields are empty:

<img src="https://github.com/bilus/om-forms/blob/master/doc/images/validation-1.png" width="70%">

For the list of available validators, see the reference. TODO

#### Custom validators
#### Custom error
#### Showing warnings

### Tables
#### Basic table
#### Column names
#### Row selection

### Configuration options

### FAQ
#### How to store validation errors in local state?
#### How to save changes to data when user clicks a button?
#### How to show an operation is in progress?
#### Can I use built-in Bootstrap icons instead of Font Awesome?
#### How do I use different column widths for horizontal forms

### Further reading
#### Examples
#### Reference

### TBD
- FIX form submission on enter.
- FIX group-title alignment.
- Add tabs.
- Add wizard.

Report problems...

## License

Copyright © 2015 Designed.ly

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
