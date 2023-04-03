
// sorting and showing click
const sortingbtn=document.querySelector("#sorting-button");
const sortingdown=document.querySelector(".sorting-down");
sortingbtn.addEventListener('click', function(){
  sortingdown.classList.toggle("active");
  showingdown.classList.remove("active");
})

const showingbtn=document.querySelector("#showing-button");
const showingdown=document.querySelector(".showing-down");
showingbtn.addEventListener("click", function(e){
  showingdown.classList.toggle("active");
  sortingdown.classList.remove("active");
})