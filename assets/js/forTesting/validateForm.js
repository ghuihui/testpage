function validateForm(form) {
    var test_name = form.elements['demo-name'].value;
    var test_email = form.elements['demo-email'].value;
    var test_category = form.elements['demo-category'].value;

    if (name == "") {
      alert("Name must be filled out");
      return false;
    } else {
        return true;
    }
  }