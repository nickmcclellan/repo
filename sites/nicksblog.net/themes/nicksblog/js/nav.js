$(document).ready(function() {

/* MAIN NAV */
	
	$("#block-menu-menu-blogmenu .content ul li.expanded").hover(function() {
		$("#block-menu-menu-blogmenu .content ul li ul").stop(true, true).slideDown("slow");
	},function() {
		$("#block-menu-menu-blogmenu .content ul li ul").stop(true, true).slideUp("slow");
	});
	
});