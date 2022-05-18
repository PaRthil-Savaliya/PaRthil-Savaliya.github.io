
<?php
//get data from form  
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email= $_POST['email'];
$mno = $_POST['mno'];
$msg= $_POST['msg'];
$to = "parthilsavaliya3132@gmail.com";
$subject = "parthil's personalblog client details";
$txt ="fName = ". $fname . "\r\n lName = ". $lname . "\r\n Email = " . $email . "\r\n mno = ". $mno . "\r\n Message =" . $message;
$headers = "name = " . $fname . "\r\n email = " .$email;
//"CC: somebodyelse@example.com";
if(empty($email)){
    echo "please enter email address";
}
else{
    mail($to,$subject,$txt,$headers);
  
}
//redirect
header("Location:thankyou.html");
?>