var MyObject = function( data ) { return Object.assign( this, data ) }

MyObject.prototype.format = require('util').format

MyObject.prototype._ = require('underscore')

module.exports = MyObject
