
document.addEventListener("DOMContentLoaded", function(){
    const table = [];
    const navi = document.querySelector("#navigation").querySelectorAll( "ul li")
    const navigame = document.querySelector("#navigation2").querySelectorAll( "ul li")
    const info = document.querySelector(".intro__info");
    const form = document.querySelector(".intro__form");
    const game = document.querySelector(".intro__game");
    const startgame = document.querySelector(".form__start");
    const cancelgame = document.querySelector(".form__cancel");

    function start(button) {
        button.addEventListener("click", function () {
                button.parentElement.parentElement.classList.add("unvisible")
                info.classList.toggle("unvisible");
                form.classList.toggle("unvisible");
        });
    }

    function newgame(button) {
        button.addEventListener("click", function () {
            let name = button.parentElement.parentElement.querySelector("input").value;
            let alert = button.parentElement.parentElement.querySelector("span");
            if (name.length > 2) {
                button.parentElement.parentElement.querySelector("input").value = "";
                navigame[0].firstElementChild.innerText = name;
                game.classList.toggle("unvisible");
                form.classList.toggle("unvisible");
                navigame[0].parentElement.parentElement.classList.toggle("unvisible");
                alert.innerText ="";
            } else {
                // console.log(alert)
                alert.innerText = "Name is to short!";
            }
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

    function endgame(button) {
        button.addEventListener("click", function () {
            game.classList.toggle("unvisible");
            info.classList.toggle("unvisible");
            navigame[0].parentElement.parentElement.classList.toggle("unvisible");
            navi[0].parentElement.parentElement.classList.toggle("unvisible");
        });
    }

    start(navi[0]);
    newgame(startgame);
    cancel(cancelgame);
    endgame(navigame[2])
});
