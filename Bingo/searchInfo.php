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
	<b id="welcome">Welcome: <i><?php echo $login_session;?></i></b><br><br>
	
	<form action = "searchInfo.php" method = "POST" style='padding-top:1em'>
	<input type = "text" name = "lastName" placeholder = "lastName">
	<input type = "submit" name = "submit" value = "Search">
	</form><br>
	<b id="logout"><a href="logout.php">Log Out</a></b><br><br>
<?php 
$page_title = 'Search information';

require ('mysql_connect.php');

if($_SERVER['REQUEST_METHOD'] == 'POST') {
$value = $_POST['lastName'];
$q = "SELECT * FROM conference_members WHERE lastName like '%$value%'";
$r = @mysqli_query ($dbc,$q);
	echo '<table>';
$num = mysqli_num_rows($r);
if($num>0) {
	//echo "<p>There are currently $num registered users.</p>\n";
	while($row = mysqli_fetch_array($r,MYSQLI_ASSOC)){
		echo '<tr><td align="left">'.$row['firstName'].'</td> 
				  <td align="left">'.$row['lastName'].'</td> 
				  <td align = "left">'.$row['Company'].'</td> 
				  <td align ="left">'.$row['Nationality'].'</td> 
				  <td align="left">'.$row['Committees1'].'</td> 
				  <td align="left">'.$row['Committees2'].'</td> 
				  <td align="left">'.$row['Committees3'].'</td>
				  <td><a href = "edit.php?id='.$row['ID'].'"> <input type="button" value = "edit"></input></a></td>
			 </tr>';
	}
	echo '</table>';
	
	mysqli_free_result($r);
}else {
	//echo '<p class="error">There are currently no registered users.</p>';
	
	echo '<p>'. mysqli_error($dbc).'<br /><br />Query:' .$q. '</p>';
}
mysqli_close($dbc);
}

?>