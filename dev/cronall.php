<?php
/**
* You only have to create a cronjob for this script.
* In this way, you can create and delete sites at will, but all their cronjobs will be executed.
*/

//cronUrl is the url of the cron script, you should insert %s where the sitename should be inserted later.
$cronUrl = 'http://%s/cron.php';
error_reporting(E_ALL);
$sites = array();
$sites[] = 'dev.nickmcclellan.com';
// add as many as needed, the value should be the root url you use to access each drupal site, ie. <a href="http://www.mysite1.com" title="www.mysite1.com" rel="nofollow">www.mysite1.com</a> or www.mysite.com/drupal

foreach($sites as $site){
    $cmd = 'wget --spider '.sprintf($cronUrl, $site);
    echo 'Executing command: '.$cmd.'<br>';
    exec($cmd);
}
?>