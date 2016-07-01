var Page = function() { return this.initialize() }

Object.assign( Page.prototype, {

    $: require('jquery'),

    initialize() {

        this.body = this.$('body')
        this.content = { }

        this.names = this.$('#names')
        this.accepts = this.$('#accepts').on( 'click', () => this.declines.prop( 'checked', false ) )
        this.declines = this.$('#declines').on( 'click', () => this.accepts.prop( 'checked', false ) )
        this.number = this.$('#number')
        this.veg = this.$('#veg')

        this.rsvpType = undefined

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

        this.$('#weddingRSVP').on( 'click', () => {
            this.$('#modalTitle').text('Wedding RSVP')
            if( this.rsvpType !== 'Wedding' ) this.resetModal()
            this.rsvpType = 'Wedding'
            this.$('#myModal').modal()
        } )

        this.$('#rehearsalRSVP').on( 'click', () => {
            this.$('#modalTitle').text('Rehearsal RSVP')
            if( this.rsvpType !== 'Rehearsal' ) this.resetModal()
            this.rsvpType = 'Rehearsal'
            this.$('#myModal').modal()
        } )

        this.$('#rsvpBtn').on( 'click', () => {
        } )
            
        return this
    },

    resetModal() {
        this.names.val('').closest('.form-group').removeClass('has-error')
        this.accepts.prop( 'checked', false ).closest('.form-group').removeClass('has-error')
        this.declines.prop( 'checked', false ).closest('.form-group').removeClass('has-error')
        this.number.val('').closest('.form-group').removeClass('has-error')
        this.veg.val('').closest('.form-group').removeClass('has-error')
    }

} )

module.exports = Page
