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
    questionBottomMenu.fadeToggle(100);
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



/*ALL SERVICES PAGE*/

/*TAB 7*/

$(function(){
  let togglerMoreinfo7 = $(".service-image01 .btn-moreinfo.7");

  togglerMoreinfo7.on("click", function(){
    let moreinfo7 = $(".service-moreinfo.7");
    moreinfo7.fadeToggle(200);
	$(".service-comments.7").css({display:"none"});
	$(".btn-moreinfo.7").toggleClass('hoverorange');
	$(".btn-comments.7").removeClass('hoverorange');

  });
});


  let togglerComments7 = $(".service-image01 .btn-comments.7");

  togglerComments7.on("click", function(){
    let comments7 = $(".service-comments.7");
    comments7.fadeToggle(200);
	$(".service-moreinfo.7").css({display:"none"});
	$(".btn-comments.7").toggleClass('hoverorange');
	$(".btn-moreinfo.7").removeClass('hoverorange');

});

/*------- END TAB 7-------*/

/*TAB 8*/
$(function(){
  let togglerMoreinfo8 = $(".service-image01 .btn-moreinfo.8");

  togglerMoreinfo8.on("click", function(){
    let moreinfo8 = $(".service-moreinfo.8");
    moreinfo8.fadeToggle(200);
	$(".service-comments.8").css({display:"none"});
	$(".btn-moreinfo.8").toggleClass('hoverorange');
	$(".btn-comments.8").removeClass('hoverorange');

  });
});


  let togglerComments8 = $(".service-image01 .btn-comments.8");

  togglerComments8.on("click", function(){
    let comments8 = $(".service-comments.8");
    comments8.fadeToggle(200);
	$(".service-moreinfo.8").css({display:"none"});
	$(".btn-comments.8").toggleClass('hoverorange');
	$(".btn-moreinfo.8").removeClass('hoverorange');

});

/*-------END TAB 8-------*/


/*TAB 9*/

$(function(){
  let togglerMoreinfo9 = $(".service-image01 .btn-moreinfo.9");

  togglerMoreinfo9.on("click", function(){
    let moreinfo9 = $(".service-moreinfo.9");
    moreinfo9.fadeToggle(200);
	$(".service-comments.9").css({display:"none"});
	$(".btn-moreinfo.9").toggleClass('hoverorange');
	$(".btn-comments.9").removeClass('hoverorange');

  });
});


  let togglerComments9 = $(".service-image01 .btn-comments.9");

  togglerComments9.on("click", function(){
    let comments9 = $(".service-comments.9");
    comments9.fadeToggle(200);
	$(".service-moreinfo.9").css({display:"none"});
	$(".btn-comments.9").toggleClass('hoverorange');
	$(".btn-moreinfo.9").removeClass('hoverorange');

});

/*------- END TAB 9-------*/


/*TAB 10*/
$(function(){
  let togglerMoreinfo10 = $(".service-image01 .btn-moreinfo.10");

  togglerMoreinfo10.on("click", function(){
    let moreinfo10 = $(".service-moreinfo.10");
    moreinfo10.fadeToggle(200);
	$(".service-comments.10").css({display:"none"});
	$(".btn-moreinfo.10").toggleClass('hoverorange');
	$(".btn-comments.10").removeClass('hoverorange');

  });
});


  let togglerComments10 = $(".service-image01 .btn-comments.10");

  togglerComments10.on("click", function(){
    let comments10 = $(".service-comments.10");
    comments10.fadeToggle(200);
	$(".service-moreinfo.10").css({display:"none"});
	$(".btn-comments.10").toggleClass('hoverorange');
	$(".btn-moreinfo.10").removeClass('hoverorange');

});

/*-------END TAB 10-------*/


/*-------TAB 11------*/

$(function(){
  let togglerMoreinfo11 = $(".service-image01 .btn-moreinfo.11");

  togglerMoreinfo11.on("click", function(){
    let moreinfo11 = $(".service-moreinfo.11");
    moreinfo11.fadeToggle(200);
	$(".service-comments.11").css({display:"none"});
	$(".btn-moreinfo.11").toggleClass('hoverorange');
	$(".btn-comments.11").removeClass('hoverorange');

  });
});


  let togglerComments11 = $(".service-image01 .btn-comments.11");

  togglerComments11.on("click", function(){
    let comments11 = $(".service-comments.11");
    comments11.fadeToggle(200);
	$(".service-moreinfo.11").css({display:"none"});
	$(".btn-comments.11").toggleClass('hoverorange');
	$(".btn-moreinfo.11").removeClass('hoverorange');

});

/*------- END TAB 11-------*/



/*----TAB 12----*/
$(function(){
  let togglerMoreinfo12 = $(".service-image01 .btn-moreinfo.12");

  togglerMoreinfo12.on("click", function(){
    let moreinfo12 = $(".service-moreinfo.12");
    moreinfo12.fadeToggle(200);
	$(".service-comments.12").css({display:"none"});
	$(".btn-moreinfo.12").toggleClass('hoverorange');
	$(".btn-comments.12").removeClass('hoverorange');

  });
});


  let togglerComments12 = $(".service-image01 .btn-comments.12");

  togglerComments12.on("click", function(){
    let comments12 = $(".service-comments.12");
    comments12.fadeToggle(200);
	$(".service-moreinfo.12").css({display:"none"});
	$(".btn-comments.12").toggleClass('hoverorange');
	$(".btn-moreinfo.12").removeClass('hoverorange');

});

/*-------END TAB 12-------*/


/*-------TAB 13-------*/

$(function(){
  let togglerMoreinfo13 = $(".service-image01 .btn-moreinfo.13");

  togglerMoreinfo13.on("click", function(){
    let moreinfo13 = $(".service-moreinfo.13");
    moreinfo13.fadeToggle(200);
	$(".service-comments.13").css({display:"none"});
	$(".btn-moreinfo.13").toggleClass('hoverorange');
	$(".btn-comments.13").removeClass('hoverorange');

  });
});


  let togglerComments13 = $(".service-image01 .btn-comments.13");

  togglerComments13.on("click", function(){
    let comments13 = $(".service-comments.13");
    comments13.fadeToggle(200);
	$(".service-moreinfo.13").css({display:"none"});
	$(".btn-comments.13").toggleClass('hoverorange');
	$(".btn-moreinfo.13").removeClass('hoverorange');

});

/*TAB 14*/
$(function(){
  let togglerMoreinfo14 = $(".service-image01 .btn-moreinfo.14");

  togglerMoreinfo14.on("click", function(){
    let moreinfo14 = $(".service-moreinfo.14");
    moreinfo14.fadeToggle(200);
	$(".service-comments.14").css({display:"none"});
	$(".btn-moreinfo.14").toggleClass('hoverorange');
	$(".btn-comments.14").removeClass('hoverorange');

  });
});


  let togglerComments14 = $(".service-image01 .btn-comments.14");

  togglerComments14.on("click", function(){
    let comments14 = $(".service-comments.14");
    comments14.fadeToggle(200);
	$(".service-moreinfo.14").css({display:"none"});
	$(".btn-comments.14").toggleClass('hoverorange');
	$(".btn-moreinfo.14").removeClass('hoverorange');

});

/*-------END TAB 14-------*/


/*-------TAB 15------*/

$(function(){
  let togglerMoreinfo15 = $(".service-image01 .btn-moreinfo.15");

  togglerMoreinfo15.on("click", function(){
    let moreinfo15 = $(".service-moreinfo.15");
    moreinfo15.fadeToggle(200);
	$(".service-comments.15").css({display:"none"});
	$(".btn-moreinfo.15").toggleClass('hoverorange');
	$(".btn-comments.15").removeClass('hoverorange');

  });
});


  let togglerComments15 = $(".service-image01 .btn-comments.15");

  togglerComments15.on("click", function(){
    let comments15 = $(".service-comments.15");
    comments15.fadeToggle(200);
	$(".service-moreinfo.15").css({display:"none"});
	$(".btn-comments.15").toggleClass('hoverorange');
	$(".btn-moreinfo.15").removeClass('hoverorange');

});

/*------- END TAB 15-------*/



/*----TAB 16----*/
$(function(){
  let togglerMoreinfo16 = $(".service-image01 .btn-moreinfo.16");

  togglerMoreinfo16.on("click", function(){
    let moreinfo16 = $(".service-moreinfo.16");
    moreinfo16.fadeToggle(200);
	$(".service-comments.16").css({display:"none"});
	$(".btn-moreinfo.16").toggleClass('hoverorange');
	$(".btn-comments.16").removeClass('hoverorange');

  });
});


  let togglerComments16 = $(".service-image01 .btn-comments.16");

  togglerComments16.on("click", function(){
    let comments16 = $(".service-comments.16");
    comments16.fadeToggle(200);
	$(".service-moreinfo.16").css({display:"none"});
	$(".btn-comments.16").toggleClass('hoverorange');
	$(".btn-moreinfo.16").removeClass('hoverorange');

});

/*-------END TAB 16-------*/


/*-------TAB 17-------*/

$(function(){
  let togglerMoreinfo17 = $(".service-image01 .btn-moreinfo.17");

  togglerMoreinfo17.on("click", function(){
    let moreinfo17 = $(".service-moreinfo.17");
    moreinfo17.fadeToggle(200);
	$(".service-comments.17").css({display:"none"});
	$(".btn-moreinfo.17").toggleClass('hoverorange');
	$(".btn-comments.17").removeClass('hoverorange');

  });
});


  let togglerComments17 = $(".service-image01 .btn-comments.17");

  togglerComments17.on("click", function(){
    let comments17 = $(".service-comments.17");
    comments17.fadeToggle(200);
	$(".service-moreinfo.17").css({display:"none"});
	$(".btn-comments.17").toggleClass('hoverorange');
	$(".btn-moreinfo.17").removeClass('hoverorange');

});

/*----TAB 18----*/
$(function(){
  let togglerMoreinfo18 = $(".service-image01 .btn-moreinfo.18");

  togglerMoreinfo18.on("click", function(){
    let moreinfo18 = $(".service-moreinfo.18");
    moreinfo18.fadeToggle(200);
	$(".service-comments.18").css({display:"none"});
	$(".btn-moreinfo.18").toggleClass('hoverorange');
	$(".btn-comments.18").removeClass('hoverorange');

  });
});


  let togglerComments18 = $(".service-image01 .btn-comments.18");

  togglerComments18.on("click", function(){
    let comments18 = $(".service-comments.18");
    comments18.fadeToggle(200);
	$(".service-moreinfo.18").css({display:"none"});
	$(".btn-comments.18").toggleClass('hoverorange');
	$(".btn-moreinfo.18").removeClass('hoverorange');

});

/*-------END TAB 18-------*/


/*-------TAB 19-------*/

$(function(){
  let togglerMoreinfo19 = $(".service-image01 .btn-moreinfo.19");

  togglerMoreinfo19.on("click", function(){
    let moreinfo19 = $(".service-moreinfo.19");
    moreinfo19.fadeToggle(200);
	$(".service-comments.19").css({display:"none"});
	$(".btn-moreinfo.19").toggleClass('hoverorange');
	$(".btn-comments.19").removeClass('hoverorange');

  });
});


  let togglerComments19 = $(".service-image01 .btn-comments.19");

  togglerComments19.on("click", function(){
    let comments19 = $(".service-comments.19");
    comments19.fadeToggle(200);
	$(".service-moreinfo.19").css({display:"none"});
	$(".btn-comments.19").toggleClass('hoverorange');
	$(".btn-moreinfo.19").removeClass('hoverorange');

});

/*-------TAB 20-------*/

$(function(){
  let togglerMoreinfo20 = $(".service-image01 .btn-moreinfo.20");

  togglerMoreinfo20.on("click", function(){
    let moreinfo20 = $(".service-moreinfo.20");
    moreinfo20.fadeToggle(200);
	$(".service-comments.20").css({display:"none"});
	$(".btn-moreinfo.20").toggleClass('hoverorange');
	$(".btn-comments.20").removeClass('hoverorange');

  });
});


  let togglerComments20 = $(".service-image01 .btn-comments.20");

  togglerComments20.on("click", function(){
    let comments20 = $(".service-comments.20");
    comments20.fadeToggle(200);
	$(".service-moreinfo.20").css({display:"none"});
	$(".btn-comments.20").toggleClass('hoverorange');
	$(".btn-moreinfo.20").removeClass('hoverorange');

});

/*------- END TAB 20-------*/

/*-------TAB 21-------*/

$(function(){
  let togglerMoreinfo21 = $(".service-image01 .btn-moreinfo.21");

  togglerMoreinfo21.on("click", function(){
    let moreinfo21 = $(".service-moreinfo.21");
    moreinfo21.fadeToggle(200);
	$(".service-comments.21").css({display:"none"});
	$(".btn-moreinfo.21").toggleClass('hoverorange');
	$(".btn-comments.21").removeClass('hoverorange');

  });
});


  let togglerComments21 = $(".service-image01 .btn-comments.21");

  togglerComments21.on("click", function(){
    let comments21 = $(".service-comments.21");
    comments21.fadeToggle(200);
	$(".service-moreinfo.21").css({display:"none"});
	$(".btn-comments.21").toggleClass('hoverorange');
	$(".btn-moreinfo.21").removeClass('hoverorange');

});

/*------- END TAB 21-------*/

/*-------TAB 22-------*/

$(function(){
  let togglerMoreinfo22 = $(".service-image01 .btn-moreinfo.22");

  togglerMoreinfo22.on("click", function(){
    let moreinfo22 = $(".service-moreinfo.22");
    moreinfo22.fadeToggle(200);
	$(".service-comments.22").css({display:"none"});
	$(".btn-moreinfo.22").toggleClass('hoverorange');
	$(".btn-comments.22").removeClass('hoverorange');

  });
});


  let togglerComments22 = $(".service-image01 .btn-comments.22");

  togglerComments22.on("click", function(){
    let comments22 = $(".service-comments.22");
    comments22.fadeToggle(200);
	$(".service-moreinfo.22").css({display:"none"});
	$(".btn-comments.22").toggleClass('hoverorange');
	$(".btn-moreinfo.22").removeClass('hoverorange');

});

/*------- END TAB 22-------*/

/*-------TAB 23-------*/

$(function(){
  let togglerMoreinfo23 = $(".service-image01 .btn-moreinfo.23");

  togglerMoreinfo23.on("click", function(){
    let moreinfo23 = $(".service-moreinfo.23");
    moreinfo23.fadeToggle(200);
	$(".service-comments.23").css({display:"none"});
	$(".btn-moreinfo.23").toggleClass('hoverorange');
	$(".btn-comments.23").removeClass('hoverorange');

  });
});


  let togglerComments23 = $(".service-image01 .btn-comments.23");

  togglerComments23.on("click", function(){
    let comments23 = $(".service-comments.23");
    comments23.fadeToggle(200);
	$(".service-moreinfo.23").css({display:"none"});
	$(".btn-comments.23").toggleClass('hoverorange');
	$(".btn-moreinfo.23").removeClass('hoverorange');

});

/*------- END TAB 23-------*/

/*-------TAB 24-------*/

$(function(){
  let togglerMoreinfo24 = $(".service-image01 .btn-moreinfo.24");

  togglerMoreinfo24.on("click", function(){
    let moreinfo24 = $(".service-moreinfo.24");
    moreinfo24.fadeToggle(200);
	$(".service-comments.24").css({display:"none"});
	$(".btn-moreinfo.24").toggleClass('hoverorange');
	$(".btn-comments.24").removeClass('hoverorange');

  });
});


  let togglerComments24 = $(".service-image01 .btn-comments.24");

  togglerComments24.on("click", function(){
    let comments24 = $(".service-comments.24");
    comments24.fadeToggle(200);
	$(".service-moreinfo.24").css({display:"none"});
	$(".btn-comments.24").toggleClass('hoverorange');
	$(".btn-moreinfo.24").removeClass('hoverorange');

});

/*------- END TAB 24-------*/

/*-------TAB 25-------*/

$(function(){
  let togglerMoreinfo25 = $(".service-image01 .btn-moreinfo.25");

  togglerMoreinfo25.on("click", function(){
    let moreinfo25 = $(".service-moreinfo.25");
    moreinfo25.fadeToggle(200);
	$(".service-comments.25").css({display:"none"});
	$(".btn-moreinfo.25").toggleClass('hoverorange');
	$(".btn-comments.25").removeClass('hoverorange');

  });
});


  let togglerComments25 = $(".service-image01 .btn-comments.25");

  togglerComments25.on("click", function(){
    let comments25 = $(".service-comments.25");
    comments25.fadeToggle(200);
	$(".service-moreinfo.25").css({display:"none"});
	$(".btn-comments.25").toggleClass('hoverorange');
	$(".btn-moreinfo.25").removeClass('hoverorange');

});

/*------- END TAB 25-------*/

/*-------TAB 26-------*/

$(function(){
  let togglerMoreinfo26 = $(".service-image01 .btn-moreinfo.26");

  togglerMoreinfo26.on("click", function(){
    let moreinfo26 = $(".service-moreinfo.26");
    moreinfo26.fadeToggle(200);
	$(".service-comments.26").css({display:"none"});
	$(".btn-moreinfo.26").toggleClass('hoverorange');
	$(".btn-comments.26").removeClass('hoverorange');

  });
});


  let togglerComments26 = $(".service-image01 .btn-comments.26");

  togglerComments26.on("click", function(){
    let comments26 = $(".service-comments.26");
    comments26.fadeToggle(200);
	$(".service-moreinfo.26").css({display:"none"});
	$(".btn-comments.26").toggleClass('hoverorange');
	$(".btn-moreinfo.26").removeClass('hoverorange');

});

/*------- END TAB 26-------*/

/*-------TAB 27-------*/

$(function(){
  let togglerMoreinfo27 = $(".service-image01 .btn-moreinfo.27");

  togglerMoreinfo27.on("click", function(){
    let moreinfo27 = $(".service-moreinfo.27");
    moreinfo27.fadeToggle(200);
	$(".service-comments.27").css({display:"none"});
	$(".btn-moreinfo.27").toggleClass('hoverorange');
	$(".btn-comments.27").removeClass('hoverorange');

  });
});


  let togglerComments27 = $(".service-image01 .btn-comments.27");

  togglerComments27.on("click", function(){
    let comments27 = $(".service-comments.27");
    comments27.fadeToggle(200);
	$(".service-moreinfo.27").css({display:"none"});
	$(".btn-comments.27").toggleClass('hoverorange');
	$(".btn-moreinfo.27").removeClass('hoverorange');

});

/*------- END TAB 27-------*/

/*-------TAB 28-------*/

$(function(){
  let togglerMoreinfo28 = $(".service-image01 .btn-moreinfo.28");

  togglerMoreinfo28.on("click", function(){
    let moreinfo28 = $(".service-moreinfo.28");
    moreinfo28.fadeToggle(200);
	$(".service-comments.28").css({display:"none"});
	$(".btn-moreinfo.28").toggleClass('hoverorange');
	$(".btn-comments.28").removeClass('hoverorange');

  });
});


  let togglerComments28 = $(".service-image01 .btn-comments.28");

  togglerComments28.on("click", function(){
    let comments28 = $(".service-comments.28");
    comments28.fadeToggle(200);
	$(".service-moreinfo.28").css({display:"none"});
	$(".btn-comments.28").toggleClass('hoverorange');
	$(".btn-moreinfo.28").removeClass('hoverorange');

});

/*------- END TAB 28-------*/

/*-------TAB 29-------*/

$(function(){
  let togglerMoreinfo29 = $(".service-image01 .btn-moreinfo.29");

  togglerMoreinfo29.on("click", function(){
    let moreinfo29 = $(".service-moreinfo.29");
    moreinfo29.fadeToggle(200);
	$(".service-comments.29").css({display:"none"});
	$(".btn-moreinfo.29").toggleClass('hoverorange');
	$(".btn-comments.29").removeClass('hoverorange');

  });
});


  let togglerComments29 = $(".service-image01 .btn-comments.29");

  togglerComments29.on("click", function(){
    let comments29 = $(".service-comments.29");
    comments29.fadeToggle(200);
	$(".service-moreinfo.29").css({display:"none"});
	$(".btn-comments.29").toggleClass('hoverorange');
	$(".btn-moreinfo.29").removeClass('hoverorange');

});


/*------- END TAB 29-------*/

/*-------TAB 30-------*/

$(function(){
  let togglerMoreinfo30 = $(".service-image01 .btn-moreinfo.30");

  togglerMoreinfo30.on("click", function(){
    let moreinfo30 = $(".service-moreinfo.30");
    moreinfo30.fadeToggle(200);
	$(".service-comments.30").css({display:"none"});
	$(".btn-moreinfo.30").toggleClass('hoverorange');
	$(".btn-comments.30").removeClass('hoverorange');

  });
});


  let togglerComments30 = $(".service-image01 .btn-comments.30");

  togglerComments30.on("click", function(){
    let comments30 = $(".service-comments.30");
    comments30.fadeToggle(200);
	$(".service-moreinfo.30").css({display:"none"});
	$(".btn-comments.30").toggleClass('hoverorange');
	$(".btn-moreinfo.30").removeClass('hoverorange');

});

/*------- END TAB 30-------*/
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
