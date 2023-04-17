// MODAL

const button = document.querySelector("button")

const buttonClose = document.querySelector("dialog button")

const S1 = document.querySelector("dialog")

button.onclick = function (){
    S1.showModal()
}

buttonClose.onclick = function() {
    S1.close()
 }

// const buttonClose = document.querySelector("S2 button")

// const S2 = document.querySelector("S2")

// button.onclick = function (){
//     S2.showModal()
// }

// buttonClose.onclick = function() {
//     S2.close()
// }






// IR PARA AS PARTES

// Observação: Falar sobre tentativa

// let servicesSection = $('#services-area'); 
// let testemonySection = $('#testemony container'); 
// let aboutSection = $('#about-area'); 

// let scrollTo = ''; 
// $(navBtn).click(function() {

//     let btnId = $(this).attr('id'); 

//     console.log(btnId); 

//     if(btnId == 'Services-menu'){
//         scrollTo == servicesSection; 
//     }
//     else if(btnId == 'Testemony-menu'){
//         scrollTo ==  testemonySection; 
//     }
//     else if (btnId == 'About-menu') {
//         scrollTo ==  aboutSection; 
//     }

//     $([document.documentElement, document.body]).animate({
//         scrollTop: $(scrollTo).offset().top - 70
//     }, 1500);
// })