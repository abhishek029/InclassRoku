<?php
    include 'functions.php';

    if(isset($_GET['username'])){
        $data = validate_login($conn, $_GET['username'], $_GET['password']);
        echo json_encode($data);
    }elseif(isset($_GET['users'])){
        $data = get_single_users($conn, $_GET['users']);
        echo json_encode($data);
    }else{
        $data = get_all_users($conn);
        echo json_encode($data);
    }
?>