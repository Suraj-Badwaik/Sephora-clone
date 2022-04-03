// document.querySelector("#form").addEventListener("submit", loginFunction)

// var Ruser = JSON.parse(localStorage.getItem("Info")) || [];
// function loginFunction() {
//   event.preventDefault();
//   var enterdemail = document.querySelector("#email").value;
//   var enterdpassword = document.querySelector("#pass").value;
//   var count=0;
//   for (var i = 0; i < Ruser.length; i++) {
//     // console.log(Ruser[i]);
//     if (
//       Ruser[i].emailId == enterdemail &&
//       Ruser[i].password == enterdpassword
//     ) {
//       count++;
//       // alert("Login successful");
//       // window.location = "hair.html"
//       // window.location.href="../index/index.html"
//       return false;
//     }

//   }
//   if(count==1){
//     alert("Login successful");
//     window.location.href="../index/index.html"
//   }
//   else {
//     alert("Login Failed");
//   }

// }



// // When the user clicks on div, open the popup
// function myFunction() {
//   var popup = document.getElementById("myPopup");
//   popup.classList.toggle("show");
// }











document.querySelector("#form").addEventListener("submit", loginFunction)
var userData=JSON.parse(localStorage.getItem("Info")) || []
console.log(storageName);
function loginFunction(){
  event.preventDefault();
  var userEmail=document.querySelector("#email").value;
  var userPass=document.querySelector("#pass").value;
  //console.log(userEmail, userPass);
  var count=0;
  // var userInfo=;
  userData.map(function (elem){
    // console.log(elem);
    if(elem.emailId==userEmail && elem.password==userPass){
      count++;
      var userInfo=elem.firstName;
      storageName.push(userInfo)
      localStorage.setItem("firstName", JSON.stringify(storageName));
      console.log(elem.firstName);
      document.querySelector("#change-value").innerText="Hi, "+userInfo;
      // window.location.href="../index/index.html"
    }
  })
  if(count==1){
    alert("Login Succesfull");
  }else{
    alert("Login Failed");
  }
  console.log(count);
  // console.log(userInfo);
}
var storageName=JSON.parse(localStorage.getItem("firstName"))|| []
// storageName.map(function (){
  if(storageName.length==0){
    document.querySelector("#change-value").innerText="Sign In";
  }else{
    document.querySelector("#change-value").innerText="Hi "+storageName;
  }
// })
// document.querySelector("#change-value").innerText=storageName;