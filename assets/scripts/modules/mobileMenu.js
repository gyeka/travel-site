class MobileMenu {
    constructor() {
        //selecting DOM elements
        this.hamburger = document.querySelector(".hamburger");
        this.menuOpen = document.querySelector(".site-header__menu-content"); //menu list
        this.innerHeader = document.querySelector(".header--inner");//background
        //call the methods
        this.events(); //we have to call the event METHOD
    }

    events() {
        this.hamburger.addEventListener("click", () => this.toggleTheMenu())
    }
    toggleTheMenu() {
        this.menuOpen.classList.toggle("open");
        this.innerHeader.classList.toggle("background");
        this.hamburger.classList.toggle("close");

    }
}



/*ez másik fájlba menne: App.js*/
let mobileMenu = new MobileMenu();