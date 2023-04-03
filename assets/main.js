// sliders
// featured slider


const btn1 = document.querySelector('.btn1');
const selectsign = document.querySelector('.selectsign');


btn1.addEventListener('click', function () {
  selectsign.classList.toggle('active')
  money.classList.remove('active')
  lang.classList.remove("active")
})



const usdBtn = document.querySelector('.usd-btn')

const money = document.querySelector('.money')

usdBtn.addEventListener('click', function () {
  money.classList.toggle('active')
  selectsign.classList.remove('active')
  lang.classList.remove("active")
})

const usdbtn3 = document.querySelector('.usd-btn3');
const lang = document.querySelector('.lang');

usdbtn3.addEventListener('click', function () {
  lang.classList.toggle('active')
  selectsign.classList.remove('active')
  money.classList.remove("active")
})

const hamburgerbtn = document.querySelector(".hamburger");
const navcontainer = document.querySelector(".nav-container")
hamburgerbtn.addEventListener('click', function () {
  navcontainer.classList.toggle('active');
})

const page = document.querySelector('.page');
const pageinner = document.querySelector(".pageinner");
page.addEventListener('click', function (event) {
  pageinner.classList.toggle('active');
  event.stopPropagation();
  event.preventDefault();
})

// Categories
const catg = document.querySelector(".catg");
const innercatg = document.querySelector(".categoires-inner");
catg.addEventListener('click', function (e) {
  innercatg.classList.toggle('active');
  e.stopPropagation();
  e.preventDefault();
})
// dresses
const dresses = document.querySelector(".dresses");
const dressdrop = document.querySelector(".dresses-drop");
dresses.addEventListener('click', function (e) {
  dressdrop.classList.toggle('active');
  e.stopPropagation();
  e.preventDefault();
})

// Pages
const page2 = document.querySelector(".pageside");
const pagesinner = document.querySelector(".pages-inner");
// page2.addEventListener('click', function(e){
//     pagesinner.classList.toggle('active');

//     e.preventDefault();
// })
page2.addEventListener("mouseover", function () {
  pagesinner.classList.add('active');

})

pagesinner.addEventListener("mouseleave", function () {
  pagesinner.classList.remove('active');
})

// animation
function scrollToTop() {
  const position = window.pageYOffset;
  if (position > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, position - Math.max(position / 10, 30));
  }
}

window.addEventListener('scroll', function () {
  var button = document.getElementById('back-to-top');
  if (window.pageYOffset > 100) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

var button = document.getElementById('back-to-top');
button.addEventListener('click', function () {
  scrollToTop();
});

// silder section right
const img1 = document.querySelector(".right-up-img");



// shop-deatil
// Select increment and decrement buttons

// shop-deatail description tab
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
//counter


const minus = document.querySelectorAll(" .minus"),
  plus = document.querySelectorAll(" .plus"),
  num = document.querySelectorAll(" .num");
var a = 1;
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener('click', function (e) {
    a = Number(num[i].innerHTML);
    if (a > 0) {
      a--;
      num[i].innerHTML = a;
    }
  })
}

c=1;
for (let v = 0; v < plus.length; v++) {
  plus[v].addEventListener('click', function () {
c=Number(num[v].innerHTML);
c++;
num[v].innerHTML=c;

  })
}

// checkout custom 
