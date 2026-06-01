// js/formSubmit.js

const contactForm = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-btn");
const successMessage = document.getElementById("success-message");
const errorMessage = document.getElementById("error-message");

contactForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  errorMessage.style.display = "none";
  submitButton.disabled = true;
  submitButton.value = "Sending...";
  submitButton.textContent = "Sending...";

  const formData = new FormData(contactForm);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      contactForm.style.display = "none";
      successMessage.style.display = "block";
    } else {
      errorMessage.style.display = "block";
      submitButton.disabled = false;
      submitButton.value = "Send message";
      submitButton.textContent = "Send message";
    }
  } catch (error) {
    errorMessage.style.display = "block";
    submitButton.disabled = false;
    submitButton.value = "Send message";
    submitButton.textContent = "Send message";
  }
});
