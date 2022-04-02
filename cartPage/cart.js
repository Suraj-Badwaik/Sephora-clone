// var cartdata=[
//      {
//          image:"https://www.sephora.com/productimages/sku/s2050391-main-zoom.jpg?imwidth=97",
//          brand:"Dior",
//          itemname:"Dior Airflash Spray Foundation",
//          size: "size 2.3 oz/ 70 ml",
//          color:"1 cool (104)",
//          p:"shipping restrictions",
//          price: 62
//      },
//     {
//         image:"https://www.sephora.com/productimages/sku/s2050391-main-zoom.jpg?imwidth=97",
//         brand:"Dior",
//         itemname:"Dior Airflash Spray Foundation",
//         size: "size 2.3 oz/ 70 ml",
//         color:"1 cool (104)",
//         p:"shipping restrictions",
//         price: 62
//     },
//     {
//         image:"https://www.sephora.com/productimages/sku/s2050391-main-zoom.jpg?imwidth=97",
//         brand:"Dior",
//         itemname:"Dior Airflash Spray Foundation",
//         size: "size 2.3 oz/ 70 ml",
//         color:"1 cool (104)",
//         p:"shipping restrictions",
//         price: 62
//     },
// ]





 // =========================================//
                // Calculating total price//
    //==========================================//

 var cartdata=JSON.parse(localStorage.getItem("cartDataObj")) || [];  

var total = cartdata.reduce(function (sum, el) {
    return sum + Number(el.price);
  }, 0);

console.log(total)

var length = cartdata.length;

console.log(length)


document.querySelector("#subtotal").innerText = "$" + total


document.querySelector("#total").innerText = "$" + total

//===========================//
    // promo code
//===========================//
//===========================//










cartdata.map(function(el,index){

 if(cartdata.length>=1)
 {
   document.querySelector(".cart").innerHTML="";
 }


    // =========================================//
                //checkout button//
    //==========================================//
     if(length>=1){
        document.getElementById("checkoutButton").style.backgroundColor = "#ce0404";
        document.getElementById("COI").style.color= "white";
        document.getElementById("COI").style.textDecoration= "none";
    }

    

    // firstdiv
    var imgdiv=document.createElement("div");
    imgdiv.setAttribute("class", "imgdiv");

    // second div
    var cartdiv=document.createElement("div");
    cartdiv.setAttribute("class","cartdiv")

    // A
    var detaildiv=document.createElement("div")
    detaildiv.setAttribute("class","detaildiv");

    // B
    var pricediv=document.createElement("div")
    pricediv.setAttribute("class","pricediv");

    cartdiv.append(detaildiv,pricediv);

    var img =document.createElement("img")
    img.src=el.image
    img.setAttribute("class","img");

    imgdiv.append(img);

    // ====================//
    // ====================//
    // ====================//

    var p1=document.createElement("strong");
    p1.setAttribute("class","firstP");
    p1.innerText=el.brand;

    var p2=document.createElement("p");
    p2.setAttribute("class","secondP");
    p2.innerText=el.itemname;

    var p3=document.createElement("p")
    p3.setAttribute("class","thirdP")
    p3.innerText=el.size;

    var p4=document.createElement("p")
    p4.setAttribute("class","fourthP")
    p4.innerText="color "+el.color;

    var p5=document.createElement("p")
    p5.setAttribute("class","fifthP")
    p5.innerText=el.p;

    var p6= document.createElement("div")
    p6.setAttribute("class","remove")

    var select= document.createElement("select")
    select.setAttribute("class","select")
   
    var option1= document.createElement("option")
    option1.innerText="1"

    var option2= document.createElement("option")
    option2.innerText="2"

    var option3= document.createElement("option")
    option3.innerText="3"

    var option4= document.createElement("option")
    option4.innerText="4"

    var option5= document.createElement("option")
    option5.innerText="5"

    select.append(option1,option2,option3,option4,option5)

    // =======================================================================//

    var remove=document.createElement("button")
    remove.innerText="  | Remove";
    remove.addEventListener("click",function(){
        removeItem(el,index)
    })

    p6.append(select,remove)

    detaildiv.append(p1,p2,p3,p4,p5,p6);


// ======================//
// ======================//
// ======================//
// ======================//


    var price=document.createElement("strong")
    price.setAttribute("class","itemprice");
    price.innerText="$ "+el.price;

    var button=document.createElement("button")
    button.innerText="Change Method"

    pricediv.append(price,button)


    var maindiv=document.createElement("div")
    maindiv.setAttribute("class","shipping1")

    maindiv.append(imgdiv,cartdiv)

    var hr=document.createElement("hr")
    hr.setAttribute("class","hr")



    document.querySelector(".cart").append(maindiv,hr);

    document.querySelector(".select").addEventListener("click", changePrice);
function changePrice(){
     
    var selectedQuantity = document.querySelector(".select").value;

    document.querySelector("#subtotal").innerText = "$" + (selectedQuantity*el.price + (total-el.price))
    
    
    
    document.querySelector("#total").innerText = "$" + (selectedQuantity*el.price + (total-el.price))
    
    var finalValue = (selectedQuantity*el.price + (total-el.price))
    console.log(finalValue);

    localStorage.setItem("FinalPrice",JSON.stringify(finalValue))
  
    
}


})

function removeItem(el,index){
  console.log(el,index)
    cartdata.splice(index,1)
    localStorage.setItem("cartDataObj",JSON.stringify(cartdata));
    window.location.reload();
}




