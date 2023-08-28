<?php
$sendTo = "photosnap939@hotmail.com";
$subject = "Laura Marie Photography e-mail";
$headers = "From: " . $_POST["firstName"] ." ". $_POST["lastname"] . "<" . $_POST["email"] .">\r\n";
$headers .= "Reply-To: " . $_POST["email"] . "\r\n";
$headers .= "Return-path: " . $_POST["email"];
$message = "Name: " . $_POST["name"] . "\r\n";
$message .= "E-mail: " . $_POST["email"] . "\r\n";
$message .= "Phone number: " . $_POST["number"] . "\r\n";
$message .= "Description: " . $_POST["description"] . "\r\n";
$message .= "Date: " . $_POST["date"] . "\r\n";
$message .= "Location: " . $_POST["location"] . "\r\n";
$message .= "Comments: " . $_POST["message"] . "\r\n";
mail($sendTo, $subject, $message, $headers);
?>