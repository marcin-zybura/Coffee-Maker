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
  let steam = $(".cup ul");
  let pointer = $(".pointer");
  let menuTitle = $(".menuTitle");
  let innerContainer = $(".innerContainer");

  // COLORS DECLARATION
  let coffeeColor = "#443022";
  let steamedMilkColor = "#a0ac6c";
  let milkFoamColor = "#99be74";
  let whippedCreamColor = "#88c3c3";
  let chocolateSyrupColor = "#A08244";
  let hotWaterColor = "#7DC3B4";
  // <<< END SECTION OF VARIABLES DECLARATION >>>


  // <<< SECTION OF FUNCTIONS DECLARATION >>>
  // SHOW COFFEE MAKER AFTER CLICK ON BUTTON
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

  // START STEAM ANIMATION
  let startSteam = function() {
    steam.css({
      "display": "block"
    });
  }

  // STOP STEAM ANIMATION
  let stopSteam = function() {
    steam.css({
      "display": "none"
    });
  }

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

  // START ROTATE POINTER
  let startPointer= function(time) {
    pointer.css({
      "animation": "rotatePointer " + time + "s linear"
    });
  }

  // STOP ROTATE POINTER
  let stopPointer = function() {
    pointer.css({
      "animation": "rotatePointerBack 2s linear"
    });
  }

  // START ANIMATE MENU TITLE
  let animateMenuTitle = function() {
    menuTitle.css({
      "animation": "animateMenuTitle 1.5s infinite linear"
    });
  }

  // SHOW COFFEE MENU
  let showMenu = function() {
    coffeeContainer.fadeOut(500);
    menu.fadeIn(500);
    animateMenuTitle();
  }

  // TOGGLE BEETWEN COFFEE MENU AND COFFEE MAKER
  let toggleBeetwenMenu = function() {
    coffeeContainer.fadeToggle(200);
    menu.fadeToggle(200);
  }

  // // CLOSE COFFEE MENU IF ITS DISPLAY IS BLOCK
  // let closeMenu = function() {
  //   if (menu.style.display === "block") {
  //     innerContainer.on("click", function(){
  //       menu.fadeOut(500);
  //     });
  //   }
  // }

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
    stopSteam();
    startPointer(5);
    cupContent.prepend(coffee);
    coffee.css("background-color", coffeeColor);
    cupContent.children().eq(0).animate({
      height: "4.5rem"
    }, 5000, function(){
      stopDrops();
      startSteam();
      stopPointer();
      animatePowerOn();
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
    stopSteam();
    startPointer(8);
    cupContent.prepend(coffee);
    coffee.css("background-color", coffeeColor);
    cupContent.children().eq(0).animate({
      height: "4.5rem"
    }, 5000, function(){
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(milkFoam);
      milkFoam.css({
        "bottom": "4.5rem",
        "background-color": milkFoamColor
      });
      cupContent.children().eq(0).animate({
        height:"2.5rem"
      }, 3000, function(){
        stopDrops();
        startSteam();
        stopPointer();
        animatePowerOn();
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
    stopSteam();
    startPointer(8);
    cupContent.prepend(coffee);
    coffee.css("background-color", coffeeColor);
    cupContent.children().eq(0).animate({
      height: "4.5rem"
    }, 5000, function(){
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(whippedCream);
      whippedCream.css({
        "bottom": "4.5rem",
        "background-color": whippedCreamColor
      });
      cupContent.children().eq(0).animate({
        height:"2.5rem"
      }, 3000, function(){
        stopDrops();
        startSteam();
        stopPointer();
        animatePowerOn();
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
    stopSteam();
    startPointer(13);
    cupContent.prepend(coffee);
    coffee.css("background-color", coffeeColor);
    cupContent.children().eq(0).animate({
      height: "4.5rem"
    }, 5000, function(){
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(steamedMilk);
      steamedMilk.css({
        "bottom": "4.5rem",
        "background-color": steamedMilkColor
      });
      cupContent.children().eq(0).animate({
        height:"8rem"
      }, 5000, function(){
          let steamedMilkContent = $("<p>STEAMED MILK</p>");
          cupContent.children().eq(0).append(steamedMilkContent);
          cupContent.prepend(milkFoam);
          milkFoam.css({
            "bottom": "12.5rem",
            "background-color": milkFoamColor
          });
          cupContent.children().eq(0).animate({
            height:"2.5rem"
          }, 3000, function(){
            stopDrops();
            startSteam();
            stopPointer();
            animatePowerOn();
            let milkFoamContent = $("<p>MILK FOAM</p>");
            cupContent.children().eq(0).append(milkFoamContent);
          });
      });
    });
  }

  // START FILLING FLAT WHITE INTO CUP
  let fillFlatWhite = function() {
    let coffee = $("<div class='coffee'></div>");
    let steamedMilk = $("<div class='steamedMilk'></div>");
    clearContent();
    toggleBeetwenMenu();
    animateDrops();
    stopPowerOn();
    stopSteam();
    startPointer(10);
    cupContent.prepend(coffee);
    coffee.css("background-color", coffeeColor);
    cupContent.children().eq(0).animate({
      height: "4.5rem"
    }, 5000, function(){
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(steamedMilk);
      steamedMilk.css({
        "bottom": "4.5rem",
        "background-color": steamedMilkColor
      });
      cupContent.children().eq(0).animate({
        height:"8rem"
      }, 5000, function(){
        stopDrops();
        startSteam();
        stopPointer();
        animatePowerOn();
        let steamedMilkContent = $("<p>STEAMED MILK</p>");
        cupContent.children().eq(0).append(steamedMilkContent);
      });
    });
  }

  // START FILLING CAFFE BREVE INTO CUP
  let fillCaffeBreve = function() {
    let coffee = $("<div class='coffee'></div>");
    let steamedMilk = $("<div class='steamedMilk'></div>");
    let milkFoam = $("<div class='milkFoam'></div>");
    clearContent();
    toggleBeetwenMenu();
    animateDrops();
    stopPowerOn();
    stopSteam();
    startPointer(13);
    cupContent.prepend(coffee);
    coffee.css("background-color", coffeeColor);
    cupContent.children().eq(0).animate({
      height: "4.5rem"
    }, 5000, function(){
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(steamedMilk);
      steamedMilk.css({
        "bottom": "4.5rem",
        "background-color": steamedMilkColor
      });
      cupContent.children().eq(0).animate({
        height:"8rem"
      }, 5000, function(){
        steamedMilk.css("font-size", "1.2rem");
        let steamedMilkContent = $("<p>STEAMED HALF-AND-HALF</p>");
        cupContent.children().eq(0).append(steamedMilkContent);
        cupContent.prepend(milkFoam);
        milkFoam.css({
          "bottom": "12.5rem",
          "background-color": milkFoamColor
        });
        cupContent.children().eq(0).animate({
          height:"2.5rem"
        }, 3000, function(){
          stopDrops();
          startSteam();
          stopPointer();
          animatePowerOn();
          let milkFoamContent = $("<p>MILK FOAM</p>");
          cupContent.children().eq(0).append(milkFoamContent);
        });
      });
    });
  }

  // START FILLING CAPPUCCINO INTO CUP
  let fillCappuccino = function() {
    let coffee = $("<div class='coffee'></div>");
    let steamedMilk = $("<div class='steamedMilk'></div>");
    let milkFoam = $("<div class='milkFoam'></div>");
    clearContent();
    toggleBeetwenMenu();
    animateDrops();
    stopPowerOn();
    stopSteam();
    startPointer(12);
    cupContent.prepend(coffee);
    coffee.css("background-color", coffeeColor);
    cupContent.children().eq(0).animate({
      height: "4.5rem"
    }, 5000, function(){
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(steamedMilk);
      steamedMilk.css({
        "bottom": "4.5rem",
        "background-color": steamedMilkColor
      });
      cupContent.children().eq(0).animate({
        height:"2.5rem"
      }, 3000, function(){
          let steamedMilkContent = $("<p>STEAMED MILK</p>");
          cupContent.children().eq(0).append(steamedMilkContent);
          cupContent.prepend(milkFoam);
          milkFoam.css({
            "bottom": "7rem",
            "background-color": milkFoamColor
          });
          cupContent.children().eq(0).animate({
            height:"8rem"
          }, 4000, function(){
            stopDrops();
            startSteam();
            stopPointer();
            animatePowerOn();
            let milkFoamContent = $("<p>MILK FOAM</p>");
            cupContent.children().eq(0).append(milkFoamContent);
          });
      });
    });
  }

  // START FILLING CAFFE MOCHA INTO CUP
  let fillCaffeMocha = function() {
    let coffee = $("<div class='coffee'></div>");
    let chocolateSyrup = $("<div class='chocolateSyrup'></div>")
    let steamedMilk = $("<div class='steamedMilk'></div>");
    let whippedCream = $("<div class='whippedCream'></div>");
    clearContent();
    toggleBeetwenMenu();
    animateDrops();
    stopPowerOn();
    stopSteam();
    startPointer(12);
    cupContent.prepend(coffee);
    coffee.css("background-color", coffeeColor);
    cupContent.children().eq(0).animate({
      height: "4.5rem"
    }, 5000, function(){
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(chocolateSyrup);
      chocolateSyrup.css({
        "bottom": "4.5rem",
        "background-color": chocolateSyrupColor
      });
      cupContent.children().eq(0).animate({
        height: "2rem"
      }, 3000, function(){
          let chocolateSyrupContent = $("<p>CHOCOLATE SYRUP</p>");
          cupContent.children().eq(0).append(chocolateSyrupContent);
          cupContent.prepend(steamedMilk);
          steamedMilk.css({
            "bottom": "6.5rem",
            "background-color": steamedMilkColor
          });
          cupContent.children().eq(0).animate({
            height: "5rem"
          }, 4000, function(){
            let steamedMilkContent = $("<p>STEAMED MILK</p>");
            cupContent.children().eq(0).append(steamedMilkContent);

            cupContent.prepend(whippedCream);
            whippedCream.css({
              "bottom": "11.5rem",
              "background-color": whippedCreamColor
            });
            cupContent.children().eq(0).animate({
              height: "3.5rem"
            }, 3000, function(){
              stopDrops();
              startSteam();
              stopPointer();
              let whippedCreamContent = $("<p>WHIPPED CREAM</p>");
              cupContent.children().eq(0).append(whippedCreamContent);
            });
          });
      });
    });
  }

  // START FILLING AMERICANO INTO CUP
  let fillAmericano = function() {
    let coffee = $("<div class='coffee'></div>");
    let hotWater = $("<div class='hotWater'></div>");
    clearContent();
    toggleBeetwenMenu();
    animateDrops();
    stopPowerOn();
    stopSteam();
    startPointer(11);
    cupContent.prepend(coffee);
    coffee.css("background-color", coffeeColor);
    cupContent.children().eq(0).animate({
      height: "4.5rem"
    }, 5000, function(){
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(hotWater);
      hotWater.css({
        "bottom": "4.5rem",
        "background-color": hotWaterColor
      });
      cupContent.children().eq(0).animate({
        height:"10.5rem"
      }, 6000, function(){
        stopDrops();
        startSteam();
        stopPointer();
        animatePowerOn();
        let hotWaterContent = $("<p>HOT WATER</p>");
        cupContent.children().eq(0).append(hotWaterContent);
      });
    });
  }

  // START FILLING LATTE MACCHIATO INTO CUP
  let fillLatteMacchiato = function() {
    let coffee = $("<div class='coffee'></div>");
    let steamedMilk = $("<div class='steamedMilk'></div>");
    clearContent();
    toggleBeetwenMenu();
    animateDrops();
    stopPowerOn();
    stopSteam();
    startPointer(10);
    cupContent.prepend(steamedMilk);
    steamedMilk.css({
      "bottom": "0",
      "background-color": steamedMilkColor
    });
    cupContent.children().eq(0).animate({
      height: "10.5rem"
    }, 5000, function(){
      let steamedMilkContent = $("<p>STEAMED MILK</p>");
      cupContent.children().eq(0).append(steamedMilkContent);
      cupContent.prepend(coffee);
      coffee.css("background-color", coffeeColor);
      coffee.css("bottom", "10.5rem");
      cupContent.children().eq(0).animate({
        height:"4.5rem"
      }, 5000, function(){
        stopDrops();
        startSteam();
        stopPointer();
        animatePowerOn();
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


  // MENU ON CLICK FUNCTIONS
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

/*
RZECZY DO ZAPYTANIA
1. JAK ZROBIĆ, ŻEBY MENU ZNIKAŁO PO KLIKNIĘCIU POZA NIM
2. DLACZEGO NA MOZILLI JEST BIAŁA KRESKA MIĘDZY SPODEM KUBKA A ZAWARTOŚCIĄ
  TO SAMO NA UCHU KUBKA
*/
