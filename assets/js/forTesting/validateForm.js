function validateForm(form) {
    var test_name = form.elements['demo-name'].value;
    var test_email = form.elements['demo-email'].value;
    var test_dropDown = form.elements['demo-category'].value;
    var test_checkBox = form.elements['demo-human'].checked

    if (test_name === "") {
      alert("Fill out name!");
      return false;
    } else if (test_email === "") {
      alert("Fill out email!");
      return false;
    } else if (test_dropDown === "") {
      alert("Select dropDown!");
      return false;
    } else if (!test_checkBox){
      alert("Are you human???");
      return false;
    } else {
      return true;
    }
  }

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