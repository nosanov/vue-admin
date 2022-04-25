<?php
$deleteFile = "../../" . $_POST["name"] . ".html";

if (!file_exists($deleteFile)) {
  header("HTTP/1.0 400 Bad Request");
} else {
  unlink($deleteFile);
}