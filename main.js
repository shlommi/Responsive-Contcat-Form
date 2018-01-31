// Initialize Firebase
var config = {
    apiKey: "AIzaSyCDu5aN63OBhSrLd1dcTKhfAn3fFNBeH8E",
    authDomain: "contactform-fa4a2.firebaseapp.com",
    databaseURL: "https://contactform-fa4a2.firebaseio.com",
    projectId: "contactform-fa4a2",
    storageBucket: "contactform-fa4a2.appspot.com",
    messagingSenderId: "373587177355"
  };
  firebase.initializeApp(config);

  //Reference messages collection

  let messagesRef = firebase.database().ref('messages');



//listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form 
function submitForm(e)   {
    e.preventDefault();

    //get values of inputs

    let name = getInputVal('name');
    let company = getInputVal('company');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');
    //save message
    saveMessage(name, company, email, phone, message);

    //show alert
    document.querySelector('.alert-message').style.display = 'block';

    //hide alert after 3 sec
    setTimeout(() => {
        document.querySelector('.alert-message').style.display = 'none';
    }, 3000);

    //clear form
    document.getElementById('contactForm').reset();
 } 

 // function to get form values
 function getInputVal(id) {
    return document.getElementById(id).value;
 }

 //save the message to firebase 
 function saveMessage(name, company, email, phone, message) {
     let newMessageRef = messagesRef.push();
     newMessageRef.set({
         name: name,
         company: company,
         email: email,
         phone: phone,
         message: message
     });
 }

