<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
</head>
<?php
   if(isset($_GET['error']))
	echo $_GET['error'];
?>
<body>
	<div id="login">
	<h2>Login</h2>
	<form action="login.php" method="post">
	<label>UserName :</label>
	<input id="name" name="username" placeholder= "username" type="text">
	<label>Password :</label>
	<input id="password" name="password" placeholder="***" type="password"><br><br>
	<input name="Login" type="submit" value="Login">
	
	</form>
</div>
</body>
</html