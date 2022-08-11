<?php

$_POST = json_decode(file_get_contents('php://input'), true);

$deleteFile = "../../" . $_POST["name"];

if (!file_exists($deleteFile)) {
  header("HTTP/1.0 400 Bad Request");
} else {
  unlink($deleteFile);
}