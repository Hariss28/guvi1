<?php
// start the session session_start();
// Check if the user is not logged in, then redirect the user to login page if (!isset($_SESSION["userid"]) || $_SESSION["userid"] !== true) { header("location: login.php");
exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Welcome <?php echo $_SESSION["name"]; ?></title>
<link rel="stylesheet">
</head>
<body>
<div>
 <strong><?php echo $_SESSION["name"]; ?></strong>
</div>
<p> <b>Profile page</b>
<a href="logout.php">Log Out</a>
</p>
</div>
</div>
</body>