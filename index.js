'use strict';

/**
 * Docs: https://github.com/arangodb/arangojs
 */

const arangojs = require('arangojs');

let db = arangojs({
  url: `http://root:root@127.0.0.1:8529`,
  databaseName: 'test'
});

let collection = db.collection('partners');

//collection.create();

let doc = {
  _key: 'foo',
  name: 'Foo',
  lastname: 'bar'
};

collection.save(doc).then(
  meta => console.log('Document saved:', meta._rev),
  err => console.error('Failed to save document:', err)
);