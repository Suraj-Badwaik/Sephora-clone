var mensData = [
  // {
  //   image_url:
  //     "https://www.sephora.com/contentimages/brands/adwoabeauty/adwoa-beauty-brand-tile-460x772px.jpg",
  //   name: "",
  //   price: "",
  //   strikedoffprice: "",
  // },
  {
    image_url:
      "https://www.sephora.com/productimages/sku/s2466761-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019&imwidth=230",
    name: "adwoa beauty ",
    p: "Blue Tansy conditioner",
    price: "$24.00",
  },
  {
    image_url:
      "https://www.sephora.com/productimages/sku/s2350932-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019&imwidth=230",
    name: "adwoa beauty ",
    p: "Baomit conditioner",
    price: "$24.00",
  },
  {
    image_url:
      "https://www.sephora.com/productimages/sku/s2481547-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019&imwidth=230",
    name: "adwoa beauty ",
    p: "Blue Tansy mask",
    price: "$36.00",
  },
  {
    image_url:
      "https://www.sephora.com/productimages/sku/s2350924-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019&imwidth=230",
    name: "adwoa beauty ",
    p: "Baomint conditioner",
    price: "$15.00",
  },
  {
    image_url:
      "https://www.sephora.com/productimages/sku/s2482545-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019&imwidth=230",
    name: "adwoa beauty ",
    p: "Blue Tansy treatment serum",
    price: "$24.00",
  },
  {
    image_url:
      "https://www.sephora.com/productimages/sku/s2350940-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019&imwidth=230",
    name: "adwoa beauty ",
    p: "Baomint curling conditioner",
    price: "$24.00",
  },
  {
    image_url:
      "https://www.sephora.com/productimages/sku/s2350957-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019&imwidth=230",
    name: "adwoa beauty ",
    p: "Baomint curling conditioner",
    price: "$24.00",
  },
  {
    image_url:
      "https://www.sephora.com/productimages/sku/s2444032-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019&imwidth=230",
    name: "adwoa beauty ",
    p: "Baomint deep conditioner",
    price: "$24.00",
  },
  {
    image_url:
      "https://www.sephora.com/productimages/sku/s2444008-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019&imwidth=230",
    name: "adwoa beauty ",
    p: "Baomint moisturising shampoo",
    price: "$24.00",
  },
  {
    image_url:
      "https://www.sephora.com/productimages/sku/s2443992-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019&imwidth=230",
    name: "adwoa beauty ",
    p: "Baomint repairative conditioner",
    price: "$24.00",
  },
  {
    image_url:
      "https://www.sephora.com/productimages/sku/s2481554-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019&imwidth=230",
    name: "adwoa beauty ",
    p: "Baomint gel conditioner",
    price: "$24.00",
  },
];

var cartData = JSON.parse(localStorage.getItem("cart")) || [];

mensData.map(function (elem, index) {
  var box = document.createElement("div");

  var img = document.createElement("img");
  img.src = elem.image_url;

  var name = document.createElement("h5");
  name.textContent = elem.name;

  var price = document.createElement("h3");
  price.innerText = elem.price;

  var p = document.createElement("p");
  p.innerText = elem.p;
  // console.log(index);

  // var heart = document.createElement("img");
  // heart.src =
  //   "https:www.sephora.com/contentimages/brands/adwoabeauty/adwoa-beauty-brand-tile-460x772px.jpg";

  // var btn = document.createElement("button");
  // btn.innerText = "Add to cart";
  // btn.addEventListener("click", function () {
  //   addToCart(elem);
  // });

  box.append(img, name, p, price);

  document.querySelector("#container").append(box);
});

function addToCart(elem) {
  console.log(elem);
  cartData.push(elem);
  localStorage.setItem("cart", JSON.stringify(cartData));
}
