<?php
    include 'connect.php';

    function validate_login($pdo, $user, $password){
        $query = "select * from users where first_name='$user'";

        $get_user = $pdo->query($query);
        $results = array();

        while($row = $get_user->fetch(PDO::FETCH_ASSOC)){
            if($row['password'] == $password){
                $row['password'] = 'XXX';
                $results[] = $row;
            }else{
                $results[] = "false";
            }
        }

        return $results;
    }
    
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