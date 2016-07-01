var MyObject = require('./MyObject'),
    Email = function() { return MyObject.apply( this, arguments ) }

Object.assign( Email.prototype, MyObject.prototype, {

    Email: require('email').Email,

    send( data ) {
        return new Promise( ( resolve, reject ) => {
            var message = new this.Email( data )

            message.send( err => {
                if( err ) {
                    console.log( this.format( "Error sending email : %s", err.stack || err ) )
                    reject( err )
                }
                resolve()
            } )
        } )
    }

} )

module.exports = new Email()
