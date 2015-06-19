# Reforms

A Clojurescript library that lets you build beautiful forms with [Om](https://github.com/omcljs/om) and [Bootstrap 3](http://getbootstrap.com/) and (optionally) [Font Awesome](http://fortawesome.github.io/Font-Awesome/).  

It focuses on helping you quickly build forms rather than supporting every Bootstrap feature. If you think something useful is missing though, please let me know.   

The code has been extracted from a 'real' project and though it should be completely safe to use it in production, I heavily refactored the code and added controls we hadn't needed so if anything is amiss, please let me know.  

<img src="https://github.com/bilus/reforms/blob/master/doc/images/sample.png" width="70%">

A good place to see the available controls: [demo](http://bilus.github.io/reforms/examples/controls/index.html).

## Usage

### Getting started

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


Minimal requires:

```clojure
(ns hello-world.core
  (:require [reforms.core :include-macros true :as forms]
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
        (f/text "Your name" "Type your name here" data [:name])
        (f/form-buttons
           (f/button "Submit" #(js/alert (:name @data))))))))
```

![Hello world](https://github.com/bilus/reforms/blob/master/doc/images/hello-world.png)

Note that `form` returns a data structure compatible with [sablono](https://github.com/r0man/sablono) which we then compile into a node using `sablono/html` above. The example below, though a bit simplified and scrubbed for clarity, should give you an idea:

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

#### Data binding

The controls bind directly to Om cursors. For example, as the user types text into the text box below, `data` is automatically updated:

```clojure
(f/text "Your name" "Type your name here" data [:name])
```

<img src="https://github.com/bilus/reforms/blob/master/doc/images/text.png" width="60%">

```clojure
(prn @data) ;; => {:name "John Wayne}
```


### Prettying it up

#### Changing orientation

To change the orientation use `with-options`:

```clojure
(f/with-options {:form {:horizontal true}}
    (f/form
     (f/text "Your name" "Type your name here" data [:name])
     (f/form-buttons
       (f/button "Submit" #(js/alert (:name @data))))))
```

![Horizontal orientation](https://github.com/bilus/reforms/blob/master/doc/images/hello-world-horizontal.png)

#### Wrapping in a panel

To wrap the form in a panel use `panel`:

```clojure
(f/panel
    "Hello, world"
    (f/form
      (f/text "Your name" "Type your name here" data [:name])
      (f/form-buttons
        (f/button "Submit" #(js/alert (:name @data))))))
```

![Form wrapped in a panel](https://github.com/bilus/reforms/blob/master/doc/images/hello-world-panel.png)

#### Button types

Finally, let's take make the button clearly a primary one and add a cancel button and, just for the fun of it, a checkbox that toggles the orientation:

```clojure
(f/form
  (f/text "Your name" "Type your name here" data [:name])
  (f/form-buttons
    (f/button-primary "Submit" #(js/alert (:name @data)))
    (f/button-default "Cancel" #(js/alert "Cancel!")))
  (f/checkbox "Horizontal form" data [:orientation-horizontal]))
```

![Horizontal orientation](https://github.com/bilus/reforms/blob/master/doc/images/hello-world-buttons-hor.png)

Click!

![Vertical orientation](https://github.com/bilus/reforms/blob/master/doc/images/hello-world-buttons-ver.png)

The complete example: [here](https://github.com/bilus/reforms/blob/master/examples/hello_world/src/hello_world.cljs) [demo](http://bilus.github.io/reforms/examples/hello_world/index.html).

For the list of available controls, see the [API Reference](http://bilus.github.com/reforms/doc/).

### Validation

The library supports client-side data validation.

#### Basics

To use validators, `require` `reforms.validation`, use form and form field helpers from this namespace instead of `reforms.core` and use `validate!`:

```clojure
(ns my-validation
  (:require [reforms.validation :include-macros true :as v]
            [om.core :as om]
            [sablono.core :include-macros true :as sablono]))
```

Apart from `form`, the helpers have an identical interface to ones in `reforms.core`.

```clojure
(defn signup-form-view
  [[data ui-state] _owner]                                                ;; 1
  (reify                                                    
    om/IRender
    (render [_]
      (html
        (v/form                                                           ;; 2
          ui-state                                                        ;; 3
          (v/text "Login" "Choose your login" data [:login])              ;; 4
          (v/password "Password" "Enter your password" data [:password1]) 
          (v/password "Confirm password" "Re-enter your password" data [:password2])
          (f/form-buttons
            (f/button-primary "Sign up" #(sign-up! data ui-state))))))))  ;; 5
```

1. We're passing `data` to bind the form fields to and `ui-state` where validation results will be stored. There's no technical reason we cannot use `data` for this but separating this makes it cleaner. You can also store validation errors in local state (see the FAQ below).
2. Note that we're using `form` from `reforms.validation` and that it takes an extra argument (3).
3. This is the cursor used to store validation errors.
4. Again, we use the helpers from `reforms.validation` not `reforms.core`.
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

1. `validate!` returns a truthy value if data is valid.
2. This is data to validate.
3. Cursor to store validation results.
4. Validators.

Here's what happens after you click "Sign up" while all fields are empty:

<img src="https://github.com/bilus/reforms/blob/master/doc/images/validation-1.png" width="40%">

To satisfy your curiosity, here are the contents of `ui-state`:

```clojure
{:validation-errors [{:korks #{[:login]}, :error-message "Enter login name"} 
                     {:korks #{[:password1]}, :error-message "Choose password"} 
                     {:korks #{[:password2]}, :error-message "Re-enter password"}]}
```

A slightly richer example: [here](https://github.com/bilus/reforms/blob/master/examples/validation/src/validation.cljs) ([demo](http://bilus.github.io/reforms/examples/validation/index.html)).

For the list of available validators, see the [API Reference](http://bilus.github.com/reforms/doc/).

#### Custom validators
#### Custom error
#### Showing warnings

### Tables
#### Basic table
#### Column names
#### Checkboxes

### Customization
#### Inline controls
#### Configuration via `with-options`
#### Element attributes

### FAQ
#### How do I submit the form when the user presses ENTER?
#### How to store validation errors in local state?
#### How to save changes to data when user clicks a button?
#### How to show an operation is in progress?
#### Can I use built-in Bootstrap icons instead of Font Awesome?
#### How do I use different column widths for horizontal forms

### Demos


- Hello world [source](https://github.com/bilus/reforms/tree/master/examples/hello_world) [demo](http://bilus.github.io/reforms/examples/hello_world/index.html)

- Dynamic form with customizations [source](https://github.com/bilus/reforms/tree/master/examples/simple) [demo](http://bilus.github.io/reforms/examples/simple/index.html)

- Available controls [source](https://github.com/bilus/reforms/tree/master/examples/controls) [demo](http://bilus.github.io/reforms/examples/controls/index.html)

- Supported [source](https://github.com/bilus/reforms/tree/master/examples/validation) [demo](http://bilus.github.io/reforms/examples/validation/index.html)


#### Documentation

- [API Reference](http://bilus.github.io/reforms/doc/)


Please feel free to tweet me @martinbilski or drop me an email: gyamtso at gmail dot com.

### TBD

- Finish Readme without tables.
- Add TOC.
- Publish.

- Add support for reagent.
- Proof-of-concept reagent sample.

- Add table. Namespace. Example. Add to 'controls' example.
- Add tabs. Update 'controls' example.
- Add wizard. Update 'controls' example.
- Port tests.
- Fix deploy_pages.sh failing to publish changes to index.html's for examples and doc/images/*.   
- Fix Each child in an array should have a unique "key" prop. Check the renderComponent call using <undefined>. See http://fb.me/react-warning-keys for more information.
- Fix Warning: Use the `defaultValue` or `value` props instead of setting children on <textarea>.
- Fix with-option is apparently not working around om/root and/or build/outside component.
- (?) FIX group-title alignment for horizontal form.

## License

Copyright © 2015 Designed.ly, Marcin Bilski

The use and distribution terms for this software are covered by the
Eclipse Public License which can be found in the file LICENSE at the root of this distribution.
By using this software in any fashion, you are agreeing to be bound by the terms of this license.
You must not remove this notice, or any other, from this software.
