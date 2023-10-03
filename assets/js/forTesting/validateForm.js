function validateForm(form) {
    var test_name = form.elements['demo-name'].value;
    var test_email = form.elements['demo-email'].value;
    var test_dropDown = form.elements['demo-category'].value;
    var test_radioButton = form.elements['demo-priority'].checked; 
    var test_checkBox = form.elements['demo-human'].checked

    if (test_name == "" || test_email == "" || test_dropDown == "" || !(test_radioButton) || !(test_checkBox)) {
      alert("Fill out required fields!");
      return false;
    } else {
        return true;
    }
  }