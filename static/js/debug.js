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
            _this2.$('#myModal').modal();
        });

        this.$('#rehearsalRSVP').on('click', function () {
            _this2.$('#modalTitle').text('Rehearsal RSVP');
            if (_this2.rsvpType !== 'Rehearsal') _this2.resetModal();
            _this2.rsvpType = 'Rehearsal';
            _this2.$('#myModal').modal();
        });

        this.applyRsvpBtn();

        this.names.on('focus', function () {
            return _this2.names.closest('.form-group').removeClass('has-error');
        });
        this.accepts.on('focus', function () {
            return _this2.accepts.closest('.form-group').removeClass('has-error');
        });
        this.declines.on('focus', function () {
            return _this2.declines.closest('.form-group').removeClass('has-error');
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

        this.$.post('/rsvp', JSON.stringify({
            names: this.names.val(),
            accepts: this.accepts.prop('checked'),
            number: this.number.val(),
            veg: this.veg.val(),
            type: this.rsvpType
        })).done(function () {
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
        this.success.addClass('slide-down');
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
        if (!this.$.trim(this.names.val())) {
            this.names.closest('.form-group').addClass('has-error');return false;
        }
        if (this.accepts.prop('checked') === false && this.declines.prop('checked') === false) {
            this.accepts.closest('.form-group').addClass('has-error');
            this.declines.closest('.form-group').addClass('has-error');
            return false;
        }
        if (isNaN(parseInt(this.number.val()))) {
            this.number.closest('.form-group').addClass('has-error');return false;
        }
        if (isNaN(parseInt(this.veg.val()))) {
            this.veg.val('').closest('.form-group').addClass('has-error');return false;
        }
        return true;
    }
});

module.exports = Page;

},{"../spin":3,"jquery":"jquery"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvanMvbWFpbi5qcyIsImNsaWVudC9qcy9yb3V0ZXIuanMiLCJjbGllbnQvanMvc3Bpbi5qcyIsImNsaWVudC9qcy92aWV3cy9QYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLElBQUksUUFBUSxRQUFSLENBQUo7SUFDQSxTQUFTLFFBQVEsVUFBUixDQUFUOztBQUVKLE9BQU8sQ0FBUCxHQUFXLE9BQU8sTUFBUCxHQUFnQixDQUFoQjs7QUFFWCxRQUFRLFdBQVI7O0FBRUEsRUFBRyxZQUFNO0FBQ0wsWUFBUSxVQUFSLEVBQW9CLE9BQXBCLENBQTRCLEtBQTVCLENBQW1DLEVBQUUsV0FBVyxJQUFYLEVBQXJDLEVBREs7Q0FBTixDQUFIOzs7OztBQ1BBLE9BQU8sT0FBUCxHQUFpQixLQUNiLFFBQVEsVUFBUixFQUFvQixNQUFwQixDQUEyQixNQUEzQixDQUFtQzs7QUFFL0IsVUFBTSxRQUFRLGNBQVIsQ0FBTjs7QUFFQSxnQ0FBVTtBQUFFLFlBQUksS0FBSyxJQUFMLEVBQUosQ0FBRjtLQUpxQjs7O0FBTS9CLFlBQVE7QUFDSixjQUFNLFNBQU47S0FESjs7Q0FOSixFQURhLEVBQWpCOzs7Ozs7OztBQ0NBLENBQUMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsc0JBQWlCLHVEQUFqQixJQUF5QixPQUFPLE9BQVAsR0FBZSxPQUFPLE9BQVAsR0FBZSxHQUFmLEdBQW1CLGNBQVksT0FBTyxNQUFQLElBQWUsT0FBTyxHQUFQLEdBQVcsT0FBTyxDQUFQLENBQXRDLEdBQWdELEVBQUUsT0FBRixHQUFVLEdBQVYsQ0FBNUc7Q0FBYixZQUE2SSxZQUFVO0FBQUMsZUFBRDtBQUFjLFdBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxRQUFJLENBQUo7UUFBTSxJQUFFLFNBQVMsYUFBVCxDQUF1QixLQUFHLEtBQUgsQ0FB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QVgsRUFBYixDQUFGLEVBQW9DO0FBQUUsaUJBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsYUFBbkIsRUFBa0MsUUFBbEMsQ0FBMkMsV0FBM0MsRUFBRixPQUFrRSxLQUFQLENBQTNEO1NBQXhDO0FBQ0EsWUFBSSxLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLFNBQWxCLE1BQWlDLEtBQWpDLElBQTBDLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsU0FBbkIsTUFBa0MsS0FBbEMsRUFBMEM7QUFDcEYsaUJBQUssT0FBTCxDQUFhLE9BQWIsQ0FBcUIsYUFBckIsRUFBb0MsUUFBcEMsQ0FBNkMsV0FBN0MsRUFEb0Y7QUFFcEYsaUJBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsYUFBdEIsRUFBcUMsUUFBckMsQ0FBOEMsV0FBOUMsRUFGb0Y7QUFHcEYsbUJBQU8sS0FBUCxDQUhvRjtTQUF4RjtBQUtBLFlBQUksTUFBTyxTQUFVLEtBQUssTUFBTCxDQUFZLEdBQVosRUFBVixDQUFQLENBQUosRUFBNkM7QUFBRSxpQkFBSyxNQUFMLENBQVksT0FBWixDQUFvQixhQUFwQixFQUFtQyxRQUFuQyxDQUE0QyxXQUE1QyxFQUFGLE9BQW1FLEtBQVAsQ0FBNUQ7U0FBN0M7QUFDQSxZQUFJLE1BQU8sU0FBVSxLQUFLLEdBQUwsQ0FBUyxHQUFULEVBQVYsQ0FBUCxDQUFKLEVBQTBDO0FBQUUsaUJBQUssR0FBTCxDQUFTLEdBQVQsQ0FBYSxFQUFiLEVBQWlCLE9BQWpCLENBQXlCLGFBQXpCLEVBQXdDLFFBQXhDLENBQWlELFdBQWpELEVBQUYsT0FBd0UsS0FBUCxDQUFqRTtTQUExQztBQUNBLGVBQU8sSUFBUCxDQVRPO0tBNUhnQjtDQUEvQjs7QUEwSUEsT0FBTyxPQUFQLEdBQWlCLElBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgcm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXInKTtcblxud2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gJFxuXG5yZXF1aXJlKCdib290c3RyYXAnKVxuXG4kKCAoKSA9PiB7XG4gICAgcmVxdWlyZSgnYmFja2JvbmUnKS5oaXN0b3J5LnN0YXJ0KCB7IHB1c2hTdGF0ZTogdHJ1ZSB9IClcbn0gKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBuZXcgKFxuICAgIHJlcXVpcmUoJ2JhY2tib25lJykuUm91dGVyLmV4dGVuZCgge1xuXG4gICAgICAgIFBhZ2U6IHJlcXVpcmUoJy4vdmlld3MvUGFnZScpLFxuXG4gICAgICAgIGhhbmRsZXIoKSB7IG5ldyB0aGlzLlBhZ2UoKSB9LFxuXG4gICAgICAgIHJvdXRlczoge1xuICAgICAgICAgICAgJy4qJzogJ2hhbmRsZXInLFxuICAgICAgICB9XG5cbiAgICB9IClcbikoKVxuIiwiLy8gaHR0cDovL3NwaW4uanMub3JnLyN2Mi4zLjJcbiFmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWIoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGIpOmEuU3Bpbm5lcj1iKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBhKGEsYil7dmFyIGMsZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KGF8fFwiZGl2XCIpO2ZvcihjIGluIGIpZFtjXT1iW2NdO3JldHVybiBkfWZ1bmN0aW9uIGIoYSl7Zm9yKHZhciBiPTEsYz1hcmd1bWVudHMubGVuZ3RoO2M+YjtiKyspYS5hcHBlbmRDaGlsZChhcmd1bWVudHNbYl0pO3JldHVybiBhfWZ1bmN0aW9uIGMoYSxiLGMsZCl7dmFyIGU9W1wib3BhY2l0eVwiLGIsfn4oMTAwKmEpLGMsZF0uam9pbihcIi1cIiksZj0uMDErYy9kKjEwMCxnPU1hdGgubWF4KDEtKDEtYSkvYiooMTAwLWYpLGEpLGg9ai5zdWJzdHJpbmcoMCxqLmluZGV4T2YoXCJBbmltYXRpb25cIikpLnRvTG93ZXJDYXNlKCksaT1oJiZcIi1cIitoK1wiLVwifHxcIlwiO3JldHVybiBtW2VdfHwoay5pbnNlcnRSdWxlKFwiQFwiK2krXCJrZXlmcmFtZXMgXCIrZStcInswJXtvcGFjaXR5OlwiK2crXCJ9XCIrZitcIiV7b3BhY2l0eTpcIithK1wifVwiKyhmKy4wMSkrXCIle29wYWNpdHk6MX1cIisoZitiKSUxMDArXCIle29wYWNpdHk6XCIrYStcIn0xMDAle29wYWNpdHk6XCIrZytcIn19XCIsay5jc3NSdWxlcy5sZW5ndGgpLG1bZV09MSksZX1mdW5jdGlvbiBkKGEsYil7dmFyIGMsZCxlPWEuc3R5bGU7aWYoYj1iLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Iuc2xpY2UoMSksdm9pZCAwIT09ZVtiXSlyZXR1cm4gYjtmb3IoZD0wO2Q8bC5sZW5ndGg7ZCsrKWlmKGM9bFtkXStiLHZvaWQgMCE9PWVbY10pcmV0dXJuIGN9ZnVuY3Rpb24gZShhLGIpe2Zvcih2YXIgYyBpbiBiKWEuc3R5bGVbZChhLGMpfHxjXT1iW2NdO3JldHVybiBhfWZ1bmN0aW9uIGYoYSl7Zm9yKHZhciBiPTE7Yjxhcmd1bWVudHMubGVuZ3RoO2IrKyl7dmFyIGM9YXJndW1lbnRzW2JdO2Zvcih2YXIgZCBpbiBjKXZvaWQgMD09PWFbZF0mJihhW2RdPWNbZF0pfXJldHVybiBhfWZ1bmN0aW9uIGcoYSxiKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYT9hOmFbYiVhLmxlbmd0aF19ZnVuY3Rpb24gaChhKXt0aGlzLm9wdHM9ZihhfHx7fSxoLmRlZmF1bHRzLG4pfWZ1bmN0aW9uIGkoKXtmdW5jdGlvbiBjKGIsYyl7cmV0dXJuIGEoXCI8XCIrYisnIHhtbG5zPVwidXJuOnNjaGVtYXMtbWljcm9zb2Z0LmNvbTp2bWxcIiBjbGFzcz1cInNwaW4tdm1sXCI+JyxjKX1rLmFkZFJ1bGUoXCIuc3Bpbi12bWxcIixcImJlaGF2aW9yOnVybCgjZGVmYXVsdCNWTUwpXCIpLGgucHJvdG90eXBlLmxpbmVzPWZ1bmN0aW9uKGEsZCl7ZnVuY3Rpb24gZigpe3JldHVybiBlKGMoXCJncm91cFwiLHtjb29yZHNpemU6aytcIiBcIitrLGNvb3Jkb3JpZ2luOi1qK1wiIFwiKy1qfSkse3dpZHRoOmssaGVpZ2h0Omt9KX1mdW5jdGlvbiBoKGEsaCxpKXtiKG0sYihlKGYoKSx7cm90YXRpb246MzYwL2QubGluZXMqYStcImRlZ1wiLGxlZnQ6fn5ofSksYihlKGMoXCJyb3VuZHJlY3RcIix7YXJjc2l6ZTpkLmNvcm5lcnN9KSx7d2lkdGg6aixoZWlnaHQ6ZC5zY2FsZSpkLndpZHRoLGxlZnQ6ZC5zY2FsZSpkLnJhZGl1cyx0b3A6LWQuc2NhbGUqZC53aWR0aD4+MSxmaWx0ZXI6aX0pLGMoXCJmaWxsXCIse2NvbG9yOmcoZC5jb2xvcixhKSxvcGFjaXR5OmQub3BhY2l0eX0pLGMoXCJzdHJva2VcIix7b3BhY2l0eTowfSkpKSl9dmFyIGksaj1kLnNjYWxlKihkLmxlbmd0aCtkLndpZHRoKSxrPTIqZC5zY2FsZSpqLGw9LShkLndpZHRoK2QubGVuZ3RoKSpkLnNjYWxlKjIrXCJweFwiLG09ZShmKCkse3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6bCxsZWZ0Omx9KTtpZihkLnNoYWRvdylmb3IoaT0xO2k8PWQubGluZXM7aSsrKWgoaSwtMixcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CbHVyKHBpeGVscmFkaXVzPTIsbWFrZXNoYWRvdz0xLHNoYWRvd29wYWNpdHk9LjMpXCIpO2ZvcihpPTE7aTw9ZC5saW5lcztpKyspaChpKTtyZXR1cm4gYihhLG0pfSxoLnByb3RvdHlwZS5vcGFjaXR5PWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWEuZmlyc3RDaGlsZDtkPWQuc2hhZG93JiZkLmxpbmVzfHwwLGUmJmIrZDxlLmNoaWxkTm9kZXMubGVuZ3RoJiYoZT1lLmNoaWxkTm9kZXNbYitkXSxlPWUmJmUuZmlyc3RDaGlsZCxlPWUmJmUuZmlyc3RDaGlsZCxlJiYoZS5vcGFjaXR5PWMpKX19dmFyIGosayxsPVtcIndlYmtpdFwiLFwiTW96XCIsXCJtc1wiLFwiT1wiXSxtPXt9LG49e2xpbmVzOjEyLGxlbmd0aDo3LHdpZHRoOjUscmFkaXVzOjEwLHNjYWxlOjEsY29ybmVyczoxLGNvbG9yOlwiIzAwMFwiLG9wYWNpdHk6LjI1LHJvdGF0ZTowLGRpcmVjdGlvbjoxLHNwZWVkOjEsdHJhaWw6MTAwLGZwczoyMCx6SW5kZXg6MmU5LGNsYXNzTmFtZTpcInNwaW5uZXJcIix0b3A6XCI1MCVcIixsZWZ0OlwiNTAlXCIsc2hhZG93OiExLGh3YWNjZWw6ITEscG9zaXRpb246XCJhYnNvbHV0ZVwifTtpZihoLmRlZmF1bHRzPXt9LGYoaC5wcm90b3R5cGUse3NwaW46ZnVuY3Rpb24oYil7dGhpcy5zdG9wKCk7dmFyIGM9dGhpcyxkPWMub3B0cyxmPWMuZWw9YShudWxsLHtjbGFzc05hbWU6ZC5jbGFzc05hbWV9KTtpZihlKGYse3Bvc2l0aW9uOmQucG9zaXRpb24sd2lkdGg6MCx6SW5kZXg6ZC56SW5kZXgsbGVmdDpkLmxlZnQsdG9wOmQudG9wfSksYiYmYi5pbnNlcnRCZWZvcmUoZixiLmZpcnN0Q2hpbGR8fG51bGwpLGYuc2V0QXR0cmlidXRlKFwicm9sZVwiLFwicHJvZ3Jlc3NiYXJcIiksYy5saW5lcyhmLGMub3B0cyksIWope3ZhciBnLGg9MCxpPShkLmxpbmVzLTEpKigxLWQuZGlyZWN0aW9uKS8yLGs9ZC5mcHMsbD1rL2Quc3BlZWQsbT0oMS1kLm9wYWNpdHkpLyhsKmQudHJhaWwvMTAwKSxuPWwvZC5saW5lczshZnVuY3Rpb24gbygpe2grKztmb3IodmFyIGE9MDthPGQubGluZXM7YSsrKWc9TWF0aC5tYXgoMS0oaCsoZC5saW5lcy1hKSpuKSVsKm0sZC5vcGFjaXR5KSxjLm9wYWNpdHkoZixhKmQuZGlyZWN0aW9uK2ksZyxkKTtjLnRpbWVvdXQ9Yy5lbCYmc2V0VGltZW91dChvLH5+KDFlMy9rKSl9KCl9cmV0dXJuIGN9LHN0b3A6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmVsO3JldHVybiBhJiYoY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCksYS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYSksdGhpcy5lbD12b2lkIDApLHRoaXN9LGxpbmVzOmZ1bmN0aW9uKGQsZil7ZnVuY3Rpb24gaChiLGMpe3JldHVybiBlKGEoKSx7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHdpZHRoOmYuc2NhbGUqKGYubGVuZ3RoK2Yud2lkdGgpK1wicHhcIixoZWlnaHQ6Zi5zY2FsZSpmLndpZHRoK1wicHhcIixiYWNrZ3JvdW5kOmIsYm94U2hhZG93OmMsdHJhbnNmb3JtT3JpZ2luOlwibGVmdFwiLHRyYW5zZm9ybTpcInJvdGF0ZShcIit+figzNjAvZi5saW5lcyprK2Yucm90YXRlKStcImRlZykgdHJhbnNsYXRlKFwiK2Yuc2NhbGUqZi5yYWRpdXMrXCJweCwwKVwiLGJvcmRlclJhZGl1czooZi5jb3JuZXJzKmYuc2NhbGUqZi53aWR0aD4+MSkrXCJweFwifSl9Zm9yKHZhciBpLGs9MCxsPShmLmxpbmVzLTEpKigxLWYuZGlyZWN0aW9uKS8yO2s8Zi5saW5lcztrKyspaT1lKGEoKSx7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDoxK34oZi5zY2FsZSpmLndpZHRoLzIpK1wicHhcIix0cmFuc2Zvcm06Zi5od2FjY2VsP1widHJhbnNsYXRlM2QoMCwwLDApXCI6XCJcIixvcGFjaXR5OmYub3BhY2l0eSxhbmltYXRpb246aiYmYyhmLm9wYWNpdHksZi50cmFpbCxsK2sqZi5kaXJlY3Rpb24sZi5saW5lcykrXCIgXCIrMS9mLnNwZWVkK1wicyBsaW5lYXIgaW5maW5pdGVcIn0pLGYuc2hhZG93JiZiKGksZShoKFwiIzAwMFwiLFwiMCAwIDRweCAjMDAwXCIpLHt0b3A6XCIycHhcIn0pKSxiKGQsYihpLGgoZyhmLmNvbG9yLGspLFwiMCAwIDFweCByZ2JhKDAsMCwwLC4xKVwiKSkpO3JldHVybiBkfSxvcGFjaXR5OmZ1bmN0aW9uKGEsYixjKXtiPGEuY2hpbGROb2Rlcy5sZW5ndGgmJihhLmNoaWxkTm9kZXNbYl0uc3R5bGUub3BhY2l0eT1jKX19KSxcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQpe2s9ZnVuY3Rpb24oKXt2YXIgYz1hKFwic3R5bGVcIix7dHlwZTpcInRleHQvY3NzXCJ9KTtyZXR1cm4gYihkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0sYyksYy5zaGVldHx8Yy5zdHlsZVNoZWV0fSgpO3ZhciBvPWUoYShcImdyb3VwXCIpLHtiZWhhdmlvcjpcInVybCgjZGVmYXVsdCNWTUwpXCJ9KTshZChvLFwidHJhbnNmb3JtXCIpJiZvLmFkaj9pKCk6aj1kKG8sXCJhbmltYXRpb25cIil9cmV0dXJuIGh9KTsiLCJ2YXIgUGFnZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5pbml0aWFsaXplKCkgfVxuXG5PYmplY3QuYXNzaWduKCBQYWdlLnByb3RvdHlwZSwge1xuXG4gICAgJDogcmVxdWlyZSgnanF1ZXJ5JyksXG5cbiAgICBTcGlubmVyOiByZXF1aXJlKCcuLi9zcGluJyksXG5cbiAgICBhcHBseVJzdnBCdG4oKSB7IHRoaXMucnN2cEJ0bi5vbmUoICdjbGljaycsICgpID0+IHRoaXMub25Sc3ZwKCkgKSB9LFxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICB0aGlzLmJvZHkgPSB0aGlzLiQoJ2JvZHknKVxuICAgICAgICB0aGlzLmNvbnRlbnQgPSB7IH1cbiAgICAgICAgdGhpcy5uYW1lcyA9IHRoaXMuJCgnI25hbWVzJylcbiAgICAgICAgdGhpcy5hY2NlcHRzID0gdGhpcy4kKCcjYWNjZXB0cycpLm9uKCAnY2xpY2snLCAoKSA9PiB0aGlzLmRlY2xpbmVzLnByb3AoICdjaGVja2VkJywgZmFsc2UgKSApXG4gICAgICAgIHRoaXMuZGVjbGluZXMgPSB0aGlzLiQoJyNkZWNsaW5lcycpLm9uKCAnY2xpY2snLCAoKSA9PiB0aGlzLmFjY2VwdHMucHJvcCggJ2NoZWNrZWQnLCBmYWxzZSApIClcbiAgICAgICAgdGhpcy5udW1iZXIgPSB0aGlzLiQoJyNudW1iZXInKVxuICAgICAgICB0aGlzLnZlZyA9IHRoaXMuJCgnI3ZlZycpXG5cbiAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMuJCgnI2Vycm9yJylcbiAgICAgICAgdGhpcy5yc3ZwQnRuID0gdGhpcy4kKCcjcnN2cEJ0bicpXG4gICAgICAgIHRoaXMucnN2cFR5cGUgPSB1bmRlZmluZWRcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gdGhpcy4kKCcjc3VjY2VzcycpXG5cbiAgICAgICAgdGhpcy5ib2R5LmNoaWxkcmVuKCdkaXYnKS5lYWNoKCAoIGksIGVsICkgPT4geyB2YXIgJGVsID0gdGhpcy4kKGVsKTsgdGhpcy5jb250ZW50WyAkZWwuZGF0YSgnY29udGVudCcpIF0gPSAkZWwgfSApXG5cbiAgICAgICAgdGhpcy5ib2R5LmZpbmQoJ25hdiB1bCBsaScgKS5lYWNoKCAoIGksIGVsICkgPT4ge1xuICAgICAgICAgICAgdmFyICRlbCA9IHRoaXMuJChlbClcbiAgICAgICAgICAgICRlbC5vbiggJ2NsaWNrJywgKCkgPT4gdGhpcy5ib2R5LmFuaW1hdGUoIHsgc2Nyb2xsVG9wOiB0aGlzLmNvbnRlbnRbICRlbC5hdHRyKCdkYXRhLW5hdicpIF0ucG9zaXRpb24oKS50b3AgfSwgMTAwMCApIClcbiAgICAgICAgfSApIFxuXG4gICAgICAgIHRoaXMuYm9keS5maW5kKCdbZGF0YS1qcz1cInJlaGVhcnNhbExpbmtcIl0nKS5jbGljayggKCkgPT4gdGhpcy5ib2R5LmFuaW1hdGUoIHsgc2Nyb2xsVG9wOiB0aGlzLmNvbnRlbnQucmVoZWFyc2FsLnBvc2l0aW9uKCkudG9wIH0sIDEwMDAgKSApXG5cbiAgICAgICAgdGhpcy4kKCcjbW9iaWxlLW1lbnUnKS5jbGljayggZSA9PiB7XG4gICAgICAgICAgICB0aGlzLiQoJyNuYXYtbGlzdCcpLmNzcyggeyBkaXNwbGF5OiAnYmxvY2snIH0gKVxuICAgICAgICAgICAgdGhpcy4kKCcjbW9iaWxlLW1lbnUnKS5jc3MoIHsgZGlzcGxheTogJ25vbmUnIH0gKVxuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgdGhpcy4kKCBkb2N1bWVudCApLm9uKCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kKCcjbW9iaWxlLW1lbnUnKS5jc3MoIHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfSApXG4gICAgICAgICAgICAgICAgdGhpcy4kKCcjbmF2LWxpc3QnKS5jc3MoIHsgZGlzcGxheTogJ25vbmUnIH0gKVxuICAgICAgICAgICAgfSApXG4gICAgICAgIH0gKVxuXG4gICAgICAgIGlmKCB0aGlzLiQod2luZG93KS53aWR0aCgpIDw9IDc4NSApIHtcbiAgICAgICAgICAgIHRoaXMuJCgnaWZyYW1lJykuYXR0ciggeyBzcmM6IHRoaXMuJCgnaWZyYW1lJykuYXR0cignc3JjJykuc2xpY2UoIDAsIC0xICkgKyAnMycgfSApXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiQoJyN3ZWRkaW5nUlNWUCcpLm9uKCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiQoJyNtb2RhbFRpdGxlJykudGV4dCgnV2VkZGluZyBSU1ZQJylcbiAgICAgICAgICAgIGlmKCB0aGlzLnJzdnBUeXBlICE9PSAnV2VkZGluZycgKSB0aGlzLnJlc2V0TW9kYWwoKVxuICAgICAgICAgICAgdGhpcy5yc3ZwVHlwZSA9ICdXZWRkaW5nJ1xuICAgICAgICAgICAgdGhpcy4kKCcjbXlNb2RhbCcpLm1vZGFsKClcbiAgICAgICAgfSApXG5cbiAgICAgICAgdGhpcy4kKCcjcmVoZWFyc2FsUlNWUCcpLm9uKCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiQoJyNtb2RhbFRpdGxlJykudGV4dCgnUmVoZWFyc2FsIFJTVlAnKVxuICAgICAgICAgICAgaWYoIHRoaXMucnN2cFR5cGUgIT09ICdSZWhlYXJzYWwnICkgdGhpcy5yZXNldE1vZGFsKClcbiAgICAgICAgICAgIHRoaXMucnN2cFR5cGUgPSAnUmVoZWFyc2FsJ1xuICAgICAgICAgICAgdGhpcy4kKCcjbXlNb2RhbCcpLm1vZGFsKClcbiAgICAgICAgfSApXG5cbiAgICAgICAgdGhpcy5hcHBseVJzdnBCdG4oKVxuXG4gICAgICAgIHRoaXMubmFtZXMub24oJ2ZvY3VzJywgKCkgPT4gdGhpcy5uYW1lcy5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKSApXG4gICAgICAgIHRoaXMuYWNjZXB0cy5vbignZm9jdXMnLCAoKSA9PiB0aGlzLmFjY2VwdHMuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yJykgKVxuICAgICAgICB0aGlzLmRlY2xpbmVzLm9uKCdmb2N1cycsICgpID0+IHRoaXMuZGVjbGluZXMuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yJykgKVxuICAgICAgICB0aGlzLm51bWJlci5vbignZm9jdXMnLCAoKSA9PiB0aGlzLm51bWJlci5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKSApXG4gICAgICAgIHRoaXMudmVnLm9uKCdmb2N1cycsICgpID0+IHRoaXMudmVnLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvcicpIClcblxuICAgICAgICB0aGlzLnNwaW5uZXIgPSBuZXcgdGhpcy5TcGlubmVyKCB7XG4gICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgbGVuZ3RoOiAxNSxcbiAgICAgICAgICAgIHNjYWxlOiAwLjI1LFxuICAgICAgICAgICAgd2lkdGg6IDVcbiAgICAgICAgfSApLnNwaW4oKVxuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIG9uUnN2cCgpIHtcblxuICAgICAgICB0aGlzLmVycm9yLmhpZGUoKVxuXG4gICAgICAgIGlmKCAhIHRoaXMudmFsaWRhdGUoKSApIHJldHVybiB0aGlzLmFwcGx5UnN2cEJ0bigpXG4gICAgICAgIFxuICAgICAgICB0aGlzLnJzdnBCdG4uYWRkQ2xhc3MoJ2hhcy1zcGlubmVyJylcbiAgICAgICAgdGhpcy5yc3ZwQnRuLmFwcGVuZCggdGhpcy5zcGlubmVyLnNwaW4oKS5lbCApXG5cbiAgICAgICAgdGhpcy4kLnBvc3QoXG4gICAgICAgICAgICAnL3JzdnAnLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoIHtcbiAgICAgICAgICAgICAgICBuYW1lczogdGhpcy5uYW1lcy52YWwoKSxcbiAgICAgICAgICAgICAgICBhY2NlcHRzOiB0aGlzLmFjY2VwdHMucHJvcCgnY2hlY2tlZCcpLFxuICAgICAgICAgICAgICAgIG51bWJlcjogdGhpcy5udW1iZXIudmFsKCksXG4gICAgICAgICAgICAgICAgdmVnOiB0aGlzLnZlZy52YWwoKSxcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLnJzdnBUeXBlXG4gICAgICAgICAgICB9IClcbiAgICAgICAgKVxuICAgICAgICAuZG9uZSggKCkgPT4gdGhpcy5vblJzdnBEb25lKCkgKVxuICAgICAgICAuZmFpbCggKCkgPT4gdGhpcy5vblJzdnBGYWlsKCkgKVxuICAgICAgICAuYWx3YXlzKCAoKSA9PiB0aGlzLm9uUnN2cEFsd2F5cygpIClcbiAgICB9LFxuXG4gICAgb25Sc3ZwQWx3YXlzKCkge1xuICAgICAgICB0aGlzLnJzdnBCdG4ucmVtb3ZlQ2xhc3MoJ2hhcy1zcGlubmVyJylcbiAgICAgICAgdGhpcy5zcGlubmVyLnN0b3AoKVxuICAgIH0sXG4gICAgXG4gICAgb25Sc3ZwRG9uZSgpIHtcbiAgICAgICAgdGhpcy5zdWNjZXNzLmFkZENsYXNzKCdzbGlkZS1kb3duJylcbiAgICB9LFxuXG4gICAgb25Sc3ZwRmFpbCgpIHtcbiAgICAgICAgdGhpcy5lcnJvci5zaG93KClcbiAgICAgICAgdGhpcy5hcHBseVJzdnBCdG4oKVxuICAgIH0sXG5cbiAgICByZXNldE1vZGFsKCkge1xuICAgICAgICB0aGlzLm5hbWVzLnZhbCgnJykuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yJylcbiAgICAgICAgdGhpcy5hY2NlcHRzLnByb3AoICdjaGVja2VkJywgZmFsc2UgKS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKVxuICAgICAgICB0aGlzLmRlY2xpbmVzLnByb3AoICdjaGVja2VkJywgZmFsc2UgKS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKVxuICAgICAgICB0aGlzLm51bWJlci52YWwoJycpLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvcicpXG4gICAgICAgIHRoaXMudmVnLnZhbCgnJykuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yJylcbiAgICB9LFxuXG4gICAgdmFsaWRhdGUoKSB7XG4gICAgICAgIGlmKCAhIHRoaXMuJC50cmltKCB0aGlzLm5hbWVzLnZhbCgpICkgKSB7IHRoaXMubmFtZXMuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5hZGRDbGFzcygnaGFzLWVycm9yJyk7IHJldHVybiBmYWxzZSB9XG4gICAgICAgIGlmKCB0aGlzLmFjY2VwdHMucHJvcCgnY2hlY2tlZCcpID09PSBmYWxzZSAmJiB0aGlzLmRlY2xpbmVzLnByb3AoJ2NoZWNrZWQnKSA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICB0aGlzLmFjY2VwdHMuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5hZGRDbGFzcygnaGFzLWVycm9yJylcbiAgICAgICAgICAgIHRoaXMuZGVjbGluZXMuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5hZGRDbGFzcygnaGFzLWVycm9yJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGlmKCBpc05hTiggcGFyc2VJbnQoIHRoaXMubnVtYmVyLnZhbCgpICkgKSApIHsgdGhpcy5udW1iZXIuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5hZGRDbGFzcygnaGFzLWVycm9yJyk7IHJldHVybiBmYWxzZSB9XG4gICAgICAgIGlmKCBpc05hTiggcGFyc2VJbnQoIHRoaXMudmVnLnZhbCgpICkgKSApIHsgdGhpcy52ZWcudmFsKCcnKS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLmFkZENsYXNzKCdoYXMtZXJyb3InKTsgcmV0dXJuIGZhbHNlIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbn0gKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhZ2VcbiJdfQ==
