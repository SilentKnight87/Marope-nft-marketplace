// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyCH36zpWL9FmuBz5XYBkk8lARSG9FcSAqU",
    authDomain: "contactform-ffd55.firebaseapp.com",
    databaseURL: "https://contactform-ffd55-default-rtdb.firebaseio.com",
    projectId: "contactform-ffd55",
    storageBucket: "contactform-ffd55.appspot.com",
    messagingSenderId: "592102942031"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var subject = getInputVal('subject');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, subject, email, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, subject, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      subject:subject,
      email:email,
      message:message
    });
  }