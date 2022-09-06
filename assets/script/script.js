var darkMode = document.getElementById('btn-dark-mode')
var darkModeOff = document.getElementById('btn-dark-mode-off')
var main = document.getElementById('main')
var aboutMe = document.getElementById('about-me')
var schoolEducation = document.getElementById('school-education')
var knowledge = document.getElementById('knowledge-row')
var darkLabel = document.getElementById('dark-mode-label')


function dark() {
    main.classList.add("main-dark")
    darkLabel.classList.add("main-dark")
    aboutMe.classList.add("divs-dark")
    schoolEducation.classList.add("divs-dark")
    knowledge.classList.add("divs-dark")
    darkModeOff.style.display = "block"
    darkModeOff.classList.add("bg-light")
    darkMode.style.display = "none"
}

function darkOff() {
    main.classList.remove("main-dark")
    darkLabel.classList.remove("main-dark")
    aboutMe.classList.remove("divs-dark")
    schoolEducation.classList.remove("divs-dark")
    knowledge.classList.remove("divs-dark")
    darkMode.style.display = "block"
    darkMode.classList.add("bg-light")
    darkModeOff.style.display = "none"
}



darkMode.addEventListener('click', dark)
darkModeOff.addEventListener('click', darkOff)