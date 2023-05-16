window.onload = function() {
    // Get all the td elements
    var cells = document.getElementsByTagName("td");

    // Add event listener to each cell
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", cellClicked);
    }
};

function cellClicked() {
    // Handle cell click event here
    console.log("Cell clicked:", this);
}
