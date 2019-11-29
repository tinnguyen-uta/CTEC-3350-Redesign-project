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
	let togglerBottom = $(".bottom-bar .question-button");

  togglerBottom.on("click", function(){
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


/*tabbed more info services*/

/*-------------------------------------------------------*/
/*----TAB 1----*/
$(function(){
  let togglerMoreinfo = $(".service-image01 .btn-moreinfo.1");

  togglerMoreinfo.on("click", function(){
    let moreinfo = $(".service-moreinfo.1");
    moreinfo.fadeToggle(200);
	$(".service-comments.1").css({display:"none"});
	$(".btn-moreinfo.1").toggleClass('hoverorange');
	$(".btn-comments.1").removeClass('hoverorange');

  });
});


  let togglerComments1 = $(".service-image01 .btn-comments.1");

  togglerComments1.on("click", function(){
    let comments1 = $(".service-comments.1");
    comments1.fadeToggle(200);
	$(".service-moreinfo.1").css({display:"none"});
	$(".btn-comments.1").toggleClass('hoverorange');
	$(".btn-moreinfo.1").removeClass('hoverorange');

});

/*-------END TAB 1-------*/


/*-------TAB 2-------*/

$(function(){
  let togglerMoreinfo2 = $(".service-image01 .btn-moreinfo.2");

  togglerMoreinfo2.on("click", function(){
    let moreinfo2 = $(".service-moreinfo.2");
    moreinfo2.fadeToggle(200);
	$(".service-comments.2").css({display:"none"});
	$(".btn-moreinfo.2").toggleClass('hoverorange');
	$(".btn-comments.2").removeClass('hoverorange');

  });
});


  let togglerComments2 = $(".service-image01 .btn-comments.2");

  togglerComments2.on("click", function(){
    let comments2 = $(".service-comments.2");
    comments2.fadeToggle(200);
	$(".service-moreinfo.2").css({display:"none"});
	$(".btn-comments.2").toggleClass('hoverorange');
	$(".btn-moreinfo.2").removeClass('hoverorange');

});

/*------- END TAB 2-------*/


/*----TAB 3----*/
$(function(){
  let togglerMoreinfo3 = $(".service-image01 .btn-moreinfo.3");

  togglerMoreinfo3.on("click", function(){
    let moreinfo3 = $(".service-moreinfo.3");
    moreinfo3.fadeToggle(200);
	$(".service-comments.3").css({display:"none"});
	$(".btn-moreinfo.3").toggleClass('hoverorange');
	$(".btn-comments.3").removeClass('hoverorange');

  });
});


  let togglerComments3 = $(".service-image01 .btn-comments.3");

  togglerComments3.on("click", function(){
    let comments3 = $(".service-comments.3");
    comments3.fadeToggle(200);
	$(".service-moreinfo.3").css({display:"none"});
	$(".btn-comments.3").toggleClass('hoverorange');
	$(".btn-moreinfo.3").removeClass('hoverorange');

});

/*-------END TAB 3-------*/


/*-------TAB 4-------*/

$(function(){
  let togglerMoreinfo4 = $(".service-image01 .btn-moreinfo.4");

  togglerMoreinfo4.on("click", function(){
    let moreinfo4 = $(".service-moreinfo.4");
    moreinfo4.fadeToggle(200);
	$(".service-comments.4").css({display:"none"});
	$(".btn-moreinfo.4").toggleClass('hoverorange');
	$(".btn-comments.4").removeClass('hoverorange');

  });
});


  let togglerComments4 = $(".service-image01 .btn-comments.4");

  togglerComments4.on("click", function(){
    let comments4 = $(".service-comments.4");
    comments4.fadeToggle(200);
	$(".service-moreinfo.4").css({display:"none"});
	$(".btn-comments.4").toggleClass('hoverorange');
	$(".btn-moreinfo.4").removeClass('hoverorange');

});

/*------- END TAB 4-------*/



/*----TAB 5----*/
$(function(){
  let togglerMoreinfo5 = $(".service-image01 .btn-moreinfo.5");

  togglerMoreinfo5.on("click", function(){
    let moreinfo5 = $(".service-moreinfo.5");
    moreinfo5.fadeToggle(200);
	$(".service-comments.5").css({display:"none"});
	$(".btn-moreinfo.5").toggleClass('hoverorange');
	$(".btn-comments.5").removeClass('hoverorange');

  });
});


  let togglerComments5 = $(".service-image01 .btn-comments.5");

  togglerComments5.on("click", function(){
    let comments5 = $(".service-comments.5");
    comments5.fadeToggle(200);
	$(".service-moreinfo.5").css({display:"none"});
	$(".btn-comments.5").toggleClass('hoverorange');
	$(".btn-moreinfo.5").removeClass('hoverorange');

});

/*-------END TAB 5-------*/


/*-------TAB 6-------*/

$(function(){
  let togglerMoreinfo6 = $(".service-image01 .btn-moreinfo.6");

  togglerMoreinfo6.on("click", function(){
    let moreinfo6 = $(".service-moreinfo.6");
    moreinfo6.fadeToggle(200);
	$(".service-comments.6").css({display:"none"});
	$(".btn-moreinfo.6").toggleClass('hoverorange');
	$(".btn-comments.6").removeClass('hoverorange');

  });
});


  let togglerComments6 = $(".service-image01 .btn-comments.6");

  togglerComments6.on("click", function(){
    let comments6 = $(".service-comments.6");
    comments6.fadeToggle(200);
	$(".service-moreinfo.6").css({display:"none"});
	$(".btn-comments.6").toggleClass('hoverorange');
	$(".btn-moreinfo.6").removeClass('hoverorange');

});

/*------- END TAB 6-------*/



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
