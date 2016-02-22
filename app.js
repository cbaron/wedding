var fs = require('fs')

require('node-env-file')( __dirname + '/.env' )

require('http').createServer( require('./router') ).listen( process.env.PORT || 80 )
