/*
experience state structure:
const experiencesArr = [
  {
    school: string,
    quality: string
    startDate: dateString
    endDate: dateString
    desc: string
  }
]

const renderRightSide = () => {
  1. render name, email, number, image, about me
  2. render experience data:
    should use a loop for it
    ----------------------------------------------------------------------------------
      const experiencesWrapperDiv = document.querySelector('#experiencesWrapperDiv')
      let experiencesHTMLString = ''
      for(let x = 0; x < experiencesArr.length; x++){
        const curExp = experiencesArr[x]
        experiencesHTMLString += `
          <div>
            <div>
            ${curExp.school}
            </div>
            <div>${curExp.startDate} - ${curExp.endDate}</div>
            <p>${curExp.desc}</p>
          </div>
        `
      }
      experiencesWrapperDiv.innerHTML = experiencesHTMLString
    -----------------------------------------------------------------------------------
    2. render input boxes
      after rendering we need to re-attach events and event handlers for every input
      we also need to map inputs of each experience box to each box on the right side
      const expFormsWrapper = document.querySelector...
      for(let x = 0; x < experiencesArr.length; x++){
        appendFormHTMLToWrapper() -> expFormsWrapper.append(markup)
        connectEventHandlersToFormInputs()
          query for every input -> example const schoolInputs = document.querySelectorAll('school-input')
          schoolInputs[schoolInputs.length - 1].addEventListener('change', () => {
            ...some logic that runs on change of every field -> should save values to localStorage
          })

      }
    3. click "Add new experience"
      should add new object to experiencesArr.push({ ...setup props with empty values })
      run function that executes "step 2"
    4. on change of every field -> store values inside of the localStorage
      [fieldDomNode1, fieldDomNode2,...].forEach((el) => {
        el.addEventListener('change', () => {
          ...some logic that runs on change of every field
        })
      })
}
*/



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
const cloneButton = document.querySelector(".add-another");

//Adds preview
position.addEventListener("input", function () {
  previewPosition.innerHTML = this.value;
});
employer.addEventListener("input", function () {
  previewEmployer.innerHTML = this.value;
});
startDate.addEventListener("input", function () {
  previewStartDate.innerHTML = formatDate(this.value);
});
graduationDate.addEventListener("input", function () {
  previewGraduationDate.innerHTML = formatDate(this.value);
});
description.addEventListener("input", function () {
  previewDescription.innerHTML = this.value;
});

//adds clones

cloneButton.addEventListener("click", function () {
  const clonedForm = experienceForm.cloneNode(true);
  const clonedPosition = clonedForm.querySelector(".position");
  const clonedPositionPreview = document.createElement("p");
  const clonedEmployer = clonedForm.querySelector(".employer");
  const clonedEmployerPreview = document.createElement("p");
  const clonedStartDate = clonedForm.querySelector(".start-date");
  const clonedStartDatePreview = document.createElement("p");
  const clonedGraduationDate = clonedForm.querySelector(".graduation-date");
  const clonedGraduationDatePreview = document.createElement("p");
  const clonedDescription = clonedForm.querySelector(".description");
  const clonedDescriptionPreview = document.createElement("p");
  const rightHalf = document.querySelector('.preview-section')
  

  clonedPositionPreview.classList.add("previewPosition");
  clonedEmployerPreview.classList.add("previewEmployer");
  clonedStartDatePreview.classList.add("previewStartDate");
  clonedGraduationDatePreview.classList.add("previewGraduationDate");
  clonedDescriptionPreview.classList.add("previewDescription");
  formSection.appendChild(clonedForm);
  rightHalf.appendChild(clonedPositionPreview);
  rightHalf.appendChild(clonedEmployerPreview);
  rightHalf.appendChild(clonedStartDatePreview);
  rightHalf.appendChild(clonedGraduationDatePreview);
  rightHalf.appendChild(clonedDescriptionPreview);

  clonedPosition.addEventListener("input", function () {
    clonedPositionPreview.innerHTML = this.value;
  });

  clonedEmployer.addEventListener("input", function () {
    clonedEmployerPreview.innerHTML = this.value;
  });

  clonedStartDate.addEventListener("input", function () {
    clonedStartDatePreview.innerHTML = formatDate(this.value);
  });

  clonedGraduationDate.addEventListener("input", function () {
    clonedGraduationDatePreview.innerHTML = formatDate(this.value);
  });

  clonedDescription.addEventListener("input", function () {
    clonedDescriptionPreview.innerHTML = this.value;
  });
});

//clones the form
const addAnotherButton = document.querySelector(".add-another");
const formSection = document.querySelector(".form-section");

//local Storage
experienceForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Generate a unique key for each form submit
  const key = `experience-${new Date().getTime()}`;

  const experience = {
    position: position.value,
    employer: employer.value,
    startDate: startDate.value,
    graduationDate: graduationDate.value,
    description: description.value,
  };

  localStorage.setItem(key, JSON.stringify(experience));
});

const storedExperience = localStorage.getItem("experience");
const experience = storedExperience ? JSON.parse(storedExperience) : {};

previewPosition.textContent = experience.position || "";
previewEmployer.textContent = experience.employer || "";
previewStartDate.textContent = formatDate(experience.startDate) || "";
previewGraduationDate.textContent = formatDate(experience.graduationDate) || "";
previewDescription.textContent = experience.description || "";

if (backButton) {
  backButton.addEventListener("click", function () {
    // code to navigate back to the previous page
  });
}

nextButton.addEventListener("click", function () {
  // code to navigate to the start page
});

function formatDate(date) {
  const dateObject = new Date(date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return dateObject.toLocaleDateString("en-US", options);
}
