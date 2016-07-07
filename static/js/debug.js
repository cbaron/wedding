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
            _this2.$('#rehearsalSubHeading').hide();
            if (_this2.rsvpType !== 'Wedding') _this2.resetModal();
            _this2.rsvpType = 'Wedding';
            _this2.myModal.modal();
        });

        this.$('#rehearsalRSVP').on('click', function () {
            _this2.$('#modalTitle').text('Rehearsal RSVP');
            _this2.$('#rehearsalSubHeading').show();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvanMvbWFpbi5qcyIsImNsaWVudC9qcy9yb3V0ZXIuanMiLCJjbGllbnQvanMvc3Bpbi5qcyIsImNsaWVudC9qcy92aWV3cy9QYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLElBQUksUUFBUSxRQUFSLENBQUo7SUFDQSxTQUFTLFFBQVEsVUFBUixDQUFUOztBQUVKLE9BQU8sQ0FBUCxHQUFXLE9BQU8sTUFBUCxHQUFnQixDQUFoQjs7QUFFWCxRQUFRLFdBQVI7O0FBRUEsRUFBRyxZQUFNO0FBQ0wsWUFBUSxVQUFSLEVBQW9CLE9BQXBCLENBQTRCLEtBQTVCLENBQW1DLEVBQUUsV0FBVyxJQUFYLEVBQXJDLEVBREs7Q0FBTixDQUFIOzs7OztBQ1BBLE9BQU8sT0FBUCxHQUFpQixLQUNiLFFBQVEsVUFBUixFQUFvQixNQUFwQixDQUEyQixNQUEzQixDQUFtQzs7QUFFL0IsVUFBTSxRQUFRLGNBQVIsQ0FBTjs7QUFFQSxnQ0FBVTtBQUFFLFlBQUksS0FBSyxJQUFMLEVBQUosQ0FBRjtLQUpxQjs7O0FBTS9CLFlBQVE7QUFDSixjQUFNLFNBQU47S0FESjs7Q0FOSixFQURhLEVBQWpCOzs7Ozs7OztBQ0NBLENBQUMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsc0JBQWlCLHVEQUFqQixJQUF5QixPQUFPLE9BQVAsR0FBZSxPQUFPLE9BQVAsR0FBZSxHQUFmLEdBQW1CLGNBQVksT0FBTyxNQUFQLElBQWUsT0FBTyxHQUFQLEdBQVcsT0FBTyxDQUFQLENBQXRDLEdBQWdELEVBQUUsT0FBRixHQUFVLEdBQVYsQ0FBNUc7Q0FBYixZQUE2SSxZQUFVO0FBQUMsZUFBRDtBQUFjLFdBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxRQUFJLENBQUo7UUFBTSxJQUFFLFNBQVMsYUFBVCxDQUF1QixLQUFHLEtBQUgsQ0FB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K0Q7QUFHL0QsbUJBQU8sS0FBUCxDQUgrRDtTQUFuRTtBQUtBLFlBQUksQ0FBQyxRQUFELElBQWEsTUFBTyxTQUFVLEtBQUssTUFBTCxDQUFZLEdBQVosRUFBVixDQUFQLENBQWIsRUFBc0Q7QUFBRSxpQkFBSyxNQUFMLENBQVksT0FBWixDQUFvQixhQUFwQixFQUFtQyxRQUFuQyxDQUE0QyxXQUE1QyxFQUFGLE9BQW1FLEtBQVAsQ0FBNUQ7U0FBMUQ7QUFDQSxZQUFJLENBQUMsUUFBRCxJQUFhLE1BQU8sU0FBVSxLQUFLLEdBQUwsQ0FBUyxHQUFULEVBQVYsQ0FBUCxDQUFiLEVBQW1EO0FBQUUsaUJBQUssR0FBTCxDQUFTLEdBQVQsQ0FBYSxFQUFiLEVBQWlCLE9BQWpCLENBQXlCLGFBQXpCLEVBQXdDLFFBQXhDLENBQWlELFdBQWpELEVBQUYsT0FBd0UsS0FBUCxDQUFqRTtTQUF2RDtBQUNBLGVBQU8sSUFBUCxDQVhPO0tBOUlnQjtDQUEvQjs7QUE4SkEsT0FBTyxPQUFQLEdBQWlCLElBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgcm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXInKTtcblxud2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gJFxuXG5yZXF1aXJlKCdib290c3RyYXAnKVxuXG4kKCAoKSA9PiB7XG4gICAgcmVxdWlyZSgnYmFja2JvbmUnKS5oaXN0b3J5LnN0YXJ0KCB7IHB1c2hTdGF0ZTogdHJ1ZSB9IClcbn0gKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBuZXcgKFxuICAgIHJlcXVpcmUoJ2JhY2tib25lJykuUm91dGVyLmV4dGVuZCgge1xuXG4gICAgICAgIFBhZ2U6IHJlcXVpcmUoJy4vdmlld3MvUGFnZScpLFxuXG4gICAgICAgIGhhbmRsZXIoKSB7IG5ldyB0aGlzLlBhZ2UoKSB9LFxuXG4gICAgICAgIHJvdXRlczoge1xuICAgICAgICAgICAgJy4qJzogJ2hhbmRsZXInLFxuICAgICAgICB9XG5cbiAgICB9IClcbikoKVxuIiwiLy8gaHR0cDovL3NwaW4uanMub3JnLyN2Mi4zLjJcbiFmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWIoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGIpOmEuU3Bpbm5lcj1iKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBhKGEsYil7dmFyIGMsZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KGF8fFwiZGl2XCIpO2ZvcihjIGluIGIpZFtjXT1iW2NdO3JldHVybiBkfWZ1bmN0aW9uIGIoYSl7Zm9yKHZhciBiPTEsYz1hcmd1bWVudHMubGVuZ3RoO2M+YjtiKyspYS5hcHBlbmRDaGlsZChhcmd1bWVudHNbYl0pO3JldHVybiBhfWZ1bmN0aW9uIGMoYSxiLGMsZCl7dmFyIGU9W1wib3BhY2l0eVwiLGIsfn4oMTAwKmEpLGMsZF0uam9pbihcIi1cIiksZj0uMDErYy9kKjEwMCxnPU1hdGgubWF4KDEtKDEtYSkvYiooMTAwLWYpLGEpLGg9ai5zdWJzdHJpbmcoMCxqLmluZGV4T2YoXCJBbmltYXRpb25cIikpLnRvTG93ZXJDYXNlKCksaT1oJiZcIi1cIitoK1wiLVwifHxcIlwiO3JldHVybiBtW2VdfHwoay5pbnNlcnRSdWxlKFwiQFwiK2krXCJrZXlmcmFtZXMgXCIrZStcInswJXtvcGFjaXR5OlwiK2crXCJ9XCIrZitcIiV7b3BhY2l0eTpcIithK1wifVwiKyhmKy4wMSkrXCIle29wYWNpdHk6MX1cIisoZitiKSUxMDArXCIle29wYWNpdHk6XCIrYStcIn0xMDAle29wYWNpdHk6XCIrZytcIn19XCIsay5jc3NSdWxlcy5sZW5ndGgpLG1bZV09MSksZX1mdW5jdGlvbiBkKGEsYil7dmFyIGMsZCxlPWEuc3R5bGU7aWYoYj1iLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Iuc2xpY2UoMSksdm9pZCAwIT09ZVtiXSlyZXR1cm4gYjtmb3IoZD0wO2Q8bC5sZW5ndGg7ZCsrKWlmKGM9bFtkXStiLHZvaWQgMCE9PWVbY10pcmV0dXJuIGN9ZnVuY3Rpb24gZShhLGIpe2Zvcih2YXIgYyBpbiBiKWEuc3R5bGVbZChhLGMpfHxjXT1iW2NdO3JldHVybiBhfWZ1bmN0aW9uIGYoYSl7Zm9yKHZhciBiPTE7Yjxhcmd1bWVudHMubGVuZ3RoO2IrKyl7dmFyIGM9YXJndW1lbnRzW2JdO2Zvcih2YXIgZCBpbiBjKXZvaWQgMD09PWFbZF0mJihhW2RdPWNbZF0pfXJldHVybiBhfWZ1bmN0aW9uIGcoYSxiKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYT9hOmFbYiVhLmxlbmd0aF19ZnVuY3Rpb24gaChhKXt0aGlzLm9wdHM9ZihhfHx7fSxoLmRlZmF1bHRzLG4pfWZ1bmN0aW9uIGkoKXtmdW5jdGlvbiBjKGIsYyl7cmV0dXJuIGEoXCI8XCIrYisnIHhtbG5zPVwidXJuOnNjaGVtYXMtbWljcm9zb2Z0LmNvbTp2bWxcIiBjbGFzcz1cInNwaW4tdm1sXCI+JyxjKX1rLmFkZFJ1bGUoXCIuc3Bpbi12bWxcIixcImJlaGF2aW9yOnVybCgjZGVmYXVsdCNWTUwpXCIpLGgucHJvdG90eXBlLmxpbmVzPWZ1bmN0aW9uKGEsZCl7ZnVuY3Rpb24gZigpe3JldHVybiBlKGMoXCJncm91cFwiLHtjb29yZHNpemU6aytcIiBcIitrLGNvb3Jkb3JpZ2luOi1qK1wiIFwiKy1qfSkse3dpZHRoOmssaGVpZ2h0Omt9KX1mdW5jdGlvbiBoKGEsaCxpKXtiKG0sYihlKGYoKSx7cm90YXRpb246MzYwL2QubGluZXMqYStcImRlZ1wiLGxlZnQ6fn5ofSksYihlKGMoXCJyb3VuZHJlY3RcIix7YXJjc2l6ZTpkLmNvcm5lcnN9KSx7d2lkdGg6aixoZWlnaHQ6ZC5zY2FsZSpkLndpZHRoLGxlZnQ6ZC5zY2FsZSpkLnJhZGl1cyx0b3A6LWQuc2NhbGUqZC53aWR0aD4+MSxmaWx0ZXI6aX0pLGMoXCJmaWxsXCIse2NvbG9yOmcoZC5jb2xvcixhKSxvcGFjaXR5OmQub3BhY2l0eX0pLGMoXCJzdHJva2VcIix7b3BhY2l0eTowfSkpKSl9dmFyIGksaj1kLnNjYWxlKihkLmxlbmd0aCtkLndpZHRoKSxrPTIqZC5zY2FsZSpqLGw9LShkLndpZHRoK2QubGVuZ3RoKSpkLnNjYWxlKjIrXCJweFwiLG09ZShmKCkse3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6bCxsZWZ0Omx9KTtpZihkLnNoYWRvdylmb3IoaT0xO2k8PWQubGluZXM7aSsrKWgoaSwtMixcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CbHVyKHBpeGVscmFkaXVzPTIsbWFrZXNoYWRvdz0xLHNoYWRvd29wYWNpdHk9LjMpXCIpO2ZvcihpPTE7aTw9ZC5saW5lcztpKyspaChpKTtyZXR1cm4gYihhLG0pfSxoLnByb3RvdHlwZS5vcGFjaXR5PWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWEuZmlyc3RDaGlsZDtkPWQuc2hhZG93JiZkLmxpbmVzfHwwLGUmJmIrZDxlLmNoaWxkTm9kZXMubGVuZ3RoJiYoZT1lLmNoaWxkTm9kZXNbYitkXSxlPWUmJmUuZmlyc3RDaGlsZCxlPWUmJmUuZmlyc3RDaGlsZCxlJiYoZS5vcGFjaXR5PWMpKX19dmFyIGosayxsPVtcIndlYmtpdFwiLFwiTW96XCIsXCJtc1wiLFwiT1wiXSxtPXt9LG49e2xpbmVzOjEyLGxlbmd0aDo3LHdpZHRoOjUscmFkaXVzOjEwLHNjYWxlOjEsY29ybmVyczoxLGNvbG9yOlwiIzAwMFwiLG9wYWNpdHk6LjI1LHJvdGF0ZTowLGRpcmVjdGlvbjoxLHNwZWVkOjEsdHJhaWw6MTAwLGZwczoyMCx6SW5kZXg6MmU5LGNsYXNzTmFtZTpcInNwaW5uZXJcIix0b3A6XCI1MCVcIixsZWZ0OlwiNTAlXCIsc2hhZG93OiExLGh3YWNjZWw6ITEscG9zaXRpb246XCJhYnNvbHV0ZVwifTtpZihoLmRlZmF1bHRzPXt9LGYoaC5wcm90b3R5cGUse3NwaW46ZnVuY3Rpb24oYil7dGhpcy5zdG9wKCk7dmFyIGM9dGhpcyxkPWMub3B0cyxmPWMuZWw9YShudWxsLHtjbGFzc05hbWU6ZC5jbGFzc05hbWV9KTtpZihlKGYse3Bvc2l0aW9uOmQucG9zaXRpb24sd2lkdGg6MCx6SW5kZXg6ZC56SW5kZXgsbGVmdDpkLmxlZnQsdG9wOmQudG9wfSksYiYmYi5pbnNlcnRCZWZvcmUoZixiLmZpcnN0Q2hpbGR8fG51bGwpLGYuc2V0QXR0cmlidXRlKFwicm9sZVwiLFwicHJvZ3Jlc3NiYXJcIiksYy5saW5lcyhmLGMub3B0cyksIWope3ZhciBnLGg9MCxpPShkLmxpbmVzLTEpKigxLWQuZGlyZWN0aW9uKS8yLGs9ZC5mcHMsbD1rL2Quc3BlZWQsbT0oMS1kLm9wYWNpdHkpLyhsKmQudHJhaWwvMTAwKSxuPWwvZC5saW5lczshZnVuY3Rpb24gbygpe2grKztmb3IodmFyIGE9MDthPGQubGluZXM7YSsrKWc9TWF0aC5tYXgoMS0oaCsoZC5saW5lcy1hKSpuKSVsKm0sZC5vcGFjaXR5KSxjLm9wYWNpdHkoZixhKmQuZGlyZWN0aW9uK2ksZyxkKTtjLnRpbWVvdXQ9Yy5lbCYmc2V0VGltZW91dChvLH5+KDFlMy9rKSl9KCl9cmV0dXJuIGN9LHN0b3A6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmVsO3JldHVybiBhJiYoY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCksYS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYSksdGhpcy5lbD12b2lkIDApLHRoaXN9LGxpbmVzOmZ1bmN0aW9uKGQsZil7ZnVuY3Rpb24gaChiLGMpe3JldHVybiBlKGEoKSx7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHdpZHRoOmYuc2NhbGUqKGYubGVuZ3RoK2Yud2lkdGgpK1wicHhcIixoZWlnaHQ6Zi5zY2FsZSpmLndpZHRoK1wicHhcIixiYWNrZ3JvdW5kOmIsYm94U2hhZG93OmMsdHJhbnNmb3JtT3JpZ2luOlwibGVmdFwiLHRyYW5zZm9ybTpcInJvdGF0ZShcIit+figzNjAvZi5saW5lcyprK2Yucm90YXRlKStcImRlZykgdHJhbnNsYXRlKFwiK2Yuc2NhbGUqZi5yYWRpdXMrXCJweCwwKVwiLGJvcmRlclJhZGl1czooZi5jb3JuZXJzKmYuc2NhbGUqZi53aWR0aD4+MSkrXCJweFwifSl9Zm9yKHZhciBpLGs9MCxsPShmLmxpbmVzLTEpKigxLWYuZGlyZWN0aW9uKS8yO2s8Zi5saW5lcztrKyspaT1lKGEoKSx7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDoxK34oZi5zY2FsZSpmLndpZHRoLzIpK1wicHhcIix0cmFuc2Zvcm06Zi5od2FjY2VsP1widHJhbnNsYXRlM2QoMCwwLDApXCI6XCJcIixvcGFjaXR5OmYub3BhY2l0eSxhbmltYXRpb246aiYmYyhmLm9wYWNpdHksZi50cmFpbCxsK2sqZi5kaXJlY3Rpb24sZi5saW5lcykrXCIgXCIrMS9mLnNwZWVkK1wicyBsaW5lYXIgaW5maW5pdGVcIn0pLGYuc2hhZG93JiZiKGksZShoKFwiIzAwMFwiLFwiMCAwIDRweCAjMDAwXCIpLHt0b3A6XCIycHhcIn0pKSxiKGQsYihpLGgoZyhmLmNvbG9yLGspLFwiMCAwIDFweCByZ2JhKDAsMCwwLC4xKVwiKSkpO3JldHVybiBkfSxvcGFjaXR5OmZ1bmN0aW9uKGEsYixjKXtiPGEuY2hpbGROb2Rlcy5sZW5ndGgmJihhLmNoaWxkTm9kZXNbYl0uc3R5bGUub3BhY2l0eT1jKX19KSxcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQpe2s9ZnVuY3Rpb24oKXt2YXIgYz1hKFwic3R5bGVcIix7dHlwZTpcInRleHQvY3NzXCJ9KTtyZXR1cm4gYihkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0sYyksYy5zaGVldHx8Yy5zdHlsZVNoZWV0fSgpO3ZhciBvPWUoYShcImdyb3VwXCIpLHtiZWhhdmlvcjpcInVybCgjZGVmYXVsdCNWTUwpXCJ9KTshZChvLFwidHJhbnNmb3JtXCIpJiZvLmFkaj9pKCk6aj1kKG8sXCJhbmltYXRpb25cIil9cmV0dXJuIGh9KTsiLCJ2YXIgUGFnZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5pbml0aWFsaXplKCkgfVxuXG5PYmplY3QuYXNzaWduKCBQYWdlLnByb3RvdHlwZSwge1xuXG4gICAgJDogcmVxdWlyZSgnanF1ZXJ5JyksXG5cbiAgICBTcGlubmVyOiByZXF1aXJlKCcuLi9zcGluJyksXG5cbiAgICBhcHBseVJzdnBCdG4oKSB7IHRoaXMucnN2cEJ0bi5vbmUoICdjbGljaycsICgpID0+IHRoaXMub25Sc3ZwKCkgKSB9LFxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICB0aGlzLmJvZHkgPSB0aGlzLiQoJ2JvZHknKVxuICAgICAgICB0aGlzLmNvbnRlbnQgPSB7IH1cbiAgICAgICAgdGhpcy5uYW1lcyA9IHRoaXMuJCgnI25hbWVzJylcbiAgICAgICAgdGhpcy5hY2NlcHRzID0gdGhpcy4kKCcjYWNjZXB0cycpLm9uKCAnY2xpY2snLCAoKSA9PiB0aGlzLmRlY2xpbmVzLnByb3AoICdjaGVja2VkJywgZmFsc2UgKSApXG4gICAgICAgIHRoaXMuZGVjbGluZXMgPSB0aGlzLiQoJyNkZWNsaW5lcycpLm9uKCAnY2xpY2snLCAoKSA9PiB0aGlzLmFjY2VwdHMucHJvcCggJ2NoZWNrZWQnLCBmYWxzZSApIClcbiAgICAgICAgdGhpcy5udW1iZXIgPSB0aGlzLiQoJyNudW1iZXInKVxuICAgICAgICB0aGlzLnZlZyA9IHRoaXMuJCgnI3ZlZycpXG5cbiAgICAgICAgdGhpcy5teU1vZGFsID0gdGhpcy4kKCcjbXlNb2RhbCcpXG4gICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLiQoJyNlcnJvcicpXG4gICAgICAgIHRoaXMucnN2cEJ0biA9IHRoaXMuJCgnI3JzdnBCdG4nKVxuICAgICAgICB0aGlzLnJzdnBUeXBlID0gdW5kZWZpbmVkXG4gICAgICAgIHRoaXMuc3VjY2VzcyA9IHRoaXMuJCgnI3N1Y2Nlc3MnKVxuXG4gICAgICAgIHRoaXMuYm9keS5jaGlsZHJlbignZGl2JykuZWFjaCggKCBpLCBlbCApID0+IHsgdmFyICRlbCA9IHRoaXMuJChlbCk7IHRoaXMuY29udGVudFsgJGVsLmRhdGEoJ2NvbnRlbnQnKSBdID0gJGVsIH0gKVxuXG4gICAgICAgIHRoaXMuYm9keS5maW5kKCduYXYgdWwgbGknICkuZWFjaCggKCBpLCBlbCApID0+IHtcbiAgICAgICAgICAgIHZhciAkZWwgPSB0aGlzLiQoZWwpXG4gICAgICAgICAgICAkZWwub24oICdjbGljaycsICgpID0+IHRoaXMuYm9keS5hbmltYXRlKCB7IHNjcm9sbFRvcDogdGhpcy5jb250ZW50WyAkZWwuYXR0cignZGF0YS1uYXYnKSBdLnBvc2l0aW9uKCkudG9wIH0sIDEwMDAgKSApXG4gICAgICAgIH0gKSBcblxuICAgICAgICB0aGlzLmJvZHkuZmluZCgnW2RhdGEtanM9XCJyZWhlYXJzYWxMaW5rXCJdJykuY2xpY2soICgpID0+IHRoaXMuYm9keS5hbmltYXRlKCB7IHNjcm9sbFRvcDogdGhpcy5jb250ZW50LnJlaGVhcnNhbC5wb3NpdGlvbigpLnRvcCB9LCAxMDAwICkgKVxuXG4gICAgICAgIHRoaXMuJCgnI21vYmlsZS1tZW51JykuY2xpY2soIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy4kKCcjbmF2LWxpc3QnKS5jc3MoIHsgZGlzcGxheTogJ2Jsb2NrJyB9IClcbiAgICAgICAgICAgIHRoaXMuJCgnI21vYmlsZS1tZW51JykuY3NzKCB7IGRpc3BsYXk6ICdub25lJyB9IClcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIHRoaXMuJCggZG9jdW1lbnQgKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJCgnI21vYmlsZS1tZW51JykuY3NzKCB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH0gKVxuICAgICAgICAgICAgICAgIHRoaXMuJCgnI25hdi1saXN0JykuY3NzKCB7IGRpc3BsYXk6ICdub25lJyB9IClcbiAgICAgICAgICAgIH0gKVxuICAgICAgICB9IClcblxuICAgICAgICBpZiggdGhpcy4kKHdpbmRvdykud2lkdGgoKSA8PSA3ODUgKSB7XG4gICAgICAgICAgICB0aGlzLiQoJ2lmcmFtZScpLmF0dHIoIHsgc3JjOiB0aGlzLiQoJ2lmcmFtZScpLmF0dHIoJ3NyYycpLnNsaWNlKCAwLCAtMSApICsgJzMnIH0gKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kKCcjd2VkZGluZ1JTVlAnKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kKCcjbW9kYWxUaXRsZScpLnRleHQoJ1dlZGRpbmcgUlNWUCcpXG4gICAgICAgICAgICB0aGlzLiQoJyNyZWhlYXJzYWxTdWJIZWFkaW5nJykuaGlkZSgpXG4gICAgICAgICAgICBpZiggdGhpcy5yc3ZwVHlwZSAhPT0gJ1dlZGRpbmcnICkgdGhpcy5yZXNldE1vZGFsKClcbiAgICAgICAgICAgIHRoaXMucnN2cFR5cGUgPSAnV2VkZGluZydcbiAgICAgICAgICAgIHRoaXMubXlNb2RhbC5tb2RhbCgpXG4gICAgICAgIH0gKVxuXG4gICAgICAgIHRoaXMuJCgnI3JlaGVhcnNhbFJTVlAnKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kKCcjbW9kYWxUaXRsZScpLnRleHQoJ1JlaGVhcnNhbCBSU1ZQJylcbiAgICAgICAgICAgIHRoaXMuJCgnI3JlaGVhcnNhbFN1YkhlYWRpbmcnKS5zaG93KClcbiAgICAgICAgICAgIGlmKCB0aGlzLnJzdnBUeXBlICE9PSAnUmVoZWFyc2FsJyApIHRoaXMucmVzZXRNb2RhbCgpXG4gICAgICAgICAgICB0aGlzLnJzdnBUeXBlID0gJ1JlaGVhcnNhbCdcbiAgICAgICAgICAgIHRoaXMubXlNb2RhbC5tb2RhbCgpXG4gICAgICAgIH0gKVxuXG4gICAgICAgIHRoaXMuYXBwbHlSc3ZwQnRuKClcblxuICAgICAgICB0aGlzLmFjY2VwdHMub24oJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY2NlcHRzLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvcicpXG4gICAgICAgICAgICB0aGlzLmRlY2xpbmVzLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvcicpXG4gICAgICAgIH0gKVxuXG4gICAgICAgIHRoaXMuZGVjbGluZXMub24oJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY2NlcHRzLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvcicpXG4gICAgICAgICAgICB0aGlzLmRlY2xpbmVzLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvcicpXG4gICAgICAgIH0gKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5uYW1lcy5vbignZm9jdXMnLCAoKSA9PiB0aGlzLm5hbWVzLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvcicpIClcbiAgICAgICAgdGhpcy5udW1iZXIub24oJ2ZvY3VzJywgKCkgPT4gdGhpcy5udW1iZXIuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yJykgKVxuICAgICAgICB0aGlzLnZlZy5vbignZm9jdXMnLCAoKSA9PiB0aGlzLnZlZy5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKSApXG5cbiAgICAgICAgdGhpcy5zcGlubmVyID0gbmV3IHRoaXMuU3Bpbm5lcigge1xuICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgIGxlbmd0aDogMTUsXG4gICAgICAgICAgICBzY2FsZTogMC4yNSxcbiAgICAgICAgICAgIHdpZHRoOiA1XG4gICAgICAgIH0gKS5zcGluKClcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBvblJzdnAoKSB7XG5cbiAgICAgICAgdGhpcy5lcnJvci5oaWRlKClcblxuICAgICAgICBpZiggISB0aGlzLnZhbGlkYXRlKCkgKSByZXR1cm4gdGhpcy5hcHBseVJzdnBCdG4oKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5yc3ZwQnRuLmFkZENsYXNzKCdoYXMtc3Bpbm5lcicpXG4gICAgICAgIHRoaXMucnN2cEJ0bi5hcHBlbmQoIHRoaXMuc3Bpbm5lci5zcGluKCkuZWwgKVxuXG4gICAgICAgIHRoaXMuJC5hamF4KCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgdXJsOiAnL3JzdnAnLFxuICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KCB7XG4gICAgICAgICAgICAgICAgbmFtZXM6IHRoaXMubmFtZXMudmFsKCksXG4gICAgICAgICAgICAgICAgYWNjZXB0czogdGhpcy5hY2NlcHRzLnByb3AoJ2NoZWNrZWQnKSxcbiAgICAgICAgICAgICAgICBudW1iZXI6IHRoaXMubnVtYmVyLnZhbCgpLFxuICAgICAgICAgICAgICAgIHZlZzogdGhpcy52ZWcudmFsKCksXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5yc3ZwVHlwZVxuICAgICAgICAgICAgfSApLFxuICAgICAgICB9IClcbiAgICAgICAgLmRvbmUoICgpID0+IHRoaXMub25Sc3ZwRG9uZSgpIClcbiAgICAgICAgLmZhaWwoICgpID0+IHRoaXMub25Sc3ZwRmFpbCgpIClcbiAgICAgICAgLmFsd2F5cyggKCkgPT4gdGhpcy5vblJzdnBBbHdheXMoKSApXG4gICAgfSxcblxuICAgIG9uUnN2cEFsd2F5cygpIHtcbiAgICAgICAgdGhpcy5yc3ZwQnRuLnJlbW92ZUNsYXNzKCdoYXMtc3Bpbm5lcicpXG4gICAgICAgIHRoaXMuc3Bpbm5lci5zdG9wKClcbiAgICB9LFxuICAgIFxuICAgIG9uUnN2cERvbmUoKSB7XG4gICAgICAgIHRoaXMuc3VjY2Vzcy5hZGRDbGFzcygnc2xpZGUtcmlnaHQnKS5zaG93KClcbiAgICAgICAgdGhpcy5teU1vZGFsLm9uZSggJ2hpZGRlbi5icy5tb2RhbCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRNb2RhbCgpXG4gICAgICAgICAgICB0aGlzLmFwcGx5UnN2cEJ0bigpXG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3MuaGlkZSgpLnJlbW92ZUNsYXNzKCdzbGlkZS1yaWdodCcpXG4gICAgICAgIH0gKVxuICAgIH0sXG5cbiAgICBvblJzdnBGYWlsKCkge1xuICAgICAgICB0aGlzLmVycm9yLnNob3coKVxuICAgICAgICB0aGlzLmFwcGx5UnN2cEJ0bigpXG4gICAgfSxcblxuICAgIHJlc2V0TW9kYWwoKSB7XG4gICAgICAgIHRoaXMubmFtZXMudmFsKCcnKS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKVxuICAgICAgICB0aGlzLmFjY2VwdHMucHJvcCggJ2NoZWNrZWQnLCBmYWxzZSApLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvcicpXG4gICAgICAgIHRoaXMuZGVjbGluZXMucHJvcCggJ2NoZWNrZWQnLCBmYWxzZSApLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvcicpXG4gICAgICAgIHRoaXMubnVtYmVyLnZhbCgnJykuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yJylcbiAgICAgICAgdGhpcy52ZWcudmFsKCcnKS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKVxuICAgIH0sXG5cbiAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgdmFyIGRlY2xpbmVkID0gdGhpcy5kZWNsaW5lcy5wcm9wKCdjaGVja2VkJylcblxuICAgICAgICBpZiggISB0aGlzLiQudHJpbSggdGhpcy5uYW1lcy52YWwoKSApICkgeyB0aGlzLm5hbWVzLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykuYWRkQ2xhc3MoJ2hhcy1lcnJvcicpOyByZXR1cm4gZmFsc2UgfVxuICAgICAgICBpZiggdGhpcy5hY2NlcHRzLnByb3AoJ2NoZWNrZWQnKSA9PT0gZmFsc2UgJiYgZGVjbGluZWQgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgdGhpcy5hY2NlcHRzLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykuYWRkQ2xhc3MoJ2hhcy1lcnJvcicpXG4gICAgICAgICAgICB0aGlzLmRlY2xpbmVzLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykuYWRkQ2xhc3MoJ2hhcy1lcnJvcicpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBpZiggIWRlY2xpbmVkICYmIGlzTmFOKCBwYXJzZUludCggdGhpcy5udW1iZXIudmFsKCkgKSApICkgeyB0aGlzLm51bWJlci5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLmFkZENsYXNzKCdoYXMtZXJyb3InKTsgcmV0dXJuIGZhbHNlIH1cbiAgICAgICAgaWYoICFkZWNsaW5lZCAmJiBpc05hTiggcGFyc2VJbnQoIHRoaXMudmVnLnZhbCgpICkgKSApIHsgdGhpcy52ZWcudmFsKCcnKS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLmFkZENsYXNzKCdoYXMtZXJyb3InKTsgcmV0dXJuIGZhbHNlIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbn0gKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhZ2VcbiJdfQ==
