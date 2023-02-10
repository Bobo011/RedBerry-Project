//ინფორმაციის შეყვანა first-step-form
function displayData() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var aboutMe = document.getElementById("aboutMe").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
  //ლოკალურ სტორიჯში ჩაწერა
    localStorage.setItem("name", name);
    localStorage.setItem("surname", surname);
    localStorage.setItem("aboutMe", aboutMe);
    localStorage.setItem("email", email);
    localStorage.setItem("phoneNumber", phoneNumber);
  
    document.getElementById("display").innerHTML =
      `<div id='name-surname'>${name} ${surname}</div><br><br>
        
        ${email}<br>
        ${phoneNumber}<br><br>
        <b>ჩემს შესახებ</b> <br> <br>
        
        ${aboutMe}`;
  }
  //ნახატის ატვირთვა და გამოქვეყნება
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

  function submitFirstStepForm(e){
    e.preventDefault()
    displayData()
    window.location.href="./secondStepPage.html"
  }
  
  // ლოკალური სტორიჯიდან ინფორმაციის ამოღება და ატვირთვა, ეს რეფრეშის დროს, ინფორმაციის 
  //დაკარგვისგან იცავს.
  window.onload = function() {
    document.getElementById("name").value = localStorage.getItem("name");
    document.getElementById("surname").value = localStorage.getItem("surname");
    document.getElementById("aboutMe").value = localStorage.getItem("aboutMe");
    document.getElementById("email").value = localStorage.getItem("email");
    document.getElementById("phoneNumber").value = localStorage.getItem("phoneNumber");
    document.getElementById("output-image").src = localStorage.getItem("image");

    var name = document.getElementById("name");
    var surname = document.getElementById("surname");
    var aboutMe = document.getElementById("aboutMe");
    var email = document.getElementById("email");
    var phoneNumber = document.getElementById("phoneNumber");
    [name, surname, aboutMe, email, phoneNumber].forEach((el) => {
      el.addEventListener('change', () => { displayData() })
    })

    displayData()

    const firstStepFrom = document.querySelector('#first-step-form')
    firstStepFrom.addEventListener('submit', (e) => submitFirstStepForm(e))


    // var imageData = localStorage().toDataURL('image/png');
    function loadURLToInputFiled(url){
      getImgURL(url, (imgBlob)=>{
        let fileName = 'hasFilename.jpg'
        let file = new File([imgBlob], fileName,{type:"image/jpeg", lastModified:new Date().getTime()}, 'utf-8');
        let container = new DataTransfer(); 
        container.items.add(file);
        document.querySelector('#image').files = container.files;
        
      })
    }
    // xmlHTTP return blob respond
    function getImgURL(url, callback){
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
          callback(xhr.response);
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    }

    loadURLToInputFiled(localStorage.getItem("image"))
    
  };
  