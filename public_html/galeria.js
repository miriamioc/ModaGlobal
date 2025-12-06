/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

document.addEventListener("DOMContentLoaded", function () {
    const img = document.querySelector("#galeria img");
    
    if(img){
        img.addEventListener("click", function () {
            img.classList.toggle("big");
        });
    }
});
