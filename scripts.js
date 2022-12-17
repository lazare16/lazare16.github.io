function myFunction(x) {
    x.classList.toggle("change");
    var x = document.getElementById("mobile-nav");
    if (x.style.display === "block") {
      x.style.display = "none";
      x.style.width = "0";
    } else {
      x.style.display = "block";
      x.style.width = "250px";
    }
  }

//   function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }