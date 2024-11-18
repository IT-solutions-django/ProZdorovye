function c(s) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? c = function(e) {
        return typeof e
    }
    : c = function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ,
    c(s)
}
var N = (typeof HTMLElement > "u" ? "undefined" : c(HTMLElement)) === "object"
  , B = typeof ShadowRoot < "u";
function O(s) {
    return B && s instanceof ShadowRoot ? !0 : N ? s instanceof HTMLElement : s && c(s) === "object" && s !== null && s.nodeType === 1 && typeof s.nodeName == "string"
}
function o(s, t) {
    t.forEach(function(e) {
        s.classList.add(e)
    })
}
function u(s, t) {
    t.forEach(function(e) {
        s.classList.remove(e)
    })
}
var W = "@keyframes lum-noop{0%{zoom:1}}.lum-lightbox{position:fixed;display:none;top:0;right:0;bottom:0;left:0}.lum-lightbox.lum-open{display:block}.lum-lightbox.lum-closing,.lum-lightbox.lum-opening{animation:lum-noop 1ms}.lum-lightbox-inner{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.lum-lightbox-loader{display:none}.lum-lightbox-inner img{max-width:100%;max-height:100%}.lum-lightbox-image-wrapper{vertical-align:middle;display:table-cell;text-align:center}";
function A(s) {
    if ((!s || s === document) && (s = document.head),
    !s.querySelector(".lum-base-styles")) {
        var t = document.createElement("style");
        t.type = "text/css",
        t.classList.add("lum-base-styles"),
        t.appendChild(document.createTextNode(W)),
        s.insertBefore(t, s.firstChild)
    }
}
function L() {
    throw new Error("Missing parameter")
}
function v(s) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? v = function(e) {
        return typeof e
    }
    : v = function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ,
    v(s)
}
function $(s, t) {
    if (!(s instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function R(s, t) {
    for (var e = 0; e < t.length; e++) {
        var i = t[e];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        "value"in i && (i.writable = !0),
        Object.defineProperty(s, i.key, i)
    }
}
function H(s, t, e) {
    return t && R(s.prototype, t),
    s
}
var P = 37
  , z = 39
  , S = typeof document > "u" ? !1 : "animation"in document.createElement("div").style
  , K = function() {
    function s() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        $(this, s),
        this._sizeImgWrapperEl = this._sizeImgWrapperEl.bind(this),
        this.showNext = this.showNext.bind(this),
        this.showPrevious = this.showPrevious.bind(this),
        this._completeOpen = this._completeOpen.bind(this),
        this._completeClose = this._completeClose.bind(this),
        this._handleKeydown = this._handleKeydown.bind(this),
        this._handleClose = this._handleClose.bind(this);
        var e = t.namespace
          , i = e === void 0 ? null : e
          , n = t.parentEl
          , l = n === void 0 ? L() : n
          , g = t.triggerEl
          , _ = g === void 0 ? L() : g
          , p = t.sourceAttribute
          , E = p === void 0 ? L() : p
          , d = t.caption
          , b = d === void 0 ? null : d
          , r = t.includeImgixJSClass
          , C = r === void 0 ? !1 : r
          , f = t._gallery
          , w = f === void 0 ? null : f
          , m = t._arrowNavigation
          , x = m === void 0 ? null : m
          , y = t.closeButtonEnabled
          , T = y === void 0 ? !0 : y
          , h = t.closeTrigger
          , I = h === void 0 ? "click" : h;
        if (this.settings = {
            namespace: i,
            parentEl: l,
            triggerEl: _,
            sourceAttribute: E,
            caption: b,
            includeImgixJSClass: C,
            _gallery: w,
            _arrowNavigation: x,
            closeButtonEnabled: T,
            onClose: t.onClose,
            closeTrigger: I
        },
        !O(this.settings.parentEl))
            throw new TypeError("`new Lightbox` requires a DOM element passed as `parentEl`.");
        this.currentTrigger = this.settings.triggerEl,
        this.openClasses = this._buildClasses("open"),
        this.openingClasses = this._buildClasses("opening"),
        this.closingClasses = this._buildClasses("closing"),
        this.hasBeenLoaded = !1,
        this.elementBuilt = !1
    }
    return H(s, [{
        key: "_handleClose",
        value: function(e) {
            e && typeof e.preventDefault == "function" && e.preventDefault();
            var i = this.settings.onClose;
            i && typeof i == "function" && i()
        }
    }, {
        key: "_bindEventListeners",
        value: function() {
            this.el.addEventListener(this.settings.closeTrigger, this._handleClose),
            this.closeButtonEl && this.closeButtonEl.addEventListener("click", this._handleClose)
        }
    }, {
        key: "_buildClasses",
        value: function(e) {
            var i = ["lum-".concat(e)]
              , n = this.settings.namespace;
            return n && i.push("".concat(n, "-").concat(e)),
            i
        }
    }, {
        key: "_buildElement",
        value: function() {
            this.el = document.createElement("div"),
            o(this.el, this._buildClasses("lightbox")),
            this.innerEl = document.createElement("div"),
            o(this.innerEl, this._buildClasses("lightbox-inner")),
            this.el.appendChild(this.innerEl);
            var e = document.createElement("div");
            o(e, this._buildClasses("lightbox-loader")),
            this.innerEl.appendChild(e),
            this.imgWrapperEl = document.createElement("div"),
            o(this.imgWrapperEl, this._buildClasses("lightbox-image-wrapper")),
            this.innerEl.appendChild(this.imgWrapperEl);
            var i = document.createElement("span");
            o(i, this._buildClasses("lightbox-position-helper")),
            this.imgWrapperEl.appendChild(i),
            this.imgEl = document.createElement("img"),
            o(this.imgEl, this._buildClasses("img")),
            i.appendChild(this.imgEl),
            this.captionEl = document.createElement("p"),
            o(this.captionEl, this._buildClasses("lightbox-caption")),
            i.appendChild(this.captionEl),
            this.settings.closeButtonEnabled && (this.closeButtonEl = document.createElement("div"),
            o(this.closeButtonEl, this._buildClasses("close-button")),
            this.el.appendChild(this.closeButtonEl)),
            this.settings._gallery && this._setUpGalleryElements(),
            this.settings.parentEl.appendChild(this.el),
            this._updateImgSrc(),
            this._updateCaption(),
            this.settings.includeImgixJSClass && this.imgEl.classList.add("imgix-fluid")
        }
    }, {
        key: "_setUpGalleryElements",
        value: function() {
            this._buildGalleryButton("previous", this.showPrevious),
            this._buildGalleryButton("next", this.showNext)
        }
    }, {
        key: "_buildGalleryButton",
        value: function(e, i) {
            var n = document.createElement("button");
            this["".concat(e, "Button")] = n,
            n.innerText = e,
            o(n, this._buildClasses("".concat(e, "-button"))),
            o(n, this._buildClasses("gallery-button")),
            this.innerEl.appendChild(n),
            n.addEventListener("click", function(l) {
                l.stopPropagation(),
                i()
            }, !1)
        }
    }, {
        key: "_sizeImgWrapperEl",
        value: function() {
            var e = this.imgWrapperEl.style;
            e.width = "".concat(this.innerEl.clientWidth, "px"),
            e.maxWidth = "".concat(this.innerEl.clientWidth, "px"),
            e.height = "".concat(this.innerEl.clientHeight - this.captionEl.clientHeight, "px"),
            e.maxHeight = "".concat(this.innerEl.clientHeight - this.captionEl.clientHeight, "px")
        }
    }, {
        key: "_updateCaption",
        value: function() {
            var e = v(this.settings.caption)
              , i = "";
            e === "string" ? i = this.settings.caption : e === "function" && (i = this.settings.caption(this.currentTrigger)),
            this.captionEl.innerHTML = i
        }
    }, {
        key: "_updateImgSrc",
        value: function() {
            var e = this
              , i = this.currentTrigger.getAttribute(this.settings.sourceAttribute);
            if (!i)
                throw new Error("No image URL was found in the ".concat(this.settings.sourceAttribute, " attribute of the trigger."));
            var n = this._buildClasses("loading");
            this.hasBeenLoaded || o(this.el, n),
            this.imgEl.onload = function() {
                u(e.el, n),
                e.hasBeenLoaded = !0
            }
            ,
            this.imgEl.setAttribute("src", i)
        }
    }, {
        key: "_handleKeydown",
        value: function(e) {
            e.keyCode == P ? this.showPrevious() : e.keyCode == z && this.showNext()
        }
    }, {
        key: "showNext",
        value: function() {
            this.settings._gallery && (this.currentTrigger = this.settings._gallery.nextTrigger(this.currentTrigger),
            this._updateImgSrc(),
            this._updateCaption(),
            this._sizeImgWrapperEl(),
            this.settings._gallery.onChange({
                imgEl: this.imgEl
            }))
        }
    }, {
        key: "showPrevious",
        value: function() {
            this.settings._gallery && (this.currentTrigger = this.settings._gallery.previousTrigger(this.currentTrigger),
            this._updateImgSrc(),
            this._updateCaption(),
            this._sizeImgWrapperEl(),
            this.settings._gallery.onChange({
                imgEl: this.imgEl
            }))
        }
    }, {
        key: "open",
        value: function() {
            this.elementBuilt || (this._buildElement(),
            this._bindEventListeners(),
            this.elementBuilt = !0),
            this.currentTrigger = this.settings.triggerEl,
            this._updateImgSrc(),
            this._updateCaption(),
            o(this.el, this.openClasses),
            this._sizeImgWrapperEl(),
            window.addEventListener("resize", this._sizeImgWrapperEl, !1),
            this.settings._arrowNavigation && window.addEventListener("keydown", this._handleKeydown, !1),
            S && (this.el.addEventListener("animationend", this._completeOpen, !1),
            o(this.el, this.openingClasses))
        }
    }, {
        key: "close",
        value: function() {
            window.removeEventListener("resize", this._sizeImgWrapperEl, !1),
            this.settings._arrowNavigation && window.removeEventListener("keydown", this._handleKeydown, !1),
            S ? (this.el.addEventListener("animationend", this._completeClose, !1),
            o(this.el, this.closingClasses)) : u(this.el, this.openClasses)
        }
    }, {
        key: "_completeOpen",
        value: function() {
            this.el.removeEventListener("animationend", this._completeOpen, !1),
            u(this.el, this.openingClasses)
        }
    }, {
        key: "_completeClose",
        value: function() {
            this.el.removeEventListener("animationend", this._completeClose, !1),
            u(this.el, this.openClasses),
            u(this.el, this.closingClasses)
        }
    }, {
        key: "destroy",
        value: function() {
            this.el && this.settings.parentEl.removeChild(this.el)
        }
    }]),
    s
}();
function M(s, t) {
    if (!(s instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function D(s, t) {
    for (var e = 0; e < t.length; e++) {
        var i = t[e];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        "value"in i && (i.writable = !0),
        Object.defineProperty(s, i.key, i)
    }
}
function G(s, t, e) {
    return t && D(s.prototype, t),
    s
}
var a = function() {
    function s(t) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (M(this, s),
        this.VERSION = "2.3.5",
        this.destroy = this.destroy.bind(this),
        this.open = this.open.bind(this),
        this.close = this.close.bind(this),
        this._handleKeyup = this._handleKeyup.bind(this),
        this.isOpen = !1,
        this.trigger = t,
        !O(this.trigger))
            throw new TypeError("`new Luminous` requires a DOM element as its first argument.");
        var i = document;
        "getRootNode"in this.trigger && (i = this.trigger.getRootNode());
        var n = e.namespace || null
          , l = e.sourceAttribute || "href"
          , g = e.caption || null
          , _ = e.openTrigger || "click"
          , p = e.closeTrigger || "click"
          , E = "closeWithEscape"in e ? !!e.closeWithEscape : !0
          , d = e.closeOnScroll || !1
          , b = e.showCloseButton != null ? e.showCloseButton : !0
          , r = e.appendToNode || (i === document ? document.body : i)
          , C = e.appendToSelector || null
          , f = e.onOpen || null
          , w = e.onClose || null
          , m = e.includeImgixJSClass || !1
          , x = "injectBaseStyles"in e ? !!e.injectBaseStyles : !0
          , y = e._gallery || null
          , T = e._arrowNavigation || null;
        this.settings = {
            namespace: n,
            sourceAttribute: l,
            caption: g,
            openTrigger: _,
            closeTrigger: p,
            closeWithEscape: E,
            closeOnScroll: d,
            closeButtonEnabled: b,
            appendToNode: r,
            appendToSelector: C,
            onOpen: f,
            onClose: w,
            includeImgixJSClass: m,
            injectBaseStyles: x,
            _gallery: y,
            _arrowNavigation: T
        };
        var h = document.body;
        r && "getRootNode"in r && (h = r.getRootNode()),
        this.settings.injectBaseStyles && A(h),
        this._buildLightbox(),
        this._bindEventListeners()
    }
    return G(s, [{
        key: "open",
        value: function(e) {
            e && typeof e.preventDefault == "function" && e.preventDefault(),
            this.lightbox.open(),
            this.settings.closeOnScroll && window.addEventListener("scroll", this.close, !1);
            var i = this.settings.onOpen;
            i && typeof i == "function" && i(),
            this.isOpen = !0
        }
    }, {
        key: "close",
        value: function(e) {
            this.settings.closeOnScroll && window.removeEventListener("scroll", this.close, !1),
            this.lightbox.close();
            var i = this.settings.onClose;
            i && typeof i == "function" && i(),
            this.isOpen = !1
        }
    }, {
        key: "_buildLightbox",
        value: function() {
            var e = this.settings.appendToNode;
            this.settings.appendToSelector && (e = document.querySelector(this.settings.appendToSelector)),
            this.lightbox = new K({
                namespace: this.settings.namespace,
                parentEl: e,
                triggerEl: this.trigger,
                sourceAttribute: this.settings.sourceAttribute,
                caption: this.settings.caption,
                includeImgixJSClass: this.settings.includeImgixJSClass,
                closeButtonEnabled: this.settings.closeButtonEnabled,
                _gallery: this.settings._gallery,
                _arrowNavigation: this.settings._arrowNavigation,
                closeTrigger: this.settings.closeTrigger,
                onClose: this.close
            })
        }
    }, {
        key: "_bindEventListeners",
        value: function() {
            this.trigger.addEventListener(this.settings.openTrigger, this.open, !1),
            this.settings.closeWithEscape && window.addEventListener("keyup", this._handleKeyup, !1)
        }
    }, {
        key: "_unbindEvents",
        value: function() {
            this.trigger.removeEventListener(this.settings.openTrigger, this.open, !1),
            this.lightbox.el && this.lightbox.el.removeEventListener(this.settings.closeTrigger, this.close, !1),
            this.settings.closeWithEscape && window.removeEventListener("keyup", this._handleKeyup, !1)
        }
    }, {
        key: "_handleKeyup",
        value: function(e) {
            this.isOpen && e.keyCode === 27 && this.close()
        }
    }, {
        key: "destroy",
        value: function() {
            this._unbindEvents(),
            this.lightbox.destroy()
        }
    }]),
    s
}();
a.prototype.open = a.prototype.open;
a.prototype.close = a.prototype.close;
a.prototype.destroy = a.prototype.destroy;
function J(s, t) {
    if (!(s instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function U(s, t) {
    for (var e = 0; e < t.length; e++) {
        var i = t[e];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        "value"in i && (i.writable = !0),
        Object.defineProperty(s, i.key, i)
    }
}
function q(s, t, e) {
    return t && U(s.prototype, t),
    s
}
var k = function() {
    function s(t) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        J(this, s);
        var n = {
            arrowNavigation: !0,
            onChange: null
        };
        this.settings = Object.assign({}, n, e),
        this.triggers = t,
        this.luminousOpts = i,
        this.luminousOpts._gallery = this,
        this.luminousOpts._arrowNavigation = this.settings.arrowNavigation,
        this._constructLuminousInstances()
    }
    return q(s, [{
        key: "_constructLuminousInstances",
        value: function() {
            this.luminousInstances = [];
            for (var e = this.triggers.length, i = 0; i < e; i++) {
                var n = this.triggers[i]
                  , l = new a(n,this.luminousOpts);
                this.luminousInstances.push(l)
            }
        }
    }, {
        key: "nextTrigger",
        value: function(e) {
            var i = Array.prototype.indexOf.call(this.triggers, e) + 1;
            return i >= this.triggers.length ? this.triggers[0] : this.triggers[i]
        }
    }, {
        key: "previousTrigger",
        value: function(e) {
            var i = Array.prototype.indexOf.call(this.triggers, e) - 1;
            return i < 0 ? this.triggers[this.triggers.length - 1] : this.triggers[i]
        }
    }, {
        key: "onChange",
        value: function(e) {
            var i = e.imgEl
              , n = this.settings.onChange;
            n && typeof n == "function" && n({
                imgEl: i
            })
        }
    }, {
        key: "destroy",
        value: function() {
            this.luminousInstances.forEach(function(e) {
                return e.destroy()
            })
        }
    }]),
    s
}();
k.prototype.destroy = k.prototype.destroy;
export {k as L};
