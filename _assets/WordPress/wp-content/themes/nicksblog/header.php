<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head profile="http://gmpg.org/xfn/11">

	<title><?php bloginfo('name'); ?><?php wp_title(); ?></title>

	<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />	
	<meta name="generator" content="WordPress <?php bloginfo('version'); ?>" /> <!-- leave this for stats please -->

	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
	<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="<?php bloginfo('rss2_url'); ?>" />
	<link rel="alternate" type="text/xml" title="RSS .92" href="<?php bloginfo('rss_url'); ?>" />
	<link rel="alternate" type="application/atom+xml" title="Atom 0.3" href="<?php bloginfo('atom_url'); ?>" />
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

	<?php wp_get_archives('type=monthly&format=link'); ?>
	<?php //comments_popup_script(); // off by default ?>
	<?php wp_head(); ?>
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
var pageTracker = _gat._getTracker("UA-6167826-1");
pageTracker._trackPageview();
</script>
</head>
<body>

<div id="wrapper">

    <div id="header">
    
        <a href="<?php bloginfo('url'); ?>" title="<?php bloginfo('name'); ?>"></a></div>
    <div id="menubar">
        <ul>
            <li><a href="<?php bloginfo('url'); ?>">Home</a></li>
            <li><a href="http://nicksblog.net/?page_id=2">About</a></li>
            <!--<li><a href="http://nicksblog.net/?page_id=116">Past blog archive</a></li>-->
            <li><a href="http://nicksblog.net/?feed=rss2">RSS</a></li>
        </ul>
        
        <div id="search">
                    <?php include(TEMPLATEPATH . '/searchform.php'); ?>
        </div>
        
    </div>