let phoneImg = document.querySelector('#phone-img');
let deliverImg = document.querySelector('#deliver-img');
let gameplanImg = document.querySelector('#gameplan-img');
let contact1 = document.querySelector('#contact-1');
let contact2 = document.querySelector('#contact-2');
let contact3 = document.querySelector('#contact-3')




phoneImg.addEventListener('click', addingCallText);
deliverImg.addEventListener('click', addingDeliverText);
gameplanImg.addEventListener('click', addingGameplanText);


function addingCallText() {
  //phoneImg.classList.remove('svg-wrap');
  phoneImg.classList.add('svg-wrap-click-transition');
  contact1.classList.add('text-fade-in');
  setTimeout(addText, 1000);
  console.log('its been added');
  removeClickCall();
}

function addingDeliverText() {
  // deliverImg.classList.remove('svg-wrap');
  deliverImg.classList.add('svg-wrap-click-transition');
  contact3.classList.add('text-fade-in');
  setTimeout(addText3, 1000);
  console.log('its been added');
  removeClickDeliver();
}

function addingGameplanText() {
  // gameplanImg.classList.remove('svg-wrap');
  gameplanImg.classList.add('svg-wrap-click-transition');
  contact2.classList.add('text-fade-in');
  setTimeout(addText2, 1000);
  console.log('its been added');
  removeClickGameplan();
}


function removeClickCall() {
  phoneImg.removeEventListener('click', addingCallText);
}
function removeClickDeliver() {
  deliverImg.removeEventListener('click', addingDeliverText);
}
function removeClickGameplan() {
  gameplanImg.removeEventListener('click', addingGameplanText);
}

let addText = function(){
  let html;
  html = '<p>Now Lets see if I can make this shit work. Im at my wits end!Creating websites is my passion and with each new project, I become better at my craft. Let me design your website that will work across all devices and improve your business today!</p>';
  document.querySelector('#contact-1').insertAdjacentHTML('beforeend', html);
}

let addText2 = function(){
  let html2;
  html2 = '<p>IS THIS SHIT WORKING? WHY CANT I GET IT TO work. Im at my wits end! FUCK Creating websites! is my passion and with each new project, I become better at my craft. Let me design your website that will work across all devices and improve your business today!</p>';
  document.querySelector('#contact-2').insertAdjacentHTML('beforeend', html2);
}

let addText3 = function(){
  let html3;
  html3 = '<p> NOW I GOT THIS SHIT WORKING BUT THIS IS STILL REALLY ANNOYING FUCK THIS NONSENSE. "sobs uncontrollably shhhh shhhh its ok you will make it through this" Im at my wits end!Creating websites is my passion and with each new project, I become better at my craft. Let me design your website that will work across all devices and improve your business today!</p>';
  document.querySelector('#contact-3').insertAdjacentHTML('beforeend', html3);
}
