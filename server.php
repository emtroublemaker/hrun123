<?php

//Connecting to Database
$host = "localhost";
$user = "root";
$pass = "";
$db = "hrungame";

// Create connection
$conn = new mysqli($host, $user, $pass, $db);

//Check Connection
if($conn->connect_error){
    die("Connection Failed!! ".$conn->connect_error);
    }
    else{
        //echo "Connection Successful!!  ";
    }

$score= [];
$score = mysqli_real_escape_string($conn, $_POST['score']);
$sql = "INSERT INTO htable VALUES ('$score')";
$fetch = "SELECT * FROM htable ORDER BY score DESC LIMIT 3"; 
$result = $conn->query($fetch);
if(mysqli_num_rows($result)){
        $leader[0] = mysqli_fetch_array($result)[0];
        $leader[1] = mysqli_fetch_array($result)[0];
        $leader[2] = mysqli_fetch_array($result)[0];
    }else{
    echo "0 results";
}

echo $leader[0]." "." ";
echo $leader[1]." "." ";
echo $leader[2]." "." ";


if($conn->query($sql)==TRUE){
    // echo $leader["score"]." "." ";
}
    else{
        echo "Error: ".$sql."<br>".$conn->error;
    }
$conn->close();


?>
