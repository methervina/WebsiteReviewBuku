function domJS() {
  document.getElementById("ddown").classList.toggle("view");
}

window.onclick = function(event) {
  if (!event.target.matches('.dbutton')) {
    var dropdown = document.getElementsByClassName("dcontent");
    var i;
    for (i = 0; i < dropdown.length; i++) {
      var opndropdown = dropdown[i];
      if (opndropdown.classList.contains('view')) {
        opndropdown.classList.remove('view');
      }
    }
  }
}