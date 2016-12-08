/**
 * Rewrite the package.json that gets published to npm.
 * * Change angular2 to be a peer dependency
 */
var fs = require('fs');
var srcPackage = require('../package.json');

delete srcPackage.scripts;

var peerDependencies = Object.assign({}, srcPackage.dependencies);
// See note about including firebase as dependency
delete peerDependencies.firebase;

var outPackage = Object.assign({}, srcPackage, {
  peerDependencies,
});

fs.writeFileSync('./dist/package.json', JSON.stringify(outPackage, null, 2));
