const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const preview1 = document.querySelector(".preview1");
const preview2 = document.querySelector(".preview2");
const cloneButton = document.querySelector(".clone-button");
const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");
const form1 = document.querySelector('.form-1')

input1.addEventListener("input", function() {
    preview1.innerHTML = this.value;
});

input2.addEventListener("input", function() {
    preview2.innerHTML = this.value;
});

cloneButton.addEventListener("click", function() {
    const clonedForm = form1.cloneNode(true);
    const clonedInput1 = clonedForm.querySelector(".input1");
    const clonedInput2 = clonedForm.querySelector(".input2");
    const clonedPreview1 = document.createElement("p");
    const clonedPreview2 = document.createElement("p");

    clonedPreview1.classList.add("preview1");
    clonedPreview2.classList.add("preview2");
    leftSide.appendChild(clonedForm);
    rightSide.appendChild(clonedPreview1);
    rightSide.appendChild(clonedPreview2);

    clonedInput1.addEventListener("input", function() {
        clonedPreview1.innerHTML = this.value;
    });

    clonedInput2.addEventListener("input", function() {
        clonedPreview2.innerHTML = this.value;
    });
});
