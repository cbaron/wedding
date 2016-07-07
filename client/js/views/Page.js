var Page = function() { return this.initialize() }

Object.assign( Page.prototype, {

    $: require('jquery'),

    Spinner: require('../spin'),

    applyRsvpBtn() { this.rsvpBtn.one( 'click', () => this.onRsvp() ) },

    initialize() {

        this.body = this.$('body')
        this.content = { }
        this.names = this.$('#names')
        this.accepts = this.$('#accepts').on( 'click', () => this.declines.prop( 'checked', false ) )
        this.declines = this.$('#declines').on( 'click', () => this.accepts.prop( 'checked', false ) )
        this.number = this.$('#number')
        this.veg = this.$('#veg')

        this.myModal = this.$('#myModal')
        this.error = this.$('#error')
        this.rsvpBtn = this.$('#rsvpBtn')
        this.rsvpType = undefined
        this.success = this.$('#success')

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
            this.$('#rehearsalSubHeading').hide()
            if( this.rsvpType !== 'Wedding' ) this.resetModal()
            this.rsvpType = 'Wedding'
            this.myModal.modal()
        } )

        this.$('#rehearsalRSVP').on( 'click', () => {
            this.$('#modalTitle').text('Rehearsal RSVP')
            this.$('#rehearsalSubHeading').show()
            if( this.rsvpType !== 'Rehearsal' ) this.resetModal()
            this.rsvpType = 'Rehearsal'
            this.myModal.modal()
        } )

        this.applyRsvpBtn()

        this.accepts.on('focus', () => {
            this.accepts.closest('.form-group').removeClass('has-error')
            this.declines.closest('.form-group').removeClass('has-error')
        } )

        this.declines.on('focus', () => {
            this.accepts.closest('.form-group').removeClass('has-error')
            this.declines.closest('.form-group').removeClass('has-error')
        } )
        
        this.names.on('focus', () => this.names.closest('.form-group').removeClass('has-error') )
        this.number.on('focus', () => this.number.closest('.form-group').removeClass('has-error') )
        this.veg.on('focus', () => this.veg.closest('.form-group').removeClass('has-error') )

        this.spinner = new this.Spinner( {
            color: '#fff',
            length: 15,
            scale: 0.25,
            width: 5
        } ).spin()

        return this
    },

    onRsvp() {

        this.error.hide()

        if( ! this.validate() ) return this.applyRsvpBtn()
        
        this.rsvpBtn.addClass('has-spinner')
        this.rsvpBtn.append( this.spinner.spin().el )

        this.$.ajax( {
            method: "POST",
            url: '/rsvp',
            contentType: 'application/json',
            data: JSON.stringify( {
                names: this.names.val(),
                accepts: this.accepts.prop('checked'),
                number: this.number.val(),
                veg: this.veg.val(),
                type: this.rsvpType
            } ),
        } )
        .done( () => this.onRsvpDone() )
        .fail( () => this.onRsvpFail() )
        .always( () => this.onRsvpAlways() )
    },

    onRsvpAlways() {
        this.rsvpBtn.removeClass('has-spinner')
        this.spinner.stop()
    },
    
    onRsvpDone() {
        this.success.addClass('slide-right').show()
        this.myModal.one( 'hidden.bs.modal', () => {
            this.resetModal()
            this.applyRsvpBtn()
            this.success.hide().removeClass('slide-right')
        } )
    },

    onRsvpFail() {
        this.error.show()
        this.applyRsvpBtn()
    },

    resetModal() {
        this.names.val('').closest('.form-group').removeClass('has-error')
        this.accepts.prop( 'checked', false ).closest('.form-group').removeClass('has-error')
        this.declines.prop( 'checked', false ).closest('.form-group').removeClass('has-error')
        this.number.val('').closest('.form-group').removeClass('has-error')
        this.veg.val('').closest('.form-group').removeClass('has-error')
    },

    validate() {
        var declined = this.declines.prop('checked')

        if( ! this.$.trim( this.names.val() ) ) { this.names.closest('.form-group').addClass('has-error'); return false }
        if( this.accepts.prop('checked') === false && declined === false ) {
            this.accepts.closest('.form-group').addClass('has-error')
            this.declines.closest('.form-group').addClass('has-error')
            return false
        }
        if( !declined && isNaN( parseInt( this.number.val() ) ) ) { this.number.closest('.form-group').addClass('has-error'); return false }
        if( !declined && isNaN( parseInt( this.veg.val() ) ) ) { this.veg.val('').closest('.form-group').addClass('has-error'); return false }
        return true
    }

} )

module.exports = Page
