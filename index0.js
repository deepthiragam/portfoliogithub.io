const header = document.querySelector("header");
window.addEventListener("scroll", function(){

    header.classList.toggle("sticky", this.window.scrollY >100);
});

let menu=document.querySelector("#menu-icon");
let navlist=document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open')
};
// let m1=document.querySelector("m1");
// m1.onclick=()=>{
//     window.open('https://drive.google.com/file/d/18ylsEGE0myGe3d-3Z10tzltw3hTBhXpT/view?usp=drive_link')
// }
function resume(){
    window.open('https://drive.google.com/file/d/18ylsEGE0myGe3d-3Z10tzltw3hTBhXpT/view?usp=drive_link')
}