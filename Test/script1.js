function displayData() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var aboutMe = document.getElementById("aboutMe").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    document.getElementById("display").innerHTML =
      `${name} ${surname}<br><br>
      
      ${email}<br>
      ${phoneNumber}<br><br>
      ჩემს შესახებ <br> <br>
      
      ${aboutMe}`
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
  };
});

  
