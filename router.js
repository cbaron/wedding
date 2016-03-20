var router,
    MyObject = require('./lib/MyObject'),
    Router = function() { return MyObject.apply( this, arguments ) }

Object.assign( Router.prototype, MyObject.prototype, {

    applyHTMLResource( request, response, path ) {
        return new Promise( ( resolve, reject ) => {

            var file = './resources/html'

            require('fs').stat( this.format( '%s/%s.js', __dirname, file ), err => {
                if( err ) reject( err )
                new ( require(file) )( { path: path, response: response } )[ request.method ]().catch( err => reject( err ) )
            } )
        } )
    },

    applyResource( request, response, path, subPath ) {

        var filename = ( path[1] === "" && subPath ) ? 'index' : path[1],
            file = this.format('./resources%s/%s', subPath || '', filename )

        return new Promise( ( resolve, reject ) => {

            require('fs').stat( this.format( '%s/%s.js', __dirname, file ), err => {
                var instance

                if( err ) { 
                    if( err.code !== "ENOENT" ) return reject( err )
                    file = './resources/hyper/__proto__'
                }

                instance = new ( require(file) )( {
                    request: request,
                    response: response,
                    path: path
                } )

                if( !instance[ request.method ] ) { this.handleFailure( response, new Error("Not Found"), 404, false ); return resolve() }

                instance[ request.method ]().catch( err => reject( err ) )
            } )
        } )
    },

    handleFailure( response, err, code ) {

        var message = ( process.env.NODE_ENV === "production" ) ? "Unknown Error" : err.stack || err

        console.log( err.stack || err );

        response.writeHead( code || 500, Object.assign( {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Keep-Alive': 'timeout=50, max=100',
            'Date': new Date().toISOString() }, { "Content-Length": Buffer.byteLength( message ) } ) )

        response.end( message )
    },
    
    handler( request, response ) {
        var path = this.url.parse( request.url ).pathname.split("/")

        request.setEncoding('utf8');

        if( ( request.method === "GET" && path[1] === "static" ) || path[1] === "favicon.ico" ) {
            return request.addListener( 'end', this.serveStaticFile.bind( this, request, response ) ).resume() }
        
        if( /text\/html/.test( request.headers.accept ) ) {
            return this.applyHTMLResource( request, response, path ).catch( err => this.handleFailure( response, err ) )
        }

        return this.handleFailure( response, new Error("Not Found"), 404 )

    },

    initialize() {
        this.staticFolder = new (require('node-static').Server)()

        return this
    },
    
    serveStaticFile( request, response ) { this.staticFolder.serve( request, response ) },

    url: require( 'url' )

} )

router = new Router().initialize()

module.exports = router.handler.bind(router)
