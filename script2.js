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