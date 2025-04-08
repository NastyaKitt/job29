<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $to = 'your_email@example.com'; 
    $name = $_POST['name'];
    $tel = $_POST['tel'];

    if (empty($name) || empty($tel)) {
        echo "Пожалуйста, заполните все поля!";
        exit;
    }

    $message = "Заявка от $name ($tel)";
    $subject = "Заявка на бесплатную диагностику";

    $headers = "From: $name <$tel>\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    mail($to, $subject, $message, $headers);

    echo "Заявка отправлена!";
} else {
    echo "Метод запроса не поддерживается.";
}
?>