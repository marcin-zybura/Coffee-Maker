$(function() {

  // <<< SECTION OF VARIABLES DECLARATION >>>
  let cup = $(".cup");
  let cupContent = $(".cupContent");
  let cupContentP = $(".cupContent p");
  let powerOn = $(".switch");
  let drops = $(".coffeeDrops");
  let btnNext = $(".btnNext span");
  let coffeeContainer = $(".coffeeContainer");
  let dialogBox = $(".dialogBox");
  let hintBox = $(".hintBox");
  let btnOK = $(".btnOK");
  let menu = $(".menu");
  let espresso = $(".espresso");
  let espressoMacchiato = $(".espressoMacchiato");
  let espressoConPanna = $(".espressoConPanna");
  let caffeLatte = $(".caffeLatte");
  let flatWhite = $(".flatWhite");
  let caffeBreve = $(".caffeBreve");
  let cappuccino = $(".cappuccino");
  let caffeMocha = $(".caffeMocha");
  let americano = $(".americano");
  let latteMacchiato = $(".latteMacchiato");
  // <<< END SECTION OF VARIABLES DECLARATION >>>


  // <<< SECTION OF FUNCTIONS DECLARATION >>>
  // SHOW COFFEE MAKER AFTER
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

  // START SWITCH BUTTON ANIMATION
  let animatePowerOn = function() {
    powerOn.css({
      "animation-name": "animateSwitch",
      "animation-iteration-count": "infinite",
      "animation-duration": "1.2s"
    });
  }

  // STOP SWITCH BUTTON ANIMATION
  let stopPowerOn = function() {
    powerOn.css({
      "animation-name": "none"
    });
  }


  // let animateContent = function() {
  //   cupContent.animate({
  //     "height": "8rem"
  //   }, 2000);
  // }

  // START DROPS ANIMATION
  let animateDrops = function() {
    drops.children().eq(0).css({
      "animation": "animateDrops 0.8s linear infinite"
    });
    drops.children().eq(1).css({
      "animation": "animateDrops 0.8s linear infinite",
      "animation-delay": "0.2s"
    });
    drops.children().eq(2).css({
      "animation": "animateDrops 0.8s linear infinite",
      "animation-delay": "0.4s"
    });
    drops.children().eq(3).css({
      "animation": "animateDrops 0.8s linear infinite",
      "animation-delay": "0.6s"
    });
  }

  // STOP DROPS ANIMATION
  let stopDrops = function() {
    drops.children().css({
      "animation-name": "none"
    });
  }

  // SHOW COFFEE MENU
  let showMenu = function() {
    coffeeContainer.fadeOut(500);
    menu.fadeIn(500);
  }

  // TOGGLE BEETWEN COFFEE MENU AND COFFEE MAKER
  let toggleBeetwenMenu = function() {
    coffeeContainer.fadeToggle(200);
    menu.fadeToggle(200);
  }

  // CLEAR CONTENT OF CUP
  let clearContent = function() {
    cupContent.children().remove();
    cupContent.animate({
      height: "0"
    }, 200);
  }

  // START FILLING ESPRESSO INTO CUP
  let fillEspresso = function() {
    let coffee = $("<div class='coffee'></div>");
    clearContent();
    toggleBeetwenMenu();
    animateDrops();
    stopPowerOn();
    cupContent.prepend(coffee);
    cupContent.children().eq(0).animate({
      height: "4rem"
    }, 5000, function(){
      stopDrops();
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
    });
  }

  // START FILLING ESPRESSO MACCHIATO INTO CUP
  let fillEspressoMacchiato = function() {
    let coffee = $("<div class='coffee'></div>");
    let milkFoam = $("<div class='milkFoam'></div>");
    clearContent();
    toggleBeetwenMenu();
    animateDrops();
    stopPowerOn();
    cupContent.prepend(coffee);
    cupContent.children().eq(0).animate({
      height: "4rem"
    }, 5000, function(){
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(milkFoam);
      milkFoam.css("bottom", "4rem");
      cupContent.children().eq(0).animate({
        height:"2rem"
      }, 2000, function(){
        stopDrops();
        let milkFoamContent = $("<p>MILK FOAM</p>");
        cupContent.children().eq(0).append(milkFoamContent);
      });
    });
  }

  // START FILLING ESPRESSO CON PANNA INTO CUP
  let fillEspressoConPanna = function() {
    let coffee = $("<div class='coffee'></div>");
    let whippedCream = $("<div class='whippedCream'></div>");
    clearContent();
    toggleBeetwenMenu();
    animateDrops();
    stopPowerOn();
    cupContent.prepend(coffee);
    cupContent.children().eq(0).animate({
      height: "4rem"
    }, 5000, function(){
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(whippedCream);
      whippedCream.css("bottom", "4rem");
      cupContent.children().eq(0).animate({
        height:"2rem"
      }, 2000, function(){
        stopDrops();
        let whippedCreamContent = $("<p>WHIPPED CREAM</p>");
        cupContent.children().eq(0).append(whippedCreamContent);
      });
    });
  }

  // START FILLING CAFFE LATTE INTO CUP
  let fillCaffeLatte = function() {
    let coffee = $("<div class='coffee'></div>");
    let steamedMilk = $("<div class='steamedMilk'></div>");
    let milkFoam = $("<div class='milkFoam'></div>");
    clearContent();
    toggleBeetwenMenu();
    animateDrops();
    stopPowerOn();
    cupContent.prepend(coffee);
    cupContent.children().eq(0).animate({
      height: "4rem"
    }, 5000, function(){
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(steamedMilk);
      steamedMilk.css("bottom", "4rem");
      cupContent.children().eq(0).animate({
        height:"5rem"
      }, 5000, function(){
          let steamedMilkContent = $("<p>STEAMED MILK</p>");
          cupContent.children().eq(0).append(steamedMilkContent);
          cupContent.prepend(milkFoam);
          milkFoam.css("bottom", "9rem");
          cupContent.children().eq(0).animate({
            height:"2rem"
          }, 3000, function(){
            stopDrops();
            let milkFoamContent = $("<p>MILK FOAM</p>");
            cupContent.children().eq(0).append(milkFoamContent);
          });
      });
    });
  }

  let fillFlatWhite = function() {
    let coffee = $("<div class='coffee'></div>");
    let steamedMilk = $("<div class='steamedMilk'></div>");
    clearContent();
    toggleBeetwenMenu();
    animateDrops();
    stopPowerOn();
    cupContent.prepend(coffee);
    cupContent.children().eq(0).animate({
      height: "4rem"
    }, 5000, function(){
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(steamedMilk);
      steamedMilk.css("bottom", "4rem");
      cupContent.children().eq(0).animate({
        height:"6rem"
      }, 4000, function(){
        stopDrops();
        let steamedMilkContent = $("<p>STEAMED MILK</p>");
        cupContent.children().eq(0).append(steamedMilkContent);
      });
    });
  }

  let fillCaffeBreve = function() {
    let coffee = $("<div class='coffee'></div>");
    let steamedMilk = $("<div class='steamedMilk'></div>");
    let milkFoam = $("<div class='milkFoam'></div>");
    clearContent();
    toggleBeetwenMenu();
    animateDrops();
    stopPowerOn();
    cupContent.prepend(coffee);
    cupContent.children().eq(0).animate({
      height: "4rem"
    }, 5000, function(){
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(steamedMilk);
      steamedMilk.css("bottom", "4rem");
      cupContent.children().eq(0).animate({
        height:"5rem"
      }, 5000, function(){
        steamedMilk.css("font-size", "1rem");
        let steamedMilkContent = $("<p>STEAMED HALF-AND-HALF</p>");
        cupContent.children().eq(0).append(steamedMilkContent);
        cupContent.prepend(milkFoam);
        milkFoam.css("bottom", "9rem");
        cupContent.children().eq(0).animate({
          height:"2rem"
        }, 3000, function(){
          stopDrops();
          let milkFoamContent = $("<p>MILK FOAM</p>");
          cupContent.children().eq(0).append(milkFoamContent);
        });
      });
    });
  }

  let fillCappuccino = function() {
    let coffee = $("<div class='coffee'></div>");
    let steamedMilk = $("<div class='steamedMilk'></div>");
    let milkFoam = $("<div class='milkFoam'></div>");
    clearContent();
    toggleBeetwenMenu();
    animateDrops();
    stopPowerOn();
    cupContent.prepend(coffee);
    cupContent.children().eq(0).animate({
      height: "4rem"
    }, 5000, function(){
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(steamedMilk);
      steamedMilk.css("bottom", "4rem");
      cupContent.children().eq(0).animate({
        height:"2.5rem"
      }, 5000, function(){
          let steamedMilkContent = $("<p>STEAMED MILK</p>");
          cupContent.children().eq(0).append(steamedMilkContent);
          cupContent.prepend(milkFoam);
          milkFoam.css("bottom", "6.5rem");
          cupContent.children().eq(0).animate({
            height:"5rem"
          }, 3000, function(){
            stopDrops();
            let milkFoamContent = $("<p>MILK FOAM</p>");
            cupContent.children().eq(0).append(milkFoamContent);
          });
      });
    });
  }

  let fillCaffeMocha = function() {
    let coffee = $("<div class='coffee'></div>");
    let chocolateSyrup = $("<div class='chocolateSyrup'></div>")
    let steamedMilk = $("<div class='steamedMilk'></div>");
    let whippedCream = $("<div class='whippedCream'></div>");
    clearContent();
    toggleBeetwenMenu();
    animateDrops();
    stopPowerOn();
    cupContent.prepend(coffee);
    cupContent.children().eq(0).animate({
      height: "4rem"
    }, 5000, function(){
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(chocolateSyrup);
      chocolateSyrup.css("bottom", "4rem");
      cupContent.children().eq(0).animate({
        height: "1.5rem"
      }, 3000, function(){
          let chocolateSyrupContent = $("<p>CHOCOLATE SYRUP</p>");
          cupContent.children().eq(0).append(chocolateSyrupContent);
          cupContent.prepend(steamedMilk);
          steamedMilk.css("bottom", "5.5rem");
          cupContent.children().eq(0).animate({
            height: "3rem"
          }, 3000, function(){
            let steamedMilkContent = $("<p>STEAMED MILK</p>");
            cupContent.children().eq(0).append(steamedMilkContent);

            cupContent.prepend(whippedCream);
            whippedCream.css("bottom", "8.5rem");
            cupContent.children().eq(0).animate({
              height: "3rem"
            }, 3000, function(){
              stopDrops();
              let whippedCreamContent = $("<p>WHIPPED CREAM</p>");
              cupContent.children().eq(0).append(whippedCreamContent);
            });
          });
      });
    });
  }

  let fillAmericano = function() {
    let coffee = $("<div class='coffee'></div>");
    let hotWater = $("<div class='hotWater'></div>");
    clearContent();
    toggleBeetwenMenu();
    animateDrops();
    stopPowerOn();
    cupContent.prepend(coffee);
    cupContent.children().eq(0).animate({
      height: "4rem"
    }, 5000, function(){
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(hotWater);
      hotWater.css("bottom", "4rem");
      cupContent.children().eq(0).animate({
        height:"10rem"
      }, 5000, function(){
        stopDrops();
        let hotWaterContent = $("<p>HOT WATER</p>");
        cupContent.children().eq(0).append(hotWaterContent);
      });
    });
  }

  let fillLatteMacchiato = function() {
    let coffee = $("<div class='coffee'></div>");
    let steamedMilk = $("<div class='steamedMilk'></div>");
    clearContent();
    toggleBeetwenMenu();
    animateDrops();
    stopPowerOn();
    cupContent.prepend(steamedMilk);
    steamedMilk.css("bottom", "0");
    cupContent.children().eq(0).animate({
      height: "7rem"
    }, 5000, function(){
      let steamedMilkContent = $("<p>STEAMED MILK</p>");
      cupContent.children().eq(0).append(steamedMilkContent);
      cupContent.prepend(coffee);
      coffee.css("bottom", "7rem");
      cupContent.children().eq(0).animate({
        height:"3rem"
      }, 4000, function(){
        stopDrops();
        let espressoContent = $("<p>ESPRESSO</p>");
        cupContent.children().eq(0).append(espressoContent);
      });
    });
  }
  // <<< END SECTION OF FUNCTIONS DECLARATION >>>


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
  espressoMacchiato.on("click",fillEspressoMacchiato);
  espressoConPanna.on("click",fillEspressoConPanna);
  caffeLatte.on("click", fillCaffeLatte);
  flatWhite.on("click", fillFlatWhite);
  caffeBreve.on("click", fillCaffeBreve);
  cappuccino.on("click", fillCappuccino);
  caffeMocha.on("click",fillCaffeMocha);
  americano.on("click", fillAmericano);
  latteMacchiato.on("click", fillLatteMacchiato);
});
