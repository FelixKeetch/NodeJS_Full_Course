const _ = require('lodash');

const items = [1, [2, [3, [4]]]];

const newitems = _.flattenDeep(items);
console.log(newitems);


echo "# NodeJS_Full_Course" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:FelixKeetch/NodeJS_Full_Course.git
git push -u origin main