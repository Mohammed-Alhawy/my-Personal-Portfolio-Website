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
