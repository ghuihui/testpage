function validateForm() {
    let x = document.forms["formA"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }