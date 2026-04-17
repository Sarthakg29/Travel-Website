let adults = 10;
let children = 10;

function toggleGuestMenu(){
  const menu = document.getElementById("guestMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function changeCount(type, delta){
  if(type === 'adult'){
    adults = Math.max(0, adults + delta);
    document.getElementById("adultCount").innerText = adults;
  } else {
    children = Math.max(0, children + delta);
    document.getElementById("childCount").innerText = children;
  }
  updateGuestText();
}

function updateGuestText(){
  const total = adults + children;
  document.getElementById("guestText").innerText = total + " Person";
}

window.onclick = function(e){
  if(!e.target.closest('.guest-field')){
    document.getElementById("guestMenu").style.display = "none";
  }
}