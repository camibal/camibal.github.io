<?php

$name = $_POST['name'];
$message = $_POST['message'];

echo "<script>
window.open('https://wa.me/+573202075715?text=nombre: $name mensaje: $message');
location.reload();
</script>";

