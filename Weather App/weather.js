function toggleMenu() {
    var menu = document.getElementsByClassName("menu-dropdown")[0];
    menu.style.display == "none" ? menu.style.display = "block" : menu.style.display = "none";

    var location = document.getElementsByClassName("location-name")[0];
    var menuTab = document.getElementById("menu-location");
    location.textContent == "Philadelphia" ? menuTab.textContent = "Miami" : menuTab.textContent = "Philadelphia"
}

function toggleCity() {
    document.getElementsByClassName("menu-dropdown")[0].style.display = "none";
    var location = document.getElementsByClassName("location-name")[0];
    
    if (location.textContent == "Philadelphia") {
        location.textContent = "Miami";

        document.getElementsByClassName("left-side-philly")[0].style.display = "none";
        document.getElementsByClassName("left-side-miami")[0].style.display = "block";

        document.getElementsByClassName("right-side-philly")[0].style.display = "none";
        document.getElementsByClassName("right-side-miami")[0].style.display = "block";

        document.getElementsByClassName("bottom-div-philly")[0].style.display = "none";
        document.getElementsByClassName("bottom-div-miami")[0].style.display = "block";
    } else {
        location.textContent = "Philadelphia";

        document.getElementsByClassName("left-side-philly")[0].style.display = "block";
        document.getElementsByClassName("left-side-miami")[0].style.display = "none";

        document.getElementsByClassName("right-side-philly")[0].style.display = "block";
        document.getElementsByClassName("right-side-miami")[0].style.display = "none";

        document.getElementsByClassName("bottom-div-philly")[0].style.display = "block";
        document.getElementsByClassName("bottom-div-miami")[0].style.display = "none";
    }
  }