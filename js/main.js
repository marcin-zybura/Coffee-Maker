$(function() {

  // <<< SECTION OF VARIABLES DECLARATION >>>
  let americano = $(".americano");
  let btnNext = $(".btnNext span");
  let btnOK = $(".btnOK");
  let caffeBreve = $(".caffeBreve");
  let caffeLatte = $(".caffeLatte");
  let caffeMocha = $(".caffeMocha");
  let cappuccino = $(".cappuccino");
  let closeMenuCross = $(".closeMenuCross");
  let coffeeContainer = $(".coffeeContainer");
  let cup = $(".cup");
  let cupContent = $(".cupContent");
  let cupContentP = $(".cupContent p");
  let dialogBox = $(".dialogBox");
  let drops = $(".coffeeDrops");
  let espresso = $(".espresso");
  let espressoConPanna = $(".espressoConPanna");
  let espressoMacchiato = $(".espressoMacchiato");
  let flatWhite = $(".flatWhite");
  let hintBox = $(".hintBox");
  let html = $("html");
  let innerContainer = $(".innerContainer");
  let latteMacchiato = $(".latteMacchiato");
  let menu = $(".menu");
  let menuTitle = $(".menuTitle");
  let pointer = $(".pointer");
  let powerOn = $(".switch");
  let steam = $(".cup ul");

  // <<< COLORS DECLARATION >>>
  let chocolateSyrupColor = "#6B572E";
  let coffeeColor = "#28170D";
  let hotWaterColor = "#96CFC3";
  let milkFoamColor = "#DBC5B6";
  let steamedMilkColor = "#EAE1D2";
  let whippedCreamColor = "#DDC8BB";
  // <<< END COLORS DECLARATION >>>
  // <<< END SECTION OF VARIABLES DECLARATION >>>


  // <<< SECTION OF FUNCTIONS DECLARATION >>>
  // SHOW COFFEE MAKER AFTER CLICK ON BUTTON
  let showCoffeMaker = () => {
    dialogBox.animate({
      opacity: 0,
      display: "none"
    }, 500, () => {
      dialogBox.remove();
      coffeeContainer.fadeIn(500).css("display", "inline-block");
      hintBox.fadeIn(500).css("display", "inline-block");
    });
  }

  // START SWITCH BUTTON ANIMATION
  let animatePowerOn = () => {
    powerOn.css({
      "animation-name": "animateSwitch",
      "animation-iteration-count": "infinite",
      "animation-duration": "1.2s"
    });
  }

  // STOP SWITCH BUTTON ANIMATION
  let stopPowerOn = () => {
    powerOn.css({
      "animation-name": "none"
    });
  }

  // START STEAM ANIMATION
  let startSteam = () => {
    steam.css({
      "display": "block"
    });
  }

  // STOP STEAM ANIMATION
  let stopSteam = () => {
    steam.css({
      "display": "none"
    });
  }

  // START DROPS ANIMATION
  let animateDrops = () => {
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
  let stopDrops = () => {
    drops.children().css({
      "animation-name": "none"
    });
  }

  // START ROTATE POINTER
  let startPointer= (time) => {
    pointer.css({
      "animation": "rotatePointer " + time + "s linear"
    });
  }

  // STOP ROTATE POINTER
  let stopPointer = () => {
    pointer.css({
      "animation": "rotatePointerBack 2s linear"
    });
  }

  // ANIMATE COFFEE MENU TITLE
  let animateMenuTitle = () => {
    menuTitle.css({
      "animation": "animateMenuTitle 1.5s infinite linear"
    });
  }

  // SHOW COFFEE MENU
  let showMenu = () => {
    coffeeContainer.fadeOut(500);
    menu.fadeIn(500);
    animateMenuTitle();
  }

  // SWITCH FROM COFFEE MENU TO COFFEE MAKER
  let toggleBeetwenMenu = () => {
    coffeeContainer.toggle(200);
    menu.toggle(200);
  }

  // CLOSE COFFEE MENU ON CLICK ON CROSS
  let closeMenu = () => {
    menu.toggle(500);
    coffeeContainer.toggle(500);
  }

  // CLEAR CONTENT OF CUP
  let clearContent = () => {
    cupContent.children().remove();
    cupContent.animate({
      height: "0"
    }, 200);
  }

  // <<< SECTION OF COFFEE FILLING FUNCTIONS >>>
  // FILLING ESPRESSO INTO CUP
  let fillEspresso = () => {
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
    }, 5000, () => {
      stopDrops();
      startSteam();
      stopPointer();
      animatePowerOn();
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
    });
  }
  // END FILLING ESPRESSO INTO CUP

  // FILLING ESPRESSO MACCHIATO INTO CUP
  let fillEspressoMacchiato = () => {
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
    }, 5000, () => {
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(milkFoam);
      milkFoam.css({
        "bottom": "4.5rem",
        "background-color": milkFoamColor
      });
      cupContent.children().eq(0).animate({
        height:"2.5rem"
      }, 3000, () => {
        stopDrops();
        startSteam();
        stopPointer();
        animatePowerOn();
        let milkFoamContent = $("<p>MILK FOAM</p>");
        cupContent.children().eq(0).append(milkFoamContent);
      });
    });
  }
  // END FILLING ESPRESSO MACCHIATO INTO CUP

  // FILLING ESPRESSO CON PANNA INTO CUP
  let fillEspressoConPanna = () => {
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
    }, 5000, () => {
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(whippedCream);
      whippedCream.css({
        "bottom": "4.5rem",
        "background-color": whippedCreamColor
      });
      cupContent.children().eq(0).animate({
        height:"2.5rem"
      }, 3000, () => {
        stopDrops();
        startSteam();
        stopPointer();
        animatePowerOn();
        let whippedCreamContent = $("<p>WHIPPED CREAM</p>");
        cupContent.children().eq(0).append(whippedCreamContent);
      });
    });
  }
  // END FILLING ESPRESSO CON PANNA INTO CUP

  // FILLING CAFFE LATTE INTO CUP
  let fillCaffeLatte = () => {
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
    }, 5000, () => {
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(steamedMilk);
      steamedMilk.css({
        "bottom": "4.5rem",
        "background-color": steamedMilkColor
      });
      cupContent.children().eq(0).animate({
        height:"8rem"
      }, 5000, () => {
          let steamedMilkContent = $("<p>STEAMED MILK</p>");
          cupContent.children().eq(0).append(steamedMilkContent);
          cupContent.prepend(milkFoam);
          milkFoam.css({
            "bottom": "12.5rem",
            "background-color": milkFoamColor
          });
          cupContent.children().eq(0).animate({
            height:"2.5rem"
          }, 3000, () => {
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
  // END FILLING CAFFE LATTE INTO CUP

  // FILLING FLAT WHITE INTO CUP
  let fillFlatWhite = () => {
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
    }, 5000, () => {
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(steamedMilk);
      steamedMilk.css({
        "bottom": "4.5rem",
        "background-color": steamedMilkColor
      });
      cupContent.children().eq(0).animate({
        height:"8rem"
      }, 5000, () => {
        stopDrops();
        startSteam();
        stopPointer();
        animatePowerOn();
        let steamedMilkContent = $("<p>STEAMED MILK</p>");
        cupContent.children().eq(0).append(steamedMilkContent);
      });
    });
  }
  // END FILLING FLAT WHITE INTO CUP

  // FILLING CAFFE BREVE INTO CUP
  let fillCaffeBreve = () => {
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
    }, 5000, () => {
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(steamedMilk);
      steamedMilk.css({
        "bottom": "4.5rem",
        "background-color": steamedMilkColor
      });
      cupContent.children().eq(0).animate({
        height:"8rem"
      }, 5000, () => {
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
        }, 3000, () => {
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
  // END FILLING CAFFE BREVE INTO CUP

  // FILLING CAPPUCCINO INTO CUP
  let fillCappuccino = () => {
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
    }, 5000, () => {
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(steamedMilk);
      steamedMilk.css({
        "bottom": "4.5rem",
        "background-color": steamedMilkColor
      });
      cupContent.children().eq(0).animate({
        height:"2.5rem"
      }, 3000, () => {
          let steamedMilkContent = $("<p>STEAMED MILK</p>");
          cupContent.children().eq(0).append(steamedMilkContent);
          cupContent.prepend(milkFoam);
          milkFoam.css({
            "bottom": "7rem",
            "background-color": milkFoamColor
          });
          cupContent.children().eq(0).animate({
            height:"8rem"
          }, 4000, () => {
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
  // END FILLING CAPPUCCINO INTO CUP

  // FILLING CAFFE MOCHA INTO CUP
  let fillCaffeMocha = () => {
    let coffee = $("<div class='coffee'></div>");
    let chocolateSyrup = $("<div class='chocolateSyrup'></div>")
    let steamedMilk = $("<div class='steamedMilk'></div>");
    let whippedCream = $("<div class='whippedCream'></div>");
    clearContent();
    toggleBeetwenMenu();
    animateDrops();
    stopPowerOn();
    stopSteam();
    startPointer(15);
    cupContent.prepend(coffee);
    coffee.css("background-color", coffeeColor);
    cupContent.children().eq(0).animate({
      height: "4.5rem"
    }, 5000, () => {
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(chocolateSyrup);
      chocolateSyrup.css({
        "bottom": "4.5rem",
        "background-color": chocolateSyrupColor
      });
      cupContent.children().eq(0).animate({
        height: "2rem"
      }, 3000, () => {
          let chocolateSyrupContent = $("<p>CHOCOLATE SYRUP</p>");
          cupContent.children().eq(0).append(chocolateSyrupContent);
          cupContent.prepend(steamedMilk);
          steamedMilk.css({
            "bottom": "6.5rem",
            "background-color": steamedMilkColor
          });
          cupContent.children().eq(0).animate({
            height: "5rem"
          }, 4000, () => {
            let steamedMilkContent = $("<p>STEAMED MILK</p>");
            cupContent.children().eq(0).append(steamedMilkContent);

            cupContent.prepend(whippedCream);
            whippedCream.css({
              "bottom": "11.5rem",
              "background-color": whippedCreamColor
            });
            cupContent.children().eq(0).animate({
              height: "3.5rem"
            }, 3000, () => {
              stopDrops();
              startSteam();
              stopPointer();
              stopPowerOn();
              let whippedCreamContent = $("<p>WHIPPED CREAM</p>");
              cupContent.children().eq(0).append(whippedCreamContent);
            });
          });
      });
    });
  }
  // END FILLING CAFFE MOCHA INTO CUP

  // FILLING AMERICANO INTO CUP
  let fillAmericano = () => {
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
    }, 5000, () => {
      let espressoContent = $("<p>ESPRESSO</p>");
      cupContent.children().eq(0).append(espressoContent);
      cupContent.prepend(hotWater);
      hotWater.css({
        "bottom": "4.5rem",
        "background-color": hotWaterColor
      });
      cupContent.children().eq(0).animate({
        height:"10.5rem"
      }, 6000, () => {
        stopDrops();
        startSteam();
        stopPointer();
        animatePowerOn();
        let hotWaterContent = $("<p>HOT WATER</p>");
        cupContent.children().eq(0).append(hotWaterContent);
      });
    });
  }
  // END FILLING AMERICANO INTO CUP

  // FILLING LATTE MACCHIATO INTO CUP
  let fillLatteMacchiato = () => {
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
    }, 5000, () => {
      let steamedMilkContent = $("<p>STEAMED MILK</p>");
      cupContent.children().eq(0).append(steamedMilkContent);
      cupContent.prepend(coffee);
      coffee.css("background-color", coffeeColor);
      coffee.css("bottom", "10.5rem");
      cupContent.children().eq(0).animate({
        height:"4.5rem"
      }, 5000, () => {
        stopDrops();
        startSteam();
        stopPointer();
        animatePowerOn();
        let espressoContent = $("<p>ESPRESSO</p>");
        cupContent.children().eq(0).append(espressoContent);
      });
    });
  }
  // END FILLING LATTE MACCHIATO INTO CUP

  // <<< END SECTION OF COFFEE FILLING FUNCTIONS >>>
  // <<< END SECTION OF FUNCTIONS DECLARATION >>>

  // <<< DIALOG BOX AND HINT BOX FUNCTIONS >>>
  btnNext.on("click", showCoffeMaker);
  btnOK.on("click", () => {
    hintBox.animate({
      opacity: 0,
      display: "none"
    }, 500, () => {
      hintBox.remove();
    });
    animatePowerOn();
    coffeeContainer.animate({
      "opacity": "1"
    }, 1000);
  });
  powerOn.on("click", showMenu);
  closeMenuCross.on("click", closeMenu);
  // <<< END DIALOG BOX AND HINT BOX FUNCTIONS >>>


  // COFFEE MENU ON CLICK FUNCTIONS
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
