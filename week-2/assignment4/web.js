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


function showMore(){
    const showMore = document.querySelector(".hidden-content");
    showMore.classList.toggle("hidden-content-show");
    // alert("Show more!");
    // 使用alert時，chrome會跳出-> [Violation] 'click' handler took 1346ms
    // 原因: event handler執行時間過長，會導致UI無法即時回應
}