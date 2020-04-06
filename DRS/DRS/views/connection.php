<?php
$servername = "127.0.0.1:80";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

if ($_POST['highestDeptName'] == "highestDeptName"){
	$value = $_POST['name'];
	echo "highestDeptName: " .$value;
    
} 

?>