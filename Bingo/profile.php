<?php
include('session.php');

if(!isset($_SESSION['login_user'])){
header("location: index.php");
}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Your Home Page</title>
</head>
<body>
	<div id = "profile">
	<b id="welcome">Welcome : <i><?php echo $login_session;?></i></b>
	<form action='...php' ,method='post'>
	<table>  
			
	<?php

	require 'mysql_connect.php';
	while($row = mysqli_fetch_array($r))
	{
		
	  ?>
	  <tr>
	  <td><input  value="<?php echo $row['firstName'];?>"/></td>
	  <td><input  value="<?php echo $row['lastName'];?>"/></td>
	  <td><input  value="<?php echo $row['Position'];?>"/></td>
	  <td><input value="<?php echo $row['Company'];?>"/></td>
	  <td><input  value="<?php echo $row['Nationality'];?>"/></td>
	  </tr>
	<?php	
	}
	?>	
	<input type='submit' value='submit'/>
    </table>
	</form> 
	<b id="logout"><a href="logout.php">Log Out</a></b>
	</div>
	</body>
	</html>