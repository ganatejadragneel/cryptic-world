<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $data = 'level2-ctf.netlify.app';
    echo json_encode($data);
}
?>