
<!DOCTYPE html>
<html>
<head>
	<title>Your Home Page</title>
</head>
<?php 	
	require 'mysql_connect.php';
	
	$conn = mysqli_connect("localhost","root","", "ieee");
	$query = "SELECT * from conference_members where ID = '".$_GET['id']."'";
	$r = @mysqli_query ($dbc,$query);
	$row= mysqli_fetch_array($r);
	
 ?>
<body>
	<form action='update.php' method='post'>
	<table> 
	<tr>
	<td><input type = "hidden" name='id' value="<?php echo $row['ID'];?>"/></td>
	<td><input type = "text" name='firstName' value="<?php echo $row['firstName'];?>"/></td>
	<td><input type = "text" name='lastName' value="<?php echo $row['lastName'];?>"/></td>
	<td><input type = "text" name='Position' value="<?php echo $row['Position'];?>"/></td>
	<td><input type = "text" name='Company' value="<?php echo $row['Company'];?>"/></td>
	<td><input type = "text" name='Nationality' value="<?php echo $row['Nationality'];?>"/></td>
	<td><input type = "text" name='Committees1' value="<?php echo $row['Committees1'];?>"/></td>
	<td><input type = "text" name='Committees2' value="<?php echo $row['Committees2'];?>"/></td>
	<td><input type = "text" name='Committees3' value="<?php echo $row['Committees3'];?>"/></td><br>
	</tr>
	
	<input type = "submit" value = "submit">

</body>
</html>