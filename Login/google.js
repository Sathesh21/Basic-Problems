function validateForm()
{
     var mailValue = document.getElementById('mail').value.trim();
if (mailValue.length > 0) {
document.getElementById('pwdblock').style.display = "block";
var a=document.getElementById('submitvalue').innerHTML = "Submit"; 
alert(a,"Login Sucess");

}
else { 
        alert("Email not matches"); 
    }
 }