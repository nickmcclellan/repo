/*
 * jquery.tools 1.0.2 - The missing UI library
 * 
 * [tools.tooltip-1.0.2]
 * 
 * Copyright (c) 2009 Tero Piirainen
 * http://flowplayer.org/tools/
 *
 * Dual licensed under MIT and GPL 2+ licenses
 * http://www.opensource.org/licenses
 * 
 * -----
 * 
 * Build: Fri Jun 12 12:46:48 GMT+00:00 2009
 */
(function(c){c.tools=c.tools||{version:{}};c.tools.version.tooltip="1.0.2";var b={toggle:[function(){this.getTip().show()},function(){this.getTip().hide()}],fade:[function(){this.getTip().fadeIn(this.getConf().fadeInSpeed)},function(){this.getTip().fadeOut(this.getConf().fadeOutSpeed)}]};c.tools.addTipEffect=function(d,f,e){b[d]=[f,e]};c.tools.addTipEffect("slideup",function(){var d=this.getConf();var e=d.slideOffset||10;this.getTip().css({opacity:0}).animate({top:"-="+e,opacity:d.opacity},d.slideInSpeed||200).show()},function(){var d=this.getConf();var e=d.slideOffset||10;this.getTip().animate({top:"-="+e,opacity:0},d.slideOutSpeed||200,function(){c(this).hide().animate({top:"+="+(e*2)},0)})});function a(f,e){var d=this;var h=f.next();if(e.tip){if(e.tip.indexOf("#")!=-1){h=c(e.tip)}else{h=f.nextAll(e.tip).eq(0);if(!h.length){h=f.parent().nextAll(e.tip).eq(0)}}}function j(k,l){c(d).bind(k,function(n,m){if(l&&l.call(this)===false&&m){m.proceed=false}});return d}c.each(e,function(k,l){if(c.isFunction(l)){j(k,l)}});var g=f.is("input, textarea");f.bind(g?"focus":"mouseover",function(k){k.target=this;d.show(k);h.hover(function(){d.show()},function(){d.hide()})});f.bind(g?"blur":"mouseout",function(){d.hide()});h.css("opacity",e.opacity);var i=0;c.extend(d,{show:function(q){if(q){f=c(q.target)}clearTimeout(i);if(h.is(":animated")||h.is(":visible")){return d}var o={proceed:true};c(d).trigger("onBeforeShow",o);if(!o.proceed){return d}var n=f.position().top-h.outerHeight();var k=h.outerHeight()+f.outerHeight();var r=e.position[0];if(r=="center"){n+=k/2}if(r=="bottom"){n+=k}var l=f.outerWidth()+h.outerWidth();var m=f.position().left+f.outerWidth();r=e.position[1];if(r=="center"){m-=l/2}if(r=="left"){m-=l}n+=e.offset[0];m+=e.offset[1];h.css({position:"absolute",top:n,left:m});b[e.effect][0].call(d);c(d).trigger("onShow");return d},hide:function(){clearTimeout(i);i=setTimeout(function(){if(!h.is(":visible")){return d}var k={proceed:true};c(d).trigger("onBeforeHide",k);if(!k.proceed){return d}b[e.effect][1].call(d);c(d).trigger("onHide")},e.delay||1);return d},isShown:function(){return h.is(":visible, :animated")},getConf:function(){return e},getTip:function(){return h},getTrigger:function(){return f},onBeforeShow:function(k){return j("onBeforeShow",k)},onShow:function(k){return j("onShow",k)},onBeforeHide:function(k){return j("onBeforeHide",k)},onHide:function(k){return j("onHide",k)}})}c.prototype.tooltip=function(d){var e=this.eq(typeof d=="number"?d:0).data("tooltip");if(e){return e}var f={tip:null,effect:"slideup",delay:30,opacity:1,position:["top","center"],offset:[0,0],api:false};if(c.isFunction(d)){d={onBeforeShow:d}}c.extend(f,d);this.each(function(){e=new a(c(this),f);c(this).data("tooltip",e)});return f.api?e:this}})(jQuery);
