function validation(){
    let email = document.forms["myForm"]["email"].value;
    let pwd = document.forms["myForm"]["password"].value;

    if(email == "itzabhinavarya@gmail.com" && pwd == "12345"){
        alert("Login Successfully");
        return true;
    }else{
        alert("Login Failed");
        return false;
    }
}