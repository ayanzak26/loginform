const Singupbutton = document.getElementById('singupButton');
const Singinbutton = document.getElementById('singinbutton');
const singinform = document.getElementById('sing-In');
const singupform = document.getElementById('sing-up');

Singupbutton.addEventListener('click', function(){
    singinform.style.display="none";
    singupform.style.display="block";
})
Singinbutton.addEventListener('click', function(){
    singinform.style.display="block";
    singupform.style.display="none";
})