<?php
//$Id: videoupload.theme.inc,v 1.1.2.1 2010/12/05 15:53:26 heshanmw Exp $
/**
 * 
 * @file
 * Theme functions for the videoftp module.
 */

/**
 * FormAPI theme function. Theme the output of an video upload field.
 */
function theme_uploadfield_widget($element) {
  return theme('form_element', $element, $element['#children']);
}

function theme_uploadfield_widget_item($element) {
  return theme('filefield_widget_item', $element);
}