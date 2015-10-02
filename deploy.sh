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

  ./deploy-docs.sh
fi

