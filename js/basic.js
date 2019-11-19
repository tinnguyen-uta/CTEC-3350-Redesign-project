// this is an inline comment

/*
 * Created by: Carlos Cucalon
 * Created on: 10/08/2019
 * Created for: CTEC 3350
*/

// alert("hello world");
// console.log("hello world");

$(function(){
  /*
  * Menu toggler
  * 1. When a user clicks on the toggler the navigation should open or close
  * 2. When a user clicks on the dropdown the dropdown menu should open or close
  */

  let toggler = $(".navbar .navbar-toggler");

  toggler.on("click", function(){
    console.log("I was clicked");
    let mainNavigation = $("#mainNavigation");
    mainNavigation.toggle(500);
  });

  let dropdown = $(".dropdown > .navbar-link");

  dropdown.on("click", function(e){
    console.log(e);
    e.preventDefault();
    console.log("I was clicked dropdown");
    $(this).toggleClass("closed");
    let dropdownMenu = $(this).parent().find(".dropdown-menu");
    dropdownMenu.toggle();
  });


  
  

});




$(function(){
	let toggler = $(".bottom-bar .question-button");

  toggler.on("click", function(){
    console.log("I was clicked on question button");
    let questionBottomMenu = $(".question-bottom-bar-dropup");
    questionBottomMenu.toggle(100);
  });
});

/*------------------rotate banner-----------------*/


let heroControl = $(".hero-container .hero-control");
let indicator = $(".hero-container .hero-indicators li");

indicator.on("click", function(){
	
  let parentHeroContainer = $(this).closest(".hero-container");
  let currentSlide = $(parentHeroContainer).find(".hero-indicators li.active").index();
  let nextSlide = $(this).index();
	
  slideHandler(currentSlide, nextSlide, parentHeroContainer);
  
	
});

heroControl.on("click", function(){
  console.log(this);
  let direction = $(this).attr("data-slide");
  let parentHeroContainer = $(this).closest(".hero-container");
  let currentSlide = $(parentHeroContainer).find(".hero-slide.active").index();
  let numberofSlides =$(parentHeroContainer).find(".hero-slide").length - 1;
  let nextSlide;

  if(direction === "next"){
    nextSlide = currentSlide + 1;
  } else if (direction === "prev"){
    nextSlide = currentSlide - 1;
  }
	
  if (nextSlide < 0){
	  nextSlide = numberofSlides;
  } else if (nextSlide > numberofSlides) {
	  nextSlide = 0;
  } else {
	  nextSlide = nextSlide;
  }
	
	
  
  
	
  console.log(direction, numberofSlides, nextSlide, currentSlide);
	
  slideHandler(currentSlide, nextSlide, parentHeroContainer);
});

function slideHandler (current, next, container){
	console.log(current, next, container);
	$(container).find(".hero-slide").eq(current).removeClass("active");
	$(container).find(".hero-slide").eq(next).addClass("active");
	$(container).find(".hero-indicators li").eq(current).removeClass("active");
	$(container).find(".hero-indicators li").eq(next).addClass("active");
	
};


















/*$(function(){

  $(".navbar-toggler").on("click", function (){
  	$(this).toggleClass("open");
  	let menu = $(this).attr("data-target");
  	$(menu).toggle(250);
  });

  $(".dropdown a").on("click", function (e){
  	e.preventDefault();
    $(this).parent().toggleClass("open");
    $(this).parent().find(".dropdown-menu").toggle();
  });

});*/
