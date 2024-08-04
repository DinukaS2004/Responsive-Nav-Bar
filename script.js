const togglebtn=document.querySelector('.toggle_btn')
const togglebtnIcon=document.querySelector('.toggle_btn i')
const dropdownmenu=document.querySelector('.dropdown_menu')

togglebtn.onclick=function(){
    dropdownmenu.classList.toggle('open')
    const isOpen=dropdownmenu.classList.contains('open')

    togglebtnIcon.classList=isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
    
}