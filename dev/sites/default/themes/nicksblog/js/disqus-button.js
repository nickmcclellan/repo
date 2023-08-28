$(document).ready(function() {

/* DISQUS BUTTON */
	
	$("div.node-header li.disqus_comments a.comments").hover(function() {
		$("div.node-header li.disqus_comments").css({"background-position" : "0 -20px"});
	},function() {
		$("div.node-header li.disqus_comments").css({"background-position" : "0 0"});
	});
});