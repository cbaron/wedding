module.exports = new (
    require('backbone').Router.extend( {

        Page: require('./views/Page'),

        handler() { new this.Page() },

        routes: {
            '.*': 'handler',
        }

    } )
)()
