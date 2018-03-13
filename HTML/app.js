let phoneImg, deliverImg, gameplanImg, contact1, contact2, contact3, phoneClick, gameplanClick, deliverClick, functionObject;

phoneImg = document.querySelector('#phone-img');
deliverImg = document.querySelector('#deliver-img');
gameplanImg = document.querySelector('#gameplan-img');
contact1 = document.querySelector('#contact-1');
contact2 = document.querySelector('#contact-2');
contact3 = document.querySelector('#contact-3');

let addText = function() {
  let html = '';
  switch (click) {
    case '1':
      html = '<p>Now Lets see if I can make this shit work. Im at my wits end!Creating websites is my passion and with each new project, I become better at my craft. Let me design your website that will work across all devices and improve your business today!</p>';
      document.querySelector('#contact-1').insertAdjacentHTML('beforeend', html);
      console.log("hello");
      break;
    case '2':
      html = '<p>IS THIS SHIT WORKING? WHY CANT I GET IT TO work. Im at my wits end! FUCK Creating websites! is my passion and with each new project, I become better at my craft. Let me design your website that will work across all devices and improve your business today!</p>';
      document.querySelector('#contact-3').insertAdjacentHTML('beforeend', html);
      break;
    case '3':
      html = '<p> NOW I GOT THIS SHIT WORKING BUT THIS IS STILL REALLY ANNOYING FUCK THIS NONSENSE. "sobs uncontrollably shhhh shhhh its ok you will make it through this" Im at my wits end!Creating websites is my passion and with each new project, I become better at my craft. Let me design your website that will work across all devices and improve your business today!</p>';
      document.querySelector('#contact-2').insertAdjacentHTML('beforeend', html);
      break;
  }
}

functionObject = {

  func1: function() {
      click = '1';
      phoneImg.classList.add('svg-wrap-click-transition');
      contact1.classList.add('text-fade-in');
      setTimeout(addText, 1000);
      phoneImg.removeEventListener('click', functionObject.func1);
    },
  func2: function() {
      click = '3';
      gameplanImg.classList.add('svg-wrap-click-transition');
      contact2.classList.add('text-fade-in');
      setTimeout(addText, 1000);
      console.log('its been added');
      gameplanImg.removeEventListener('click', functionObject.func2);
    },
  func3: function() {
      click = '2';
      deliverImg.classList.add('svg-wrap-click-transition');
      contact3.classList.add('text-fade-in');
      setTimeout(addText, 1000);
      console.log('its been added');
      deliverImg.removeEventListener('click', functionObject.func3);
    }
}

phoneImg.addEventListener('click', functionObject.func1);
deliverImg.addEventListener('click', functionObject.func3);
gameplanImg.addEventListener('click', functionObject.func2);



// Old code before refactoring ////


/* let phoneImg, deliverImg, gameplanImg, contact1, contact2, contact3;

phoneImg = document.querySelector('#phone-img');
deliverImg = document.querySelector('#deliver-img');
gameplanImg = document.querySelector('#gameplan-img');
contact1 = document.querySelector('#contact-1');
contact2 = document.querySelector('#contact-2');
contact3 = document.querySelector('#contact-3');

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
} */
