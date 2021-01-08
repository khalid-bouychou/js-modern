/* GET ATTRIBUTE FROM DOM API 

    const anchor = document.querySelector('a')
         anchor.setAttribute('href' , 'https//facebook.com')
    anchor.innerText = 'Facebook'

    const h1 = document.querySelector('h1')
    h1.setAttribute('class','error')
    h1.setAttribute('style','color:red')
    console.log(div.getAttribute('class'))

///--- best techniqu to chnage style ------

    const h1=document.querySelector('h1')
    h1.style.margin = '5rem'
    h1.style.color = 'blue'
    h1.style.fontSize='100px'
 
 ///--- desable  style 
    h1.style.color = ''


*/
/*  add or delete Class in DOM API 
// classes integre in html 
const para = document.querySelector('p')
para.classList.add('error')
para.classList.remoe('error')

// exercice 
const add_class_style =()=>{
    const paras = document.querySelectorAll('p')

    paras.forEach((para) => {

    if (para.innerText.includes('sucess')) {
        para.classList.add('sucess')
    }
    if (para.innerText.includes('error')) {
        para.classList.add('error')
    }
})
}
add_class_style()

*/

/*  Handling Parent Childen DOM  

const myfirstDiv = document.querySelector('div') // get first div

// convert collectio to array
const myCollection = Array.from(myfirstDiv.children)
myCollection.forEach((element)=>{

})

// parent div 
myfirstDiv.parentElement
// les frere 
myfirstDiv.nextElementSibling
// retour a frere 
myfirstDiv.nextElementSibling.previousElementSibling
*/

/*  -------- Events ----- 

 ///---------AssEventlisterner - Event Click 
 const btn = document.querySelector('button')
 btn.addEventListener('click',() =>{
     console.log('button clicked');
 })
 
 //get all tag li
 const items = document.querySelectorAll('li')
 items.forEach(item=>{
     item.addEventListener('click' , (e)=>{
         //applique  style 
         e.target.style.textDecoration='line-through'
     })
 })


*/

/* -----Add & Delete element from DOM API 

// delete from ul
const li = document.querySelectorAll('li')
li.forEach(li=>{
    li.addEventListener('click' , (e)=>{
        //remove li from ul 
        e.target.remove()
    })
})
// add in ul 
const ul = document.querySelector('ul')
const btn = document.querySelector('button')
 btn.addEventListener('click',() =>{
     const li =  document.createElement('li')
     li.textContent = ' New Tag Li '
    //  ul.prepend(li)
     ul.append(li)
 })
*/

/* ----  Event Propagation & Delegation ---

const ul = document.querySelector('ul')
ul.addEventListener('click' , (e) => {
    // delegation 
    console.log(e.target);
    // remove children (li)
    e.target.remove()
    // console.log('i am Ul Tag ');
})

const tags_li = document.querySelectorAll('li')
tags_li.forEach( li => {
    li.addEventListener('click' , (e) => {
        // stop event click (ul) parent 
        e.stopPropagation();
        console.log('i am Tag li ');
    })
})
*/

/* ------ Event Copy & Mousemove
// event copy
const content = document.querySelector('body')
content.addEventListener('copy' , ()=>{
     alert('please my content is copyright')
})

// event mouseover

const myzone = document.querySelector('.zone')
const span = document.querySelector('span')
myzone.addEventListener('mousemove' , (e) => {
        span.innerHTML = ` X : ${e.offsetX} - Y : ${e.offsetY}`
})
*/


