<?
$name = $_POST['name'];
$contact = $_POST['contact'];
$comment = $_POST['comment'];

$to = "lineagecrem@mail.ru";

$subject = 'Заявка на обратную связь c сайта';

$message = '
<html>
    <head>
        <title>'.$subject.'</title>
    </head>
    <body>
        <b><i>Имя:</i> '.$name.'</b> <br>
        <b><i>Телефон/Email:</i> '.$contact.'</b> <br>
        <b><i>Комментарий:</i>'.$comment.'</b>                                 
    </body>
</html>';

$headers = "From: $name <$contact>" . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n"; //Преобразую теги в код, а не текст

mail($to, $subject, $message, $headers);