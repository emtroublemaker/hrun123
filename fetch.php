<?php

error_reporting(0);
$host = "localhost";
$user = "root";
$pass = "";
$db = "hrungame";

// Create connection
$conn = mysqli_connect($host, $user, $password, $db);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully <br>";
$score = mysqli_real_escape_string($conn,$_REQUEST['score']);


?>
<!DOCTYPE html>
<html lang="en">
  
<head>
    <meta charset="UTF-8">
    <title>Mastercard run game</title>
    <!-- CSS FOR STYLING THE PAGE -->
    <form class = "final-report" action = "main.html" method="Post"></form>
  
<body>
            <?php 
                $fetch = "SELECT * FROM htable ORDER BY score DESC LIMIT 3";
                $result = $conn->query($fetch);

                if($result->num_rows>0){
                    while($row = $result->fetch_assoc()){
                        echo $row["score"]." "." ";
                         }
                }
                        else {
                            echo "0 results";
                        }
                        ?>
            <script>
                console.log("Heighest scores are",);
            </script>
            
    </body>
</html>
