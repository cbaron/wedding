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

        this.body.find('[data-js="rehearsalLink"]').click( () => this.body.animate( { scrollTop: this.content.rehearsal.position().top }, 1000 ) )

        this.$('#mobile-menu').click( e => {
            this.$('#nav-list').css( { display: 'block' } )
            this.$('#mobile-menu').css( { display: 'none' } )
            e.stopImmediatePropagation()
            this.$( document ).on( 'click', () => {
                this.$('#mobile-menu').css( { display: 'inline-block' } )
                this.$('#nav-list').css( { display: 'none' } )
            } )
        } )

        if( this.$(window).width() <= 785 ) {
            this.$('iframe').attr( { src: this.$('iframe').attr('src').slice( 0, -1 ) + '3' } )
        }
        
        return this
    }

} )

module.exports = Page
