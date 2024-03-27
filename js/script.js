const switchToggle=document.querySelector('input[type="checkbox"]');
const toggleIcon=document.getElementById('toggle-icon');
const nav=document.getElementById('nav');

function switchMode(e){
   if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        darkMode();
        imageSwitchMode('dark');
   }else{
        document.documentElement.setAttribute('data-theme','light');
        lightMode();
        imageSwitchMode('light');
   }
}
function darkMode(){
    toggleIcon.children[0].textContent="โหมดกลางคืน";
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    nav.style.backgroundColor='rgb(0 0 0 / 50%)';
}
function lightMode(){
    toggleIcon.children[0].textContent="โหมดกลางวัน";
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    nav.style.backgroundColor='rgb(255 255 255 / 50%)';
}

switchToggle.addEventListener('change',switchMode);

// popup
function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    var overlay = document.getElementById('overlay');
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

    function closePopup(popupId) {
        var popup = document.getElementById(popupId);
        var overlay = document.getElementById('overlay');
        popup.style.display = 'none';
        overlay.style.display = 'none';
      }
// document.getElementById("myModal").style.display = "none"

// function showmodal(){
//     document.getElementById("myModal").style.display = "block"
// }
// function deletemodal(){
//     document.getElementById("myModal").style.display = "none"
// }

window.addEventListener('click',e=>e.target == modal ? modal.classList.remove('modal') : false);
function closeAllPopups() {
    var popups = document.querySelectorAll('.popup');
    var overlay = document.getElementById('overlay');
    popups.forEach(function(popup) {
    popup.style.display = 'none';
        });
    overlay.style.display = 'none';
    }

    // popupgame

    function openPopup(popupId) {
        var popup = document.getElementById(popupId);
        var overlay = document.getElementById('overlay');
        popup.style.display = 'block';
        overlay.style.display = 'block';
      }
      
      function closePopup(popupId) {
        var popup = document.getElementById(popupId);
        var overlay = document.getElementById('overlay');
        popup.style.display = 'none';
        overlay.style.display = 'none';
      }
      
      function changeImage(imageSrc) {
        var image = document.getElementById('myImage');
        image.src = imageSrc;
        closePopup('imagePopup');
      }