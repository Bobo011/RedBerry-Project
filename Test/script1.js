const experienceForm = document.getElementById("experience-form");
const position = document.getElementById("position");
const employer = document.getElementById("employer");
const startDate = document.getElementById("start-date");
const graduationDate = document.getElementById("graduation-date");
const description = document.getElementById("description");
const backButton = document.getElementById("back-button");
const startButton = document.getElementById("start-button");
const previewPosition = document.getElementById("previewPosition");
const previewEmployer = document.getElementById("previewEmployer");
const previewStartDate = document.getElementById("previewStartDate");
const previewGraduationDate = document.getElementById("previewGraduationDate");
const previewDescription = document.getElementById("previewDescription");

experienceForm.addEventListener("input", function() {
  previewPosition.textContent = position.value;
  previewEmployer.textContent = employer.value;
  previewStartDate.textContent = formatDate(startDate.value);
  previewGraduationDate.textContent = formatDate(graduationDate.value);
  previewDescription.textContent = description.value;
  
});

function formatDate(date) {
  const dateObject = new Date(date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return dateObject.toLocaleDateString("en-US", options);
}



if (backButton) {
  backButton.addEventListener("click", function() {
    // code to navigate back to the previous page
  });}

startButton.addEventListener("click", function() {
  // code to navigate to the start page
});
