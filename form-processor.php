<?php

//Send to

$emailFrom = "aoakinpelu@gmail.com";
$emailTo = "aoakinpelu@gmail.com";
$subject = "Portfolio Contact";

//Obtaining info from form

$name = $_POST['name'];
$name2 = $_POST['name2'];
$email = $_POST['email'];
$phone = $_POST['phone'];

$checkChelsea = $_POST['chelsea-check'];
$checkMusic = $_POST['music-check'];
$checkSyr = $_POST['syr-check'];
$checkNeuro = $_POST['neuro-check'];

$browserSelect = $_POST['browser-select'];

$message = $_POST['message'];

// Email body
$body = "";

$body .= "Company Name: ";
$body .= $name;
$body .= "\n";

$body .= "Name: ";
$body .= $name2;
$body .= "\n";

$body .= "Email: ";
$body .= $email;
$body .= "\n";

$body .= "Phone: ";
$body .= $phone;
$body .= "\n";

$body .= "Favorite websites: ";
$body .= $checkChelsea;
$body .= "\n";

$body .= $checkMusic;
$body .= "\n";

$body .= $checkSyr;
$body .= "\n";

$body .= $checkNeuro;
$body .= "\n";

$body .= "Favorite browser: ";
$body .= $browserSelect;
$body .= "\n\n";

$body .= "Message: \n";
$body .= $message;
$body .= "\n";

// send email 
mail($emailTo, $subject, $body, "From: <$emailFrom>");

?>