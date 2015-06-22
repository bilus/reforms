read -p "Are version numbers in sync? " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  # Build Reforms core.
  git checkout master &&
  doctoc README.md && # npm install -g doctoc
  git add README.md &&
  git commit -m "Regenerate TOC in Readme." &&
  git push origin master
  lein deploy clojars &&

  # Build om-reforms examples.
  cd ../om-reforms &&
  git checkout master &&
  lein deps && lein clean && lein cljsbuild once &&
  lein deploy clojars &&

  # Build reagent-reforms examples.
  cd ../reagent-reforms &&
  git checkout master &&
  lein deps && lein clean && lein cljsbuild once &&
  lein deploy clojars &&

  # Build Home page and the reference + examples.
  cd ../reforms &&
  BRANCH="$(git rev-parse --abbrev-ref HEAD)" &&
  echo "Generate docs" &&
  lein doc &&
  mkdir -p /tmp/reforms/doc &&
  cp -r doc/ /tmp/reforms/doc/ &&
  echo "Checkout and pull gh-pages" &&
  git checkout gh-pages &&
  git pull origin gh-pages

  cp -r /tmp/reforms/doc doc/ &&
  echo "Copy examples" &&
  mkdir -p examples/om &&
  cp -r ../om-reforms/examples/ examples/om &&
  mkdir -p examples/reagent &&
  cp -r ../reagent-reforms/examples/ examples/reagent &&
  echo "Push to git" &&
  git add doc/ examples/ &&
  git commit -m "Update Github Pages." &&
  git push origin gh-pages &&
  echo "Switch back to $BRANCH branch"
  
  git checkout $BRANCH
fi

