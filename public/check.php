<pre>
    <?php
        $login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
        $pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);

        if (mb_strlen($login) < 5 || mb_strlen($login) > 90) {
            echo "Недопустимая длина логина";
            exit();
        }
        if (mb_strlen($pass) < 2 || mb_strlen($pass) > 60) {
            echo "Недопустимая длина пароля";
            exit();
        }

        $mysql = new mysqli('localhost', 'root', '', 'register-bd');
        $mysql->query("INSERT INTO `users` (`login`, `pass`) VALUES('$login', '$pass')");
        $mysql->close();
    ?>
</pre>