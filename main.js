const openMenuBtn = document.querySelector('.open-menu')
const closeMenuBtn = document.querySelector('.close-menu')
const searchBtn = document.querySelector('.nav-icons #icons #search-icon')
const loginBtn = document.querySelector('.nav-icons #icons #login-icon')
const backToTopBtn = document.querySelector('#backToTopBtn')
const darkModeBtn = document.querySelector('#dark-mode-btn')

let productContainer = document.querySelectorAll('.product-container')
const loadMoreBtn = document.querySelector('button#load-more-btn')
let currentImg = 4

// == NAV BUTTONS ==

openMenuBtn.addEventListener("click", () => {
  document.body.classList.add('menu-expanded')
})

closeMenuBtn.addEventListener("click", () => {
  document.body.classList.remove('menu-expanded')
})

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

searchBtn.addEventListener("click", () => {
  document.body.classList.add('search-expanded')
})

function closeSearch() {
  document.body.classList.remove('search-expanded')
}

loginBtn.addEventListener("click", () => {
  document.body.classList.add('login-expanded')
})

function closeLogin() {
  document.body.classList.remove('login-expanded')
}

// Scroll

function onScroll() {
  // Nav + backToTopBtn
  if (scrollY > 0) {
    document.body.classList.add('scroll')
  } else {
    document.body.classList.remove('scroll')
  }

  if(scrollY > 300) {
    backToTopBtn.classList.add('active')
  } else {
    backToTopBtn.classList.remove('active')
  }
}

// == PRODUCTS - LOAD MORE BTN ==

loadMoreBtn.addEventListener('click', () => {
  for(let i = currentImg; i < currentImg + 4; i++) {
    if(productContainer[i]) {
      productContainer[i].style.display = 'initial'
    }
  }
  currentImg += 4

  if(currentImg >= productContainer.length) {
    loadMoreBtn.style.display = 'none'
  }
})

// == DARK MODE ==

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode")
  darkModeBtn.classList.toggle('to-light-mode')
})

// == SCROLL REVEAL ==

ScrollReveal({
  origin: 'left',
  distance: '90px',
  duration: 1500
}).reveal(
  `#home .wrapper .col`
)

ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 1500
}).reveal(
  `#products header,
  #products .content,
  #products #load-more-btn,
  #cards .wrapper .card,
  #costumers header,
  #costumers .content,
  #contact header,
  #contact .content`
)
