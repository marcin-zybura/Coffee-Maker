$(function() {
  let cup = $(".cup");
  let cupContent = $(".cupContent");
  // let cupContentP = $(".cupContent p");
  let powerOn = $(".switch");
  let drops = $(".coffeeDrops");
  let btnNext = $(".btnNext span");
  let coffeeContainer = $(".coffeeContainer");
  let dialogBox = $(".dialogBox");
  let hintBox = $(".hintBox");
  let btnOK = $(".btnOK");
  let menu = $(".menu");
  let espresso = $(".espresso");

  let showCoffeMaker = function() {
    dialogBox.animate({
      opacity: 0,
      display: "none"
    }, 500, function() {
      $(this).remove();
      coffeeContainer.fadeIn(500).css("display", "inline-block");
      hintBox.fadeIn(500).css("display", "inline-block");
    });
  }

  let animatePowerOn = function() {
    powerOn.css({
      "animation-name": "animateSwitch",
      "animation-iteration-count": "infinite",
      "animation-duration": "1.2s"
    });
    // function blinking(el) {
    //   timer = setInterval(blink, 10);
    //   function blink() {
    //     el.fadeOut(400, function(){
    //       el.fadeIn(400);
    //     })
    //   }
    // }
  }

  let stopPowerOn = function() {
    powerOn.css({
      "animation-name": "none"
    });
  }

  let animateContent = function() {
    cupContent.animate({
      "height": "8rem"
    }, 2000);
  }

  let animateDrops = function() {
    drops.css({
      "animation": "animateDrops 0.8s linear infinite"
    });
  }

  let stopDrops = function() {
    drops.css({
      "animation-name": "none"
    });
  }

  let showMenu = function() {
    coffeeContainer.fadeOut(500);
    menu.fadeIn(500);
  }

  let toggleBeetwenMenu = function() {
    coffeeContainer.fadeToggle(200);
    menu.fadeToggle(200);
  }

  let clearContent = function() {
    cupContent.remove("p");
    cupContent.animate({
      height: "0"
    }, 200);    
  }

  let fillEspresso = function() {
    clearContent();
    toggleBeetwenMenu();
    animateDrops();
    stopPowerOn();
    cupContent.animate({
      height: "4rem"
    }, 5000, function(){
      stopDrops();
      let espressoContent = $("<p class='espressoContent'>Espresso<p/>");
      cupContent.append(espressoContent);
    });
  }



  // powerOn.on("click", animateDrops);


  btnNext.on("click", showCoffeMaker);
  btnOK.on("click", function(){
    hintBox.animate({
      opacity: 0,
      display: "none"
    }, 500, function(){
      hintBox.remove();
    });
    animatePowerOn();
    coffeeContainer.animate({
      "opacity": "1"
    }, 1000);
  });


  powerOn.on("click", showMenu);
  espresso.on("click", fillEspresso);
});
