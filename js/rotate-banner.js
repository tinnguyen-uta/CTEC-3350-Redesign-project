/*------------------rotate banner-----------------*/


let heroControl = $(".hero-container .hero-control");
let indicator = $(".hero-container .hero-indicators li");

indicator.on("click", function(){

  let parentHeroContainerBanner = $(this).closest(".hero-container");
  let currentSlideBanner = $(parentHeroContainerBanner).find(".hero-indicators li.active").index();
  let nextSlideBanner = $(this).index();

  slideHandlerBanner(currentSlideBanner, nextSlideBanner, parentHeroContainerBanner);


});

heroControl.on("click", function(){
  console.log(this);
  let directionBanner = $(this).attr("data-slide");
  let parentHeroContainerBanner = $(this).closest(".hero-container");
  let currentSlideBanner = $(parentHeroContainerBanner).find(".hero-slide.active").index();
  let numberofSlidesBanner =$(parentHeroContainerBanner).find(".hero-slide").length - 1;
  let nextSlideBanner;

  if(directionBanner === "next"){
    nextSlideBanner = currentSlideBanner + 1;
  } else if (directionBanner === "prev"){
    nextSlideBanner = currentSlideBanner - 1;
  }

  if (nextSlideBanner < 0){
	  nextSlideBanner = numberofSlidesBanner;
  } else if (nextSlideBanner > numberofSlidesBanner) {
	  nextSlideBanner = 0;
  } else {
	  nextSlideBanner = nextSlideBanner;
  }





  console.log(directionBanner, numberofSlidesBanner, nextSlideBanner, currentSlideBanner);

  slideHandlerBanner(currentSlideBanner, nextSlideBanner, parentHeroContainerBanner);
});

function slideHandlerBanner (current, next, container){
	console.log(current, next, container);
	$(container).find(".hero-slide").eq(current).removeClass("active");
	$(container).find(".hero-slide").eq(next).addClass("active");
	$(container).find(".hero-indicators li").eq(current).removeClass("active");
	$(container).find(".hero-indicators li").eq(next).addClass("active");
	
};

/*------------------ end rotate banner-----------------*/