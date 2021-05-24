/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const sections = document.querySelectorAll('section');
const Ul = document.querySelector('ul');
const frag = document.createDocumentFragment();
const toTop = document.getElementById('topScroll');
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

//bulid the navbar with loop
sections.forEach(section => {
    //Extract the data-nav value from the section and store it in variable
    const navBarInfo = section.getAttribute("data-nav");
    const IdAttribute = section.getAttribute('id');
    const neWlInk = document.createElement("li");
    const liNks = document.createElement("a");
    liNks.classList.add("menu__link");
    liNks.setAttribute('href', IdAttribute);
    liNks.addEventListener('click', e => {
        e.preventDefault();
        section.scrollIntoView({ behavior: "smooth" })
    });

    const text = document.createTextNode(navBarInfo);

    liNks.appendChild(text);
    neWlInk.appendChild(liNks);
    frag.appendChild(neWlInk);
});
//append in fragment  
Ul.appendChild(frag);

window.addEventListener('scroll', () => {

    //  see the remove section or no
    const act = document.getElementsByClassName('your-active-class')[0];

    if (act !== undefined) {
        act.classList.remove('your-active-class')
    }

    const ActiveNav = document.getElementsByClassName('navactive')[0];

    if (ActiveNav !== undefined) {
        ActiveNav.classList.remove('navactive')
    }

    // Set sections to be active
    sections.forEach(section => {

        const TheReact = section.getBoundingClientRect();

        if (TheReact.top >= -50 && TheReact.top < 394) {

            section.classList.add('your-active-class');
            // Set nav-bar as active

            const listTheActive = document.querySelectorAll(`a[href='${section.id}']`)[0].parentElement;

            listTheActive.classList.add("navactive");

            // Go To the Top page
            if (section.id == "section1") {

                toTop.style.display = 'none';
            } else {

                toTop.style.display = 'block';
            }
        }
    })
})

const mouseEvent = document.querySelector('.nice');
document.addEventListener('mousemove', (e) => {
    mouseEvent.style.left = e.pageX + 'px';
    mouseEvent.style.top = e.pageY + 'px';


})

const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

changeColor.addEventListener("click", function() {
    text.classList.toggle("change");
});