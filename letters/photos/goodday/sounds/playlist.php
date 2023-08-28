<?
$y=1;
$i=1;
$track = '';

$rbsPath = 'sounds/';
$rbsExt = '.rbs';

if ($dir = opendir('.')) {
    while (false !== ($file = readdir($dir))) {
        if ($file{0} != '=') {
            if ( strrchr($file,'.') == $rbsExt) {
    			$last_mod = filemtime($file);
    			$track[$last_mod] = utf8_encode(str_replace("&","&amp;",$file));
    			$i++;
            }
        }
	}
}
closedir($dir);

header ("Content-type: text/xml");
echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
echo "<tracks>\n";
if ($track != '') {
	asort($track);
	while (list ($key,$val) = each ($track)) {
			echo "<track trackMod=\"".$key."\" title=\"".substr($val,0,strrpos($val,'.'))."\" path=\"".$rbsPath.$val."\"/>\n";
			$y++;
	}
}

echo "</tracks>"

?>