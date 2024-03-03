const navItems = document.querySelectorAll("#nav-list a")
const activeLine = document.querySelector("#active-line")
const defaultImgSrc = "./images/img-placeholder.png"

const projects = [
    {
        title: "Lorem Ipsum",
        description: "Vestibulum interdum, dolor sit amet gravida pulvinar, ipsum massa mattis turpis, ut dictum ante tellus quis ex. Quisque aliquet non tellus sodales consequat. Cras sapien ipsum, luctus at scelerisque rutrum, luctus non dui. Maecenas vitae ex at nunc sodales scelerisque.",
        imageSrc: "",
        languages: ["html", "css"]
    },
    {
        title: "Lorem Ipsum",
        description: "Vestibulum interdum, dolor sit amet gravida pulvinar, ipsum massa mattis turpis, ut dictum ante tellus quis ex. Quisque aliquet non tellus sodales consequat. Cras sapien ipsum, luctus at scelerisque rutrum, luctus non dui. Maecenas vitae ex at nunc sodales scelerisque.",
        imageSrc: "",
        languages: ["html", "css"]
    },
    {
        title: "Lorem Ipsum",
        description: "Vestibulum interdum, dolor sit amet gravida pulvinar, ipsum massa mattis turpis, ut dictum ante tellus quis ex. Quisque aliquet non tellus sodales consequat. Cras sapien ipsum, luctus at scelerisque rutrum, luctus non dui. Maecenas vitae ex at nunc sodales scelerisque.",
        imageSrc: "",
        languages: ["html", "css"]
    },
    {
        title: "Lorem Ipsum",
        description: "Vestibulum interdum, dolor sit amet gravida pulvinar, ipsum massa mattis turpis, ut dictum ante tellus quis ex. Quisque aliquet non tellus sodales consequat. Cras sapien ipsum, luctus at scelerisque rutrum, luctus non dui. Maecenas vitae ex at nunc sodales scelerisque.",
        imageSrc: "",
        languages: ["html", "css"]
    },
    {
        title: "Lorem Ipsum",
        description: "Vestibulum interdum, dolor sit amet gravida pulvinar, ipsum massa mattis turpis, ut dictum ante tellus quis ex. Quisque aliquet non tellus sodales consequat. Cras sapien ipsum, luctus at scelerisque rutrum, luctus non dui. Maecenas vitae ex at nunc sodales scelerisque.",
        imageSrc: "",
        languages: ["html", "css"]
    },
    {
        title: "Lorem Ipsum",
        description: "Vestibulum interdum, dolor sit amet gravida pulvinar, ipsum massa mattis turpis, ut dictum ante tellus quis ex. Quisque aliquet non tellus sodales consequat. Cras sapien ipsum, luctus at scelerisque rutrum, luctus non dui. Maecenas vitae ex at nunc sodales scelerisque.",
        imageSrc: "",
        languages: ["html", "css"]
    }
]

function generateProjectCards() {
    const projectsWrapper = document.querySelector("#projects-wrapper");

    projects.forEach(e => {
    const cardContainer = document.createElement("div");
    const textContainer = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const image = document.createElement("img");

    title.textContent = e.title;
    description.textContent = e.description;
    e.imageSrc.length ? image.src = e.imageSrc : image.src = defaultImgSrc;

    cardContainer.classList.add("card-container")
    textContainer.classList.add("text-container");
    description.classList.add("card-description");
    image.classList.add("project-image");

    textContainer.append(title, description)
    cardContainer.append(image, textContainer);
    projectsWrapper.append(cardContainer);
    })
}

generateProjectCards();

let isScrolling = false;

updateActiveNavItem("hero")

function updateActiveNavItem(section) {
    const navItem = document.querySelector(`a[href="#${section}"]`)
    if (navItem) {
        activeLine.style.width = `${navItem.offsetWidth}px`
        activeLine.style.transform = `translateX(${navItem.offsetLeft}px)`
    }
    setTimeout(() => {
        isScrolling = false;
    }, 1000);
}

navItems.forEach(item => {
    item.addEventListener("click", function() {
        clicked = true;
        const selectedSection = this.href.split("#")[1]
        updateActiveNavItem(selectedSection);
    })    
});


const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    updateActiveNavItem(findNearestSection())
});


function findNearestSection() {
    const scrollPos = window.scrollY;
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= (sectionTop - sectionHeight / 2)) currentSection = section.id;
    })     
    return currentSection;
}

