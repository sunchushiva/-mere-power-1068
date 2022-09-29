let logo = document.getElementById("logo");
let account = document.getElementById("account");
let like = document.getElementById("like");
let cart = document.getElementById("cart");


cart.addEventListener("click",function(){
    window.location.href = "/HTML/cart.html";
})

logo.addEventListener("click",function(){
    window.location.href = "/HTML/index.html";
})

account.addEventListener("click",function(){
    window.location.href = "/HTML/account.html";
})

like.addEventListener("click",function(){
    window.location.href = "/HTML/like.html";
})


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

let slidePosition = 0;
let slides = document.querySelectorAll(".items");
let toatlSlides = slides.length;


document.getElementById("next").addEventListener("click", function(){
    if(slidePosition===toatlSlides-1){
        slidePosition = 0;
    } else{
        slidePosition++;
    }
    updateSlide();
})


document.getElementById("prev").addEventListener("click", function(){
    if(slidePosition===0){
        slidePosition = toatlSlides-1;
    } else{
        slidePosition--; 
    }
    updateSlide();
})


function updateSlide(){
    for(let slide of slides){
        slide.classList.remove("visible");
        slide.classList.add("hidden");
    }
    slides[slidePosition].classList.add("visible");
}



let gucciBtn = document.getElementById("gucci-btn");
let pradaBtn = document.getElementById("prada-btn");
let fendiBtn = document.getElementById("fendi-btn");
let sunglassesBtn = document.getElementById("sunglasses-btn");


gucciBtn.addEventListener("click", function(){
    window.location.href = "/HTML/gucci.html";
})

pradaBtn.addEventListener("click", function(){
    window.location.href = "/HTML/prada.html";
})

fendiBtn.addEventListener("click", function(){
    window.location.href = "/HTML/fendi.html";
})

sunglassesBtn.addEventListener("click", function(){
    window.location.href = "/HTML/sunglasses.html";
})