// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//     'use strict'
  
//     window.addEventListener('load', function () {
//       // Fetch all the forms we want to apply custom Bootstrap validation styles to
//       var forms = document.getElementsByClassName('needs-validation')
  
//       // Loop over them and prevent submission
//       Array.prototype.filter.call(forms, function (form) {
//         form.addEventListener('submit', function (event) {
//           if (form.checkValidity() === false) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
//           form.classList.add('was-validated')
//         }, false)
//       })
//     }, false)

//     // Checking Password Strength on the Registration Page
//     let rg_password = document.getElementById("rg_password");
//     rg_password.addEventListener("input", checkPasswordStrength);
//     function checkPasswordStrength(){
//       let rg_password = document.getElementById("rg_password").value;
//       if(rg_password.length < 3){
//         document.getElementById("strength").innerHTML = 
//         "<div class='alert alert-warning alert-dismissible fade show' role='alert'>" +
//           "<h4 class='alert-heading font-weight-lighter'><i class='fa fa-warning'></i> Warning!</h4>" +
//           "<p class='font-weight-lighter'>Password Strength is very weak</p>" +
//         "</div>";
//       }else if(rg_password.length < 5){
//         document.getElementById("strength").innerHTML = 
//         "<div class='alert alert-warning alert-dismissible fade show' role='alert'>" +
//           "<h4 class='alert-heading font-weight-lighter'><i class='fa fa-warning'></i> Warning!</h4>" +
//           "<p class='font-weight-lighter'>Password Strength is weak</p>" +
//         "</div>";
//       }else if(rg_password.length == 6){
//         document.getElementById("strength").innerHTML = 
//         "<div class='alert alert-warning alert-dismissible fade show' role='alert'>" +
//           "<h4 class='alert-heading font-weight-lighter'><i class='fa fa-warning'></i> Warning!</h4>" +
//           "<p class='font-weight-lighter'>Password Strength is Slightly Weak</p>" +
//         "</div>";
//       }else if(rg_password.length > 8){
//         document.getElementById("strength").innerHTML = 
//         "<div class='alert alert-success alert-dismissible fade show' role='alert'>" +
//           "<h4 class='alert-heading font-weight-lighter'><i class='fa fa-thumbs-up'></i> Success!</h4>" +
//           "<p class='font-weight-lighter'>Password Strength Is Very Strong</p>" +
//         "</div>";
//       }
//     }

//     // Declear An Error if any of the fields are empty
//     let register_btn = document.getElementById("register_btn");
//     register_btn.addEventListener("click", checkEmptyFields);
//     function checkEmptyFields(){
//       let rg_fullname = document.getElementById("rg_fullname").value;
//       let rg_username = document.getElementById("rg_username").value;
//       let rg_email = document.getElementById("rg_email").value;
//       let rg_password = document.getElementById("rg_password").value;
//       let rg_repeatpassword = document.getElementById("rg_repeatpassword").value;
      
//       if(rg_fullname.length == 0){
//         document.getElementById("strength").innerHTML = 
//         "<div class='alert alert-danger alert-dismissible fade show' role='alert'>" +
//           "<h4 class='alert-heading font-weight-lighter'><i class='fa fa-warning'></i> Warning!</h4>" +
//           "<p class='font-weight-lighter'>Please Enter a valid value in all the required fields before proceeding.</p>" +
//         "</div>";
//       }
//       if(rg_username.length == 0){
//         document.getElementById("strength").innerHTML = 
//         "<div class='alert alert-danger alert-dismissible fade show' role='alert'>" +
//           "<h4 class='alert-heading font-weight-lighter'><i class='fa fa-warning'></i> Warning!</h4>" +
//           "<p class='font-weight-lighter'>Please Enter a valid value in all the required fields before proceeding.</p>" +
//         "</div>";
//       }
//       if(rg_email.length == 0){
//         document.getElementById("strength").innerHTML = 
//         "<div class='alert alert-danger alert-dismissible fade show' role='alert'>" +
//           "<h4 class='alert-heading font-weight-lighter'><i class='fa fa-warning'></i> Warning!</h4>" +
//           "<p class='font-weight-lighter'>Please Enter a valid value in all the required fields before proceeding.</p>" +
//         "</div>";
//       }
//       if(rg_password.length == 0){
//         document.getElementById("strength").innerHTML = 
//         "<div class='alert alert-danger alert-dismissible fade show' role='alert'>" +
//           "<h4 class='alert-heading font-weight-lighter'><i class='fa fa-warning'></i> Warning!</h4>" +
//           "<p class='font-weight-lighter'>Please Enter a valid value in all the required fields before proceeding.</p>" +
//         "</div>";
//       }
//       if(rg_repeatpassword.length == 0){
//         document.getElementById("strength").innerHTML = 
//         "<div class='alert alert-danger alert-dismissible fade show' role='alert'>" +
//           "<h4 class='alert-heading font-weight-lighter'><i class='fa fa-warning'></i> Warning!</h4>" +
//           "<p class='font-weight-lighter'>Please Enter a valid value in all the required fields before proceeding.</p>" +
//         "</div>";
//       }
//     }

    // checking if the password and repeat password corresponds
//     let rg_repeatpassword = document.getElementById("rg_repeatpassword");
//     rg_repeatpassword.addEventListener("input", passwordCorrespond);
//     function passwordCorrespond(){
//       let rg_password = document.getElementById("rg_password").value;
//       let rg_repeatpassword = document.getElementById("rg_repeatpassword").value;
//       if(rg_password == rg_repeatpassword){
//         document.getElementById("passwordCheck").innerHTML = 
//         "<p class='text-success font-italic font-weight-lighter'>"+
//           "Password Matched" +
//         "</p>";
//       }else{
//         document.getElementById("passwordCheck").innerHTML = 
//         "<p class='text-danger font-italic font-weight-lighter'>"+
//           "Password Not Matched" +
//         "</p>";
//       }

//     }
// }())


  
