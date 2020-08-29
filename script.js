function idCard() {

  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var mailAddress = document.getElementById("address").value;
  var fullName = firstName + " " + lastName;
  var age = parseInt(document.getElementById("age").value);
  var phoneNumber = parseInt(document.getElementById("telephone").value);
  var numberArray = [];
  
  numberArray.push(age, phoneNumber);
    
  for (var i = 0; i < numberArray.length; i++) {
	if (numberArray[i] <= 100) {
	  document.getElementById("postAge").innerHTML = "Age: " + age;
	} else if (numberArray[i] > 100) {
	  document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;    	  
    }   
  }
  
  document.getElementById("postFullName").innerHTML = fullName;
  document.getElementById("postAddress").innerHTML = mailAddress;
}
