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

        return this;
    }
});

module.exports = Page;

},{"jquery":"jquery"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvanMvbWFpbi5qcyIsImNsaWVudC9qcy9yb3V0ZXIuanMiLCJjbGllbnQvanMvdmlld3MvUGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxJQUFJLFFBQVEsUUFBUixDQUFKO0lBQ0EsU0FBUyxRQUFRLFVBQVIsQ0FBVDs7QUFFSixPQUFPLENBQVAsR0FBVyxPQUFPLE1BQVAsR0FBZ0IsQ0FBaEI7O0FBRVgsUUFBUSxXQUFSOztBQUVBLEVBQUcsWUFBTTtBQUNMLFlBQVEsVUFBUixFQUFvQixPQUFwQixDQUE0QixLQUE1QixDQUFtQyxFQUFFLFdBQVcsSUFBWCxFQUFyQyxFQURLO0NBQU4sQ0FBSDs7Ozs7QUNQQSxPQUFPLE9BQVAsR0FBaUIsS0FDYixRQUFRLFVBQVIsRUFBb0IsTUFBcEIsQ0FBMkIsTUFBM0IsQ0FBbUM7O0FBRS9CLFVBQU0sUUFBUSxjQUFSLENBQU47O0FBRUEsZ0NBQVU7QUFBRSxZQUFJLEtBQUssSUFBTCxFQUFKLENBQUY7S0FKcUI7OztBQU0vQixZQUFRO0FBQ0osY0FBTSxTQUFOO0tBREo7O0NBTkosRUFEYSxFQUFqQjs7Ozs7OztBQ0FBLElBQUksT0FBTyxTQUFQLElBQU8sR0FBVztBQUFFLFdBQU8sS0FBSyxVQUFMLEVBQVAsQ0FBRjtDQUFYOztBQUVYLFNBQWUsS0FBSyxTQUFMLEVBQWdCOztBQUUzQixPQUFHLFFBQVEsUUFBUixDQUFIOztBQUVBLHNDQUFhOzs7QUFFVCxhQUFLLElBQUwsR0FBWSxLQUFLLENBQUwsQ0FBTyxNQUFQLENBQVosQ0FGUztBQUdULGFBQUssT0FBTCxHQUFlLEVBQWYsQ0FIUzs7QUFLVCxhQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLEtBQW5CLEVBQTBCLElBQTFCLENBQWdDLFVBQUUsQ0FBRixFQUFLLEVBQUwsRUFBYTtBQUFFLGdCQUFJLE1BQU0sTUFBSyxDQUFMLENBQU8sRUFBUCxDQUFOLENBQU4sS0FBd0IsQ0FBSyxPQUFMLENBQWMsSUFBSSxJQUFKLENBQVMsU0FBVCxDQUFkLElBQXNDLEdBQXRDLENBQXhCO1NBQWIsQ0FBaEMsQ0FMUzs7QUFPVCxhQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsV0FBZixFQUE2QixJQUE3QixDQUFtQyxVQUFFLENBQUYsRUFBSyxFQUFMLEVBQWE7QUFDNUMsZ0JBQUksTUFBTSxNQUFLLENBQUwsQ0FBTyxFQUFQLENBQU4sQ0FEd0M7QUFFNUMsZ0JBQUksRUFBSixDQUFRLE9BQVIsRUFBaUI7dUJBQU0sTUFBSyxJQUFMLENBQVUsT0FBVixDQUFtQixFQUFFLFdBQVcsTUFBSyxPQUFMLENBQWMsSUFBSSxJQUFKLENBQVMsVUFBVCxDQUFkLEVBQXFDLFFBQXJDLEdBQWdELEdBQWhELEVBQWhDLEVBQXVGLElBQXZGO2FBQU4sQ0FBakIsQ0FGNEM7U0FBYixDQUFuQyxDQVBTOztBQVlULGFBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSwyQkFBZixFQUE0QyxLQUE1QyxDQUFtRDttQkFBTSxNQUFLLElBQUwsQ0FBVSxPQUFWLENBQW1CLEVBQUUsV0FBVyxNQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLFFBQXZCLEdBQWtDLEdBQWxDLEVBQWhDLEVBQXlFLElBQXpFO1NBQU4sQ0FBbkQsQ0FaUzs7QUFjVCxhQUFLLENBQUwsQ0FBTyxjQUFQLEVBQXVCLEtBQXZCLENBQThCLGFBQUs7QUFDL0Isa0JBQUssQ0FBTCxDQUFPLFdBQVAsRUFBb0IsR0FBcEIsQ0FBeUIsRUFBRSxTQUFTLE9BQVQsRUFBM0IsRUFEK0I7QUFFL0Isa0JBQUssQ0FBTCxDQUFPLGNBQVAsRUFBdUIsR0FBdkIsQ0FBNEIsRUFBRSxTQUFTLE1BQVQsRUFBOUIsRUFGK0I7QUFHL0IsY0FBRSx3QkFBRixHQUgrQjtBQUkvQixrQkFBSyxDQUFMLENBQVEsUUFBUixFQUFtQixFQUFuQixDQUF1QixPQUF2QixFQUFnQyxZQUFNO0FBQ2xDLHNCQUFLLENBQUwsQ0FBTyxjQUFQLEVBQXVCLEdBQXZCLENBQTRCLEVBQUUsU0FBUyxjQUFULEVBQTlCLEVBRGtDO0FBRWxDLHNCQUFLLENBQUwsQ0FBTyxXQUFQLEVBQW9CLEdBQXBCLENBQXlCLEVBQUUsU0FBUyxNQUFULEVBQTNCLEVBRmtDO2FBQU4sQ0FBaEMsQ0FKK0I7U0FBTCxDQUE5QixDQWRTOztBQXdCVCxZQUFJLEtBQUssQ0FBTCxDQUFPLE1BQVAsRUFBZSxLQUFmLE1BQTBCLEdBQTFCLEVBQWdDO0FBQ2hDLGlCQUFLLENBQUwsQ0FBTyxRQUFQLEVBQWlCLElBQWpCLENBQXVCLEVBQUUsS0FBSyxLQUFLLENBQUwsQ0FBTyxRQUFQLEVBQWlCLElBQWpCLENBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLENBQW9DLENBQXBDLEVBQXVDLENBQUMsQ0FBRCxDQUF2QyxHQUE4QyxHQUE5QyxFQUE5QixFQURnQztTQUFwQzs7QUFJQSxlQUFPLElBQVAsQ0E1QlM7S0FKYztDQUEvQjs7QUFxQ0EsT0FBTyxPQUFQLEdBQWlCLElBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgcm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXInKTtcblxud2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gJFxuXG5yZXF1aXJlKCdib290c3RyYXAnKVxuXG4kKCAoKSA9PiB7XG4gICAgcmVxdWlyZSgnYmFja2JvbmUnKS5oaXN0b3J5LnN0YXJ0KCB7IHB1c2hTdGF0ZTogdHJ1ZSB9IClcbn0gKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBuZXcgKFxuICAgIHJlcXVpcmUoJ2JhY2tib25lJykuUm91dGVyLmV4dGVuZCgge1xuXG4gICAgICAgIFBhZ2U6IHJlcXVpcmUoJy4vdmlld3MvUGFnZScpLFxuXG4gICAgICAgIGhhbmRsZXIoKSB7IG5ldyB0aGlzLlBhZ2UoKSB9LFxuXG4gICAgICAgIHJvdXRlczoge1xuICAgICAgICAgICAgJy4qJzogJ2hhbmRsZXInLFxuICAgICAgICB9XG5cbiAgICB9IClcbikoKVxuIiwidmFyIFBhZ2UgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuaW5pdGlhbGl6ZSgpIH1cblxuT2JqZWN0LmFzc2lnbiggUGFnZS5wcm90b3R5cGUsIHtcblxuICAgICQ6IHJlcXVpcmUoJ2pxdWVyeScpLFxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICB0aGlzLmJvZHkgPSB0aGlzLiQoJ2JvZHknKVxuICAgICAgICB0aGlzLmNvbnRlbnQgPSB7IH1cblxuICAgICAgICB0aGlzLmJvZHkuY2hpbGRyZW4oJ2RpdicpLmVhY2goICggaSwgZWwgKSA9PiB7IHZhciAkZWwgPSB0aGlzLiQoZWwpOyB0aGlzLmNvbnRlbnRbICRlbC5kYXRhKCdjb250ZW50JykgXSA9ICRlbCB9IClcblxuICAgICAgICB0aGlzLmJvZHkuZmluZCgnbmF2IHVsIGxpJyApLmVhY2goICggaSwgZWwgKSA9PiB7XG4gICAgICAgICAgICB2YXIgJGVsID0gdGhpcy4kKGVsKVxuICAgICAgICAgICAgJGVsLm9uKCAnY2xpY2snLCAoKSA9PiB0aGlzLmJvZHkuYW5pbWF0ZSggeyBzY3JvbGxUb3A6IHRoaXMuY29udGVudFsgJGVsLmF0dHIoJ2RhdGEtbmF2JykgXS5wb3NpdGlvbigpLnRvcCB9LCAxMDAwICkgKVxuICAgICAgICB9ICkgXG5cbiAgICAgICAgdGhpcy5ib2R5LmZpbmQoJ1tkYXRhLWpzPVwicmVoZWFyc2FsTGlua1wiXScpLmNsaWNrKCAoKSA9PiB0aGlzLmJvZHkuYW5pbWF0ZSggeyBzY3JvbGxUb3A6IHRoaXMuY29udGVudC5yZWhlYXJzYWwucG9zaXRpb24oKS50b3AgfSwgMTAwMCApIClcblxuICAgICAgICB0aGlzLiQoJyNtb2JpbGUtbWVudScpLmNsaWNrKCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuJCgnI25hdi1saXN0JykuY3NzKCB7IGRpc3BsYXk6ICdibG9jaycgfSApXG4gICAgICAgICAgICB0aGlzLiQoJyNtb2JpbGUtbWVudScpLmNzcyggeyBkaXNwbGF5OiAnbm9uZScgfSApXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICB0aGlzLiQoIGRvY3VtZW50ICkub24oICdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiQoJyNtb2JpbGUtbWVudScpLmNzcyggeyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9IClcbiAgICAgICAgICAgICAgICB0aGlzLiQoJyNuYXYtbGlzdCcpLmNzcyggeyBkaXNwbGF5OiAnbm9uZScgfSApXG4gICAgICAgICAgICB9IClcbiAgICAgICAgfSApXG5cbiAgICAgICAgaWYoIHRoaXMuJCh3aW5kb3cpLndpZHRoKCkgPD0gNzg1ICkge1xuICAgICAgICAgICAgdGhpcy4kKCdpZnJhbWUnKS5hdHRyKCB7IHNyYzogdGhpcy4kKCdpZnJhbWUnKS5hdHRyKCdzcmMnKS5zbGljZSggMCwgLTEgKSArICczJyB9IClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbn0gKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhZ2VcbiJdfQ==
