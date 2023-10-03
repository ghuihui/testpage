function validateForm2(form) {
    var test_name = form.elements['name'].value;
    var test_email = form.elements['email'].value;

    if (test_name == "" || test_email == "") {
      alert("Fill out required fields!");
      return false;
    } else {
        return true;
    }
  }