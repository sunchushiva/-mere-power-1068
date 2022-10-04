let price = document.getElementById("price");
let wall = document.getElementById("itemswall");

let logo = document.getElementById("logo");
let account = document.getElementById("account");
let like = document.getElementById("like");
let cart = document.getElementById("cart");

let emailbtn = document.querySelectorAll(".emailbtn");
let email1 = document.querySelector(".email1");
let email2 = document.querySelector(".email2");
let subData = JSON.parse(localStorage.getItem("sub-items")) || [];


for(let a=0; a<emailbtn.length; a++){
    if(a==0){
        emailbtn[a].addEventListener("click", function(){
            let x = email1.value;
            if(x.value != ""){

                let out;
                for(let z=0; z<subData.length; z++){
                    if(subData[z].email==x){
                        out = true;
                        break;
                    }
                }
                if(out==true){
                    alert("You are already our registered customer");
                }else{
                    alert("Thank you for your trust. Email has been sent!");
                }
            
                let dataObj = {"email": x,};
                subData.push(dataObj);
                localStorage.setItem("sub-items", JSON.stringify(subData));
                email1.value = "";
            } else{
                alert("Please enter your email");
                email1.value = "";
            }
        })
    } else if(a==1){
        emailbtn[a].addEventListener("click", function(){
            let x = email2.value;
            if(x.value != ""){

                let out;
                for(let z=0; z<subData.length; z++){
                    if(subData[z].email==x){
                        out = true;
                        break;
                    }
                }
                if(out==true){
                    alert("You are already our registered customer");
                }else{
                    alert("Thank you for your trust. Email has been sent!");
                }
            
                let dataObj = {"email": x,};
                subData.push(dataObj);
                localStorage.setItem("sub-items", JSON.stringify(subData));
                email2.value = "";
            } else{
                alert("Please enter your email");
                email2.value = "";
            }
        })
    }
}

cart.addEventListener("click",function(){
    window.location.href = "/HTML/cart.html";
})

logo.addEventListener("click",function(){
    window.location.href = "../index.html";
})

account.addEventListener("click",function(){
    window.location.href = "/HTML/account.html";
})

like.addEventListener("click",function(){
    window.location.href = "/HTML/like.html";
})

let itemsData = JSON.parse(localStorage.getItem("items"));
  
let likeData = JSON.parse(localStorage.getItem("like-items")) || [];
let cartData = JSON.parse(localStorage.getItem("cart-items")) || [];
let loginArr = JSON.parse(localStorage.getItem("login-details")) || [];

if(loginArr.length!=0){
    account.setAttribute("src" , "/Images/icons8-user-50.png");
}

function displayFun(read){

    wall.innerHTML = "";

    read.forEach(function(elem,i){

        let div = document.createElement("div");

        let text = document.createElement("p");
        text.innerText = "Liked";
        text.setAttribute("id","text");
        text.style.display = "none";

        let image = document.createElement("img");
        image.setAttribute("src" , elem.image_url);

        let brand = document.createElement("h1");
        brand.innerText = elem.brand;

        let desc = document.createElement("p");
        desc.innerText = elem.desc;

        let price = document.createElement("p");
        price.innerText = `$${elem.price}`;
        price.setAttribute("id", "price");
        let count = 0;
        price.addEventListener("click", function () {
          if (count % 2 == 0) {
            let res = elem.price * 80;
            price.innerText = "";
            price.innerText = `₹${res}`;
            count++;
          } else {
            price.innerText = `$${elem.price}`;
            count++;
          }
        });

        let likebtn = document.createElement("button");
        likebtn.innerText = "❤️";
        likebtn.style.cursor = "pointer";
        likebtn.setAttribute("id" , "heart")
        likebtn.addEventListener("click", function(){
            let res = likeData.filter(function(el){
                return elem.image_url == el.image_url;
              });
              if(res.length>0){
                alert("You are adding it again!");
                window.location.href = "/HTML/like.html";
              } else{
                likebtn.innerText = "";
                text.style.display = "block";
                likeData.push(elem);
                localStorage.setItem("like-items", JSON.stringify(likeData));
              }
        })

        let cartbtn = document.createElement("button");
        cartbtn.innerText = "Add to Cart";
        cartbtn.setAttribute("id" , "cart");
        cartbtn.addEventListener("click", function(){
        cartbtn.innerText = "Added";
        cartbtn.style.color = "green";
        cartbtn.style.fontWeight = "bold";
        cartbtn.style.animation= "opac 1s ease";
        let res = cartData.filter(function(el){
            return elem.image_url == el.image_url;
          });
          if(res.length>0){
            res[0]["quantity"]+=1;
            cartData.push(res);
            cartData.pop(res);
            localStorage.setItem("cart-items", JSON.stringify(cartData));
      
          } else{
            elem["quantity"] = 1;
            cartData.push(elem);
            localStorage.setItem("cart-items", JSON.stringify(cartData));
          }
        });

        image.addEventListener("click", function(){

            let prod = [elem];
            let descrpt = read.filter(function(el){
              return elem.brand == el.brand && elem.category == el.category;
            });
        
            localStorage.setItem("descrpt" , JSON.stringify(descrpt));
            localStorage.setItem("prod", JSON.stringify(prod));
            localStorage.setItem("dataArr" , JSON.stringify(descrpt));
            window.location.href = "/HTML/description.html";
          });
        
        div.append(text,image,brand,desc,price, likebtn, cartbtn);
        wall.append(div);
    })
}
displayFun(itemsData);

let itemsDataCopy = itemsData.map(function(el){
    return el;
})

price.addEventListener("change", function(){

    if(price.value == ""){
        displayFun(itemsData);
    } else{

        if(price.value == "low"){
            let sortedData = itemsDataCopy.sort(function(a,b){
                return a.price - b.price;
            });
            displayFun(sortedData);
        } else{
            let sortedData = itemsDataCopy.sort(function(a,b){
                return b.price - a.price;
            });
            displayFun(sortedData);

        }
    }
})

let one1 = document.getElementById("one1");
let one = document.getElementById("one");
let nav = document.querySelector("nav");

one.addEventListener("mouseover", function(){
    one1.style.display = "grid";
    nav.style.paddingBottom = "3%";
})
one.addEventListener("mouseout", function(){
  one1.style.display = "none";
  nav.style.paddingBottom = "0%";
})

let two2 = document.getElementById("two2");
let two = document.getElementById("two");

two.addEventListener("mouseover", function(){
  two2.style.display = "grid";
  nav.style.paddingBottom = "3%";
})
two.addEventListener("mouseout", function(){
two2.style.display = "none";
nav.style.paddingBottom = "0%";
})

let three3 = document.getElementById("three3");
let three = document.getElementById("three");

three.addEventListener("mouseover", function(){
  three3.style.display = "grid";
  nav.style.paddingBottom = "3%";
})
three.addEventListener("mouseout", function(){
three3.style.display = "none";
nav.style.paddingBottom = "0%";
})

let five5 = document.getElementById("five5");
let five = document.getElementById("five");

five.addEventListener("mouseover", function(){
  five5.style.display = "grid";
  nav.style.paddingBottom = "3%";
})
five.addEventListener("mouseout", function(){
five5.style.display = "none";
nav.style.paddingBottom = "0%";
})

let six6 = document.getElementById("six6");
let six = document.getElementById("six");

six.addEventListener("mouseover", function(){
  six6.style.display = "grid";
  nav.style.paddingBottom = "3%";
})
six.addEventListener("mouseout", function(){
six6.style.display = "none";
nav.style.paddingBottom = "0%";
})

let eight8 = document.getElementById("eight8");
let eight = document.getElementById("eight");

eight.addEventListener("mouseover", function(){
  eight8.style.display = "grid";
  nav.style.paddingBottom = "3%";
})
eight.addEventListener("mouseout", function(){
eight8.style.display = "none";
nav.style.paddingBottom = "0%";
})

let nine9 = document.getElementById("nine9");
let nine = document.getElementById("nine");

nine.addEventListener("mouseover", function(){
  nine9.style.display = "grid";
  nav.style.paddingBottom = "3%";
})
nine.addEventListener("mouseout", function(){
nine9.style.display = "none";
nav.style.paddingBottom = "0%";
})  