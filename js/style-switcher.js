/***********===== open and close style-switcher div =====***********/
const styleSwitcherToggler=document.querySelector('.style-switcher-toggler')

styleSwitcherToggler.addEventListener("click" , ()=>{
  document.querySelector(".style-switcher").classList.toggle("open")
})

window.addEventListener("scroll" , ()=>{
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open")
  }
})


// ============== theme colors =========

const alternatStyle=document.querySelectorAll(".alternat-style")
const allColors = document.querySelectorAll(".color")

allColors.forEach( (color,index) =>{

  color.addEventListener("click" , ()=>{
    
    alternatStyle.forEach(item =>{
      item.setAttribute("disabled" , "disabled")
    })
    
    alternatStyle[index].removeAttribute("disabled")

  })

} )




// night mood and dark mood


const dayNight=document.querySelector(".day-night")

window.localStorage.setItem("theme" , "dark")

dayNight.addEventListener("click" , ()=>{
  document.body.classList.toggle("dark")

  dayNight.querySelector("i").classList.toggle("ri-sun-fill")
  dayNight.querySelector("i").classList.toggle("ri-moon-fill")
})




window.addEventListener("load" , ()=>{
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("ri-sun-fill")
  }else{
    dayNight.querySelector("i").classList.add("ri-moon-fill")
  }
})

