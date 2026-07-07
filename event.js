const eventData = {



eventName: "Street Fighter",

subtitle: "Premium Phase",

offer: "Buy 3 Weekly Passes",

price: "₹310",

countdown: "July 10, 2026 00:00:00",

background: "images/streetfighter-bg.jpg"

};
// ===== COUNTDOWN =====

const countdownDate = new Date(eventData.countdown).getTime();

const timer = setInterval(function () {

const now = new Date().getTime();

const distance = countdownDate - now;

if(distance < 0){

clearInterval(timer);

document.getElementById("countdown").innerHTML =
"🔥 EVENT IS LIVE!";

return;

}

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML =
`${days}D ${hours}H ${minutes}M ${seconds}S`;

},1000);
