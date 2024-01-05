function toggleSubject(evt, subjectId) {
  var i, subjects, contentlinks;
  
  // Hide all subjects
  subjects = document.getElementsByClassName("subjects");
  for (i = 0; i < subjects.length; i++) {
    subjects[i].style.display = "none";
  }
  // Show the selected subject
  document.getElementById(subjectId).style.display = "block";

  // Remove "active" class from all buttons
  contentlinks = document.getElementsByClassName("contentlinks");
  for (i = 0; i < contentlinks.length; i++) {
    contentlinks[i].classList.remove("active");
  }

  // Add "active" class to the clicked button
  evt.currentTarget.className += " active";
}

export default toggleSubject;