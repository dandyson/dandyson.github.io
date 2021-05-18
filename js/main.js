//SLIDE IN ON SCROLL EFFECT FOR ELEMENTS

//STARTING SCRIPT
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderElements = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    sliderElements.forEach(slider => {
        //Half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - slider.height / 2;
        //Bottom of the image
        const imageBottom = slider.offsetTop + slider.height;
        const isHalfShown = slideInAt > slider.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            slider.classList.add('active');
        } else {
            slider.classList.remove('active');
        }

        // console.log(slideInAt);
    })
}

window.addEventListener('scroll', debounce(checkSlide));


//NAVIGATION
const toggle = document.querySelector('.toggle');
const item = document.querySelectorAll('.item');
const menu = document.querySelector('.menu');
const brandTitle = document.querySelector('.brandTitle');
const bars = document.querySelector('.bars');

//MOBILE NAVIGATION POP OUT
function openNav() {
    item.forEach(link => {
        if (link.classList.contains('active')) {
            link.classList.remove('active');
            bars.classList.remove('active');
            menu.style.backgroundColor = 'rgba(0,0,0,0)';
            brandTitle.style.color = "black";
        } else {
            link.classList.add('active');
            bars.classList.add('active');
            menu.style.backgroundColor = '#211189';
            menu.style.transition = '0.3s';
            brandTitle.style.color = "white";
        }
    })
}

function closeNav() {
    document.getElementById('open').style.display = 'block';
    document.getElementById('topNavigation').style.width = '0'
}

toggle.addEventListener('click', openNav);


//PORTFOLIO GRID
const portfolioBoxes = document.querySelectorAll('.mouseOverWhite');
const portfolioButtons = document.querySelectorAll('.portfolioButtons');
let text;

portfolioBoxes.forEach(box => {
    box.addEventListener('mouseenter', function () {
        text = this.parentNode.children[0].children[0];
        text.classList.remove('textHidden');
        text.classList.add('textActive');
    });

    box.addEventListener('mouseleave', function () {
        text.classList.remove('textActive');
        text.classList.add('textHidden');
    });
});

// SCROLL TO TOP

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const scrollButton = document.querySelector('.scrollToTop');

function scrollToTop() {
    if (window.scrollY >= scrollButton.offsetTop) {
        scrollButton.classList.add('scrollShow');
    } else {
        scrollButton.classList.remove('scrollShow');
    }
}

window.addEventListener('scroll', debounce(scrollToTop));
