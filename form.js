let email = document.getElementById("email");
let error = document.getElementById("error");
//     function validate( ){
//     let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z{2,3}])$/;
//     if(regexp.test(email.value)){
//     error.innerHTML = "valid";
//     error.style.color = "green";
//     return true;
// }
// else{
//     error.innerHTML = "Invalid";
//     error.style.color = "red";
//     return false;  
//   alert("sorry! Incorrect Email ID");
//    }
// }

// function checkForm(form)
//   {
//     if(form.username.value == "") {
//       alert("Error: Username cannot be blank!");
//       form.username.focus();
//       return false;
//     }
//     re = /^\w+$/;
//     if(!re.test(form.username.value)) {
//       alert("Error: Username must contain only letters, numbers and underscores!");
//       form.username.focus();
//       return false;
//     }

//     if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
//       if(form.pwd1.value.length < 8) {
//         alert("Error: Password must contain at least 8 characters!");
//         form.pwd1.focus();
//         return false;
//       }
//     //   if(form.pwd1.value == form.username.value) {
//         // alert("Error: Password must be different from Username!");
//         // form.pwd1.focus();
//         // return false;
//       }
//       re = /[0-9]/;
//       if(!re.test(form.pwd1.value)) {
//         alert("Error: password must contain at least one number (0-9)!");
//         form.pwd1.focus();
//         return false;
//       }
//       re = /[a-z]/;
//       if(!re.test(form.pwd1.value)) {
//         alert("Error: password must contain at least one lowercase letter (a-z)!");
//         form.pwd1.focus();
//         return false;
//       }
//       re = /[A-Z]/;
//       if(!re.test(form.pwd1.value)) {
//         alert("Error: password must contain at least one uppercase letter (A-Z)!");
//         form.pwd1.focus();
//         return false;
//       }
//     } else {
//       alert("Error: Please check that you've entered and confirmed your password!");
//       form.pwd1.focus();
//       return false;
//     }

//     alert("You entered a valid password: " + form.pwd1.value);
//     return true;
//   }