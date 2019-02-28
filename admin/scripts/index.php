<?php
    required_once('../admin/scripts/config.php');

    if(isset($_GET['media'])){
        $type = $_GET['media'];

        if($type == "video"){
            $tbl = "tbl_movies";
        }else{
            $tbl = "tbl_audio";
        }
    }

    $results = getAll($tbl);

    echo json_encode($results);
?>