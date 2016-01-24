var $ = require('jquery'),
    router = require('./router');

window.$ = window.jQuery = $

require('bootstrap')

$( () => {
    require('backbone').history.start( { pushState: true } )
} )
