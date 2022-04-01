var sidebarArr=["Face","Eye","Lip","Cheek","Value & Gift Sets","Markup Palettes","Brushes & Application","Accessories", "Nail","Vegan","Mini Size"]
    
    sidebarArr.map(function (elem){
        var div=document.createElement("div");
        div.innerText=elem;

        document.querySelector("#first-sidebar").append(div);
    })
  
  var filterArr=["Sale","Brand","Rating","Concerns", "New", "Color Family","Formulation","Finish", "Benefits", "Ingredient","Size","Shopping Preference", "Skin Type", "Coverage","Age Range","Sun Protection","Price Range","Volume","Bristle Type", "Type"]

  filterArr.map(function (elem){
        var div=document.createElement("div");
        div.innerText=elem;

        document.querySelector("#filters").append(div);
    })

    //first-div

    // var firstDiv=["New","Bestsellers","Clean","Vegan","Mini Size","Lipi Quiz", "Foundation Quiz"];
    var firstDiv = [
    {
      name: "New",
      image_url:
        "https://www.sephora.com/contentimages/categorybanners/RWD/icons/new.svg",
    },
    {
      name: "Bestsellers",
      image_url:
        "https://www.sephora.com/contentimages/categorybanners/RWD/icons/bestsellers.svg",
    },
    {
      name: "Clean",
      image_url:
        "https://www.sephora.com/contentimages/categorybanners/RWD/icons/clean_beauty32.svg",
    },
    {
      name: "Vegan",
      image_url:
        "https://www.sephora.com/contentimages/categorybanners/RWD/icons/Icon_Vegan.svg",
    },
    {
      name: "Mini Size",
      image_url:
        "https://www.sephora.com/contentimages/categorybanners/RWD/icons/minis.svg",
    },
    {
      name: "Lipi Quiz",
      image_url:
        "https://www.sephora.com/contentimages/categorybanners/RWD/icons/lip_quiz.svg",
    },
    {
      name: "Foundation Quiz",
      image_url:
        "https://www.sephora.com/contentimages/categorybanners/RWD/icons/foundation_quiz.svg",
    }
];
    firstDiv.map(function (elem){
        var div=document.createElement("div");
        
        var name=document.createElement("p");
        name.innerText=elem.name;
        
        var img=document.createElement("img");
        img.src=elem.image_url;

        div.append(name, img)
        
        document.querySelector("#first-div").append(div);
    })

    var productList=[
            {
        imgLink: "https://www.sephora.com/productimages/sku/s2050391-main-zoom.jpg?imwidth=270&imwidth=230",
        companyName: "Dior ",
        productName: "Dior Airflash Spray Foundation",
        colorType: "24 Colors",
        price: "$62.00",
        },
        {
        imgLink: "https://www.sephora.com/productimages/sku/s1491380-main-zoom.jpg?imwidth=270&pb=2020-03-allure-best-2018&imwidth=230",
        companyName: "Armani Beauty",
        productName: "Luminous Silk Perfect Glow Flawless Oil-Free Foundation",
        colorType: "40 Colors",
        price: "$44.00 - $65.00",
        },
        {
        imgLink: "https://www.sephora.com/productimages/sku/s2303006-main-zoom.jpg?imwidth=270&imwidth=230",
        companyName: "Hourglass",
        productName: "Vanish™ Airbrush Concealer",
        colorType: "22 Colors",
        price: "$16.00 - $36.00",
        },
        {
        imgLink: "https://www.sephora.com/productimages/sku/s2503092-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019&imwidth=230",
        companyName: "Westman Atelier",
        productName: "Vital Skin Foundation Stick",
        colorType: "21 Colors",
        price: "$68.00",
        },
        {
        imgLink: "https://www.sephora.com/productimages/sku/s2510196-main-zoom.jpg?imwidth=270&imwidth=230",
        companyName: "Yves Saint Laurent",
        productName: "Lash Clash Extreme Volume Mascara",
        colorType: "",
        price: "$29.00",
        },
        {
        imgLink: "https://www.sephora.com/productimages/sku/s2489201-main-zoom.jpg?imwidth=270&imwidth=230",
        companyName: "Yves Saint Laurent",
        productName: "NU BARE LOOK TINT Hydrating Skin Tint Foundation with Hyaluronic Acid",
        colorType: "20 Colors",
        price: "$38.00",
        },
        {
        imgLink: "https://www.sephora.com/productimages/sku/s2369148-main-zoom.jpg?imwidth=270&imwidth=230",
        companyName: "Gucci",
        productName: "Gucci Poudre De Beauté Éclat Soleil Bronzing Powder",
        colorType: "5 Colors",
        price: "$62.00",
        },
        {
        imgLink: "https://www.sephora.com/productimages/sku/s2464881-main-zoom.jpg?imwidth=270&imwidth=230",
        companyName: "PAT McGRATH LABS",
        productName: "Skin Fetish: Divine Powder Blush",
        colorType: "8 Colors",
        price: "$38.00",
        },
        {
        imgLink: "https://www.sephora.com/productimages/sku/s2469427-main-zoom.jpg?imwidth=270&imwidth=230",
        companyName: "Armani Beauty",
        productName: "Lip Power Long Lasting Satin Lipstick",
        colorType: "18 Colors",
        price: "$38.00 - $49.00",
        },
        {
        imgLink: "https://www.sephora.com/productimages/sku/s2447043-main-zoom.jpg?imwidth=270&imwidth=230",
        companyName: "Dior",
        productName: "Dior Addict Lip Glow",
        colorType: "14 Colors",
        price: "$35.00",
        },
        {
        imgLink: "https://www.sephora.com/productimages/sku/s2510089-main-zoom.jpg?imwidth=270&imwidth=230",
        companyName: "Givenchy",
        productName: "Rose Perfecto Liquid Balm",
        colorType: "6 Colors",
        price: "$37.00",
        },
        {
        imgLink: "https://www.sephora.com/productimages/sku/s2543072-main-zoom.jpg?imwidth=270&imwidth=230",
        companyName: "Valentino",
        productName: "Rosso Valentino Refillable Lipstick",
        colorType: "50 Colors",
        price: "$55.00",
        },
        {
        imgLink: "https://www.sephora.com/productimages/sku/s2072437-main-zoom.jpg?imwidth=270&imwidth=230",
        companyName: "MAKE UP FOR EVER",
        productName: "Artist Color Pencil: Eye, Lip & Brow Pencil",
        colorType: "28 Colors",
        price: "$18.00 - $20.00",
        },
        {
        imgLink: "https://www.sephora.com/productimages/sku/s2439594-main-zoom.jpg?imwidth=270&pb=allure-best-2020&imwidth=230",
        companyName: "Danessa Myricks Beauty",
        productName: "Colorfix Eye, Cheek & Lip Cream Pigment",
        colorType: "34 Colors",
        price: "$18.00",
        },
        {
        imgLink: "https://www.sephora.com/productimages/sku/s2221034-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-value-2020&imwidth=230",
        companyName: "SEPHORA COLLECTION",
        productName: "#Eyestories Eyeshadow Palette",
        colorType: "2 Colors",
        price: "$5.00 $10.00",
        },
        ]
    //second-div
    var resultPage=document.createElement("p");
    resultPage.innerText= productList.length +" "+ "Results";

    var sortPage=document.createElement("P");
    sortPage.innerText="Sort by: Relevance";

    document.querySelector("#second-div").append(resultPage, sortPage);

    //third-div


productList.map(function (elem){
    var div=document.createElement("div");
    div.addEventListener("click", function(){
        window.location.href="product/product1.html";
    });

    var img=document.createElement("img");
    img.src=elem.imgLink;

    var cName=document.createElement("h2");
    cName.innerText=elem.companyName;

    var pName=document.createElement("p");
    pName.innerText=elem.productName;

    var ctype=document.createElement("p");
    ctype.innerText=elem.colorType;
    ctype.className="ctype";

    var pPrice=document.createElement("h1");
    pPrice.innerText=elem.price;

    div.append(img, cName, pName, ctype, pPrice);

    document.querySelector("#third-div").append(div);
});