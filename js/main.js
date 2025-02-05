
const opneMenu=document.querySelector('.nav-toggler')
const menu=document.querySelector('.aside')
const mainContent=document.querySelector('.main-content')

opneMenu.addEventListener("click" , ()=>{

  menu.classList.toggle("active-menu")
  mainContent.classList.toggle("main-content-active")

  if (menu.classList.contains('active-menu')) {
    opneMenu.innerHTML=`<i class="ri-close-large-fill"></i>`
    opneMenu.style.left="290px"

    chaingeSkills()

  } else {
    opneMenu.innerHTML=`<i class="ri-menu-line"></i>`
    opneMenu.style.left="30px"
    chaingeSkills2()
  }

})




// skills respoensiv style

const skillItem=document.querySelectorAll(".skill_item")


function chaingeSkills() {

  skillItem.forEach((item)=>{
    item.classList.add("skillItem")
  })

}

function chaingeSkills2() {

  skillItem.forEach((item)=>{
    item.classList.remove("skillItem")
  })

}







// menu Active close and open wethn click on link

// All_links.forEach(item =>{
//   item.addEventListener("click" , ()=>{
//     menu.classList.remove("active-menu")
//     mainContent.classList.remove("main-content-active")
//     opneMenu.innerHTML=`<i class="ri-menu-line"></i>`
//     opneMenu.style.left="30px"
//   })
// })



// Active Link in side bar with color

const All_links = document.querySelectorAll(".aside .nav a");

All_links.forEach((Link) => {

  Link.addEventListener("click", () => {

    All_links.forEach((Link) => {
      Link.classList.remove("Active");
      menu.classList.remove("active-menu")
      mainContent.classList.remove("main-content-active")
      opneMenu.innerHTML=`<i class="ri-menu-line"></i>`
      opneMenu.style.left="30px"
    });

    Link.classList.add("Active");

  });
  
});






// =====******* typing animation ******====
var typed = new Typed(".typing" , {
  strings:["Ui / Ux Developer" , "Front End Developer"],
  typedSpeed:350,
  BackSpeed:250,
  loop:true
})




// 

