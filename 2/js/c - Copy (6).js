/*****************************************************************************************************
 * jquery.themepunch.revmigrate.js - jQuery Plugin for Revolution Slider Migration from 4.x to 5.0   
 * @version: 1.0.2 (20.01.2016)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
 *****************************************************************************************************/
! function (t) {
    var a = jQuery.fn.revolution;
    jQuery.extend(!0, a, {
        migration: function (t, a) {
            return a = o(a), e(t, a), a
        }
    });
    var o = function (t) {
            if (t.parallaxLevels || t.parallaxBgFreeze) {
                var a = new Object;
                a.type = t.parallax, a.levels = t.parallaxLevels, a.bgparallax = "on" == t.parallaxBgFreeze ? "off" : "on", a.disable_onmobile = t.parallaxDisableOnMobile, t.parallax = a
            }
            if (void 0 === t.disableProgressBar && (t.disableProgressBar = t.hideTimerBar || "off"), (t.startwidth || t.startheight) && (t.gridwidth = t.startwidth, t.gridheight = t.startheight), void 0 === t.sliderType && (t.sliderType = "standard"), "on" === t.fullScreen && (t.sliderLayout = "fullscreen"), "on" === t.fullWidth && (t.sliderLayout = "fullwidth"), void 0 === t.sliderLayout && (t.sliderLayout = "auto"), void 0 === t.navigation) {
                var o = new Object;
                if ("solo" == t.navigationArrows || "nextto" == t.navigationArrows) {
                    var e = new Object;
                    e.enable = !0, e.style = t.navigationStyle || "", e.hide_onmobile = "on" === t.hideArrowsOnMobile ? !0 : !1, e.hide_onleave = t.hideThumbs > 0 ? !0 : !1, e.hide_delay = t.hideThumbs > 0 ? t.hideThumbs : 200, e.hide_delay_mobile = t.hideNavDelayOnMobile || 1500, e.hide_under = 0, e.tmp = "", e.left = {
                        h_align: t.soloArrowLeftHalign,
                        v_align: t.soloArrowLeftValign,
                        h_offset: t.soloArrowLeftHOffset,
                        v_offset: t.soloArrowLeftVOffset
                    }, e.right = {
                        h_align: t.soloArrowRightHalign,
                        v_align: t.soloArrowRightValign,
                        h_offset: t.soloArrowRightHOffset,
                        v_offset: t.soloArrowRightVOffset
                    }, o.arrows = e
                }
                if ("bullet" == t.navigationType) {
                    var r = new Object;
                    r.style = t.navigationStyle || "", r.enable = !0, r.hide_onmobile = "on" === t.hideArrowsOnMobile ? !0 : !1, r.hide_onleave = t.hideThumbs > 0 ? !0 : !1, r.hide_delay = t.hideThumbs > 0 ? t.hideThumbs : 200, r.hide_delay_mobile = t.hideNavDelayOnMobile || 1500, r.hide_under = 0, r.direction = "horizontal", r.h_align = t.navigationHAlign || "center", r.v_align = t.navigationVAlign || "bottom", r.space = 5, r.h_offset = t.navigationHOffset || 0, r.v_offset = t.navigationVOffset || 20, r.tmp = '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>', o.bullets = r
                }
                if ("thumb" == t.navigationType) {
                    var i = new Object;
                    i.style = t.navigationStyle || "", i.enable = !0, i.width = t.thumbWidth || 100, i.height = t.thumbHeight || 50, i.min_width = t.thumbWidth || 100, i.wrapper_padding = 2, i.wrapper_color = "#f5f5f5", i.wrapper_opacity = 1, i.visibleAmount = t.thumbAmount || 3, i.hide_onmobile = "on" === t.hideArrowsOnMobile ? !0 : !1, i.hide_onleave = t.hideThumbs > 0 ? !0 : !1, i.hide_delay = t.hideThumbs > 0 ? t.hideThumbs : 200, i.hide_delay_mobile = t.hideNavDelayOnMobile || 1500, i.hide_under = 0, i.direction = "horizontal", i.span = !1, i.position = "inner", i.space = 2, i.h_align = t.navigationHAlign || "center", i.v_align = t.navigationVAlign || "bottom", i.h_offset = t.navigationHOffset || 0, i.v_offset = t.navigationVOffset || 20, i.tmp = '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>', o.thumbnails = i
                }
                t.navigation = o, t.navigation.keyboardNavigation = t.keyboardNavigation || "on", t.navigation.onHoverStop = t.onHoverStop || "on", t.navigation.touch = {
                    touchenabled: t.touchenabled || "on",
                    swipe_treshold: t.swipe_treshold || 75,
                    swipe_min_touches: t.swipe_min_touches || 1,
                    drag_block_vertical: t.drag_block_vertical || !1
                }
            }
            return void 0 == t.fallbacks && (t.fallbacks = {
                isJoomla: t.isJoomla || !1,
                panZoomDisableOnMobile: t.parallaxDisableOnMobile || "off",
                simplifyAll: t.simplifyAll || "on",
                nextSlideOnWindowFocus: t.nextSlideOnWindowFocus || "off",
                disableFocusListener: t.disableFocusListener || !0
            }), t
        },
        e = function (t, a) {
            var o = new Object,
                e = t.width(),
                r = t.height();
            o.skewfromleftshort = "x:-50;skX:85;o:0", o.skewfromrightshort = "x:50;skX:-85;o:0", o.sfl = "x:-50;o:0", o.sfr = "x:50;o:0", o.sft = "y:-50;o:0", o.sfb = "y:50;o:0", o.skewfromleft = "x:top;skX:85;o:0", o.skewfromright = "x:bottom;skX:-85;o:0", o.lfl = "x:top;o:0", o.lfr = "x:bottom;o:0", o.lft = "y:left;o:0", o.lfb = "y:right;o:0", o.fade = "o:0";
            720 * Math.random() - 360;
            t.find(".tp-caption").each(function () {
                var t = jQuery(this),
                    a = (Math.random() * (2 * e) - e, Math.random() * (2 * r) - r, 3 * Math.random(), 720 * Math.random() - 360, 70 * Math.random() - 35, 70 * Math.random() - 35, t.attr("class"));
                o.randomrotate = "x:{-400,400};y:{-400,400};sX:{0,2};sY:{0,2};rZ:{-180,180};rX:{-180,180};rY:{-180,180};o:0;", a.match("randomrotate") ? t.data("transform_in", o.randomrotate) : a.match(/\blfl\b/) ? t.data("transform_in", o.lfl) : a.match(/\blfr\b/) ? t.data("transform_in", o.lfr) : a.match(/\blft\b/) ? t.data("transform_in", o.lft) : a.match(/\blfb\b/) ? t.data("transform_in", o.lfb) : a.match(/\bsfl\b/) ? t.data("transform_in", o.sfl) : a.match(/\bsfr\b/) ? t.data("transform_in", o.sfr) : a.match(/\bsft\b/) ? t.data("transform_in", o.sft) : a.match(/\bsfb\b/) ? t.data("transform_in", o.sfb) : a.match(/\bskewfromleftshort\b/) ? t.data("transform_in", o.skewfromleftshort) : a.match(/\bskewfromrightshort\b/) ? t.data("transform_in", o.skewfromrightshort) : a.match(/\bskewfromleft\b/) ? t.data("transform_in", o.skewfromleft) : a.match(/\bskewfromright\b/) ? t.data("transform_in", o.skewfromright) : a.match(/\bfade\b/) && t.data("transform_in", o.fade), a.match(/\brandomrotateout\b/) ? t.data("transform_out", o.randomrotate) : a.match(/\bltl\b/) ? t.data("transform_out", o.lfl) : a.match(/\bltr\b/) ? t.data("transform_out", o.lfr) : a.match(/\bltt\b/) ? t.data("transform_out", o.lft) : a.match(/\bltb\b/) ? t.data("transform_out", o.lfb) : a.match(/\bstl\b/) ? t.data("transform_out", o.sfl) : a.match(/\bstr\b/) ? t.data("transform_out", o.sfr) : a.match(/\bstt\b/) ? t.data("transform_out", o.sft) : a.match(/\bstb\b/) ? t.data("transform_out", o.sfb) : a.match(/\bskewtoleftshortout\b/) ? t.data("transform_out", o.skewfromleftshort) : a.match(/\bskewtorightshortout\b/) ? t.data("transform_out", o.skewfromrightshort) : a.match(/\bskewtoleftout\b/) ? t.data("transform_out", o.skewfromleft) : a.match(/\bskewtorightout\b/) ? t.data("transform_out", o.skewfromright) : a.match(/\bfadeout\b/) && t.data("transform_out", o.fade), void 0 != t.data("customin") && t.data("transform_in", t.data("customin")), void 0 != t.data("customout") && t.data("transform_out", t.data("customout"))
            })
        }
}(jQuery);
