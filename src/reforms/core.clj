;  Copyright (c) 2015 Designed.ly, Marcin Bilski
;  The use and distribution terms for this software are covered by the
;  Eclipse Public License which can be found in the file LICENSE at the root of this distribution.
;  By using this software in any fashion, you are agreeing to be bound by the terms of this license.
;  You must not remove this notice, or any other, from this software.

(ns reforms.core)

(defmacro with-options
  "Specify options for a block.

  ** Important:** Use only inside a component and never outside om.core/build or om.core/root because it uses
  dynamic binding. To specify global options use [set-options!].

   Example:

       (with-options {:form {:horizontal true}}
           (form
              (text ...)
              (button ...))"
[options & body]
`(binding [reforms.core.options/*options* (reforms.core.options/merge-options ~options)]
   ~@body))

