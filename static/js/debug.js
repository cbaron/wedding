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

},{"./views/Page":4,"backbone":"backbone"}],3:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

// http://spin.js.org/#v2.3.2
!function (a, b) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.Spinner = b();
}(undefined, function () {
  "use strict";
  function a(a, b) {
    var c,
        d = document.createElement(a || "div");for (c in b) {
      d[c] = b[c];
    }return d;
  }function b(a) {
    for (var b = 1, c = arguments.length; c > b; b++) {
      a.appendChild(arguments[b]);
    }return a;
  }function c(a, b, c, d) {
    var e = ["opacity", b, ~ ~(100 * a), c, d].join("-"),
        f = .01 + c / d * 100,
        g = Math.max(1 - (1 - a) / b * (100 - f), a),
        h = j.substring(0, j.indexOf("Animation")).toLowerCase(),
        i = h && "-" + h + "-" || "";return m[e] || (k.insertRule("@" + i + "keyframes " + e + "{0%{opacity:" + g + "}" + f + "%{opacity:" + a + "}" + (f + .01) + "%{opacity:1}" + (f + b) % 100 + "%{opacity:" + a + "}100%{opacity:" + g + "}}", k.cssRules.length), m[e] = 1), e;
  }function d(a, b) {
    var c,
        d,
        e = a.style;if (b = b.charAt(0).toUpperCase() + b.slice(1), void 0 !== e[b]) return b;for (d = 0; d < l.length; d++) {
      if (c = l[d] + b, void 0 !== e[c]) return c;
    }
  }function e(a, b) {
    for (var c in b) {
      a.style[d(a, c) || c] = b[c];
    }return a;
  }function f(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b];for (var d in c) {
        void 0 === a[d] && (a[d] = c[d]);
      }
    }return a;
  }function g(a, b) {
    return "string" == typeof a ? a : a[b % a.length];
  }function h(a) {
    this.opts = f(a || {}, h.defaults, n);
  }function i() {
    function c(b, c) {
      return a("<" + b + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', c);
    }k.addRule(".spin-vml", "behavior:url(#default#VML)"), h.prototype.lines = function (a, d) {
      function f() {
        return e(c("group", { coordsize: k + " " + k, coordorigin: -j + " " + -j }), { width: k, height: k });
      }function h(a, h, i) {
        b(m, b(e(f(), { rotation: 360 / d.lines * a + "deg", left: ~ ~h }), b(e(c("roundrect", { arcsize: d.corners }), { width: j, height: d.scale * d.width, left: d.scale * d.radius, top: -d.scale * d.width >> 1, filter: i }), c("fill", { color: g(d.color, a), opacity: d.opacity }), c("stroke", { opacity: 0 }))));
      }var i,
          j = d.scale * (d.length + d.width),
          k = 2 * d.scale * j,
          l = -(d.width + d.length) * d.scale * 2 + "px",
          m = e(f(), { position: "absolute", top: l, left: l });if (d.shadow) for (i = 1; i <= d.lines; i++) {
        h(i, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
      }for (i = 1; i <= d.lines; i++) {
        h(i);
      }return b(a, m);
    }, h.prototype.opacity = function (a, b, c, d) {
      var e = a.firstChild;d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], e = e && e.firstChild, e = e && e.firstChild, e && (e.opacity = c));
    };
  }var j,
      k,
      l = ["webkit", "Moz", "ms", "O"],
      m = {},
      n = { lines: 12, length: 7, width: 5, radius: 10, scale: 1, corners: 1, color: "#000", opacity: .25, rotate: 0, direction: 1, speed: 1, trail: 100, fps: 20, zIndex: 2e9, className: "spinner", top: "50%", left: "50%", shadow: !1, hwaccel: !1, position: "absolute" };if (h.defaults = {}, f(h.prototype, { spin: function spin(b) {
      this.stop();var c = this,
          d = c.opts,
          f = c.el = a(null, { className: d.className });if (e(f, { position: d.position, width: 0, zIndex: d.zIndex, left: d.left, top: d.top }), b && b.insertBefore(f, b.firstChild || null), f.setAttribute("role", "progressbar"), c.lines(f, c.opts), !j) {
        var g,
            h = 0,
            i = (d.lines - 1) * (1 - d.direction) / 2,
            k = d.fps,
            l = k / d.speed,
            m = (1 - d.opacity) / (l * d.trail / 100),
            n = l / d.lines;!function o() {
          h++;for (var a = 0; a < d.lines; a++) {
            g = Math.max(1 - (h + (d.lines - a) * n) % l * m, d.opacity), c.opacity(f, a * d.direction + i, g, d);
          }c.timeout = c.el && setTimeout(o, ~ ~(1e3 / k));
        }();
      }return c;
    }, stop: function stop() {
      var a = this.el;return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = void 0), this;
    }, lines: function lines(d, f) {
      function h(b, c) {
        return e(a(), { position: "absolute", width: f.scale * (f.length + f.width) + "px", height: f.scale * f.width + "px", background: b, boxShadow: c, transformOrigin: "left", transform: "rotate(" + ~ ~(360 / f.lines * k + f.rotate) + "deg) translate(" + f.scale * f.radius + "px,0)", borderRadius: (f.corners * f.scale * f.width >> 1) + "px" });
      }for (var i, k = 0, l = (f.lines - 1) * (1 - f.direction) / 2; k < f.lines; k++) {
        i = e(a(), { position: "absolute", top: 1 + ~(f.scale * f.width / 2) + "px", transform: f.hwaccel ? "translate3d(0,0,0)" : "", opacity: f.opacity, animation: j && c(f.opacity, f.trail, l + k * f.direction, f.lines) + " " + 1 / f.speed + "s linear infinite" }), f.shadow && b(i, e(h("#000", "0 0 4px #000"), { top: "2px" })), b(d, b(i, h(g(f.color, k), "0 0 1px rgba(0,0,0,.1)")));
      }return d;
    }, opacity: function opacity(a, b, c) {
      b < a.childNodes.length && (a.childNodes[b].style.opacity = c);
    } }), "undefined" != typeof document) {
    k = function () {
      var c = a("style", { type: "text/css" });return b(document.getElementsByTagName("head")[0], c), c.sheet || c.styleSheet;
    }();var o = e(a("group"), { behavior: "url(#default#VML)" });!d(o, "transform") && o.adj ? i() : j = d(o, "animation");
  }return h;
});

},{}],4:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Page = function Page() {
    return this.initialize();
};

_extends(Page.prototype, {

    $: require('jquery'),

    Spinner: require('../spin'),

    applyRsvpBtn: function applyRsvpBtn() {
        var _this = this;

        this.rsvpBtn.one('click', function () {
            return _this.onRsvp();
        });
    },
    initialize: function initialize() {
        var _this2 = this;

        this.body = this.$('body');
        this.content = {};
        this.names = this.$('#names');
        this.accepts = this.$('#accepts').on('click', function () {
            return _this2.declines.prop('checked', false);
        });
        this.declines = this.$('#declines').on('click', function () {
            return _this2.accepts.prop('checked', false);
        });
        this.number = this.$('#number');
        this.veg = this.$('#veg');

        this.myModal = this.$('#myModal');
        this.error = this.$('#error');
        this.rsvpBtn = this.$('#rsvpBtn');
        this.rsvpType = undefined;
        this.success = this.$('#success');

        this.body.children('div').each(function (i, el) {
            var $el = _this2.$(el);_this2.content[$el.data('content')] = $el;
        });

        this.body.find('nav ul li').each(function (i, el) {
            var $el = _this2.$(el);
            $el.on('click', function () {
                return _this2.body.animate({ scrollTop: _this2.content[$el.attr('data-nav')].position().top }, 1000);
            });
        });

        this.body.find('[data-js="rehearsalLink"]').click(function () {
            return _this2.body.animate({ scrollTop: _this2.content.rehearsal.position().top }, 1000);
        });

        this.$('#mobile-menu').click(function (e) {
            _this2.$('#nav-list').css({ display: 'block' });
            _this2.$('#mobile-menu').css({ display: 'none' });
            e.stopImmediatePropagation();
            _this2.$(document).on('click', function () {
                _this2.$('#mobile-menu').css({ display: 'inline-block' });
                _this2.$('#nav-list').css({ display: 'none' });
            });
        });

        if (this.$(window).width() <= 785) {
            this.$('iframe').attr({ src: this.$('iframe').attr('src').slice(0, -1) + '3' });
        }

        this.$('#weddingRSVP').on('click', function () {
            _this2.$('#modalTitle').text('Wedding RSVP');
            if (_this2.rsvpType !== 'Wedding') _this2.resetModal();
            _this2.rsvpType = 'Wedding';
            _this2.myModal.modal();
        });

        this.$('#rehearsalRSVP').on('click', function () {
            _this2.$('#modalTitle').text('Rehearsal RSVP');
            if (_this2.rsvpType !== 'Rehearsal') _this2.resetModal();
            _this2.rsvpType = 'Rehearsal';
            _this2.myModal.modal();
        });

        this.applyRsvpBtn();

        this.accepts.on('focus', function () {
            _this2.accepts.closest('.form-group').removeClass('has-error');
            _this2.declines.closest('.form-group').removeClass('has-error');
        });

        this.declines.on('focus', function () {
            _this2.accepts.closest('.form-group').removeClass('has-error');
            _this2.declines.closest('.form-group').removeClass('has-error');
        });

        this.names.on('focus', function () {
            return _this2.names.closest('.form-group').removeClass('has-error');
        });
        this.number.on('focus', function () {
            return _this2.number.closest('.form-group').removeClass('has-error');
        });
        this.veg.on('focus', function () {
            return _this2.veg.closest('.form-group').removeClass('has-error');
        });

        this.spinner = new this.Spinner({
            color: '#fff',
            length: 15,
            scale: 0.25,
            width: 5
        }).spin();

        return this;
    },
    onRsvp: function onRsvp() {
        var _this3 = this;

        this.error.hide();

        if (!this.validate()) return this.applyRsvpBtn();

        this.rsvpBtn.addClass('has-spinner');
        this.rsvpBtn.append(this.spinner.spin().el);

        this.$.ajax({
            method: "POST",
            url: '/rsvp',
            contentType: 'application/json',
            data: JSON.stringify({
                names: this.names.val(),
                accepts: this.accepts.prop('checked'),
                number: this.number.val(),
                veg: this.veg.val(),
                type: this.rsvpType
            })
        }).done(function () {
            return _this3.onRsvpDone();
        }).fail(function () {
            return _this3.onRsvpFail();
        }).always(function () {
            return _this3.onRsvpAlways();
        });
    },
    onRsvpAlways: function onRsvpAlways() {
        this.rsvpBtn.removeClass('has-spinner');
        this.spinner.stop();
    },
    onRsvpDone: function onRsvpDone() {
        var _this4 = this;

        this.success.addClass('slide-right').show();
        this.myModal.one('hidden.bs.modal', function () {
            _this4.resetModal();
            _this4.applyRsvpBtn();
            _this4.success.hide().removeClass('slide-right');
        });
    },
    onRsvpFail: function onRsvpFail() {
        this.error.show();
        this.applyRsvpBtn();
    },
    resetModal: function resetModal() {
        this.names.val('').closest('.form-group').removeClass('has-error');
        this.accepts.prop('checked', false).closest('.form-group').removeClass('has-error');
        this.declines.prop('checked', false).closest('.form-group').removeClass('has-error');
        this.number.val('').closest('.form-group').removeClass('has-error');
        this.veg.val('').closest('.form-group').removeClass('has-error');
    },
    validate: function validate() {
        var declined = this.declines.prop('checked');

        if (!this.$.trim(this.names.val())) {
            this.names.closest('.form-group').addClass('has-error');return false;
        }
        if (this.accepts.prop('checked') === false && declined === false) {
            this.accepts.closest('.form-group').addClass('has-error');
            this.declines.closest('.form-group').addClass('has-error');
            return false;
        }
        if (!declined && isNaN(parseInt(this.number.val()))) {
            this.number.closest('.form-group').addClass('has-error');return false;
        }
        if (!declined && isNaN(parseInt(this.veg.val()))) {
            this.veg.val('').closest('.form-group').addClass('has-error');return false;
        }
        return true;
    }
});

module.exports = Page;

},{"../spin":3,"jquery":"jquery"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvanMvbWFpbi5qcyIsImNsaWVudC9qcy9yb3V0ZXIuanMiLCJjbGllbnQvanMvc3Bpbi5qcyIsImNsaWVudC9qcy92aWV3cy9QYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLElBQUksUUFBUSxRQUFSLENBQUo7SUFDQSxTQUFTLFFBQVEsVUFBUixDQUFUOztBQUVKLE9BQU8sQ0FBUCxHQUFXLE9BQU8sTUFBUCxHQUFnQixDQUFoQjs7QUFFWCxRQUFRLFdBQVI7O0FBRUEsRUFBRyxZQUFNO0FBQ0wsWUFBUSxVQUFSLEVBQW9CLE9BQXBCLENBQTRCLEtBQTVCLENBQW1DLEVBQUUsV0FBVyxJQUFYLEVBQXJDLEVBREs7Q0FBTixDQUFIOzs7OztBQ1BBLE9BQU8sT0FBUCxHQUFpQixLQUNiLFFBQVEsVUFBUixFQUFvQixNQUFwQixDQUEyQixNQUEzQixDQUFtQzs7QUFFL0IsVUFBTSxRQUFRLGNBQVIsQ0FBTjs7QUFFQSxnQ0FBVTtBQUFFLFlBQUksS0FBSyxJQUFMLEVBQUosQ0FBRjtLQUpxQjs7O0FBTS9CLFlBQVE7QUFDSixjQUFNLFNBQU47S0FESjs7Q0FOSixFQURhLEVBQWpCOzs7Ozs7OztBQ0NBLENBQUMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsc0JBQWlCLHVEQUFqQixJQUF5QixPQUFPLE9BQVAsR0FBZSxPQUFPLE9BQVAsR0FBZSxHQUFmLEdBQW1CLGNBQVksT0FBTyxNQUFQLElBQWUsT0FBTyxHQUFQLEdBQVcsT0FBTyxDQUFQLENBQXRDLEdBQWdELEVBQUUsT0FBRixHQUFVLEdBQVYsQ0FBNUc7Q0FBYixZQUE2SSxZQUFVO0FBQUMsZUFBRDtBQUFjLFdBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxRQUFJLENBQUo7UUFBTSxJQUFFLFNBQVMsYUFBVCxDQUF1QixLQUFHLEtBQUgsQ0FB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Q0FBUCxDQUFiLEVBQXNEO0FBQUUsaUJBQUssTUFBTCxDQUFZLE9BQVosQ0FBb0IsYUFBcEIsRUFBbUMsUUFBbkMsQ0FBNEMsV0FBNUMsRUFBRixPQUFtRSxLQUFQLENBQTVEO1NBQTFEO0FBQ0EsWUFBSSxDQUFDLFFBQUQsSUFBYSxNQUFPLFNBQVUsS0FBSyxHQUFMLENBQVMsR0FBVCxFQUFWLENBQVAsQ0FBYixFQUFtRDtBQUFFLGlCQUFLLEdBQUwsQ0FBUyxHQUFULENBQWEsRUFBYixFQUFpQixPQUFqQixDQUF5QixhQUF6QixFQUF3QyxRQUF4QyxDQUFpRCxXQUFqRCxFQUFGLE9BQXdFLEtBQVAsQ0FBakU7U0FBdkQ7QUFDQSxlQUFPLElBQVAsQ0FYTztLQTVJZ0I7Q0FBL0I7O0FBNEpBLE9BQU8sT0FBUCxHQUFpQixJQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIHJvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVyJyk7XG5cbndpbmRvdy4kID0gd2luZG93LmpRdWVyeSA9ICRcblxucmVxdWlyZSgnYm9vdHN0cmFwJylcblxuJCggKCkgPT4ge1xuICAgIHJlcXVpcmUoJ2JhY2tib25lJykuaGlzdG9yeS5zdGFydCggeyBwdXNoU3RhdGU6IHRydWUgfSApXG59IClcbiIsIm1vZHVsZS5leHBvcnRzID0gbmV3IChcbiAgICByZXF1aXJlKCdiYWNrYm9uZScpLlJvdXRlci5leHRlbmQoIHtcblxuICAgICAgICBQYWdlOiByZXF1aXJlKCcuL3ZpZXdzL1BhZ2UnKSxcblxuICAgICAgICBoYW5kbGVyKCkgeyBuZXcgdGhpcy5QYWdlKCkgfSxcblxuICAgICAgICByb3V0ZXM6IHtcbiAgICAgICAgICAgICcuKic6ICdoYW5kbGVyJyxcbiAgICAgICAgfVxuXG4gICAgfSApXG4pKClcbiIsIi8vIGh0dHA6Ly9zcGluLmpzLm9yZy8jdjIuMy4yXG4hZnVuY3Rpb24oYSxiKXtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShiKTphLlNwaW5uZXI9YigpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYShhLGIpe3ZhciBjLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhfHxcImRpdlwiKTtmb3IoYyBpbiBiKWRbY109YltjXTtyZXR1cm4gZH1mdW5jdGlvbiBiKGEpe2Zvcih2YXIgYj0xLGM9YXJndW1lbnRzLmxlbmd0aDtjPmI7YisrKWEuYXBwZW5kQ2hpbGQoYXJndW1lbnRzW2JdKTtyZXR1cm4gYX1mdW5jdGlvbiBjKGEsYixjLGQpe3ZhciBlPVtcIm9wYWNpdHlcIixiLH5+KDEwMCphKSxjLGRdLmpvaW4oXCItXCIpLGY9LjAxK2MvZCoxMDAsZz1NYXRoLm1heCgxLSgxLWEpL2IqKDEwMC1mKSxhKSxoPWouc3Vic3RyaW5nKDAsai5pbmRleE9mKFwiQW5pbWF0aW9uXCIpKS50b0xvd2VyQ2FzZSgpLGk9aCYmXCItXCIraCtcIi1cInx8XCJcIjtyZXR1cm4gbVtlXXx8KGsuaW5zZXJ0UnVsZShcIkBcIitpK1wia2V5ZnJhbWVzIFwiK2UrXCJ7MCV7b3BhY2l0eTpcIitnK1wifVwiK2YrXCIle29wYWNpdHk6XCIrYStcIn1cIisoZisuMDEpK1wiJXtvcGFjaXR5OjF9XCIrKGYrYiklMTAwK1wiJXtvcGFjaXR5OlwiK2ErXCJ9MTAwJXtvcGFjaXR5OlwiK2crXCJ9fVwiLGsuY3NzUnVsZXMubGVuZ3RoKSxtW2VdPTEpLGV9ZnVuY3Rpb24gZChhLGIpe3ZhciBjLGQsZT1hLnN0eWxlO2lmKGI9Yi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStiLnNsaWNlKDEpLHZvaWQgMCE9PWVbYl0pcmV0dXJuIGI7Zm9yKGQ9MDtkPGwubGVuZ3RoO2QrKylpZihjPWxbZF0rYix2b2lkIDAhPT1lW2NdKXJldHVybiBjfWZ1bmN0aW9uIGUoYSxiKXtmb3IodmFyIGMgaW4gYilhLnN0eWxlW2QoYSxjKXx8Y109YltjXTtyZXR1cm4gYX1mdW5jdGlvbiBmKGEpe2Zvcih2YXIgYj0xO2I8YXJndW1lbnRzLmxlbmd0aDtiKyspe3ZhciBjPWFyZ3VtZW50c1tiXTtmb3IodmFyIGQgaW4gYyl2b2lkIDA9PT1hW2RdJiYoYVtkXT1jW2RdKX1yZXR1cm4gYX1mdW5jdGlvbiBnKGEsYil7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGE/YTphW2IlYS5sZW5ndGhdfWZ1bmN0aW9uIGgoYSl7dGhpcy5vcHRzPWYoYXx8e30saC5kZWZhdWx0cyxuKX1mdW5jdGlvbiBpKCl7ZnVuY3Rpb24gYyhiLGMpe3JldHVybiBhKFwiPFwiK2IrJyB4bWxucz1cInVybjpzY2hlbWFzLW1pY3Jvc29mdC5jb206dm1sXCIgY2xhc3M9XCJzcGluLXZtbFwiPicsYyl9ay5hZGRSdWxlKFwiLnNwaW4tdm1sXCIsXCJiZWhhdmlvcjp1cmwoI2RlZmF1bHQjVk1MKVwiKSxoLnByb3RvdHlwZS5saW5lcz1mdW5jdGlvbihhLGQpe2Z1bmN0aW9uIGYoKXtyZXR1cm4gZShjKFwiZ3JvdXBcIix7Y29vcmRzaXplOmsrXCIgXCIrayxjb29yZG9yaWdpbjotaitcIiBcIistan0pLHt3aWR0aDprLGhlaWdodDprfSl9ZnVuY3Rpb24gaChhLGgsaSl7YihtLGIoZShmKCkse3JvdGF0aW9uOjM2MC9kLmxpbmVzKmErXCJkZWdcIixsZWZ0On5+aH0pLGIoZShjKFwicm91bmRyZWN0XCIse2FyY3NpemU6ZC5jb3JuZXJzfSkse3dpZHRoOmosaGVpZ2h0OmQuc2NhbGUqZC53aWR0aCxsZWZ0OmQuc2NhbGUqZC5yYWRpdXMsdG9wOi1kLnNjYWxlKmQud2lkdGg+PjEsZmlsdGVyOml9KSxjKFwiZmlsbFwiLHtjb2xvcjpnKGQuY29sb3IsYSksb3BhY2l0eTpkLm9wYWNpdHl9KSxjKFwic3Ryb2tlXCIse29wYWNpdHk6MH0pKSkpfXZhciBpLGo9ZC5zY2FsZSooZC5sZW5ndGgrZC53aWR0aCksaz0yKmQuc2NhbGUqaixsPS0oZC53aWR0aCtkLmxlbmd0aCkqZC5zY2FsZSoyK1wicHhcIixtPWUoZigpLHtwb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOmwsbGVmdDpsfSk7aWYoZC5zaGFkb3cpZm9yKGk9MTtpPD1kLmxpbmVzO2krKyloKGksLTIsXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmx1cihwaXhlbHJhZGl1cz0yLG1ha2VzaGFkb3c9MSxzaGFkb3dvcGFjaXR5PS4zKVwiKTtmb3IoaT0xO2k8PWQubGluZXM7aSsrKWgoaSk7cmV0dXJuIGIoYSxtKX0saC5wcm90b3R5cGUub3BhY2l0eT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1hLmZpcnN0Q2hpbGQ7ZD1kLnNoYWRvdyYmZC5saW5lc3x8MCxlJiZiK2Q8ZS5jaGlsZE5vZGVzLmxlbmd0aCYmKGU9ZS5jaGlsZE5vZGVzW2IrZF0sZT1lJiZlLmZpcnN0Q2hpbGQsZT1lJiZlLmZpcnN0Q2hpbGQsZSYmKGUub3BhY2l0eT1jKSl9fXZhciBqLGssbD1bXCJ3ZWJraXRcIixcIk1velwiLFwibXNcIixcIk9cIl0sbT17fSxuPXtsaW5lczoxMixsZW5ndGg6Nyx3aWR0aDo1LHJhZGl1czoxMCxzY2FsZToxLGNvcm5lcnM6MSxjb2xvcjpcIiMwMDBcIixvcGFjaXR5Oi4yNSxyb3RhdGU6MCxkaXJlY3Rpb246MSxzcGVlZDoxLHRyYWlsOjEwMCxmcHM6MjAsekluZGV4OjJlOSxjbGFzc05hbWU6XCJzcGlubmVyXCIsdG9wOlwiNTAlXCIsbGVmdDpcIjUwJVwiLHNoYWRvdzohMSxod2FjY2VsOiExLHBvc2l0aW9uOlwiYWJzb2x1dGVcIn07aWYoaC5kZWZhdWx0cz17fSxmKGgucHJvdG90eXBlLHtzcGluOmZ1bmN0aW9uKGIpe3RoaXMuc3RvcCgpO3ZhciBjPXRoaXMsZD1jLm9wdHMsZj1jLmVsPWEobnVsbCx7Y2xhc3NOYW1lOmQuY2xhc3NOYW1lfSk7aWYoZShmLHtwb3NpdGlvbjpkLnBvc2l0aW9uLHdpZHRoOjAsekluZGV4OmQuekluZGV4LGxlZnQ6ZC5sZWZ0LHRvcDpkLnRvcH0pLGImJmIuaW5zZXJ0QmVmb3JlKGYsYi5maXJzdENoaWxkfHxudWxsKSxmLnNldEF0dHJpYnV0ZShcInJvbGVcIixcInByb2dyZXNzYmFyXCIpLGMubGluZXMoZixjLm9wdHMpLCFqKXt2YXIgZyxoPTAsaT0oZC5saW5lcy0xKSooMS1kLmRpcmVjdGlvbikvMixrPWQuZnBzLGw9ay9kLnNwZWVkLG09KDEtZC5vcGFjaXR5KS8obCpkLnRyYWlsLzEwMCksbj1sL2QubGluZXM7IWZ1bmN0aW9uIG8oKXtoKys7Zm9yKHZhciBhPTA7YTxkLmxpbmVzO2ErKylnPU1hdGgubWF4KDEtKGgrKGQubGluZXMtYSkqbiklbCptLGQub3BhY2l0eSksYy5vcGFjaXR5KGYsYSpkLmRpcmVjdGlvbitpLGcsZCk7Yy50aW1lb3V0PWMuZWwmJnNldFRpbWVvdXQobyx+figxZTMvaykpfSgpfXJldHVybiBjfSxzdG9wOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5lbDtyZXR1cm4gYSYmKGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpLGEucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGEpLHRoaXMuZWw9dm9pZCAwKSx0aGlzfSxsaW5lczpmdW5jdGlvbihkLGYpe2Z1bmN0aW9uIGgoYixjKXtyZXR1cm4gZShhKCkse3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix3aWR0aDpmLnNjYWxlKihmLmxlbmd0aCtmLndpZHRoKStcInB4XCIsaGVpZ2h0OmYuc2NhbGUqZi53aWR0aCtcInB4XCIsYmFja2dyb3VuZDpiLGJveFNoYWRvdzpjLHRyYW5zZm9ybU9yaWdpbjpcImxlZnRcIix0cmFuc2Zvcm06XCJyb3RhdGUoXCIrfn4oMzYwL2YubGluZXMqaytmLnJvdGF0ZSkrXCJkZWcpIHRyYW5zbGF0ZShcIitmLnNjYWxlKmYucmFkaXVzK1wicHgsMClcIixib3JkZXJSYWRpdXM6KGYuY29ybmVycypmLnNjYWxlKmYud2lkdGg+PjEpK1wicHhcIn0pfWZvcih2YXIgaSxrPTAsbD0oZi5saW5lcy0xKSooMS1mLmRpcmVjdGlvbikvMjtrPGYubGluZXM7aysrKWk9ZShhKCkse3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6MSt+KGYuc2NhbGUqZi53aWR0aC8yKStcInB4XCIsdHJhbnNmb3JtOmYuaHdhY2NlbD9cInRyYW5zbGF0ZTNkKDAsMCwwKVwiOlwiXCIsb3BhY2l0eTpmLm9wYWNpdHksYW5pbWF0aW9uOmomJmMoZi5vcGFjaXR5LGYudHJhaWwsbCtrKmYuZGlyZWN0aW9uLGYubGluZXMpK1wiIFwiKzEvZi5zcGVlZCtcInMgbGluZWFyIGluZmluaXRlXCJ9KSxmLnNoYWRvdyYmYihpLGUoaChcIiMwMDBcIixcIjAgMCA0cHggIzAwMFwiKSx7dG9wOlwiMnB4XCJ9KSksYihkLGIoaSxoKGcoZi5jb2xvcixrKSxcIjAgMCAxcHggcmdiYSgwLDAsMCwuMSlcIikpKTtyZXR1cm4gZH0sb3BhY2l0eTpmdW5jdGlvbihhLGIsYyl7YjxhLmNoaWxkTm9kZXMubGVuZ3RoJiYoYS5jaGlsZE5vZGVzW2JdLnN0eWxlLm9wYWNpdHk9Yyl9fSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50KXtrPWZ1bmN0aW9uKCl7dmFyIGM9YShcInN0eWxlXCIse3R5cGU6XCJ0ZXh0L2Nzc1wifSk7cmV0dXJuIGIoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLGMpLGMuc2hlZXR8fGMuc3R5bGVTaGVldH0oKTt2YXIgbz1lKGEoXCJncm91cFwiKSx7YmVoYXZpb3I6XCJ1cmwoI2RlZmF1bHQjVk1MKVwifSk7IWQobyxcInRyYW5zZm9ybVwiKSYmby5hZGo/aSgpOmo9ZChvLFwiYW5pbWF0aW9uXCIpfXJldHVybiBofSk7IiwidmFyIFBhZ2UgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuaW5pdGlhbGl6ZSgpIH1cblxuT2JqZWN0LmFzc2lnbiggUGFnZS5wcm90b3R5cGUsIHtcblxuICAgICQ6IHJlcXVpcmUoJ2pxdWVyeScpLFxuXG4gICAgU3Bpbm5lcjogcmVxdWlyZSgnLi4vc3BpbicpLFxuXG4gICAgYXBwbHlSc3ZwQnRuKCkgeyB0aGlzLnJzdnBCdG4ub25lKCAnY2xpY2snLCAoKSA9PiB0aGlzLm9uUnN2cCgpICkgfSxcblxuICAgIGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgdGhpcy5ib2R5ID0gdGhpcy4kKCdib2R5JylcbiAgICAgICAgdGhpcy5jb250ZW50ID0geyB9XG4gICAgICAgIHRoaXMubmFtZXMgPSB0aGlzLiQoJyNuYW1lcycpXG4gICAgICAgIHRoaXMuYWNjZXB0cyA9IHRoaXMuJCgnI2FjY2VwdHMnKS5vbiggJ2NsaWNrJywgKCkgPT4gdGhpcy5kZWNsaW5lcy5wcm9wKCAnY2hlY2tlZCcsIGZhbHNlICkgKVxuICAgICAgICB0aGlzLmRlY2xpbmVzID0gdGhpcy4kKCcjZGVjbGluZXMnKS5vbiggJ2NsaWNrJywgKCkgPT4gdGhpcy5hY2NlcHRzLnByb3AoICdjaGVja2VkJywgZmFsc2UgKSApXG4gICAgICAgIHRoaXMubnVtYmVyID0gdGhpcy4kKCcjbnVtYmVyJylcbiAgICAgICAgdGhpcy52ZWcgPSB0aGlzLiQoJyN2ZWcnKVxuXG4gICAgICAgIHRoaXMubXlNb2RhbCA9IHRoaXMuJCgnI215TW9kYWwnKVxuICAgICAgICB0aGlzLmVycm9yID0gdGhpcy4kKCcjZXJyb3InKVxuICAgICAgICB0aGlzLnJzdnBCdG4gPSB0aGlzLiQoJyNyc3ZwQnRuJylcbiAgICAgICAgdGhpcy5yc3ZwVHlwZSA9IHVuZGVmaW5lZFxuICAgICAgICB0aGlzLnN1Y2Nlc3MgPSB0aGlzLiQoJyNzdWNjZXNzJylcblxuICAgICAgICB0aGlzLmJvZHkuY2hpbGRyZW4oJ2RpdicpLmVhY2goICggaSwgZWwgKSA9PiB7IHZhciAkZWwgPSB0aGlzLiQoZWwpOyB0aGlzLmNvbnRlbnRbICRlbC5kYXRhKCdjb250ZW50JykgXSA9ICRlbCB9IClcblxuICAgICAgICB0aGlzLmJvZHkuZmluZCgnbmF2IHVsIGxpJyApLmVhY2goICggaSwgZWwgKSA9PiB7XG4gICAgICAgICAgICB2YXIgJGVsID0gdGhpcy4kKGVsKVxuICAgICAgICAgICAgJGVsLm9uKCAnY2xpY2snLCAoKSA9PiB0aGlzLmJvZHkuYW5pbWF0ZSggeyBzY3JvbGxUb3A6IHRoaXMuY29udGVudFsgJGVsLmF0dHIoJ2RhdGEtbmF2JykgXS5wb3NpdGlvbigpLnRvcCB9LCAxMDAwICkgKVxuICAgICAgICB9ICkgXG5cbiAgICAgICAgdGhpcy5ib2R5LmZpbmQoJ1tkYXRhLWpzPVwicmVoZWFyc2FsTGlua1wiXScpLmNsaWNrKCAoKSA9PiB0aGlzLmJvZHkuYW5pbWF0ZSggeyBzY3JvbGxUb3A6IHRoaXMuY29udGVudC5yZWhlYXJzYWwucG9zaXRpb24oKS50b3AgfSwgMTAwMCApIClcblxuICAgICAgICB0aGlzLiQoJyNtb2JpbGUtbWVudScpLmNsaWNrKCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuJCgnI25hdi1saXN0JykuY3NzKCB7IGRpc3BsYXk6ICdibG9jaycgfSApXG4gICAgICAgICAgICB0aGlzLiQoJyNtb2JpbGUtbWVudScpLmNzcyggeyBkaXNwbGF5OiAnbm9uZScgfSApXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICB0aGlzLiQoIGRvY3VtZW50ICkub24oICdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiQoJyNtb2JpbGUtbWVudScpLmNzcyggeyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9IClcbiAgICAgICAgICAgICAgICB0aGlzLiQoJyNuYXYtbGlzdCcpLmNzcyggeyBkaXNwbGF5OiAnbm9uZScgfSApXG4gICAgICAgICAgICB9IClcbiAgICAgICAgfSApXG5cbiAgICAgICAgaWYoIHRoaXMuJCh3aW5kb3cpLndpZHRoKCkgPD0gNzg1ICkge1xuICAgICAgICAgICAgdGhpcy4kKCdpZnJhbWUnKS5hdHRyKCB7IHNyYzogdGhpcy4kKCdpZnJhbWUnKS5hdHRyKCdzcmMnKS5zbGljZSggMCwgLTEgKSArICczJyB9IClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJCgnI3dlZGRpbmdSU1ZQJykub24oICdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJCgnI21vZGFsVGl0bGUnKS50ZXh0KCdXZWRkaW5nIFJTVlAnKVxuICAgICAgICAgICAgaWYoIHRoaXMucnN2cFR5cGUgIT09ICdXZWRkaW5nJyApIHRoaXMucmVzZXRNb2RhbCgpXG4gICAgICAgICAgICB0aGlzLnJzdnBUeXBlID0gJ1dlZGRpbmcnXG4gICAgICAgICAgICB0aGlzLm15TW9kYWwubW9kYWwoKVxuICAgICAgICB9IClcblxuICAgICAgICB0aGlzLiQoJyNyZWhlYXJzYWxSU1ZQJykub24oICdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJCgnI21vZGFsVGl0bGUnKS50ZXh0KCdSZWhlYXJzYWwgUlNWUCcpXG4gICAgICAgICAgICBpZiggdGhpcy5yc3ZwVHlwZSAhPT0gJ1JlaGVhcnNhbCcgKSB0aGlzLnJlc2V0TW9kYWwoKVxuICAgICAgICAgICAgdGhpcy5yc3ZwVHlwZSA9ICdSZWhlYXJzYWwnXG4gICAgICAgICAgICB0aGlzLm15TW9kYWwubW9kYWwoKVxuICAgICAgICB9IClcblxuICAgICAgICB0aGlzLmFwcGx5UnN2cEJ0bigpXG5cbiAgICAgICAgdGhpcy5hY2NlcHRzLm9uKCdmb2N1cycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWNjZXB0cy5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKVxuICAgICAgICAgICAgdGhpcy5kZWNsaW5lcy5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKVxuICAgICAgICB9IClcblxuICAgICAgICB0aGlzLmRlY2xpbmVzLm9uKCdmb2N1cycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWNjZXB0cy5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKVxuICAgICAgICAgICAgdGhpcy5kZWNsaW5lcy5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKVxuICAgICAgICB9IClcbiAgICAgICAgXG4gICAgICAgIHRoaXMubmFtZXMub24oJ2ZvY3VzJywgKCkgPT4gdGhpcy5uYW1lcy5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKSApXG4gICAgICAgIHRoaXMubnVtYmVyLm9uKCdmb2N1cycsICgpID0+IHRoaXMubnVtYmVyLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvcicpIClcbiAgICAgICAgdGhpcy52ZWcub24oJ2ZvY3VzJywgKCkgPT4gdGhpcy52ZWcuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yJykgKVxuXG4gICAgICAgIHRoaXMuc3Bpbm5lciA9IG5ldyB0aGlzLlNwaW5uZXIoIHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICBsZW5ndGg6IDE1LFxuICAgICAgICAgICAgc2NhbGU6IDAuMjUsXG4gICAgICAgICAgICB3aWR0aDogNVxuICAgICAgICB9ICkuc3BpbigpXG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgb25Sc3ZwKCkge1xuXG4gICAgICAgIHRoaXMuZXJyb3IuaGlkZSgpXG5cbiAgICAgICAgaWYoICEgdGhpcy52YWxpZGF0ZSgpICkgcmV0dXJuIHRoaXMuYXBwbHlSc3ZwQnRuKClcbiAgICAgICAgXG4gICAgICAgIHRoaXMucnN2cEJ0bi5hZGRDbGFzcygnaGFzLXNwaW5uZXInKVxuICAgICAgICB0aGlzLnJzdnBCdG4uYXBwZW5kKCB0aGlzLnNwaW5uZXIuc3BpbigpLmVsIClcblxuICAgICAgICB0aGlzLiQuYWpheCgge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHVybDogJy9yc3ZwJyxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSgge1xuICAgICAgICAgICAgICAgIG5hbWVzOiB0aGlzLm5hbWVzLnZhbCgpLFxuICAgICAgICAgICAgICAgIGFjY2VwdHM6IHRoaXMuYWNjZXB0cy5wcm9wKCdjaGVja2VkJyksXG4gICAgICAgICAgICAgICAgbnVtYmVyOiB0aGlzLm51bWJlci52YWwoKSxcbiAgICAgICAgICAgICAgICB2ZWc6IHRoaXMudmVnLnZhbCgpLFxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMucnN2cFR5cGVcbiAgICAgICAgICAgIH0gKSxcbiAgICAgICAgfSApXG4gICAgICAgIC5kb25lKCAoKSA9PiB0aGlzLm9uUnN2cERvbmUoKSApXG4gICAgICAgIC5mYWlsKCAoKSA9PiB0aGlzLm9uUnN2cEZhaWwoKSApXG4gICAgICAgIC5hbHdheXMoICgpID0+IHRoaXMub25Sc3ZwQWx3YXlzKCkgKVxuICAgIH0sXG5cbiAgICBvblJzdnBBbHdheXMoKSB7XG4gICAgICAgIHRoaXMucnN2cEJ0bi5yZW1vdmVDbGFzcygnaGFzLXNwaW5uZXInKVxuICAgICAgICB0aGlzLnNwaW5uZXIuc3RvcCgpXG4gICAgfSxcbiAgICBcbiAgICBvblJzdnBEb25lKCkge1xuICAgICAgICB0aGlzLnN1Y2Nlc3MuYWRkQ2xhc3MoJ3NsaWRlLXJpZ2h0Jykuc2hvdygpXG4gICAgICAgIHRoaXMubXlNb2RhbC5vbmUoICdoaWRkZW4uYnMubW9kYWwnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0TW9kYWwoKVxuICAgICAgICAgICAgdGhpcy5hcHBseVJzdnBCdG4oKVxuICAgICAgICAgICAgdGhpcy5zdWNjZXNzLmhpZGUoKS5yZW1vdmVDbGFzcygnc2xpZGUtcmlnaHQnKVxuICAgICAgICB9IClcbiAgICB9LFxuXG4gICAgb25Sc3ZwRmFpbCgpIHtcbiAgICAgICAgdGhpcy5lcnJvci5zaG93KClcbiAgICAgICAgdGhpcy5hcHBseVJzdnBCdG4oKVxuICAgIH0sXG5cbiAgICByZXNldE1vZGFsKCkge1xuICAgICAgICB0aGlzLm5hbWVzLnZhbCgnJykuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yJylcbiAgICAgICAgdGhpcy5hY2NlcHRzLnByb3AoICdjaGVja2VkJywgZmFsc2UgKS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKVxuICAgICAgICB0aGlzLmRlY2xpbmVzLnByb3AoICdjaGVja2VkJywgZmFsc2UgKS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKVxuICAgICAgICB0aGlzLm51bWJlci52YWwoJycpLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvcicpXG4gICAgICAgIHRoaXMudmVnLnZhbCgnJykuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yJylcbiAgICB9LFxuXG4gICAgdmFsaWRhdGUoKSB7XG4gICAgICAgIHZhciBkZWNsaW5lZCA9IHRoaXMuZGVjbGluZXMucHJvcCgnY2hlY2tlZCcpXG5cbiAgICAgICAgaWYoICEgdGhpcy4kLnRyaW0oIHRoaXMubmFtZXMudmFsKCkgKSApIHsgdGhpcy5uYW1lcy5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLmFkZENsYXNzKCdoYXMtZXJyb3InKTsgcmV0dXJuIGZhbHNlIH1cbiAgICAgICAgaWYoIHRoaXMuYWNjZXB0cy5wcm9wKCdjaGVja2VkJykgPT09IGZhbHNlICYmIGRlY2xpbmVkID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgIHRoaXMuYWNjZXB0cy5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLmFkZENsYXNzKCdoYXMtZXJyb3InKVxuICAgICAgICAgICAgdGhpcy5kZWNsaW5lcy5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLmFkZENsYXNzKCdoYXMtZXJyb3InKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgaWYoICFkZWNsaW5lZCAmJiBpc05hTiggcGFyc2VJbnQoIHRoaXMubnVtYmVyLnZhbCgpICkgKSApIHsgdGhpcy5udW1iZXIuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5hZGRDbGFzcygnaGFzLWVycm9yJyk7IHJldHVybiBmYWxzZSB9XG4gICAgICAgIGlmKCAhZGVjbGluZWQgJiYgaXNOYU4oIHBhcnNlSW50KCB0aGlzLnZlZy52YWwoKSApICkgKSB7IHRoaXMudmVnLnZhbCgnJykuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5hZGRDbGFzcygnaGFzLWVycm9yJyk7IHJldHVybiBmYWxzZSB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG59IClcblxubW9kdWxlLmV4cG9ydHMgPSBQYWdlXG4iXX0=
