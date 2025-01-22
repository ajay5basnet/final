document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var fullName = document.getElementById("fullName").value;
  var age = document.getElementById("age").value;
  var sex = document.querySelector('input[name="sex"]:checked');
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  var errorMessages = [];

  if (!fullName) {
    errorMessages.push("Please enter your full name.");
  }

  if (!age) {
    errorMessages.push("Please enter your age.");
  }

  if (!sex) {
    errorMessages.push("Please select your sex.");
  }

  if (!email) {
    errorMessages.push("Please enter your email address.");
  } else if (!validateEmail(email)) {
    errorMessages.push("Please enter a valid email address.");
  }

  if (!phone) {
    errorMessages.push("Please enter your phone number.");
  } else if (!validatePhone(phone)) {
    errorMessages.push("Please enter a valid 10-digit phone number.");
  }

  if (!address) {
    errorMessages.push("Please enter your address.");
  }

  if (!password) {
    errorMessages.push("Please enter a password.");
  } else if (!validatePassword(password)) {
    errorMessages.push("Password must be at least 8 characters long and contain at least one number.");
  }

  if (password !== confirmPassword) {
    errorMessages.push("Password and confirm password do not match.");
  }

  if (errorMessages.length > 0) {
    var errorContainer = document.createElement("div");
    errorContainer.classList.add("error");
    errorContainer.innerHTML = errorMessages.join("<br>");
    document.getElementById("registrationForm").appendChild(errorContainer);
  } else {
    // Registration successful
    alert("Registration successful!");
    // You can submit the form to a server here or perform any other necessary actions
  }
});

function validateEmail(email) {
  // Basic email validation
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePhone(phone) {
  // Basic 10-digit phone number validation
  var re = /^\d{10}$/;
  return re.test(phone);
}

function validatePassword(password) {
  // Password should be at least 8 characters long and contain at least one number
  var re = /^(?=.*\d).{8,}$/;
  return re.test(password);
}
