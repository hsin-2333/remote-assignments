//Request 1: Click to Change Text.
function changeMessage(){
    const heroMessage = document.querySelector("#heroMessage");
    heroMessage.textContent = "Have a Good Time!";
    // v.s. heroMessage.innerHTML = "Have a Good Time!";
}


function toggleMenu(){
    //The toggle() method of the DOMTokenList interface removes an existing token from the list and returns false. If the token doesn't exist it's added and the function returns true.
    // alert("Menu is opened!");
    if (window.matchMedia("(min-width: 500px) and (max-width: 800px)")){
        const sideMenu = document.querySelector(".sideMenu");
        const ham = document.querySelector(".hamburger");
        sideMenu.classList.toggle("sideMenuOpen");
        ham.classList.toggle("hamburgerOpen");
        
    }
    else{
    }
}

// const mediaQuery = window.matchMedia("(min-width: 500px)");

// mediaQuery.addEventListener("onclick", toggleMenu);