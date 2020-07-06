window.onkeypress = function(event) {
//    event = event || window.event;
    if (event.keyCode === 13) {
        document.getElementById("test").color = "red";
    }
}