// Function to handle form submission
function submitForm(event) {
  event.preventDefault();

  // Use event.currentTarget to get the form element that triggered the event
  const form = event.currentTarget;

  // Form data
  const formData = new FormData(form);

  // AJAX request
  fetch(form.action, {
    method: "POST",
    headers: {
      Accept: "application/json", // Ensure that we get a JSON response instead of being redirected
    },
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Expect JSON response
    })
    .then((data) => {
      // Show success message
      document.getElementById("formMessage").innerHTML =
        '<p style="color: green;">Form submitted successfully!</p>';

      // Redirect to your custom success page
      window.location.href = "success_page.html"; // Replace with your actual success page URL

      // Optionally reset the form
      form.reset();
    })
    .catch((error) => {
      // Show error message
      document.getElementById("formMessage").innerHTML =
        '<p style="color: red;">Form submission failed. Please try again later.</p>';
    });
}

// Attach the submit event listener to all forms with the class "bookingForm"
document.querySelectorAll(".bookingForm").forEach((form) => {
  form.addEventListener("submit", submitForm);
});
