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

cp -r /tmp/reforms/doc . &&
echo "Copy examples" &&
mkdir -p examples/om &&
cp -r ../om-reforms/examples/ examples/om &&
mkdir -p examples/reagent &&
cp -r ../reagent-reforms/examples/ examples/reagent &&
mkdir -p examples/rum &&
cp -r ../rum-reforms/examples/ examples/rum &&
sleep 5 && # Locked git
echo "Push to git" &&
git add doc/ examples/ &&
git commit -m "Update Github Pages." &&
git push origin gh-pages &&
echo "Switch back to $BRANCH branch"

git checkout $BRANCH
