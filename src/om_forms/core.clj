;  Copyright (c) 2015 Designed.ly, Marcin Bilski
;  The use and distribution terms for this software are covered by the
;  Eclipse Public License which can be found in the file LICENSE at the root of this distribution.
;  By using this software in any fashion, you are agreeing to be bound by the terms of this license.
;  You must not remove this notice, or any other, from this software.

(ns om-forms.core)

(defmacro with-options
  "Specify options for a block.

   Example:

       (with-options {:form {:horizontal true}}
           (form
              (text ...)
              (button ...))"
  [options & body]
  `(binding [om-forms.core.options/*options*
             (cljs.core/merge-with
               (cljs.core/fn [old# new#]
                 (cljs.core/cond
                   (cljs.core/map? old#) (cljs.core/merge old# new#)
                   :else new#))
               om-forms.core.options/*options*
               ~options)]
     ~@body))