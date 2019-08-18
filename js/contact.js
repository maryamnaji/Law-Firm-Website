function validate() {
  'use strict';

  console.log("in validate.");


  console.log("in validate.");
  var error = "Error! Please complete the form!";
  var name = $("#name").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var subject = $("#subject").val();
  var message = $("#message").val();
  var atPosition = email.indexOf("@");
  var emailLastPosition = (email.length) - 1;
  var output = $("#output");

  var isError = true;

  if (isError == false) {
    return true;
  } else {
    if ((name.length) == 0) {
      isError = false;
      error += " </br>* Name must be filled in!";
    }
    if ((subject.length) == 0) {
      isError = false;
      error += " </br>* Subject must be filled in!";
    }
    if ((email.length) == 0) {
      isError = false;
      error += " </br>* Email address must be filled in!";
    }
    if ((message.length) == 0) {
      isError = false;
      error += " </br>* Message must be filled in!";
    }
    if ((atPosition == 0) || (atPosition == emailLastPosition)) {
      isError = false;
      error += " </br>* Email address must contain the @ symbol anywhere except for the first or last character!";
    }
    if ((message.length < 20) || (message.length == 140)) {
      isError = false;
      error += " </br>* Message length must be between 20 and 140 characters inclusive!";
    }
    output.css("color", "#ff0000");
    output.html(error);
    return isError;
  }
};

function init() {
  'use strict';
  console.log("in init");

  var submitButton = $("#submit");
  submitButton.click(validate);

};

$(document).ready(init());
