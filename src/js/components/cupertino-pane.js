/**
 * Cupertino Pane 1.3.13
 * New generation interfaces for web3 progressive applications
 * https://github.com/roman-rr/cupertino-pane/
 *
 * Copyright 2019-2022 Roman Antonov (roman-rr)
 *
 * Released under the MIT License
 *
 * Released on: September 13, 2022
 */

 !function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).CupertinoPane = e()
}(this, (function() {
    "use strict";
    function t(t, e, s, i) {
        return new (s || (s = Promise))((function(n, r) {
            function o(t) {
                try {
                    h(i.next(t))
                } catch (t) {
                    r(t)
                }
            }
            function a(t) {
                try {
                    h(i.throw(t))
                } catch (t) {
                    r(t)
                }
            }
            function h(t) {
                var e;
                t.done ? n(t.value) : (e = t.value,
                e instanceof s ? e : new s((function(t) {
                    t(e)
                }
                ))).then(o, a)
            }
            h((i = i.apply(t, e || [])).next())
        }
        ))
    }
    class e {
        static get touch() {
            return window.Modernizr && !0 === window.Modernizr.touch || !!(window.navigator.maxTouchPoints > 0 || "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch)
        }
        static get observer() {
            return "MutationObserver"in window || "WebkitMutationObserver"in window
        }
        static get backdropFilter() {
            return CSS.supports("backdrop-filter", "blur(0px)") || CSS.supports("-webkit-backdrop-filter", "blur(0px)")
        }
        static get passiveListener() {
            let t = !1;
            try {
                const e = Object.defineProperty({}, "passive", {
                    get() {
                        t = !0
                    }
                });
                window.addEventListener("testPassiveListener", null, e)
            } catch (t) {}
            return t
        }
        static get gestures() {
            return "ongesturestart"in window
        }
    }
    class s {
        constructor() {
            this.ios = !1,
            this.android = !1,
            this.androidChrome = !1,
            this.desktop = !1,
            this.iphone = !1,
            this.ipod = !1,
            this.ipad = !1,
            this.edge = !1,
            this.ie = !1,
            this.firefox = !1,
            this.macos = !1,
            this.windows = !1,
            this.cordova = !(!window.cordova && !window.phonegap),
            this.phonegap = !(!window.cordova && !window.phonegap),
            this.electron = !1,
            this.ionic = !!document.querySelector("ion-app");
            const t = window.navigator.platform
              , s = window.navigator.userAgent
              , i = window.screen.width
              , n = window.screen.height;
            let r = s.match(/(Android);?[\s\/]+([\d.]+)?/)
              , o = s.match(/(iPad).*OS\s([\d_]+)/)
              , a = s.match(/(iPod)(.*OS\s([\d_]+))?/)
              , h = !this.ipad && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
              , l = s.indexOf("MSIE ") >= 0 || s.indexOf("Trident/") >= 0
              , c = s.indexOf("Edge/") >= 0
              , p = s.indexOf("Gecko/") >= 0 && s.indexOf("Firefox/") >= 0
              , d = "Win32" === t
              , u = s.toLowerCase().indexOf("electron") >= 0
              , g = "MacIntel" === t;
            !o && g && e.touch && (1024 === i && 1366 === n || 834 === i && 1194 === n || 834 === i && 1112 === n || 768 === i && 1024 === n) && (o = s.match(/(Version)\/([\d.]+)/),
            g = !1),
            this.ie = l,
            this.edge = c,
            this.firefox = p,
            r && !d && (this.os = "android",
            this.osVersion = r[2],
            this.android = !0,
            this.androidChrome = s.toLowerCase().indexOf("chrome") >= 0),
            (o || h || a) && (this.os = "ios",
            this.ios = !0),
            h && !a && (this.osVersion = h[2].replace(/_/g, "."),
            this.iphone = !0),
            o && (this.osVersion = o[2].replace(/_/g, "."),
            this.ipad = !0),
            a && (this.osVersion = a[3] ? a[3].replace(/_/g, ".") : null,
            this.ipod = !0),
            this.ios && this.osVersion && s.indexOf("Version/") >= 0 && "10" === this.osVersion.split(".")[0] && (this.osVersion = s.toLowerCase().split("version/")[1].split(" ")[0]),
            this.webView = !(!(h || o || a) || !s.match(/.*AppleWebKit(?!.*Safari)/i) && !window.navigator.standalone) || window.matchMedia && window.matchMedia("(display-mode: standalone)").matches,
            this.webview = this.webView,
            this.standalone = this.webView,
            this.desktop = !(this.ios || this.android) || u,
            this.desktop && (this.electron = u,
            this.macos = g,
            this.windows = d,
            this.macos && (this.os = "macos"),
            this.windows && (this.os = "windows")),
            this.pixelRatio = window.devicePixelRatio || 1
        }
    }
    class i {
        constructor(t, e, s, i, n) {
            this.instance = t,
            this.settings = e,
            this.device = s,
            this.breakpoints = i,
            this.transitions = n,
            this.allowClick = !0,
            this.disableDragAngle = !1,
            this.mouseDown = !1,
            this.contentScrollTop = 0,
            this.steps = [],
            this.isScrolling = !1,
            this.keyboardVisible = !1,
            this.inputBluredbyMove = !1,
            this.inputBottomOffset = 0,
            this.previousInputBottomOffset = 0,
            this.prevNewHeight = 0,
            this.touchStartCb = t=>this.touchStart(t),
            this.touchMoveCb = t=>this.touchMove(t),
            this.touchEndCb = t=>this.touchEnd(t),
            this.onScrollCb = t=>this.onScroll(t),
            this.onClickCb = t=>this.onClick(t),
            this.onKeyboardShowCb = t=>this.onKeyboardShow(t),
            this.onKeyboardWillHideCb = t=>this.onKeyboardWillHide(t),
            this.onWindowResizeCb = t=>this.onWindowResize(t),
            this.touchEvents = this.getTouchEvents(),
            this.swipeNextSensivity = window.hasOwnProperty("cordova") ? this.settings.fastSwipeSensivity + 2 : this.settings.fastSwipeSensivity
        }
        getTouchEvents() {
            const t = ["touchstart", "touchmove", "touchend", "touchcancel"];
            let s = ["mousedown", "mousemove", "mouseup", "mouseleave"];
            const i = {
                start: t[0],
                move: t[1],
                end: t[2],
                cancel: t[3]
            }
              , n = {
                start: s[0],
                move: s[1],
                end: s[2],
                cancel: s[3]
            };
            return e.touch || !this.settings.simulateTouch ? i : n
        }
        attachAllEvents() {
            if (this.settings.dragBy ? this.settings.dragBy.forEach((t=>{
                const e = document.querySelector(t);
                e && this.eventListeners("addEventListener", e)
            }
            )) : this.eventListeners("addEventListener", this.instance.paneEl),
            this.settings.topperOverflow && this.instance.overflowEl.addEventListener("scroll", this.onScrollCb),
            this.settings.handleKeyboard && this.device.cordova && (window.addEventListener("keyboardWillShow", this.onKeyboardShowCb),
            window.addEventListener("keyboardWillHide", this.onKeyboardWillHideCb)),
            this.device.ionic && this.device.android) {
                document.querySelectorAll(".ion-page").forEach((t=>{
                    t.addEventListener("scroll", (e=>{
                        t.scrollTop && t.scrollTo({
                            top: 0
                        })
                    }
                    ))
                }
                ))
            }
            window.addEventListener("resize", this.onWindowResizeCb)
        }
        detachAllEvents() {
            this.settings.dragBy ? this.settings.dragBy.forEach((t=>{
                const e = document.querySelector(t);
                e && this.eventListeners("removeEventListener", e)
            }
            )) : this.eventListeners("removeEventListener", this.instance.paneEl),
            this.settings.topperOverflow && this.instance.overflowEl.removeEventListener("scroll", this.onScrollCb),
            this.settings.handleKeyboard && this.device.cordova && (window.removeEventListener("keyboardWillShow", this.onKeyboardShowCb),
            window.removeEventListener("keyboardWillHide", this.onKeyboardWillHideCb)),
            window.removeEventListener("resize", this.onWindowResizeCb)
        }
        resetEvents() {
            this.detachAllEvents(),
            this.attachAllEvents()
        }
        eventListeners(t, s) {
            if (e.touch) {
                const i = !("touchstart" !== this.touchEvents.start || !e.passiveListener || !this.settings.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                s[t](this.touchEvents.start, this.touchStartCb, i),
                s[t](this.touchEvents.move, this.touchMoveCb, !!e.passiveListener && {
                    passive: !1,
                    capture: !1
                }),
                s[t](this.touchEvents.end, this.touchEndCb, i),
                s[t](this.touchEvents.cancel, this.touchEndCb, i)
            } else
                s[t](this.touchEvents.start, this.touchStartCb, !1),
                s[t](this.touchEvents.move, this.touchMoveCb, !1),
                s[t](this.touchEvents.end, this.touchEndCb, !1),
                s[t](this.touchEvents.cancel, this.touchEndCb, !1);
            this.settings.preventClicks && s[t]("click", this.onClickCb, !0)
        }
        touchStart(t) {
            if (this.instance.emit("onDragStart", t),
            this.allowClick = !0,
            this.instance.disableDragEvents)
                return;
            this.disableDragAngle = !1,
            this.isScrolling = !1,
            this.instance.preventedDismiss = !1;
            const {clientY: e, clientX: s} = this.getEventClientYX(t, "touchstart");
            this.startY = e,
            this.startX = s,
            "mousedown" === t.type && (this.mouseDown = !0),
            this.contentScrollTop && this.willScrolled() && (this.startY += this.contentScrollTop),
            this.steps.push({
                posY: this.startY,
                posX: this.startX,
                time: Date.now()
            })
        }
        touchMove(t) {
            var e;
            const {clientY: s, clientX: i, velocityY: n} = this.getEventClientYX(t, "touchmove");
            if ("mousemove" === t.type && !this.mouseDown)
                return;
            if (this.steps.length || this.steps.push({
                posY: s,
                posX: i,
                time: Date.now()
            }),
            t.delta = (null === (e = this.steps[0]) || void 0 === e ? void 0 : e.posY) - s,
            this.allowClick = !1,
            this.isFormElement(t.target) && this.isElementScrollable(t.target))
                return;
            if (this.instance.disableDragEvents)
                return void (this.steps = []);
            if (this.disableDragAngle)
                return;
            if (this.instance.preventedDismiss)
                return;
            this.settings.touchMoveStopPropagation && t.stopPropagation();
            const r = s - this.steps[this.steps.length - 1].posY
              , o = i - this.steps[this.steps.length - 1].posX;
            if (!Math.abs(r) && !Math.abs(o))
                return;
            this.instance.emit("onDrag", t),
            this.instance.setGrabCursor(!0, !0);
            let a = this.instance.getPanelTransformY() + r
              , h = this.instance.getPanelTransformX() + o;
            if (this.steps.length < 2) {
                n < 1 && (a = this.instance.getPanelTransformY() + r * n);
                let t = new WebKitCSSMatrix(window.getComputedStyle(this.instance.paneEl).transform).m42 - this.instance.getPanelTransformY();
                Math.abs(t) && (a += t)
            }
            if (this.steps.length > 2 && this.isFormElement(document.activeElement) && !this.isFormElement(t.target) && (document.activeElement.blur(),
            this.inputBluredbyMove = !0),
            this.settings.touchAngle && !this.isScrolling) {
                let t;
                const e = i - this.startX
                  , n = s - this.startY;
                if (t = 180 * Math.atan2(Math.abs(n), Math.abs(e)) / Math.PI,
                e * e + n * n >= 25 && 90 - t > this.settings.touchAngle && 1 === this.steps.length)
                    return void (this.disableDragAngle = !0)
            }
            if ("auto" === this.instance.overflowEl.style.overflowY && this.scrollPreventDrag(t))
                return;
            let l = this.handleTopperLowerPositions({
                clientX: i,
                clientY: s,
                newVal: a,
                diffY: r
            });
            if (isNaN(l) || (a = l),
            this.instance.getPanelTransformY() !== a || this.instance.getPanelTransformX() !== h) {
                if (!this.instance.preventedDismiss && this.instance.preventDismissEvent && this.settings.bottomClose) {
                    let t = (-this.breakpoints.topper + this.breakpoints.topper - this.instance.getPanelTransformY()) / this.breakpoints.topper / -8;
                    if (a = this.instance.getPanelTransformY() + r * (.5 - t),
                    -1 * (s - 220 - this.instance.screen_height) <= this.instance.screen_height - this.breakpoints.bottomer)
                        return this.instance.preventedDismiss = !0,
                        this.instance.emit("onWillDismiss", {
                            prevented: !0
                        }),
                        void this.instance.moveToBreak(this.breakpoints.prevBreakpoint)
                }
                this.instance.checkOpacityAttr(a),
                this.instance.checkOverflowAttr(a),
                this.transitions.doTransition({
                    type: "move",
                    translateY: a,
                    translateX: h
                }),
                this.steps.push({
                    posY: s,
                    posX: i,
                    time: Date.now()
                })
            }
        }
        touchEnd(t) {
            var e, s;
            if (this.instance.disableDragEvents)
                return;
            if ("mouseleave" === t.type && !this.mouseDown)
                return;
            "mouseup" !== t.type && "mouseleave" !== t.type || (this.mouseDown = !1);
            let i, n = this.breakpoints.getClosestBreakY();
            this.fastSwipeNext("Y") && (n = this.instance.swipeNextPoint((null === (e = this.steps[this.steps.length - 1]) || void 0 === e ? void 0 : e.posY) - (null === (s = this.steps[this.steps.length - 2]) || void 0 === s ? void 0 : s.posY), this.swipeNextSensivity, n),
            i = this.settings.fastSwipeClose && this.breakpoints.currentBreakpoint < n);
            let r = !1;
            this.isFormElement(document.activeElement) && !this.isFormElement(t.target) && 2 === this.steps.length && (r = !0),
            this.instance.emit("onDragEnd", t),
            this.steps = [],
            delete this.startPointOverTop,
            this.allowClick || r || (i ? this.instance.destroy({
                animate: !0
            }) : (this.instance.checkOpacityAttr(n),
            this.instance.checkOverflowAttr(n),
            this.instance.setGrabCursor(!0, !1),
            this.settings.bottomClose && n === this.breakpoints.breaks.bottom ? this.instance.destroy({
                animate: !0
            }) : (this.instance.getPanelTransformY() === n && this.instance.emit("onTransitionEnd", {
                target: this.instance.paneEl
            }),
            this.breakpoints.currentBreakpoint = n,
            this.transitions.doTransition({
                type: "end",
                translateY: n
            }))))
        }
        onScroll(e) {
            return t(this, void 0, void 0, (function*() {
                this.isScrolling = !0,
                this.contentScrollTop = e.target.scrollTop
            }
            ))
        }
        onClick(t) {
            if (this.allowClick) {
                if (!this.device.cordova && this.device.android && this.isFormElement(t.target))
                    this.onKeyboardShow({
                        keyboardHeight: this.instance.screen_height - window.innerHeight
                    });
                else if (this.settings.clickBottomOpen) {
                    if (this.isFormElement(document.activeElement))
                        return;
                    if (this.breakpoints.breaks.bottom === this.instance.getPanelTransformY()) {
                        let t;
                        this.settings.breaks.top.enabled && (t = "top"),
                        this.settings.breaks.middle.enabled && (t = "middle"),
                        this.instance.moveToBreak(t)
                    }
                }
            } else
                this.settings.preventClicks && (t.preventDefault(),
                t.stopPropagation(),
                t.stopImmediatePropagation())
        }
        onKeyboardShow(e) {
            return t(this, void 0, void 0, (function*() {
                if (!this.isPaneDescendant(document.activeElement))
                    return;
                if (!this.isOnViewport())
                    return;
                this.keyboardVisible = !0;
                const t = this.settings.breaks[this.breakpoints.prevBreakpoint].height
                  , s = document.activeElement
                  , i = s.getBoundingClientRect().bottom
                  , n = this.instance.screen_height - i - this.inputBottomOffset
                  , r = this.device.cordova && this.device.android ? 150 : 100;
                let o = 0
                  , a = t + (e.keyboardHeight - n);
                if (this.prevNewHeight && (o = this.previousInputBottomOffset - i,
                a = this.prevNewHeight),
                !s.isEqualNode(this.prevFocusedElement) && e.keyboardHeight > n) {
                    this.prevNewHeight = a - o,
                    this.prevFocusedElement = document.activeElement,
                    yield this.instance.moveToHeight(a - o + r);
                    const t = s.getBoundingClientRect().bottom;
                    this.previousInputBottomOffset = t,
                    this.inputBottomOffset || (this.inputBottomOffset = i - t)
                }
            }
            ))
        }
        onKeyboardWillHide(t) {
            this.isOnViewport() && (this.keyboardVisible = !1,
            this.inputBottomOffset = 0,
            this.previousInputBottomOffset = 0,
            this.prevNewHeight = 0,
            delete this.prevFocusedElement,
            this.inputBluredbyMove ? this.inputBluredbyMove = !1 : this.instance.isHidden() || this.instance.getPanelTransformY() !== this.breakpoints.breaks[this.breakpoints.prevBreakpoint] && this.instance.moveToBreak(this.breakpoints.prevBreakpoint))
        }
        onWindowResize(e) {
            return t(this, void 0, void 0, (function*() {
                if (this.isKeyboardEvent()) {
                    if (this.device.cordova || this.device.ios)
                        return;
                    this.isFormElement(document.activeElement) ? this.onKeyboardShow({
                        keyboardHeight: this.instance.screen_height - window.innerHeight
                    }) : this.onKeyboardWillHide({})
                } else
                    yield new Promise((t=>setTimeout((()=>t(!0)), 150))),
                    this.instance.updateScreenHeights(),
                    this.breakpoints.buildBreakpoints(JSON.parse(this.breakpoints.lockedBreakpoints))
            }
            ))
        }
        fastSwipeNext(t) {
            var e, s;
            const i = (null === (e = this.steps[this.steps.length - 1]) || void 0 === e ? void 0 : e["pos" + t]) - (null === (s = this.steps[this.steps.length - 2]) || void 0 === s ? void 0 : s["pos" + t]);
            return Math.abs(i) >= this.swipeNextSensivity
        }
        isKeyboardEvent() {
            return !!this.isFormElement(document.activeElement) || !(this.isFormElement(document.activeElement) || !this.keyboardVisible) && (this.keyboardVisible = !1,
            !0)
        }
        handleTopperLowerPositions(t) {
            if (!this.settings.upperThanTop && t.newVal <= this.breakpoints.topper)
                return this.breakpoints.topper;
            if (this.settings.upperThanTop && (t.newVal <= this.breakpoints.topper || this.startPointOverTop)) {
                this.startPointOverTop || (this.startPointOverTop = t.clientY),
                this.startPointOverTop < t.clientY && delete this.startPointOverTop;
                const e = this.instance.screen_height - this.instance.screenHeightOffset
                  , s = (e - this.instance.getPanelTransformY()) / (e - this.breakpoints.topper) / 8;
                return this.instance.getPanelTransformY() + t.diffY * s
            }
            return !this.settings.lowerThanBottom && t.newVal >= this.breakpoints.bottomer ? this.breakpoints.bottomer : void 0
        }
        getEventClientYX(t, e) {
            var s, i;
            const n = t.type === e && t.targetTouches && (t.targetTouches[0] || t.changedTouches[0])
              , r = t.type === e ? n.clientY : t.clientY
              , o = t.type === e ? n.clientX : t.clientX
              , a = Date.now() - ((null === (s = this.steps[this.steps.length - 1]) || void 0 === s ? void 0 : s.time) || 0);
            return {
                clientY: r,
                clientX: o,
                velocityY: Math.abs(r - ((null === (i = this.steps[this.steps.length - 1]) || void 0 === i ? void 0 : i.posY) || 0)) / a
            }
        }
        scrollPreventDrag(t) {
            let e = !1;
            return this.contentScrollTop > 0 && (e = !0),
            e
        }
        willScrolled() {
            return !(!this.isElementScrollable(this.instance.overflowEl) || "hidden" === this.instance.overflowEl.style.overflow)
        }
        isPaneDescendant(t) {
            if (!t)
                return !1;
            let e = t.parentNode;
            for (; null != e; ) {
                if (e == this.instance.paneEl)
                    return !0;
                e = e.parentNode
            }
            return !1
        }
        isFormElement(t) {
            return !!(t && t.tagName && ["input", "select", "option", "textarea", "button", "label"].includes(t.tagName.toLowerCase()))
        }
        isElementScrollable(t) {
            return t.scrollHeight > t.clientHeight
        }
        isOnViewport() {
            return !this.instance.paneEl || 0 !== this.instance.paneEl.offsetWidth || 0 !== this.instance.paneEl.offsetHeight
        }
    }
    class n {
        constructor() {
            this.instance = {
                initialBreak: "middle",
                horizontal: !1,
                horizontalOffset: null,
                inverse: !1,
                parentElement: null,
                followerElement: null,
                cssClass: null,
                fitHeight: !1,
                maxFitHeight: null,
                fitScreenHeight: !0,
                backdrop: !1,
                backdropOpacity: .4,
                animationType: "ease",
                animationDuration: 300,
                dragBy: null,
                bottomOffset: 0,
                bottomClose: !1,
                fastSwipeClose: !1,
                fastSwipeSensivity: 3,
                freeMode: !1,
                buttonDestroy: !0,
                topperOverflow: !0,
                topperOverflowOffset: 0,
                lowerThanBottom: !0,
                upperThanTop: !1,
                showDraggable: !0,
                draggableOver: !1,
                clickBottomOpen: !0,
                preventClicks: !0,
                handleKeyboard: !0,
                simulateTouch: !0,
                passiveListeners: !0,
                touchMoveStopPropagation: !1,
                touchAngle: 45,
                breaks: {},
                zStack: null,
                events: null,
                modules: null
            }
        }
    }
    class r {
        constructor(t, e) {
            this.instance = t,
            this.settings = e,
            this.breaks = {},
            this.brs = [],
            this.beforeBuildBreakpoints = ()=>{}
            ,
            this.defaultBreaksConf = {
                top: {
                    enabled: !0,
                    height: window.innerHeight - 47.25
                },
                middle: {
                    enabled: !0,
                    height: 300
                },
                bottom: {
                    enabled: !0,
                    height: 100
                }
            }
        }
        buildBreakpoints(e, s=0, i=!0) {
            var n, r;
            return t(this, void 0, void 0, (function*() {
                if (this.breaks = {},
                this.conf = e,
                this.settings.bottomOffset = s || this.settings.bottomOffset,
                yield this.beforeBuildBreakpoints(),
                ["top", "middle", "bottom"].forEach((t=>{
                    var e;
                    this.settings.breaks[t] || (this.settings.breaks[t] = this.defaultBreaksConf[t]),
                    this.conf && this.conf[t] && (this.settings.breaks[t] = this.conf[t]),
                    this.instance.emit("beforeBreakHeightApplied", {
                        break: t
                    }),
                    (null === (e = this.settings.breaks[t]) || void 0 === e ? void 0 : e.enabled) && (this.breaks[t] = this.breaks[t] || this.instance.screenHeightOffset,
                    this.breaks[t] -= this.settings.bottomOffset,
                    this.breaks[t] -= this.settings.breaks[t].height)
                }
                )),
                this.lockedBreakpoints || (this.lockedBreakpoints = JSON.stringify(this.settings.breaks)),
                this.instance.isPanePresented() || this.settings.breaks[this.settings.initialBreak].enabled || console.warn("Cupertino Pane: Please set initialBreak for enabled breakpoint"),
                this.settings.breaks.middle.height >= this.settings.breaks.top.height && console.warn("Cupertino Pane: Please set middle height lower than top height"),
                this.settings.breaks.middle.height <= this.settings.breaks.bottom.height && console.warn("Cupertino Pane: Please set bottom height lower than middle height"),
                this.brs = [],
                ["top", "middle", "bottom"].forEach((t=>{
                    this.settings.breaks[t].enabled && this.brs.push(this.breaks[t])
                }
                )),
                this.topper = this.brs.reduce(((t,e)=>e < t ? e : t)),
                this.bottomer = this.brs.reduce(((t,e)=>Math.abs(e) > Math.abs(t) ? e : t)),
                this.instance.isPanePresented() || (this.currentBreakpoint = this.breaks[this.settings.initialBreak]),
                this.instance.isPanePresented()) {
                    if ((null === (n = this.settings.breaks[this.prevBreakpoint]) || void 0 === n ? void 0 : n.enabled) && (this.instance.isHidden() || this.instance.moveToBreak(this.prevBreakpoint, i ? "breakpoint" : "move")),
                    !(null === (r = this.settings.breaks[this.prevBreakpoint]) || void 0 === r ? void 0 : r.enabled) && !this.instance.isHidden()) {
                        let t = this.instance.swipeNextPoint(1, 1, this.getClosestBreakY());
                        const e = Object.entries(this.breaks).find((e=>e[1] === t));
                        this.instance.moveToBreak(e[0])
                    }
                    this.instance.paneEl.style.height = `${this.instance.getPaneHeight()}px`,
                    this.instance.scrollElementInit(),
                    this.instance.checkOpacityAttr(this.currentBreakpoint),
                    this.instance.checkOverflowAttr(this.currentBreakpoint)
                }
                this.instance.emit("buildBreakpointsCompleted")
            }
            ))
        }
        getCurrentBreakName() {
            return this.breaks.top === this.currentBreakpoint ? "top" : this.breaks.middle === this.currentBreakpoint ? "middle" : this.breaks.bottom === this.currentBreakpoint ? "bottom" : null
        }
        getClosestBreakY() {
            return this.brs.reduce(((t,e)=>Math.abs(e - this.instance.getPanelTransformY()) < Math.abs(t - this.instance.getPanelTransformY()) ? e : t))
        }
    }
    var o;
    !function(t) {
        t.Present = "present",
        t.Destroy = "destroy",
        t.Move = "move",
        t.Breakpoint = "breakpoint",
        t.Hide = "hide",
        t.TouchEnd = "end"
    }(o || (o = {}));
    class a {
        constructor(t, e, s) {
            this.instance = t,
            this.settings = e,
            this.breakpoints = s,
            this.isPaneHidden = !1
        }
        doTransition(e={}) {
            return new Promise((s=>t(this, void 0, void 0, (function*() {
                var t, i;
                if (e.type === o.Move)
                    return this.instance.emit("onMoveTransitionStart", {
                        translateY: e.translateY
                    }),
                    this.instance.paneEl.style.transition = "all 0ms linear 0ms",
                    this.setPaneElTransform(e),
                    s(!0);
                const n = ()=>(e.type === o.Destroy && this.instance.destroyResets(),
                this.instance.paneEl.style.transition = "initial",
                e.type === o.Hide && (this.isPaneHidden = !0),
                e.type !== o.Breakpoint && e.type !== o.TouchEnd || (this.isPaneHidden = !1),
                this.instance.emit("onTransitionEnd", {
                    type: e.type,
                    target: document.body.contains(this.instance.paneEl) ? this.instance.paneEl : null
                }),
                this.instance.paneEl.removeEventListener("transitionend", n),
                s(!0));
                if (e.type === o.Breakpoint || e.type === o.TouchEnd || e.type === o.Present || e.type === o.Hide || e.type === o.Destroy) {
                    let r = (null === (t = e.conf) || void 0 === t ? void 0 : t.transition) || {};
                    if (e.type === o.TouchEnd && this.settings.freeMode)
                        return s(!0);
                    const a = Object.entries(this.breakpoints.breaks).find((t=>t[1] === e.translateY));
                    let h = a && (null === (i = this.settings.breaks[a[0]]) || void 0 === i ? void 0 : i.bounce)
                      , l = this.buildTransitionValue(h, r.duration);
                    this.instance.paneEl.style.setProperty("transition", l),
                    this.instance.emit("onTransitionStart", {
                        type: e.type,
                        translateY: {
                            new: e.translateY
                        },
                        transition: this.instance.paneEl.style.transition
                    }),
                    this.setPaneElTransform(e),
                    Object.assign(this.instance.paneEl.style, r.to);
                    let c = Object.entries(this.breakpoints.breaks).find((t=>t[1] === e.translateY));
                    c && (this.breakpoints.prevBreakpoint = c[0]),
                    this.instance.paneEl.addEventListener("transitionend", n)
                }
            }
            ))))
        }
        setPaneElTransform(t) {
            this.instance.paneEl.style.transform = `translateY(${t.translateY}px) translateZ(0px)`
        }
        buildTransitionValue(t, e) {
            return t ? "all 300ms cubic-bezier(.155,1.105,.295,1.12)" : `all ${e || this.settings.animationDuration}ms ${this.settings.animationType}`
        }
    }
    function h(t, e, s) {
        if (!this.eventsListeners)
            return;
        if ("function" != typeof e)
            return;
        const i = s ? "unshift" : "push";
        t.split(" ").forEach((t=>{
            this.eventsListeners[t] || (this.eventsListeners[t] = []),
            this.eventsListeners[t][i](e)
        }
        ))
    }
    function l(...t) {
        if (!this.eventsListeners)
            return;
        let e = t[0]
          , s = t.slice(1, t.length);
        (Array.isArray(e) ? e : e.split(" ")).forEach((t=>{
            var e;
            (null === (e = this.eventsListeners) || void 0 === e ? void 0 : e[t]) && this.eventsListeners[t].forEach((t=>t.apply(this, s)))
        }
        ))
    }
    const c = {
        ZStackModule: class {
            constructor(e) {
                this.instance = e,
                this.zStackDefaults = {
                    pushElements: null,
                    minPushHeight: null,
                    cardYOffset: 0,
                    cardZScale: .93,
                    cardContrast: .85,
                    stackZAngle: 160
                },
                this.breakpoints = this.instance.breakpoints,
                this.settings = this.instance.settings,
                this.settings.zStack && (this.instance.setZstackConfig = e=>t(this, void 0, void 0, (function*() {
                    return this.setZstackConfig(e)
                }
                )),
                this.instance.on("rendered", (()=>{
                    this.setZstackConfig(this.settings.zStack),
                    this.setPushMultiplicators()
                }
                )),
                this.instance.on("beforePresentTransition", (t=>{
                    t.animate || this.settings.zStack.pushElements.forEach((t=>this.pushTransition(document.querySelector(t), this.breakpoints.breaks[this.settings.initialBreak], "unset")))
                }
                )),
                this.instance.on("onMoveTransitionStart", (()=>{
                    this.settings.zStack.pushElements.forEach((t=>this.pushTransition(document.querySelector(t), this.instance.getPanelTransformY(), "all 0ms linear 0ms")))
                }
                )),
                this.instance.on("onTransitionStart", (t=>{
                    this.settings.zStack.pushElements.forEach((e=>this.pushTransition(document.querySelector(e), t.translateY.new, `all ${this.settings.animationDuration}ms ${this.settings.animationType} 0s`)))
                }
                )))
            }
            setZstackConfig(t) {
                this.settings.zStack = t ? Object.assign(Object.assign({}, this.zStackDefaults), t) : null
            }
            pushTransition(t, e, s) {
                let i = this.settings.zStack.pushElements;
                t.style.transition = s,
                e = this.instance.screenHeightOffset - e;
                const n = this.settings.zStack.minPushHeight ? this.settings.zStack.minPushHeight : this.instance.screenHeightOffset - this.breakpoints.bottomer
                  , r = this.instance.screenHeightOffset - this.breakpoints.topper;
                let o = this.getPushMulitplicator(t)
                  , a = Math.pow(this.settings.zStack.cardZScale, o)
                  , h = Math.pow(this.settings.zStack.cardZScale, o - 1)
                  , l = 6 + this.settings.zStack.cardYOffset
                  , c = l * o * -1
                  , p = c + l
                  , d = Math.pow(this.settings.zStack.cardContrast, o)
                  , u = Math.pow(this.settings.zStack.cardContrast, o - 1);
                const g = (s,n,r,o)=>{
                    let a = Math.pow(s, this.settings.zStack.stackZAngle / 100);
                    t.style.transform = `translateY(${n * (a / s)}px) scale(${s})`,
                    t.style.borderRadius = `${o}px`,
                    t.style.filter = `contrast(${r})`;
                    let h = document.querySelector(i[i.length - 1]);
                    e || t.className !== h.className || this.clearPushMultiplicators()
                }
                ;
                if (e <= n)
                    return void g(h, p, u, 0);
                const b = (t,s)=>{
                    let i = -1 * (r * s - n * t);
                    return i -= (t - s) * e,
                    i /= n - r,
                    i > s && (i = s),
                    i < t && (i = t),
                    i
                }
                ;
                g(b(a, h), b(c, p), b(d, u), -1 * b(-10, 0))
            }
            setPushMultiplicators() {
                this.settings.zStack.pushElements.forEach((t=>{
                    let e = document.querySelector(t)
                      , s = this.getPushMulitplicator(e);
                    s = s ? s + 1 : 1,
                    e.style.setProperty("--push-multiplicator", `${s}`)
                }
                ))
            }
            getPushMulitplicator(t) {
                let e = t.style.getPropertyValue("--push-multiplicator");
                return parseInt(e)
            }
            clearPushMultiplicators() {
                for (let t = 0; t < this.settings.zStack.pushElements.length; t++) {
                    let e = document.querySelector(this.settings.zStack.pushElements[t])
                      , s = this.getPushMulitplicator(e);
                    s -= 1,
                    s ? e.style.setProperty("--push-multiplicator", `${s}`) : e.style.removeProperty("--push-multiplicator")
                }
            }
        }
        ,
        FollowerModule: class {
            constructor(t) {
                this.instance = t,
                this.breakpoints = this.instance.breakpoints,
                this.transitions = this.instance.transitions,
                this.settings = this.instance.settings,
                this.settings.followerElement && (this.instance.on("rendered", (()=>{
                    var t;
                    document.querySelector(this.settings.followerElement) ? (this.followerEl = document.querySelector(this.settings.followerElement),
                    this.followerEl.style.willChange = "transform, border-radius",
                    this.followerEl.style.transform = "translateY(0px) translateZ(0px)",
                    this.followerEl.style.transition = this.transitions.buildTransitionValue(null === (t = this.settings.breaks[this.instance.currentBreak()]) || void 0 === t ? void 0 : t.bounce)) : console.warn("Cupertino Pane: wrong follower element selector specified", this.settings.followerElement)
                }
                )),
                this.instance.on("onMoveTransitionStart", (t=>{
                    this.followerEl.style.transition = "all 0ms linear 0ms",
                    this.followerEl.style.transform = `translateY(${t.translateY - this.breakpoints.breaks[this.settings.initialBreak]}px) translateZ(0px)`
                }
                )),
                this.instance.on("onMoveTransitionStart", (t=>{
                    this.followerEl.style.transition = "initial"
                }
                )),
                this.instance.on("onTransitionStart", (t=>{
                    this.followerEl.style.transition = t.transition,
                    this.followerEl.style.transform = `translateY(${t.translateY.new - this.breakpoints.breaks[this.settings.initialBreak]}px) translateZ(0px)`
                }
                )))
            }
        }
        ,
        BackdropModule: class {
            constructor(t) {
                this.instance = t,
                this.touchMoveBackdropCb = t=>this.touchMoveBackdrop(t),
                this.settings = this.instance.settings,
                this.events = this.instance.events,
                this.settings.backdrop && (this.instance.backdrop = t=>this.backdrop(t),
                this.instance.on("rendered", (()=>{
                    this.instance.addStyle("\n        .cupertino-pane-wrapper .backdrop {\n          overflow: hidden;\n          position: fixed;\n          width: 100%;\n          bottom: 0;\n          right: 0;\n          left: 0;\n          top: 0;\n          display: none;\n          z-index: 10;\n        }\n      "),
                    this.settings.backdrop && this.renderBackdrop()
                }
                )),
                this.instance.on("beforePresentTransition", (t=>{
                    t.animate || (this.backdropEl.style.display = "block")
                }
                )),
                this.instance.on("onTransitionStart", (t=>{
                    this.settings.backdrop && (this.instance.isHidden() || t.type === o.Hide || t.type === o.Destroy || t.type === o.Present) && (this.backdropEl.style.backgroundColor = "rgba(0,0,0,.0)",
                    this.backdropEl.style.transition = `all ${this.settings.animationDuration}ms ${this.settings.animationType} 0s`,
                    t.type !== o.Hide && t.type !== o.Destroy && (this.backdropEl.style.display = "block",
                    setTimeout((()=>{
                        this.backdropEl.style.backgroundColor = `rgba(0,0,0, ${this.settings.backdropOpacity})`
                    }
                    ), 50)))
                }
                )),
                this.instance.on("onTransitionEnd", (t=>{
                    this.backdropEl && (t.type !== o.Destroy && t.type !== o.Hide || (this.backdropEl.style.transition = "initial",
                    this.backdropEl.style.display = "none"))
                }
                )),
                e.touch && (this.instance.on("onDidPresent", (()=>{
                    var t;
                    null === (t = this.backdropEl) || void 0 === t || t.addEventListener(this.events.touchEvents.move, this.touchMoveBackdropCb, !!e.passiveListener && {
                        passive: !1,
                        capture: !1
                    })
                }
                )),
                this.instance.on("onDidDismiss", (t=>{
                    var e;
                    null === (e = this.backdropEl) || void 0 === e || e.removeEventListener(this.events.touchEvents.move, this.touchMoveBackdropCb)
                }
                ))))
            }
            backdrop(t={
                show: !0
            }) {
                var s, i;
                if (!this.instance.isPanePresented())
                    return console.warn("Cupertino Pane: Present pane before call backdrop()"),
                    null;
                this.isBackdropPresented() || (this.renderBackdrop(),
                e.touch && (null === (s = this.backdropEl) || void 0 === s || s.removeEventListener(this.events.touchEvents.move, this.touchMoveBackdropCb),
                null === (i = this.backdropEl) || void 0 === i || i.addEventListener(this.events.touchEvents.move, this.touchMoveBackdropCb, !!e.passiveListener && {
                    passive: !1,
                    capture: !1
                })));
                const n = ()=>{
                    this.backdropEl.style.transition = "initial",
                    this.backdropEl.style.display = "none",
                    this.backdropEl.removeEventListener("transitionend", n)
                }
                ;
                if (this.backdropEl.style.transition = `all ${this.settings.animationDuration}ms ${this.settings.animationType} 0s`,
                this.backdropEl.style.backgroundColor = "rgba(0,0,0,.0)",
                t.show)
                    this.backdropEl.style.display = "block",
                    setTimeout((()=>{
                        this.backdropEl.style.backgroundColor = `rgba(0,0,0, ${this.settings.backdropOpacity})`
                    }
                    ), 50);
                else {
                    if ("none" === this.backdropEl.style.display)
                        return;
                    this.backdropEl.addEventListener("transitionend", n)
                }
            }
            renderBackdrop() {
                this.backdropEl = document.createElement("div"),
                this.backdropEl.classList.add("backdrop"),
                this.backdropEl.style.transition = `all ${this.settings.animationDuration}ms ${this.settings.animationType} 0s`,
                this.backdropEl.style.backgroundColor = `rgba(0,0,0, ${this.settings.backdropOpacity})`,
                this.instance.wrapperEl.appendChild(this.backdropEl),
                this.backdropEl.addEventListener("click", (()=>this.instance.emit("onBackdropTap")))
            }
            isBackdropPresented() {
                return !!document.querySelector(".cupertino-pane-wrapper .backdrop")
            }
            touchMoveBackdrop(t) {
                this.settings.touchMoveStopPropagation && t.stopPropagation()
            }
        }
        ,
        FitHeightModule: class {
            constructor(e) {
                this.instance = e,
                this.calcHeightInProcess = !1,
                this.breakpoints = this.instance.breakpoints,
                this.settings = this.instance.settings,
                this.settings.fitHeight && (this.instance.calcFitHeight = e=>t(this, void 0, void 0, (function*() {
                    return this.calcFitHeight(e)
                }
                )),
                this.instance.on("DOMElementsReady", (()=>{
                    this.instance.wrapperEl.classList.add("fit-height")
                }
                )),
                this.instance.on("onWillPresent", (()=>{
                    this.breakpoints.beforeBuildBreakpoints = ()=>this.beforeBuildBreakpoints()
                }
                )),
                this.instance.on("beforeBreakHeightApplied", (t=>{
                    var e;
                    this.settings.fitScreenHeight && ((null === (e = this.settings.breaks[t.break]) || void 0 === e ? void 0 : e.height) > this.instance.screen_height && (this.settings.breaks[t.break].height = this.instance.screen_height - this.settings.bottomOffset),
                    this.settings.breaks.top && this.settings.breaks.middle && this.settings.breaks.top.height - 50 <= this.settings.breaks.middle.height && (this.settings.breaks.middle.enabled = !1,
                    this.settings.initialBreak = "top")),
                    this.settings.fitHeight && "top" === t.break && (this.settings.breaks.top.height > this.instance.screen_height ? (this.settings.breaks.top.height = this.instance.screen_height - 2 * this.settings.bottomOffset,
                    this.settings.topperOverflow = !0) : this.instance.overflowEl && !this.settings.maxFitHeight && (this.settings.topperOverflow = !1,
                    this.instance.overflowEl.style.overflowY = "hidden"))
                }
                ), !0))
            }
            beforeBuildBreakpoints() {
                var e, s, i;
                return t(this, void 0, void 0, (function*() {
                    this.settings.fitScreenHeight = !1,
                    this.settings.initialBreak = "top",
                    this.settings.topperOverflow = !1;
                    let t = yield this.getPaneFitHeight();
                    this.settings.maxFitHeight && t > this.settings.maxFitHeight && (t = this.settings.maxFitHeight,
                    this.settings.topperOverflow = !0),
                    this.breakpoints.conf = {
                        top: {
                            enabled: !0,
                            height: t
                        },
                        middle: {
                            enabled: !1
                        }
                    },
                    this.breakpoints.conf.top.bounce = null === (s = null === (e = this.settings.breaks) || void 0 === e ? void 0 : e.top) || void 0 === s ? void 0 : s.bounce,
                    this.breakpoints.conf.bottom = (null === (i = this.settings.breaks) || void 0 === i ? void 0 : i.bottom) || {
                        enabled: !0,
                        height: 0
                    }
                }
                ))
            }
            calcFitHeight(e=!0) {
                return t(this, void 0, void 0, (function*() {
                    return this.instance.wrapperEl && this.instance.el ? this.calcHeightInProcess ? (console.warn("Cupertino Pane: calcFitHeight() already in process"),
                    null) : void (yield this.breakpoints.buildBreakpoints(this.breakpoints.lockedBreakpoints, null, e)) : null
                }
                ))
            }
            getPaneFitHeight() {
                return t(this, void 0, void 0, (function*() {
                    this.calcHeightInProcess = !0;
                    let t = this.instance.el.querySelectorAll("img");
                    this.instance.el.style.height = "unset",
                    this.instance.rendered || (this.instance.el.style.visibility = "hidden",
                    this.instance.el.style.pointerEvents = "none",
                    this.instance.el.style.display = "block",
                    this.instance.wrapperEl.style.visibility = "hidden",
                    this.instance.wrapperEl.style.pointerEvents = "none",
                    this.instance.wrapperEl.style.display = "block");
                    let e = [];
                    t.length && (e = Array.from(t).map((t=>new Promise((e=>{
                        if (t.height || t.complete && t.naturalHeight)
                            return e(!0);
                        t.onload = ()=>e(!0),
                        t.onerror = ()=>e(!0)
                    }
                    ))))),
                    yield Promise.all(e),
                    yield new Promise((t=>requestAnimationFrame(t)));
                    const s = t=>Math.round(t.getBoundingClientRect().height);
                    let i = s(this.instance.el)
                      , n = this.contentElHeight - i
                      , r = s(this.instance.paneEl);
                    return Math.abs(n) && (r -= n),
                    this.contentElHeight = s(this.instance.el),
                    s(this.instance.el) > this.instance.screen_height && (this.contentElHeight = this.instance.screen_height),
                    this.instance.rendered || (this.instance.el.style.visibility = "unset",
                    this.instance.el.style.pointerEvents = "unset",
                    this.instance.el.style.display = "none",
                    this.instance.wrapperEl.style.visibility = "unset",
                    this.instance.wrapperEl.style.pointerEvents = "unset",
                    this.instance.wrapperEl.style.display = "none"),
                    this.calcHeightInProcess = !1,
                    r
                }
                ))
            }
        }
        ,
        InverseModule: class {
            constructor(t) {
                this.instance = t,
                this.breakpoints = this.instance.breakpoints,
                this.settings = this.instance.settings,
                this.events = this.instance.events,
                this.settings.inverse && (this.settings.buttonDestroy = !1,
                this.instance.getPaneHeight = ()=>this.getPaneHeight(),
                this.instance.updateScreenHeights = ()=>this.updateScreenHeights(),
                this.instance.setOverflowHeight = ()=>this.setOverflowHeight(),
                this.instance.checkOpacityAttr = ()=>{}
                ,
                this.instance.checkOverflowAttr = t=>this.checkOverflowAttr(t),
                this.instance.prepareBreaksSwipeNextPoint = ()=>this.prepareBreaksSwipeNextPoint(),
                this.events.handleTopperLowerPositions = t=>this.handleTopperLowerPositions(t),
                this.events.scrollPreventDrag = t=>this.scrollPreventDrag(t),
                this.events.onScroll = ()=>this.onScroll(),
                this.instance.on("DOMElementsReady", (()=>{
                    this.instance.wrapperEl.classList.add("inverse")
                }
                )),
                this.instance.on("rendered", (()=>{
                    this.instance.addStyle("\n        .cupertino-pane-wrapper.inverse .pane {\n          border-radius: 0 0 20px 20px;\n          border-radius: 0 0\n                        var(--cupertino-pane-border-radius, 20px) \n                        var(--cupertino-pane-border-radius, 20px);\n        }\n        .cupertino-pane-wrapper.inverse:not(.fit-height) .pane {\n          padding-bottom: 15px; \n        }\n        .cupertino-pane-wrapper.inverse .draggable {\n          bottom: 0;\n          top: initial;\n        }\n        .cupertino-pane-wrapper.inverse .draggable.over {\n          bottom: -30px;\n          top: initial;\n        }\n        .cupertino-pane-wrapper.inverse .move {\n          margin-top: 15px;\n        }\n        .cupertino-pane-wrapper.inverse .draggable.over .move {\n          margin-top: -5px;\n        }\n      ")
                }
                )),
                this.instance.on("beforeBreakHeightApplied", (t=>{
                    var e;
                    (null === (e = this.settings.breaks[t.break]) || void 0 === e ? void 0 : e.enabled) && (this.breakpoints.breaks[t.break] = 2 * (this.settings.breaks[t.break].height + this.settings.bottomOffset))
                }
                ), !1),
                this.instance.on("buildBreakpointsCompleted", (()=>{
                    this.breakpoints.topper = this.breakpoints.bottomer,
                    this.instance.paneEl.style.top = `-${this.breakpoints.bottomer - this.settings.bottomOffset}px`
                }
                )))
            }
            getPaneHeight() {
                return this.breakpoints.bottomer - this.settings.bottomOffset
            }
            updateScreenHeights() {
                this.instance.screen_height = window.innerHeight,
                this.instance.screenHeightOffset = 0
            }
            setOverflowHeight() {
                this.instance.overflowEl.style.height = this.getPaneHeight() - 30 - this.settings.topperOverflowOffset - this.instance.overflowEl.offsetTop + "px"
            }
            checkOverflowAttr(t) {
                this.settings.topperOverflow && this.instance.overflowEl && (this.instance.overflowEl.style.overflowY = t >= this.breakpoints.bottomer ? "auto" : "hidden")
            }
            prepareBreaksSwipeNextPoint() {
                let t = {}
                  , e = {};
                return t.top = this.breakpoints.breaks.bottom,
                t.middle = this.breakpoints.breaks.middle,
                t.bottom = this.breakpoints.breaks.top,
                e.top = Object.assign({}, this.settings.breaks.bottom),
                e.middle = Object.assign({}, this.settings.breaks.middle),
                e.bottom = Object.assign({}, this.settings.breaks.top),
                {
                    brs: t,
                    settingsBreaks: e
                }
            }
            handleTopperLowerPositions(t) {
                if (this.settings.upperThanTop && (t.newVal >= this.breakpoints.topper || this.events.startPointOverTop)) {
                    this.events.startPointOverTop || (this.events.startPointOverTop = t.clientY),
                    this.events.startPointOverTop > t.clientY && delete this.events.startPointOverTop;
                    const e = this.instance.screen_height - this.instance.screenHeightOffset
                      , s = (e - this.instance.getPanelTransformY()) / (e - this.breakpoints.topper) / 8;
                    return this.instance.getPanelTransformY() + t.diffY * s
                }
                if (!this.settings.upperThanTop && t.newVal >= this.breakpoints.topper)
                    return this.breakpoints.topper
            }
            scrollPreventDrag(t) {
                let e = !1;
                return this.events.willScrolled() && this.isOverflowEl(t.target) && (e = !0),
                e
            }
            isOverflowEl(t) {
                if (!t)
                    return !1;
                let e = t.parentNode;
                for (; null != e; ) {
                    if (e == this.instance.overflowEl)
                        return !0;
                    e = e.parentNode
                }
                return !1
            }
            onScroll() {
                return t(this, void 0, void 0, (function*() {
                    this.events.isScrolling = !0
                }
                ))
            }
        }
        ,
        HorizontalModule: class {
            constructor(t) {
                this.instance = t,
                this.settings = this.instance.settings,
                this.transitions = this.instance.transitions,
                this.events = this.instance.events,
                this.settings.horizontal && (this.settings.touchAngle = null,
                this.transitions.setPaneElTransform = t=>this.setPaneElTransform(t),
                this.instance.on("onTransitionEnd", (t=>{
                    "breakpoint" !== t.type && "present" !== t.type || this.instance.getPanelTransformX() || this.calcHorizontalBreaks()
                }
                )),
                this.instance.on("onDragEnd", (t=>{
                    this.fastSwipeNext = this.events.fastSwipeNext("X")
                }
                )))
            }
            calcHorizontalBreaks() {
                this.defaultRect = {
                    width: this.instance.paneEl.getBoundingClientRect().width,
                    left: this.instance.paneEl.getBoundingClientRect().left,
                    right: this.instance.paneEl.getBoundingClientRect().right
                },
                this.horizontalBreaks = [-this.defaultRect.left + this.settings.horizontalOffset, window.innerWidth - this.defaultRect.left - this.defaultRect.width - this.settings.horizontalOffset]
            }
            setPaneElTransform(t) {
                let e = t.translateX;
                "end" === t.type && (e = this.getClosestBreakX(),
                this.fastSwipeNext && ("left" === this.currentBreakpoint && this.instance.getPanelTransformX() > this.horizontalBreaks[0] && (e = this.horizontalBreaks[1]),
                "right" === this.currentBreakpoint && this.instance.getPanelTransformX() < this.horizontalBreaks[1] && (e = this.horizontalBreaks[0])),
                this.currentBreakpoint = e === this.horizontalBreaks[0] ? "left" : "right"),
                this.instance.paneEl.style.transform = `translateX(${e || 0}px) translateY(${t.translateY}px) translateZ(0px)`
            }
            getClosestBreakX() {
                return this.horizontalBreaks.reduce(((t,e)=>Math.abs(e - this.instance.getPanelTransformX()) < Math.abs(t - this.instance.getPanelTransformX()) ? e : t))
            }
        }
    };
    return class {
        constructor(t, e={}) {
            if (this.selector = t,
            this.disableDragEvents = !1,
            this.preventDismissEvent = !1,
            this.preventedDismiss = !1,
            this.rendered = !1,
            this.settings = (new n).instance,
            this.device = new s,
            this.modules = {},
            this.eventsListeners = {},
            this.on = h,
            this.emit = l,
            this.swipeNextPoint = (t,e,s)=>{
                let {brs: i, settingsBreaks: n} = this.prepareBreaksSwipeNextPoint();
                if (this.breakpoints.currentBreakpoint === i.top) {
                    if (t > e) {
                        if (n.middle.enabled)
                            return i.middle;
                        if (n.bottom.enabled)
                            return i.middle < s ? s : i.bottom
                    }
                    return i.top
                }
                if (this.breakpoints.currentBreakpoint === i.middle)
                    return t < -e && n.top.enabled ? i.top : t > e && n.bottom.enabled ? i.bottom : i.middle;
                if (this.breakpoints.currentBreakpoint === i.bottom) {
                    if (t < -e) {
                        if (n.middle.enabled)
                            return i.middle > s ? s : i.middle;
                        if (n.top.enabled)
                            return i.top
                    }
                    return i.bottom
                }
                return s
            }
            ,
            t instanceof HTMLElement ? this.selector = t : this.selector = document.querySelector(t),
            !this.selector)
                return void console.warn("Cupertino Pane: wrong selector or DOM element specified", this.selector);
            if (this.isPanePresented())
                return void console.error("Cupertino Pane: specified selector or DOM element already in use", this.selector);
            this.el = this.selector,
            this.el.style.display = "none",
            this.settings = Object.assign(Object.assign({}, this.settings), e),
            this.settings.parentElement ? this.settings.parentElement = document.querySelector(this.settings.parentElement) : this.settings.parentElement = this.el.parentElement,
            this.settings.events && Object.keys(this.settings.events).forEach((t=>this.on(t, this.settings.events[t]))),
            this.breakpoints = new r(this,this.settings),
            this.transitions = new a(this,this.settings,this.breakpoints),
            this.events = new i(this,this.settings,this.device,this.breakpoints,this.transitions);
            let o = Object.keys(c).map((t=>c[t]));
            (this.settings.modules || o).forEach((t=>this.modules[this.getModuleRef(t.name)] = new t(this)))
        }
        drawBaseElements() {
            this.parentEl = this.settings.parentElement,
            this.wrapperEl = document.createElement("div"),
            this.wrapperEl.classList.add("cupertino-pane-wrapper"),
            this.settings.cssClass && this.settings.cssClass.split(" ").filter((t=>!!t)).forEach((t=>this.wrapperEl.classList.add(t)));
            let t = "";
            t += "\n      .cupertino-pane-wrapper {\n        display: none;\n        position: absolute;\n        top: 0;\n        left: 0;\n      }\n    ",
            this.paneEl = document.createElement("div"),
            this.paneEl.style.transform = `translateY(${this.screenHeightOffset}px) translateZ(0px)`,
            this.paneEl.classList.add("pane"),
            t += "\n      .cupertino-pane-wrapper .pane {\n        position: fixed;\n        z-index: 11;\n        width: 100%;\n        max-width: 500px;\n        left: 0px;\n        right: 0px;\n        margin-left: auto;\n        margin-right: auto;\n        background: var(--cupertino-pane-background, #ffffff);\n        color: var(--cupertino-pane-color, #333333);\n        box-shadow: var(--cupertino-pane-shadow, 0 4px 16px rgba(0,0,0,.12));\n        will-change: transform;\n        padding-top: 15px; \n        border-radius: var(--cupertino-pane-border-radius, 20px) \n                       var(--cupertino-pane-border-radius, 20px) \n                       0 0;\n        -webkit-user-select: none;\n      }\n      .cupertino-pane-wrapper .pane img {\n        -webkit-user-drag: none;\n      }\n    ",
            this.draggableEl = document.createElement("div"),
            this.draggableEl.classList.add("draggable"),
            this.settings.draggableOver && this.draggableEl.classList.add("over"),
            t += "\n      .cupertino-pane-wrapper .draggable {\n        padding: 5px;\n        position: absolute;\n        left: 0;\n        right: 0;\n        margin-left: auto;\n        margin-right: auto;\n        height: 30px;\n        z-index: -1;\n        top: 0;\n        bottom: initial;\n      }\n      .cupertino-pane-wrapper .draggable.over {\n        top: -30px;\n        padding: 15px;\n      }\n    ",
            this.moveEl = document.createElement("div"),
            this.moveEl.classList.add("move"),
            t += `\n      .cupertino-pane-wrapper .move {\n        margin: 0 auto;\n        height: 5px;\n        background: var(--cupertino-pane-move-background, #c0c0c0);\n        width: 36px;\n        border-radius: 4px;\n      }\n      .cupertino-pane-wrapper .draggable.over .move {\n        width: 70px; \n        background: var(--cupertino-pane-move-background, rgba(225, 225, 225, 0.6));\n        ${e.backdropFilter ? "\n          backdrop-filter: saturate(180%) blur(20px);\n          -webkit-backdrop-filter: saturate(180%) blur(20px);\n        " : ""}\n      }\n    `,
            this.destroyButtonEl = document.createElement("div"),
            this.destroyButtonEl.classList.add("destroy-button"),
            t += "\n      .cupertino-pane-wrapper .destroy-button {\n        width: 26px;\n        height: 26px;\n        position: absolute;\n        background: var(--cupertino-pane-destroy-button-background, #ebebeb);\n        fill: var(--cupertino-pane-icon-close-color, #7a7a7e);\n        right: 20px;\n        z-index: 14;\n        border-radius: 100%;\n        top: 16px;\n      }\n    ",
            this.contentEl = this.el,
            this.contentEl.style.transition = `opacity ${this.settings.animationDuration}ms ${this.settings.animationType} 0s`,
            this.contentEl.style.overflowX = "hidden",
            this.addStyle(t),
            this.parentEl.appendChild(this.wrapperEl),
            this.wrapperEl.appendChild(this.paneEl),
            this.paneEl.appendChild(this.contentEl),
            this.settings.showDraggable && (this.paneEl.appendChild(this.draggableEl),
            this.draggableEl.appendChild(this.moveEl)),
            this.emit("DOMElementsReady")
        }
        present(e={
            animate: !1
        }) {
            var s;
            return t(this, void 0, void 0, (function*() {
                if (this.el && document.body.contains(this.el))
                    if (this.isPanePresented() && this.rendered)
                        this.moveToBreak(this.settings.initialBreak);
                    else {
                        if (!this.isPanePresented() || this.rendered)
                            return this.emit("onWillPresent"),
                            this.updateScreenHeights(),
                            this.drawBaseElements(),
                            yield this.setBreakpoints(),
                            this.paneEl.style.height = `${this.getPaneHeight()}px`,
                            Object.assign(this.paneEl.style, null === (s = null == e ? void 0 : e.transition) || void 0 === s ? void 0 : s.from),
                            this.wrapperEl.style.display = "block",
                            yield new Promise((t=>setTimeout(t, 100))),
                            this.contentEl.style.display = "block",
                            this.wrapperEl.classList.add("rendered"),
                            this.rendered = !0,
                            this.scrollElementInit(),
                            this.checkOverflowAttr(this.breakpoints.currentBreakpoint),
                            this.emit("rendered"),
                            this.settings.buttonDestroy && (this.paneEl.appendChild(this.destroyButtonEl),
                            this.destroyButtonEl.addEventListener("click", (t=>this.destroy({
                                animate: !0,
                                destroyButton: !0
                            }))),
                            this.destroyButtonEl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n          <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"/>\n        </svg>'),
                            this.settings.bottomClose && (this.settings.breaks.bottom.enabled = !0),
                            this.settings.freeMode && (this.settings.lowerThanBottom = !1),
                            this.setGrabCursor(!0),
                            this.checkOpacityAttr(this.breakpoints.currentBreakpoint),
                            this.device.android && (document.body.style.overscrollBehaviorY = "none"),
                            this.emit("beforePresentTransition", {
                                animate: e.animate
                            }),
                            e.animate ? yield this.transitions.doTransition({
                                type: "present",
                                conf: e,
                                translateY: this.breakpoints.breaks[this.settings.initialBreak]
                            }) : (this.breakpoints.prevBreakpoint = this.settings.initialBreak,
                            this.paneEl.style.transform = `translateY(${this.breakpoints.breaks[this.settings.initialBreak]}px) translateZ(0px)`),
                            this.events.attachAllEvents(),
                            this.emit("onDidPresent"),
                            this;
                        console.warn("Cupertino Pane: specified selector or DOM element already in use", this.selector)
                    }
                else
                    console.warn("Cupertino Pane: specified DOM element must be attached to the DOM")
            }
            ))
        }
        getPaneHeight() {
            return this.screen_height - this.breakpoints.topper - this.settings.bottomOffset
        }
        updateScreenHeights() {
            this.screen_height = window.innerHeight,
            this.screenHeightOffset = window.innerHeight
        }
        scrollElementInit() {
            let t = this.el.querySelectorAll("[overflow-y]");
            !t.length || t.length > 1 ? this.overflowEl = this.contentEl : (this.overflowEl = t[0],
            this.overflowEl.style.overflowX = "hidden"),
            this.overflowEl.style.overscrollBehavior = "none",
            this.settings.topperOverflow && (this.settings.upperThanTop && console.warn('Cupertino Pane: "upperThanTop" allowed for disabled "topperOverflow"'),
            this.setOverflowHeight())
        }
        setOverflowHeight(t=0) {
            this.overflowEl.style.height = this.getPaneHeight() - this.settings.topperOverflowOffset - this.overflowEl.offsetTop - t + "px"
        }
        checkOpacityAttr(t) {
            let e = this.el.querySelectorAll("[hide-on-bottom]");
            e.length && e.forEach((e=>{
                e.style.transition = `opacity ${this.settings.animationDuration}ms ${this.settings.animationType} 0s`,
                e.style.opacity = t >= this.breakpoints.breaks.bottom ? "0" : "1"
            }
            ))
        }
        checkOverflowAttr(t) {
            this.settings.topperOverflow && this.overflowEl && (this.overflowEl.style.overflowY = t <= this.breakpoints.topper ? "auto" : "hidden")
        }
        isPanePresented() {
            let t = Array.from(document.querySelectorAll(".cupertino-pane-wrapper.rendered"));
            return !!t.length && !!t.find((t=>t.contains(this.selector)))
        }
        prepareBreaksSwipeNextPoint() {
            return {
                brs: Object.assign({}, this.breakpoints.breaks),
                settingsBreaks: Object.assign({}, this.settings.breaks)
            }
        }
        addStyle(t) {
            if (t = t.replace(/\s\s+/g, " "),
            document.querySelector("#cupertino-panes-internal")) {
                document.querySelector("#cupertino-panes-internal").textContent += t
            } else {
                const e = document.createElement("style");
                e.id = "cupertino-panes-internal",
                e.textContent = t,
                document.head.prepend(e)
            }
        }
        getModuleRef(t) {
            return (t.charAt(0).toLowerCase() + t.slice(1)).replace("Module", "")
        }
        getPanelTransformY() {
            return parseFloat(/\.*translateY\((.*)px\)/i.exec(this.paneEl.style.transform)[1])
        }
        getPanelTransformX() {
            let t = /\.*translateX\((.*)px\)/i.exec(this.paneEl.style.transform);
            return t ? parseFloat(t[1]) : 0
        }
        preventDismiss(t=!1) {
            this.preventDismissEvent = t
        }
        setGrabCursor(t, e) {
            this.device.desktop && (this.paneEl.style.cursor = t ? e ? "grabbing" : "grab" : "")
        }
        disableDrag() {
            this.disableDragEvents = !0,
            this.setGrabCursor(!1)
        }
        enableDrag() {
            this.disableDragEvents = !1,
            this.setGrabCursor(!0)
        }
        setBreakpoints(e, s) {
            return t(this, void 0, void 0, (function*() {
                !this.isPanePresented() || e ? yield this.breakpoints.buildBreakpoints(e, s) : console.warn("Cupertino Pane: Provide any breaks configuration")
            }
            ))
        }
        moveToBreak(e, s="breakpoint") {
            return t(this, void 0, void 0, (function*() {
                return this.isPanePresented() ? this.settings.breaks[e].enabled ? (this.checkOpacityAttr(this.breakpoints.breaks[e]),
                this.checkOverflowAttr(this.breakpoints.breaks[e]),
                yield this.transitions.doTransition({
                    type: s,
                    translateY: this.breakpoints.breaks[e]
                }),
                this.breakpoints.currentBreakpoint = this.breakpoints.breaks[e],
                Promise.resolve(!0)) : void console.warn("Cupertino Pane: %s breakpoint disabled", e) : (console.warn("Cupertino Pane: Present pane before call moveToBreak()"),
                null)
            }
            ))
        }
        moveToHeight(e) {
            return t(this, void 0, void 0, (function*() {
                if (!this.isPanePresented())
                    return console.warn("Cupertino Pane: Present pane before call moveToHeight()"),
                    null;
                let t = this.screenHeightOffset ? this.screen_height - e : e;
                this.checkOpacityAttr(t),
                yield this.transitions.doTransition({
                    type: "breakpoint",
                    translateY: t
                })
            }
            ))
        }
        hide() {
            return t(this, void 0, void 0, (function*() {
                return this.isPanePresented() ? this.isHidden() ? (console.warn("Cupertino Pane: Pane already hidden"),
                null) : void (yield this.transitions.doTransition({
                    type: "hide",
                    translateY: this.screenHeightOffset
                })) : (console.warn("Cupertino Pane: Present pane before call hide()"),
                null)
            }
            ))
        }
        isHidden() {
            return this.isPanePresented() ? this.transitions.isPaneHidden : (console.warn("Cupertino Pane: Present pane before call isHidden()"),
            null)
        }
        currentBreak() {
            return this.isPanePresented() ? this.breakpoints.getCurrentBreakName() : (console.warn("Cupertino Pane: Present pane before call currentBreak()"),
            null)
        }
        destroy(e={
            animate: !1,
            destroyButton: !1
        }) {
            return t(this, void 0, void 0, (function*() {
                if (!this.rendered)
                    return console.warn("Cupertino Pane: Present pane before call destroy()"),
                    null;
                this.preventDismissEvent ? this.preventedDismiss || (this.emit("onWillDismiss", {
                    prevented: !0
                }),
                this.moveToBreak(this.breakpoints.prevBreakpoint)) : (this.emit("onWillDismiss"),
                e.animate ? yield this.transitions.doTransition({
                    type: "destroy",
                    conf: e,
                    translateY: this.screenHeightOffset,
                    destroyButton: e.destroyButton
                }) : this.destroyResets(),
                this.emit("onDidDismiss", {
                    destroyButton: e.destroyButton
                }))
            }
            ))
        }
        destroyResets() {
            this.parentEl.appendChild(this.contentEl),
            this.wrapperEl.remove(),
            this.events.detachAllEvents(),
            delete this.rendered,
            delete this.breakpoints.prevBreakpoint,
            this.contentEl.style.display = "none"
        }
    }
}
));
//# sourceMappingURL=cupertino-pane.min.js.map