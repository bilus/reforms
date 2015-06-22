read -p "Are version numbers in sync? " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  # # Build Reforms core.
 #  git checkout master &&
 #  doctoc README.md && # npm install -g doctoc
 #  git add README.md &&
 #  git commit -m "Regenerate TOC in Readme." &&
 #  git push origin master &&
 #  lein deploy clojars &&
 #
 #  # Build om-reforms examples.
 #  cd ../om-reforms &&
 #  git checkout master &&
 #  lein deps && lein clean && lein cljsbuild once &&
 #  lein deploy clojars &&
 #
 #  # Build reagent-reforms examples.
 #  cd ../reagent-reforms &&
 #  git checkout master &&
 #  lein deps && lein clean && lein cljsbuild once &&
 #  lein deploy clojars &&

  # Build Home page and the reference + examples.
  cd ../reforms &&
  BRANCH="$(git rev-parse --abbrev-ref HEAD)" &&
  lein doc &&
  git checkout gh-pages &&
  git pull origin gh-pages &&
  mkdir -p examples/om &&
  cp -r ../om-reforms/examples/ examples/om &&
  mkdir -p examples/reagent &&
  cp -r ../reagent-reforms/examples/ examples/reagent &&
  git add doc/ &&
  git add examples/ &&
  git commit -m "Update Github Pages." &&
  git push origin gh-pages &&
  git checkout $BRANCH
fi

