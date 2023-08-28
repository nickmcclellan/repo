$(document).ready(function() {

/* ABOUT MENU ITEM */
	$("div.about").css({"background-color" : "#333333", "display" : "block"});
	$("div.about").hover(function() {
		$("div.aboutcontent").stop(true, true).slideDown("normal");
		$("div.about").stop(true, true).animate({ backgroundColor: "#0000FF" }, 800);
	},function() {
		$("div.about").stop(true, true).animate({ backgroundColor: "#333333" }, 400);
	});
/* PORTFOLIO MENU ITEM */
	$("div.portfolio").css({"background-color" : "#333333", "display" : "block"});
	$("div.portfolio").hover(function() {
		$("div.portfoliocontent").stop(true, true).slideDown("normal");
		$("div.portfolio").stop(true, true).animate({ backgroundColor: "#993300" }, 800);
	},function() {
		$("div.portfolio").stop(true, true).animate({ backgroundColor: "#333333" }, 400);
	});
/* RESUME MENU ITEM */
	$("div.resume").css({"background-color" : "#333333", "display" : "block"});
	$("div.resume").hover(function() {
		$("div.resumecontent").stop(true, true).slideDown("normal");
		$("div.resume").stop(true, true).animate({ backgroundColor: "#FF0000" }, 800);
	},function() {
		$("div.resume").stop(true, true).animate({ backgroundColor: "#333333" }, 400);
	});
/* SOCIAL MENU ITEM */
	$("div.social").css({"background-color" : "#333333", "display" : "block"});
	$("div.social").hover(function() {
		$("div.socialcontent").stop(true, true).slideDown("normal");
		$("div.social").stop(true, true).animate({ backgroundColor: "#3B5998" }, 800);
	},function() {
		$("div.social").stop(true, true).animate({ backgroundColor: "#333333" }, 400);
	});
/* CONTACT MENU ITEM */
	$("div.contact").css({"background-color" : "#333333", "display" : "block"});
	$("div.contact").hover(function() {
		$("div.contact").stop(true, true).animate({ backgroundColor: "#660000" }, 800);
	},function() {
		$("div.contact").stop(true, true).animate({ backgroundColor: "#333333" }, 400);
	});
/* CONTACT MENU ITEM */
	$("#block-block-2").css({"background-color" : "#333333", "display" : "block"});
	$("#block-block-2").hover(function() {
		$("#block-block-2").stop(true, true).animate({ backgroundColor: "#FF0000" }, 800);
	},function() {
		$("#block-block-2").stop(true, true).animate({ backgroundColor: "#333333" }, 400);
	});			
/* ROLLOUT BEHAVIOR */
	$("div#sidebar-left").hover(function() {
		$("div.aboutcontent, div.portfoliocontent, div.resumecontent, div.socialcontent").stop(true, true).slideUp("normal");	
	},function() {
		$("div.aboutcontent, div.portfoliocontent, div.resumecontent, div.socialcontent").stop(true, true).slideUp("normal");	
	});
	
});