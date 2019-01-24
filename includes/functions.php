<?php
    include 'connect.php';

    function get_single_users($pdo, $user){
        $query = "select * from users where id='$user'";

        $get_user = $pdo->query($query);
        $results = array();

        while($row = $get_user->fetch(PDO::FETCH_ASSOC)){
            $results[] = $row;
        }

        return $results;
    }

    function get_all_users($pdo){
        $query = "select * from users";

        $get_user = $pdo->query($query);
        $results = array();
        while($row = $get_user->fetch(PDO::FETCH_ASSOC)){
            $results[] = $row;
        }
        
        return $results;
    }
?>