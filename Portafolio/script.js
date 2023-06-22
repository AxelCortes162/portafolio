const dmode = document.querySelector("#dmode");
const body = document.querySelector("body");

load();

dmode.addEventListener("click", e =>{
    body.classList.toggle("darkmode");
    store(body.classList.contains("darktmode"));
})

function load (){
    const darkmode = localStorage.getItem("darkmode");

    if(!darkmode){
        store("false")
    } else if(darkmode == "true"){
        body.classList.add("darkmode");
    }
}

function store (value){
    localStorage.setItem("darkmode", value);
}

function showContent() {
    element = document.getElementById("menu");
    check = document.getElementById("btn-menu");
    if (check.checked) {
        element.style.display='block';
    }
    else {
        element.style.display='none';
    }
}

