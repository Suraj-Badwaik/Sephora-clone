document.querySelector("form").addEventListener("submit", loginFunction)

var Ruser = JSON.parse(localStorage.getItem("Info")) || [];
function loginFunction() {
  event.preventDefault();
  var enterdemail = document.querySelector("#email").value;
  var enterdpassword = document.querySelector("#pass").value;
  for (var i = 0; i < Ruser.length; i++) {
    // console.log(Ruser[i]);

    if (
      Ruser[i].emailId == enterdemail &&
      Ruser[i].password == enterdpassword
    ) {
      alert("Login successful");
      // window.location = "hair.html"
      window.location.href="../index/index.html"
      return false;
    }
    else {
      alert("Login Failed");
    }
  }

}



// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}