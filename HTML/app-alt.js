// Define the section names, and the text that should appear in them
const sections = [
  {
    className: "anim-phone",
    text:
      "<p>Now Lets see if I can make this shit work. Im at my wits end!Creating websites is my passion and with each new project, I become better at my craft. Let me design your website that will work across all devices and improve your business today!</p>"
  },
  {
    className: "anim-game",
    text:
      "<p>IS THIS SHIT WORKING? WHY CANT I GET IT TO work. Im at my wits end! FUCK Creating websites! is my passion and with each new project, I become better at my craft. Let me design your website that will work across all devices and improve your business today!</p>"
  },
  {
    className: "anim-deliver",
    text:
      '<p> NOW I GOT THIS SHIT WORKING BUT THIS IS STILL REALLY ANNOYING FUCK THIS NONSENSE. "sobs uncontrollably shhhh shhhh its ok you will make it through this" Im at my wits end!Creating websites is my passion and with each new project, I become better at my craft. Let me design your website that will work across all devices and improve your business today!</p>'
  }
];

// loop through the sections above, and bind the click event to each one.
sections.forEach(function(section) {
  // grab the section
  const $section = document.querySelector("." + section.className);
  // attach click
  $section.addEventListener("click", function() {
    // we don't want this called right away, so its wrapped in an anon func
    handleClick($section, section.text);
  });
});

/**
 * Function to bind a click event.
 * Takes
 * - element bound to
 * - text to add
 */
function handleClick(elem, text) {
  // on click, find the child image, and add a class to it
  elem.querySelector(".js-svg").classList.add("svg-wrap-click-transition");

  // find the contact list, and add fade in to it
  const $text = elem.querySelector(".js-text");

  // finally, set a timeout, and append the object text to the section
  setTimeout(function() {
    $text.classList.add("text-fade-in");
    $text.insertAdjacentHTML("beforeend", text);
  }, 1000);
}
