const inputField = document.querySelector("#input-field");
const patternMessage = document.querySelector("#pattern-message");

inputField.addEventListener("input", function() {
  if (!this.validity.valid) {
    patternMessage.innerHTML = `"Input must contain only letters and numbers`;
    patternMessage.style.display = "block";
  } else {
    patternMessage.innerHTML = "";
    patternMessage.style.display = "none";
  }
});

