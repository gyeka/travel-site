
class RevealOnScroll {
    constructor() {
        this.featuresToReveal = document.querySelectorAll(".features__item");
        this.hideItems();
        this.events();
    }
    events() {
        window.addEventListener("scroll", () => {
            this.featuresToReveal.forEach(item => {
                //call the calculate Method
                this.calculateIfScrolledTo(item)
            })
        })
    }
    calculateIfScrolledTo(item) {
        let scrollPercent = (item.getBoundingClientRect().y / window.innerHeight) * 100
        if (scrollPercent < 75) {
            item.classList.add("reveal-item--make-visible")
        }
    }

    //1. add css class -opacity 0
    hideItems() {
        this.featuresToReveal.forEach(item => item.classList.add("reveal-item"))
    }

}

let revealOnScroll = new RevealOnScroll;




/*
const featuresToReveal = document.querySelectorAll(".features__item");
featuresToReveal.forEach(item => {
    item.classList.add("reveal-item");
});

*/