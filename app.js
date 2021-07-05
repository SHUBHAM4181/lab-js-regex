/* Fill your code*/
/* Fill your code*/
function formValidate(){

    var name = document.forms["RegForm"]["Name"];
    var address = document.forms["RegForm"]["Address"];
    var email = document.forms["RegForm"]["EMail"];
    var password = document.forms["RegForm"]["Password"];
    var cpassword = document.forms["RegForm"]["cPassword"];
    var number = document.forms["RegForm"]["phone"];
    
    var errname = document.getElementById("name");
    var erradd = document.getElementById("address");
    var erremail = document.getElementById("email");
    var errpass = document.getElementById("pwd");
    var errcnf = document.getElementById("cpwd");
    var errnum = document.getElementById("phone");
    
    //check and validate the form elements
    
    if(name.value.length < 8 ){
        errname.innerText = 'Name must be more than 4 characters';
        name.focus();
        return false;
     }
    else{
        errname.innerText = '';
     }
    ////
    if(address.value == ''){
        erradd.innerText = 'Address cannot be empty';
        address.focus();
        return false;
     }
    else{
        erradd.innerText = '';
     }
    ////
    if(email.value == ''){
        erremail.innerText = 'Email cannot be empty';
        email.focus();
        return false;
     }
    else if(/^[a-zA-Z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[a-zA-Z.]{2,6}$/.test(email.value)){
        erremail.innerText = '';
     }
    else{
        erremail.innerText = 'Email is invalid';
        email.focus();
        return false;
     }
    ////
    
      if(/(?=.[A-Z])(?=.[a-z])(?=.[0-9])(?=.[!@#$%^&*()])/.test(password.value)){
         errpass.innerText = '';
     }
     else{
        errpass.innerText = 'Password is invalid';
        password.focus();
        return false;
     }
     ////
     if(cpassword.value == password.value){
        errcnf.innerText = '';
    }
    else{
       errcnf.innerText = 'Password donnot match';
       cpassword.focus();
       return false;
    }
    ////
     if(number.value.length < 10 || number.value.length > 10){
         erremail.innerText = 'Invalid number';
         errnum.focus();
         return false;
     }
     else{
         errnum.innerText = ''
     }
     return true;
    }
