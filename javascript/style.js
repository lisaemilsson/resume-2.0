const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
   }))





  




/*fetch("./index.json")
   .then(function(resp){
      return resp.json();
   })
   .then(function(data) {
      console.log(data);
   })*/


/*const body = document.body;
let scroll = 0;

window.addEventListener('scroll', () => {
 const currentScroll = window.pageXOffset  
 
 if (currentScroll <= 0) {
    body.classList.remove("scroll-up")
 }

 if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up")
    body.classList.add("scroll-down")
 }

 if (currentScroll < lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down")
    body.classList.add("scroll-up")
 }

 lastScrol = currentScroll;

})*/