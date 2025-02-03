// Active Link in side bar


const All_links = document.querySelectorAll(".aside .nav a");
console.log(All_links)

All_links.forEach((Link) => {
  Link.addEventListener("click", () => {
    All_links.forEach((Link) => {
      Link.classList.remove("Active");
    });
    Link.classList.add("Active");
  });
});




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

