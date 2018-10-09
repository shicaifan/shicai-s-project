<?php 	
	require 'mysql_connect.php';
	$conn = mysqli_connect("localhost","jwang","chairman", "jwangdb");
	
	$query = "update conference_members set firstName ='".$_POST['firstName']."' ,lastName= '".$_POST['lastName']."' ,Position='".$_POST['Position']."' , Company= '".$_POST['Company']."',Nationality='".$_POST['Nationality']."', Committees1= '".$_POST['Committees1']."',Committees2='".$_POST['Committees2']."', Committees3='".$_POST['Committees3']."' where ID = ".$_POST['id']; 
	$r = @mysqli_query ($dbc,$query);
	echo 'update success';
	
 ?>