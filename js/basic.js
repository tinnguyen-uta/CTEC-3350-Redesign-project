// this is an inline comment

/*
 * Created by: Carlos Cucalon
 * Created on: 10/08/2019
 * Created for: CTEC 3350
*/

// alert("hello world");
// console.log("hello world");

$(function(){
	let checklistToggle = $(".navbar .navbar-cheklist");

  checklistToggle.on("click", function(){
    console.log("I was clicked on checklist button");
    let checklist = $(".containter-fluid.check-list");
    checklist.toggle(100);
  });
});






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






/** Request info functions**/

/** click to next question**/

let indicatorControl = $(".indicator-control") ;
let indicatorz = $(".slide-indicators li") ;

/* indicatorz.on("click", function(){
  let parentContainer= $(this).closest(".request-container")
  let currentSlide =$(parentContainer).find(".slide-indicators li.active").index();
  let nextSlide = $(this).index();

  slideHandler(currentSlide, nextSlide, parentContainer);
}); */
// Since you are using the indicators as a progress bar rather than a button I commented this code out so that they don't become clickable

indicatorControl.on("click", function(){
  console.log(this);
  let direction = $(this).attr("data-slide");
  let parentContainer= $(this).closest(".request-container")
  let currentSlide =$(parentContainer).find(".page.active").index();
  let numberOfSlides= $(parentContainer).find(".page").length -1;
  let nextSlide;

  if(direction == "next"){
    nextSlide = currentSlide + 1;
  } else if(direction == "prev"){
    nextSlide = currentSlide -1;
  }



  console.log(direction, numberOfSlides, nextSlide, currentSlide);

  slideHandler(currentSlide, nextSlide, parentContainer);

	indicatorsHandler(direction, currentSlide, nextSlide, parentContainer);
});

function slideHandler(current, next, container, indicators){ /* You are not passing Indicators to the function */
  console.log(current, next);
  $(container).find(".page").eq(current).removeClass("active");
  $(container).find(".page").eq(next).addClass("active");
};

function indicatorsHandler(direction, current, next, container){ // Created it's own function for the indicator Handler
	if(direction === 'prev'){ // Check the direction and if the direction is going backwards then remove the class active since we are proactively adding that class
		$(container).find(".slide-indicators li").eq(current).removeClass("active");
	}
  $(container).find(".slide-indicators li").eq(next).addClass("active");
}

/** end click to next question function **/


$(function(){
	let requestbutton = $(".btn-ans");

  requestbutton.on("click", function(){
    console.log("I was clicked");
    $(this).toggleClass('hoverblue');

  });
});

$(function(){
	let unsurebutton = $(".unsure");

	unsurebutton.on("click", function(){
	    console.log("I have been clicked");
	    $(this).toggleClass('hoverorange');

  });
});




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
