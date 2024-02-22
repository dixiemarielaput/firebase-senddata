const firebaseConfig = {
    apiKey: "AIzaSyCwPo_OLlBb4P81f8CRYNH_fCi2YEYJck8",
    authDomain: "senddata-firebase.firebaseapp.com",
    databaseURL: "https://senddata-firebase-default-rtdb.firebaseio.com",
    projectId: "senddata-firebase",
    storageBucket: "senddata-firebase.appspot.com",
    messagingSenderId: "185233524757",
    appId: "1:185233524757:web:5c7c5ed5e68e084cb9a61c"
  };
//initialize firebase
  firebase.initializeApp(firebaseConfig);
  var sendFormDB = firebase.database().ref("sendForm");

  document.getElementById("sendForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("sendForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newsendForm = sendFormDB.push();
  
    newsendForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };