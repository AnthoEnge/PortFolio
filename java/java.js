// Bar Menu
let accueilContent = document.querySelector("#accueil");
let accueilMenu = document.querySelector("#accueilMenu");


let conContent = document.querySelector("#con");
let conMenu = document.querySelector("#conMenu");

let formMenu = document.querySelector("#formMenu");
let formContent = document.querySelector("#form");

let contactMenu = document.querySelector("#contactMenu");
let contactContent = document.querySelector("#contact");

let aboutMenu = document.querySelector("#aboutMenu");
let aboutContent = document.querySelector("#about");

// text color change
let modifColor = document.querySelector(".modifColor");
let actifMenu = document.querySelector(".actifMenu");

// change phrase
let changePhrase = [ " Web",
                    " Front End",
];
let changeMot = document.querySelector("#changeMot");

function letChangePhrase(){
    let random = Math.floor(Math.random() * changePhrase.length);
    changeMot.innerHTML = changePhrase[random];
}setInterval(letChangePhrase, 3000);




conMenu.addEventListener("click", function () {
    formContent.classList.remove("actif");
    contactContent.classList.remove("actif");
    aboutContent.classList.remove("actif");
    accueilContent.classList.remove("actif");

    conContent.classList.add("actif");
    modifColor.style.color = "#C6C6FF";
    actifMenu.classList.remove("actifMenu");
    actifMenu.style.color = "black";
    aboutMenu.style.color = "black";
    contactMenu.style.color = "black";
    formMenu.style.color = "black";
    conMenu.style.color = "#C6C6FF";
    
    
})

accueilMenu.addEventListener("click", function () {
    formContent.classList.remove("actif");
    contactContent.classList.remove("actif");
    aboutContent.classList.remove("actif");
    conContent.classList.remove("actif");

    accueilContent.classList.add("actif");
    modifColor.style.color = "#82B8B8";
    actifMenu.classList.remove("actifMenu");
    conMenu.style.color = "black";
    aboutMenu.style.color = "black";
    contactMenu.style.color = "black";
    formMenu.style.color = "black";
    conMenu.style.color = "#black";
    accueilMenu.style.color = "#82B8B8";
    
})

formMenu.addEventListener("click", function () {
    conContent.classList.remove("actif");
    accueilContent.classList.remove("actif");
    aboutContent.classList.remove("actif");
    contactContent.classList.remove("actif");

    formContent.classList.add("actif");
    modifColor.style.color = "#E4C6A7";

    actifMenu.classList.remove("actifMenu");
    conMenu.style.color = "black";
    aboutMenu.style.color = "black";
    contactMenu.style.color = "black";
    formMenu.style.color = "#E4C6A7";
    conMenu.style.color = "black";
    accueilMenu.style.color = "black";
    
})

aboutMenu.addEventListener("click", function () {
    formContent.classList.remove("actif");
    contactContent.classList.remove("actif");
    conContent.classList.remove("actif");
    accueilContent.classList.remove("actif");

    aboutContent.classList.add("actif");
    modifColor.style.color = "#FF7373";

    actifMenu.classList.remove("actifMenu");
    conMenu.style.color = "black";
    aboutMenu.style.color = "#FF7373";
    contactMenu.style.color = "black";
    formMenu.style.color = "black";
    conMenu.style.color = "black";
    accueilMenu.style.color = "black";
    
})

contactMenu.addEventListener("click", function () {
    formContent.classList.remove("actif");
    conContent.classList.remove("actif");
    aboutContent.classList.remove("actif");
    accueilContent.classList.remove("actif");

    contactContent.classList.add("actif");
    modifColor.style.color = "#D2FFC4";

    actifMenu.classList.remove("actifMenu");
    conMenu.style.color = "black";
    aboutMenu.style.color = "black";
    contactMenu.style.color = "#D2FFC4";
    formMenu.style.color = "black";
    conMenu.style.color = "black";
    accueilMenu.style.color = "black";
    
})