const nav = document.querySelector(".navbar")
const navBrand = document.querySelector(".navbar-brand")
const navLink = document.querySelectorAll(".nav-link")
const btnMenu = document.querySelector(".navbar-toggler-icon")
const button = document.querySelector(".m-btn")

window.addEventListener("scroll", () => {
  nav.classList.toggle("my-sticky", window.scrollY > 0)

  if (window.scrollY > 0) {
    button.classList.replace("btn-outline-light", "btn-outline-dark")
    navBrand.classList.replace("text-white", "text-black")
    btnMenu.classList.remove("inverted-color")
    navLink.forEach(element => {
      element.classList.replace("text-white", "text-black")
    });
  } else {
    button.classList.replace("btn-outline-dark", "btn-outline-light")
    navBrand.classList.replace("text-black", "text-white")
    btnMenu.classList.add("inverted-color")
    navLink.forEach(element => {
      element.classList.replace("text-black", "text-white")
    });
  }
})

/* solves the problem that when loading the page and being on a mobile when
  clicking on the hamburger menu, the background that shows is transparent
  and which should be white.
*/
const btnMenuHambuger = document.getElementById("btnMenuHambuger")
let flag = true

btnMenuHambuger.addEventListener("click", () => {
  nav.classList.remove("my-sticky")

  if (flag) {
    btnMenu.classList.remove("inverted-color")
    navBrand.classList.replace("text-white", "text-black")
    navLink.forEach(element => {
      element.classList.replace("text-white", "text-black")
    });
    nav.classList.add("my-sticky")
    flag = false
  } else {
    if (window.scrollY > 0) {
      navBrand.classList.replace("text-white", "text-black")
      nav.classList.add("my-sticky")
    } else {
      btnMenu.classList.add("inverted-color")
      navBrand.classList.replace("text-black", "text-white")
    }
    flag = true
  }
})


/* Activate menu links with scroll  */
/* but it does not activate the link when the section is higher than the viewport ejem(section about)*/
const sections = document.querySelectorAll(".watch-scroll")
const menuItems = document.querySelectorAll(".nav-link")

const watchScroll = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const currentItem = Array.from(menuItems).find(item => item.dataset.url === entry.target.id)
      currentItem.classList.add("active-link")
      console.log(currentItem)
      for (const item of menuItems) {
        if (item != currentItem) {
          item.classList.remove("active-link")
        }
      }
    }
  })
}

const watch = new IntersectionObserver(watchScroll, {
  root: null,
  rootMargin: "0px",
  threshold:0.8
})

sections.forEach(section => watch.observe(section))