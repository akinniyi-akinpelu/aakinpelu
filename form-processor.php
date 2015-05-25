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

$checkQuiz = $_POST['quiz-check'];
$checkChelsea = $_POST['chelsea-check'];
$checkPsd = $_POST['psd-check'];
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
$body .= $checkQuiz;
$body .= "\n";

$body .= $checkChelsea;
$body .= "\n";

$body .= $checkPsd;
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

//redirect to
header("Location: contact-thanks.html");
?>