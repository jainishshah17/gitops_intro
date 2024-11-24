/**
 * Created by jainishs on 5/25/17.
 */

var assert = require('assert');
var package = require('../package.json');
const semverValid = require('semver/functions/valid');
assert.equal(semverValid(package.version) !== null, true);