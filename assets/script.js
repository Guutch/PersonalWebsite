// SCROLL BUTTON APPEAR/DISAPPEAR
window.onscroll = function (e) {
    if(window.scrollY > 300) {
        document.querySelector('.scroll-up-btn').classList.add('show');
        document.querySelector('.dark-mode-btn').classList.add('show');
    } else {
        document.querySelector('.scroll-up-btn').classList.remove('show');
        document.querySelector('.dark-mode-btn').classList.remove('show');
    }
}

// Changing

let titles = ['build things', 'try new experiences', 'solve problems'];
let currentIndex = 0;
let aSpan = document.getElementById('changing');

setInterval(() => {
   
   aSpan.innerHTML= titles[currentIndex];   
   
   currentIndex++;
   
   if (currentIndex === 3)
    currentIndex = 0;

}, 2000)

const scrollBtn = document.querySelector('.scroll-up-btn a i');
const toggleDarkMode = document.querySelector('#dark-toggler');
let darkMode = false;

toggleDarkMode.addEventListener('click', e => {

    const docButtons = document.querySelectorAll('.btn');
    docButtons.forEach(btn => {
        btn.classList.toggle('myButton')
        btn.classList.toggle('btn-dark')
        btn.classList.toggle('myDarkButton')
        btn.classList.toggle('btn-light')
        
    })

    expImgs = document.querySelectorAll('.skills-img');
    if(darkMode) {
        expImgs.forEach(image => {
            if(image.src.includes("Kuwala")) {
                image.src = "./assets/KuwalaC.png";
            }
            if(image.src.includes("Slip")) {
                image.src = "./assets/SlipC.png"
            }
        })
        darkMode = false;
    } else {
        expImgs.forEach(image => {
            if(image.src.includes("Kuwala")) {
                image.src = "./assets/KuwalaDark.png";
            }
            if(image.src.includes("Slip")) {
                image.src = "./assets/SlipDark.png"
            }
        })
        darkMode = true;
    }

    toggleDarkMode.classList.toggle('uil-sun')
    toggleDarkMode.classList.toggle('uil-moon')

    const body = document.querySelector('body');

    body.classList.toggle('dark-body');
    const coolH3 = document.querySelectorAll('.cool-icons h3');
    coolH3.forEach(h3 => {
        h3.classList.toggle('orange-text');
    })
    const theNavbar = document.querySelector('nav');
    theNavbar.classList.toggle('bg-light');
    theNavbar.classList.toggle('bg-dark');
    theNavbar.classList.toggle('navbar-light')
    theNavbar.classList.toggle('navbar-dark')

    const theNavbarLIs = document.querySelectorAll('.navbar-nav .nav-item .nav-link');
    theNavbarLIs.forEach(li => {
        li.classList.toggle('white-text');
    })

   
    if(scrollBtn.style.color == "white") {
        scrollBtn.style.color = "black"
    } else {
        scrollBtn.style.color = "white"
    }

    const allSections = document.querySelectorAll('section')
    if(darkMode) {
        allSections.forEach(section => {
            section.className = "sectionDarkClass";
        })
    } else {
        allSections.forEach(section => {
            section.className = "sectionClass";
        })
    }

})

scrollBtn.addEventListener('mouseover', () => {
    if(darkMode) {
        scrollBtn.style.color = "orange";
    } else {
        scrollBtn.style.color = "blue";
    } 
});

scrollBtn.addEventListener('mouseout', () => {
    if(darkMode) {
        scrollBtn.style.color = "white"
    } else {
        scrollBtn.style.color = "black"
    }
})

// Brand name and nav link hover listeners

const sLetter = document.querySelector('#sLetter');
const iLetter = document.querySelector('#iLetter');
const mLetter = document.querySelector('#mLetter');
const oLetter = document.querySelector('#oLetter');
const nLetter = document.querySelector('#nLetter');

sLetter.addEventListener('mouseover', () => {
    if(darkMode) {
        sLetter.classList.toggle('orange-text')
    } else {
        sLetter.classList.toggle('blue-text')
    } 
});

sLetter.addEventListener('mouseout', () => {
    if(darkMode) {
        sLetter.classList.toggle('orange-text')
    } else {
        sLetter.classList.toggle('blue-text')
    }
})

iLetter.addEventListener('mouseover', () => {
    if(darkMode) {
        iLetter.classList.toggle('orange-text')
    } else {
        iLetter.classList.toggle('blue-text')
    } 
});

iLetter.addEventListener('mouseout', () => {
    if(darkMode) {
        iLetter.classList.toggle('orange-text')
    } else {
        iLetter.classList.toggle('blue-text')
    }
})

mLetter.addEventListener('mouseover', () => {
    if(darkMode) {
        mLetter.classList.toggle('orange-text')
    } else {
        mLetter.classList.toggle('blue-text')
    } 
});

mLetter.addEventListener('mouseout', () => {
    if(darkMode) {
        mLetter.classList.toggle('orange-text')
    } else {
        mLetter.classList.toggle('blue-text')
    }
})

oLetter.addEventListener('mouseover', () => {
    if(darkMode) {
        oLetter.classList.toggle('orange-text')
    } else {
        oLetter.classList.toggle('blue-text')
    } 
});

oLetter.addEventListener('mouseout', () => {
    if(darkMode) {
        oLetter.classList.toggle('orange-text')
    } else {
        oLetter.classList.toggle('blue-text')
    }
})

nLetter.addEventListener('mouseover', () => {
    if(darkMode) {
        nLetter.classList.toggle('orange-text')
    } else {
        nLetter.classList.toggle('blue-text')
    } 
});

nLetter.addEventListener('mouseout', () => {
    if(darkMode) {
        nLetter.classList.toggle('orange-text')
    } else {
        nLetter.classList.toggle('blue-text')
    }
})

const homeLink = document.querySelector('#homeLink');
const aboutLink = document.querySelector('#aboutLink');
const skillsLink = document.querySelector('#skillsLink');
const contactLink = document.querySelector('#contactLink');

homeLink.addEventListener('mouseover', () => {
    if(darkMode) {
        homeLink.classList.toggle('orange-text')
        homeLink.classList.toggle('white-text')
    } else {
        homeLink.classList.toggle('blue-text')
    } 
});

homeLink.addEventListener('mouseout', () => {
    if(darkMode) {
        homeLink.classList.toggle('orange-text')
        homeLink.classList.toggle('white-text')
    } else {
        homeLink.classList.toggle('blue-text')
    }
})

aboutLink.addEventListener('mouseover', () => {
    if(darkMode) {
        aboutLink.classList.toggle('orange-text')
        aboutLink.classList.toggle('white-text')
    } else {
        aboutLink.classList.toggle('blue-text')
    } 
});

aboutLink.addEventListener('mouseout', () => {
    if(darkMode) {
        aboutLink.classList.toggle('orange-text')
        aboutLink.classList.toggle('white-text')
    } else {
        aboutLink.classList.toggle('blue-text')
    }
})

skillsLink.addEventListener('mouseover', () => {
    if(darkMode) {
        skillsLink.classList.toggle('orange-text')
        skillsLink.classList.toggle('white-text')
    } else {
        skillsLink.classList.toggle('blue-text')
    } 
});

skillsLink.addEventListener('mouseout', () => {
    if(darkMode) {
        skillsLink.classList.toggle('orange-text')
        skillsLink.classList.toggle('white-text')
    } else {
        skillsLink.classList.toggle('blue-text')
    }
})

contactLink.addEventListener('mouseover', () => {
    if(darkMode) {
        contactLink.classList.toggle('orange-text')
        contactLink.classList.toggle('white-text')
    } else {
        contactLink.classList.toggle('blue-text')
    } 
});

contactLink.addEventListener('mouseout', () => {
    if(darkMode) {
        contactLink.classList.toggle('orange-text')
        contactLink.classList.toggle('white-text')
    } else {
        contactLink.classList.toggle('blue-text')
    }
})