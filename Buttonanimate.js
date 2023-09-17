// Get references to the buttons and the div elements
const projectsButton = document.getElementById("projectsButton");
const aboutMeButton = document.getElementById("aboutMeButton");
const div1 = document.getElementById("projects");
const div2 = document.getElementById("aboutme");
const btn = document.getElementsByClassName("btnanimation");

// Add click event listeners to the buttons
projectsButton.addEventListener("click", () => {

  // Check if the "Projects" button is already "true"
  if (projectsButton.getAttribute("data-value") === "true") {
    // Hide div2 and show div1 with a smooth fade animation
    div2.classList.remove("visible");
    div1.classList.add("visible");
    return; // Do nothing else if it's already "true"
  }

  // Toggle the data-value attribute to "true" for the "Projects" button
  projectsButton.setAttribute("data-value", "true");
  aboutMeButton.setAttribute("data-value", "false"); // Set the other button to "false"

  // Show div1 and hide div2 with a smooth fade animation
  div1.classList.add("visible");
  div2.classList.remove("visible");
});

aboutMeButton.addEventListener("click", () => {
  // Check if the "About me" button is already "true"
  if (aboutMeButton.getAttribute("data-value") === "true") {
    // Hide div1 and show div2 with a smooth fade animation
    div1.classList.remove("visible");
    div2.classList.add("visible");
    return; // Do nothing else if it's already "true"
  }

  // Toggle the data-value attribute to "true" for the "About me" button
  aboutMeButton.setAttribute("data-value", "true");
  projectsButton.setAttribute("data-value", "false"); // Set the other button to "false"

  // Show div2 and hide div1 with a smooth fade animation
  div2.classList.add("visible");
  div1.classList.remove("visible");
});

// Buttonanimate.js


document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".wrapper");
  const projectsButton = document.getElementById("projectsButton");
  const aboutMeButton = document.getElementById("aboutMeButton");
  
  // Add click event listeners to both buttons
  projectsButton.addEventListener("click", function () {
    // Remove the "left" property from the wrapper
    wrapper.style.removeProperty("left");
  });

  aboutMeButton.addEventListener("click", function () {
    // Remove the "left" property from the wrapper
    wrapper.style.removeProperty("left");
  });
});




