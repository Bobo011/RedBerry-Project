function displayData() {
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var aboutMe = document.getElementById("aboutMe").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;

  localStorage.setItem("name", name);
  localStorage.setItem("surname", surname);
  localStorage.setItem("aboutMe", aboutMe);
  localStorage.setItem("email", email);
  localStorage.setItem("phoneNumber", phoneNumber);

  document.getElementById("display").innerHTML =
    `${name} ${surname}<br><br>
      
      ${email}<br>
      ${phoneNumber}<br><br>
      ჩემს შესახებ <br> <br>
      
      ${aboutMe}`;
}

const inputField = document.getElementById("image");
const outputImage = document.getElementById("output-image");

inputField.addEventListener("change", function() {
  const file = inputField.files[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function() {
    outputImage.src = reader.result;
    localStorage.setItem("image", reader.result);
  };
});

// Get the data from local storage and populate the fields when the page loads
window.onload = function() {
  document.getElementById("name").value = localStorage.getItem("name");
  document.getElementById("surname").value = localStorage.getItem("surname");
  document.getElementById("aboutMe").value = localStorage.getItem("aboutMe");
  document.getElementById("email").value = localStorage.getItem("email");
  document.getElementById("phoneNumber").value = localStorage.getItem("phoneNumber");
  document.getElementById("output-image").src = localStorage.getItem("image");
};
