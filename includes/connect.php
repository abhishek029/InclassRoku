<?php
    $users = "root";
    $pw = "root";

    try{
        $conn = new PDO("mysql:host=localhost;dbname=testusers", $users, $pw);
        // var_dump($conn);
    }catch(PDOException $exception){
        echo 'connection error! ' . $exception->getMessage();
    }

?>