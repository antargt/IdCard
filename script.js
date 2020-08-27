function idCard() {

  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var mailAddress = document.getElementById("address").value;
  var fullName = firstName + " " + lastName;
  
  
  document.getElementById("postFullName").innerHTML = fullName;
  document.getElementById("postAge").innerHTML = "Age: " + document.getElementById("age").value;
  document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + document.getElementById("telephone").value;
  document.getElementById("postAddress").innerHTML = mailAddress;
}
