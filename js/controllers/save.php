<?php

print(‘<pre>’);
print_r(stuff);
print(‘</pre>’);

var_dump("in php!");

print_r($_POST);

	$data = file_get_contents("php://input");
	$myfile = fopen("contact.txt", "w") or die("Unable to open file!");
	fwrite($myfile, $data);
	close($myfile);
?>