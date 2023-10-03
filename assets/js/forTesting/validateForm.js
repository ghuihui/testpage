function validateForm(form) {
    var name = form.demo-name;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    } else {
        return true;
    }
  }