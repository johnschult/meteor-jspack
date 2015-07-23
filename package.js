Package.describe({
  name: 'johnschult:jspack',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'JavaScript library to pack ints, floats, etc. ' +
           'to octet arrays representing C data structures',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('lib/jspack/code/struct.js');
  api.export('Struct');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('johnschult:jspack');
  api.addFiles('tests/jspack-tests.js');
});
