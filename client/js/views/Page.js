var Page = function() { return this.initialize() }

Object.assign( Page.prototype, {

    $: require('jquery'),

    initialize() {

        this.body = this.$('body')
        this.content = { }

        this.body.children('div').each( ( i, el ) => { var $el = this.$(el); this.content[ $el.data('content') ] = $el } )

        this.body.find('nav ul li' ).each( ( i, el ) => {
            var $el = this.$(el)
            $el.on( 'click', () => this.body.animate( { scrollTop: this.content[ $el.attr('data-nav') ].position().top }, 1000 ) )
        } ) 
        
        return this
    }

} )

module.exports = Page
