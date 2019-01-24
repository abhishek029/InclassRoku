<?php
    include 'functions.php';

    if(isset($_GET['users'])){
        $data = get_single_users($conn, $_GET['users']);
        echo json_encode($data);
    }else{
        $data = get_all_users($conn);
        echo json_encode($data);
    }
?>