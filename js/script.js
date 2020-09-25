function myfun(){

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var answer = document.getElementById("password").value;

    if (fname ==="Rayan" , lname==="Naeem" , email==="ch@12345" , answer==="web123") {
      window.location.replace("file:///C:/Users/Rayan%20Naeem/Desktop/Burger%20Bun/Design world/index.html");
       

   
    } else {
        // alert("Please fill these required fields")
    }
    
    if (fname != 'Rayan') {
        document.getElementById('fname').classList.add('is-invalid');
        document.getElementById('fname').classList.remove('is-valid');
        return false;
    } else {
        document.getElementById('fname').classList.remove('is-invalid');
        document.getElementById('fname').classList.add('is-valid');
    }
    if(lname != 'Naeem') {
        document.getElementById('lname').classList.add('is-invalid');
        document.getElementById('lname').classList.remove('is-valid');
        return false;
     } else {
         document.getElementById('lname').classList.remove('is-invalid');
         document.getElementById('lname').classList.add('is-valid');
     }
     if(email != 'ch@12345') {
        document.getElementById('email').classList.add('is-invalid');
        document.getElementById('email').classList.remove('is-valid');
        return false;
     } else {
         document.getElementById('email').classList.remove('is-invalid');
         document.getElementById('email').classList.add('is-valid');
     }
     if(answer != 'web123') {
        document.getElementById('password').classList.add('is-invalid');
        document.getElementById('password').classList.remove('is-valid');
        alert("Please Fill Out Password !")
        return false;
     } else {
         document.getElementById('password').classList.remove('is-invalid');
         document.getElementById('password').classList.add('is-valid');

     }

     return true;
 

}


// function pageRedirect() {
// }      
// setTimeout("pageRedirect()", 2000);

