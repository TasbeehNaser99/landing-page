/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


// Define Global Variables
 
const sections= document.querySelectorAll(".section")
const navList=document.getElementById("navbar__list");

// build the nav
sections.forEach(section=>{
    const li=document.createElement("li");
    const a=document.createElement('a');
    a.innerHTML=section.getAttribute('data-nav');
    a.href=`#${section.id}`;
    a.classList.add('navbarLink');
    
    li.append(a);
    navList.append(li);
    a.addEventListener('click', function(event) {
        event.preventDefault();
        section.scrollIntoView({ behavior: 'smooth' });
    });
 
})
// get anchor from page
const a=document.querySelectorAll('a');
//helper method to add class active when click
function handelClick(event){
    a.forEach(a=>{
        a.classList.remove('active')
    })
event.target.classList.add('active');
}
// add class active when click
a.forEach(a=>a.addEventListener('click',handelClick));

//check if section within a specified top
 const isActive=(section)=>{
const size=section.getBoundingClientRect();
console.log(size.top>=0 && size.top<150)
return size.top>=0 && size.top<window.innerHeight/2;
}
// Set sections as active
function makeActive(){
sections.forEach(section=>{if(isActive(section)){
    a.forEach(a=>{
        a.classList.remove('active')
    })
    let link=document.querySelector(`a[href="#${section.id}"]`);
    link.classList.add('active');
}});};

//add active to anchor when scroll
window.addEventListener('scroll', makeActive);

