(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var $ = require('jquery'),
    router = require('./router');

window.$ = window.jQuery = $;

require('bootstrap');

$(function () {
    require('backbone').history.start({ pushState: true });
});

},{"./router":2,"backbone":"backbone","bootstrap":"bootstrap","jquery":"jquery"}],2:[function(require,module,exports){
'use strict';

module.exports = new (require('backbone').Router.extend({

    Page: require('./views/Page'),

    handler: function handler() {
        new this.Page();
    },


    routes: {
        '.*': 'handler'
    }

}))();

},{"./views/Page":3,"backbone":"backbone"}],3:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Page = function Page() {
    return this.initialize();
};

_extends(Page.prototype, {

    $: require('jquery'),

    initialize: function initialize() {
        var _this = this;

        this.body = this.$('body');
        this.content = {};

        this.names = this.$('#names');
        this.accepts = this.$('#accepts').on('click', function () {
            return _this.declines.prop('checked', false);
        });
        this.declines = this.$('#declines').on('click', function () {
            return _this.accepts.prop('checked', false);
        });
        this.number = this.$('#number');
        this.veg = this.$('#veg');

        this.rsvpType = undefined;

        this.body.children('div').each(function (i, el) {
            var $el = _this.$(el);_this.content[$el.data('content')] = $el;
        });

        this.body.find('nav ul li').each(function (i, el) {
            var $el = _this.$(el);
            $el.on('click', function () {
                return _this.body.animate({ scrollTop: _this.content[$el.attr('data-nav')].position().top }, 1000);
            });
        });

        this.body.find('[data-js="rehearsalLink"]').click(function () {
            return _this.body.animate({ scrollTop: _this.content.rehearsal.position().top }, 1000);
        });

        this.$('#mobile-menu').click(function (e) {
            _this.$('#nav-list').css({ display: 'block' });
            _this.$('#mobile-menu').css({ display: 'none' });
            e.stopImmediatePropagation();
            _this.$(document).on('click', function () {
                _this.$('#mobile-menu').css({ display: 'inline-block' });
                _this.$('#nav-list').css({ display: 'none' });
            });
        });

        if (this.$(window).width() <= 785) {
            this.$('iframe').attr({ src: this.$('iframe').attr('src').slice(0, -1) + '3' });
        }

        this.$('#weddingRSVP').on('click', function () {
            _this.$('#modalTitle').text('Wedding RSVP');
            if (_this.rsvpType !== 'Wedding') _this.resetModal();
            _this.rsvpType = 'Wedding';
            _this.$('#myModal').modal();
        });

        this.$('#rehearsalRSVP').on('click', function () {
            _this.$('#modalTitle').text('Rehearsal RSVP');
            if (_this.rsvpType !== 'Rehearsal') _this.resetModal();
            _this.rsvpType = 'Rehearsal';
            _this.$('#myModal').modal();
        });

        this.$('#rsvpBtn').on('click', function () {});

        return this;
    },
    resetModal: function resetModal() {
        this.names.val('').closest('.form-group').removeClass('has-error');
        this.accepts.prop('checked', false).closest('.form-group').removeClass('has-error');
        this.declines.prop('checked', false).closest('.form-group').removeClass('has-error');
        this.number.val('').closest('.form-group').removeClass('has-error');
        this.veg.val('').closest('.form-group').removeClass('has-error');
    }
});

module.exports = Page;

},{"jquery":"jquery"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvanMvbWFpbi5qcyIsImNsaWVudC9qcy9yb3V0ZXIuanMiLCJjbGllbnQvanMvdmlld3MvUGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxJQUFJLFFBQVEsUUFBUixDQUFKO0lBQ0EsU0FBUyxRQUFRLFVBQVIsQ0FBVDs7QUFFSixPQUFPLENBQVAsR0FBVyxPQUFPLE1BQVAsR0FBZ0IsQ0FBaEI7O0FBRVgsUUFBUSxXQUFSOztBQUVBLEVBQUcsWUFBTTtBQUNMLFlBQVEsVUFBUixFQUFvQixPQUFwQixDQUE0QixLQUE1QixDQUFtQyxFQUFFLFdBQVcsSUFBWCxFQUFyQyxFQURLO0NBQU4sQ0FBSDs7Ozs7QUNQQSxPQUFPLE9BQVAsR0FBaUIsS0FDYixRQUFRLFVBQVIsRUFBb0IsTUFBcEIsQ0FBMkIsTUFBM0IsQ0FBbUM7O0FBRS9CLFVBQU0sUUFBUSxjQUFSLENBQU47O0FBRUEsZ0NBQVU7QUFBRSxZQUFJLEtBQUssSUFBTCxFQUFKLENBQUY7S0FKcUI7OztBQU0vQixZQUFRO0FBQ0osY0FBTSxTQUFOO0tBREo7O0NBTkosRUFEYSxFQUFqQjs7Ozs7OztBQ0FBLElBQUksT0FBTyxTQUFQLElBQU8sR0FBVztBQUFFLFdBQU8sS0FBSyxVQUFMLEVBQVAsQ0FBRjtDQUFYOztBQUVYLFNBQWUsS0FBSyxTQUFMLEVBQWdCOztBQUUzQixPQUFHLFFBQVEsUUFBUixDQUFIOztBQUVBLHNDQUFhOzs7QUFFVCxhQUFLLElBQUwsR0FBWSxLQUFLLENBQUwsQ0FBTyxNQUFQLENBQVosQ0FGUztBQUdULGFBQUssT0FBTCxHQUFlLEVBQWYsQ0FIUzs7QUFLVCxhQUFLLEtBQUwsR0FBYSxLQUFLLENBQUwsQ0FBTyxRQUFQLENBQWIsQ0FMUztBQU1ULGFBQUssT0FBTCxHQUFlLEtBQUssQ0FBTCxDQUFPLFVBQVAsRUFBbUIsRUFBbkIsQ0FBdUIsT0FB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QUssTUFBTCxDQUFZLEdBQVosQ0FBZ0IsRUFBaEIsRUFBb0IsT0FBcEIsQ0FBNEIsYUFBNUIsRUFBMkMsV0FBM0MsQ0FBdUQsV0FBdkQsRUFKUztBQUtULGFBQUssR0FBTCxDQUFTLEdBQVQsQ0FBYSxFQUFiLEVBQWlCLE9BQWpCLENBQXlCLGFBQXpCLEVBQXdDLFdBQXhDLENBQW9ELFdBQXBELEVBTFM7S0E1RGM7Q0FBL0I7O0FBc0VBLE9BQU8sT0FBUCxHQUFpQixJQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIHJvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVyJyk7XG5cbndpbmRvdy4kID0gd2luZG93LmpRdWVyeSA9ICRcblxucmVxdWlyZSgnYm9vdHN0cmFwJylcblxuJCggKCkgPT4ge1xuICAgIHJlcXVpcmUoJ2JhY2tib25lJykuaGlzdG9yeS5zdGFydCggeyBwdXNoU3RhdGU6IHRydWUgfSApXG59IClcbiIsIm1vZHVsZS5leHBvcnRzID0gbmV3IChcbiAgICByZXF1aXJlKCdiYWNrYm9uZScpLlJvdXRlci5leHRlbmQoIHtcblxuICAgICAgICBQYWdlOiByZXF1aXJlKCcuL3ZpZXdzL1BhZ2UnKSxcblxuICAgICAgICBoYW5kbGVyKCkgeyBuZXcgdGhpcy5QYWdlKCkgfSxcblxuICAgICAgICByb3V0ZXM6IHtcbiAgICAgICAgICAgICcuKic6ICdoYW5kbGVyJyxcbiAgICAgICAgfVxuXG4gICAgfSApXG4pKClcbiIsInZhciBQYWdlID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmluaXRpYWxpemUoKSB9XG5cbk9iamVjdC5hc3NpZ24oIFBhZ2UucHJvdG90eXBlLCB7XG5cbiAgICAkOiByZXF1aXJlKCdqcXVlcnknKSxcblxuICAgIGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgdGhpcy5ib2R5ID0gdGhpcy4kKCdib2R5JylcbiAgICAgICAgdGhpcy5jb250ZW50ID0geyB9XG5cbiAgICAgICAgdGhpcy5uYW1lcyA9IHRoaXMuJCgnI25hbWVzJylcbiAgICAgICAgdGhpcy5hY2NlcHRzID0gdGhpcy4kKCcjYWNjZXB0cycpLm9uKCAnY2xpY2snLCAoKSA9PiB0aGlzLmRlY2xpbmVzLnByb3AoICdjaGVja2VkJywgZmFsc2UgKSApXG4gICAgICAgIHRoaXMuZGVjbGluZXMgPSB0aGlzLiQoJyNkZWNsaW5lcycpLm9uKCAnY2xpY2snLCAoKSA9PiB0aGlzLmFjY2VwdHMucHJvcCggJ2NoZWNrZWQnLCBmYWxzZSApIClcbiAgICAgICAgdGhpcy5udW1iZXIgPSB0aGlzLiQoJyNudW1iZXInKVxuICAgICAgICB0aGlzLnZlZyA9IHRoaXMuJCgnI3ZlZycpXG5cbiAgICAgICAgdGhpcy5yc3ZwVHlwZSA9IHVuZGVmaW5lZFxuXG4gICAgICAgIHRoaXMuYm9keS5jaGlsZHJlbignZGl2JykuZWFjaCggKCBpLCBlbCApID0+IHsgdmFyICRlbCA9IHRoaXMuJChlbCk7IHRoaXMuY29udGVudFsgJGVsLmRhdGEoJ2NvbnRlbnQnKSBdID0gJGVsIH0gKVxuXG4gICAgICAgIHRoaXMuYm9keS5maW5kKCduYXYgdWwgbGknICkuZWFjaCggKCBpLCBlbCApID0+IHtcbiAgICAgICAgICAgIHZhciAkZWwgPSB0aGlzLiQoZWwpXG4gICAgICAgICAgICAkZWwub24oICdjbGljaycsICgpID0+IHRoaXMuYm9keS5hbmltYXRlKCB7IHNjcm9sbFRvcDogdGhpcy5jb250ZW50WyAkZWwuYXR0cignZGF0YS1uYXYnKSBdLnBvc2l0aW9uKCkudG9wIH0sIDEwMDAgKSApXG4gICAgICAgIH0gKSBcblxuICAgICAgICB0aGlzLmJvZHkuZmluZCgnW2RhdGEtanM9XCJyZWhlYXJzYWxMaW5rXCJdJykuY2xpY2soICgpID0+IHRoaXMuYm9keS5hbmltYXRlKCB7IHNjcm9sbFRvcDogdGhpcy5jb250ZW50LnJlaGVhcnNhbC5wb3NpdGlvbigpLnRvcCB9LCAxMDAwICkgKVxuXG4gICAgICAgIHRoaXMuJCgnI21vYmlsZS1tZW51JykuY2xpY2soIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy4kKCcjbmF2LWxpc3QnKS5jc3MoIHsgZGlzcGxheTogJ2Jsb2NrJyB9IClcbiAgICAgICAgICAgIHRoaXMuJCgnI21vYmlsZS1tZW51JykuY3NzKCB7IGRpc3BsYXk6ICdub25lJyB9IClcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIHRoaXMuJCggZG9jdW1lbnQgKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJCgnI21vYmlsZS1tZW51JykuY3NzKCB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH0gKVxuICAgICAgICAgICAgICAgIHRoaXMuJCgnI25hdi1saXN0JykuY3NzKCB7IGRpc3BsYXk6ICdub25lJyB9IClcbiAgICAgICAgICAgIH0gKVxuICAgICAgICB9IClcblxuICAgICAgICBpZiggdGhpcy4kKHdpbmRvdykud2lkdGgoKSA8PSA3ODUgKSB7XG4gICAgICAgICAgICB0aGlzLiQoJ2lmcmFtZScpLmF0dHIoIHsgc3JjOiB0aGlzLiQoJ2lmcmFtZScpLmF0dHIoJ3NyYycpLnNsaWNlKCAwLCAtMSApICsgJzMnIH0gKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kKCcjd2VkZGluZ1JTVlAnKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kKCcjbW9kYWxUaXRsZScpLnRleHQoJ1dlZGRpbmcgUlNWUCcpXG4gICAgICAgICAgICBpZiggdGhpcy5yc3ZwVHlwZSAhPT0gJ1dlZGRpbmcnICkgdGhpcy5yZXNldE1vZGFsKClcbiAgICAgICAgICAgIHRoaXMucnN2cFR5cGUgPSAnV2VkZGluZydcbiAgICAgICAgICAgIHRoaXMuJCgnI215TW9kYWwnKS5tb2RhbCgpXG4gICAgICAgIH0gKVxuXG4gICAgICAgIHRoaXMuJCgnI3JlaGVhcnNhbFJTVlAnKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kKCcjbW9kYWxUaXRsZScpLnRleHQoJ1JlaGVhcnNhbCBSU1ZQJylcbiAgICAgICAgICAgIGlmKCB0aGlzLnJzdnBUeXBlICE9PSAnUmVoZWFyc2FsJyApIHRoaXMucmVzZXRNb2RhbCgpXG4gICAgICAgICAgICB0aGlzLnJzdnBUeXBlID0gJ1JlaGVhcnNhbCdcbiAgICAgICAgICAgIHRoaXMuJCgnI215TW9kYWwnKS5tb2RhbCgpXG4gICAgICAgIH0gKVxuXG4gICAgICAgIHRoaXMuJCgnI3JzdnBCdG4nKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB9IClcbiAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICByZXNldE1vZGFsKCkge1xuICAgICAgICB0aGlzLm5hbWVzLnZhbCgnJykuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yJylcbiAgICAgICAgdGhpcy5hY2NlcHRzLnByb3AoICdjaGVja2VkJywgZmFsc2UgKS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKVxuICAgICAgICB0aGlzLmRlY2xpbmVzLnByb3AoICdjaGVja2VkJywgZmFsc2UgKS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKVxuICAgICAgICB0aGlzLm51bWJlci52YWwoJycpLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvcicpXG4gICAgICAgIHRoaXMudmVnLnZhbCgnJykuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yJylcbiAgICB9XG5cbn0gKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhZ2VcbiJdfQ==
