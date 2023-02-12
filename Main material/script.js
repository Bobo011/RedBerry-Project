//ინფორმაციის შეყვანა first-step-form
function displayData() {
    var name = document.querySelector(".name").value;
    var surname = document.querySelector(".surname").value;
    var aboutMe = document.querySelector(".aboutMe").value;
    var email = document.querySelector(".email").value;
    var phoneNumber = document.querySelector(".phoneNumber").value;
  //ლოკალურ სტორიჯში ჩაწერა
    localStorage.setItem("name", name);
    localStorage.setItem("surname", surname);
    localStorage.setItem("aboutMe", aboutMe);
    localStorage.setItem("email", email);
    localStorage.setItem("phoneNumber", phoneNumber);
  
    document.querySelector(".display").innerHTML =
      `<div id='name-surname'>${name} ${surname}</div><br><br>
        
        ${email}<br>
        ${phoneNumber}<br><br>
        <b>ჩემს შესახებ</b> <br> <br>
        
        ${aboutMe}`;
  }
  //ნახატის ატვირთვა და გამოქვეყნება
  const inputField = document.querySelector(".image");
  const outputImage = document.querySelector(".output-image");
  
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
    document.querySelector(".name").value = localStorage.getItem("name");
    document.querySelector(".surname").value = localStorage.getItem("surname");
    document.querySelector(".aboutMe").value = localStorage.getItem("aboutMe");
    document.querySelector(".email").value = localStorage.getItem("email");
    document.querySelector(".phoneNumber").value = localStorage.getItem("phoneNumber");
    document.querySelector(".output-image").src = localStorage.getItem("image");

    var name = document.querySelector(".name");
    var surname = document.querySelector(".surname");
    var aboutMe = document.querySelector(".aboutMe");
    var email = document.querySelector(".email");
    var phoneNumber = document.querySelector(".phoneNumber");
    [name, surname, aboutMe, email, phoneNumber].forEach((el) => {
      el.addEventListener('change', () => { displayData() })
    })

    displayData()

    const firstStepFrom = document.querySelector('.first-step-form')
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
  