// 'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');



// Tab component
tabsContainer.addEventListener('click', (e) => {
    const clicked = e.target.closest('.operations__tab');

    // Guard clause
    if (!clicked) return;

    // Remove active classes
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));

    // Activate tab
    clicked.classList.add('operations__tab--active');

    // Activate content area
    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add('operations__content--active');

});

// Stickiy navigation

const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', () => {
    if (window.scrollY > initialCoords.top) nav.classList.add('sticky')
    else {
        nav.classList.remove('sticky')
    }
})



// Page scrolling 
// document.querySelectorAll('.nav__link').forEach((value) => {
//     // console.info(value);
//     value.addEventListener('click', function (e){
//         e.preventDefault();
//         console.info(this);
//         const id = this.getAttribute('href');
//         console.info(id);
//         let section = document.querySelector(id);
//         console.info(section);


// document.querySelector('.nav__links').addEventListener('click', function (e) {
//     if (!e.target.classList.contains('nav__link--btn btn--show-modal') && e.target.classList.contains('nav__link')) {
//         e.preventDefault();
//         const id = e.target.getAttribute('href');
//         if (!id) {
//             let section = document.querySelector(id);

//             // Cara moderen 
//             section.scrollIntoView({ behavior: "smooth" });
//         }

//     }
// })

// Animation fade

const handleHover = function (e) {
    const link = e.target;
    if (link.classList.contains('nav__link')) {
        const link = e.target;
        const sibling = link.closest('.nav').querySelectorAll('.nav__link');
        const img = link.closest('.nav').querySelector('img');
        sibling.forEach((el) => {
            if (el !== link) {
                el.style.opacity = this;
                img.style.opacity = this;
            }
        })
    }
}

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(.5));
nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////
// Sticky navigation: Intersection Observer API

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
    const [entry] = entries;
    // console.log(entry);

    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

///////////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.remove('section--hidden');
        observer.unobserve(entry.target);
    });
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});

///////////////////////
// Img lazy
const imgTargets = document.querySelectorAll('img[data-src]');

const loading = function (entries, observe) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    // Replace src with data src 
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', () => {
        entry.target.classList.remove('lazy-img')
    });
    observe.unobserve(entry.target);


}

const imgObserver = new IntersectionObserver(loading, {
    root: null,
    threshold: 0
});

imgTargets.forEach((img) => {
    imgObserver.observe(img);
})


///////////////////////////////////////
// Slider
const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');

    let curSlide = 0;
    const maxSlide = slides.length;

    // Functions
    const createDots = function () {
        slides.forEach(function (_, i) {
            dotContainer.insertAdjacentHTML(
                'beforeend',
                `<button class="dots__dot" data-slide="${i}"></button>`
            );
        });
    };

    const activateDot = function (slide) {
        document
            .querySelectorAll('.dots__dot')
            .forEach(dot => dot.classList.remove('dots__dot--active'));

        document
            .querySelector(`.dots__dot[data-slide="${slide}"]`)
            .classList.add('dots__dot--active');
    };

    const goToSlide = function (slide) {
        slides.forEach(
            (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        );
    };

    // Next slide
    const nextSlide = function () {
        if (curSlide === maxSlide - 1) {
            curSlide = 0;
        } else {
            curSlide++;
        }

        goToSlide(curSlide);
        activateDot(curSlide);
    };

    const prevSlide = function () {
        if (curSlide === 0) {
            curSlide = maxSlide - 1;
        } else {
            curSlide--;
        }
        goToSlide(curSlide);
        activateDot(curSlide);
    };

    const init = function () {
        goToSlide(0);
        createDots();

        activateDot(0);
    };
    init();
    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') prevSlide();
        e.key === 'ArrowRight' && nextSlide();
    });

    dotContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('dots__dot')) {
            // BUG in v2: This way, we're not keeping track of the current slide when clicking on a slide
            // const { slide } = e.target.dataset;

            curSlide = Number(e.target.dataset.slide);
            goToSlide(curSlide);
            activateDot(curSlide);
        }
    });
};
slider();




///////////////////////
/*
//Selection
console.info(document.documentElement);
const body = document.body;
const header = document.head;

const allSection = document.querySelectorAll('.section');
console.info(allSection);

document.querySelector('.header');
console.info(document.getElementById('section--1'));

const allButtons = document.getElementsByTagName('button');
console.info(allButtons);

// crating and inserts elements
const message = document.createElement('div');

message.innerHTML =
    'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

message.classList.add('cookie-message');

// body.append(message);
// body.prepend(message);
// body.after(message);
body.after(message);

//Dalete
document.querySelector('.btn--close-cookie').addEventListener('click', () => message.remove());
*/


/*

// Style
message.style.backgroundColor = '#f3f4f5';

console.info(message.style.color);

console.info(getComputedStyle(message).color);
console.info(getComputedStyle(message).height);

// message.style.height = Number(parseInt(getComputedStyle(message).height, 10) + 30 + 'px');
message.style.height = (parseInt(getComputedStyle(message).height, 10) + 30) + 'px';

// console.info(getComputedStyle(message).width);
// message.style.width = (parseInt(getComputedStyle(message).width,10)+30 +'px');
// console.info(getComputedStyle(message).width);




document.documentElement.style.setProperty('--color-primary', 'blue')
console.info(getComputedStyle(message).height);

// Attribute
const logo = document.querySelector('.nav__logo');
console.info(logo.src);
console.info(logo.className);
console.info(logo.designer);

logo.alt = 'beatifule logo';

// Non-Standard
console.info(logo.getAttribute('designer'));
console.info(logo.getAttribute('src'));
logo.setAttribute('company','Bankist');

const link = document.querySelector('.nav__link');
console.info(link.href);
console.info(link.getAttribute('href'));

// Data Attributes
console.info(logo.dataset.versionNumber);
console.info(logo.dataset.versionUpdate);

// Classes
logo.classList.add('j','coba');
logo.classList.toggle('c');
logo.classList.remove('coba','j','c');
logo.classList.contains('c');

// Don't use
// logo.className = 'jones';

*/

// Scrolling
/*


btnScrollTo.addEventListener('click', (e) => {
    const s1coords = section1.getBoundingClientRect();
    console.info(s1coords);

    console.info(e.target.getBoundingClientRect());

    console.info('Crrunet scroll (X/Y)', window, window.scrollX, window.scrollY);

    console.info('heigt/width viewport',
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
    )

    // Scrolling
    // Cara Lama
    // window.scrollTo(
    //     s1coords.left + window.scrollX,
    //     s1coords.top + window.scrollY);

    // window.scrollTo({
    //     left: s1coords.left + window.scrollX,
    //     top: s1coords.top + window.scrollY,
    //     behavior: 'smooth',
    // });

    // Cara moderen
    section1.scrollIntoView({ behavior: "smooth" });
    // section2.scrollIntoView({behavior : "smooth"});

})
*/
/*
// Event

const h1 = document.querySelector('h1');
console.info(h1);

const alertH1 = () => alert('Hello Rayhan');

h1.addEventListener('mouseenter',alertH1);

setTimeout(() => {
    h1.removeEventListener('mouseenter',alertH1);
}, 10000);

//
// h1.onmouseenter = ()  => alertH1();
*/

/*
// Event Propagation

// Membuat warna random
const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
    `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('LINK', e.target, e.currentTarget,this);
    console.log(e.currentTarget === this);
    // Stop propagation
  e.stopPropagation();
})

document.querySelector('.nav__links').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('CONTAINER', e.target, e.currentTarget);
  });

  document.querySelector('.nav').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  });
  */

/*
//   Dom Treversing
const h1 = document.querySelector('.header__title h1');

// Going downwards : child
console.info(h1.childNodes);
console.info(h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'white';
console.info(h1.firstElementChild);

// Going upwards : parent
console.info(h1.parentElement);
console.info(h1.parentNode);

h1.closest('header').style.backgroundColor = 'var(--color-primary)';
h1.closest('h1').style.backgroundColor = 'var(--color-tertiary)';


// Going sideward : sibling
console.info(h1.previousElementSibling);
console.info(h1.nextElementSibling);

console.info(h1.previousSibling);
console.info(h1.nextSibling);

console.info(h1.parentElement.children);

[...h1.parentElement.children].forEach((el) => {
    console.info(el !== h1);
    if (el !== h1) el.style.transform = 'scale(.8)'
})

*/


///////////////////////
/*
// IntersectionObserver
const obsCallBack = (entries, observer) => {
    entries.forEach((entry) => {
    })
}

const obsOptions = {
    root: null,
    threshold: .1
}

const observer = new IntersectionObserver(obsCallBack, obsOptions);
observer.observe(section1);
*/

///////////////////////////////////////
/*
// Lifecycle DOM Events
document.addEventListener('DOMContentLoaded', function (e) {
    console.log('HTML parsed and DOM tree built!', e);
});
 
window.addEventListener('load', function (e) {
    console.log('Page fully loaded', e);
});
 
window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    console.log(e);
    e.returnValue = '';
});
*/