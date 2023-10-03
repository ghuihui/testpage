function validateForm(form) {
    var name = form.elements['demo-name'].value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    } else {
        return true;
    }
  }