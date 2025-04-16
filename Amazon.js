let btn= document.querySelectorAll(".boxc");
let btn1= document.querySelectorAll("button");
let items= document.querySelector(".items");
let shopsec= document.querySelector(".shopsec");
let box= document.querySelector(".box1");



let product=[];

btn.forEach((val)=>{
    val.innerHTML +=`<button onclick="addcart()" data=value  class='btn'>Add To Cart</button>`;
});

function addcart(){
    shopsec.addEventListener("click",function(details){
        if(details.target.classList.contains('btn')){
            items.innerText =`        <div class="box2 box">
<div class="boxc">
    <h2> Health & Personal Care</h2>
    <div class="boximg" style="background-image: url('box2_image.jpg');"></div>
    <p>See more</p>
</div>
</div>`;
            w.append(w);
    }
    });
}
addcart();

