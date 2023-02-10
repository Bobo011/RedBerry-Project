const experienceForm = document.querySelector(".experience-form");
const position = document.querySelector(".position");
const employer = document.querySelector(".employer");
const startDate = document.querySelector(".start-date");
const graduationDate = document.querySelector(".graduation-date");
const description = document.querySelector(".description");
const backButton = document.querySelector(".back-button");
const nextButton = document.querySelector(".next-button");
const previewPosition = document.querySelector(".previewPosition");
const previewEmployer = document.querySelector(".previewEmployer");
const previewStartDate = document.querySelector(".previewStartDate");
const previewGraduationDate = document.querySelector(".previewGraduationDate");
const previewDescription = document.querySelector(".previewDescription");

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

nextButton.addEventListener("click", function() {
  // code to navigate to the start page
});

const addAnotherButton = document.querySelector(".add-another");
const formSection = document.querySelector(".form-section");

addAnotherButton.addEventListener("click", function() {
  const formClone = experienceForm.cloneNode(true);
  formSection.appendChild(formClone);

});


experienceForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const experience = {
    position: position.value,
    employer: employer.value,
    startDate: startDate.value,
    graduationDate: graduationDate.value,
    description: description.value
  };
  
  localStorage.setItem("experience", JSON.stringify(experience));
});


const storedExperience = localStorage.getItem("experience");
const experience = storedExperience ? JSON.parse(storedExperience) : {};

previewPosition.textContent = experience.position || "";
previewEmployer.textContent = experience.employer || "";
previewStartDate.textContent = formatDate(experience.startDate) || "";
previewGraduationDate.textContent = formatDate(experience.graduationDate) || "";
previewDescription.textContent = experience.description || "";




