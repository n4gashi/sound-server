'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('users', {
    columns: {
      id: {
        type: 'int',
        unsigned: true,
        notNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      fbid: 'string',
      username: 'string',
      firstname: 'string',
      lastname: 'string',
      pictureUri: 'string',
    },
    ifExists: true,
  })
};

exports.down = function(db) {
  return db.dropTable('users', { ifExists: true });
};

exports._meta = {
  "version": 1
};
