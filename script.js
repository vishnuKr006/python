var typed = new Typed('#element', {
    strings: ['Web Developer', 'Graphic Designer', 'Software Developer', 'Programmer', 'Ethical Hacker', 'Full Stack Developer', 'UI &amp; UX Designer', 'Software Engineer', 'Code-Writter', '&amp; Editor'],
    typeSpeed: 70,
    BackSpeed: 100,
    loop: true
});

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalnavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalnavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        // for (let i = 0; i < totalSection; i++)
        // {
        //     allSection[i].classList.remove("back-section");
        // }
        removeBackSection();
        for (let j = 0; j < totalnavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
// ===================================================================================================================
                console.log(navList[i].querySelector("a"))
                console.log("back-section" + navList[j].querySelector("a"))
// ===================================================================================================================
                // allSection[j].classList.add("back-section");
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
    console.log(a)
}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    console.log(element.getAttribute("href").split("#"))
    const target = element.getAttribute("href").split("#")[1];
    console.log(target);
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element) {
    for (let i = 0; i < totalnavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
    // console.log(element.getAttribute("href").split("#")[1])
}
document.querySelector(".hire-me").addEventListener("click", function () {
    // console.log(this)
    const sectionIndex = this.getAttribute("data-section-index");
    console.log(sectionIndex)
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggle"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");

    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}