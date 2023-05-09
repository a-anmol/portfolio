// ****************************menu declarations ************************
const navMenu = document.getElementById("navMenu"),
    navToggle = document.getElementById("navToggle"),
    navClose = document.getElementById("navClose")


// *****************************menu pop out ****************************
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('showMenu')
    })
}

// ****************************remove menu*******************************
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('showMenu')
    })
}

// **********************remove menu after item activate*****************
const navLink = document.querySelectorAll('.navLink')

function linkAction() {
    const navMenu = document.getElementById('navMenu')
    navMenu.classList.remove('showMenu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



// ******************************* skills card open ****************************
const skillsContent = document.getElementsByClassName('skillsContent'),
    skillsHeader = document.querySelectorAll('.skillsHeader')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skillsContent skillsClose'
    }

    if (itemClass === 'skillsContent skillsClose') {
        this.parentNode.className = 'skillsContent skillsOpen'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})





// *************************************** qualification *************************
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualificationActive')
        })
        target.classList.add('qualificationActive')

        tabs.forEach(tab => {
            tab.classList.remove('qualificationActive')
        })
        tab.classList.add('qualificationActive')
    })
})


// ************************************** scroll links ********************************
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navMenu a[href*=' + sectionId + ']').classList.add('activeLink')
        } else {
            document.querySelector('.navMenu a[href*=' + sectionId + ']').classList.remove('activeLink')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// ***************************** header background color ************************
function scrollHeader() {
    const nav = document.getElementById('header')
    //when the scroll is greater than 200 vh, add the scrollHeader class to the header tag
    if (this.scrollY >= 70) nav.classList.add('scrollHeader');
    else nav.classList.remove('scrollHeader')
}
window.addEventListener('scroll', scrollHeader)








// ******************************************** scroll top ***********************************
function scrollUp() {
    const scrollUp = document.getElementById('scrollUp');
    // when the scroll is higher than 560 viewport height, add the showScroll class
    if (this.scrollY >= 560) scrollUp.classList.add('showScroll');
    else scrollUp.classList.remove('showScroll')
}
window.addEventListener('scroll', scrollUp)






// ***************************************** light dark theme *********************************\
const themeButton = document.getElementById('themeButton')
const darkTheme = 'darkTheme'
const iconTheme = '#sun'
const icon = document.querySelector('#icon')
// function changeIcon(from, to) {
//     // const icon = document.querySelector('#icon')
//     icon.addEventListener('click', (e) => {
//         let iconClass = e.currentTarget.children[0].children[0];
//         iconClass.getAttribute('href') === from ?
//             iconClass.setAttribute('href', to) :
//             iconClass.setAttribute('href', from)
//     })
// }
// changeIcon('#moon', '#sun')

//previously selectd topic (if user selected)
const selectedTheme = localStorage.getItem('selectedTheme')
const selectedIcon = localStorage.getItem('selectedIcon')

// we obtain the current theme that the interface has by validating the darkTheme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon =()=>document.body.classList.contains(darkTheme) ? '#moon' : '#sun'
// const getCurrentIcon = () => document.classList.contains(iconTheme) ? 'bxMoon' : 'bxSun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    //if the validation is fulfiied, we ask what the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    icon.children[0].children[0].setAttribute("href",[selectedTheme==='dark'?'#moon':'#sun'])
    // themeButton.classList[selectedIcon === 'bxMoon' ? 'add' : 'remove'](iconTheme)
}

// activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    // themeButton.classList.toggle(iconTheme)
    // we save the theme and the current icon that the user chose
    localStorage.setItem('selectedTheme', getCurrentTheme())
    // localStorage.setItem('selectedIcon', getCurrentIcon())
    icon.children[0].children[0].getAttribute('href') === '#moon' ?
            icon.children[0].children[0].setAttribute('href', '#sun') :
            icon.children[0].children[0].setAttribute('href', '#moon')
    localStorage.setItem('selectedIcon',getCurrentIcon())
})

// ***************************** scroll