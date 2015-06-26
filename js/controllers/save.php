<?php
    $data = file_get_contents("php://input");
    $myfile = fopen("contact.txt", "w") or die("Unable to open file!");
    fwrite($myfile, $data);
    fclose($myfile);
?>