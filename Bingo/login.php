<?php
session_start();
$error = '';

if(isset($_POST['Login'])){	
	if(empty($_POST['username']) || empty($_POST['password'])||($_POST['username']!= admin)||($_POST['password']!=123)){
		$error = "Username or Password is invalid";
		header("Location:index.php?error='$error'");
	}else{
			$username= $_POST['username'];
			$password = $_POST['password'];	
			$conn = mysqli_connect("localhost","root","", "ieee");
			$query = "SELECT username, password from administration where username =? AND password=? LIMIT 1";
			$stmt = $conn->prepare($query);
			$stmt->bind_param("ss",$username,$password);
			$stmt->execute();
			$stmt->bind_result($username,$password);
			$stmt->store_result();
    
		if($stmt->fetch()){
			$_SESSION['login_user'] = $username;
			header("location: searchInfo.php");
			}else{
			$error = "Username or Password is invalid";
			echo "error";
			header("Location:index.php");
		}
		mysqli_close($conn);
	}
	}
?>