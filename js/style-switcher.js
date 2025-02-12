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
const body = document.body;


if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");

  dayNight.querySelector("i").classList.add("ri-sun-fill")
  dayNight.querySelector("i").classList.remove("ri-moon-fill")
}else{
  dayNight.querySelector("i").classList.add("ri-moon-fill")
  dayNight.querySelector("i").classList.remove("ri-sun-fill")
}

dayNight.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");

      dayNight.querySelector("i").classList.add("ri-sun-fill")
      dayNight.querySelector("i").classList.remove("ri-moon-fill")
  } else {
      localStorage.setItem("theme", "light");
      
      dayNight.querySelector("i").classList.add("ri-moon-fill")
      dayNight.querySelector("i").classList.remove("ri-sun-fill")
  }
});


