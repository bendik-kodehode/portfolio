const navItems = document.querySelectorAll("#nav-list a");
const activeLine = document.querySelector("#active-line");
const defaultImage = "./images/img-placeholder.png";
let isScrolling = false;

const projects = [
    {
        title: "Freeplay Haven",
        description: "Finn spill som er gratis ved hjelp av API, med mulighet for sortering av kategorier, platformer, relevans, alfabetisk, popularitet og utgivelse dato. Inkluderer paginering.",
        image: "freeplay-haven.jpg",
        languages: ["HTML", "CSS", "JavaScript"],
        github: "",
        website: ""
    },
    {
        title: "CubeDash",
        description: "Et spill hvor man beveger en kube for å unngå fallende kuber. Inkluderer vanskelighets-grad, score og high-score.",
        image: "cubedash.jpg",
        languages: ["HTML", "CSS", "JavaScript"],
        github: "",
        website: ""
    },
    {
        title: "The Royal Edict of To-do's",
        description: "En oppgave liste hvor brukeren kan legge til oppgaver med en mulighet for manuell sortering, nummerering, avkrysning, skjuling og sletting av fullførte oppgaver.",
        image: "todo-list.jpg",
        languages: ["HTML", "CSS", "JavaScript"],
        github: "",
        website: ""
    },
    {
        title: "Drumkit",
        description: "Vestibulum interdum, dolor sit amet gravida pulvinar, ipsum massa mattis turpis, ut dictum ante tellus quis ex. Quisque aliquet non tellus sodales consequat.",
        image: "drumkit.jpg",
        languages: ["HTML", "CSS", "JavaScript"],
        github: "",
        website: ""
    },
]

window.addEventListener("resize", () => {
    decideArrowDirection();
})

const initialize = () => {
    generateProjectCards();
    updateActiveNavItem("hero")
    // handleScroll("hero");
    decideArrowDirection();
}
initialize();

// Find the proper page height (Due to inconsistency across different browsers)
const pageHeight = () => {
    return Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
        );
}

function generateProjectCards() {
    const projectsWrapper = document.querySelector("#projects-wrapper");

    projects.forEach(e => {
    const cardContainer = document.createElement("div");
    const textContainer = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const image = document.createElement("img");
    const iconsWrapper = document.createElement("div");
    const languageContainer = document.createElement("div");
    const sourceContainer = document.createElement("div");
    const githubIcon = document.createElement("img");
    const webIcon = document.createElement("img");

    e.languages.forEach(lang => {
        const languageItem = document.createElement("p");
        languageItem.textContent = lang;
        languageItem.classList.add("card-language-item");
        languageContainer.append(languageItem);
    })

    title.textContent = e.title;
    description.textContent = e.description;
    e.image.length ? 
        image.src = `./images/project-images/${e.image}` : 
        image.src = defaultImage;

    githubIcon.src = "./images/icons/Github.png";
    webIcon.src = "./images/icons/website.png";

    cardContainer.classList.add("card-container")
    textContainer.classList.add("projects_text-container");
    title.classList.add("card-title");
    description.classList.add("card-description");
    image.classList.add("project-image");
    iconsWrapper.classList.add("card-icons-wrapper");
    languageContainer.classList.add("card-language-container");
    sourceContainer.classList.add("card-source-container");
    githubIcon.classList.add("card-source-icon");
    webIcon.classList.add("card-source-icon");

    textContainer.append(title, description);
    sourceContainer.append(githubIcon, webIcon);
    iconsWrapper.append(sourceContainer, languageContainer);
    cardContainer.append(image, textContainer, iconsWrapper);
    projectsWrapper.append(cardContainer);
    })
}

navItems.forEach(item => {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        isScrolling = true;
        const selectedSection = this.getAttribute("href").substring(1);
        updateActiveNavItem(selectedSection);
        handleScroll(selectedSection);
    })
});

window.addEventListener("scroll", () => {
    if (!isScrolling) updateActiveNavItem(findNearestSection());
});

function updateActiveNavItem(sectionName) {
    const navItem = document.querySelector(`a[href="#${sectionName}"]`);
    navItems.forEach(item => { 
        item.classList.remove("active-nav-item") 
    })
    navItem.classList.add("active-nav-item");
    
    if (navItem) {
        activeLine.style.width = `${navItem.offsetWidth}px`;
        activeLine.style.transform = `translateX(${navItem.offsetLeft}px)`;
    }
}

function handleScroll(sectionName) {
    const targetSection = document.querySelector(`#${sectionName}`)
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth"
    })
    setTimeout(() => {
        isScrolling = false;
    }, 1000)
}

function findNearestSection() {
    const sections = document.querySelectorAll("section");
    const scrollPos = window.scrollY;
    let currentSection = "";

    // If at bottom of page
    if (pageHeight() <= scrollPos + window.innerHeight) return "contact";

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop - (window.innerHeight / 2)) currentSection = section.id;
    });

    return currentSection;
}

function decideArrowDirection() {
    // Changes the arrow orientation in contact section
    const arrow = document.querySelector("#contact-arrow");

    if (window.innerWidth < 1024) {
        arrow.classList.remove("fa-arrow-right");
        arrow.classList.add("fa-arrow-down");
    } else {
        arrow.classList.remove("fa-arrow-down");
        arrow.classList.add("fa-arrow-right");
    }
}