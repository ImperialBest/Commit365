function Password() {
  confirmpassword = document.getElementById("confirm");
  password = document.getElementById("pass");
  userName = document.getElementById("name");
  pTag = document.getElementsByTagName("p");
  if (userName.value.length <= 5) {
    pTag[0].innerHTML = "Your User Name Is too Short";
  } else {
    if (password.value.length < 8) {
      pTag[0].innerHTML = "Password is too Short.(Enter Atleast 8 characters)";
    } else {
      if (password.value == confirmpassword.value) {
        pTag[0].innerHTML = 'SignUp Successful."You can Login Now"';
        localStorage.setItem("userName", userName.value)
        localStorage.setItem("password", password.value)
      }
     else {
        pTag[0].innerHTML = "password does not match";
      }
    }
  }
}
function Login() {
  loginUserName = document.getElementById("user");
  loginpassword = document.getElementById("word");
  savedUserName = localStorage.getItem("userName")
  savedPassword = localStorage.getItem("password")
  para = document.getElementsByTagName("p");
//   console.log(savedUserName,savedPassword)
  if (
    loginUserName.value == savedUserName &&
    loginpassword.value == savedPassword
  ) {
    para[0].innerHTML = "Login Successful";
  } else {
    para[0].innerHTML = "Invalid Login";
  }
}
