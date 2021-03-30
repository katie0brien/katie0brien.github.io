<?php
	$username = $_POST["f_username"];
	$password = $_POST["f_password"];

	if ($username == "username" && $password=="password")
	{
		// session("fname") = "Lanie"
		// response.redirect("secret.php")
		header('location: https://katie160.me/loggedin.html');
		die;
	}
	else
	{
	  header('location: https://katie160.me/loggedin.html');
	  die;
	}
?>
