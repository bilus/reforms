git checkout master
# npm install -g doctoc
doctoc README.md
git add README.md
git commit -m "Regenerate TOC in Readme."
git push origin master
lein deploy clojars
git push origin master
./deploy_pages.sh