var MyError = function( err ) { return this.handle( err ) }

Object.assign( MyError.prototype, {
    
    handle( err ) { console.log( err.stack || err ) }

} )

module.exports = MyError
