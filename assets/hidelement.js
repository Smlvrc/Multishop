const hidselect=document.querySelector(".hid-cont span");
const hiddenbil=document.querySelector(".row-main .hidden-bil");
hidselect.addEventListener('click', function(){
  hiddenbil.classList.toggle('active');
})