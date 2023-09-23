// Get references to the modals and buttons
const modal1 = document.getElementById('myModal1');
const openModalBtn1 = document.getElementById('openModalBtn1');
const closeModalBtn1 = document.getElementById('closeModalBtn1');
const modal2 = document.getElementById('myModal2');
const openModalBtn2 = document.getElementById('openModalBtn2');
const closeModalBtn2 = document.getElementById('closeModalBtn2');

// Function to open Modal 1
function openModal1() {
    modal1.style.display = 'block';
}

// Function to close Modal 1
function closeModal1() {
    modal1.style.display = 'none';
}

// Event listeners for Modal 1
openModalBtn1.addEventListener('click', openModal1);
closeModalBtn1.addEventListener('click', closeModal1);

// Function to open Modal 2
function openModal2() {
    modal2.style.display = 'block';
}

// Function to close Modal 2
function closeModal2() {
    modal2.style.display = 'none';
}

// Event listeners for Modal 2
openModalBtn2.addEventListener('click', openModal2);
closeModalBtn2.addEventListener('click', closeModal2);

// Close the modals if the user clicks outside of them
window.addEventListener('click', (event) => {
    if (event.target === modal1) {
        closeModal1();
    } else if (event.target === modal2) {
        closeModal2();
    }
});


// script.js
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const breadcrumbLinks = document.querySelectorAll(".breadcrumb a");

  // Function to update the active breadcrumb based on scroll position
  function updateActiveBreadcrumb() {
      sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          const link = breadcrumbLinks[index];

          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
              // Section is in the viewport
              link.classList.add("active");
          } else {
              // Section is out of the viewport
              link.classList.remove("active");
          }
      });
  }

  // Initial call to set the active breadcrumb
  updateActiveBreadcrumb();

  // Listen for scroll events and update the active breadcrumb accordingly
  window.addEventListener("scroll", updateActiveBreadcrumb);
});
