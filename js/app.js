document.addEventListener("DOMContentLoaded", function(){
    const table = [];
    const tableofcolors = ["yellow", "red", "green", "blue", "orange"];
    const navi = document.querySelector("#navigation").querySelectorAll( "ul li")
    const navigame = document.querySelector("#navigation2").querySelectorAll( "ul li")
    const info = document.querySelector(".intro__info");
    const howto = document.querySelector(".intro__howto");
    const howtobutton = document.querySelector(".howto__close");
    const end = document.querySelector(".intro__end");
    const form = document.querySelector(".intro__form");
    const game = document.querySelector(".intro__game");
    const startgame = document.querySelector(".form__start");
    const cancelgame = document.querySelector(".form__cancel");
    const endbutton = document.querySelectorAll(".button_end_game");
    const rows = document.querySelector(".intro__game").querySelectorAll("tr");
    const balls = document.querySelector(".intro__game").querySelectorAll("span");
    const empty = document.querySelector(".intro__game").querySelectorAll("td");
    const hamburger = document.querySelector(".hamburger");
    const mobile = window.matchMedia("screen and (max-width: 1023px)");
    const picture = document.querySelector(".intro__right");

    function colorrandom (array){
        return array[Math.floor(Math.random()*array.length)];
    }

    function randomballs (array){
        return array[Math.floor(Math.random()*array.length)];
    }

    function nextturn (array) {
        checkfifecolumn(balls);
        checkfiverows(balls);
        for (let i=0; i< 3; i++ ) {
            let ball = randomballs(array);
            if (ball.className != "visible") {
                ball.classList.toggle("visible");
                ball.style.backgroundColor = colorrandom(tableofcolors);
            }
        }
    }

    function selectball (array, array2) {
        array.forEach(function (kulka) {
            kulka.addEventListener("click", function () {
                if (this.className == "visible") {
                    argument = this.getAttribute("style", "backgroundColor")
                    this.style.backgroundColor = "";
                }
                return argument;
            });
        })
        array2.forEach(function(empt) {
            empt.addEventListener("click", function () {
                    empt.firstChild.classList.toggle("visible");
                    empt.firstChild.setAttribute("style", argument);
            });
        })
    }

    function checkfifecolumn (array) {
        let tablefrom = [];
        let argument1;
        let argument2;
        let argument3;
        let argument4;
        let counter = 1;
        for (let j = 0; j < 10; j++) {
            for (let i = 0; i < array.length - 10; i = i + 10) {
                argument1 = array[i + j].getAttribute("style", "backgroundColor")
                argument2 = array[i + j + 10].getAttribute("style", "backgroundColor")
                argument3 = array[i+ j].classList;
                argument4 = array[i+j +10].classList;
                if (argument1 == argument2 && argument1 != null && argument2 != null && argument3 == "visible" && argument4 == "visible") {
                    tablefrom.push([i+j]);
                    tablefrom.push([i +j + 10]);
                    counter = counter + 1;
                    console.log(counter)
                    console.log("colum: " +tablefrom.length)
                    console.log("colum: " +tablefrom)
                }
            }
        }

        if (counter >= 5) {
            for (let k = 0; k < tablefrom.length; k++) {
                array[tablefrom[k]].classList.remove("visible");
                array[tablefrom[k]].style.backgroundColor = "";
            }
            navigame[1].firstElementChild.innerText = parseInt(navigame[1].firstElementChild.innerText) + counter;
            counter = 1;
            tablefrom.length = 0;
        }
    }

    function checkfiverows (array) {
        let tablefrom = [];
        let argument1;
        let argument2;
        let argument3;
        let argument4;
        let counter = 1;
        for (let i = 0; i < array.length - 1; i++) {
            argument1 = array[i].getAttribute("style", "backgroundColor")
            argument2 = array[i + 1].getAttribute("style", "backgroundColor")
            argument3 = array[i].classList;
            argument4 = array[i+1].classList;
            if (argument1 == argument2 && argument1 != null && argument2 != null && argument3 == "visible" && argument4 == "visible") {
                tablefrom.push(i);
                tablefrom.push(i+1);
                counter = counter +1;
                console.log(counter)
                console.log("rows: " +tablefrom.length)
                console.log("rows: " +tablefrom)
            }
        }
        if (counter >= 5) {
            for (let j = 0; j < tablefrom.length; j++) {
                array[tablefrom[j]].classList.remove("visible");
                array[tablefrom[j]].style.backgroundColor = "";
            }
            navigame[1].firstElementChild.innerText = parseInt(navigame[1].firstElementChild.innerText) + counter;
            counter = 1;
            tablefrom.length = 0;
        }
    }

    function checkfull (array) {
        let counter1 = 0;
        array.forEach(function (kulka) {
            if (kulka.className == "visible") {
                counter1 = counter1 +1;
            }
        });
        return counter1;
    }

    function cleargame (array) {
        array.forEach(function(kulka) {
                kulka.classList.remove("visible");
            });
    }

    function nextballs (array) {
            let log = false;
            const interval = setInterval(function(){
                if (checkfull(array) < 100) {
                    nextturn(balls);
                } else {
                    clearInterval(interval);
                    end_game();
                }
                return interval;
            }, 3000);
    }

    function start(button) {
                button.addEventListener("click", function () {
                    if (mobile.matches || window.innerWidth < 1023) {
                        // button.parentElement.parentElement.classList.toggle("unvisible");
                        picture.classList.toggle("unvisible");
                        form.classList.toggle("unvisible");
                        hamburger.classList.toggle("unvisible");
                        navi[0].parentElement.classList.toggle('unvisible');
                    } else {
                        button.parentElement.parentElement.classList.add("unvisible");
                        info.classList.toggle("unvisible");
                        form.classList.toggle("unvisible");
                    }
                });
            }

    function newgame(button) {
        button.addEventListener("click", function () {
            form.addEventListener("submit", function(event){
            event.preventDefault();
            let name = button.parentElement.parentElement.querySelector("input").value;
            let alert = button.parentElement.parentElement.querySelector("span");
            if (name.length > 2) {
                button.parentElement.parentElement.querySelector("input").value = "";
                navigame[0].firstElementChild.innerText = name;
                game.classList.toggle("unvisible");
                form.classList.toggle("unvisible");
                navigame[0].parentElement.parentElement.classList.toggle("unvisible");
                if (mobile.matches || window.innerWidth < 1023) {
                    endbutton[1].classList.toggle("unvisible");
                }
                alert.innerText ="";
                cleargame(balls);
                nextturn(balls);
                nextballs (balls);
                selectball(balls, empty);

            } else {
                alert.innerText = "Name is to short!";
            }
        });
        });
    }

    function cancel(button) {
        button.addEventListener("click", function () {
            if (mobile.matches || window.innerWidth < 1023) {
                picture.classList.toggle("unvisible");
                form.classList.toggle("unvisible");
                hamburger.classList.toggle("unvisible");
            } else {
                info.classList.toggle("unvisible");
                form.classList.toggle("unvisible");
                navigame[0].parentElement.parentElement.classList.add("unvisible");
                navi[0].parentElement.parentElement.classList.toggle("unvisible");
            }
        });
    }

    function end_game() {
        let name = navigame[0].firstElementChild.innerText
        let score = navigame[1].firstElementChild.innerText
        end.firstElementChild.firstElementChild.innerText = name;
        end.lastElementChild.firstElementChild.innerText = score;
        game.classList.toggle("unvisible");
        end.classList.toggle("unvisible");
        navigame[0].parentElement.parentElement.classList.toggle("unvisible");
        const interval = setInterval(function(){
            location.reload();
            clearInterval(interval);
        }, 5000);
    }

    function endgame(button, button2) {
        if (mobile.matches || window.innerWidth < 1023) {
            button2.addEventListener("click", function () {
                console.log("koniec")
                end_game()
            });
        } else {
            button.addEventListener("click", function () {
                console.log("koniec")
                end_game()
            });
        }
    }

    function how_to(button) {
        button.addEventListener("click", function () {
            if (mobile.matches || window.innerWidth < 1023) {
                picture.classList.toggle("unvisible");
                howto.classList.toggle("unvisible");
                hamburger.classList.toggle("unvisible");
                navi[0].parentElement.classList.toggle('unvisible');
            } else {
                info.classList.toggle("unvisible");
                howto.classList.toggle("unvisible");
                navi[0].parentElement.parentElement.classList.toggle("unvisible");
            }
        });
        howtobutton.addEventListener("click", function () {
            if (mobile.matches || window.innerWidth < 1023) {
                picture.classList.toggle("unvisible");
                howto.classList.toggle("unvisible");
                hamburger.classList.toggle("unvisible");
            } else {
                info.classList.toggle("unvisible");
                howto.classList.toggle("unvisible");
                navi[0].parentElement.parentElement.classList.toggle("unvisible");
            }
        });
    }

    // mobile kod

    const menu = document.querySelector('.navigation-list');
    hamburger.addEventListener('click', function(){
        menu.classList.toggle('visible');
        menu.classList.toggle('unvisible');
    });
    mobile.addListener(function(){
        if (mobile.matches) {
            menu.classList.remove('visible');
        }
    });

    //main program

    start(navi[0]);
    how_to(navi[1]);
    newgame(startgame);
    cancel(cancelgame);
    endgame(endbutton[0], endbutton[1]);
});
