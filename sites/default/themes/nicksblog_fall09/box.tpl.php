<?php
// $Id: box.tpl.php,v 1.2 2008/09/14 11:56:34 johnalbin Exp $

/**
 * @file box.tpl.php
 *
 * Theme implementation to display a box.
 *
 * Available variables:
 * - $title: Box title.
 * - $content: Box content.
 *
 * @see template_preprocess()
 */
?>

<img class="box_top" src="/sites/all/themes/zen/zen/nicksblog_fall09/images/box_top.png" width="710" height="45" />

<div class="box"><div class="box-inner">

  <div class="content">
    <?php print $content; ?>
  </div>

</div></div> <!-- /box-inner, /box -->

<div class="blognode_bottom"></div>