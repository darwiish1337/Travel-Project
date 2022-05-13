// Start open menu 
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};
// End open menu 

//  START HOME SWIPPER 
var swiper = new Swiper(".home-slider", {
   loop:true,
   navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
   },
});
//  END HOME SWIPPER 

// START CLIENT REVIEWS SWIPER 
var swiper = new Swiper(".mySwiper", {
   slidesPerView: 3,
   spaceBetween: 30,
   slidesPerGroup: 3,
   loop: true,
   loopFillGroupWithBlank: true,
   pagination: {
   el: ".swiper-pagination",
   clickable: true,
   },
   navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
   },
});
// END CLIENT REVIEWS SWIPER 

// START LOAD IMAGES PACKAGES 
let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.packages .box-container .box')];
   for (var i = currentItem; i < currentItem + 5; i++){
      boxes[i].style.display = 'inline-block';
   };
   currentItem += 4;
   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}
// END LOAD IMAGES PACKAGES 





