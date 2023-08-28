<?php
/*
 Plugin Name: Header Image Rotator - Basic
 Plugin URI: http://www.wpimagerotator.com
 Description: Displays a new header image in your blog based on different time variables. Simply create a folder called header-images and add up to 5 pictures.
 Author: Matthew Hough
 Version: Basic 2.0
 Author URI: http://www.wpimagerotator.com

 This plugin was based on the "Header Randomizer" plugin by Lennart Groetzbach (http://www.lennartgroetzbach.de/blog/?p=1040). Thanks!

 Copyright (C) 2008 Matthew Hough (matthew.hough@gmail.com)

 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 2
 of the License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program; if not, write to the Free Software
 Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

/* Check to see if options already exist in the database */
$swap_rate = get_option('hir_swap_rate');
$header_id = get_option('hir_header_id');

/* Add options if they does not already exist */
$hir_old_install = array('1','2','3','4');
if (in_array($swap_rate, $hir_old_install)){
	update_option('hir_swap_rate', '6');
} elseif ($swap_rate == '') {
	add_option('hir_swap_rate', '6');
}

if($header_id == '') {
	add_option('hir_header_id', 'Enter your CSS ID here');
}

/* Define Constants and variables*/
define('IMAGE_FOLDER', 'header-images/');
define('IMAGE_PATH', ABSPATH .'wp-content/'.IMAGE_FOLDER);
define('IMAGE_URI', get_option('siteurl').'/wp-content/'.IMAGE_FOLDER);
define('PLUGIN_URI', get_option('siteurl').'/wp-content/plugins/image-rotator-basic/');

/* Functions */
function get_files($dir) {
	$dir_check = is_dir(IMAGE_PATH);
	if(!$dir_check){

	} else {
		$dh  = opendir($dir);
		while (false !== ($filename = readdir($dh))) {
			$files[] = $filename;
		}
		$entries = array();
		if (is_dir($dir)) {
			foreach($files as $entry) {
				if($entry != '.' && $entry != '..') {
					$entries[] = $entry;
				}
			}
		}
	}
	return $entries;
}

function rotator_admin_menu() {
	add_submenu_page('options-general.php', 'Header Image Rotator - Basic', 'Header Image Rotator - Basic', 8, __FILE__, 'rotator_options');
}

function image_swap($sr) {
	$ent_temp = get_files(IMAGE_PATH);
	$count = count($ent_temp);
	$date = date($sr);
	$key = $date % $count;
	return IMAGE_URI . $ent_temp[$key];
}

function on_refresh() {
    $ent_temp = get_files(IMAGE_PATH);
    if (is_array($ent_temp) && sizeof($ent_temp)) {
        $key = array_rand($ent_temp);
        return IMAGE_URI . $ent_temp[$key];
    }
}
    
function switch_image(){
	switch (get_option("hir_swap_rate")) {
		case "6": //on refresh
			return on_refresh();
		case "0": //weekly
			return image_swap("W");
		case "5": //monthly
			return image_swap("n");
	}
}

function header_img_check() {
	$head_css = get_option('hir_header_id');
	if($head_css !== "Enter your CSS ID here"){
		echo PLUGIN_URI.'img/ok.gif';
	} else {
		echo PLUGIN_URI.'img/error.gif';
	}
}

function image_path_check() {
	$pics = count(get_files(IMAGE_PATH));
	if(is_dir(IMAGE_PATH)&& $pics != 0 && $pics <= 5){
		echo PLUGIN_URI.'img/ok.gif';
	} else {
		echo PLUGIN_URI.'img/error.gif';
	}
}

function image_path_message() {
	$dir = is_dir(IMAGE_PATH);
	$pics = count(get_files(IMAGE_PATH));
	if(!$dir){
		echo "<font color=\"red\">The plugin could not find or open the above image directory. Please make sure you have created a folder called 'header-images' (without the quote marks) in your wp-content folder.</font>";
	} elseif($pics == 0) {
		echo "<font color=\"red\">There are no pictures in your image folder. Please add some images for the plugin to work.</font>";
	} elseif($pics > 5) {
		echo "<font color=\"red\">The basic version of this plugin allows a maximum of 5 pictures. Please delete some pictures or update to the pro version at <a href=\"http://www.wpimagerotator.com\">WPImageRotator.com</a></font>";
	}
}

function hir_add_css(){
	$img = switch_image();
	$headerID = get_option('hir_header_id');
	print 
	<<<EOT
	<script type="text/javascript" language="javascript">
	var img = new Image();
	img.src = '$img';
	</script>
	<style type="text/css">
	#$headerID {
    background: url('$img') no-repeat;
    background-position: top left;
	}
	</style>
EOT;
}

function hir_add_js() {
	print <<<EOT
	<script type="text/javascript">
	<!--
    function open_win(url, name, args) {
        newWindow = window.open(url, name, args);
        newWindow.screenX = window.screenX;
        newWindow.screenY = window.screenY;
        newWindow.focus();
    }
	//-->
	</script>
EOT;
}

function rotator_options() {
	if(isset($_POST['hir_swap_rate'])){
		update_option("hir_swap_rate", ($_POST["hir_swap_rate"]));
	}
	if (isset($_POST['hir_header_id'])){
		update_option("hir_header_id", ($_POST['hir_header_id']));
	}
	if (isset($_GET['to_del'])) {
		@unlink(IMAGE_PATH. $_GET['to_del']);
	}
	
?>
<div class="wrap">
<form method="post">
<h2>General Settings</h2>
<table border="0" cellspacing="2" cellpadding="0">
	<tr>
		<td width="20"><img src="<?php echo PLUGIN_URI.'img/ok.gif'; ?>"</td>
		<td><b>Swap rate:</b></td>
		<td><select name="hir_swap_rate">
			<option
			<?php if(get_option('hir_swap_rate') == "6") { echo "selected"; } ?>
				value="6">On Refresh</option>
			<option value="<?php echo get_option('hir_swap_rate'); ?>" DISABLED>Minute*</option>
			<option value="<?php echo get_option('hir_swap_rate'); ?>" DISABLED>Half-Hour*</option>
			<option value="<?php echo get_option('hir_swap_rate'); ?>" DISABLED>Hourly*</option>
			<option value="<?php echo get_option('hir_swap_rate'); ?>" DISABLED>Daily*</option>
			<option
			<?php if(get_option('hir_swap_rate') == "0") { echo "selected"; } ?>
				value="0">Weekly</option>
			<option
			<?php if(get_option('hir_swap_rate') == "5") { echo "selected"; } ?>
				value="5">Monthly</option>
		</select></td>
	</tr>
</table>
<table border="0" cellspacing="2" cellpadding="0">
	<tr>
		<td width="20"></td>
		<td>This setting determines the interval at which your header images
		rotate.</td>
	</tr>
	<tr>
		<td width="20"></td>
		<td>* = available in the Pro version only</td>
	</tr>
</table>
<p></p>
<table border="0" cellspacing="2" cellpadding="0">
	<tr>
		<td width="20"><img src="<?php header_img_check(); ?>"></td>
		<td><b>CSS header ID tag</b>:</td>
		<td><input type="text" name="hir_header_id" size="24" border="0"
			value="<?php echo get_option('hir_header_id'); ?>"></td>
	</tr>
</table>
<table border="0" cellspacing="2" cellpadding="0">
	<tr>
		<td width="20"></td>
		<td>
		<?php
		$head_css = get_option('hir_header_id');
		if($head_css == "Enter your CSS ID here"){
			echo "<font color=\"red\">Please enter your CSS ID in the text box above and update.</font><br>This setting should be the CSS ID you wish to use to display the images. Examples would be 'header' (without the quote marks). This will be different depending on which theme you are using. Look through your theme's CSS file to find the correct CSS ID.";
		} else {
			echo "This setting should be the CSS ID you wish to use to display the images. Examples would be 'header' (without the quote marks). This will be different depending on which theme you are using. Look through your theme's CSS file to find the correct CSS ID.";
		}
		?>
		</td>
	</tr>
</table>
<p></p>
<table border="0" cellspacing="2" cellpadding="0">
	<tr>
		<td width="20"><img src="<?php image_path_check(); ?>" alt=""></td>
		<td><b>Image path:</b></td>
		<td>/wp-content/header-images/</td>
	</tr>
</table>
<table border="0" cellspacing="2" cellpadding="0">
	<tr>
		<td width="20"></td>
		<td><?php image_path_message(); ?></td>
	</tr>
</table>
<p></p>
<p><input type="submit" name="submitButtonName" value="Update" border="0"></p>
</form>

<h2>Images</h2>
Click on pictures to view...
<ul>
<?php
$image_array = (get_files(IMAGE_PATH));
if($image_array == 0){
	echo "<font color=\"red\">Cannot find any pictures. Please resolve any image path errors above.</font>";
} else {
	$pics = count(get_files(IMAGE_PATH));
	if($pics == 0) {
		echo "<font color=\"red\">Could not find any pictures.</font>";
	}
	foreach($image_array as $entry){
		echo '<li><a href="javascript:void(0)" onClick="open_win(\''.IMAGE_URI.$entry.'\', \'header\', \'width=500,height=250,status=no,toolbar=no,menubar=no,scrollbars=yes,resizable=yes\')">'.$entry . '</a> <a href="'. $_SERVER["REQUEST_URI"].'&to_del='.$entry.'" title="delete file" >[X]</a></li>';

	}
}
?>
</ul>
<h2>About this plug-in</h2>
For more For more information and support, go to <a href="http://www.wpimagerotator.com">WPImageRotator.com</a>.<br>
<p>This limited version of the plugin was developed to be a free and open-source plugin for all to use and enjoy. There are certain limitations to this basic version. To get the Pro version go to <a href="http://www.wpimagerotator.com">WPImageRotator.com.</a></p>
Features of the Pro version are:
<ul>
<li>Unlimited number of pictures</li>
<li>7 options for rotating: On Refresh, Every Minute, Half-Hour, Hourly, Daily, Weekly, Monthly</li>
<li>Style the image CSS directly from the plugin option panel</li>
<li>The header images can be hyperlinked to your blog URL</li>
</ul>
Thanks for trying out the plugin!

</div>
<?php
}

/* Add actions */
add_action('admin_menu', 'rotator_admin_menu');

$pics = count(get_files(IMAGE_PATH));
if ($pics <= 5) {
	add_action('admin_head', 'hir_add_js');

	/* Check for correct initialization, if not found, don't add css */
	if(is_dir(IMAGE_PATH) && count(get_files(IMAGE_PATH)) > 0) {
		add_action('wp_head', 'hir_add_css');
	}
}
?>