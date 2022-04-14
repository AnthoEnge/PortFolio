var bouton = document.querySelector(".bouton");
var input = document.querySelector(".input");
var color = document.querySelectorAll(".color");
var title = document.querySelector(".heading h3");

bouton.addEventListener("click", function(){

    if (document.querySelector(".input") ){
        input.classList = "active";
        title.classList.toggle("white");
            for ( var i = 0 ; i < color.length ; i++ ) {
                color[i].classList.add("activebg");
            }

    } else {
        input.classList = "input";
        title.classList.toggle("white");
            for ( var i = 0 ; i < color.length ; i++ ) {
                color[i].classList.remove("activebg");
            }
    }
})
