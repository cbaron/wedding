var MyObject = require('../lib/MyObject'),
    Resource = function() { return MyObject.apply( this, arguments ) }

Object.assign( Resource.prototype, MyObject.prototype, {

    getHeaders: function( body ) { return this._.extend( {}, this.headers, { 'Date': new Date().toISOString(), 'Content-Length': Buffer.byteLength( body ) } ) },

    headers: {
        'Connection': 'Keep-Alive',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Keep-Alive': 'timeout=50, max=100',
    },

    handleIncomingData: function( someData ) {

        this.body += someData;

        if( this.body.length > 1e10 ) {
            this.request.connection.destroy();
            throw new Error("Too much data");
        }
    },

    handleRequestEnd: function() {

        if( this.body.length === 0 ) this.body = "{}"

        try {
            this.body = JSON.parse( this.body );
        } catch( e ) {
            return this.requestEnded.reject( 'Unable to parse request : ' + e );
        }

        if( ! this._.has( this.validate, this.request.method ) ) return this.requestEnded.reject('Invalid Request')

        this.Q.fcall( this.validate[ this.request.method ].bind(this) )
            .then( this.requestEnded.resolve.bind(this) )
            .fail( this.requestEnded.reject.bind(this) )
            .done();
    },

    respond: function( data ) {
        data.body = JSON.stringify( data.body );
        this.response.writeHead( data.code || 200, this._.extend( this.getHeaders( data.body ), data.headers || {} ) )
        this.response.end( data.body );
    },

    slurpBody() {

        this.requestEnded = this.Q.defer();

        this.body = "";
        
        this.request.on( "data", this.handleIncomingData.bind(this) )

        this.request.on( "end", this.handleRequestEnd.bind(this) )

        return this.requestEnded.promise;
    }

} )

module.exports = Resource
