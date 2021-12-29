console.log("hi")

let menuBtn = document.getElementById('menuBtn')
let closeBtn = document.getElementById('closeBtn')
let sideMenu = document.getElementById('sideMenu')
console.log(sideMenu)
console.log(closeBtn)

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active')
    sideMenu.classList.toggle('sideMenuactive')
})

closeBtn.addEventListener('click', function () {
    menuBtn.classList.remove('active')
    sideMenu.classList.remove('sideMenuactive')
})

document.onclick = function (e) {
    if (e.target.id !== 'sideMenu' && e.target.id !== 'menuBtn') {
        sideMenu.classList.remove('sideMenuactive')
        menuBtn.classList.remove('active')

    }
}

