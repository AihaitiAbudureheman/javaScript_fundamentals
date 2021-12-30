function isEmpty() {
    const nameField = document.querySelector('#info');
    if (!nameField.value) {
      return true;
    } else {
      return false;
    }
  }
  
  const isFieldEmpty = isEmpty();
  
  if (isFieldEmpty) {
    alert('The nameField is required!');
  }