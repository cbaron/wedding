var Base = require('./__proto__'),
    RSVP = function() { return Base.apply( this, arguments ) }

Object.assign( RSVP.prototype, Base.prototype, {

    POST() {
        this.slurpBody().then( () => {
            [ 'names', 'accepts', 'number', 'veg', 'type' ].forEach( key => { if( this.body[ key ] === undefined ) throw Error("Sorry Mate") } )

            return this.Q( this.Email.send( {
                to: 'rsvp@alexgandchrisb.com',
                from: 'cbaron@alexgandchrisb.com',
                subject: `${this.body.type} RSVP`,
                body: this.generateEmailBody() } )
            ).fail( err => console.log("Error generating confirmation email : " + err.stack || err ) )
        } )
    },

    generateEmailBody() {
        var dblSpace = '\r\n\r\n'
        return `Names : ${this.body.names}${dblSpace}Accepts : ${this.body.accepts?'Yes':'No'}${dblSpace}Number : ${this.body.number}${dblSpace}Vegan : ${this.body.veg}${dblSpace}`
    }
} )
