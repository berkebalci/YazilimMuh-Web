   
    
    //var error = document.getElementById("error");
   

function validate(){

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

  //redirecting to another page
  if(username=="kullanıcı" && password=="sifre"){

    location.href="control.html";
    return false;
 }

else{
    alert("Giriş başarısız")
}
}
 
  

const show=()=>{
    let password=document.getElementById("password");
    let visibility=document.querySelector(".visibility");
    if(password.type=== "password"){
        password.type="text";
        visibility.style.color="rgb(98,98,98)"
    }
    else{
        password.type="password";
        visibility.style.color="#F9F6F4"
    }
}