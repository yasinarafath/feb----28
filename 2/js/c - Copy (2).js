/********************************************
 * REVOLUTION 5.3 EXTENSION - ACTIONS
 * @version: 2.0.4 (24.11.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 *********************************************/
! function ($) {
    "use strict";
    var _R = jQuery.fn.revolution,
        _ISM = _R.is_mobile(),
        extension = {
            alias: "Actions Min JS",
            name: "revolution.extensions.actions.min.js",
            min_core: "5.3",
            version: "2.0.4"
        };
    jQuery.extend(!0, _R, {
        checkActions: function (a, b, c) {
            return "stop" !== _R.compare_version(extension).check && void checkActions_intern(a, b, c)
        }
    });
    var checkActions_intern = function (a, b, c) {
            c && jQuery.each(c, function (c, d) {
                d.delay = parseInt(d.delay, 0) / 1e3, a.addClass("tp-withaction"), b.fullscreen_esclistener || "exitfullscreen" != d.action && "togglefullscreen" != d.action || (jQuery(document).keyup(function (b) {
                    27 == b.keyCode && jQuery("#rs-go-fullscreen").length > 0 && a.trigger(d.event)
                }), b.fullscreen_esclistener = !0);
                var e = "backgroundvideo" == d.layer ? jQuery(".rs-background-video-layer") : "firstvideo" == d.layer ? jQuery(".tp-revslider-slidesli").find(".tp-videolayer") : jQuery("#" + d.layer);
                switch (jQuery.inArray(d.action, ["toggleslider", "toggle_mute_video", "toggle_global_mute_video", "togglefullscreen"]) != -1 && a.data("togglelisteners", !0), d.action) {
                    case "togglevideo":
                        jQuery.each(e, function (b, c) {
                            c = jQuery(c);
                            var d = c.data("videotoggledby");
                            void 0 == d && (d = new Array), d.push(a), c.data("videotoggledby", d)
                        });
                        break;
                    case "togglelayer":
                        jQuery.each(e, function (b, c) {
                            c = jQuery(c);
                            var e = c.data("layertoggledby");
                            void 0 == e && (e = new Array), e.push(a), c.data("layertoggledby", e), c.data("triggered_startstatus", d.layerstatus)
                        });
                        break;
                    case "toggle_mute_video":
                        jQuery.each(e, function (b, c) {
                            c = jQuery(c);
                            var d = c.data("videomutetoggledby");
                            void 0 == d && (d = new Array), d.push(a), c.data("videomutetoggledby", d)
                        });
                        break;
                    case "toggle_global_mute_video":
                        jQuery.each(e, function (b, c) {
                            c = jQuery(c);
                            var d = c.data("videomutetoggledby");
                            void 0 == d && (d = new Array), d.push(a), c.data("videomutetoggledby", d)
                        });
                        break;
                    case "toggleslider":
                        void 0 == b.slidertoggledby && (b.slidertoggledby = new Array), b.slidertoggledby.push(a);
                        break;
                    case "togglefullscreen":
                        void 0 == b.fullscreentoggledby && (b.fullscreentoggledby = new Array), b.fullscreentoggledby.push(a)
                }
                switch (a.on(d.event, function () {
                    if ("click" === d.event && a.hasClass("tp-temporarydisabled")) return !1;
                    var c = "backgroundvideo" == d.layer ? jQuery(".active-revslide .slotholder .rs-background-video-layer") : "firstvideo" == d.layer ? jQuery(".active-revslide .tp-videolayer").first() : jQuery("#" + d.layer);
                    if ("stoplayer" == d.action || "togglelayer" == d.action || "startlayer" == d.action) {
                        if (c.length > 0) {
                            var e = c.data();
                            "startlayer" == d.action || "togglelayer" == d.action && "in" != c.data("animdirection") ? (e.animdirection = "in", e.triggerstate = "on", _R.toggleState(e.layertoggledby), _R.playAnimationFrame && (clearTimeout(e.triggerdelay), e.triggerdelay = setTimeout(function () {
                                _R.playAnimationFrame({
                                    caption: c,
                                    opt: b,
                                    frame: "frame_0",
                                    triggerdirection: "in",
                                    triggerframein: "frame_0",
                                    triggerframeout: "frame_999"
                                })
                            }, 1e3 * d.delay))) : ("stoplayer" == d.action || "togglelayer" == d.action && "out" != c.data("animdirection")) && (e.animdirection = "out", e.triggered = !0, e.triggerstate = "off", _R.stopVideo && _R.stopVideo(c, b), _R.unToggleState(e.layertoggledby), _R.endMoveCaption && (clearTimeout(e.triggerdelay), e.triggerdelay = setTimeout(function () {
                                _R.playAnimationFrame({
                                    caption: c,
                                    opt: b,
                                    frame: "frame_999",
                                    triggerdirection: "out",
                                    triggerframein: "frame_0",
                                    triggerframeout: "frame_999"
                                })
                            }, 1e3 * d.delay)))
                        }
                    } else !_ISM || "playvideo" != d.action && "stopvideo" != d.action && "togglevideo" != d.action && "mutevideo" != d.action && "unmutevideo" != d.action && "toggle_mute_video" != d.action && "toggle_global_mute_video" != d.action ? (d.delay = "NaN" === d.delay || NaN === d.delay ? 0 : d.delay, punchgs.TweenLite.delayedCall(d.delay, function () {
                        actionSwitches(c, b, d, a)
                    }, [c, b, d, a])) : actionSwitches(c, b, d, a)
                }), d.action) {
                    case "togglelayer":
                    case "startlayer":
                    case "playlayer":
                    case "stoplayer":
                        var e = jQuery("#" + d.layer),
                            f = e.data();
                        e.length > 0 && void 0 !== f && (void 0 !== f.frames && "bytrigger" != f.frames[0].delay || void 0 === f.frames && "bytrigger" !== f.start) && (f.triggerstate = "on")
                }
            })
        },
        actionSwitches = function (tnc, opt, a, _nc) {
            switch (a.action) {
                case "scrollbelow":
                    _nc.addClass("tp-scrollbelowslider"), _nc.data("scrolloffset", a.offset), _nc.data("scrolldelay", a.delay);
                    var off = getOffContH(opt.fullScreenOffsetContainer) || 0,
                        aof = parseInt(a.offset, 0) || 0;
                    off = off - aof || 0, jQuery("body,html").animate({
                        scrollTop: opt.c.offset().top + jQuery(opt.li[0]).height() - off + "px"
                    }, {
                        duration: 400
                    });
                    break;
                case "callback":
                    eval(a.callback);
                    break;
                case "jumptoslide":
                    switch (a.slide.toLowerCase()) {
                        case "+1":
                        case "next":
                            opt.sc_indicator = "arrow", _R.callingNewSlide(opt.c, 1);
                            break;
                        case "previous":
                        case "prev":
                        case "-1":
                            opt.sc_indicator = "arrow", _R.callingNewSlide(opt.c, -1);
                            break;
                        default:
                            var ts = jQuery.isNumeric(a.slide) ? parseInt(a.slide, 0) : a.slide;
                            _R.callingNewSlide(opt.c, ts)
                    }
                    break;
                case "simplelink":
                    window.open(a.url, a.target);
                    break;
                case "toggleslider":
                    opt.noloopanymore = 0, "playing" == opt.sliderstatus ? (opt.c.revpause(), opt.forcepause_viatoggle = !0, _R.unToggleState(opt.slidertoggledby)) : (opt.forcepause_viatoggle = !1, opt.c.revresume(), _R.toggleState(opt.slidertoggledby));
                    break;
                case "pauseslider":
                    opt.c.revpause(), _R.unToggleState(opt.slidertoggledby);
                    break;
                case "playslider":
                    opt.noloopanymore = 0, opt.c.revresume(), _R.toggleState(opt.slidertoggledby);
                    break;
                case "playvideo":
                    tnc.length > 0 && _R.playVideo(tnc, opt);
                    break;
                case "stopvideo":
                    tnc.length > 0 && _R.stopVideo && _R.stopVideo(tnc, opt);
                    break;
                case "togglevideo":
                    tnc.length > 0 && (_R.isVideoPlaying(tnc, opt) ? _R.stopVideo && _R.stopVideo(tnc, opt) : _R.playVideo(tnc, opt));
                    break;
                case "mutevideo":
                    tnc.length > 0 && _R.muteVideo(tnc, opt);
                    break;
                case "unmutevideo":
                    tnc.length > 0 && _R.unMuteVideo && _R.unMuteVideo(tnc, opt);
                    break;
                case "toggle_mute_video":
                    tnc.length > 0 && (_R.isVideoMuted(tnc, opt) ? _R.unMuteVideo(tnc, opt) : _R.muteVideo && _R.muteVideo(tnc, opt)), _nc.toggleClass("rs-toggle-content-active");
                    break;
                case "toggle_global_mute_video":
                    opt.globalmute === !0 ? (opt.globalmute = !1, void 0 != opt.playingvideos && opt.playingvideos.length > 0 && jQuery.each(opt.playingvideos, function (a, b) {
                        _R.unMuteVideo && _R.unMuteVideo(b, opt)
                    })) : (opt.globalmute = !0, void 0 != opt.playingvideos && opt.playingvideos.length > 0 && jQuery.each(opt.playingvideos, function (a, b) {
                        _R.muteVideo && _R.muteVideo(b, opt)
                    })), _nc.toggleClass("rs-toggle-content-active");
                    break;
                case "simulateclick":
                    tnc.length > 0 && tnc.click();
                    break;
                case "toggleclass":
                    tnc.length > 0 && (tnc.hasClass(a.classname) ? tnc.removeClass(a.classname) : tnc.addClass(a.classname));
                    break;
                case "gofullscreen":
                case "exitfullscreen":
                case "togglefullscreen":
                    if (jQuery("#rs-go-fullscreen").length > 0 && ("togglefullscreen" == a.action || "exitfullscreen" == a.action)) {
                        jQuery("#rs-go-fullscreen").appendTo(jQuery("#rs-was-here"));
                        var paw = opt.c.closest(".forcefullwidth_wrapper_tp_banner").length > 0 ? opt.c.closest(".forcefullwidth_wrapper_tp_banner") : opt.c.closest(".rev_slider_wrapper");
                        paw.unwrap(), paw.unwrap(), opt.minHeight = opt.oldminheight, opt.infullscreenmode = !1, opt.c.revredraw(), void 0 != opt.playingvideos && opt.playingvideos.length > 0 && jQuery.each(opt.playingvideos, function (a, b) {
                            _R.playVideo(b, opt)
                        }), _R.unToggleState(opt.fullscreentoggledby)
                    } else if (0 == jQuery("#rs-go-fullscreen").length && ("togglefullscreen" == a.action || "gofullscreen" == a.action)) {
                        var paw = opt.c.closest(".forcefullwidth_wrapper_tp_banner").length > 0 ? opt.c.closest(".forcefullwidth_wrapper_tp_banner") : opt.c.closest(".rev_slider_wrapper");
                        paw.wrap('<div id="rs-was-here"><div id="rs-go-fullscreen"></div></div>');
                        var gf = jQuery("#rs-go-fullscreen");
                        gf.appendTo(jQuery("body")), gf.css({
                            position: "fixed",
                            width: "100%",
                            height: "100%",
                            top: "0px",
                            left: "0px",
                            zIndex: "9999999",
                            background: "#ffffff"
                        }), opt.oldminheight = opt.minHeight, opt.minHeight = jQuery(window).height(), opt.infullscreenmode = !0, opt.c.revredraw(), void 0 != opt.playingvideos && opt.playingvideos.length > 0 && jQuery.each(opt.playingvideos, function (a, b) {
                            _R.playVideo(b, opt)
                        }), _R.toggleState(opt.fullscreentoggledby)
                    }
                    break;
                default:
                    var obj = {};
                    obj.event = a, obj.layer = _nc, opt.c.trigger("layeraction", [obj])
            }
        },
        getOffContH = function (a) {
            if (void 0 == a) return 0;
            if (a.split(",").length > 1) {
                var b = a.split(","),
                    c = 0;
                return b && jQuery.each(b, function (a, b) {
                    jQuery(b).length > 0 && (c += jQuery(b).outerHeight(!0))
                }), c
            }
            return jQuery(a).height()
        }
}(jQuery);
