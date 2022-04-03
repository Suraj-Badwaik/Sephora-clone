document.querySelector("form").addEventListener("submit",SubmitFunction);

var UserInfo= JSON.parse(localStorage.getItem("userinfo")) || [];

function SubmitFunction(){
  event.preventDefault();

  
    
    var userData={
        Fname:document.querySelector("#FName").value,
        Lname: document.querySelector("#LName").value,
        phone: document.querySelector("#phone").value,
        address:document.querySelector("#address").value,
        zipcode : document.querySelector("#zip").value,
        card: document.querySelector("#card").value
    }

    UserInfo.push(userData);

    localStorage.setItem("userinfo", JSON.stringify(UserInfo));

        // document.querySelector("#FName").value=""
        // document.querySelector("#LName").value=""
        //  document.querySelector("#phone").value=""
        // document.querySelector("#address").value=""
        //  document.querySelector("#zip").value=""
        //  document.querySelector("#card").value=""

        document.getElementById("checkoutBtn").style.backgroundColor="#ce0404"
    document.getElementById("checkoutBtn").style.color="white"
   
}


var fPrice = JSON.parse(localStorage.getItem("FinalPrice")) || [];

console.log(fPrice)

fPrice.map(function(el){
  document.querySelector("#subtotal").innerText = "$" + el
  document.querySelector("#total").innerText = "$" + el
})


    
    
    
    



document.querySelector("#apply").addEventListener("click", discountfun);

function discountfun(){

    var code=document.querySelector("#promo").value;
    console.log(code)

    if(code== "masai10"){
    document.querySelector("#subtotal").innerText = "$" +(fPrice- (fPrice*0.10))
    document.querySelector("#total").innerText = "$" + (fPrice- (fPrice*0.10))
    }

}






// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("checkoutBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  window.location.href="/index.html"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}