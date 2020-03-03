document.addEventListener("DOMContentLoaded", function(){
    const table = [];
    const tableofcolors = ["yellow", "red", "green", "blue", "orange"];
    const navi = document.querySelector("#navigation").querySelectorAll( "ul li")
    const navigame = document.querySelector("#navigation2").querySelectorAll( "ul li")
    const info = document.querySelector(".intro__info");
    const howto = document.querySelector(".intro__howto");
    const howtobutton = document.querySelector("#howto_button");
    const end = document.querySelector(".intro__end");
    const form = document.querySelector(".intro__form");
    const game = document.querySelector(".intro__game");
    const startgame = document.querySelector(".form__start");
    const cancelgame = document.querySelector(".form__cancel");
    const rows = document.querySelector(".intro__game").querySelectorAll("tr");
    const balls = document.querySelector(".intro__game").querySelectorAll("span");
    const empty = document.querySelector(".intro__game").querySelectorAll("td");


    function colorrandom (array){
        return array[Math.floor(Math.random()*array.length)];
    }

    function randomballs (array){
        return array[Math.floor(Math.random()*array.length)];
    }

    function nextturn (array) {
        checkfive(balls);
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

    for (let i=0; i< 9; i++) {
        table.push (rows[i].querySelectorAll("td"));
    }
    // console.log(table[1][1].querySelector("span"))
    // console.log(table.length);


    function checkrows (array) {
        let tablefrom = [];
        let argument1;
        let argument2;
        let counter = 1;
        for (let i = 0; i < array.length; i++) {
            for (let k = 0; k < array[i].length; k++) {
            argument1 = array[i][k].querySelector("span").getAttribute("style", "backgroundColor")
            argument2 = array[i][k + 1].querySelector("span").getAttribute("style", "backgroundColor")
            if (argument1 == argument2 && argument1 != null && argument2 != null) {
                tablefrom.push([i][k]);
                // tablefrom.push([i][k+1]);
                counter = counter +1;
                console.log(counter)
                console.log(tablefrom)
                }
            }
        }
        // if (counter % 5 == 0) {
        //     for (let j = 0; j < tablefrom.length; j++) {
        //         array[tablefrom[j]].querySelector("span").classList.remove("visible");
        //         array[tablefrom[j]].querySelector("span").style.backgroundColor = "";
        //     }
        //     counter = 1;
        //     tablefrom.length = 0;
        //     navigame[1].firstElementChild.innerText = parseInt(navigame[1].firstElementChild.innerText) + 5;
        // }

    }


    function checkfive (array) {
        let tablefrom = [];
        let tabledest = [];
        let argument1;
        let argument2;
        let counter = 1;
        for (let i = 0; i < array.length - 1; i++) {
            argument1 = array[i].getAttribute("style", "backgroundColor")
            argument2 = array[i + 1].getAttribute("style", "backgroundColor")
            if (argument1 == argument2 && argument1 != null && argument2 != null) {
                tablefrom.push(i);
                tablefrom.push(i+1);
                counter = counter +1;
                tabledest = tablefrom.filter(function(element, index, array) {
                    return (i+1) - i ==1;
                });
                console.log(counter)
                console.log(tabledest)
            }
        }
        if (counter % 5 == 0) {
            for (let j = 0; j < tabledest.length; j++) {
                array[tabledest[j]].classList.remove("visible");
                array[tabledest[j]].style.backgroundColor = "";
            }
            counter = 1;
            tablefrom.length = 0;
            tabledest.length = 0;
            navigame[1].firstElementChild.innerText = parseInt(navigame[1].firstElementChild.innerText) + 5;
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
                button.parentElement.parentElement.classList.add("unvisible")
                info.classList.toggle("unvisible");
                form.classList.toggle("unvisible");
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
            info.classList.toggle("unvisible");
            form.classList.toggle("unvisible");
            navigame[0].parentElement.parentElement.classList.add("unvisible");
            navi[0].parentElement.parentElement.classList.toggle("unvisible");
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

    function endgame(button) {
        button.addEventListener("click", function () {
            end_game()
        });
    }

    function how_to(button) {
        button.addEventListener("click", function () {
            info.classList.toggle("unvisible");
            howto.classList.toggle("unvisible");
            navi[0].parentElement.parentElement.classList.toggle("unvisible");
        });
        howtobutton.addEventListener("click", function () {
            info.classList.toggle("unvisible");
            howto.classList.toggle("unvisible");
            navi[0].parentElement.parentElement.classList.toggle("unvisible");
        });
    }

    //main program

    start(navi[0]);
    how_to(navi[1]);
    newgame(startgame);
    cancel(cancelgame);
    endgame(navigame[2]);
});
