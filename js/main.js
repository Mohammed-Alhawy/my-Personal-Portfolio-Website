/***********===== open and close menu =====***********/
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


/***********===== skills section respoensiv style =====***********/

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


/***********===== close menu wethn click on link =====***********/

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



// /////////////

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav a[href*=" + sectionId + "]").classList.add("Active");
    } else {
      document.querySelector(".nav a[href*=" + sectionId + "]").classList.remove("Active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

