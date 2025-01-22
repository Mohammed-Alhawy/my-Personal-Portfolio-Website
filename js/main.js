// Active Link in side bar


const All_links = document.querySelectorAll(".side_bar .nav a");

All_links.forEach((Link) => {
  Link.addEventListener("click", () => {
    All_links.forEach((Link) => {
      Link.classList.remove("Active");
    });
    Link.classList.add("Active");
  });
});




// const hidden_Sections= document.querySelectorAll("#About,#Skills,#Portfolio,#Contact")

const main = document.getElementsByTagName("main")[0]

const hidden = () => {
  main.querySelectorAll("section").forEach( section=>{
    section.classList.add("hidden_Sections")
  } )
  main.querySelector("#Home").classList.remove("hidden_Sections")
}

hidden ()

All_links.forEach( (Link , index)=>{
  Link.addEventListener("click" , (eo)=>{

    main.querySelectorAll("section").forEach( section=>{
      section.classList.add("hidden_Sections")
    } )

    main.querySelectorAll("section")[index].classList.remove("hidden_Sections")

    // All_Sections[index].classList.remove("hidden_Sections")

  })
} )




// hidden_Sections.forEach( (Section)=>{
//   Section.classList.add("hidden_Sections")
// } )






// const All_Sections= document.querySelectorAll("#Home,#About,#Skills,#Portfolio,#Contact")






//   All_Sections[index].classList.remove("hidden_Sections")
// All_Sections[index].classList.add("block_Section")