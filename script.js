// ===== EVENT CONFIG =====

document.documentElement.style.setProperty(
"--hero-bg",
url('${eventData.background}')
);
document.getElementById("eventName").innerHTML =
eventData.eventName;

document.getElementById("eventOffer").innerHTML =
"🔥 " + eventData.offer + " • " + eventData.price + " 🔥";
setTimeout(function(){
document.getElementById("offerPopup").style.display="flex";
},2000);

function closePopup(){
document.getElementById("offerPopup").style.display="none";
}

window.addEventListener("load", function () {

setTimeout(function () {

const loader = document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(function(){

loader.remove();

},600);

}

},2000);

});
           
