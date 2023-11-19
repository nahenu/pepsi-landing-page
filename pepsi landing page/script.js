let boxImage = document.getElementById("boxImage");
let hax=document.getElementById('hax')
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let li=Array.from(document.getElementsByClassName('li'))
function image(event) {
  boxImage.src = event;
}
img1.addEventListener("mouseover", () => {
  hax.style.backgroundColor = "blue";
});
img2.addEventListener("mouseover", () => {
  hax.style.backgroundColor = "red";
});
img3.addEventListener("mouseover", () => {
  hax.style.backgroundColor = "black";
});
window.addEventListener("scroll", () => {
  if (window.pageYOffset < 500) {
    document.getElementById("x").style.left = "3%";
  } else if (window.pageYOffset < 600) {
    document.getElementById("y").style.left = "5%";
  } else if (window.pageYOffset < 800) {
    document.getElementById("z").style.left = "6%";
  } else {
    document.getElementById("x").style.left = "-15%";
    document.getElementById("y").style.left = "-15%";
    document.getElementById("z").style.left = "-15%";
  }
});
document.getElementById('logo').addEventListener('click',()=>{
    if(document.getElementById('audio').paused){
        document.getElementById('audio').play()
    }else{
        document.getElementById('audio').pause()
    }
})
function product(){
    alert("products is not available at that time ! please try later")
}
function home(){
    document.getElementById('home').innerHTML="THAT'S WHAT"
    document.getElementById('home2').innerHTML="I WANT"
}
function contact(){
    document.getElementById('home').innerHTML="CONTACT NUMBER"
    document.getElementById('home2').innerHTML="+91-8755904318"
    
}
function products(){
    document.getElementById('home').innerHTML="PEPSI"
    document.getElementById('home2').innerHTML="PRODUCT DETAILS"
    document.getElementById('button').innerHTML="Click here to see products"
    document.getElementById('button').style.backgroundColor="green"
    document.getElementById('button').style.Color="white"
  document.getElementById('button').style.padding="15px 7px"
}
li.forEach((event)=>{
    event.addEventListener('click',()=>{
        document.getElementById('button').innerHTML="View All Products "
        document.getElementById('button').style.backgroundColor="white"
        document.getElementById('button').style.Color="black"
      document.getElementById('button').style.padding="10px 2px"
    })
})