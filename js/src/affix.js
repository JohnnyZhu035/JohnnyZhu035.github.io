/* ========================================================================
 * Bootstrap: affix.js v3.3.5
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
!function(t){"use strict";
// AFFIX CLASS DEFINITION
// ======================
var i=function(e,o){this.options=t.extend({},i.DEFAULTS,o),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};
// AFFIX PLUGIN DEFINITION
// =======================
function e(e){return this.each((function(){var o=t(this),f=o.data("bs.affix"),n="object"==typeof e&&e;f||o.data("bs.affix",f=new i(this,n)),"string"==typeof e&&f[e]()}))}i.VERSION="3.3.5",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,i,e,o){var f=this.$target.scrollTop(),n=this.$element.offset(),s=this.$target.height();if(null!=e&&"top"==this.affixed)return f<e&&"top";if("bottom"==this.affixed)return null!=e?!(f+this.unpin<=n.top)&&"bottom":!(f+s<=t-o)&&"bottom";var a=null==this.affixed,h=a?f:n.top;return null!=e&&f<=e?"top":null!=o&&h+(a?s:i)>=t-o&&"bottom"},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),o=this.options.offset,f=o.top,n=o.bottom,s=Math.max(t(document).height(),t(document.body).height());"object"!=typeof o&&(n=f=o),"function"==typeof f&&(f=o.top(this.$element)),"function"==typeof n&&(n=o.bottom(this.$element));var a=this.getState(s,e,f,n);if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","");var h="affix"+(a?"-"+a:""),r=t.Event(h+".bs.affix");if(this.$element.trigger(r),r.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(h).trigger(h.replace("affix","affixed")+".bs.affix")}"bottom"==a&&this.$element.offset({top:s-e-n})}};var o=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,
// AFFIX NO CONFLICT
// =================
t.fn.affix.noConflict=function(){return t.fn.affix=o,this}
// AFFIX DATA-API
// ==============
,t(window).on("load",(function(){t('[data-spy="affix"]').each((function(){var i=t(this),o=i.data();o.offset=o.offset||{},null!=o.offsetBottom&&(o.offset.bottom=o.offsetBottom),null!=o.offsetTop&&(o.offset.top=o.offsetTop),e.call(i,o)}))}))}(jQuery);