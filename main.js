// Drop-down-menu
const dmb = document.querySelector('.dropmenubutton')
const dm = document.querySelector('.dropmenu')

dmb.addEventListener('click', ()=>{
    dmb.classList.toggle('dropmenubutton-add')
    dm.classList.toggle('dropmenu-active')
})



// Language choose
const langbutton = document.querySelector('.langbutton')
const langbutton2 = document.querySelector('.langbutton2')
const languages = document.querySelector('.languages')
const languages2 = document.querySelector('.languages2')

console.log(langbutton)
console.log(langbutton2)
console.log(languages)
console.log(languages2)

langbutton.addEventListener('click', ()=>{
    languages.classList.toggle('none')
    console.log('12345')
})
langbutton2.addEventListener('click', ()=>{
    languages2.classList.toggle('none')
    console.log('12345')
})
